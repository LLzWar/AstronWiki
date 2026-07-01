import React, { useMemo } from 'react';
import { modsList } from '../data/modsList';
import { Box, Layers } from 'lucide-react';

export default function WikiModIndex() {
  const groupedMods = useMemo(() => {
    const rawMods = [...modsList];
    const groups = [
      { name: 'Applied Energistics 2', coreKeywords: ['appliedenergistics2'], keywords: ['ae2', 'applied', 'megacells', 'merequester'] },
      { name: 'Create', coreKeywords: ['create'], keywords: ['create', 'railways', 'sliceanddice'] },
      { name: 'Apotheosis', coreKeywords: ['apotheosis'], keywords: ['apothic'] },
      { name: 'Iron\'s Spells', coreKeywords: ['irons spellbooks'], keywords: ['irons'] },
      { name: 'Sophisticated Mods', coreKeywords: ['sophisticatedcore', 'sophisticatedbackpacks'], keywords: ['sophisticated'] },
      { name: 'Farmer\'s Delight', coreKeywords: ['farmersdelight'], keywords: ['delight'] },
      { name: 'L\'Ender\'s Cataclysm', coreKeywords: ['cataclysm'], keywords: ['cataclysm'] },
      { name: 'Silent Gear', coreKeywords: ['silent gear'], keywords: ['silent', 'sgear'] },
      { name: 'Draconic Evolution', coreKeywords: ['draconic evolution'], keywords: ['draconic', 'brandon'] },
      { name: 'FTB Ecosystem', coreKeywords: ['ftb library'], keywords: ['ftb '] },
      { name: 'Productive Mods', coreKeywords: ['productivebees'], keywords: ['productive'] },
      { name: 'KubeJS', coreKeywords: ['kubejs neoforge'], keywords: ['kubejs', 'rhino'] },
      { name: 'Jade', coreKeywords: ['jade'], keywords: ['jade'] },
      { name: 'Performance & Libs', coreKeywords: ['sodium neoforge'], keywords: ['sodium', 'iris', 'ferritecore', 'lithium', 'modernfix', 'immediatelyfast', 'entityculling', 'lib', 'api', 'core', 'config', 'architectury', 'balm', 'bookshelf', 'cloth', 'curios', 'geckolib', 'owo', 'puzzles', 'framework', 'util'] }
    ];

    const result = [];
    const assigned = new Set();

    // Encontrar os Cores
    groups.forEach(g => {
      const groupData = { name: g.name, core: [], addons: [] };
      rawMods.forEach(mod => {
        if (g.coreKeywords.some(ck => mod.toLowerCase().includes(ck))) {
          groupData.core.push(mod);
          assigned.add(mod);
        }
      });
      result.push({ ...g, data: groupData });
    });

    // Encontrar Addons
    rawMods.forEach(mod => {
      if (assigned.has(mod)) return;
      
      for (const g of result) {
        if (g.keywords.some(k => mod.toLowerCase().includes(k))) {
          g.data.addons.push(mod);
          assigned.add(mod);
          break;
        }
      }
    });

    // Independentes
    const independent = rawMods.filter(m => !assigned.has(m)).sort();
    
    // Formatar saida
    const finalGroups = result.filter(g => g.data.core.length > 0 || g.data.addons.length > 0).map(g => g.data);
    finalGroups.push({ name: 'Independent Mods', core: [], addons: independent });

    return finalGroups;
  }, []);

  return (
    <div className="doc-layout" style={{ maxWidth: '100%' }}>
      <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
        <h2 style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Box size={28} /> Mod Index ({modsList.length} Mods)
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
          Listagem completa de todos os mods instalados, organizados por dependência e ecossistema.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {groupedMods.map((group, idx) => (
          <div key={idx} style={{ 
            backgroundColor: 'var(--bg-secondary)', 
            border: '1px solid var(--border-color)', 
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <h3 style={{ color: group.name === 'Independent Mods' ? 'var(--text-secondary)' : 'var(--accent-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Layers size={20} />
              {group.name}
            </h3>
            
            {group.core.length > 0 && (
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase' }}>Representante / Core:</strong>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {group.core.map((coreMod, i) => (
                    <span key={i} style={{ backgroundColor: 'rgba(35, 134, 54, 0.2)', color: '#2ea043', padding: '0.25rem 0.75rem', borderRadius: '4px', border: '1px solid rgba(35, 134, 54, 0.4)', fontSize: '0.9rem' }}>
                      {coreMod}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {group.addons.length > 0 && (
              <div>
                {group.name !== 'Independent Mods' && <strong style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase' }}>Add-ons & Co-relacionados:</strong>}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.5rem' }}>
                  {group.addons.map((addon, i) => (
                    <div key={i} style={{ 
                      padding: '0.4rem 0.75rem', 
                      backgroundColor: 'var(--bg-tertiary)', 
                      border: '1px solid var(--border-color)', 
                      borderRadius: '4px',
                      fontSize: '0.85rem',
                      color: 'var(--text-primary)'
                    }}>
                      {addon}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
