import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeRaw from 'rehype-raw';
import { Download, ArrowUp } from 'lucide-react';
import './MarkdownViewer.css';

const bannerConfigs = {
  create: {
    title: "Create Ecosystem",
    logo: "/assets/logos/create.png",
    gradient: "linear-gradient(135deg, rgba(230, 161, 92, 0.15) 0%, rgba(30, 30, 30, 0.5) 100%)",
    accent: "#e6a15c"
  },
  irons_spells: {
    title: "Iron's Spells 'n Spellbooks",
    logo: "/assets/logos/irons-spells-n-spellbooks.png",
    gradient: "linear-gradient(135deg, rgba(148, 64, 219, 0.15) 0%, rgba(30, 30, 30, 0.5) 100%)",
    accent: "#9440db"
  },
  cataclysm: {
    title: "L_Ender's Cataclysm",
    logo: "/assets/logos/cataclysm.png",
    gradient: "linear-gradient(135deg, rgba(255, 69, 0, 0.15) 0%, rgba(30, 30, 30, 0.5) 100%)",
    accent: "#ff4500"
  },
  ae2: {
    title: "Applied Energistics 2",
    logo: "/assets/logos/ae2.png",
    gradient: "linear-gradient(135deg, rgba(64, 224, 208, 0.15) 0%, rgba(30, 30, 30, 0.5) 100%)",
    accent: "#40e0d0"
  },
  mi: {
    title: "Modern Industrialization",
    logo: "/assets/logos/modern-industrialization.png",
    gradient: "linear-gradient(135deg, rgba(169, 169, 169, 0.15) 0%, rgba(30, 30, 30, 0.5) 100%)",
    accent: "#a9a9a9"
  },
  oritech: {
    title: "Oritech",
    logo: "/assets/logos/oritech.png",
    gradient: "linear-gradient(135deg, rgba(50, 205, 50, 0.15) 0%, rgba(30, 30, 30, 0.5) 100%)",
    accent: "#32cd32"
  },
  gear: {
    title: "Silent Gear (Completo)",
    logo: "/assets/logos/silent-gear.png",
    gradient: "linear-gradient(135deg, rgba(255, 215, 0, 0.15) 0%, rgba(30, 30, 30, 0.5) 100%)",
    accent: "#ffd700"
  },
  ice_and_fire: {
    title: "Ice and Fire: Dragons",
    logo: "/assets/logos/ice-and-fire.png",
    gradient: "linear-gradient(135deg, rgba(255, 69, 0, 0.15) 0%, rgba(0, 191, 255, 0.15) 50%, rgba(30, 30, 30, 0.5) 100%)",
    accent: "#ff4500"
  }
};

const MarkdownViewer = ({ fileUrl, pdfUrl }) => {
  const modId = fileUrl ? fileUrl.split('/').pop().replace('.md', '') : null;
  const bannerConfig = bannerConfigs[modId];

  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(fileUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Falha ao carregar o guia.');
        }
        return response.text();
      })
      .then(text => {
        // Remove blocos de metadados YAML (frontmatter) que o react-markdown não suporta nativamente
        const cleanText = text.replace(/^\s*---[\s\S]*?---\s*/, '');
        setContent(cleanText);
        setLoading(false);
      })
      .catch(error => {
        setContent('# Erro ao carregar o guia\n\nNão foi possível encontrar o arquivo.');
        setLoading(false);
      });
  }, [fileUrl]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const main = document.querySelector('.main-content');
      const mainScroll = main ? main.scrollTop : 0;
      
      if (scrollY > 300 || mainScroll > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  // Intercepta cliques em âncoras internas e substitui textos de craft por imagens
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.getAttribute('href') && target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href').substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    const timer = setTimeout(() => {
      const container = document.querySelector('.markdown-body');
      if (container) {
        container.addEventListener('click', handleAnchorClick);
        
        // Formata os slots de craft estáticos (textos -> Imagens/Siglas)
        const slots = container.querySelectorAll('.mc-slot, .mc-result');
        slots.forEach(slot => {
          if (slot.querySelector('img') || slot.querySelector('span')) return; // Já formatado
          
          const text = slot.textContent.trim();
          if (!text) return; // Slot vazio
          
          // Preservar o tooltip nativo
          if (!slot.getAttribute('title')) {
            slot.setAttribute('title', text);
          }

          slot.textContent = ''; // Limpar o texto cru espremido

          const getInitials = (name) => {
            const words = name.replace(/[^a-zA-Z0-9\s]/g, '').split(/\s+/);
            if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
            return (words[0][0] + (words[1] ? words[1][0] : '')).toUpperCase();
          };

          const slug = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          const imagePath = `/assets/items/${slug}.png`;

          const img = document.createElement('img');
          img.src = imagePath;
          img.alt = text;
          
          img.onerror = () => {
            img.style.display = 'none';
            const initialsSpan = document.createElement('span');
            initialsSpan.textContent = getInitials(text);
            initialsSpan.style.color = '#fff';
            initialsSpan.style.fontWeight = 'bold';
            initialsSpan.style.fontSize = slot.classList.contains('mc-result') ? '1.2rem' : '0.85rem';
            initialsSpan.style.letterSpacing = '1px';
            initialsSpan.style.textShadow = '1px 1px 0 #000';
            slot.appendChild(initialsSpan);
          };

          slot.appendChild(img);
        });
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      const container = document.querySelector('.markdown-body');
      if (container) {
        container.removeEventListener('click', handleAnchorClick);
      }
    };
  }, [content]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const main = document.querySelector('.main-content');
    if (main) {
      main.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="wiki-tab-content">
        <h2 className="section-title">Carregando Guia Completo...</h2>
      </div>
    );
  }

  return (
    <div className="wiki-tab-content markdown-body" style={{ position: 'relative' }}>
      {pdfUrl && (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
          <a 
            href={pdfUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-btn" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              gap: '0.75rem', 
              padding: '0.75rem 2rem', 
              backgroundColor: 'var(--bg-tertiary)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'
            }}
          >
            <Download size={20} />
            Baixar PDF Oficial
          </a>
        </div>
      )}
      {bannerConfig && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: '1.5rem',
          padding: '2.5rem 2rem', borderRadius: '12px', marginBottom: '2rem',
          background: bannerConfig.gradient,
          backgroundColor: 'var(--bg-secondary)',
          border: `1px solid ${bannerConfig.accent}40`,
          boxShadow: `0 10px 30px rgba(0,0,0,0.3), inset 0 0 20px ${bannerConfig.accent}10`,
          position: 'relative', overflow: 'hidden'
        }}>
          {/* Subtle background pattern */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05,
            backgroundImage: 'linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff), linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff)',
            backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px', zIndex: 0
          }} />
          
          <img src={bannerConfig.logo} alt={bannerConfig.title} style={{ 
            width: '90px', height: '90px', objectFit: 'contain', 
            filter: `drop-shadow(0 0 15px ${bannerConfig.accent})`, zIndex: 1 
          }} />
          <div style={{ zIndex: 1 }}>
            <h1 style={{ margin: 0, fontSize: '2.8rem', color: 'var(--text-primary)', textShadow: '0 2px 4px rgba(0,0,0,0.5)', letterSpacing: '-0.02em' }}>
              {bannerConfig.title}
            </h1>
            <p style={{ margin: '0.5rem 0 0 0', color: 'var(--text-secondary)', fontSize: '1.2rem', fontWeight: '500' }}>
              Documentação Oficial Transcrita
            </p>
          </div>
        </div>
      )}

      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeSlug]}>
        {content}
      </ReactMarkdown>

      {/* Botão de voltar ao topo */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            backgroundColor: 'var(--bg-tertiary)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-color)',
            borderRadius: '50%',
            width: '3rem',
            height: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
            zIndex: 100,
            transition: 'all 0.2s ease'
          }}
          title="Voltar ao topo"
        >
          <ArrowUp size={20} color="var(--accent-blue)" />
        </button>
      )}
    </div>
  );
};

export default MarkdownViewer;
