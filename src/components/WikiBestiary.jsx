import React, { useState } from 'react';
import { BESTIARY_DATA } from '../data/bestiaryData';
import { Skull, Sword, Shield, Crown, Flame, Droplet, Wind, Crosshair, Target, Activity, Sparkles, BookOpen, Zap } from 'lucide-react';

export default function WikiBestiary({ onOpenRecipe }) {
  const [activeFilter, setActiveFilter] = useState('all');

  // Grupos de filtros disponíveis baseados nos dados reais
  const filters = [
    { id: 'all', label: 'Todos os Mobs' },
    { id: 'cataclysm', label: "L'Ender's Cataclysm" },
    { id: 'ice_and_fire', label: "Ice and Fire" },
    { id: 'mowzies', label: "Mowzie's Mobs" },
    { id: 'apotheosis', label: "Apotheosis" },
    { id: 'irons', label: "Iron's Spells" }
  ];

  const filteredData = activeFilter === 'all' 
    ? BESTIARY_DATA 
    : BESTIARY_DATA.filter(mob => mob.mod === activeFilter);

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
      <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Skull size={28} /> O Grande Bestiário
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
          Estatísticas exatas, mecânicas e tabela de espólios completos (Drops) de todas as feras de Astron City.
        </p>
        
        {/* FILTERS */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
          {filters.map(f => (
            <button 
              key={f.id}
              className={`bestiary-filter-btn ${activeFilter === f.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {filteredData.length === 0 && (
          <p style={{ color: 'var(--text-secondary)' }}>Nenhum monstro encontrado para este filtro.</p>
        )}

        {filteredData.map(mob => {
          const IconComponent = mob.icon || Skull; // Fallback icon
          
          return (
            <section key={mob.id} className="doc-section mobile-col" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', margin: 0 }}>
              <div style={{ flex: 1 }}>
                <h3 className="doc-section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <IconComponent size={24} />
                  {mob.name}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {mob.modName}
                </p>
                <p className="doc-text"><strong>Lore:</strong> {mob.lore}</p>
                
                <ul className="doc-list" style={{ marginTop: '1rem' }}>
                  <li><strong>Estatísticas:</strong> {mob.stats.hp} | {mob.stats.type}</li>
                  
                  {mob.itemsNeeded && mob.itemsNeeded.length > 0 && (
                    <li>
                      <strong>Como Encontrar:</strong> 
                      {mob.itemsNeeded.map((item, idx) => (
                        <button key={idx} className="craft-btn" onClick={() => onOpenRecipe(item.id)} style={{ marginLeft: '0.5rem' }}>
                          {item.name}
                        </button>
                      ))}
                    </li>
                  )}
                  
                  <li><strong>Mecânicas Letais:</strong> {mob.mechanics}</li>
                </ul>

                <div style={{ marginTop: '1.5rem', backgroundColor: 'var(--bg-primary)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Tabela de Drops</h4>
                  <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {mob.drops.map((drop, idx) => (
                      <li key={idx} style={{ paddingBottom: '0.5rem', borderBottom: '1px dashed var(--border-color)' }}>
                        <span style={{ color: 'var(--accent-blue)', fontWeight: 'bold' }}>{drop.name}</span>
                        <span className={`drop-tag ${getRarityClass(drop.rarity)}`}>{getRarityLabel(drop.rarity)}</span>
                        {drop.desc && <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{drop.desc}</p>}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {mob.image && (
                <div style={{ width: '280px', flexShrink: 0 }}>
                  <img 
                    src={mob.image} 
                    alt={mob.name} 
                    style={{ 
                      width: '100%', 
                      height: 'auto', 
                      objectFit: 'contain', 
                      borderRadius: '8px', 
                      filter: mob.mod === 'cataclysm' ? 'drop-shadow(0 0 10px rgba(255, 60, 0, 0.3))' : 'drop-shadow(0 0 10px rgba(100, 100, 100, 0.3))'
                    }} 
                  />
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
