import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Download } from 'lucide-react';
import './MarkdownViewer.css';

const MarkdownViewer = ({ fileUrl, pdfUrl }) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

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
        setContent(text);
        setLoading(false);
      })
      .catch(error => {
        setContent('# Erro ao carregar o guia\n\nNão foi possível encontrar o arquivo.');
        setLoading(false);
      });
  }, [fileUrl]);

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
        <a 
          href={pdfUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="nav-btn" 
          style={{ 
            position: 'absolute', 
            top: '1rem', 
            right: '1rem', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            padding: '0.5rem 1rem', 
            backgroundColor: 'var(--accent-primary)',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            zIndex: 10
          }}
        >
          <Download size={18} />
          Baixar PDF Oficial
        </a>
      )}
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;
