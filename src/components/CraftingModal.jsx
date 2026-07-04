import React, { useState } from 'react';
import { X, GitMerge } from 'lucide-react';
import { itemImages, recipes } from '../data/recipes';
import RecipeFlow from './RecipeFlow';
import { useRecipes } from '../hooks/useRecipes';

const CraftingSlotItem = ({ item }) => {
  const { reverseMap, loading } = useRecipes();
  const [imageError, setImageError] = useState(false);
  
  if (!item || item.trim() === '') return null;

  const getInitials = (name) => {
    const words = name.replace(/[^a-zA-Z0-9\s]/g, '').split(/\s+/);
    if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
    return (words[0][0] + (words[1] ? words[1][0] : '')).toUpperCase();
  };

  const cleanName = item.replace(/\(.*?\)/g, '').trim().replace(/['\s-]+/g, '_').toLowerCase();
  
  // Reverse lookup: converts 'eye_of_ender' to 'minecraft:ender_eye' -> 'ender_eye'
  let internalId = cleanName;
  if (!loading) {
    const mapped = reverseMap[cleanName] || reverseMap[item.toLowerCase()];
    if (mapped) {
      internalId = mapped.split(':')[1] || mapped;
    }
  }

  const imgSrc = `/assets/items/${internalId}.png`;

  return (
    <>
      <img 
        src={imgSrc} 
        alt={item} 
        title={item}
        style={{ width: '100%', height: '100%', objectFit: 'contain', imageRendering: 'pixelated' }}
        onError={(e) => {
          if (!e.target.dataset.fallbackTried) {
             e.target.dataset.fallbackTried = "true";
             e.target.src = `https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.4/assets/minecraft/textures/item/${internalId}.png`;
          } else if (e.target.dataset.fallbackTried === "true") {
             e.target.dataset.fallbackTried = "block";
             e.target.src = `https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.4/assets/minecraft/textures/block/${internalId}.png`;
          } else {
             e.target.style.display = 'none';
             if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
          }
        }} 
      />
      <div style={{ display: 'none', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
        <span title={item} style={{ fontSize: '10px', fontWeight: 'bold', color: 'rgba(255,255,255,0.7)', textShadow: '1px 1px 0 #333' }}>
          {getInitials(item)}
        </span>
      </div>
    </>
  );
};

export default function CraftingModal({ recipeId, onClose }) {
  const [viewMode, setViewMode] = useState('grid');
  if (!recipeId || !recipes[recipeId]) return null;
  const recipe = recipes[recipeId];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <X size={20} />
        </button>
        <div className="card-mod">{recipe.mod}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 className="modal-title" style={{ marginBottom: 0 }}>{recipe.title}</h3>
          <button 
            onClick={() => setViewMode(prev => prev === 'grid' ? 'tree' : 'grid')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', padding: '0.5rem 1rem', borderRadius: '4px', color: 'var(--text-primary)', cursor: 'pointer' }}
          >
            <GitMerge size={16} /> {viewMode === 'grid' ? 'Ver Árvore' : 'Ver Grid'}
          </button>
        </div>
        <p className="modal-desc">{recipe.description}</p>
        
        {viewMode === 'grid' ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', justifyContent: 'center', background: '#c6c6c6', padding: '1rem 1.5rem', borderTop: '2px solid #ffffff', borderLeft: '2px solid #ffffff', borderBottom: '2px solid #555555', borderRight: '2px solid #555555', margin: '1rem auto', maxWidth: 'max-content' }}>
            <div className="crafting-grid" style={{ gridTemplateColumns: 'repeat(3, 36px)', gridTemplateRows: 'repeat(3, 36px)', gap: 0, padding: 0, background: 'transparent' }}>
              {recipe.grid.map((row, rIdx) => 
                row.map((item, cIdx) => (
                  <div className="crafting-slot" key={`${rIdx}-${cIdx}`} style={{ borderTop: '2px solid #373737', borderLeft: '2px solid #373737', borderBottom: '2px solid #ffffff', borderRight: '2px solid #ffffff', background: '#8b8b8b', width: '36px', height: '36px', padding: '2px', position: 'relative' }}>
                    <CraftingSlotItem item={item} />
                  </div>
                ))
              )}
            </div>
            {/* Adicionando a flecha e o output explicitamente */}
            <div style={{ fontSize: '32px', color: '#8b8b8b', fontWeight: 'bold' }}>➔</div>
            <div className="crafting-slot" style={{ borderTop: '2px solid #373737', borderLeft: '2px solid #373737', borderBottom: '2px solid #ffffff', borderRight: '2px solid #ffffff', background: '#8b8b8b', width: '54px', height: '54px', padding: '4px', position: 'relative' }}>
               <CraftingSlotItem item={recipe.title} />
            </div>
          </div>
        ) : (
          <RecipeFlow recipe={recipe} recipeId={recipeId} />
        )}
      </div>
    </div>
  );
}
