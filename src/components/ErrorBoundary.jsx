import React from 'react';
import { AlertTriangle, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

class ErrorBoundaryFallback extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8 bg-red-900/10 border border-red-500/20 rounded-xl">
          <AlertTriangle size={64} className="text-red-500 mb-4" />
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Um Erro Crítico Ocorreu</h2>
          <p className="text-[var(--text-secondary)] mb-6 max-w-md">
            Houve uma falha ao renderizar esta seção da Wiki. Isso geralmente ocorre devido a um erro de formatação no banco de dados.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-2 bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white px-6 py-3 rounded-lg font-bold transition-all"
          >
            <Home size={20} />
            Voltar para o Início
          </button>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundaryFallback;
