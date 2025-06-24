import { System } from '@/assets/technologies';

import webSecurity from './SystemDesign/web-security.md?raw';
import networking from './SystemDesign/networking.md?raw';
import errorLogging from './SystemDesign/logging-and-monitoring.md?raw';
import owasp from './SystemDesign/owasp.md?raw';

export const backendData = [
  {
    id: 'system-design',
    title: 'System Design',
    Icon: System,
    documents: [
      {
        id: 'web-security-intro',
        title: 'Web Security',
        content: webSecurity,
      },
      {
        id: 'networking-questions',
        title: 'Networking',
        content: networking,
      },
      {
        id: 'error-logging-questions',
        title: 'Logging & Monitoring',
        content: errorLogging,
      },
      {
        id: 'owasp',
        title: 'OWASP',
        content: owasp,
      },
    ],
  },
];
