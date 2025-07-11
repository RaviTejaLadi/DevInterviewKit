import { Question } from '@/features/mockInterviews/types/questions';

export const kotlinQuestions: Question[] = [
  {
    id: 1,
    question: 'What is Kotlin?',
    code: '',
    options: [
      'A JavaScript framework',
      'A statically typed programming language for modern multiplatform applications',
      'A database management system',
      'A build automation tool',
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: 'What is the main advantage of Kotlin over Java?',
    code: '',
    options: [
      'Faster compilation speed',
      'More concise syntax and null safety',
      'Better support for low-level programming',
      'More primitive data types',
    ],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: 'How does Kotlin handle null safety?',
    code: '',
    options: [
      'By making all variables nullable by default',
      'Through nullable and non-nullable types',
      'By automatically initializing all variables to null',
      'Using special null-check operators only',
    ],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: 'What is a data class in Kotlin?',
    code: '',
    options: [
      'A class for database operations',
      'A class that holds structured data',
      'A class that automatically generates equals(), hashCode(), toString() and other functions',
      'A class for statistical calculations',
    ],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: 'What is the difference between "val" and "var" in Kotlin?',
    code: '',
    options: [
      'val is for variables, var is for constants',
      'val is immutable, var is mutable',
      'val is for public variables, var is for private variables',
      'There is no difference',
    ],
    correctAnswer: 1,
  },
  {
    id: 6,
    question: 'What is a Kotlin extension function?',
    code: '',
    options: [
      'A function that extends the compiler',
      'A function that adds new functionality to an existing class without inheriting from it',
      'A function that only works with collection types',
      'A function that extends the runtime environment',
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: 'What is the Elvis operator in Kotlin?',
    code: '',
    options: ['?:', '!!', '?.', '?:?'],
    correctAnswer: 0,
  },
  {
    id: 8,
    question: 'What is the purpose of the "when" expression in Kotlin?',
    code: '',
    options: [
      'To define loops',
      'To handle exceptions',
      'As a replacement for switch-case statements',
      'To declare variables conditionally',
    ],
    correctAnswer: 2,
  },
  {
    id: 9,
    question: 'What is a sealed class in Kotlin?',
    code: '',
    options: [
      'A class that cannot be instantiated',
      'A class that restricts inheritance to its own file',
      'A class that represents restricted class hierarchies',
      'A class with private constructor only',
    ],
    correctAnswer: 2,
  },
  {
    id: 10,
    question: 'What is the difference between "==" and "===" in Kotlin?',
    code: '',
    options: [
      '"==" checks structural equality, "===" checks referential equality',
      '"==" checks referential equality, "===" checks structural equality',
      'They are identical',
      '"==" is for numbers, "===" is for strings',
    ],
    correctAnswer: 0,
  },
  {
    id: 11,
    question: 'What is a companion object in Kotlin?',
    code: '',
    options: [
      'An object that accompanies another object',
      'A singleton object tied to a class (similar to static in Java)',
      'An object that implements the companion interface',
      'A special type of collection object',
    ],
    correctAnswer: 1,
  },
  {
    id: 12,
    question: 'How does Kotlin support functional programming?',
    code: '',
    options: [
      'Through higher-order functions and lambdas',
      'By making all functions pure',
      'By removing object-oriented features',
      'Through special functional classes',
    ],
    correctAnswer: 0,
  },
  {
    id: 13,
    question: 'What is the purpose of the "init" block in Kotlin?',
    code: '',
    options: [
      'To initialize static variables',
      'To mark the beginning of a program',
      'As part of the primary constructor execution',
      'To initialize companion objects',
    ],
    correctAnswer: 2,
  },
  {
    id: 14,
    question: 'What is a higher-order function in Kotlin?',
    code: '',
    options: [
      'A function that takes another function as parameter or returns a function',
      'A function defined in a parent class',
      'A function with more than 10 parameters',
      'A function that performs advanced mathematical operations',
    ],
    correctAnswer: 0,
  },
  {
    id: 15,
    question: 'What is the difference between "open" and "final" classes in Kotlin?',
    code: '',
    options: [
      'open classes can be inherited, final classes cannot',
      'final classes can be inherited, open classes cannot',
      'open classes are abstract, final classes are concrete',
      'There is no difference',
    ],
    correctAnswer: 0,
  },
  {
    id: 16,
    question: 'What is the purpose of the "lateinit" keyword in Kotlin?',
    code: '',
    options: [
      'To delay class initialization',
      'To mark properties that will be initialized later (non-null)',
      'To make initialization lazy',
      'To prevent initialization',
    ],
    correctAnswer: 1,
  },
  {
    id: 17,
    question: 'What is a coroutine in Kotlin?',
    code: '',
    options: [
      'A special type of class',
      'A lightweight thread for asynchronous programming',
      'A synchronization mechanism',
      'A build script component',
    ],
    correctAnswer: 1,
  },
  {
    id: 18,
    question: 'What is the purpose of the "let" scope function?',
    code: '',
    options: [
      'To create new variables',
      'To execute a block of code on a non-null object',
      'To define loops',
      'To handle exceptions',
    ],
    correctAnswer: 1,
  },
  {
    id: 19,
    question: 'What is the difference between "apply" and "also" scope functions?',
    code: '',
    options: [
      '"apply" returns the context object, "also" returns the lambda result',
      '"apply" returns the lambda result, "also" returns the context object',
      'They are identical',
      '"apply" works with collections, "also" works with single objects',
    ],
    correctAnswer: 0,
  },
  {
    id: 20,
    question: 'What is the purpose of the "suspend" keyword in Kotlin?',
    code: '',
    options: [
      'To pause thread execution',
      'To mark functions that can be used in coroutines',
      'To prevent function execution',
      'To mark deprecated functions',
    ],
    correctAnswer: 1,
  },
  {
    id: 21,
    question: 'What is a destructuring declaration in Kotlin?',
    code: 'val (name, age) = person',
    options: [
      'A way to break down an object into multiple variables',
      'A special type of variable declaration',
      'A way to declare multiple variables of the same type',
      'A deprecated feature',
    ],
    correctAnswer: 0,
  },
  {
    id: 22,
    question: 'What is the purpose of the "reified" keyword in Kotlin?',
    code: '',
    options: [
      'To make generic type information available at runtime',
      'To mark classes as final',
      'To enforce variable initialization',
      'To optimize performance',
    ],
    correctAnswer: 0,
  },
  {
    id: 23,
    question: 'What is the default visibility modifier in Kotlin?',
    code: '',
    options: ['private', 'protected', 'internal', 'public'],
    correctAnswer: 3,
  },
  {
    id: 24,
    question: 'What is the purpose of the "crossinline" modifier in Kotlin?',
    code: '',
    options: [
      'To prevent non-local returns in lambdas',
      'To optimize performance of inline functions',
      'To allow cross-class inheritance',
      'To mark functions that can be used across modules',
    ],
    correctAnswer: 0,
  },
  {
    id: 25,
    question: 'What is an inline function in Kotlin?',
    code: '',
    options: [
      'A function that must be defined in a single line',
      'A function whose code is inserted at the call site',
      'A function that can only be called once',
      'A function that operates on inline classes',
    ],
    correctAnswer: 1,
  },
  {
    id: 26,
    question: 'What is the purpose of the "tailrec" modifier in Kotlin?',
    code: '',
    options: [
      'To mark recursive functions that should be optimized by the compiler',
      'To mark functions that can only be called at the end of other functions',
      'To prevent stack overflow errors',
      'To optimize tail-end operations',
    ],
    correctAnswer: 0,
  },
  {
    id: 27,
    question: 'What is a typealias in Kotlin?',
    code: '',
    options: [
      'A way to create alternative names for existing types',
      'A special type of inheritance',
      'A way to alias variable names',
      'A deprecated feature',
    ],
    correctAnswer: 0,
  },
  {
    id: 28,
    question: 'What is the purpose of the "internal" visibility modifier?',
    code: '',
    options: [
      'Visible within the same module',
      'Visible within the same file',
      'Visible within the same class hierarchy',
      'Visible everywhere',
    ],
    correctAnswer: 0,
  },
  {
    id: 29,
    question: 'What is the difference between List and Array in Kotlin?',
    code: '',
    options: [
      'List is immutable, Array is mutable',
      'Array is immutable, List is mutable',
      'List has fixed size, Array can grow',
      'They are identical',
    ],
    correctAnswer: 0,
  },
  {
    id: 30,
    question: 'What is the purpose of the "infix" notation in Kotlin?',
    code: '',
    options: [
      'To enable natural language function calls',
      'To optimize mathematical operations',
      'To mark functions that can be used in interfaces',
      'To create infinite sequences',
    ],
    correctAnswer: 0,
  },
];
