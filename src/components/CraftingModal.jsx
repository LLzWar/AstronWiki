import React, { useState } from 'react';
import { X, GitMerge } from 'lucide-react';
import { itemImages, recipes } from '../data/recipes';
import RecipeFlow from './RecipeFlow';

export default function CraftingModal({ recipeId, onClose }) {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'tree'
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
          <div className="crafting-grid">
            {recipe.grid.map((row, rIdx) => 
              row.map((item, cIdx) => (
                <div className="crafting-slot" key={`${rIdx}-${cIdx}`}>
                  {item && itemImages[item] ? (
                    <img src={itemImages[item]} alt={item} title={item} />
                  ) : (
                    item
                  )}
                </div>
              ))
            )}
          </div>
        ) : (
          <RecipeFlow recipe={recipe} recipeId={recipeId} />
        )}
      </div>
    </div>
  );
}
