import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { Download, ArrowUp } from 'lucide-react';
import './MarkdownViewer.css';

const MarkdownViewer = ({ fileUrl, pdfUrl }) => {
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

    // Usando true para a fase de captura (captura o scroll de qualquer container)
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

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
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]}>
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
