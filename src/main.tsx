import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { SolanaWalletProvider } from './components/SolanaWalletProvider';
import { ErrorBoundary } from './components/ErrorBoundary';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <SolanaWalletProvider>
        <App />
      </SolanaWalletProvider>
    </ErrorBoundary>
  </StrictMode>
);