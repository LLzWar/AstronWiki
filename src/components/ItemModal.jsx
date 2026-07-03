import React, { useMemo } from 'react';
import { X, ArrowRight, Info, Hammer, Flame, Skull, Package, Box, ShieldAlert } from 'lucide-react';
import { useRecipes } from '../hooks/useRecipes';
import { BESTIARY_DATA } from '../data/bestiaryData';
import { MOBS_DATA } from '../data/mobsData';

export default function ItemModal({ item, onClose, onNavigate, onOpenWebJEI }) {
  const { recipesByResult, recipesByUsage, idMap, reverseMap, loading } = useRecipes();

  // Combine both bestiary and mob data
  const ALL_ENTITIES = useMemo(() => [...BESTIARY_DATA, ...MOBS_DATA], []);

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
    if (typeof internalId === 'object' && internalId.tag) {
      const tag = internalId.tag;
      const parts = tag.split('/');
      let name = parts[parts.length - 1]; 
      if (name.includes(':')) name = name.split(':')[1];
      let category = parts.length > 1 ? parts[parts.length - 2].split(':').pop() : tag.split(':').pop(); 

      let result = name;
      if (name === 'redstone' && category === 'dusts') result = 'redstone';
      else if (name === 'glowstone' && category === 'dusts') result = 'glowstone_dust';
      else if (category === 'planks') result = 'oak_planks';
      else if (category === 'logs') result = 'oak_log';
      else if (category === 'wool') result = 'white_wool';
      else if (category === 'glass_blocks') result = 'glass';
      else if (category === 'bookshelves') result = 'bookshelf';
      else if (name === 'ender_pearls' || category === 'ender_pearls') result = 'ender_pearl';
      else if (name === 'strings' || category === 'strings') result = 'string';
      else if (name === 'bones' || category === 'bones') result = 'bone';
      else if (category === 'ingots') result = name + '_ingot';
      else if (category === 'dusts') result = name + '_dust';
      else if (category === 'nuggets') result = name + '_nugget';
      else if (category === 'gems') {
         if (name === 'amethyst') result = 'amethyst_shard';
         else result = name;
      }
      else if (category === 'storage_blocks') {
         if (['copper', 'iron', 'gold', 'diamond', 'emerald', 'redstone', 'coal'].includes(name)) result = name + '_block';
         else result = 'block_of_' + name;
      }
      else if (category === 'dyes') result = name + '_dye';
      else if (category === 'tanks' || category === 'fluid_tanks') {
         result = name.endsWith('s') ? name.slice(0, -1) : name;
      }
      else if (['honeycombs', 'hives', 'campfires', 'chests', 'beds', 'fences', 'fence_gates', 'saplings', 'leaves', 'shears', 'shear'].includes(name)) {
         if (name === 'hives') result = 'advanced_oak_beehive';
         else if (name === 'leaves') result = 'oak_leaves';
         else if (name === 'shears' || name === 'shear') result = 'shears';
         else result = name.endsWith('s') ? name.slice(0, -1) : name;
      }
      
      if (result && typeof result === 'string' && result.includes(':')) result = result.split(':')[1];
      return result;
    }
    if (typeof internalId === 'object' && internalId.item) {
      const itm = idMap[internalId.item] || internalId.item;
      return (itm && typeof itm === 'string' && itm.includes(':')) ? itm.split(':')[1] : itm;
    }
    const mapped = idMap[internalId] || internalId;
    return (mapped && typeof mapped === 'string' && mapped.includes(':')) ? mapped.split(':')[1] : mapped;
  };

  const internalId = getInternalId(item.id);
  const modId = internalId ? internalId.split(':')[0] : 'Desconhecido';
  const modName = modId.charAt(0).toUpperCase() + modId.slice(1);

  const myRecipes = internalId ? (recipesByResult[internalId] || []) : [];
  const usageRecipes = internalId ? (recipesByUsage[internalId] || []) : [];
  
  const craftingRecipes = myRecipes.filter(r => r.type === 'minecraft:crafting_shaped' || r.type === 'minecraft:crafting_shapeless');
  const smeltingRecipes = myRecipes.filter(r => r.type.includes('smelting') || r.type.includes('blasting') || r.type.includes('smoking') || r.type.includes('campfire'));
  const otherRecipes = myRecipes.filter(r => !r.type.includes('crafting') && !r.type.includes('smelting') && !r.type.includes('blasting') && !r.type.includes('smoking') && !r.type.includes('campfire'));

  const mobDroppers = ALL_ENTITIES.filter(m => m.drops && m.drops.some(d => d.name.toLowerCase().includes(item.name.toLowerCase())));

  const renderIngredient = (ing) => {
    if (!ing) return null;
    if (Array.isArray(ing)) ing = ing[0];
    const slug = getSlugFromInternal(ing);
    if (!slug) return <div className="unknown-item">?</div>;

    // Resolve o nome para o onClick (navegação infinita)
    let displayName = slug;
    let originalId = slug;
    if (typeof ing === 'object' && ing.item) {
        originalId = ing.item;
        const itm = idMap[ing.item];
        if (itm) displayName = itm.name || slug;
    } else if (typeof ing === 'string') {
        originalId = ing;
        const mapped = idMap[ing];
        if (mapped) displayName = mapped.name || slug;
    }

    return (
      <div 
        style={{ position: 'relative', width: '100%', height: '100%', cursor: onOpenWebJEI ? 'pointer' : 'default' }} 
        title={displayName}
        onClick={() => {
            if (onOpenWebJEI) onOpenWebJEI({ id: originalId, name: displayName });
        }}
      >
        <img 
          src={getItemImage(slug)} 
          alt={slug} 
          style={{ width: '100%', height: '100%', objectFit: 'contain', imageRendering: 'pixelated' }} 
          onError={(e) => {
            // Sistema robusto de fallback para itens Vanilla ausentes usando o CDN oficial do Minecraft Assets
            if (!e.target.dataset.fallbackTried) {
               e.target.dataset.fallbackTried = "true";
               e.target.src = `https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.4/assets/minecraft/textures/item/${slug}.png`;
            } else if (e.target.dataset.fallbackTried === "true") {
               e.target.dataset.fallbackTried = "block";
               e.target.src = `https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.4/assets/minecraft/textures/block/${slug}.png`;
            } else {
               e.target.style.display = 'none';
               if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
            }
          }}
        />
        <div style={{ display: 'none', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(255,255,255,0.05)', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', overflow: 'hidden' }}>
          <span style={{ fontSize: '7px', color: '#aaa', wordBreak: 'break-all', textAlign: 'center', lineHeight: '1', padding: '2px' }}>
            {slug.substring(0, 10)}
          </span>
        </div>
      </div>
    );
  };

  const ResultSlot = ({ resultId, count }) => (
    <div style={{ position: 'relative' }}>
      <div className="crafting-slot" style={{ borderTop: '2px solid #373737', borderLeft: '2px solid #373737', borderBottom: '2px solid #ffffff', borderRight: '2px solid #ffffff', background: '#8b8b8b', width: '54px', height: '54px', padding: '4px' }}>
        {renderIngredient({item: resultId})}
      </div>
      {count > 1 && (
        <span style={{ position: 'absolute', bottom: '0px', right: '0px', color: '#ffffff', textShadow: '2px 2px 0 #3f3f3f', fontSize: '1rem', fontWeight: 'bold', zIndex: 10 }}>
          {count}
        </span>
      )}
    </div>
  );

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
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', background: '#c6c6c6', padding: '1rem 1.5rem', borderTop: '2px solid #ffffff', borderLeft: '2px solid #ffffff', borderBottom: '2px solid #555555', borderRight: '2px solid #555555' }}>
          <div className="crafting-grid" style={{ gridTemplateColumns: 'repeat(3, 36px)', gap: 0, padding: 0, background: 'transparent' }}>
            {grid.map((row, r) => row.map((cell, c) => (
              <div key={`cell-${r}-${c}`} className="crafting-slot" style={{ borderTop: '2px solid #373737', borderLeft: '2px solid #373737', borderBottom: '2px solid #ffffff', borderRight: '2px solid #ffffff', background: '#8b8b8b', width: '36px', height: '36px', padding: '2px' }}>
                {renderIngredient(cell)}
              </div>
            )))}
          </div>
          <ArrowRight size={32} color="#8b8b8b" strokeWidth={3} />
          <ResultSlot resultId={recipe.result} count={recipe.count || 1} />
        </div>
      );
    }
    
    if (recipe.type === 'minecraft:crafting_shapeless') {
      return (
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', background: '#c6c6c6', padding: '1rem 1.5rem', borderTop: '2px solid #ffffff', borderLeft: '2px solid #ffffff', borderBottom: '2px solid #555555', borderRight: '2px solid #555555' }}>
          <div className="crafting-grid" style={{ gridTemplateColumns: 'repeat(3, 36px)', gap: 0, padding: 0, background: 'transparent', alignContent: 'start' }}>
            {recipe.ingredients.map((ing, idx) => (
              <div key={`shapeless-${idx}`} className="crafting-slot" style={{ borderTop: '2px solid #373737', borderLeft: '2px solid #373737', borderBottom: '2px solid #ffffff', borderRight: '2px solid #ffffff', background: '#8b8b8b', width: '36px', height: '36px', padding: '2px' }}>
                {renderIngredient(ing)}
              </div>
            ))}
          </div>
          <ArrowRight size={32} color="#8b8b8b" strokeWidth={3} />
          <ResultSlot resultId={recipe.result} count={recipe.count || 1} />
        </div>
      );
    }

    if (recipe.type.includes('smelting') || recipe.type.includes('blasting') || recipe.type.includes('smoking') || recipe.type.includes('campfire')) {
      return (
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', background: '#c6c6c6', padding: '1rem 1.5rem', borderTop: '2px solid #ffffff', borderLeft: '2px solid #ffffff', borderBottom: '2px solid #555555', borderRight: '2px solid #555555' }}>
          <div className="crafting-slot" style={{ borderTop: '2px solid #373737', borderLeft: '2px solid #373737', borderBottom: '2px solid #ffffff', borderRight: '2px solid #ffffff', background: '#8b8b8b', width: '36px', height: '36px', padding: '2px' }}>
            {renderIngredient(recipe.ingredient)}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
            <Flame size={24} color="#555555" />
            <ArrowRight size={32} color="#8b8b8b" strokeWidth={3} />
            <span style={{ fontSize: '0.65rem', color: '#555555', textTransform: 'uppercase', fontWeight: 'bold' }}>{recipe.type.split(':')[1].replace('crafting_', '')}</span>
          </div>
          <ResultSlot resultId={recipe.result} count={recipe.count || 1} />
        </div>
      );
    }

    if (recipe.type === 'minecraft:smithing_transform') {
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: '#c6c6c6', padding: '1rem 1.5rem', borderTop: '2px solid #ffffff', borderLeft: '2px solid #ffffff', borderBottom: '2px solid #555555', borderRight: '2px solid #555555' }}>
          <div className="crafting-slot" style={{ borderTop: '2px solid #373737', borderLeft: '2px solid #373737', borderBottom: '2px solid #ffffff', borderRight: '2px solid #ffffff', background: '#8b8b8b', width: '36px', height: '36px', padding: '2px', position: 'relative' }}>
            {renderIngredient(recipe.template)}
            <span style={{position:'absolute', bottom: -18, left: 0, right: 0, textAlign: 'center', fontSize: '0.6rem', color: '#333333', fontWeight: 'bold'}}>Molde</span>
          </div>
          <span style={{color: '#555555', fontWeight: 'bold'}}>+</span>
          <div className="crafting-slot" style={{ borderTop: '2px solid #373737', borderLeft: '2px solid #373737', borderBottom: '2px solid #ffffff', borderRight: '2px solid #ffffff', background: '#8b8b8b', width: '36px', height: '36px', padding: '2px', position: 'relative' }}>
            {renderIngredient(recipe.base)}
            <span style={{position:'absolute', bottom: -18, left: 0, right: 0, textAlign: 'center', fontSize: '0.6rem', color: '#333333', fontWeight: 'bold'}}>Base</span>
          </div>
          <span style={{color: '#555555', fontWeight: 'bold'}}>+</span>
          <div className="crafting-slot" style={{ borderTop: '2px solid #373737', borderLeft: '2px solid #373737', borderBottom: '2px solid #ffffff', borderRight: '2px solid #ffffff', background: '#8b8b8b', width: '36px', height: '36px', padding: '2px', position: 'relative' }}>
            {renderIngredient(recipe.addition)}
            <span style={{position:'absolute', bottom: -18, left: 0, right: 0, textAlign: 'center', fontSize: '0.6rem', color: '#333333', fontWeight: 'bold'}}>Mat.</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem', marginLeft: '0.5rem', marginRight: '0.5rem' }}>
            <Hammer size={24} color="#555555" />
            <ArrowRight size={32} color="#8b8b8b" strokeWidth={3} />
          </div>
          <ResultSlot resultId={recipe.result} count={recipe.count || 1} />
        </div>
      );
    }

    return <div style={{color: '#888'}}>Formato não suportado: {recipe.type}</div>;
  };

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px', width: '95%', maxHeight: '90vh', overflowY: 'auto', padding: 0, background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '16px', boxShadow: '0 20px 50px rgba(0,0,0,0.8)' }}>
        
        {/* CABEÇALHO PREMIUM */}
        <div style={{ position: 'relative', background: 'linear-gradient(135deg, rgba(88,166,255,0.1) 0%, rgba(0,0,0,0) 100%)', padding: '2rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <button className="close-btn" onClick={onClose} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,255,255,0.1)', padding: '6px', borderRadius: '50%', color: 'var(--text-secondary)' }}>
            <X size={20} />
          </button>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div style={{ width: '96px', height: '96px', background: 'rgba(0,0,0,0.6)', borderRadius: '16px', padding: '16px', border: '1px solid rgba(88,166,255,0.3)', boxShadow: '0 0 30px rgba(88, 166, 255, 0.15)', flexShrink: 0 }}>
              <img src={getItemImage(item.id)} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain', imageRendering: 'pixelated' }} />
            </div>
            <div>
              <h2 style={{ margin: 0, fontSize: '2.2rem', color: 'var(--text-primary)', fontWeight: 800, letterSpacing: '-0.5px' }}>{item.name}</h2>
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                <span style={{ background: 'rgba(88,166,255,0.1)', color: 'var(--accent-blue)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px', border: '1px solid rgba(88,166,255,0.2)' }}>
                  <Package size={14} /> {modName}
                </span>
                <span style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <Box size={14} /> ID: {internalId || 'N/A'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CORPO DO MODAL */}
        <div style={{ padding: '2rem' }}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-secondary)' }}>
              <div className="spin-animation" style={{ margin: '0 auto 1rem', width: '32px', height: '32px', border: '3px solid var(--border-color)', borderTopColor: 'var(--accent-blue)', borderRadius: '50%' }}></div>
              Sincronizando 17.000 dados...
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              
              {/* SESSÃO: COMO FABRICAR */}
              {(craftingRecipes.length > 0 || otherRecipes.length > 0) && (
                <section>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.75rem', fontSize: '1.3rem' }}>
                    <Hammer size={24} color="var(--accent-blue)" /> Fabricação
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                    {craftingRecipes.slice(0, 8).map((r, i) => (
                      <div key={i}>{renderGrid(r)}</div>
                    ))}
                    {otherRecipes.slice(0, 4).map((r, i) => (
                      <div key={'other'+i}>{renderGrid(r)}</div>
                    ))}
                  </div>
                </section>
              )}

              {/* SESSÃO: FORNALHA */}
              {smeltingRecipes.length > 0 && (
                <section>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.75rem', fontSize: '1.3rem' }}>
                    <Flame size={24} color="#e67e22" /> Processos Térmicos
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                    {smeltingRecipes.slice(0, 8).map((r, i) => (
                      <div key={i}>{renderGrid(r)}</div>
                    ))}
                  </div>
                </section>
              )}

              {/* SESSÃO: DROPS DE MOBS */}
              {mobDroppers.length > 0 && (
                <section>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.75rem', fontSize: '1.3rem' }}>
                    <Skull size={24} color="var(--danger)" /> Obtido ao Derrotar
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1rem' }}>
                    {mobDroppers.map((mob, idx) => {
                      const IconComponent = mob.icon || ShieldAlert;
                      return (
                        <div key={idx} 
                          onClick={() => {
                            if (onNavigate) {
                              onClose();
                              onNavigate('bestiary');
                              setTimeout(() => {
                                window.location.hash = '#' + mob.id;
                                const el = document.getElementById(mob.id);
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                              }, 150);
                            }
                          }}
                          style={{ cursor: onNavigate ? 'pointer' : 'default', display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px', transition: 'background 0.2s' }} className="hover-highlight">
                          <div style={{ width: '56px', height: '56px', flexShrink: 0, background: 'rgba(0,0,0,0.5)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                            {mob.image ? (
                               <img src={mob.image} alt={mob.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            ) : (
                               <IconComponent size={28} color="var(--text-secondary)" />
                            )}
                          </div>
                          <div>
                            <h4 style={{ margin: '0 0 0.4rem 0', color: 'var(--text-primary)', fontSize: '1.05rem' }}>{mob.name}</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                              {mob.drops.filter(d => d.name.toLowerCase().includes(item.name.toLowerCase())).map((d, i) => (
                                <span key={i} className={`drop-tag drop-${d.rarity}`} style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '10px' }}>
                                  Drop: {d.rarity === 'guaranteed' ? 'Garantido' : d.rarity === 'legendary' ? 'Lendário' : d.rarity === 'rare' ? 'Raro' : 'Comum'}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              )}

              {/* SESSÃO: ONDE USAR */}
              {usageRecipes.length > 0 && (
                <section>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.75rem', fontSize: '1.3rem' }}>
                    <Info size={24} color="var(--text-secondary)" /> Utilizado Em
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {usageRecipes.slice(0, 48).map((r, i) => {
                      const slug = getSlugFromInternal(r.result);
                      if (!slug) return null;
                      return (
                        <div key={i} title={r.result} style={{ width: '48px', height: '48px', background: 'rgba(0,0,0,0.5)', padding: '6px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', transition: 'transform 0.2s', cursor: 'pointer' }} className="hover-scale">
                          <img src={getItemImage(slug)} style={{ width: '100%', height: '100%', objectFit: 'contain', imageRendering: 'pixelated' }} />
                        </div>
                      );
                    })}
                    {usageRecipes.length > 48 && <div style={{ alignSelf: 'center', color: '#888', fontSize: '0.9rem', paddingLeft: '1rem' }}>+ {usageRecipes.length - 48} usos...</div>}
                  </div>
                </section>
              )}

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
