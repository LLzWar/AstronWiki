import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './MarkdownViewer.css';

const MarkdownViewer = ({ fileUrl }) => {
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
    <div className="wiki-tab-content markdown-body">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;
