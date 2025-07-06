import htmlCheatSheet from './cheat-sheets/html.md?raw';
import cssCheatSheet from './cheat-sheets/css.md?raw';
import sassCheatSheet from './cheat-sheets/sass.md?raw';
import jsCheatSheet from './cheat-sheets/js.md?raw';
import es6CheatSheet from './cheat-sheets/es6.md?raw';
import reactCheatSheet from './cheat-sheets/react.md?raw';
import gitCheatSheet from './cheat-sheets/git.md?raw';
import httpCheatSheet from './cheat-sheets/http.md?raw';
import tailwindCheatSheet from './cheat-sheets/tailwind.md?raw';
import sqlCheatSheet from './cheat-sheets/sql.md?raw';
import mongoCheatSheet from './cheat-sheets/mongo.md?raw';
import nodeCheatSheet from './cheat-sheets/node.md?raw';
import expressCheatSheet from './cheat-sheets/express.md?raw';
import dsaCheatSheet from './cheat-sheets/dsa.md?raw';
import javaCheatSheet from './cheat-sheets/java.md?raw';
import pythonCheatSheet from './cheat-sheets/python.md?raw';
import reactRouterDomCheatSheet from './cheat-sheets/react-router-dom.md?raw';
import mySqlCheatSheet from './cheat-sheets/my-sql.md?raw';

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
        id: 'sass-cheat-sheet',
        title: 'SASS 🎨',
        content: sassCheatSheet,
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
        id: 'es6-cheat-sheet',
        title: 'ES6 📜',
        content: es6CheatSheet,
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
        id: 'my-sql-cheat-sheet',
        title: 'MySQL 🗄️',
        content: mySqlCheatSheet,
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
      {
        id: 'java-cheat-sheet',
        title: 'Java ☕',
        content: javaCheatSheet,
      },
      {
        id: 'Python-cheat-sheet',
        title: 'Python 🐍',
        content: pythonCheatSheet,
      },
      {
        id: 'react-router-dom-cheat-sheet',
        title: 'React Router Dom ',
        content: reactRouterDomCheatSheet,
      },
    ],
  },
];
