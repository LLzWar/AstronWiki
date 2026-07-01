import React, { useState } from 'react';
import { Sword, BatteryCharging, BookOpen, ShieldAlert, Compass, Settings, Database, Sparkles, Book } from 'lucide-react';
import Sidebar from './components/Sidebar';
import WikiCard from './components/WikiCard';
import CraftingModal from './components/CraftingModal';
import WikiModIndex from './components/WikiModIndex';
import WikiCreate from './components/WikiCreate';
import WikiAE2 from './components/WikiAE2';
import WikiApotheosis from './components/WikiApotheosis';
import WikiIrons from './components/WikiIrons';
import WikiCataclysm from './components/WikiCataclysm';
import WikiPowah from './components/WikiPowah';
import WikiSilentGear from './components/WikiSilentGear';
import WikiBackpacks from './components/WikiBackpacks';
import WarlordPath from './components/WarlordPath';
import WikiBestiary from './components/WikiBestiary';
import WikiDimensions from './components/WikiDimensions';
import WikiSearch from './components/WikiSearch';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeRecipe, setActiveRecipe] = useState(null);
  const [theme, setTheme] = useState('dark');
  const [searchQuery, setSearchQuery] = useState('');

  const openRecipe = (id) => setActiveRecipe(id);
  const closeRecipe = () => setActiveRecipe(null);

  const CraftLink = ({ id, children }) => (
    <span className="craft-link text-bold" onClick={() => openRecipe(id)}>
      {children}
    </span>
  );

  return (
    <div data-theme={theme} className="app-container">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        theme={theme}
        setTheme={setTheme}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <main className="main-content">
        <header className="mb-4">
          <h2 style={{fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-primary)'}}>
            {activeTab === 'home' && 'Astron City Wiki'}
            {activeTab === 'modindex' && 'Biblioteca de Mods'}
            {activeTab === 'tips' && 'Dicas e Progressão Geral'}
            {activeTab.startsWith('wiki-') && 'Guia Profundo de Mod'}
            {['early', 'tech', 'magic', 'late'].includes(activeTab) && "Warlord's Path"}
          </h2>
          <p style={{color: 'var(--text-secondary)'}}>
            {activeTab === 'home' && 'Bem-vindo ao banco de dados definitivo do modpack. Navegue pelo menu lateral para explorar as estratégias.'}
            {activeTab === 'modindex' && 'O índice completo de modificações instaladas na sua instância.'}
            {activeTab === 'tips' && 'Informações valiosas para sobrevivência e otimização no dia a dia do modpack.'}
            {activeTab === 'bestiary' && 'Conheça os perigos e as fraquezas das criaturas de Astron City.'}
            {activeTab === 'dimensions' && 'Exploração entre mundos e o que esperar de cada um.'}
            {activeTab.startsWith('wiki-') && 'Informações extraídas diretamente dos arquivos para domínio completo do mod.'}
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
            <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
              {/* HERO */}
              <div style={{
                backgroundColor: 'var(--bg-secondary)', 
                borderRadius: '8px', 
                padding: '3rem 2rem', 
                border: '1px solid var(--border-color)',
                textAlign: 'center'
              }}>
                <h3 style={{marginBottom: '1rem', color: 'var(--accent-blue)'}}>A Enciclopédia do Astron City</h3>
                <p>Nesta plataforma você encontrará dados reais, receitas e guias extraídos dos arquivos do modpack.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                  <button onClick={() => setActiveTab('modindex')} className="nav-btn" style={{backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)'}}>
                    Explorar Mod Index
                  </button>
                  <button onClick={() => setActiveTab('early')} className="nav-btn" style={{backgroundColor: 'var(--accent-primary)', color: '#111'}}>
                    Iniciar Warlord's Path
                  </button>
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
          {activeTab === 'wiki-create' && searchQuery.length === 0 && (
            <div style={{gridColumn: '1 / -1'}}>
              <WikiCreate onOpenRecipe={openRecipe} />
            </div>
          )}

          {/* WIKI - AE2 */}
          {activeTab === 'wiki-ae2' && searchQuery.length === 0 && (
            <div style={{gridColumn: '1 / -1'}}>
              <WikiAE2 onOpenRecipe={openRecipe} />
            </div>
          )}

          {/* WIKI - APOTHEOSIS */}
          {activeTab === 'wiki-apotheosis' && searchQuery.length === 0 && (
            <div style={{gridColumn: '1 / -1'}}>
              <WikiApotheosis onOpenRecipe={openRecipe} />
            </div>
          )}

          {/* WIKI - IRONS SPELLS */}
          {activeTab === 'wiki-irons' && searchQuery.length === 0 && (
            <div style={{gridColumn: '1 / -1'}}>
              <WikiIrons onOpenRecipe={openRecipe} />
            </div>
          )}

          {/* WIKI - CATACLYSM */}
          {activeTab === 'wiki-cataclysm' && searchQuery.length === 0 && (
            <div style={{gridColumn: '1 / -1'}}>
              <WikiCataclysm onOpenRecipe={openRecipe} />
            </div>
          )}

          {/* WIKI - POWAH */}
          {activeTab === 'wiki-powah' && searchQuery.length === 0 && (
            <div style={{gridColumn: '1 / -1'}}>
              <WikiPowah onOpenRecipe={openRecipe} />
            </div>
          )}

          {/* WIKI - SILENT GEAR */}
          {activeTab === 'wiki-silentgear' && searchQuery.length === 0 && (
            <div style={{gridColumn: '1 / -1'}}>
              <WikiSilentGear onOpenRecipe={openRecipe} />
            </div>
          )}

          {/* WIKI - BACKPACKS */}
          {activeTab === 'wiki-backpacks' && searchQuery.length === 0 && (
            <div style={{gridColumn: '1 / -1'}}>
              <WikiBackpacks onOpenRecipe={openRecipe} />
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
              <WarlordPath phase={activeTab} onOpenRecipe={openRecipe} />
            </div>
          )}
        </div>
      </main>

      <CraftingModal recipeId={activeRecipe} onClose={closeRecipe} />
    </div>
  );
}
