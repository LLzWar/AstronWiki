import React, { useMemo } from 'react';
import { Search, Box, BookOpen, Skull, ChevronRight } from 'lucide-react';
import Fuse from 'fuse.js';
import { modsList } from '../data/modsList';
import { recipes } from '../data/recipes';
import { BESTIARY_DATA } from '../data/bestiaryData';
import { MOBS_DATA } from '../data/mobsData';

export default function WikiSearch({ query, onOpenRecipe, setActiveTab }) {
  const results = useMemo(() => {
    if (!query) return { mods: [], recipes: [], loot: [] };

    // 1. Search in Mods List (Fuzzy)
    const modsFuse = new Fuse(modsList, { threshold: 0.4 });
    const matchedMods = modsFuse.search(query).map(res => res.item);

    // 2. Search in Recipes Database (Fuzzy)
    const recipesArray = Object.keys(recipes).map(key => ({ id: key, ...recipes[key] }));
    const recipesFuse = new Fuse(recipesArray, { 
      keys: ['title', 'description', 'machine'], 
      threshold: 0.4 
    });
    const matchedRecipes = recipesFuse.search(query).map(res => res.item);

    // 3. Search in Bestiary (Loot & Mobs) (Fuzzy)
    const matchedLoot = [];
    
    const checkMob = (mob, sourceTab) => {
      const dropsFuse = new Fuse(mob.drops, { keys: ['name'], threshold: 0.4 });
      const matchedDrops = dropsFuse.search(query).map(res => res.item);
      
      const mobFuse = new Fuse([mob.name], { threshold: 0.4 });
      const isMobMatch = mobFuse.search(query).length > 0;
      
      if (isMobMatch || matchedDrops.length > 0) {
        matchedLoot.push({
          mobName: mob.name,
          modName: mob.modName,
          sourceTab: sourceTab,
          matchedDrops: matchedDrops.length > 0 ? matchedDrops : mob.drops
        });
      }
    };

    BESTIARY_DATA.forEach(mob => checkMob(mob, 'bestiary'));
    MOBS_DATA.forEach(mob => checkMob(mob, 'mobs'));

    return { mods: matchedMods, recipes: matchedRecipes, loot: matchedLoot };
  }, [query]);

  if (!query) return null;

  const getRarityClass = (rarity) => {
    switch(rarity) {
      case 'guaranteed': return 'drop-guaranteed';
      case 'rare': return 'drop-rare';
      case 'legendary': return 'drop-legendary';
      case 'common':
      default: return 'drop-common';
    }
  };

  const getRarityLabel = (rarity) => {
    switch(rarity) {
      case 'guaranteed': return 'Garantido';
      case 'rare': return 'Raro';
      case 'legendary': return 'Lendário';
      case 'common':
      default: return 'Comum';
    }
  };

  return (
    <div className="doc-layout" style={{ maxWidth: '100%' }}>
      <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
        <h2 style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Search size={28} /> Resultados da Busca: "{query}"
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
          Varrendo receitas de itens e tabelas de loot de criaturas.
        </p>
      </div>

      {results.mods.length === 0 && results.recipes.length === 0 && results.loot.length === 0 && (
        <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
          Nenhum item, receita ou drop encontrado para este termo.
        </div>
      )}

      {/* RESULTADOS DE LOOT (BESTIÁRIO) */}
      {results.loot.length > 0 && (
        <section className="doc-section">
          <h3 className="doc-section-title"><Skull size={24}/> Fontes de Loot (Mundo e Monstros)</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
            {results.loot.map((lootItem) => (
              <div key={lootItem.mobName + lootItem.modName} className="wiki-card" style={{ padding: '1rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                    Obtido em: {lootItem.mobName}
                  </h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
                    Mod: {lootItem.modName}
                  </span>
                </div>
                <div style={{ marginTop: '0.5rem', flex: 1 }}>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Drops Relacionados:</strong>
                  <ul style={{ listStyleType: 'none', padding: 0, marginTop: '0.5rem' }}>
                    {lootItem.matchedDrops.map((drop) => (
                      <li key={drop.name} style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ color: 'var(--accent-blue)', fontSize: '0.9rem' }}>{drop.name}</span>
                        <span className={`drop-tag ${getRarityClass(drop.rarity)}`} style={{ marginLeft: 'auto', fontSize: '0.65rem' }}>
                          {getRarityLabel(drop.rarity)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button 
                  className="nav-btn" 
                  style={{ marginTop: '1rem', backgroundColor: 'var(--bg-tertiary)', justifyContent: 'center' }}
                  onClick={() => setActiveTab(lootItem.sourceTab)}
                >
                  Estudar na Enciclopédia <ChevronRight size={16}/>
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* RESULTADOS DE RECEITAS */}
      {results.recipes.length > 0 && (
        <section className="doc-section">
          <h3 className="doc-section-title"><BookOpen size={24}/> Receitas & Máquinas Encontradas</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {results.recipes.map(rec => (
              <div key={rec.id} className="wiki-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.25rem' }}>{rec.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Usado em: <strong>{rec.machine}</strong> | Tempo: {rec.time || 'N/A'}
                  </p>
                </div>
                <button 
                  className="nav-btn" 
                  style={{ backgroundColor: 'var(--bg-tertiary)' }}
                  onClick={() => onOpenRecipe(rec.id)}
                >
                  Ver Receita <ChevronRight size={16}/>
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* RESULTADOS DE MODS */}
      {results.mods.length > 0 && (
        <section className="doc-section">
          <h3 className="doc-section-title"><Box size={24}/> Mods Encontrados ({results.mods.length})</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {results.mods.map(mod => (
              <span key={mod} style={{ backgroundColor: 'var(--bg-tertiary)', padding: '0.5rem 1rem', borderRadius: '4px', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}>
                {mod}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
