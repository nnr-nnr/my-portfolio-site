export const recentExperience = [
  {
    role: "Full Stack Developer",
    institution: {
      name: "Unfound",
      link: "https://unfound.app/",
    },
    startDate: "Jun 21",
    endDate: "Present",
    description: "stuff",
    tools: ["React", "AWS", "PostgreSQL", "Docker"],
  },
  {
    role: "CS Peer Mentor",
    institution: {
      name: "Northwestern University",
      link: "https://www.mccormick.northwestern.edu/computer-science/academics/undergraduate/peer-mentor-program/",
    },
    startDate: "Sep 21",
    endDate: "Mar 22",
    description:
      "Taught data collection, cleaning, visualization, modeling, EDA, and statistical & machine learning techniques in Intro. to the Data Science Pipeline (COMP_SCI 396 / 60+ students). Taught data set modeling and organization in Data Management and Information Processing (COMP_SCI 217 / 60+ students).",
    tools: [
      "SQL",
      "MongoDB",
      "Python",
      "Jupyter Notebook",
      "pandas",
      "NumPy",
      "NLTK",
      "scikit-learn",
      "seaborn",
    ],
  },
  {
    role: "Data Scientist, Program Coordinator, Tutor",
    institution: {
      name: "LumiNUs Tutors",
      link: "https://www.lumitutors.org/about",
    },
    startDate: "Apr 21",
    endDate: "Jan 22",
    description:
      "Led collection and analysis of learning and pedagogy data from 50+ students and 40+ tutors. Used data findings to improve program structure, materials, retention, marketing, and participant experience.",
    tools: ["Excel", "pandas"],
  },

  {
    role: "SAGE Edge Computing Intern",
    institution: {
      name: "Argonne National Laboratory",
      link: "https://www.anl.gov/mcs/sage-a-softwaredefined-sensor-network",
    },
    startDate: "Jun 21",
    endDate: "Aug 21",
    description:
      "Developed plug-in for remote node network for comprehensive atmospheric tracking, modeling, and prediction.",
    tools: ["Python", "OpenCV"],
  },
];

export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { level: "proficient in ", examples: "React.js, Vanilla.js, HTML, CSS" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { level: "proficient in ", examples: "Python (e.g., Flask), SQL, Java" },
      { level: "working proficiency in ", examples: "NoSQL, C, C++" },
    ],
  },

  {
    category: "Statistical",
    skills: [
      {
        level: "proficient in ",
        examples:
          "Python (pandas, scikit-learn, seaborn, NumPy, Matplotlib), Excel",
      },
      {
        level: "working proficiency in ",
        examples: "R, OpenRefine",
      },
    ],
  },
  {
    category: "Languages",
    skills: [
      { level: "fluent in ", examples: "English" },
      {
        level: "working proficiency in ",
        examples: "Spanish, French, Hindi/Urdu",
      },
    ],
  },
  {
    category: "Other",
    skills: [{ level: "experience with ", examples: "Git, Unix, AWS, GCP" }],
  },
];

export const projectData = [
  {
    title: "Fjordle",
    description: "A Wordle x GeoGuessr mash-up.",
    tags: ["React", "GCP", "googleMaps", "game", "personalProject", "fall22"],
    url: "https://fjordle.com/",
    gDriveUrl: false,
  },
  {
    title: "Differentially Private Image Classification",
    description:
      "In our increasingly visual world, image data is becoming more widespread and useful. How can we protect individuals' privacy while harvesting valuable insights from image datasets? Simple conventional methods like blurring and pixelating images are insufficient for maintaining privacy. This project builds on the work of privacy researchers to investigate differentially private machine learning techniques and their corresponding privacy-utility trade-offs.",
    tags: [
      "logisticRegression",
      "python",
      "fashionMNIST",
      "privacy",
      "groupProjectSnippet",
      "cs397",
      "winter22",
    ],
    url: "1pZo_LF2k-ieFChN16oE59ZWTq9Jf_KtA",
    gDriveUrl: true,
  },
  {
    title: "Seattle Census Tract Data: Multivariate Methods",
    description:
      "High dimensional datasets pose unique challenges for data analysis. I applied Primary Components Analysis (PCA) and Cluster Analysis to Seattle census data used to develop the city's Racial and Social Equity Composite Index. I developed novel desriptive metrics for intuitive and easy assesment of priority population density.",
    tags: [
      "multivariateMethods",
      "PCA",
      "clusterAnalysis",
      "individualProject",
      "stat348",
      "fall21",
    ],
    url: "1flraF4HcDChIPtc6K4ymAFursWy7MiYf",
    gDriveUrl: true,
  },
  {
    title:
      "Analysis of Regional Linguistics and Sentiment Expression: Yelp Review Data Analysis",
    description:
      "How do Yelp reviewers' language and sentiment expression vary by their region? By the type of business they review? By the socioeconomics of the business' neighborhood? This project compares regional linguistics and sentiment expression using ML techniques on COVID-era, publicly available U.S. Yelp review data. (NOTE: updated report is forthcoming).",
    tags: ["python", "OpenRefine", "NLP", "scikit-learn", "cs396", "summer21"],
    url: "",
    gDriveUrl: false,
  },
  {
    title: "Diagnosing Scatter Motion from RADAR and LiDAR Data",
    description:
      "Plug-in for the internationally deployed remote sensing Waggle node network that allows for comprehensive atmospheric tracking, modeling, and prediction. Applied cutting-edge computer vision techniques to RADAR and LiDAR backscatter visualizations to generate novel atmospheric data.",
    tags: [
      "python",
      "opticalFlow",
      "NAISE",
      "edgeComputing",
      "SAGEproject",
      "individualProject",
      "summer21",
    ],
    url: "1tGWCeW-By-Wn5EjQZ3XNEiOEsp27mryk",
    gDriveUrl: true,
  },
  {
    title: "Emotional Machine Orchestrator (EMO)",
    description:
      "In recent years, AI has become astonishingly sophisticated at text generation, from writing whole articles and video scripts to detailed game narratives. But can AI generate text that is *emotional*? A distressed plea? An angry outburst? A joyful proclamation? Yes! This project is the first-ever package of language models with distinct modes of affective response. We integrated these models into a dialogue system that generates multi-line scripts following an inputted emotional arc.",
    tags: [
      "GPT2",
      "ML",
      "python",
      "NLP",
      "PyTorch",
      "groupProject",
      "cs338",
      "spring21",
    ],
    url: "1ittn_hskUyme-2TFn-I7cMX7w4tuCwO3",
    gDriveUrl: true,
  },
  {
    title: "The PaintBlaster",
    description:
      "How might those without access to well-ventilated spaces spray paint? Challenged by the paint manufatcturer Rust-Oleum, our group designed and built a functional prototype, The PaintBlaster, to solve this problem.",
    tags: [
      "sprayPainting",
      "engineering",
      "prototyping",
      "groupProject",
      "DTC",
      "spring19",
    ],
    url: "1qySDAEwjotZSlRwcaIeUJRz25Xu16Uvm",
    gDriveUrl: true,
  },
  {
    title: "The FootFinder",
    description:
      "Individuals undergoing post-stroke gait therapy tend to look down for visual feedback of their lower extremities. However, this compromises their posture and thus introduces other health concerns. Challenged by a physical therapist at the Shirley Ryan Ability Lab, our group designed and built a functional prototype, The FootFinder, to solve this problem.",
    tags: [
      "physicalTherapy",
      "engineering",
      "prototyping",
      "groupProject",
      "DTC",
      "winter19",
    ],
    url: "1dfUEjx0BTFoAtacUhP5dgInVnVQlpcPK",
    gDriveUrl: true,
  },
];

// {
//     category: "",
//     skills: [{ level: "", examples: "" }],
//   },

// {
//     role: "",
//     institution: {
//       name: "",
//       link: "",
//     },
//     startDate: "",
//     endDate: "",
//     description: "",
//   },
