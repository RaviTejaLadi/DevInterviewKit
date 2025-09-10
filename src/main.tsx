import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
// import 'kalki-ui/dist/index.css';
import './index.css';
import '@xyflow/react/dist/style.css';
import { ThemeProvider } from './context/ThemeTestContext.tsx';
import { AlertDialogWrapper } from './components/ui/alert-dialog/AlertDialogWrapper.tsx';
import { ToastProvider } from 'kalki-ui-toast';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ToastProvider>
        <AlertDialogWrapper>
          <App />
        </AlertDialogWrapper>
      </ToastProvider>
    </ThemeProvider>
  </StrictMode>
);
