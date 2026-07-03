import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { describe, it, expect, vi } from 'vitest';
import App from './App';
import useStore from './store/useStore';

// Mock ResizeObserver for Framer Motion / Lucide icons
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock the Zustand store so we can easily test states
vi.mock('./store/useStore', () => {
  return {
    __esModule: true,
    default: vi.fn(),
  };
});

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key, i18n: { changeLanguage: vi.fn(), language: 'pt' } }),
}));

describe('App Routing Integration', () => {
  it('renders the 404 page for unknown routes', async () => {
    // Setup initial store state mock
    useStore.mockReturnValue({
      theme: 'dark',
      setTheme: vi.fn(),
      searchQuery: '',
      setSearchQuery: vi.fn(),
      mobileMenuOpen: false,
      setMobileMenuOpen: vi.fn(),
      activeRecipe: null,
      openRecipe: vi.fn(),
      closeRecipe: vi.fn(),
      activeItem: null,
      setActiveItem: vi.fn(),
    });

    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={['/unknown-route-123']}>
          <App />
        </MemoryRouter>
      </HelmetProvider>
    );
    
    // Verifica se a tela 404 apareceu (testado via interface/textos e não lógicas internas)
    await waitFor(() => {
      expect(screen.getByText('Você se perdeu na névoa...')).toBeInTheDocument();
    });
  });
});
