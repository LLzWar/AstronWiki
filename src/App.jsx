import React, { useState, useEffect } from 'react';
import { Sword, BatteryCharging, BookOpen, ShieldAlert, Compass, Settings, Database, Sparkles, Book, Crown, Library, Skull, Search } from 'lucide-react';
import Sidebar from './components/Sidebar';
import WikiCard from './components/WikiCard';
import CraftingModal from './components/CraftingModal';
import WikiModIndex from './components/WikiModIndex';
import WikiCreate from './components/WikiCreate';
import WikiApotheosis from './components/WikiApotheosis';
import WikiIrons from './components/WikiIrons';
import WikiPowah from './components/WikiPowah';
import WikiSilentGear from './components/WikiSilentGear';
import WikiBackpacks from './components/WikiBackpacks';
import WarlordPath from './components/WarlordPath';
import WikiBestiary from './components/WikiBestiary';
import WikiDimensions from './components/WikiDimensions';
import WikiSearch from './components/WikiSearch';
import MarkdownViewer from './components/MarkdownViewer';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeRecipe, setActiveRecipe] = useState(null);
  const [theme, setTheme] = useState(() => localStorage.getItem('astronTheme') || 'dark');
  const [searchQuery, setSearchQuery] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    localStorage.setItem('astronTheme', theme);
  }, [theme]);

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
            {activeTab === 'bestiary' && 'Conheça os perigos e as fraquezas das criaturas de Astron City.'}
            {activeTab === 'dimensions' && 'Exploração entre mundos e o que esperar de cada um.'}
            {activeTab.startsWith('wiki-') || ['apotheosis', 'powah', 'silentgear', 'backpacks'].includes(activeTab) ? 'Informações extraídas diretamente dos arquivos para domínio completo do mod.' : ''}
            {['ae2', 'cataclysm', 'gear', 'mi', 'oritech', 'create', 'irons_spells', 'ice_and_fire'].includes(activeTab) && 'Documentação nativa do Astron City transcrita diretamente do servidor oficial.'}
            {['early', 'tech', 'magic', 'late'].includes(activeTab) && "A rota otimizada para o preparo letal contra os maiores chefes."}
          </p>
        </header>

        <div className="cards-grid">
          {/* GLOBAL SEARCH RESULTS (Overrides other tabs if query exists) */}
          {searchQuery.length > 0 && (
            <div style={{gridColumn: '1 / -1'}}>
              <WikiSearch query={searchQuery} onOpenRecipe={openRecipe} setActiveTab={setActiveTab} />
            </div>
          )}

          {/* HOME */}
          {activeTab === 'home' && searchQuery.length === 0 && (
            <div style={{gridColumn: '1 / -1'}} className="doc-layout">
              <div className="astron-hero-bg" style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '3rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                  A Enciclopédia do <span style={{ color: 'var(--accent-blue)' }}>Astron City</span>
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                  Sua central definitiva de conhecimento. Guias de sobrevivência, táticas avançadas, estatísticas exatas de deuses e um roteiro claro de ascensão para dominar os mais de 250 mods instalados.
                </p>
                
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem' }}>
                  <button onClick={() => setActiveTab('early')} className="craft-btn" style={{ fontSize: '1.1rem', padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Crown size={20} /> Iniciar a Jornada (Warlord's Path)
                  </button>
                  <button onClick={() => setActiveTab('modindex')} className="nav-btn" style={{ fontSize: '1.1rem', padding: '0.75rem 1.5rem', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Library size={20} /> Explorar a Biblioteca de Mods
                  </button>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                <div className="doc-section" style={{ margin: 0, padding: '1.5rem', backgroundColor: 'var(--bg-tertiary)', borderRadius: '8px', border: '1px solid var(--border-color)', cursor: 'pointer' }} onClick={() => setActiveTab('bestiary')}>
                  <h3 style={{ color: 'var(--danger)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <Skull size={24} /> O Bestiário
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Conheça o HP, os ataques e as fraquezas dos chefes do Cataclysm e do Mowzie's Mobs antes de enfrentá-los.</p>
                </div>
                
                <div className="doc-section" style={{ margin: 0, padding: '1.5rem', backgroundColor: 'var(--bg-tertiary)', borderRadius: '8px', border: '1px solid var(--border-color)', cursor: 'pointer' }} onClick={() => setActiveTab('dimensions')}>
                  <h3 style={{ color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <Compass size={24} /> Guias de Dimensões
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Aprenda a sobreviver nas fortalezas do Nether alterado e como invadir as ruínas massivas do Vazio (The End).</p>
                </div>
                
                <div className="doc-section" style={{ margin: 0, padding: '1.5rem', backgroundColor: 'var(--bg-tertiary)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <h3 style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <Search size={24} /> Motor de Busca Global
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Use a barra de pesquisa no menu lateral a qualquer momento para varrer todas as receitas e informações num piscar de olhos.</p>
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
          {['early', 'tech', 'magic', 'late'].includes(activeTab) && searchQuery.length === 0 && (
            <div style={{gridColumn: '1 / -1'}}>
              <WarlordPath phase={activeTab} onOpenRecipe={openRecipe} setActiveTab={setActiveTab} />
            </div>
          )}
        </div>
      </main>

      <CraftingModal recipeId={activeRecipe} onClose={closeRecipe} />
    </div>
  );
}
