import React, { useState, useEffect } from 'react';
import { 
  Backpack, Sparkles, Factory, Crown, Shield, Zap, Skull, Gem, 
  CheckCircle, Circle, BookOpen, Map, Hammer, Flame, Droplet, 
  Box, Star, Database, Settings, Crosshair, Tent, Sword
} from 'lucide-react';

const WARLORD_DATA = {
  early: {
    id: 'early',
    title: "Fase 1: Early Game",
    subtitle: "Sobrevivência & Saque",
    desc: "Estabeleça a sua presença no mundo. Foque em mobilidade, estocagem básica e armas rústicas.",
    gradient: "linear-gradient(135deg, rgba(35, 134, 54, 0.15) 0%, rgba(30, 30, 30, 0.6) 100%)",
    accent: "#2ea043",
    icon: Backpack,
    subphases: [
      {
        id: "early_dayone",
        title: "1. O Primeiro Dia",
        quests: [
          {
            id: "e_dayone_1",
            icon: Tent,
            title: "Abrigo e Madeira",
            desc: "A primeira noite é mortal. Colete madeira e busque abrigo.",
            tasks: [
              "Colete no mínimo 1 pack de madeira bruta.",
              "Encontre uma vila ou escave um abrigo subterrâneo.",
              "Crie uma cama e durma para pular os perigos da noite."
            ]
          }
        ]
      },
      {
        id: "early_tools",
        title: "2. Forjaria Rústica",
        quests: [
          {
            id: "e_tools_1",
            icon: Hammer,
            title: "Silent Gear Básico",
            desc: "Esqueça as picaretas vanilla. Ferramentas modded são essenciais.",
            tasks: [
              "Crie Blueprints de Picareta, Machado e Espada usando papel.",
              "Use os Blueprints com pedra ou ferro para forjar seu kit inicial no Silent Gear.",
              "Faça Repair Kits (Kits de Reparo) de pedra/ferro para consertar suas ferramentas na mão."
            ]
          }
        ]
      },
      {
        id: "early_inventory",
        title: "3. Logística Viva",
        quests: [
          {
            id: "e_inv_1",
            icon: Backpack,
            title: "Sophisticated Backpacks",
            desc: "A exploração rende dezenas de itens únicos. Você precisará de espaço.",
            tasks: [
              "Crie a Mochila Básica (Couro e Linha).",
              "Faça Upgrade para a Mochila de Ferro.",
              { text: "Instale um Magnet Upgrade (Imã) para sugar minérios para dentro da mochila automaticamente.", recipe: "magnet_upgrade" }
            ]
          }
        ]
      },
      {
        id: "early_food",
        title: "4. Alimentação",
        quests: [
          {
            id: "e_food_1",
            icon: Droplet,
            title: "Farmer's Delight & Spice of Life",
            desc: "Comer apenas carne assada não te deixará forte. Diversifique.",
            tasks: [
              "Colete sementes, repolhos e tomates selvagens.",
              "Construa uma Panela (Cooking Pot) e um Fogão.",
              "Cozinhe ensopados para ganhar Vida Extra (Corações Max) pelo mod Spice of Life."
            ]
          }
        ]
      },
      {
        id: "early_exploration",
        title: "5. Exploração Superficial",
        quests: [
          {
            id: "e_exp_1",
            icon: Map,
            title: "Primeiros Combates",
            desc: "Obtenha recursos raros de pequenas estruturas e mobs isolados.",
            tasks: [
              "Saqueie acampamentos de Illagers e ruínas terrestres.",
              "Derrote mobs especiais que brilham (Apothic Bosses) para conseguir sua primeira armadura encantada grátis.",
              "Encontre Waystones (Pedras de Teleporte) nas vilas e ative-as."
            ]
          }
        ]
      }
    ]
  },
  tech: {
    id: 'tech',
    title: "Fase 2: Tech",
    subtitle: "Revolução Industrial",
    desc: "A fase em que você deixa de minerar com as mãos e passa a esmagar rochas com motores industriais.",
    gradient: "linear-gradient(135deg, rgba(230, 119, 0, 0.15) 0%, rgba(30, 30, 30, 0.6) 100%)",
    accent: "#e67700",
    icon: Factory,
    subphases: [
      {
        id: "tech_create",
        title: "1. Era da Engrenagem",
        quests: [
          {
            id: "t_create_1",
            icon: Settings,
            title: "Cinética Inicial (Create)",
            desc: "O movimento de engrenagens será sua primeira força motriz.",
            tasks: [
              "Crie sua primeira Roda D'Água (Water Wheel).",
              "Faça os Andesite Alloys misturando Ferro e Andesito.",
              "Instale um Mechanical Press (Prensa) para fabricar placas de metal."
            ]
          }
        ]
      },
      {
        id: "tech_power",
        title: "2. Eletrificação",
        quests: [
          {
            id: "t_powah_1",
            icon: Zap,
            title: "Energia Infinita (Powah!)",
            desc: "Sua transição para energia Forge Energy (FE).",
            tasks: [
              "Faça Di-Electric Paste em massa.",
              { text: "Crie o Thermo Generator inicial. Coloque-o sobre Magma e injete água.", recipe: "thermo_generator" },
              "Faça Baterias de armazenamento (Energy Cell) para sua base."
            ]
          }
        ]
      },
      {
        id: "tech_industry",
        title: "3. Máquinas Industriais",
        quests: [
          {
            id: "t_ind_1",
            icon: Factory,
            title: "Modern Industrialization",
            desc: "Máquinas complexas para processar centenas de itens por segundo.",
            tasks: [
              "Construa os tijolos do forno a vapor (Steam Boiler).",
              "Crie sua primeira Maceradora (Macerator) para pulverizar minérios duplos.",
              "Faça uma Forja de Ligas (Alloy Smelter) para latão e bronze."
            ]
          }
        ]
      },
      {
        id: "tech_auto",
        title: "4. Automação",
        quests: [
          {
            id: "t_auto_1",
            icon: Box,
            title: "O Fim da Mineração Manual",
            desc: "Coloque as máquinas para extrair recursos da terra para você.",
            tasks: [
              "Instale uma Quarry ou Digital Miner.",
              "Ligue cabos de energia consistentes à sua zona de mineração.",
              "Configure tubulações (Item Pipes) para enviar o minério direto à Maceradora."
            ]
          }
        ]
      },
      {
        id: "tech_farm",
        title: "5. Fazendas Auto",
        quests: [
          {
            id: "t_farm_1",
            icon: Droplet,
            title: "Sustento Botânico",
            desc: "A indústria precisa de madeira e bio-combustível.",
            tasks: [
              "Crie Mechanical Harvesters ou fazendas do Phytogenic Insulator.",
              "Automatize o plantio e corte de árvores (Tree Farm).",
              "Transforme os excessos orgânicos em energia ou compostagem."
            ]
          }
        ]
      }
    ]
  },
  magic: {
    id: 'magic',
    title: "Fase 3: Magic",
    subtitle: "Domínio Interdimensional",
    desc: "Quando as fábricas não são suficientes, a magia corrompe a realidade e centraliza seu poder.",
    gradient: "linear-gradient(135deg, rgba(138, 43, 226, 0.15) 0%, rgba(0, 191, 255, 0.1) 50%, rgba(30, 30, 30, 0.6) 100%)",
    accent: "#8a2be2",
    icon: Sparkles,
    subphases: [
      {
        id: "magic_enchants",
        title: "1. Limites Quebrados",
        quests: [
          {
            id: "m_ench_1",
            icon: Gem,
            title: "Apothic Enchanting",
            desc: "Eleve seus encantamentos para Nível 50 ou 100.",
            tasks: [
              "Substitua estantes vanilla por Melonshelves ou End Shelves.",
              "Atinga Eterna alta e Quanta controlada para encantos perfeitos.",
              { text: "Construa a Library of Alexandria para unificar centenas de livros mágicos.", recipe: "library_of_alexandria" }
            ]
          }
        ]
      },
      {
        id: "magic_digital",
        title: "2. Cofre Digital",
        quests: [
          {
            id: "m_dig_1",
            icon: Database,
            title: "Applied Energistics 2",
            desc: "Armazene os milhões de itens minerados na rede cibernética-mágica.",
            tasks: [
              "Crie ME Drives e preencha-os com Storage Cells de 64k+.",
              "Configure Inscribers automatizados para processar placas de quartzo.",
              { text: "Conecte seus painéis via ME P2P Tunnels.", recipe: "p2p_tunnel" }
            ]
          }
        ]
      },
      {
        id: "magic_spells",
        title: "3. Artes Arcanas",
        quests: [
          {
            id: "m_spell_1",
            icon: Star,
            title: "Iron's Spells",
            desc: "Canalize energia bruta do universo.",
            tasks: [
              "Produza pergaminhos Épicos e Lendários na Inscription Table.",
              "Vista as Armaduras de Mago avançadas (Fogo/Gelo/Sangue).",
              "Vá a campo testar magias como Black Hole ou Starfall."
            ]
          }
        ]
      },
      {
        id: "magic_dimensions",
        title: "4. Dimensões Obscuras",
        quests: [
          {
            id: "m_dim_1",
            icon: Flame,
            title: "O Nether e Além",
            desc: "Acesse planos de existência alterados.",
            tasks: [
              "Explore as Fortalezas do Nether e capture Spawners.",
              "Faça rituais para estabilizar os portões para o Twilight Forest (se ativado).",
              "Colete minérios interdimensionais como Allthemodium (ou equivalente no pack)."
            ]
          }
        ]
      },
      {
        id: "magic_blood",
        title: "5. Sinergia Arcana",
        quests: [
          {
            id: "m_blood_1",
            icon: Crosshair,
            title: "Combos Mortais",
            desc: "Junte tecnologia com os feitiços mais cruéis.",
            tasks: [
              "Use armas tech de longo alcance envenenadas com poções mágicas.",
              "Estabeleça um altar de encantos focado em Lifesteal para se manter imortal nas dungeons.",
              "Complete sets de gemas lendárias (Apothic Gems) em suas espadas e armaduras."
            ]
          }
        ]
      }
    ]
  },
  late: {
    id: 'late',
    title: "Fase 4: Late Game",
    subtitle: "A Ascensão aos Deuses",
    desc: "Você não é mais um sobrevivente. Você é uma entidade capaz de aniquilar montanhas e deuses.",
    gradient: "linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(220, 20, 60, 0.1) 50%, rgba(30, 30, 30, 0.6) 100%)",
    accent: "#d4af37",
    icon: Crown,
    subphases: [
      {
        id: "late_draconic_base",
        title: "1. O Dragão Adormecido",
        quests: [
          {
            id: "l_drac_1",
            icon: Shield,
            title: "Draconic Evolution Básica",
            desc: "O começo do ápice tecnológico do servidor.",
            tasks: [
              "Minere enormes quantidades de Draconium no The End.",
              "Crie e carregue os primeiros Draconic Cores.",
              "Construa o altar básico de Fusion Crafting com Injectors Básicos."
            ]
          }
        ]
      },
      {
        id: "late_armor",
        title: "2. Escudos Infinitos",
        quests: [
          {
            id: "l_arm_1",
            icon: Gem,
            title: "A Forja Imortal",
            desc: "Sem essa armadura, os chefes do servidor irão obliterá-lo.",
            tasks: [
              "Crie a Wyvern Armor para se estabilizar contra dano letal.",
              "Realize rituais massivos e forje a lendária Draconic Armor.",
              "Ligue as armaduras a baterias wireless de milhões de RF."
            ]
          }
        ]
      },
      {
        id: "late_cataclysm",
        title: "3. Fúria do Vulcão",
        quests: [
          {
            id: "l_cat_1",
            icon: Flame,
            title: "Ignis (Cataclysm)",
            desc: "A masmorra mais perigosa do Nether.",
            tasks: [
              "Encontre a Fortaleza Vulcânica.",
              { text: "Leve Cristais Nitro para aguentar o calor e enfrente Ignis.", recipe: "nitro_crystal" },
              "Roube a arma 'The Incinerator' de suas cinzas."
            ]
          }
        ]
      },
      {
        id: "late_end",
        title: "4. Domínio do Vazio",
        quests: [
          {
            id: "l_end_1",
            icon: Sword,
            title: "Ruínas Esquecidas",
            desc: "Os horrores estelares aguardam no Fim.",
            tasks: [
              "Invada a Ruined Citadel (Cidadela Arruinada).",
              "Assassine o Ender Golem usando dano maciço.",
              { text: "Forje o mítico Void Core para ganhar o Voo Criativo e Antigravidade eterna.", recipe: "void_core" }
            ]
          }
        ]
      },
      {
        id: "late_god",
        title: "5. Senhor Absoluto",
        quests: [
          {
            id: "l_god_1",
            icon: Crown,
            title: "Autocrafting de Titãs",
            desc: "Nada no servidor consegue lhe causar arranhões. Você transcendeu.",
            tasks: [
              "Instale padrões de Autocrafting no AE2 para Forjar itens Dracônicos automaticamente.",
              "Crie o lendário Staff of Power para minerar áreas de 9x9 instantaneamente.",
              "Construa a Sala de Troféus com cabeças de dragões, armaduras relíquias e itens lendários do L'Ender's Cataclysm."
            ]
          }
        ]
      }
    ]
  }
};

const PHASE_ORDER = ['early', 'tech', 'magic', 'late'];

export default function WarlordPath({ phase, onOpenRecipe, setActiveTab }) {
  const currentData = WARLORD_DATA[phase];
  
  // States
  const [activeSubphase, setActiveSubphase] = useState('');
  const [completedQuests, setCompletedQuests] = useState(() => {
    try {
      const saved = localStorage.getItem('warlordProgress');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Sync active subphase when main phase changes
  useEffect(() => {
    if (currentData && currentData.subphases.length > 0) {
      setActiveSubphase(currentData.subphases[0].id);
    }
  }, [phase, currentData]);

  // Persist progress
  useEffect(() => {
    localStorage.setItem('warlordProgress', JSON.stringify(completedQuests));
  }, [completedQuests]);

  const toggleTask = (taskId) => {
    setCompletedQuests(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  if (!currentData) return null;

  // Get current subphase data to render its quests
  const currentSubphaseData = currentData.subphases.find(sp => sp.id === activeSubphase);

  return (
    <div className="warlord-container" style={{ animation: 'fadeIn 0.4s ease-out' }}>
      
      {/* TIMELINE HEADER */}
      <div className="warlord-timeline" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '2rem',
        padding: '1rem 2rem',
        backgroundColor: 'var(--bg-secondary)',
        borderRadius: '8px',
        border: '1px solid var(--border-color)'
      }}>
        {PHASE_ORDER.map((step, index) => {
          const stepData = WARLORD_DATA[step];
          const StepIcon = stepData.icon;
          const isActive = step === phase;
          const isPast = PHASE_ORDER.indexOf(phase) > index;
          const color = isActive ? stepData.accent : (isPast ? 'var(--text-primary)' : 'var(--text-secondary)');
          
          return (
            <React.Fragment key={step}>
              <div 
                className="timeline-step"
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  cursor: 'pointer',
                  opacity: isActive ? 1 : (isPast ? 0.8 : 0.4),
                  transition: 'all 0.2s',
                  transform: isActive ? 'scale(1.05)' : 'none'
                }}
                onClick={() => setActiveTab(step)}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  backgroundColor: isActive ? `${stepData.accent}20` : 'var(--bg-tertiary)',
                  border: `2px solid ${color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: color,
                  boxShadow: isActive ? `0 0 15px ${stepData.accent}40` : 'none'
                }}>
                  <StepIcon size={24} />
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: isActive ? 600 : 400, color }}>
                  Fase {index + 1}
                </span>
              </div>
              
              {index < PHASE_ORDER.length - 1 && (
                <div style={{ flex: 1, height: '2px', backgroundColor: isPast ? 'var(--text-primary)' : 'var(--border-color)', margin: '0 1rem', opacity: 0.5 }} />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* HERO BANNER */}
      <div className="astron-hero-bg" style={{ 
        background: currentData.gradient, 
        borderLeft: `4px solid ${currentData.accent}`,
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        marginBottom: '1.5rem'
      }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {currentData.title}
          </h1>
          <h2 style={{ fontSize: '1.25rem', color: currentData.accent, marginBottom: '1rem', fontWeight: 600 }}>
            {currentData.subtitle}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '800px' }}>
            {currentData.desc}
          </p>
        </div>
        <div style={{ color: currentData.accent, opacity: 0.8 }}>
          <currentData.icon size={100} />
        </div>
      </div>

      {/* SUBPHASE NAVIGATION (PILLS) */}
      <div style={{
        display: 'flex',
        gap: '0.75rem',
        marginBottom: '2rem',
        overflowX: 'auto',
        paddingBottom: '0.5rem'
      }}>
        {currentData.subphases.map((sp) => {
          const isActive = sp.id === activeSubphase;
          return (
            <button
              key={sp.id}
              onClick={() => setActiveSubphase(sp.id)}
              style={{
                backgroundColor: isActive ? currentData.accent : 'var(--bg-secondary)',
                color: isActive ? '#fff' : 'var(--text-secondary)',
                border: `1px solid ${isActive ? currentData.accent : 'var(--border-color)'}`,
                padding: '0.5rem 1.25rem',
                borderRadius: '20px',
                fontSize: '0.95rem',
                fontWeight: isActive ? 600 : 400,
                cursor: 'pointer',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <BookOpen size={16} />
              {sp.title}
            </button>
          );
        })}
      </div>

      {/* QUEST CARDS (For Active Subphase) */}
      {currentSubphaseData && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', animation: 'fadeIn 0.3s ease-out' }}>
          {currentSubphaseData.quests.map((quest) => {
            // Check if all tasks in this quest are completed
            const allTasksCompleted = quest.tasks.every((_, idx) => completedQuests[`${quest.id}_task_${idx}`]);
            
            return (
              <div key={quest.id} className="doc-section quest-card" style={{ 
                position: 'relative', 
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                borderLeft: `4px solid ${allTasksCompleted ? currentData.accent : 'var(--bg-tertiary)'}`,
                opacity: allTasksCompleted ? 0.7 : 1
              }}>
                <h3 className="doc-section-title" style={{ 
                  color: allTasksCompleted ? 'var(--text-secondary)' : 'var(--text-primary)', 
                  borderBottom: 'none', paddingBottom: 0, marginBottom: '0.5rem',
                  textDecoration: allTasksCompleted ? 'line-through' : 'none'
                }}>
                  <quest.icon size={24} color={allTasksCompleted ? 'var(--text-secondary)' : currentData.accent} /> {quest.title}
                </h3>
                <p className="doc-text" style={{ fontSize: '0.95rem', marginBottom: '1rem', opacity: 0.8 }}>
                  {quest.desc}
                </p>
                
                <div className="quest-tasks" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', backgroundColor: 'var(--bg-primary)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  {quest.tasks.map((task, idx) => {
                    const taskId = `${quest.id}_task_${idx}`;
                    const isCompleted = completedQuests[taskId];
                    const text = typeof task === 'string' ? task : task.text;
                    const recipeId = typeof task === 'string' ? null : task.recipe;

                    return (
                      <div key={taskId} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <button 
                          onClick={() => toggleTask(taskId)}
                          style={{ 
                            background: 'none', border: 'none', cursor: 'pointer',
                            color: isCompleted ? currentData.accent : 'var(--text-secondary)',
                            marginTop: '0.15rem',
                            transition: 'color 0.2s',
                            padding: 0
                          }}
                        >
                          {isCompleted ? <CheckCircle size={20} /> : <Circle size={20} />}
                        </button>
                        
                        <span style={{ 
                          color: isCompleted ? 'var(--text-secondary)' : 'var(--text-primary)',
                          textDecoration: isCompleted ? 'line-through' : 'none',
                          lineHeight: '1.6',
                          transition: 'all 0.2s',
                          flex: 1
                        }}>
                          {text}{' '}
                          {recipeId && (
                            <button className="craft-btn" onClick={() => onOpenRecipe(recipeId)} style={{ marginLeft: '0.5rem', verticalAlign: 'baseline', padding: '0.1rem 0.4rem', fontSize: '0.8rem' }}>
                              Ver Receita
                            </button>
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
