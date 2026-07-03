import React from 'react';
import { Compass, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
      <div className="relative mb-8">
        <Compass size={120} className="text-[var(--accent-primary)] opacity-50 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-black text-[var(--text-primary)] tracking-widest drop-shadow-lg">
          404
        </div>
      </div>
      
      <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Você se perdeu na névoa...</h1>
      <p className="text-[var(--text-secondary)] max-w-md mb-8 text-lg">
        A página ou guia que você tentou acessar não existe nas escrituras da Astron City. Talvez o conhecimento tenha sido corrompido, ou você digitou a URL errada.
      </p>

      <button 
        onClick={() => navigate('/')}
        className="flex items-center gap-3 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white px-8 py-4 rounded-xl font-bold shadow-[0_0_20px_rgba(var(--accent-primary-rgb),0.4)] hover:scale-105 transition-transform"
      >
        <ArrowLeft size={20} />
        Retornar para o Acampamento (Início)
      </button>
    </div>
  );
}
