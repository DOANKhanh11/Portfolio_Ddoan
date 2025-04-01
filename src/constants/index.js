import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    nodejs,
    git,
    csharp,
    docker,
    php,
    sql,
    carcouet,
    ktl,
    nantes,
    carrent,
    innovguide,
    joyeuxchoco,
    jobit,
    tripguide,
    joyeux,
    innovqube,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "À propos",
    },
    {
      id: "education",
      title: "Éducation",
    },
    {
      id: "work",
      title: "Expérience",
    },
    {
      id: "technologies",
      title: "Compétence",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Développeuse Web",
      icon: web,
    },
    {
      title: "Développeuse d'Applications",
      icon: mobile,
    },
    {
      title: "Développeuse Backend",
      icon: backend,
    },
    {
      title: "Analyste",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Développeuse Informatique ",
      company_name: "Joyeux CSE",
      icon: joyeux,
      iconBg: "#383E56",
      date: "Mai 2024 - Juin 2024",
      points: [
        "Maintenance du site web de l'entreprise.",
        "Mise en place de systèmes d'envoi automatique d'e-mails.",
        "Identification et correction des anomalies dans les bases de données du site.",
      ],
    },
    {
      title: "Développeuse Full-Stack ",
      company_name: "InnovQube SASU",
      icon: innovqube,
      iconBg: "#E6DEDD",
      date: "Jan 2025 - Fév 2025",
      points: [
        "Développement et optimisation d’API, refactoring de code et gestion des bases de données.",
        "Implémentation d’interfaces dynamiques et amélioration de l’expérience utilisateur (UI/UX).",
        "Intégration de notifications et automatisation des e-mails avec Mailtrap.",
        "Collaboration en mode Agile (stand-ups, sprint planning) et gestion des tâches via OpenProject.",
        "Configuration d’un environnement de développement sous WSL/Ubuntu.",
      ],
    },
  ];
  
  const education = [
    {
      degree: "BTS SIO (Services informatiques aux organisations)",
      school: "Lycée Carcoüet",
      icon: carcouet,
      iconBg: "#383E56",
      date: "2023 - 2025",
      points: [
        "Option SLAM (Solutions Logicielles et Applications Métier)"
      ],
    },
    {
      degree: "i-FLE: DUEF B1, B2",
      school: "Université de Nantes",
      icon: nantes,
      iconBg: "#E6DEDD",
      date: "2021 - 2022",
      points: [
      ],
    },
    {
      degree: "Réseaux d'informations et de gestion",
      school: "Université d'économie et du droit (Ho Chi Minh Ville, Viet Nam)",
      icon: ktl,
      iconBg: "#E6DEDD",
      date: "Sept 2021-Dec 2021",
      points: [
      ],
    },
  ];

  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Application InnovGuide",
      description:
     " InnovGuide est une application web intuitive permettant aux utilisateurs d’explorer et de découvrir différents hébergements en fonction de leurs besoins.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "lavarel",
          color: "green-text-gradient",
        },
      ],
      image: innovguide,
      source_code_link: "https://github.com/DOANKhanh11/InnovGuide",
    },
    {
      name: "Website Les-chocolats-du-cse",
      description:
        "Les Chocolats du CSE est une website de la gestion et la vente de chocolats pour les CSE. Elle comprend une interface administrateur pour gérer les produits, entreprises et fournisseurs, ainsi qu’un espace utilisateur pour commander en ligne avec suivi et service après-vente.",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: joyeuxchoco,
      source_code_link: "https://github.com/DOANKhanh11/les-chocolats-du-cse-test",
    },
     /*
     : "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "",
    },*/
  ];
  
  export { services, technologies, education, experiences, testimonials, projects };