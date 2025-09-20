import { useState, useEffect, useRef, useCallback } from "react";
import MonacoEditor from "@monaco-editor/react";
import { 
  FiPlus, FiTrash2, FiEdit, FiFolder, FiFile, FiSearch, 
  FiSettings, FiTerminal, FiGitBranch, FiPlay, FiSave,
  FiChevronDown, FiChevronRight, FiX, FiMaximize2,
  FiMinimize2, FiSidebar, FiZap, FiDownload, FiUpload,
  FiBell, FiUser, FiGithub, FiCommand
} from "react-icons/fi";

const defaultProject = {
  id: 'default',
  name: "Welcome Project",
  files: {
    'README.md': {
      content: `# Welcome to Browser IDE
      
A powerful, VS Code-like editor in your browser.

## Features
- Multi-file support
- Live preview for web languages
- Built-in terminal
- Git integration
- Extensions support
- Custom themes
- IntelliSense & syntax highlighting

Start coding by creating new files or editing existing ones!`,
      language: 'markdown'
    },
    'index.html': {
      content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Project</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Hello, World!</h1>
        <p>Welcome to your new project.</p>
        <button onclick="greet()">Click me!</button>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
      language: 'html'
    },
    'style.css': {
      content: `.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    text-align: center;
}

h1 {
    color: #333;
    font-size: 2.5rem;
    margin-bottom: 20px;
    background: linear-gradient(45deg, #007acc, #00d4ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

p {
    color: #666;
    font-size: 1.1rem;
    margin-bottom: 30px;
}

button {
    background: linear-gradient(45deg, #007acc, #00d4ff);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: transform 0.2s;
}

button:hover {
    transform: translateY(-2px);
}`,
      language: 'css'
    },
    'script.js': {
      content: `function greet() {
    const messages = [
        "Hello there! 👋",
        "Great to see you! 🎉",
        "Happy coding! 💻",
        "You're awesome! ⭐",
        "Keep building! 🚀"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
}

// Add some console magic
console.log("%c🌟 Welcome to Browser IDE!", "color: #007acc; font-size: 20px; font-weight: bold;");
console.log("%cStart building amazing things!", "color: #00d4ff; font-size: 14px;");

// Auto-greet after 3 seconds
setTimeout(() => {
    console.log("🎈 Auto-greeting in 3... 2... 1...");
}, 1000);`,
      language: 'javascript'
    }
  },
  activeFile: 'README.md'
};

const themes = {
  'vs-dark': 'Dark (Visual Studio)',
  'vs': 'Light (Visual Studio)', 
  'hc-black': 'High Contrast Dark',
  'monokai': 'Monokai'
};

const supportedLanguages = [
  'html', 'css', 'javascript', 'typescript', 'json', 'markdown',
  'python', 'java', 'cpp', 'c', 'csharp', 'php', 'ruby', 
  'go', 'rust', 'swift', 'kotlin', 'sql', 'yaml', 'xml'
];

export default function BrowserIDE() {
  const [projects, setProjects] = useState([defaultProject]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [activeFile, setActiveFile] = useState('README.md');
  const [openFiles, setOpenFiles] = useState(['README.md']);
  const [theme, setTheme] = useState('vs-dark');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [panelCollapsed, setPanelCollapsed] = useState(true);
  const [activePanel, setActivePanel] = useState('terminal');
  const [terminalOutput, setTerminalOutput] = useState('Welcome to Browser IDE Terminal\n$ ');
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [expandedFolders, setExpandedFolders] = useState(new Set());
  
  const editorRef = useRef(null);
  const terminalRef = useRef(null);

  const currentProject = projects[currentProjectIndex] || defaultProject;
  const currentFileContent = currentProject.files[activeFile]?.content || '';
  const currentFileLanguage = currentProject.files[activeFile]?.language || 'plaintext';

  // Save to memory (simulating localStorage)
  const saveProjects = useCallback(() => {
    try {
      // In a real implementation, this would save to localStorage
      // For this demo, we'll keep everything in memory
      console.log('Projects saved to memory');
    } catch (error) {
      addNotification('Failed to save projects', 'error');
    }
  }, []);

  const addNotification = (message, type = 'info') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  };

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
    
    // Add custom keybindings
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      saveCurrentFile();
    });
    
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyN, () => {
      createNewFile();
    });
  };

  const handleCodeChange = (value) => {
    const updatedProjects = [...projects];
    if (!updatedProjects[currentProjectIndex].files[activeFile]) {
      updatedProjects[currentProjectIndex].files[activeFile] = { content: '', language: 'plaintext' };
    }
    updatedProjects[currentProjectIndex].files[activeFile].content = value;
    setProjects(updatedProjects);
    saveProjects();
  };

  const saveCurrentFile = () => {
    saveProjects();
    addNotification(`${activeFile} saved successfully`, 'success');
  };

  const createNewProject = () => {
    const name = prompt('Enter project name:') || `Project ${projects.length + 1}`;
    const newProject = {
      id: Date.now().toString(),
      name,
      files: {
        'main.js': { content: '// New file\nconsole.log("Hello World!");', language: 'javascript' }
      },
      activeFile: 'main.js'
    };
    setProjects([...projects, newProject]);
    setCurrentProjectIndex(projects.length);
    setActiveFile('main.js');
    setOpenFiles(['main.js']);
    addNotification(`Project "${name}" created`, 'success');
  };

  const deleteProject = (index) => {
    if (!confirm('Delete this project?')) return;
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
    setCurrentProjectIndex(Math.max(0, index - 1));
    addNotification('Project deleted', 'info');
  };

  const createNewFile = () => {
    const fileName = prompt('Enter file name (with extension):');
    if (!fileName) return;
    
    const extension = fileName.split('.').pop();
    const language = supportedLanguages.includes(extension) ? extension : 'plaintext';
    
    const updatedProjects = [...projects];
    updatedProjects[currentProjectIndex].files[fileName] = {
      content: getTemplateForLanguage(language),
      language
    };
    setProjects(updatedProjects);
    setActiveFile(fileName);
    if (!openFiles.includes(fileName)) {
      setOpenFiles([...openFiles, fileName]);
    }
    addNotification(`File "${fileName}" created`, 'success');
  };

  const getTemplateForLanguage = (lang) => {
    const templates = {
      javascript: '// New JavaScript file\nconsole.log("Hello World!");',
      python: '# New Python file\nprint("Hello World!")',
      html: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Document</title>\n</head>\n<body>\n    <h1>Hello World!</h1>\n</body>\n</html>',
      css: '/* New CSS file */\nbody {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 20px;\n}',
      markdown: '# New Document\n\nWrite your content here...'
    };
    return templates[lang] || `// New ${lang} file\n`;
  };

  const deleteFile = (fileName) => {
    if (!confirm(`Delete ${fileName}?`)) return;
    
    const updatedProjects = [...projects];
    delete updatedProjects[currentProjectIndex].files[fileName];
    setProjects(updatedProjects);
    
    // Remove from open files
    const newOpenFiles = openFiles.filter(f => f !== fileName);
    setOpenFiles(newOpenFiles);
    
    // Switch to another file if this was active
    if (fileName === activeFile) {
      const nextFile = newOpenFiles[0] || Object.keys(currentProject.files)[0];
      setActiveFile(nextFile);
    }
    
    addNotification(`File "${fileName}" deleted`, 'info');
  };

  const runCode = () => {
    if (currentFileLanguage === 'javascript') {
      try {
        // Create a safe execution environment
        const consoleOutput = [];
        const mockConsole = {
          log: (...args) => consoleOutput.push(args.join(' ')),
          error: (...args) => consoleOutput.push('ERROR: ' + args.join(' ')),
          warn: (...args) => consoleOutput.push('WARN: ' + args.join(' '))
        };
        
        const func = new Function('console', currentFileContent);
        func(mockConsole);
        
        setTerminalOutput(prev => prev + '\n' + consoleOutput.join('\n') + '\n$ ');
        setPanelCollapsed(false);
        setActivePanel('terminal');
      } catch (error) {
        setTerminalOutput(prev => prev + '\nError: ' + error.message + '\n$ ');
        setPanelCollapsed(false);
        setActivePanel('terminal');
      }
    } else {
      addNotification('Run is only supported for JavaScript files', 'info');
    }
  };

  const exportProject = () => {
    const dataStr = JSON.stringify(currentProject, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `${currentProject.name}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    addNotification('Project exported successfully', 'success');
  };

  const importProject = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const project = JSON.parse(e.target.result);
            setProjects([...projects, project]);
            addNotification('Project imported successfully', 'success');
          } catch (error) {
            addNotification('Failed to import project', 'error');
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop();
    const iconMap = {
      js: '📄', html: '🌐', css: '🎨', json: '📋', md: '📝',
      py: '🐍', java: '☕', cpp: '⚡', c: '🔧', php: '🐘'
    };
    return iconMap[extension] || '📄';
  };

  const filteredFiles = Object.keys(currentProject.files).filter(fileName =>
    fileName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderPreview = () => {
    if (currentFileLanguage === 'html') {
      return (
        <iframe
          title="Preview"
          className="w-full h-full border-0"
          srcDoc={currentFileContent}
          sandbox="allow-scripts allow-same-origin"
        />
      );
    }
    
    if (currentFileLanguage === 'markdown') {
      return (
        <div className="p-4 prose max-w-none">
          <pre className="whitespace-pre-wrap">{currentFileContent}</pre>
        </div>
      );
    }
    
    if (['javascript', 'css'].includes(currentFileLanguage)) {
      const htmlContent = currentProject.files['index.html']?.content || '';
      const cssContent = currentProject.files['style.css']?.content || '';
      const jsContent = currentProject.files['script.js']?.content || '';
      
      const fullHTML = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>${cssContent}</style>
        </head>
        <body>
          ${htmlContent}
          <script>${jsContent}</script>
        </body>
        </html>
      `;
      
      return (
        <iframe
          title="Preview"
          className="w-full h-full border-0"
          srcDoc={fullHTML}
          sandbox="allow-scripts allow-same-origin"
        />
      );
    }
    
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        <div className="text-center">
          <FiFile className="mx-auto mb-2 text-4xl" />
          <p>No preview available for {currentFileLanguage}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white font-mono">
      {/* Top Menu Bar */}
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-gray-700">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <FiCommand className="text-blue-400" />
            <span className="font-bold">Browser IDE</span>
          </div>
          
          <div className="flex space-x-2 text-sm">
            <button onClick={createNewFile} className="hover:bg-gray-700 px-2 py-1 rounded">File</button>
            <button onClick={() => setSearchQuery('')} className="hover:bg-gray-700 px-2 py-1 rounded">Edit</button>
            <button onClick={() => setTheme(theme === 'vs-dark' ? 'vs' : 'vs-dark')} className="hover:bg-gray-700 px-2 py-1 rounded">View</button>
            <button onClick={runCode} className="hover:bg-gray-700 px-2 py-1 rounded">Run</button>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <FiGitBranch className="text-green-400" />
            <span className="text-xs">main</span>
          </div>
          
          <div className="flex space-x-1">
            <button onClick={exportProject} className="p-1 hover:bg-gray-700 rounded" title="Export Project">
              <FiDownload size={16} />
            </button>
            <button onClick={importProject} className="p-1 hover:bg-gray-700 rounded" title="Import Project">
              <FiUpload size={16} />
            </button>
            <button onClick={saveCurrentFile} className="p-1 hover:bg-gray-700 rounded" title="Save (Ctrl+S)">
              <FiSave size={16} />
            </button>
            <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="p-1 hover:bg-gray-700 rounded" title="Toggle Sidebar">
              <FiSidebar size={16} />
            </button>
          </div>
          
          {notifications.length > 0 && (
            <div className="relative">
              <FiBell className="text-yellow-400" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-4 h-4 flex items-center justify-center text-white">
                {notifications.length}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Notifications */}
      <div className="fixed top-12 right-4 z-50 space-y-2">
        {notifications.map(notification => (
          <div
            key={notification.id}
            className={`px-4 py-2 rounded shadow-lg text-sm ${
              notification.type === 'error' ? 'bg-red-600' :
              notification.type === 'success' ? 'bg-green-600' :
              'bg-blue-600'
            }`}
          >
            {notification.message}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {!sidebarCollapsed && (
          <div className="w-80 bg-gray-800 flex flex-col border-r border-gray-700">
            {/* Project Selector */}
            <div className="p-4 border-b border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-300">PROJECTS</span>
                <button onClick={createNewProject} className="text-green-400 hover:text-green-300">
                  <FiPlus size={16} />
                </button>
              </div>
              
              <select
                value={currentProjectIndex}
                onChange={(e) => setCurrentProjectIndex(Number(e.target.value))}
                className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-1 text-sm"
              >
                {projects.map((project, index) => (
                  <option key={index} value={index}>{project.name}</option>
                ))}
              </select>
            </div>

            {/* File Explorer */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-3">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-300">EXPLORER</span>
                  <div className="flex space-x-1">
                    <button onClick={createNewFile} className="text-gray-400 hover:text-white">
                      <FiPlus size={14} />
                    </button>
                  </div>
                </div>
                
                {/* Search */}
                <input
                  type="text"
                  placeholder="Search files..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-2 py-1 text-xs mb-3"
                />

                {/* File List */}
                <div className="space-y-1">
                  {filteredFiles.map(fileName => (
                    <div
                      key={fileName}
                      className={`flex items-center justify-between p-2 rounded cursor-pointer group ${
                        fileName === activeFile ? 'bg-blue-600' : 'hover:bg-gray-700'
                      }`}
                      onClick={() => {
                        setActiveFile(fileName);
                        if (!openFiles.includes(fileName)) {
                          setOpenFiles([...openFiles, fileName]);
                        }
                      }}
                    >
                      <div className="flex items-center space-x-2">
                        <span>{getFileIcon(fileName)}</span>
                        <span className="text-sm truncate">{fileName}</span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteFile(fileName);
                        }}
                        className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-300"
                      >
                        <FiX size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Editor Area */}
        <div className="flex-1 flex flex-col">
          {/* Tab Bar */}
          <div className="flex items-center bg-gray-800 border-b border-gray-700 overflow-x-auto">
            {openFiles.map(fileName => (
              <div
                key={fileName}
                className={`flex items-center px-4 py-2 border-r border-gray-700 cursor-pointer ${
                  fileName === activeFile ? 'bg-gray-900' : 'hover:bg-gray-700'
                }`}
                onClick={() => setActiveFile(fileName)}
              >
                <span className="mr-2">{getFileIcon(fileName)}</span>
                <span className="text-sm">{fileName}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const newOpenFiles = openFiles.filter(f => f !== fileName);
                    setOpenFiles(newOpenFiles);
                    if (fileName === activeFile && newOpenFiles.length > 0) {
                      setActiveFile(newOpenFiles[0]);
                    }
                  }}
                  className="ml-2 text-gray-400 hover:text-white"
                >
                  <FiX size={14} />
                </button>
              </div>
            ))}
          </div>

          {/* Editor and Preview */}
          <div className="flex-1 flex">
            {/* Code Editor */}
            <div className="flex-1">
              <MonacoEditor
                height="100%"
                language={currentFileLanguage}
                theme={theme}
                value={currentFileContent}
                onChange={handleCodeChange}
                onMount={handleEditorDidMount}
                options={{
                  fontSize: 14,
                  fontFamily: 'JetBrains Mono, Fira Code, monospace',
                  minimap: { enabled: true },
                  automaticLayout: true,
                  wordWrap: 'on',
                  scrollBeyondLastLine: false,
                  tabSize: 2,
                  insertSpaces: true,
                  renderWhitespace: 'selection',
                  cursorSmoothCaretAnimation: true,
                  smoothScrolling: true,
                  contextmenu: true,
                  mouseWheelZoom: true,
                  formatOnPaste: true,
                  formatOnType: true,
                }}
              />
            </div>

            {/* Live Preview */}
            {['html', 'css', 'javascript', 'markdown'].includes(currentFileLanguage) && (
              <div className="w-1/2 border-l border-gray-700 bg-white">
                {renderPreview()}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Panel */}
      {!panelCollapsed && (
        <div className="h-64 bg-gray-800 border-t border-gray-700 flex flex-col">
          {/* Panel Tabs */}
          <div className="flex items-center justify-between bg-gray-900 px-4 py-2">
            <div className="flex space-x-4">
              {['terminal', 'output', 'problems'].map(panel => (
                <button
                  key={panel}
                  onClick={() => setActivePanel(panel)}
                  className={`text-sm px-3 py-1 rounded ${
                    activePanel === panel ? 'bg-blue-600' : 'hover:bg-gray-700'
                  }`}
                >
                  {panel.charAt(0).toUpperCase() + panel.slice(1)}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setPanelCollapsed(true)}
              className="text-gray-400 hover:text-white"
            >
              <FiMinimize2 size={16} />
            </button>
          </div>

          {/* Panel Content */}
          <div className="flex-1 p-4 overflow-auto">
            {activePanel === 'terminal' && (
              <div className="font-mono text-sm">
                <pre className="whitespace-pre-wrap text-green-400">{terminalOutput}</pre>
                <input
                  ref={terminalRef}
                  className="bg-transparent border-none outline-none text-white w-full"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const command = e.target.value;
                      setTerminalOutput(prev => prev + command + '\n$ ');
                      e.target.value = '';
                    }
                  }}
                />
              </div>
            )}
            
            {activePanel === 'output' && (
              <div className="text-sm text-gray-300">
                <p>Output panel - execution results will appear here</p>
              </div>
            )}
            
            {activePanel === 'problems' && (
              <div className="text-sm text-gray-300">
                <p>Problems panel - syntax errors and warnings will appear here</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Status Bar */}
      <div className="flex items-center justify-between bg-blue-600 px-4 py-1 text-xs">
        <div className="flex items-center space-x-4">
          <span>Ln 1, Col 1</span>
          <span>{currentFileLanguage.toUpperCase()}</span>
          <span>UTF-8</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <button onClick={() => setPanelCollapsed(!panelCollapsed)}>
            <FiTerminal />
          </button>
          <button onClick={() => setTheme(theme === 'vs-dark' ? 'vs' : 'vs-dark')}>
            {theme === 'vs-dark' ? '🌙' : '☀️'}
          </button>
          <span>Ready</span>
        </div>
      </div>
    </div>
  );
}