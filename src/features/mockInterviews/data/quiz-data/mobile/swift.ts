import { Question } from '@/features/mockInterviews/types/questions';

export const swiftQuestions: Question[] = [
  {
    id: 1,
    question: 'What is Swift?',
    code: '',
    options: [
      'A scripting language for web development',
      'A general-purpose, compiled programming language developed by Apple',
      'A database query language',
      'A markup language for iOS apps',
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: 'What are the main advantages of Swift over Objective-C?',
    code: '',
    options: [
      'Faster performance and more concise syntax',
      'Better compatibility with Android',
      'More complex syntax for advanced programmers',
      'No difference, they are identical',
    ],
    correctAnswer: 0,
  },
  {
    id: 3,
    question: 'What is type inference in Swift?',
    code: 'let name = "John" // Compiler infers String type',
    options: [
      'The compiler automatically deduces the type of variables',
      'A way to convert between types',
      'A special type of interface',
      'A debugging feature',
    ],
    correctAnswer: 0,
  },
  {
    id: 4,
    question: 'What is the difference between "let" and "var" in Swift?',
    code: '',
    options: [
      '"let" is for constants, "var" is for variables',
      '"let" is for variables, "var" is for constants',
      'They are identical',
      '"let" is for strings, "var" is for numbers',
    ],
    correctAnswer: 0,
  },
  {
    id: 5,
    question: 'What are optionals in Swift?',
    code: 'var age: Int? = nil',
    options: [
      'Special types that can hold either a value or nil',
      'Optional parameters in functions',
      'Alternative names for variables',
      'A type of loop',
    ],
    correctAnswer: 0,
  },
  {
    id: 6,
    question: 'What is optional binding?',
    code: 'if let name = optionalName { ... }',
    options: [
      'A way to safely unwrap optionals',
      'A memory management technique',
      'A way to bind UI elements',
      'A type of protocol',
    ],
    correctAnswer: 0,
  },
  {
    id: 7,
    question: 'What is the guard statement used for?',
    code: '',
    options: [
      "Early exit from a scope if conditions aren't met",
      'Memory protection',
      'Thread synchronization',
      'Error suppression',
    ],
    correctAnswer: 0,
  },
  {
    id: 8,
    question: 'What are Swift properties?',
    code: '',
    options: [
      'Values associated with a class or struct',
      'UI elements in Storyboard',
      'Compiler settings',
      'App store metadata',
    ],
    correctAnswer: 0,
  },
  {
    id: 9,
    question: 'What is the difference between stored and computed properties?',
    code: '',
    options: [
      'Stored properties hold values, computed properties calculate them',
      'Computed properties hold values, stored properties calculate them',
      'They are identical',
      'Stored properties are for classes, computed for structs',
    ],
    correctAnswer: 0,
  },
  {
    id: 10,
    question: 'What are property observers?',
    code: 'var score: Int { didSet { ... } }',
    options: [
      'Code that responds to property value changes',
      'Objects that watch other objects',
      'A type of protocol',
      'Compiler warnings about properties',
    ],
    correctAnswer: 0,
  },
  {
    id: 11,
    question: 'What is a protocol in Swift?',
    code: '',
    options: [
      'A blueprint of methods and properties',
      'A network communication standard',
      'A type of class',
      'A compiler directive',
    ],
    correctAnswer: 0,
  },
  {
    id: 12,
    question: 'What is protocol-oriented programming?',
    code: '',
    options: [
      'A design paradigm emphasizing protocol extensions',
      'Network programming',
      'A way to organize source files',
      'A deprecated programming style',
    ],
    correctAnswer: 0,
  },
  {
    id: 13,
    question: 'What is the difference between structs and classes?',
    code: '',
    options: [
      'Structs are value types, classes are reference types',
      'Classes are value types, structs are reference types',
      'They are identical',
      'Structs can inherit, classes cannot',
    ],
    correctAnswer: 0,
  },
  {
    id: 14,
    question: 'What are generics in Swift?',
    code: 'func swap<T>(_ a: inout T, _ b: inout T)',
    options: [
      'Flexible, reusable functions and types',
      'A type of protocol',
      'Memory management tools',
      'Deprecated language feature',
    ],
    correctAnswer: 0,
  },
  {
    id: 15,
    question: 'What is ARC (Automatic Reference Counting)?',
    code: '',
    options: [
      "Swift's memory management system",
      'A type of architecture',
      'A network protocol',
      'A graphics rendering technique',
    ],
    correctAnswer: 0,
  },
  {
    id: 16,
    question: 'What is a strong reference cycle?',
    code: '',
    options: [
      'When objects reference each other preventing ARC from releasing them',
      'A powerful loop structure',
      'A type of protocol implementation',
      'A compiler optimization',
    ],
    correctAnswer: 0,
  },
  {
    id: 17,
    question: 'How do you prevent strong reference cycles?',
    code: '',
    options: [
      'Using weak or unowned references',
      'Using strong references',
      'Making all references optional',
      'Using structs exclusively',
    ],
    correctAnswer: 0,
  },
  {
    id: 18,
    question: 'What are higher-order functions?',
    code: 'let numbers = [1, 2, 3].map { $0 * 2 }',
    options: [
      'Functions that take other functions as parameters',
      'Functions with many parameters',
      'Functions defined in extensions',
      'Functions that return protocols',
    ],
    correctAnswer: 0,
  },
  {
    id: 19,
    question: 'What is the difference between map, filter, and reduce?',
    code: '',
    options: [
      'map transforms, filter selects, reduce combines',
      'They are identical',
      'filter transforms, map selects, reduce combines',
      'map combines, filter transforms, reduce selects',
    ],
    correctAnswer: 0,
  },
  {
    id: 20,
    question: 'What are Swift extensions?',
    code: 'extension String { ... }',
    options: [
      'Ways to add functionality to existing types',
      'Compiler plugins',
      'App bundle components',
      'Network request handlers',
    ],
    correctAnswer: 0,
  },
  {
    id: 21,
    question: 'What is access control in Swift?',
    code: '',
    options: [
      'Restricting access to code entities',
      'User authentication system',
      'Memory access optimization',
      'A type of protocol',
    ],
    correctAnswer: 0,
  },
  {
    id: 22,
    question: 'What are the main access levels in Swift?',
    code: '',
    options: [
      'open, public, internal, fileprivate, private',
      'public, protected, private',
      'global, local, instance',
      'strong, weak, unowned',
    ],
    correctAnswer: 0,
  },
  {
    id: 23,
    question: 'What is error handling in Swift?',
    code: 'do { try ... } catch { ... }',
    options: [
      'Responding to and recovering from errors',
      'Ignoring errors',
      'A type of protocol',
      'Compiler error suppression',
    ],
    correctAnswer: 0,
  },
  {
    id: 24,
    question: 'What is the difference between try, try?, and try!?',
    code: '',
    options: [
      'try requires handling, try? returns optional, try! crashes on error',
      'They are identical',
      'try! is the safest option',
      'try? requires do-catch block',
    ],
    correctAnswer: 0,
  },
  {
    id: 25,
    question: 'What are Swift enums?',
    code: 'enum Direction { case north, south }',
    options: ['Types with a set of related values', 'A type of loop', 'Network endpoints', 'Memory management tools'],
    correctAnswer: 0,
  },
  {
    id: 26,
    question: 'What are associated values in enums?',
    code: 'enum Result { case success(Data), failure(Error) }',
    options: [
      'Additional values associated with enum cases',
      'Values shared by all cases',
      'A type of protocol',
      'Enum properties',
    ],
    correctAnswer: 0,
  },
  {
    id: 27,
    question: 'What is pattern matching in Swift?',
    code: 'switch value { case let x where x > 0: ... }',
    options: [
      'Checking values against patterns',
      'A type of protocol',
      'Memory pattern detection',
      'A deprecated feature',
    ],
    correctAnswer: 0,
  },
  {
    id: 28,
    question: 'What are Swift closures?',
    code: '{ (params) -> ReturnType in ... }',
    options: [
      'Self-contained blocks of functionality',
      'Memory management tools',
      'A type of class',
      'Compiler directives',
    ],
    correctAnswer: 0,
  },
  {
    id: 29,
    question: 'What is the difference between escaping and non-escaping closures?',
    code: '',
    options: [
      'Escaping closures outlive the function they were passed to',
      'Non-escaping closures can be stored',
      'They are identical',
      'Escaping closures cannot capture self',
    ],
    correctAnswer: 0,
  },
  {
    id: 30,
    question: 'What is @MainActor in Swift?',
    code: '@MainActor func updateUI() { ... }',
    options: [
      'A marker for code that must run on the main thread',
      'A type of protocol',
      'A memory management attribute',
      'A deprecated concurrency feature',
    ],
    correctAnswer: 0,
  },
];
