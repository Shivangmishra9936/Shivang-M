/* =========================================================
   Centralized content config.
   Update your skills, experience, projects, services and
   certifications here — every page renders from this file.
   ========================================================= */

const PORTFOLIO = {
  person: {
    name: "Shivang Mishra",
    shortName: "Shivang",
    initials: "SM",
    role: "Cloud, Data & AI Engineer",
    tagline: "Cloud • Data • AI • Agentic AI • Automation",
    email: "shivangmishra993667@gmail.com",
    phone: "+91 9936676449",
    phoneHref: "+919936676449",
    linkedin: "https://www.linkedin.com/in/m-shivang/",
    github: "https://github.com/Shivangmishra9936",
    location: "India",
    photo: "assets/img/profile.jpg",
    logo: "assets/img/logo1.png",
    resume: "assets/Shivang__ (1).pdf"
  },

  heroBadges: [
    { label: "AWS Cloud", icon: "cloud" },
    { label: "AI / ML", icon: "brain-circuit" },
    { label: "Data Systems", icon: "database" },
    { label: "Automation", icon: "workflow" }
  ],

  heroStats: [
    { value: "2025", label: "AKTU Graduate, B.Tech CSE" },
    { value: "AWS", label: "Certified AI Practitioner" },
    { value: "2", label: "Industry Roles in Cloud & Data" }
  ],

  focusAreas: [
    {
      title: "Cloud Engineering",
      desc: "Designing and operating scalable workloads on AWS — compute, storage and managed data services."
    },
    {
      title: "Data Systems",
      desc: "Building pipelines, warehouses and reporting layers that turn raw data into decisions."
    },
    {
      title: "AI & Agentic AI",
      desc: "Applying machine learning and autonomous agent workflows to real operational problems."
    },
    {
      title: "Automation",
      desc: "Removing manual, repetitive work from cloud, data and business operations end to end."
    }
  ],

  skills: [
    "AWS (EC2, S3, Lambda, RDS, Glue)", "Python", "SQL", "Data Pipelines",
    "ETL / ELT", "Data Warehousing", "Machine Learning", "Agentic AI Workflows",
    "Process Automation", "REST APIs", "Power BI / BI Reporting", "Git & CI/CD"
  ],

  experience: [
    {
      company: "Surrima Eduhub Solution Pvt Ltd",
      role: "Analyst — Data Operations & AI-based Operations",
      period: "August 2026 — Present",
      points: [
        "Managed day-to-day data operations, ensuring accuracy, consistency and timely reporting across systems.",
        "Built AI-assisted workflows to support operational decision-making and reduce manual review effort.",
        "Monitored data quality and operational dashboards, flagging and resolving issues proactively.",
        "Collaborated across teams to translate operational requirements into data and automation solutions."
      ],
      tech: ["Python", "SQL", "AI Workflows", "Reporting", "Process Automation"]
    },
    {
      company: "MistAvinya Technology",
      role: "Cloud / Data / Technology Operations",
      period: "October 2025— August 2026",
      points: [
        "Supported cloud infrastructure operations on AWS, including provisioning and environment monitoring.",
        "Assisted in building and maintaining data workflows for internal technology operations.",
        "Contributed to technical documentation and operational runbooks for recurring processes.",
        "Worked with cross-functional teams to keep cloud and data systems running smoothly."
      ],
      tech: ["AWS", "Cloud Operations", "Data Workflows", "Technical Documentation"]
    }
  ],

  projects: [
    {
      title: "Cloud Data Analytics Pipeline — AWS",
      category: "aws",
      tagsShown: ["AWS", "Data"],
      desc: "An end-to-end analytics pipeline on AWS that ingests, processes and prepares data for reporting.",
      details: "Built a cloud-native analytics pipeline using AWS services to ingest raw data, transform it in stages, and land it in a queryable format for downstream analytics and dashboards. Focused on reliability, cost-efficient compute usage and clear separation between ingestion, processing and consumption layers.",
      tech: ["AWS S3", "AWS Glue", "AWS Lambda", "Python", "SQL"]
    },
    {
      title: "AWS Data Lake & ETL Pipeline",
      category: "aws",
      tagsShown: ["AWS", "Data"],
      desc: "A centralized data lake with automated ETL jobs for structured and semi-structured sources.",
      details: "Designed a data lake architecture on AWS to centralize data from multiple sources, with automated ETL jobs handling extraction, cleaning and loading. Structured the lake into raw, processed and curated zones to support both ad-hoc analysis and scheduled reporting.",
      tech: ["AWS S3", "AWS Glue", "AWS Athena", "Python"]
    },
    {
      title: "AWS Data Warehouse & BI",
      category: "aws",
      tagsShown: ["AWS", "Data"],
      desc: "A cloud data warehouse feeding BI dashboards for operational and business reporting.",
      details: "Set up a cloud data warehouse to consolidate operational data and power BI dashboards used for tracking key metrics. Modeled data for fast, reliable querying and built repeatable reporting views on top of the warehouse.",
      tech: ["AWS Redshift", "SQL", "Power BI", "ETL"]
    },
    {
      title: "FraudShield AI",
      category: "ai",
      tagsShown: ["AI", "Data"],
      desc: "A machine learning system for detecting anomalous and potentially fraudulent transactions.",
      details: "Developed a machine learning model to flag anomalous transaction patterns that may indicate fraud. Covered the full workflow from feature engineering and model training to evaluation, with an emphasis on minimizing false positives in a realistic operational setting.",
      tech: ["Python", "Machine Learning", "Pandas", "Scikit-learn"]
    },
    {
      title: "Neuro Find — Brain Tumor Detector",
      category: "ai",
      tagsShown: ["AI"],
      desc: "A deep learning model that detects brain tumors from MRI scan images.",
      details: "Built a deep learning image classification model trained on MRI scans to detect the presence of brain tumors. Included data preprocessing for medical imaging, model training and evaluation against accuracy and reliability benchmarks.",
      tech: ["Python", "Deep Learning", "CNN", "Image Processing"]
    },
    {
      title: "J.A.R.V.I.S. Voice Assistant",
      category: "web",
      tagsShown: ["AI", "Web"],
      desc: "A voice-activated assistant that automates tasks through natural voice commands.",
      details: "Created a voice-controlled assistant capable of understanding natural language commands to automate everyday tasks. Combined speech recognition, command parsing and task execution into a single responsive assistant experience.",
      tech: ["Python", "Speech Recognition", "NLP", "Automation"]
    }
  ],

  services: [
    {
      title: "AWS & Cloud Solutions",
      icon: "cloud",
      desc: "Cloud architecture, deployment and operations support built around AWS.",
      points: ["Cloud infrastructure setup", "Cost-aware architecture", "Monitoring & reliability"]
    },
    {
      title: "Data Analytics & Reporting",
      icon: "bar-chart-3",
      desc: "Turning raw data into pipelines, warehouses and reports people actually use.",
      points: ["ETL / ELT pipelines", "Data warehousing", "Dashboards & BI reporting"]
    },
    {
      title: "AI & Agentic AI Workflows",
      icon: "brain-circuit",
      desc: "Applying AI and autonomous agents to real, repeatable operational tasks.",
      points: ["Model development", "Agentic task automation", "AI-assisted decision support"]
    },
    {
      title: "AI Automation",
      icon: "workflow",
      desc: "Automating manual processes across cloud, data and business operations.",
      points: ["Workflow automation", "Scripted operations", "Process optimization"]
    },
    {
      title: "Responsive Website Development",
      icon: "layout-panel-left",
      desc: "Clean, fast, fully responsive websites built with modern practices.",
      points: ["Responsive UI", "Performance-focused build", "Accessible by default"]
    },
    {
      title: "Voice Agents",
      icon: "mic",
      desc: "Voice-driven assistants that understand commands and automate tasks.",
      points: ["Speech-to-action pipelines", "Natural language commands", "Task automation"]
    },
    {
      title: "Digital Project Support",
      icon: "layers",
      desc: "Hands-on support across cloud, data and automation initiatives end to end.",
      points: ["Technical documentation", "Operational support", "Cross-team collaboration"]
    }
  ],

  certifications: [
    {
      title: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services",
      icon: "award"
    }
  ]
};

/* Navigation used by every page */
PORTFOLIO.nav = [
  { label: "Home", href: "index.html" },
  { label: "About", href: "about.html" },
  { label: "Experience", href: "experience.html" },
  { label: "Projects", href: "projects.html" },
  { label: "Services", href: "services.html" },
  { label: "Certifications", href: "certifications.html" },
  { label: "Contact", href: "contact.html" }
];
