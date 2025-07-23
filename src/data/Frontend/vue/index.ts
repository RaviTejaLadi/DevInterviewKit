import vueIntro from './intro.md?raw';
import vueFilesAndFoldersStructure from './files-and-folders-structure.md?raw';
import vueTheoryQuestions from './theory-questions.md?raw';
import vueCodingQuestions from './coding-questions.md?raw';

export const vueConcepts = [
  {
    id: 'vue-js-intro',
    title: '📚 Introduction',
    content: vueIntro,
  },
  {
    id: 'vue-js-files-and-folders-structure',
    title: '📁 Files and Folders Structure',
    content: vueFilesAndFoldersStructure,
  },
  {
    id: 'theory-vue-js-interview-questions',
    title: '❓ Theory Interview Questions',
    content: vueTheoryQuestions,
  },
  {
    id: 'coding-vue-js-interview-questions',
    title: '💻 Coding Interview Questions',
    content: vueCodingQuestions,
  },
];
