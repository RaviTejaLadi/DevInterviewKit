import htmlCheatSheet from './cheat-sheets/html.md?raw';
import cssCheatSheet from './cheat-sheets/css.md?raw';
import jsCheatSheet from './cheat-sheets/js.md?raw';
import reactCheatSheet from './cheat-sheets/react.md?raw';
import gitCheatSheet from './cheat-sheets/git.md?raw';
import httpCheatSheet from './cheat-sheets/http.md?raw';
import tailwindCheatSheet from './cheat-sheets/tailwind.md?raw';
import sqlCheatSheet from './cheat-sheets/sql.md?raw';
import mongoCheatSheet from './cheat-sheets/mongo.md?raw';
import nodeCheatSheet from './cheat-sheets/node.md?raw';
import expressCheatSheet from './cheat-sheets/express.md?raw';
import dsaCheatSheet from './cheat-sheets/dsa.md?raw';

import { Sheets } from '@/assets/technologies';

export const resourcesData = [
  {
    id: 'cheat-sheets',
    title: 'Cheat Sheets',
    Icon: Sheets,
    documents: [
      {
        id: 'html-cheat-sheet',
        title: 'HTML 🧱',
        content: htmlCheatSheet,
      },
      {
        id: 'css-cheat-sheet',
        title: 'CSS 🎨',
        content: cssCheatSheet,
      },
      {
        id: 'tailwind-cheat-sheet',
        title: 'Tailwind CSS 🌬️',
        content: tailwindCheatSheet,
      },
      {
        id: 'js-cheat-sheet',
        title: 'JavaScript 📜',
        content: jsCheatSheet,
      },
      {
        id: 'react-cheat-sheet',
        title: 'React ⚛️',
        content: reactCheatSheet,
      },
      {
        id: 'git-cheat-sheet',
        title: 'Git 🔧',
        content: gitCheatSheet,
      },
      {
        id: 'http-cheat-sheet',
        title: 'HTTP 🌐',
        content: httpCheatSheet,
      },
      {
        id: 'node-cheat-sheet',
        title: 'Node.js 🟢',
        content: nodeCheatSheet,
      },
      {
        id: 'express-cheat-sheet',
        title: 'Express 🚂',
        content: expressCheatSheet,
      },
      {
        id: 'sql-cheat-sheet',
        title: 'SQL 🗄️',
        content: sqlCheatSheet,
      },
      {
        id: 'mongo-cheat-sheet',
        title: 'MongoDB 🍃',
        content: mongoCheatSheet,
      },
      {
        id: 'dsa-cheat-sheet',
        title: 'DSA 🧠',
        content: dsaCheatSheet,
      },
    ],
  },
];
