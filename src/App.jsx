import React, { useEffect, Suspense } from 'react';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import { BatteryCharging, Compass, Settings, Database, Sparkles, Skull, Search, Loader, Menu, Library } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import useStore from './store/useStore';
import Sidebar from './components/Sidebar';
import ErrorBoundaryFallback from './components/ErrorBoundary';
import NotFound from './components/NotFound';
import PageWrapper from './components/PageWrapper';

// Lazy Components
const CraftingModal = React.lazy(() => import('./components/CraftingModal'));
const JEISidebar = React.lazy(() => import('./components/JEISidebar'));
const ItemModal = React.lazy(() => import('./components/ItemModal'));
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
const WikiCard = React.lazy(() => import('./components/WikiCard')); // Assuming WikiCard is also a component

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const rawPath = location.pathname.substring(1);
  const activeTab = rawPath || 'home';
  
  const { 
    theme, setTheme, 
    searchQuery, setSearchQuery, 
    mobileMenuOpen, setMobileMenuOpen,
    activeRecipe, openRecipe, closeRecipe,
    activeItem, setActiveItem
  } = useStore();

  const [scrollProgress, setScrollProgress] = React.useState(0);

  const setActiveTab = (tab) => {
    navigate(`/${tab === 'home' ? '' : tab}`);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
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

  const getPageTitle = () => {
    if (activeTab === 'home') return 'Astron City Wiki - Enciclopédia Oficial';
    return `${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} | Astron City Wiki`;
  };

  return (
    <div data-theme={theme} className="app-container">
      <Helmet>
        <title>{getPageTitle()}</title>
        <meta name="theme-color" content={theme === 'dark' ? '#121212' : theme === 'warlord' ? '#0f0000' : '#f5f5f5'} />
      </Helmet>

      {/* Scroll Tracker Bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0, height: '3px', width: `${scrollProgress}%`,
        backgroundColor: 'var(--accent-primary)', zIndex: 9999, transition: 'width 0.1s ease-out',
        boxShadow: '0 0 10px var(--accent-primary)'
      }} />

      {/* Dark Overlay for Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 9998, backdropFilter: 'blur(4px)' }}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={(t) => { setActiveTab(t); setMobileMenuOpen(false); }} 
        theme={theme}
        setTheme={setTheme}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        mobileMenuOpen={mobileMenuOpen}
      />
      
      <main className="main-content" onScroll={handleScroll}>
        <ErrorBoundaryFallback>
          <div className="mobile-header">
            <h2 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.2rem' }}>Astron Wiki</h2>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)' }}>
              <Menu size={24} />
            </button>
          </div>
          
          <header className="mb-4 mt-4">
            <h2 style={{fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-primary)'}}>
              {activeTab === 'home' && 'Astron City Wiki'}
              {activeTab === 'modindex' && 'Biblioteca de Mods'}
              {activeTab === 'tips' && 'Dicas e Progressão Geral'}
              {activeTab.startsWith('wiki-') || ['apotheosis', 'powah', 'silentgear', 'backpacks'].includes(activeTab) ? 'Guia Profundo de Mod' : ''}
              {['ae2', 'cataclysm', 'gear', 'mi', 'oritech', 'create', 'irons_spells', 'ice_and_fire'].includes(activeTab) && 'Guia Completo (Markdown Oficial)'}
              {['early', 'tech', 'magic', 'late'].includes(activeTab) && "Warlord's Path"}
            </h2>
          </header>

          <div className="cards-grid">
            <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gridColumn: '1 / -1', padding: '4rem', color: 'var(--accent-blue)' }}><Loader className="spin-animation" size={32} /></div>}>
              <AnimatePresence mode="wait">
                {searchQuery.length > 0 ? (
                  <PageWrapper key="search">
                    <WikiSearch query={searchQuery} onOpenRecipe={openRecipe} setActiveTab={setActiveTab} />
                  </PageWrapper>
                ) : (
                  <Routes location={location} key={location.pathname}>
                    <Route path="/" element={
                      <PageWrapper>
                        <div style={{gridColumn: '1 / -1'}} className="doc-layout">
                          <div className="astron-hero-bg" style={{ marginBottom: '1rem' }}>
                            <h1 className="hero-title">A Enciclopédia <span style={{ color: 'var(--accent-blue)' }}>Astron City</span></h1>
                            <p className="hero-subtitle">Sua central definitiva de conhecimento. Domine a sobrevivência letal, táticas avançadas de automação industrial e estatísticas exatas dos deuses que habitam os mundos.</p>
                            <div className="hero-buttons">
                              <button onClick={() => setActiveTab('modindex')} className="craft-btn hero-btn"><Library size={20} /> Explorar Biblioteca de Mods</button>
                              <button onClick={() => setActiveTab('bestiary')} className="nav-btn hero-btn"><Skull size={20} /> Consultar o Bestiário</button>
                            </div>
                          </div>
                          {/* FEATURED MODS */}
                          <div style={{ marginBottom: '1rem' }}>
                            <h2 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>Destaques do Modpack</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                              <div className="home-card" style={{ '--accent-blue': '#e67e22' }} onClick={() => setActiveTab('create')}><Settings size={32} color="#e67e22" style={{ marginBottom: '1rem' }} /><h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Create</h3><p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Automação e Indústria Cinética</p></div>
                              <div className="home-card" style={{ '--accent-blue': '#9b59b6' }} onClick={() => setActiveTab('ae2')}><Database size={32} color="#9b59b6" style={{ marginBottom: '1rem' }} /><h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Applied Energistics</h3><p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Armazenamento Digital e Autocraft</p></div>
                              <div className="home-card" style={{ '--accent-blue': '#f1c40f' }} onClick={() => setActiveTab('powah')}><BatteryCharging size={32} color="#f1c40f" style={{ marginBottom: '1rem' }} /><h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Powah!</h3><p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Matrizes de Energia Extrema</p></div>
                              <div className="home-card" style={{ '--accent-blue': '#3498db' }} onClick={() => setActiveTab('apotheosis')}><Sparkles size={32} color="#3498db" style={{ marginBottom: '1rem' }} /><h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Apotheosis</h3><p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Magia e Atributos Míticos</p></div>
                            </div>
                          </div>
                          {/* QUICK ACCESS */}
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
                            <div className="home-card" style={{ '--accent-blue': 'var(--danger)' }} onClick={() => setActiveTab('bestiary')}><h3 style={{ color: 'var(--danger)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}><Skull size={24} /> O Bestiário</h3><p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>Descubra os pontos fracos dos titãs do Cataclysm e os drop rates de chefes épicos antes de entrar na arena.</p></div>
                            <div className="home-card" style={{ '--accent-blue': 'var(--accent-primary)' }} onClick={() => setActiveTab('dimensions')}><h3 style={{ color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}><Compass size={24} /> Guia de Dimensões</h3><p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>Sobreviva aos terrores do Nether e entenda como navegar pelas ruínas massivas do Vazio Infinito.</p></div>
                            <div className="home-card" style={{ '--accent-blue': 'var(--text-primary)' }} onClick={() => document.querySelector('.search-input').focus()}><h3 style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}><Search size={24} /> Busca Rápida</h3><p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>Use o motor de busca lateral ou clique aqui para encontrar itens e receitas ignorando os menus.</p></div>
                          </div>
                        </div>
                      </PageWrapper>
                    } />
                    
                    <Route path="/modindex" element={<PageWrapper><WikiModIndex /></PageWrapper>} />
                    <Route path="/bestiary" element={<PageWrapper><WikiBestiary onOpenRecipe={openRecipe} onOpenWebJEI={setActiveItem} /></PageWrapper>} />
                    <Route path="/mobs" element={<PageWrapper><WikiMobs /></PageWrapper>} />
                    <Route path="/dimensions" element={<PageWrapper><WikiDimensions onOpenRecipe={openRecipe} /></PageWrapper>} />
                    <Route path="/create" element={<PageWrapper><MarkdownViewer fileUrl="/docs/create.md" onOpenWebJEI={setActiveItem} /></PageWrapper>} />
                    <Route path="/apotheosis" element={<PageWrapper><WikiApotheosis onOpenRecipe={openRecipe} onOpenWebJEI={setActiveItem} /></PageWrapper>} />
                    <Route path="/irons_spells" element={<PageWrapper><MarkdownViewer fileUrl="/docs/irons_spells.md" onOpenWebJEI={setActiveItem} /></PageWrapper>} />
                    <Route path="/powah" element={<PageWrapper><WikiPowah onOpenRecipe={openRecipe} onOpenWebJEI={setActiveItem} /></PageWrapper>} />
                    <Route path="/silentgear" element={<PageWrapper><WikiSilentGear onOpenRecipe={openRecipe} onOpenWebJEI={setActiveItem} /></PageWrapper>} />
                    <Route path="/backpacks" element={<PageWrapper><WikiBackpacks onOpenRecipe={openRecipe} onOpenWebJEI={setActiveItem} /></PageWrapper>} />
                    <Route path="/ae2" element={<PageWrapper><MarkdownViewer fileUrl="/docs/ae2.md" onOpenWebJEI={setActiveItem} /></PageWrapper>} />
                    <Route path="/cataclysm" element={<PageWrapper><MarkdownViewer fileUrl="/docs/cataclysm.md" onOpenWebJEI={setActiveItem} /></PageWrapper>} />
                    <Route path="/mi" element={<PageWrapper><MarkdownViewer fileUrl="/docs/mi.md" onOpenWebJEI={setActiveItem} /></PageWrapper>} />
                    <Route path="/oritech" element={<PageWrapper><MarkdownViewer fileUrl="/docs/oritech.md" onOpenWebJEI={setActiveItem} /></PageWrapper>} />
                    <Route path="/gear" element={<PageWrapper><MarkdownViewer fileUrl="/docs/gear.md" pdfUrl="/docs/gear.pdf" onOpenWebJEI={setActiveItem} /></PageWrapper>} />
                    <Route path="/ice_and_fire" element={<PageWrapper><MarkdownViewer fileUrl="/docs/ice_and_fire.md" onOpenWebJEI={setActiveItem} /></PageWrapper>} />
                    
                    <Route path="/tips" element={
                      <PageWrapper>
                        <WikiCard title="Regras de Exploração" mod="Geral" icon={Compass}>
                          <p className="mb-2">Não perca tempo construindo bases massivas no início. O segredo é mobilidade.</p>
                          <ul><li>Use mochilas e instale upgrades de imã para agilizar o looting em dungeons.</li><li>Coma de tudo. O mod Spice of Life recompensa quem varia a alimentação.</li></ul>
                        </WikiCard>
                      </PageWrapper>
                    } />

                    {/* Warlord Routes */}
                    <Route path="/early" element={<PageWrapper><WarlordPath phase="early" onOpenRecipe={openRecipe} setActiveTab={setActiveTab} /></PageWrapper>} />
                    <Route path="/tech" element={<PageWrapper><WarlordPath phase="tech" onOpenRecipe={openRecipe} setActiveTab={setActiveTab} /></PageWrapper>} />
                    <Route path="/magic" element={<PageWrapper><WarlordPath phase="magic" onOpenRecipe={openRecipe} setActiveTab={setActiveTab} /></PageWrapper>} />
                    <Route path="/late" element={<PageWrapper><WarlordPath phase="late" onOpenRecipe={openRecipe} setActiveTab={setActiveTab} /></PageWrapper>} />

                    <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
                  </Routes>
                )}
              </AnimatePresence>
            </Suspense>
          </div>
        </ErrorBoundaryFallback>
      </main>

      <JEISidebar setSearchQuery={setSearchQuery} onOpenItem={setActiveItem} />
      <CraftingModal recipeId={activeRecipe} onClose={closeRecipe} />
      {activeItem && <ItemModal item={activeItem} onClose={() => setActiveItem(null)} onNavigate={setActiveTab} onOpenWebJEI={setActiveItem} />}
    </div>
  );
}
