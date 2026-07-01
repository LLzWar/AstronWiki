import React, { useMemo } from 'react';
import { Search, Box, BookOpen, ChevronRight } from 'lucide-react';
import { modsList } from '../data/modsList';
import { recipes } from '../data/recipes';

export default function WikiSearch({ query, onOpenRecipe, setActiveTab }) {
  const results = useMemo(() => {
    if (!query) return { mods: [], recipes: [] };
    const lowerQuery = query.toLowerCase();

    // 1. Search in Mods List
    const matchedMods = modsList.filter(mod => mod.toLowerCase().includes(lowerQuery));

    // 2. Search in Recipes Database
    const matchedRecipes = Object.keys(recipes).map(key => {
      const rec = recipes[key];
      return { id: key, ...rec };
    }).filter(rec => 
      rec.title.toLowerCase().includes(lowerQuery) || 
      rec.desc.toLowerCase().includes(lowerQuery) ||
      rec.machine.toLowerCase().includes(lowerQuery)
    );

    return { mods: matchedMods, recipes: matchedRecipes };
  }, [query]);

  if (!query) return null;

  return (
    <div className="doc-layout" style={{ maxWidth: '100%' }}>
      <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
        <h2 style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Search size={28} /> Resultados da Busca: "{query}"
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
          Pesquisando em {modsList.length} mods instalados e no banco de dados de receitas.
        </p>
      </div>

      {results.mods.length === 0 && results.recipes.length === 0 && (
        <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
          Nenhum resultado encontrado. Tente buscar por termos mais genéricos.
        </div>
      )}

      {/* RESULTADOS DE RECEITAS */}
      {results.recipes.length > 0 && (
        <section className="doc-section">
          <h3 className="doc-section-title"><BookOpen size={24}/> Receitas & Máquinas Encontradas</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {results.recipes.map((rec, i) => (
              <div key={i} style={{ 
                padding: '1rem', 
                backgroundColor: 'var(--bg-tertiary)', 
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{rec.title} <span style={{fontSize:'0.8rem', color:'var(--text-secondary)'}}>({rec.machine})</span></h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{rec.desc}</p>
                </div>
                <button 
                  className="craft-btn" 
                  onClick={() => onOpenRecipe(rec.id)}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', whiteSpace: 'nowrap' }}
                >
                  Ver Receita <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* RESULTADOS DE MODS */}
      {results.mods.length > 0 && (
        <section className="doc-section">
          <h3 className="doc-section-title"><Box size={24}/> Mods Instalados</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.5rem' }}>
            {results.mods.map((mod, i) => (
              <div key={i} style={{ 
                padding: '0.5rem 1rem', 
                backgroundColor: 'var(--bg-tertiary)', 
                border: '1px solid var(--border-color)', 
                borderRadius: '4px',
                fontSize: '0.9rem'
              }}>
                {mod}
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
            <button 
              className="craft-btn" 
              onClick={() => setActiveTab('modindex')}
            >
              Ver Mod Index Completo
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
