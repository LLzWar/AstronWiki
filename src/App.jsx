import React, { useState, useEffect, Suspense } from 'react';
import { Sword, BatteryCharging, BookOpen, ShieldAlert, Compass, Settings, Database, Sparkles, Book, Crown, Library, Skull, Search, Loader } from 'lucide-react';
import Sidebar from './components/Sidebar';
import WikiCard from './components/WikiCard';
import CraftingModal from './components/CraftingModal';
import JEISidebar from './components/JEISidebar';
import ItemModal from './components/ItemModal';

const WikiModIndex = React.lazy(() => import('./components/WikiModIndex'));
const WikiCreate = React.lazy(() => import('./components/WikiCreate'));
const WikiApotheosis = React.lazy(() => import('./components/WikiApotheosis'));
const WikiIrons = React.lazy(() => import('./components/WikiIrons'));
const WikiPowah = React.lazy(() => import('./components/WikiPowah'));
const WikiSilentGear = React.lazy(() => import('./components/WikiSilentGear'));
const WikiBackpacks = React.lazy(() => import('./components/WikiBackpacks'));
const WarlordPath = React.lazy(() => import('./components/WarlordPath'));
const WikiBestiary = React.lazy(() => import('./components/WikiBestiary'));
const WikiMobs = React.lazy(() => import('./components/WikiMobs'));
const WikiDimensions = React.lazy(() => import('./components/WikiDimensions'));
const WikiSearch = React.lazy(() => import('./components/WikiSearch'));
const MarkdownViewer = React.lazy(() => import('./components/MarkdownViewer'));

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeRecipe, setActiveRecipe] = useState(null);
  const [theme, setTheme] = useState(() => localStorage.getItem('astronTheme') || 'dark');
  const [searchQuery, setSearchQuery] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('astronTheme', theme);
    
    // Auto-redirect to home if Warlord mode is deactivated while in a Warlord tab
    if (theme !== 'warlord' && ['early', 'tech', 'magic', 'late'].includes(activeTab)) {
      setActiveTab('home');
    }
  }, [theme, activeTab]);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollHeight > clientHeight) {
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(progress);
    } else {
      setScrollProgress(0);
    }
  };


  const openRecipe = (id) => setActiveRecipe(id);
  const closeRecipe = () => setActiveRecipe(null);

  const CraftLink = ({ id, children }) => (
    <span className="craft-link text-bold" onClick={() => openRecipe(id)}>
      {children}
    </span>
  );

  return (
    <div data-theme={theme} className="app-container">
      {/* Scroll Tracker Bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0, height: '3px', width: `${scrollProgress}%`,
        backgroundColor: 'var(--accent-primary)', zIndex: 9999, transition: 'width 0.1s ease-out',
        boxShadow: '0 0 10px var(--accent-primary)'
      }} />

      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        theme={theme}
        setTheme={setTheme}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <main className="main-content" onScroll={handleScroll}>
        <header className="mb-4">
          <h2 style={{fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-primary)'}}>
            {activeTab === 'home' && 'Astron City Wiki'}
            {activeTab === 'modindex' && 'Biblioteca de Mods'}
            {activeTab === 'tips' && 'Dicas e Progressão Geral'}
            {activeTab.startsWith('wiki-') || ['apotheosis', 'powah', 'silentgear', 'backpacks'].includes(activeTab) ? 'Guia Profundo de Mod' : ''}
            {['ae2', 'cataclysm', 'gear', 'mi', 'oritech', 'create', 'irons_spells', 'ice_and_fire'].includes(activeTab) && 'Guia Completo (Markdown Oficial)'}
            {['early', 'tech', 'magic', 'late'].includes(activeTab) && "Warlord's Path"}
          </h2>
          <p style={{color: 'var(--text-secondary)'}}>
            {activeTab === 'home' && 'Bem-vindo ao banco de dados definitivo do modpack. Navegue pelo menu lateral para explorar as estratégias.'}
            {activeTab === 'modindex' && 'O índice completo de modificações instaladas na sua instância.'}
            {activeTab === 'tips' && 'Informações valiosas para sobrevivência e otimização no dia a dia do modpack.'}
            {activeTab === 'bestiary' && 'Conheça os perigos e as fraquezas dos titãs e chefes de Astron City.'}
            {activeTab === 'mobs' && 'Enciclopédia de criaturas comuns, inimigos de biomas e suas tabelas de loot.'}
            {activeTab === 'dimensions' && 'Exploração entre mundos e o que esperar de cada um.'}
            {activeTab.startsWith('wiki-') || ['apotheosis', 'powah', 'silentgear', 'backpacks'].includes(activeTab) ? 'Informações extraídas diretamente dos arquivos para domínio completo do mod.' : ''}
            {['ae2', 'cataclysm', 'gear', 'mi', 'oritech', 'create', 'irons_spells', 'ice_and_fire'].includes(activeTab) && 'Documentação nativa do Astron City transcrita diretamente do servidor oficial.'}
            {['early', 'tech', 'magic', 'late'].includes(activeTab) && "A rota otimizada para o preparo letal contra os maiores chefes."}
          </p>
        </header>

        <div className="cards-grid">
          <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gridColumn: '1 / -1', padding: '4rem', color: 'var(--accent-blue)' }}><Loader className="spin-animation" size={32} /></div>}>
            {/* GLOBAL SEARCH RESULTS (Overrides other tabs if query exists) */}
            {searchQuery.length > 0 && (
              <div style={{gridColumn: '1 / -1'}}>
                <WikiSearch query={searchQuery} onOpenRecipe={openRecipe} setActiveTab={setActiveTab} />
              </div>
            )}

          {/* HOME */}
          {activeTab === 'home' && searchQuery.length === 0 && (
            <div style={{gridColumn: '1 / -1'}} className="doc-layout">
              {/* HERO BANNER */}
              <div className="astron-hero-bg" style={{ marginBottom: '1rem', padding: '5rem 2rem' }}>
                <h1 style={{ fontSize: '3.5rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 800, letterSpacing: '-1px' }}>
                  A Enciclopédia <span style={{ color: 'var(--accent-blue)' }}>Astron City</span>
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
                  Sua central definitiva de conhecimento. Domine a sobrevivência letal, táticas avançadas de automação industrial e estatísticas exatas dos deuses que habitam os mundos.
                </p>
                
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '3rem' }}>
                  <button onClick={() => setActiveTab('modindex')} className="craft-btn" style={{ fontSize: '1.1rem', padding: '0.8rem 2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '30px' }}>
                    <Library size={20} /> Explorar Biblioteca de Mods
                  </button>
                  <button onClick={() => setActiveTab('bestiary')} className="nav-btn" style={{ fontSize: '1.1rem', padding: '0.8rem 2rem', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '30px', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                    <Skull size={20} /> Consultar o Bestiário
                  </button>
                </div>
              </div>

              {/* FEATURED MODS */}
              <div style={{ marginBottom: '1rem' }}>
                <h2 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>Destaques do Modpack</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div className="home-card" style={{ '--accent-blue': '#e67e22' }} onClick={() => setActiveTab('create')}>
                    <Settings size={32} color="#e67e22" style={{ marginBottom: '1rem' }} />
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Create</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Automação e Indústria Cinética</p>
                  </div>
                  <div className="home-card" style={{ '--accent-blue': '#9b59b6' }} onClick={() => setActiveTab('ae2')}>
                    <Database size={32} color="#9b59b6" style={{ marginBottom: '1rem' }} />
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Applied Energistics</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Armazenamento Digital e Autocraft</p>
                  </div>
                  <div className="home-card" style={{ '--accent-blue': '#f1c40f' }} onClick={() => setActiveTab('powah')}>
                    <BatteryCharging size={32} color="#f1c40f" style={{ marginBottom: '1rem' }} />
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Powah!</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Matrizes de Energia Extrema</p>
                  </div>
                  <div className="home-card" style={{ '--accent-blue': '#3498db' }} onClick={() => setActiveTab('apotheosis')}>
                    <Sparkles size={32} color="#3498db" style={{ marginBottom: '1rem' }} />
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Apotheosis</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Magia e Atributos Míticos</p>
                  </div>
                </div>
              </div>

              {/* QUICK ACCESS */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
                <div className="home-card" style={{ '--accent-blue': 'var(--danger)' }} onClick={() => setActiveTab('bestiary')}>
                  <h3 style={{ color: 'var(--danger)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <Skull size={24} /> O Bestiário
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>Descubra os pontos fracos dos titãs do Cataclysm e os drop rates de chefes épicos antes de entrar na arena.</p>
                </div>
                
                <div className="home-card" style={{ '--accent-blue': 'var(--accent-primary)' }} onClick={() => setActiveTab('dimensions')}>
                  <h3 style={{ color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <Compass size={24} /> Guia de Dimensões
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>Sobreviva aos terrores do Nether e entenda como navegar pelas ruínas massivas do Vazio Infinito.</p>
                </div>
                
                <div className="home-card" style={{ '--accent-blue': 'var(--text-primary)' }} onClick={() => document.querySelector('.search-input').focus()}>
                  <h3 style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <Search size={24} /> Busca Rápida
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>Use o motor de busca lateral ou clique aqui para encontrar itens e receitas ignorando os menus.</p>
                </div>
              </div>
            </div>
          )}

          {/* MOD INDEX */}
          {activeTab === 'modindex' && searchQuery.length === 0 && (
            <div style={{gridColumn: '1 / -1'}}>
              <WikiModIndex />
            </div>
          )}

          {/* BESTIARY */}
          {activeTab === 'bestiary' && searchQuery.length === 0 && (
            <div style={{gridColumn: '1 / -1'}}>
              <WikiBestiary onOpenRecipe={openRecipe} />
            </div>
          )}

          {/* MOBS */}
          {activeTab === 'mobs' && searchQuery.length === 0 && (
            <div style={{gridColumn: '1 / -1'}}>
              <WikiMobs />
            </div>
          )}

          {/* DIMENSIONS */}
          {activeTab === 'dimensions' && searchQuery.length === 0 && (
            <div style={{gridColumn: '1 / -1'}}>
              <WikiDimensions onOpenRecipe={openRecipe} />
            </div>
          )}

          {/* WIKI - CREATE */}
          {activeTab === 'create' && searchQuery.length === 0 && (
            <div style={{gridColumn: '1 / -1'}}>
              <MarkdownViewer fileUrl="/docs/create.md" />
            </div>
          )}

          {/* WIKI - APOTHEOSIS */}
          {activeTab === 'apotheosis' && searchQuery.length === 0 && (
            <div style={{gridColumn: '1 / -1'}}>
              <WikiApotheosis onOpenRecipe={openRecipe} />
            </div>
          )}

          {/* WIKI - IRONS SPELLS */}
          {activeTab === 'irons_spells' && searchQuery.length === 0 && (
            <div style={{gridColumn: '1 / -1'}}>
              <MarkdownViewer fileUrl="/docs/irons_spells.md" />
            </div>
          )}

          {/* WIKI - POWAH */}
          {activeTab === 'powah' && searchQuery.length === 0 && (
            <div style={{gridColumn: '1 / -1'}}>
              <WikiPowah onOpenRecipe={openRecipe} />
            </div>
          )}

          {/* WIKI - SILENT GEAR */}
          {activeTab === 'silentgear' && searchQuery.length === 0 && (
            <div style={{gridColumn: '1 / -1'}}>
              <WikiSilentGear onOpenRecipe={openRecipe} />
            </div>
          )}

          {/* WIKI - BACKPACKS */}
          {activeTab === 'backpacks' && searchQuery.length === 0 && (
            <div style={{gridColumn: '1 / -1'}}>
              <WikiBackpacks onOpenRecipe={openRecipe} />
            </div>
          )}

          {/* FULL GUIDES (MARKDOWN) */}
          {activeTab === 'ae2' && searchQuery.length === 0 && (
            <div style={{gridColumn: '1 / -1'}}>
              <MarkdownViewer fileUrl="/docs/ae2.md" />
            </div>
          )}
          {activeTab === 'cataclysm' && searchQuery.length === 0 && (
            <div style={{gridColumn: '1 / -1'}}>
              <MarkdownViewer fileUrl="/docs/cataclysm.md" />
            </div>
          )}
          {activeTab === 'mi' && searchQuery.length === 0 && (
            <div style={{gridColumn: '1 / -1'}}>
              <MarkdownViewer fileUrl="/docs/mi.md" />
            </div>
          )}
          {activeTab === 'oritech' && searchQuery.length === 0 && (
            <div style={{gridColumn: '1 / -1'}}>
              <MarkdownViewer fileUrl="/docs/oritech.md" />
            </div>
          )}
          {activeTab === 'gear' && searchQuery.length === 0 && (
            <div style={{gridColumn: '1 / -1'}}>
              <MarkdownViewer fileUrl="/docs/gear.md" pdfUrl="/docs/gear.pdf" />
            </div>
          )}
          {activeTab === 'ice_and_fire' && searchQuery.length === 0 && (
            <div style={{gridColumn: '1 / -1'}}>
              <MarkdownViewer fileUrl="/docs/ice_and_fire.md" />
            </div>
          )}

          {/* TIPS */}
          {activeTab === 'tips' && searchQuery.length === 0 && (
            <>
              <WikiCard title="Regras de Exploração" mod="Geral" icon={Compass}>
                <p className="mb-2">Não perca tempo construindo bases massivas no início. O segredo é mobilidade.</p>
                <ul>
                  <li>Use mochilas e instale upgrades de imã para agilizar o looting em dungeons.</li>
                  <li>Coma de tudo. O mod Spice of Life recompensa quem varia a alimentação.</li>
                </ul>
              </WikiCard>
            </>
          )}

          {/* WARLORD'S PATH (FASES 1 a 4) */}
          {theme === 'warlord' && ['early', 'tech', 'magic', 'late'].includes(activeTab) && searchQuery.length === 0 && (
            <div style={{gridColumn: '1 / -1'}}>
              <WarlordPath phase={activeTab} onOpenRecipe={openRecipe} setActiveTab={setActiveTab} />
            </div>
          )}
          </Suspense>
        </div>
      </main>

      <JEISidebar setSearchQuery={setSearchQuery} onOpenItem={setActiveItem} />
      <CraftingModal recipeId={activeRecipe} onClose={closeRecipe} />
      {activeItem && <ItemModal item={activeItem} onClose={() => setActiveItem(null)} />}
    </div>
  );
}
