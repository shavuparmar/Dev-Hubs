const softwareData = [
  // Developer Tools - Code Editors
  {
    title: 'Visual Studio Code',
    description: 'A lightweight but powerful source code editor from Microsoft, great for web and cloud development.',
    link: 'https://code.visualstudio.com/',
    icon: 'https://cdn-icons-png.flaticon.com/512/906/906324.png',
    category: 'Developer',
    softwareType: 'code editor',
  },
  {
    title: 'Sublime Text',
    description: 'A sophisticated text editor for code, markup and prose.',
    link: 'https://www.sublimetext.com/',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968526.png',
    category: 'Developer',
    softwareType: 'code editor',
  },
  {
    title: 'Atom',
    description: 'A hackable text editor for the 21st century, built on Electron.',
    link: 'https://atom.io/',
    icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111501.png',
    category: 'Developer',
    softwareType: 'code editor',
  },

  // Developer Tools - API Testing & Debugging
  {
    title: 'Postman',
    description: 'A popular tool for testing, documenting, and monitoring APIs with a user-friendly interface.',
    link: 'https://www.postman.com/',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png',
    category: 'Developer',
    softwareType: 'API testing',
  },
  {
    title: 'Insomnia',
    description: 'A REST client to debug and test your APIs, similar to Postman, but with a sleek interface.',
    link: 'https://insomnia.rest/',
    icon: 'https://cdn-icons-png.flaticon.com/512/906/906343.png',
    category: 'Developer',
    softwareType: 'API testing',
  },

  // Developer Tools - Version Control & Collaboration
  {
    title: 'GitHub',
    description: 'A platform for version control and collaboration. Hosts your code and helps manage projects.',
    link: 'https://github.com/',
    icon: 'https://cdn-icons-png.flaticon.com/512/733/733553.png',
    category: 'Developer',
    softwareType: 'version control',
  },
  {
    title: 'Bitbucket',
    description: 'Git code management with built-in CI/CD.',
    link: 'https://bitbucket.org/',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968861.png',
    category: 'Developer',
    softwareType: 'version control',
  },

  // Developer Tools - CI/CD & Automation
  {
    title: 'CircleCI',
    description: 'Continuous integration and delivery platform for automation.',
    link: 'https://circleci.com/',
    icon: 'https://cdn-icons-png.flaticon.com/512/919/919827.png',
    category: 'Developer',
    softwareType: 'CI/CD',
  },
  {
    title: 'Travis CI',
    description: 'Hosted continuous integration service used to build and test software projects hosted on GitHub.',
    link: 'https://travis-ci.com/',
    icon: 'https://cdn-icons-png.flaticon.com/512/919/919820.png',
    category: 'Developer',
    softwareType: 'CI/CD',
  },
  {
    title: 'Jenkins',
    description: 'An open-source automation server to build, test, and deploy your software.',
    link: 'https://www.jenkins.io/',
    icon: 'https://cdn-icons-png.flaticon.com/512/919/919828.png',
    category: 'Developer',
    softwareType: 'CI/CD',
  },

  // Developer Tools - Containers & Orchestration
  {
    title: 'Docker',
    description: 'An open platform for developing, shipping, and running applications using containerization.',
    link: 'https://www.docker.com/',
    icon: 'https://cdn-icons-png.flaticon.com/512/919/919853.png',
    category: 'Developer',
    softwareType: 'containerization',
  },
  {
    title: 'Kubernetes',
    description: 'Open-source system for automating deployment, scaling, and management of containerized applications.',
    link: 'https://kubernetes.io/',
    icon: 'https://cdn-icons-png.flaticon.com/512/919/919836.png',
    category: 'Developer',
    softwareType: 'orchestration',
  },
  {
    title: 'Terraform',
    description: 'Infrastructure as Code tool for building, changing, and versioning infrastructure.',
    link: 'https://www.terraform.io/',
    icon: 'https://cdn-icons-png.flaticon.com/512/919/919842.png',
    category: 'Developer',
    softwareType: 'infrastructure automation',
  },
  {
    title: 'Ansible',
    description: 'Automation engine for application deployment, configuration management, and orchestration.',
    link: 'https://www.ansible.com/',
    icon: 'https://cdn-icons-png.flaticon.com/512/919/919834.png',
    category: 'Developer',
    softwareType: 'automation',
  },

  // Developer Tools - IDEs & Online IDEs
  {
    title: 'Replit',
    description: 'An online IDE to instantly run and share code.',
    link: 'https://replit.com/',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968889.png',
    category: 'Developer',
    softwareType: 'online IDE',
  },
  {
    title: 'Gitpod',
    description: 'Online IDE and automated dev environments in the cloud.',
    link: 'https://www.gitpod.io/',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968960.png',
    category: 'Developer',
    softwareType: 'online IDE',
  },

  // Designer Tools - UI/UX & Graphic Design
  {
    title: 'Figma',
    description: 'A collaborative interface design tool used for creating UI/UX designs and prototypes.',
    link: 'https://www.figma.com/',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png',
    category: 'Designer',
    softwareType: 'UI design',
  },
  {
    title: 'Adobe Photoshop',
    description: 'Industry-standard raster graphics editor for digital art and photo editing.',
    link: 'https://www.adobe.com/products/photoshop.html',
    icon: 'https://cdn-icons-png.flaticon.com/512/888/888841.png',
    category: 'Designer',
    softwareType: 'image editor',
  },
  {
    title: 'Adobe Illustrator',
    description: 'A vector graphics editor and design program used for logos, icons, sketches, typography, and more.',
    link: 'https://www.adobe.com/products/illustrator.html',
    icon: 'https://cdn-icons-png.flaticon.com/512/888/888841.png',
    category: 'Designer',
    softwareType: 'vector graphics',
  },
  {
    title: 'Canva',
    description: 'A graphic design platform used to create social media graphics, presentations, posters and other visual content.',
    link: 'https://www.canva.com/',
    icon: 'https://cdn-icons-png.flaticon.com/512/888/888879.png',
    category: 'Designer',
    softwareType: 'graphic design',
  },
  {
    title: 'GIMP',
    description: 'A free and open-source raster graphics editor used for image retouching and editing.',
    link: 'https://www.gimp.org/',
    icon: 'https://cdn-icons-png.flaticon.com/512/888/888882.png',
    category: 'Designer',
    softwareType: 'image editor',
  },
  {
    title: 'Inkscape',
    description: 'A professional vector graphics editor for Linux, Windows and macOS.',
    link: 'https://inkscape.org/',
    icon: 'https://cdn-icons-png.flaticon.com/512/888/888879.png',
    category: 'Designer',
    softwareType: 'vector graphics',
  },

  // Designer Tools - 3D Modeling & Animation
  {
    title: 'Blender',
    description: 'A free and open-source 3D creation suite supporting modeling, animation, simulation, and more.',
    link: 'https://www.blender.org/',
    icon: 'https://cdn-icons-png.flaticon.com/512/888/888841.png',
    category: 'Designer',
    softwareType: '3D modeling',
  },

  // Productivity & Collaboration
  {
    title: 'Notion',
    description: 'An all-in-one workspace for notes, tasks, wikis, and project documentation for developers and teams.',
    link: 'https://www.notion.so/',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968992.png',
    category: 'Productivity',
    softwareType: 'workspace',
  },
  {
    title: 'Slack',
    description: 'A messaging app for teams, ideal for developer collaboration.',
    link: 'https://slack.com/',
    icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111615.png',
    category: 'Productivity',
    softwareType: 'team communication',
  },
  {
    title: 'Trello',
    description: 'Organize and prioritize your projects in a fun, flexible, and rewarding way.',
    link: 'https://trello.com/',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968866.png',
    category: 'Productivity',
    softwareType: 'project management',
  },
  {
    title: 'Asana',
    description: 'Work management platform teams use to stay focused on goals, projects, and daily tasks.',
    link: 'https://asana.com/',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968895.png',
    category: 'Productivity',
    softwareType: 'project management',
  },
  {
    title: 'Evernote',
    description: 'A note-taking app designed for organizing, task management, and archiving.',
    link: 'https://evernote.com/',
    icon: 'https://cdn-icons-png.flaticon.com/512/888/888879.png',
    category: 'Productivity',
    softwareType: 'note-taking',
  },

  // Gamer Tools
  {
    title: 'OBS Studio',
    description: 'Open Broadcaster Software, free and open-source software for video recording and live streaming.',
    link: 'https://obsproject.com/',
    icon: 'https://cdn-icons-png.flaticon.com/512/906/906175.png',
    category: 'Gamer',
    softwareType: 'streaming/recording',
  },
  {
    title: 'Steam',
    description: 'A digital distribution platform for video games with social and community features.',
    link: 'https://store.steampowered.com/',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968885.png',
    category: 'Gamer',
    softwareType: 'game distribution',
  },
  {
    title: 'Discord',
    description: 'Voice, video, and text chat platform for gamers and communities.',
    link: 'https://discord.com/',
    icon: 'https://cdn-icons-png.flaticon.com/512/906/906361.png',
    category: 'Gamer',
    softwareType: 'communication',
  },

  // Game Engines
  {
    title: 'Unity',
    description: 'A popular cross-platform game engine used to create 2D, 3D, VR, and AR games and experiences.',
    link: 'https://unity.com/',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968380.png',
    category: 'Developer',
    softwareType: 'game engine',
  },
  {
    title: 'Unreal Engine',
    description: 'A powerful and widely used game engine for creating high-fidelity 3D games and experiences.',
    link: 'https://www.unrealengine.com/',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968455.png',
    category: 'Developer',
    softwareType: 'game engine',
  },
  {
    title: 'Godot Engine',
    description: 'An open-source game engine for 2D and 3D games with a powerful and easy-to-use scripting language.',
    link: 'https://godotengine.org/',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968781.png',
    category: 'Developer',
    softwareType: 'game engine',
  },

  // Security & Monitoring
  {
    title: 'Prometheus',
    description: 'Open-source monitoring system and time series database.',
    link: 'https://prometheus.io/',
    icon: 'https://cdn-icons-png.flaticon.com/512/919/919821.png',
    category: 'Developer',
    softwareType: 'monitoring',
  },
  {
    title: 'Grafana',
    description: 'Open-source platform for monitoring and observability, allows you to query, visualize, and alert on metrics.',
    link: 'https://grafana.com/',
    icon: 'https://cdn-icons-png.flaticon.com/512/919/919836.png',
    category: 'Developer',
    softwareType: 'monitoring',
  },
  {
    title: 'Wireshark',
    description: 'A network protocol analyzer that lets you capture and interactively browse traffic running on a computer network.',
    link: 'https://www.wireshark.org/',
    icon: 'https://cdn-icons-png.flaticon.com/512/919/919830.png',
    category: 'Developer',
    softwareType: 'network analysis',
  },
  {
    title: 'Metasploit',
    description: 'A penetration testing framework to help find, exploit, and validate vulnerabilities.',
    link: 'https://www.metasploit.com/',
    icon: 'https://cdn-icons-png.flaticon.com/512/919/919832.png',
    category: 'Developer',
    softwareType: 'penetration testing',
  },

];

export default softwareData;