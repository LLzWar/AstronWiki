import React, { useState } from 'react';
import { X, GitMerge } from 'lucide-react';
import { itemImages, recipes } from '../data/recipes';
import RecipeFlow from './RecipeFlow';

const CraftingSlotItem = ({ item }) => {
  const [imageError, setImageError] = useState(false);
  
  if (!item || item.trim() === '') return null;

  const getInitials = (name) => {
    const words = name.replace(/[^a-zA-Z0-9\s]/g, '').split(/\s+/);
    if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
    return (words[0][0] + (words[1] ? words[1][0] : '')).toUpperCase();
  };

  const fileName = item.replace(/\(.*?\)/g, '').trim().replace(/['\s-]+/g, '_').toLowerCase();
  const imgSrc = `/assets/items/${fileName}.png`;

  return (
    <>
      {!imageError ? (
        <img 
          src={imgSrc} 
          alt={item} 
          title={item}
          onError={() => setImageError(true)} 
        />
      ) : (
        <span title={item} style={{ fontSize: '14px', fontWeight: 'bold', color: 'rgba(255,255,255,0.7)' }}>
          {getInitials(item)}
        </span>
      )}
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
            <div className="crafting-grid">
              {recipe.grid.map((row, rIdx) => 
                row.map((item, cIdx) => (
                  <div className="crafting-slot" key={`${rIdx}-${cIdx}`}>
                    <CraftingSlotItem item={item} />
                  </div>
                ))
              )}
            </div>
            {/* Adicionando a flecha e o output explicitamente (aparentemente faltava e gerou a confusão) */}
            <div style={{ fontSize: '24px', color: 'rgba(255,255,255,0.5)' }}>➔</div>
            <div className="crafting-slot" style={{ width: '56px', height: '56px' }}>
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
