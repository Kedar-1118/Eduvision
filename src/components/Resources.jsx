export default function ResourcesPage() {
  const resources = [
    {
      category: "Books",
      items: [
        {
          title: "Python Crash Course",
          url: "https://nostarch.com/pythoncrashcourse2e",
          description: "Beginner-friendly Python programming book"
        },
        {
          title: "C++ Primer",
          url: "https://www.cpp-primer.com/",
          description: "Comprehensive guide to modern C++"
        },
        {
          title: "Clean Code",
          url: "https://www.oreilly.com/library/view/clean-code/9780136083238/",
          description: "Software craftsmanship guide by Robert C. Martin"
        }
      ],
      color: "purple"
    },
    {
      category: "Articles & Blogs",
      items: [
        {
          title: "Real Python Articles",
          url: "https://realpython.com/",
          description: "High-quality Python tutorials and articles"
        },
        {
          title: "Dev.to Community Posts",
          url: "https://dev.to/",
          description: "Developer community blog platform"
        },
        {
          title: "Medium Programming",
          url: "https://medium.com/tag/programming",
          description: "Programming articles and tutorials"
        }
      ],
      color: "blue"
    },
    {
      category: "Official Websites",
      items: [
        {
          title: "Python Official",
          url: "https://www.python.org/",
          description: "Official Python programming language website"
        },
        {
          title: "C++ Reference",
          url: "https://isocpp.org/",
          description: "Standard C++ Foundation website"
        },
        {
          title: "Docker Docs",
          url: "https://www.docker.com/",
          description: "Official Docker documentation and resources"
        },
        {
          title: "Kubernetes",
          url: "https://kubernetes.io/",
          description: "Official Kubernetes documentation"
        },
        {
          title: "DeepSeek",
          url: "https://www.deepseek.com/",
          description: "Official DeepSeek website"
        },
        {
          title: "ChatGPT",
          url: "https://chat.openai.com/",
          description: "Official ChatGPT interface"
        }
      ],
      color: "green"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 mt-10">
      <h1 className="text-4xl font-bold text-center mb-12">Developer Resources</h1>

      {resources.map((section) => (
        <section key={section.category} className="mb-16">
          <h2 className={`text-2xl font-bold mb-6 text-${section.color}-400`}>
            {section.category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.items.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors border-l-4 border-${section.color}-500`}
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
                <span className="mt-3 inline-block text-sm text-gray-400 hover:text-white">
                  Visit Resource →
                </span>
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}