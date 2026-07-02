import React, { useState, useMemo } from 'react';
import { Skull, Filter, ChevronDown, ChevronUp, Target } from 'lucide-react';
import { MOBS_DATA } from '../data/mobsData';

export default function WikiMobs() {
  const [activeMod, setActiveMod] = useState('all');
  const [expandedMobId, setExpandedMobId] = useState(null);

  // Extract unique mods for filtering
  const availableMods = useMemo(() => {
    const mods = new Set(MOBS_DATA.map(mob => mob.mod));
    return ['all', ...Array.from(mods)];
  }, []);

  const getModDisplayName = (modId) => {
    if (modId === 'all') return 'Todos';
    const mob = MOBS_DATA.find(m => m.mod === modId);
    return mob ? mob.modName : modId;
  };

  const filteredMobs = useMemo(() => {
    if (activeMod === 'all') return MOBS_DATA;
    return MOBS_DATA.filter(mob => mob.mod === activeMod);
  }, [activeMod]);

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

  const toggleExpand = (id) => {
    setExpandedMobId(prev => prev === id ? null : id);
  };

  return (
    <div className="doc-layout" style={{ maxWidth: '100%' }}>
      <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Target size={32} /> Bestiário de Mobs Comuns
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
          Lista condensada de criaturas ameaçadoras, úteis e elementais de todos os biomas. Clique em um mob para revelar seus detalhes.
        </p>
      </div>

      {/* FILTER PILLS */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <Filter size={20} color="var(--text-secondary)" style={{ marginRight: '0.5rem' }} />
        {availableMods.map(mod => (
          <button
            key={mod}
            onClick={() => {
              setActiveMod(mod);
              setExpandedMobId(null); // Recolhe todos ao trocar filtro
            }}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              border: '1px solid',
              borderColor: activeMod === mod ? 'var(--accent-primary)' : 'var(--border-color)',
              backgroundColor: activeMod === mod ? 'var(--bg-tertiary)' : 'transparent',
              color: activeMod === mod ? 'var(--accent-primary)' : 'var(--text-secondary)',
              cursor: 'pointer',
              fontWeight: activeMod === mod ? 'bold' : 'normal',
              transition: 'all 0.2s ease'
            }}
          >
            {getModDisplayName(mod)}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {filteredMobs.map((mob) => {
          const Icon = mob.icon;
          const isExpanded = expandedMobId === mob.id;

          return (
            <div 
              key={mob.id} 
              style={{ 
                backgroundColor: isExpanded ? 'var(--bg-tertiary)' : 'var(--bg-secondary)', 
                border: '1px solid var(--border-color)', 
                borderRadius: '8px',
                overflow: 'hidden',
                transition: 'all 0.2s ease'
              }}
            >
              {/* ACCORDION HEADER */}
              <div 
                onClick={() => toggleExpand(mob.id)}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  padding: '1rem',
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
                  <Icon size={24} color={isExpanded ? 'var(--accent-primary)' : 'var(--accent-blue)'} />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 'bold', fontSize: '1.1rem' }}>{mob.name}</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase' }}>{mob.modName}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="badge" style={{ backgroundColor: 'var(--bg-primary)' }}>{mob.stats.hp}</span>
                  {isExpanded ? <ChevronUp size={20} color="var(--text-secondary)" /> : <ChevronDown size={20} color="var(--text-secondary)" />}
                </div>
              </div>

              {/* ACCORDION CONTENT */}
              {isExpanded && (
                <div style={{ padding: '0 1rem 1rem 1rem', borderTop: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '1rem' }}>
                    
                    {/* INFO COLUMN */}
                    <div style={{ flex: '1 1 400px' }}>
                      <p style={{ color: 'var(--text-primary)', fontStyle: 'italic', marginBottom: '1rem', fontSize: '0.95rem' }}>
                        "{mob.lore}"
                      </p>
                      
                      <div style={{ marginBottom: '1rem' }}>
                        <span className="badge" style={{ backgroundColor: 'var(--bg-primary)' }}>Tipo: {mob.stats.type}</span>
                      </div>

                      <div>
                        <strong style={{ color: 'var(--accent-primary)', fontSize: '0.9rem' }}>Mecânicas & Comportamento:</strong>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem', lineHeight: '1.5' }}>
                          {mob.mechanics}
                        </p>
                      </div>
                    </div>

                    {/* LOOT COLUMN */}
                    <div style={{ flex: '1 1 300px', backgroundColor: 'var(--bg-primary)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                      <strong style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                        Tabela de Drops
                      </strong>
                      <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {mob.drops.map((drop, idx) => (
                          <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: idx < mob.drops.length -1 ? '1px dotted var(--border-color)' : 'none', paddingBottom: idx < mob.drops.length -1 ? '0.5rem' : '0' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                              <span style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>{drop.name}</span>
                              {drop.desc && <span style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>{drop.desc}</span>}
                            </div>
                            <span className={`drop-tag ${getRarityClass(drop.rarity)}`} style={{ marginLeft: '1rem' }}>
                              {getRarityLabel(drop.rarity)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
