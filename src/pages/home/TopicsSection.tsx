import { Card, CardContent, CardHeader } from 'kalki-ui';
import { Laptop, Server, Database, Cloud, ClipboardList, CheckCircle, Workflow } from 'lucide-react';

const topics = [
  {
    title: 'Frontend Development 🚀',
    icon: Laptop,
    items: [
      'JavaScript (ES6+) – Async/Await, Closures 📝',
      'HTML5 & CSS3 – Semantic HTML, Flexbox, Grid 🎨',
      'Frontend Frameworks – React, Vue, Angular ⚛️',
      'State Management – Redux, Context API 🗂️',
    ],
  },
  {
    title: 'Backend Development 🛠️',
    icon: Server,
    items: [
      'Node.js & Express – REST APIs, Middleware 🔗',
      'Python (Django/Flask) – ORM, Authentication 🐍',
      'API Design – GraphQL, REST, WebSockets 🔌',
      'Authentication – JWT, OAuth, Session Mgmt 🔑',
    ],
  },
  {
    title: 'Databases 🗄️',
    icon: Database,
    items: [
      'SQL (PostgreSQL, MySQL) – Indexing, Joins 🛢️',
      'NoSQL (MongoDB, Firebase) – Schemaless Design 📂',
      'ORM/ODM – Sequelize, Mongoose, Prisma ⚙️',
      'Caching – Redis, Memcached ⚡',
    ],
  },
  {
    title: 'DevOps & Cloud ☁️',
    icon: Cloud,
    items: [
      'Docker & Kubernetes – Containers, Orchestration 🐳',
      'CI/CD Pipelines – GitHub Actions, Jenkins 🔄',
      'Cloud Platforms – AWS, GCP, Azure 🌐',
      'Serverless – AWS Lambda, Firebase Functions 🛰️',
    ],
  },
  {
    title: 'System Design 🏗️',
    icon: Workflow,
    items: [
      'Scalability – Load Balancing, Sharding ⚖️',
      'Microservices vs. Monoliths 🔍',
      'Design Patterns – Singleton, Observer 📐',
      'Real-World Case Studies – Twitter, Uber 📝',
    ],
  },
  {
    title: 'Interview Preparation 🎯',
    icon: ClipboardList,
    items: [
      'LeetCode-Style Challenges – Arrays, Trees 🌳',
      'Behavioral Interviews – STAR Method 💬',
      'Whiteboarding Tips – Think Aloud ✏️',
      'Mock Interviews with Feedback 🧑‍🏫',
    ],
  },
];

const TopicsSection = () => {
  return (
    <div className="py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Topics Covered</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
            Master All Interview Topics 📚
          </p>
          <p className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto text-center">
            Covering frontend, backend, databases, DevOps, and system design concepts.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => {
              const Icon = topic.icon;
              return (
                <Card
                  key={topic.title}
                  className="border-border"
                >
                  <CardHeader className="flex items-center">
                    <div className="flex-shrink-0 bg-primary p-3 rounded-lg">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="ml-4 text-lg font-medium text-foreground">{topic.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="mt-4 space-y-2">
                      {topic.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="flex-shrink-0 text-primary">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <p className="ml-2 text-sm text-muted-foreground">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicsSection;
