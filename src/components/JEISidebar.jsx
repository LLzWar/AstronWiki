import React, { useState, useMemo, useEffect, useDeferredValue } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
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

  const ITEMS_PER_PAGE = 120; // Like in Minecraft

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
  const totalPages = Math.max(1, Math.ceil(filteredItems.length / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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
      <div className="jei-grid-container" style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '1rem', textAlign: 'center' }}>
          {filteredItems.length.toLocaleString()} Itens Encontrados
        </div>
        
        <div className="jei-grid" style={{ flex: 1, alignContent: 'start' }}>
          {currentItems.map((item, idx) => (
            <JeiItemCell key={`${item.name}-${idx}`} item={item} onClick={handleItemClick} />
          ))}
        </div>

        {/* Pagination Controls (Bottom of Grid) */}
        {totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '1rem', padding: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <button 
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              style={{ background: 'transparent', border: 'none', color: currentPage === 1 ? '#555' : '#fff', cursor: currentPage === 1 ? 'default' : 'pointer' }}
            >
              <ChevronLeft size={20} />
            </button>
            <span style={{ color: 'var(--text-primary)', fontFamily: 'monospace', fontSize: '0.9rem' }}>
              {currentPage} / {totalPages}
            </span>
            <button 
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              style={{ background: 'transparent', border: 'none', color: currentPage === totalPages ? '#555' : '#fff', cursor: currentPage === totalPages ? 'default' : 'pointer' }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      {/* Search Input */}
      <div className="jei-search-wrapper">
        <input 
          type="text" 
          className="jei-search-input"
          placeholder="Search..."
          value={jeiQuery}
          onChange={(e) => setJeiQuery(e.target.value)}
        />
      </div>
    </aside>
  );
}
