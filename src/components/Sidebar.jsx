import React, { useState } from 'react';
import { Home, Lightbulb, Backpack, Factory, Sparkles, Crown, Library, BookOpen, Book, ChevronDown, ChevronRight, Folder, Search, Moon, Sun, Skull } from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, theme, setTheme, searchQuery, setSearchQuery }) {
  const [modsOpen, setModsOpen] = useState(true);
  const [warlordOpen, setWarlordOpen] = useState(true);
  const [guidesOpen, setGuidesOpen] = useState(true);

  const wikiTabs = [
    { id: 'home', icon: Home, label: 'Página Inicial' },
    { id: 'modindex', icon: Library, label: 'Mod Index' },
    { id: 'bestiary', icon: Skull, label: 'Bestiário (Bosses)' },
    { id: 'dimensions', icon: Sparkles, label: 'Guia de Dimensões' }
  ];

  const modGuides = [
    { id: 'ae2', icon: Book, label: 'AE2 Completo', type: 'md' },
    { id: 'cataclysm', icon: Book, label: 'Cataclysm Completo', type: 'md' },
    { id: 'gear', icon: Book, label: 'Guia de Gear', type: 'md' },
    { id: 'mi', icon: Book, label: 'Modern Industrialization', type: 'md' },
    { id: 'oritech', icon: Book, label: 'Oritech Completo', type: 'md' },
    { id: 'create', icon: BookOpen, label: 'Create Ecosystem', type: 'react' },
    { id: 'apotheosis', icon: BookOpen, label: 'Apothic Ecosystem', type: 'react' },
    { id: 'irons', icon: BookOpen, label: 'Iron\'s Spells & Sinergias', type: 'react' },
    { id: 'powah', icon: BookOpen, label: 'Powah! (Energia)', type: 'react' },
    { id: 'silentgear', icon: BookOpen, label: 'Silent Gear & Gems', type: 'react' },
    { id: 'backpacks', icon: BookOpen, label: 'Sophisticated Backpacks', type: 'react' },
  ];

  const warlordTabs = [
    { id: 'early', icon: Backpack, label: 'Fase 1: Early Game' },
    { id: 'tech', icon: Factory, label: 'Fase 2: Tech' },
    { id: 'magic', icon: Sparkles, label: 'Fase 3: Magic' },
    { id: 'late', icon: Crown, label: 'Fase 4: Late Game' }
  ];

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'warlord' : 'dark');
  };

  return (
    <aside className="sidebar">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src="/assets/logo.png" alt="Astron City Logo" style={{ width: '32px', height: '32px', borderRadius: '8px' }} />
          <h1 style={{ paddingBottom: 0, borderBottom: 'none' }}>Astron City</h1>
        </div>
        <button onClick={toggleTheme} className="nav-btn" style={{ padding: '0.5rem' }} title="Alternar Tema (Dark / Warlord)">
          {theme === 'dark' ? <Moon size={20} /> : <Crown size={20} color="var(--accent-primary)" />}
        </button>
      </div>
      
      {/* SEARCH BAR */}
      <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
        <Search size={16} style={{ position: 'absolute', left: '0.75rem', top: '0.85rem', color: 'var(--text-secondary)' }} />
        <input 
          type="text" 
          placeholder="Buscar mods ou itens..." 
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ paddingLeft: '2.5rem' }}
        />
      </div>
      
      {/* GERAL */}
      <div className="sidebar-group">
        <h2 className="sidebar-subtitle">Wiki Geral</h2>
        <nav className="nav-links">
          {wikiTabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                className={`nav-btn ${activeTab === tab.id && !searchQuery ? 'active' : ''}`}
                onClick={() => { setActiveTab(tab.id); setSearchQuery(''); }}
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
                  className={`nav-btn ${activeTab === tab.id && !searchQuery ? 'active' : ''}`}
                  onClick={() => { setActiveTab(tab.id); setSearchQuery(''); }}
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
                  className={`nav-btn ${activeTab === tab.id && !searchQuery ? 'active' : ''}`}
                  onClick={() => { setActiveTab(tab.id); setSearchQuery(''); }}
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
