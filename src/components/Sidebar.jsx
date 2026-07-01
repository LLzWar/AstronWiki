import React, { useState } from 'react';
import { Home, Lightbulb, Backpack, Factory, Sparkles, Crown, Library, BookOpen, ChevronDown, ChevronRight, Folder } from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab }) {
  const [modsOpen, setModsOpen] = useState(true);
  const [warlordOpen, setWarlordOpen] = useState(true);

  const wikiTabs = [
    { id: 'home', icon: Home, label: 'Página Inicial' },
    { id: 'modindex', icon: Library, label: 'Mod Index' },
    { id: 'tips', icon: Lightbulb, label: 'Dicas de Progressão' }
  ];

  const modGuides = [
    { id: 'wiki-ae2', icon: BookOpen, label: 'AE2 & Add-ons' },
    { id: 'wiki-create', icon: BookOpen, label: 'Create Ecosystem' },
    { id: 'wiki-apotheosis', icon: BookOpen, label: 'Apothic Ecosystem' },
    { id: 'wiki-irons', icon: BookOpen, label: 'Iron\'s Spells & Sinergias' },
    { id: 'wiki-cataclysm', icon: BookOpen, label: 'Cataclysm & Integrations' },
    { id: 'wiki-powah', icon: BookOpen, label: 'Powah! (Energia)' },
    { id: 'wiki-silentgear', icon: BookOpen, label: 'Silent Gear & Gems' },
    { id: 'wiki-backpacks', icon: BookOpen, label: 'Sophisticated Backpacks' },
  ];

  const warlordTabs = [
    { id: 'early', icon: Backpack, label: 'Fase 1: Early Game' },
    { id: 'tech', icon: Factory, label: 'Fase 2: Tech' },
    { id: 'magic', icon: Sparkles, label: 'Fase 3: Magic' },
    { id: 'late', icon: Crown, label: 'Fase 4: Late Game' }
  ];

  return (
    <aside className="sidebar">
      <h1>Astron City</h1>
      
      {/* GERAL */}
      <div className="sidebar-group">
        <h2 className="sidebar-subtitle">Wiki Geral</h2>
        <nav className="nav-links">
          {wikiTabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                className={`nav-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* MODS (COLLAPSIBLE) */}
      <div className="sidebar-group" style={{marginTop: '1.5rem'}}>
        <button 
          className="nav-btn" 
          style={{width: '100%', display: 'flex', justifyContent: 'space-between', fontWeight: 600, color: 'var(--text-primary)'}}
          onClick={() => setModsOpen(!modsOpen)}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
            <Folder size={18} color="var(--accent-blue)" />
            Guias de Mods
          </div>
          {modsOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </button>
        
        {modsOpen && (
          <nav className="nav-links" style={{ paddingLeft: '1.5rem', marginTop: '0.25rem' }}>
            {modGuides.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  className={`nav-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  style={{ padding: '0.35rem 0.5rem', fontSize: '0.9rem' }}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        )}
      </div>

      {/* WARLORD'S PATH (COLLAPSIBLE) */}
      <div className="sidebar-group" style={{marginTop: '1.5rem'}}>
        <button 
          className="nav-btn" 
          style={{width: '100%', display: 'flex', justifyContent: 'space-between', fontWeight: 600, color: 'var(--text-primary)'}}
          onClick={() => setWarlordOpen(!warlordOpen)}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
            <Crown size={18} color="var(--accent-primary)" />
            Warlord's Path
          </div>
          {warlordOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </button>
        
        {warlordOpen && (
          <nav className="nav-links" style={{ paddingLeft: '1.5rem', marginTop: '0.25rem' }}>
            {warlordTabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  className={`nav-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  style={{ padding: '0.35rem 0.5rem', fontSize: '0.9rem' }}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        )}
      </div>
    </aside>
  );
}
