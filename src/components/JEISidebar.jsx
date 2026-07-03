import React, { useState, useMemo, useEffect, useDeferredValue } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Search } from 'lucide-react';
import { recipes } from '../data/recipes';
import { BESTIARY_DATA } from '../data/bestiaryData';
import { MOBS_DATA } from '../data/mobsData';

// Helper component for each item to handle image loading and fallback
const JeiItemCell = ({ item, onClick }) => {
  const [imageError, setImageError] = useState(false);
  
  const getInitials = (name) => {
    if (!name) return '??';
    const words = name.replace(/[^a-zA-Z0-9\s]/g, '').split(/\s+/);
    if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
    return (words[0][0] + (words[1] ? words[1][0] : '')).toUpperCase();
  };

  const initials = getInitials(item.name);
  
  // Since allItems.json gives us exact filenames in item.id, we use that if available!
  const fileName = item.id || item.name.replace(/\(.*?\)/g, '').trim().replace(/['\s-]+/g, '_').toLowerCase();
  const imgSrc = `/assets/items/${fileName}.png`;

  let borderColor = 'rgba(255,255,255,0.1)';
  if (item.rarity === 'legendary') borderColor = 'rgba(210, 153, 34, 0.5)';
  if (item.rarity === 'rare') borderColor = 'rgba(49, 139, 250, 0.5)';
  if (item.rarity === 'guaranteed') borderColor = 'rgba(35, 134, 54, 0.5)';

  return (
    <div 
      className="jei-item"
      title={item.name}
      onClick={() => onClick(item)}
      style={{ borderColor }}
    >
      {!imageError ? (
        <img 
            src={imgSrc} 
            alt={item.name} 
            onError={() => setImageError(true)} 
            style={{ width: '28px', height: '28px', objectFit: 'cover', objectPosition: 'top', imageRendering: 'pixelated' }}
          />
      ) : (
        initials
      )}
    </div>
  );
};

export default function JEISidebar({ setSearchQuery, onOpenItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [jeiQuery, setJeiQuery] = useState('');
  const deferredQuery = useDeferredValue(jeiQuery);
  const [currentPage, setCurrentPage] = useState(1);
  const [allItemsDB, setAllItemsDB] = useState([]);

  const [itemsPerPage, setItemsPerPage] = useState(120);

  // Calcula quantos itens cabem na tela perfeitamente sem gerar barra de rolagem
  useEffect(() => {
    const updatePagination = () => {
      // Subtraindo headers, padding, margin, barra de pesquisa e setas
      const availableHeight = window.innerHeight - 240; 
      const rows = Math.max(1, Math.floor(availableHeight / 44));
      setItemsPerPage(rows * 6); // 6 colunas
    };

    updatePagination();
    window.addEventListener('resize', updatePagination);
    return () => window.removeEventListener('resize', updatePagination);
  }, []);

  // Load the massive extracted database asynchronously
  useEffect(() => {
    fetch('/data/allItems.json')
      .then(res => res.json())
      .then(data => setAllItemsDB(data))
      .catch(err => console.error("Failed to load massive JEI DB", err));
  }, []);

  // 1. Build a unique registry combining our manual database with the massive extracted DB
  const jeiRegistry = useMemo(() => {
    const itemsMap = new Map();

    // 1.1 Add all ~18.000 extracted items first
    allItemsDB.forEach(i => {
      itemsMap.set(i.name.toLowerCase(), { id: i.id, name: i.name, type: 'all', rarity: 'common' });
    });

    // 1.2 Overwrite/Add from manual recipes to get correct rarities & types
    Object.keys(recipes).forEach(k => {
      const rec = recipes[k];
      if (rec.title) itemsMap.set(rec.title.toLowerCase(), { name: rec.title, type: 'recipe' });
      
      if (rec.grid) {
        rec.grid.forEach(row => {
          row.forEach(item => {
            if (item && item.trim() !== '') {
              const lower = item.toLowerCase();
              if (!itemsMap.has(lower)) itemsMap.set(lower, { name: item, type: 'ingredient', rarity: 'common' });
            }
          });
        });
      }
    });

    BESTIARY_DATA.forEach(mob => mob.drops.forEach(drop => {
      const lower = drop.name.toLowerCase();
      // If the item exists in massive DB, we just update its rarity, otherwise create new
      const existing = itemsMap.get(lower);
      itemsMap.set(lower, existing ? { ...existing, rarity: drop.rarity } : { name: drop.name, type: 'drop', rarity: drop.rarity });
    }));

    MOBS_DATA.forEach(mob => mob.drops.forEach(drop => {
      const lower = drop.name.toLowerCase();
      const existing = itemsMap.get(lower);
      itemsMap.set(lower, existing ? { ...existing, rarity: drop.rarity } : { name: drop.name, type: 'drop', rarity: drop.rarity });
    }));

    // Sort alphabetically by name
    return Array.from(itemsMap.values()).sort((a, b) => a.name.localeCompare(b.name));
  }, [allItemsDB]);

  // 2. Filter based on local JEI Query
  const filteredItems = useMemo(() => {
    if (!deferredQuery) return jeiRegistry;
    const lowerQuery = deferredQuery.toLowerCase();
    return jeiRegistry.filter(item => item.name.toLowerCase().includes(lowerQuery));
  }, [jeiRegistry, deferredQuery]);

  // Reset page to 1 when query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [jeiQuery]);

  // Pagination Logic
  const totalPages = Math.max(1, Math.ceil(filteredItems.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  const handleItemClick = (item) => {
    onOpenItem(item);
  };

  return (
    <aside className={`jei-sidebar ${isOpen ? 'open' : ''}`}>
      {/* Toggle Button */}
      <div className="jei-toggle-btn" onClick={() => setIsOpen(!isOpen)} title="Just Enough Items">
        {isOpen ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
      </div>

      {/* Grid Container */}
      <div className="jei-grid-container" style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden', padding: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', flex: 1, textAlign: 'center' }}>
            {filteredItems.length.toLocaleString()} Itens Encontrados
          </div>
          <button 
            className="mobile-only-flex"
            onClick={() => setIsOpen(false)}
            style={{ background: 'transparent', border: '1px solid var(--border-color)', borderRadius: '4px', color: 'var(--text-primary)', padding: '0.2rem 0.5rem', display: 'none' }}
          >
            Fechar
          </button>
        </div>
        
        <div className="jei-grid" style={{ flex: 1, alignContent: 'start' }}>
          {currentItems.map((item, idx) => (
            <JeiItemCell key={`${item.name}-${idx}`} item={item} onClick={handleItemClick} />
          ))}
        </div>
      </div>

      {/* Pagination Controls (Bottom of Grid, Always Visible) */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', padding: '1rem 0.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(13, 17, 23, 0.95)', backdropFilter: 'blur(10px)' }}>
          <button 
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className={`hover-scale ${currentPage !== 1 ? 'hover-highlight' : ''}`}
            style={{ 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '40px', height: '40px', borderRadius: '50%',
              background: currentPage === 1 ? 'rgba(255,255,255,0.02)' : 'rgba(88,166,255,0.1)', 
              border: `1px solid ${currentPage === 1 ? 'rgba(255,255,255,0.05)' : 'rgba(88,166,255,0.3)'}`, 
              color: currentPage === 1 ? '#444' : 'var(--accent-blue)', 
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s', boxShadow: currentPage !== 1 ? '0 0 10px rgba(88,166,255,0.1)' : 'none'
            }}
          >
            <ChevronLeft size={22} />
          </button>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '2px' }}>Página</span>
            <span style={{ color: 'var(--text-primary)', fontFamily: 'monospace', fontSize: '1.1rem', fontWeight: 'bold' }}>
              {currentPage} <span style={{ color: '#555', fontWeight: 'normal', margin: '0 4px' }}>/</span> {totalPages}
            </span>
          </div>

          <button 
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className={`hover-scale ${currentPage !== totalPages ? 'hover-highlight' : ''}`}
            style={{ 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '40px', height: '40px', borderRadius: '50%',
              background: currentPage === totalPages ? 'rgba(255,255,255,0.02)' : 'rgba(88,166,255,0.1)', 
              border: `1px solid ${currentPage === totalPages ? 'rgba(255,255,255,0.05)' : 'rgba(88,166,255,0.3)'}`, 
              color: currentPage === totalPages ? '#444' : 'var(--accent-blue)', 
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s', boxShadow: currentPage !== totalPages ? '0 0 10px rgba(88,166,255,0.1)' : 'none'
            }}
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}

      {/* Search Input */}
      <div className="jei-search-wrapper" style={{ padding: '1rem', background: 'rgba(13, 17, 23, 0.95)', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
        <input 
          type="text" 
          placeholder="Pesquisar no WebJEI..."
          value={jeiQuery}
          onChange={(e) => setJeiQuery(e.target.value)}
          style={{
            width: '100%',
            background: 'rgba(0,0,0,0.4)',
            border: '1px solid rgba(88,166,255,0.2)',
            borderRadius: '8px',
            color: 'var(--text-primary)',
            padding: '0.75rem 1rem 0.75rem 2.5rem',
            fontFamily: 'inherit',
            fontSize: '0.95rem',
            outline: 'none',
            transition: 'all 0.2s',
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)'
          }}
          onFocus={(e) => { e.target.style.borderColor = 'rgba(88,166,255,0.6)'; e.target.style.boxShadow = '0 0 10px rgba(88,166,255,0.1)'; }}
          onBlur={(e) => { e.target.style.borderColor = 'rgba(88,166,255,0.2)'; e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.5)'; }}
        />
        <Search size={18} color="rgba(88,166,255,0.5)" style={{ position: 'absolute', left: '1.75rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
      </div>
    </aside>
  );
}
