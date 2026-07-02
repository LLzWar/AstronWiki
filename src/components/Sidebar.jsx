import React, { useState, useEffect } from 'react';
import { Home, Lightbulb, Backpack, Factory, Sparkles, Crown, Library, BookOpen, Book, ChevronDown, ChevronRight, Folder, Search, Moon, Sun, Skull, List, Target } from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, theme, setTheme, searchQuery, setSearchQuery }) {
  const [modsOpen, setModsOpen] = useState(true);
  const [warlordOpen, setWarlordOpen] = useState(true);
  const [tocData, setTocData] = useState({});
  const [collapsedTocs, setCollapsedTocs] = useState({});

  const wikiTabs = [
    { id: 'home', icon: Home, label: 'Página Inicial' },
    { id: 'modindex', icon: Library, label: 'Mod Index' },
    { id: 'bestiary', icon: Skull, label: 'Bestiário (Bosses)' },
    { id: 'mobs', icon: Target, label: 'Bestiário (Mobs)' },
    { id: 'dimensions', icon: Sparkles, label: 'Guia de Dimensões' }
  ];

  const modGuides = [
    { id: 'ae2', logoUrl: '/assets/logos/ae2.png', label: 'AE2 Completo', type: 'md' },
    { id: 'cataclysm', logoUrl: '/assets/logos/cataclysm.png', label: 'Cataclysm Completo', type: 'md' },
    { id: 'ice_and_fire', logoUrl: '/assets/logos/ice-and-fire.png', label: 'Ice and Fire: Dragons', type: 'md' },
    { id: 'gear', logoUrl: '/assets/logos/silent-gear.png', label: 'Silent Gear (Completo)', type: 'md' },
    { id: 'mi', logoUrl: '/assets/logos/modern-industrialization.png', label: 'Modern Industrialization', type: 'md' },
    { id: 'oritech', logoUrl: '/assets/logos/oritech.png', label: 'Oritech Completo', type: 'md' },
    { id: 'create', logoUrl: '/assets/logos/create.png', label: 'Create Ecosystem', type: 'md' },
    { id: 'apotheosis', logoUrl: '/assets/logos/apotheosis.png', label: 'Apothic Ecosystem', type: 'react' },
    { id: 'irons_spells', logoUrl: '/assets/logos/irons-spells-n-spellbooks.png', label: 'Iron\'s Spells & Sinergias', type: 'md' },
    { id: 'powah', logoUrl: '/assets/logos/powah.png', label: 'Powah! (Energia)', type: 'react' },
    { id: 'silentgear', logoUrl: '/assets/logos/silent-gear.png', label: 'Silent Gear & Gems', type: 'react' },
    { id: 'backpacks', logoUrl: '/assets/logos/sophisticated-backpacks.png', label: 'Sophisticated Backpacks', type: 'react' },
  ];

  const warlordTabs = [
    { id: 'early', icon: Backpack, label: 'Fase 1: Sobrevivência & Sangue' },
    { id: 'tech', icon: Factory, label: 'Fase 2: Despertar de Poder' },
    { id: 'magic', icon: Sparkles, label: 'Fase 3: A Singularidade' },
    { id: 'late', icon: Crown, label: 'Fase 4: Imortalidade' }
  ];

  useEffect(() => {
    const fetchTocs = async () => {
      const newToc = {};
      const mdGuides = modGuides.filter(g => g.type === 'md');
      for (const guide of mdGuides) {
        try {
          const res = await fetch(`/docs/${guide.id}.md`);
          const text = await res.text();
          
          const headings = [];
          const regex = /^##\s+(.*)$/gm;
          let match;
          while ((match = regex.exec(text)) !== null) {
            const title = match[1].trim();
            // Ignora o bloco escrito "Sumário" que o autor possa ter deixado
            if (title.toLowerCase() === 'sumario' || title.toLowerCase() === 'sumário') continue;
            
            // Simula o comportamento exato do rehype-slug (github-slugger)
            const slug = title.toLowerCase().replace(/[^\w\s\-áàãâéèêíïóôõöúçñ]/g, '').trim().replace(/\s+/g, '-');
            headings.push({ title, id: `#${slug}` });
          }
          
          if (headings.length > 0) {
            newToc[guide.id] = headings;
          }
        } catch (e) {
          console.error('Failed to fetch TOC for', guide.id, e);
        }
      }
      setTocData(newToc);
    };
    fetchTocs();
  }, []);

  const themeTimerRef = React.useRef(null);

  const handleThemePress = () => {
    themeTimerRef.current = setTimeout(() => {
      setTheme('warlord');
      themeTimerRef.current = null;
    }, 3000); // 3 seconds to unlock
  };

  const handleThemeRelease = () => {
    if (themeTimerRef.current) {
      clearTimeout(themeTimerRef.current);
      themeTimerRef.current = null;
      // Short click: toggle between dark and light
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }
  };

  return (
    <aside className="sidebar">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src="/assets/logo.png" alt="Astron City Logo" style={{ width: '32px', height: '32px', borderRadius: '8px' }} />
          <h1 style={{ paddingBottom: 0, borderBottom: 'none' }}>Astron City</h1>
        </div>
        <button 
          onMouseDown={handleThemePress}
          onMouseUp={handleThemeRelease}
          onMouseLeave={handleThemeRelease}
          onTouchStart={handleThemePress}
          onTouchEnd={handleThemeRelease}
          className="nav-btn" 
          style={{ padding: '0.5rem', transition: 'all 0.3s' }} 
          title="Alternar Tema"
        >
          {theme === 'light' ? <Sun size={20} /> : theme === 'dark' ? <Moon size={20} /> : <Crown size={20} color="var(--accent-primary)" />}
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
              const hasToc = tocData[tab.id] && tocData[tab.id].length > 0;
              const isActive = activeTab === tab.id;
              
              return (
                <div key={tab.id} style={{ marginBottom: '0.25rem' }}>
                  <button
                    className={`nav-btn ${isActive && !searchQuery ? 'active' : ''}`}
                    onClick={() => { 
                      if (isActive) {
                        setCollapsedTocs(prev => ({ ...prev, [tab.id]: !prev[tab.id] }));
                      } else {
                        setActiveTab(tab.id); 
                        setSearchQuery(''); 
                        setCollapsedTocs(prev => ({ ...prev, [tab.id]: false }));
                      }
                    }}
                    style={{ padding: '0.35rem 0.5rem', fontSize: '0.9rem', color: tab.type === 'md' ? 'var(--accent-blue)' : 'inherit', width: '100%', display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      {tab.logoUrl ? (
                        <img 
                          src={tab.logoUrl} 
                          alt={tab.label} 
                          style={{ 
                            width: 20, 
                            height: 20, 
                            objectFit: 'contain', 
                            filter: isActive ? 'none' : 'grayscale(100%) opacity(0.7)',
                            transition: 'filter 0.2s ease'
                          }} 
                        />
                      ) : (
                        <Icon size={20} />
                      )}
                      {tab.label}
                    </div>
                    {hasToc && isActive && (
                      <ChevronDown 
                        size={14} 
                        style={{ 
                          opacity: 0.7,
                          transform: collapsedTocs[tab.id] ? 'rotate(-90deg)' : 'none',
                          transition: 'transform 0.2s ease'
                        }} 
                      />
                    )}
                  </button>
                  
                  {hasToc && isActive && !collapsedTocs[tab.id] && (
                    <div className="toc-submenu" style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem', marginBottom: '0.75rem', borderLeft: '1px solid var(--border-color)', marginLeft: '1rem' }}>
                      {tocData[tab.id].map((heading, index) => (
                        <a 
                          key={index} 
                          href={heading.id}
                          style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textDecoration: 'none', lineHeight: '1.3', display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}
                          onClick={(e) => {
                            e.preventDefault();
                            if (!heading.id) return;
                            
                            // Tenta achar pelo ID
                            const elementId = heading.id.startsWith('#') ? heading.id.substring(1) : heading.id;
                            let element = document.getElementById(elementId);
                            
                            // Fallback: Tenta achar o <h2> correspondente pelo texto exato!
                            if (!element) {
                              const allH2 = document.querySelectorAll('.markdown-body h2, .markdown-body h1, .markdown-body h3');
                              for (const header of allH2) {
                                if (header.textContent.trim().toLowerCase() === heading.title.toLowerCase()) {
                                  element = header;
                                  break;
                                }
                              }
                            }

                            if (element) {
                              // Pequeno ajuste para compensar a barra de navegação/padding se houver
                              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                          }}
                          onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                          onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                        >
                          <span style={{ color: 'var(--border-color)', marginTop: '-1px' }}>└</span>
                          <span style={{ flex: 1 }}>{heading.title}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        )}
      </div>


      {/* WARLORD'S PATH (COLLAPSIBLE) */}
      {theme === 'warlord' && (
        <div className="sidebar-group" style={{marginTop: '1.5rem', animation: 'fadeIn 0.5s ease-out'}}>
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
      )}
    </aside>
  );
}
