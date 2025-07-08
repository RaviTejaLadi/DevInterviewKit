import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import 'kalki-ui/dist/index.css';
import './index.css';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { AlertDialogWrapper } from './components/ui/alert-dialog/AlertDialogWrapper.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AlertDialogWrapper>
        <App />
      </AlertDialogWrapper>
    </ThemeProvider>
  </StrictMode>
);
