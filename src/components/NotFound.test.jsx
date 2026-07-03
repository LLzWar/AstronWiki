import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './NotFound';
import { describe, it, expect } from 'vitest';

describe('NotFound Component', () => {
  it('renders the 404 message correctly', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    
    // Testa se o número 404 está na tela
    expect(screen.getByText('404')).toBeInTheDocument();
    
    // Testa se o texto de fallback está na tela
    expect(screen.getByText(/Você se perdeu na névoa/i)).toBeInTheDocument();
  });
});
