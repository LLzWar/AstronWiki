import React from 'react';
import { X } from 'lucide-react';
import { itemImages, recipes } from '../data/recipes';

export default function CraftingModal({ recipeId, onClose }) {
  if (!recipeId || !recipes[recipeId]) return null;
  const recipe = recipes[recipeId];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <X size={20} />
        </button>
        <div className="card-mod">{recipe.mod}</div>
        <h3 className="modal-title">{recipe.title}</h3>
        <p className="modal-desc">{recipe.description}</p>
        
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
      </div>
    </div>
  );
}
