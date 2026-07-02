import React from 'react';
import { X, ArrowRight, Info, Hammer } from 'lucide-react';
import { useRecipes } from '../hooks/useRecipes';

export default function ItemModal({ item, onClose }) {
  const { recipesByResult, recipesByUsage, idMap, reverseMap, loading } = useRecipes();

  if (!item) return null;

  // Render Image Helper
  const getItemImage = (slugName) => {
    if (!slugName) return null;
    return `/assets/items/${slugName}.png`;
  };

  const getInternalId = (slugName) => {
    return reverseMap[slugName] || null;
  };

  const getSlugFromInternal = (internalId) => {
    // "minecraft:iron_ingot" -> "barra_de_ferro"
    // Also handle tags like { "tag": "forge:ingots/iron" } by guessing or just returning null
    if (typeof internalId === 'object' && internalId.tag) {
      // Very basic tag resolving
      const parts = internalId.tag.split('/');
      return parts[parts.length - 1]; // "iron" - might not work, but better than crash
    }
    if (typeof internalId === 'object' && internalId.item) {
      return idMap[internalId.item];
    }
    return idMap[internalId];
  };

  const internalId = getInternalId(item.id);
  const modId = internalId ? internalId.split(':')[0] : 'Desconhecido';
  const modName = modId.charAt(0).toUpperCase() + modId.slice(1);

  // O(1) Instant lookups using pre-computed indexes
  const myRecipes = internalId ? (recipesByResult[internalId] || []) : [];
  const usageRecipes = internalId ? (recipesByUsage[internalId] || []) : [];

  const renderIngredient = (ing) => {
    if (!ing) return null;
    if (Array.isArray(ing)) ing = ing[0]; // Just show the first valid tag option
    const slug = getSlugFromInternal(ing);
    if (!slug) return <div className="unknown-item">?</div>;
    return <img src={getItemImage(slug)} alt={slug} title={slug} style={{ width: '100%', height: '100%', objectFit: 'contain', imageRendering: 'pixelated' }} />;
  };

  const renderGrid = (recipe) => {
    if (recipe.type === 'minecraft:crafting_shaped') {
      const grid = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ];
      recipe.pattern.forEach((row, rIdx) => {
        for (let cIdx = 0; cIdx < row.length; cIdx++) {
          const char = row[cIdx];
          if (char !== ' ' && recipe.key[char]) {
            grid[rIdx][cIdx] = recipe.key[char];
          }
        }
      });
      return (
        <div className="crafting-grid" style={{ marginBottom: '1rem' }}>
          {grid.map((row, r) => row.map((cell, c) => (
            <div key={`cell-${r}-${c}`} className="crafting-slot" style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.4)', width: '40px', height: '40px', padding: '4px' }}>
              {renderIngredient(cell)}
            </div>
          )))}
        </div>
      );
    }
    
    if (recipe.type === 'minecraft:crafting_shapeless') {
      return (
        <div className="crafting-grid" style={{ marginBottom: '1rem', gridTemplateColumns: 'repeat(3, 40px)', gap: '4px' }}>
          {recipe.ingredients.map((ing, idx) => (
            <div key={`shapeless-${idx}`} className="crafting-slot" style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.4)', width: '40px', height: '40px', padding: '4px' }}>
              {renderIngredient(ing)}
            </div>
          ))}
        </div>
      );
    }

    if (recipe.type === 'minecraft:smelting' || recipe.type === 'minecraft:blasting') {
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <div className="crafting-slot" style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.4)', width: '40px', height: '40px', padding: '4px' }}>
            {renderIngredient(recipe.ingredient)}
          </div>
          <ArrowRight size={24} color="var(--accent-primary)" />
          <div className="crafting-slot" style={{ border: '1px solid var(--accent-primary)', background: 'rgba(0,0,0,0.4)', width: '40px', height: '40px', padding: '4px' }}>
            {renderIngredient({item: recipe.result})}
          </div>
        </div>
      );
    }

    return <div style={{color: '#888'}}>Formato de receita não suportado ({recipe.type})</div>;
  };

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px', width: '90%', maxHeight: '85vh', overflowY: 'auto' }}>
        <button className="close-btn" onClick={onClose}>
          <X size={20} />
        </button>
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1.5rem' }}>
          <div style={{ width: '80px', height: '80px', background: 'rgba(0,0,0,0.5)', borderRadius: '12px', padding: '10px', border: '1px solid var(--accent-primary)', boxShadow: '0 0 20px rgba(88, 166, 255, 0.2)' }}>
            <img src={getItemImage(item.id)} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain', imageRendering: 'pixelated' }} />
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.8rem', color: 'var(--text-primary)' }}>{item.name}</h2>
            <div style={{ color: 'var(--accent-blue)', fontSize: '0.9rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Info size={16} /> Mod: {modName} <span style={{color: '#555'}}>({internalId})</span>
            </div>
          </div>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>Carregando 17.000 receitas...</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Como Craftar */}
            <div>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                <Hammer size={20} /> Como Fazer
              </h3>
              {myRecipes.length > 0 ? (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
                  {myRecipes.slice(0, 10).map((r, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ fontSize: '0.8rem', color: '#888', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{r.type.split(':')[1]}</div>
                      {renderGrid(r)}
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ color: '#666', fontStyle: 'italic' }}>Nenhuma receita de crafting table/fornalha encontrada para este item.</p>
              )}
            </div>

            {/* Onde Usar */}
            <div>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                <ArrowRight size={20} /> Onde Usar (Ingrediente)
              </h3>
              {usageRecipes.length > 0 ? (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  {usageRecipes.slice(0, 24).map((r, i) => {
                    const slug = getSlugFromInternal(r.result);
                    if (!slug) return null;
                    return (
                      <div key={i} title={r.result} style={{ width: '40px', height: '40px', background: 'rgba(0,0,0,0.5)', padding: '4px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <img src={getItemImage(slug)} style={{ width: '100%', height: '100%', objectFit: 'contain', imageRendering: 'pixelated' }} />
                      </div>
                    );
                  })}
                  {usageRecipes.length > 24 && <div style={{ alignSelf: 'center', color: '#888', fontSize: '0.9rem' }}>+ {usageRecipes.length - 24} receitas...</div>}
                </div>
              ) : (
                <p style={{ color: '#666', fontStyle: 'italic' }}>Este item não é usado em nenhuma receita básica.</p>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
