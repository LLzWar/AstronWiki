import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle, BookOpen } from 'lucide-react';
import { WARLORD_DATA } from '../data/warlordData';

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
