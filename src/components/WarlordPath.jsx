import React, { useState, useEffect } from 'react';
import { Backpack, Sparkles, Factory, Crown, Shield, Zap, Skull, Gem, CheckCircle, Circle, BookOpen } from 'lucide-react';

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
        id: "early_survival",
        title: "Ferramentas & Sobrevivência",
        quests: [
          {
            id: "early_gear",
            icon: Shield,
            title: "As Primeiras Ferramentas (Silent Gear)",
            desc: "Não desperdice minérios fazendo ferramentas Vanilla. Desde o dia 1, adote o Silent Gear.",
            tasks: [
              "Faça Blueprints de Picareta e Espada com Papel.",
              "Forje armas de Ferro no Silent Gear para usar Repair Kits.",
              "Crie sua base próxima a minérios para evoluir ao tier de Crimson Steel."
            ]
          }
        ]
      },
      {
        id: "early_utility",
        title: "Logística & Magia Inicial",
        quests: [
          {
            id: "early_backpack",
            icon: Backpack,
            title: "A Revolução do Inventário (Sophisticated Backpacks)",
            desc: "O ASTRON CITY tem centenas de itens por chunk minerado. Seu inventário vanilla não durará 5 minutos.",
            tasks: [
              { text: "Crie uma Magnet Upgrade básica e equipe na mochila de Ferro.", recipe: "magnet_upgrade" },
              "Use Stack Upgrades para carregar packs de Cobblestone ou Terra durante suas explorações."
            ]
          },
          {
            id: "early_magic",
            icon: Sparkles,
            title: "Cura Primordial (Iron's Spells)",
            desc: "Para economizar comida (que será escassa), inicie seu treinamento em feitiços de luz divina ou sangue.",
            tasks: [
              "Crie o grimório de madeira e uma Inscription Table.",
              "Encontre pergaminhos básicos de Heal (Magia Sagrada) ou Blood Needles. A magia regenera de graça!"
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
        title: "A Era do Vapor",
        quests: [
          {
            id: "tech_create_quest",
            icon: Factory,
            title: "Produção em Massa (Create Ecosystem)",
            desc: "Sua prioridade máxima é multiplicar recursos. Cada minério puro vale o dobro se você esmagá-lo no Create.",
            tasks: [
              "Crie uma roda d'água (Water Wheel) e ligue a Mechanical Belts.",
              "Instale Crushing Wheels para moer minérios brutos de Ferro e Ouro, triplicando o seu rendimento diário.",
              "Automatize o Latão (Brass) usando um Mechanical Mixer e um Blaze Burner."
            ]
          }
        ]
      },
      {
        id: "tech_power",
        title: "Eletrificação",
        quests: [
          {
            id: "tech_powah_quest",
            icon: Zap,
            title: "A Primeira Energia (Powah!)",
            desc: "Enquanto o Create funciona com força cinética, o restante dos mods exigirá FE (Forge Energy).",
            tasks: [
              { text: "Crie o seu Thermo Generator (Tier Starter) e injete água na lateral com magma em baixo.", recipe: "thermo_generator" },
              "Inicie a produção de Dielectric Paste misturando carvão e argila, pois você precisará de toneladas dela para os cabos."
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
        id: "magic_apothic",
        title: "Arcanismo Avançado",
        quests: [
          {
            id: "magic_apothic_quest",
            icon: Gem,
            title: "Quebrando os Limites (Apothic Ecosystem)",
            desc: "As armaduras vanilla já não suportam mais o dano absurdo dos monstros modificados do servidor.",
            tasks: [
              "Substitua as estantes de livros normais por estantes do The End e Seahelves.",
              "Eleve sua Eterna para atingir encantamentos Nível 50+. Forje espadas com Sharpness X.",
              { text: "Construa a Library of Alexandria para unificar centenas de livros mágicos.", recipe: "library_of_alexandria" }
            ]
          },
          {
            id: "magic_spells_quest",
            icon: Skull,
            title: "Feitiços Pesados (Iron's Spells)",
            desc: "Com recursos massivos fluindo, chegou a hora de dominar o verdadeiro dano arcano.",
            tasks: [
              "Crie Pergaminhos de feitiços nível Épico ou Lendário (Raio Cósmico, Explosão Estelar).",
              "Adote uma Armadura de Mago avançada focada num tipo elementar."
            ]
          }
        ]
      },
      {
        id: "magic_network",
        title: "A Consciência Digital",
        quests: [
          {
            id: "magic_ae2_quest",
            icon: Crown,
            title: "Centralização (AE2)",
            desc: "Com as automações gerando milhares de itens por hora, baús de diamante viram um problema grave.",
            tasks: [
              "Forje Storage Cells de 64k ou superiores.",
              "Destrua todos os seus baús e centralize-os em um único Crafting Terminal do AE2.",
              { text: "Use ME P2P Tunnels para levar a capacidade extrema da rede para todos os cômodos.", recipe: "p2p_tunnel" }
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
        id: "late_draconic",
        title: "O Despertar Dracônico",
        quests: [
          {
            id: "late_draconic_quest",
            icon: Shield,
            title: "O Despertar do Dragão (Draconic Evolution)",
            desc: "O ápice tecnológico absoluto. Para matar os deuses do servidor, as armaduras mundanas falham.",
            tasks: [
              "Minere Draconium e inicie o ritual de Fusion Crafting usando Injectors massivos.",
              "Forje a armadura Draconic: Ela absorve 100% de TODO o dano recebido contanto que tenha milhões de RF.",
              "Construa o Cajado do Poder (Staff of Power), capaz de minerar 9x9 blocos instantaneamente."
            ]
          }
        ]
      },
      {
        id: "late_cataclysm",
        title: "Caça aos Deuses",
        quests: [
          {
            id: "late_cataclysm_quest",
            icon: Skull,
            title: "Cataclysm",
            desc: "É hora de testar sua armadura milionária nas maiores masmorras que o jogo pode gerar.",
            tasks: [
              { text: "Derrote Ignis absorvendo as erupções vulcânicas com Cristais Nitro do Powah no inventário.", recipe: "nitro_crystal" },
              { text: "Invada a ruína do The End, derrote o Ender Golem e forje o mítico Void Core.", recipe: "void_core" },
              "Enfrente The Harbinger. Sobreviva aos ataques a laser aniquiladores usando vôo infinito."
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
