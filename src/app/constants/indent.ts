import { Indent } from "../interfaces/message-chat";

export const INDENT: Indent = {
  greeting: {
    key: 'greeting',
    indent: [
      "What's up",
      'Howdy',
      'Good evening',
      'Good afternoon',
      'Good morning',
      'Hey',
      'Hello',
      'Hi',
      "greeting"
    ],
    response: [
      'Hello! Welcome to my portfolio chatbot. How can I assist you today?',
      'Hi there! How can I help you learn more about my skills and experience?',
      'Hello! Thanks for reaching out. What can I do for you today?',
      'Good morning/afternoon/evening! How can I be of assistance?',
      'Greetings! How can I help you today?',
      "Howdy! I'm here to answer any questions you have. What can I do for you?",
    ],
  },
  education: {
    key: "education",
    indent: [
      "What did you study?",
      "What did you learn?",
      "Could you tell me about your educational background?",
      "What was your major during your studies?",
      "Where did you attend university?",
      "Where is your degree?",
    ],
    response: [
      "During my studies, I had the opportunity to pursue a degree in Information Technology at Sirindhorn International Institute of Technology (SIIT), Thammasat University.",
      "Sure! My educational background includes attending Sirindhorn International Institute of Technology (SIIT), Thammasat University, where I focused on Information Technology.",
      "My major during my time at Sirindhorn International Institute of Technology (SIIT), Thammasat University, was specifically in Information Technology.",
      "I had the privilege of attending Sirindhorn International Institute of Technology (SIIT), Thammasat University, where I obtained a Bachelor's degree in Information Technology."
    ]
  },
  experience: {
    key: "experience",
    indent: [
      "What work experience do you have?",
      "Tell me about your work experience.",
      "What companies have you worked for?",
      "What were your job responsibilities?",
      "What skills have you gained from your work experience?"
    ],
    response: [
      `I have worked as a Software Engineer at LSEG (London Stock Exchange Group) for 1 year and 9 months. My main responsibilities involved maintaining and developing a financial platform for clients, with a focus on implementing real-time currency calculations and creating custom elements using DOM. I also investigated and resolved issues, distinguishing between backend and frontend causes. Additionally, I developed app-proxy applications to allow developers to work on their projects within a real domain, addressing CORS issues.
During my time at LSEG, I gained experience validating backend data using network tabs in devtools and worked effectively in an agile, cross-functional team with international colleagues. My skills in Angular, JavaScript, TypeScript, RxJS, Git, Gitlab, and Agile Methodologies were further enhanced during my role as a Software Engineer.
Before that, I had an internship as a Web Developer at Adecco, where I maintained and developed their website, ensuring its functionality and usability. I utilized the .Net framework and integrated it with Microsoft SQL databases for secure data storage and management.
Since June 2020, I have also been working as a freelance web developer, work as in WordPress website design. I have worked various projects, including creating a program for automate stock management of a computer store that involves receiving and modifying Excel files and upload into e-commerce platform eg: shoppee.`
    ]
  },
  techStack: {
    key: "techStack",
    indent: [
      "What technologies are you experienced in?",
      "Tell me about your tech stack.",
      "What programming languages and frameworks do you work with?"
    ],
    response: [
      "I have experience working with the following technologies:<br><br><b>Programming Languages:</b><br>1. JavaScript<br>2. TypeScript<br><br><b>Front-end Frameworks/Libraries:</b><br>3. React.js<br>4. React Native<br>5. Expo<br>6. Redux<br>7. Angular 8+<br><br><b>Back-end Frameworks:</b><br>8. Node.js<br>9. Express.js<br><br><b>Web Technologies:</b><br>10. HTML<br>11. CSS<br>12. LESS<br>13. Bootstrap<br><br><b>Version Control:</b><br>14. Git<br><br><b>Development Tools:</b><br>15. Devtools<br><br><b>Cloud Services:</b><br>16. Firebase<br><br><b>Other:</b><br>17. RxJS<br>18. REST API<br>19. Service Worker"
    ]
  },
  projectExamples: {
    key: "projectExamples",
    indent: [
      "Can you provide examples of projects you've worked on in the past?",
      "Tell me about your previous projects.",
      "What projects have you completed before?"
    ],
    response: [
      "Sure! Here are some examples of projects I've worked on:<br><br><b>Software Engineer at Refinitiv, LSEG business</b><br><br>1. FXForward<br>Description: FXForward is a platform in Refinitiv that are derivative contracts that allow participants to exchange currencies at a predetermined rate on a future date, used for hedging or speculating on currency movements. As a Software Engineer in the FXForward team, I utilized Angular 8 and RxJs for state management, Angular web socket for real-time updates, and Git for version control. My main responsibilities included developing new features and performing maintenance tasks based on Jira tickets.<br><br>2. MUNI<br>Description: MUNI is a platform in Refinitiv that are debt securities issued by state and local governments to fund public projects, providing investors with fixed income while supporting community development. As a Software Engineer, I primarily worked with AngularJs for maintenance and bug fixes. My responsibilities included performing maintenance tasks based on Jira tickets.<br><br>3. Particle app proxy<br>Description: Particle app proxy is a server-side application platform built with Node.js and Express.js. It utilizes service workers to create a localhost environment on a real domain, acting as a proxy for the application. This approach resolves Cross-Origin Resource Sharing (CORS) issues that developers in my department often encounter when connecting to real API domains from localhost.<br><br><b>During my university period:</b><br><br>SIIT Gate (Graduation Project)<br>Website: <a href='https://soravit-varanich.web.app/siitgate'>https://soravit-varanich.web.app/siitgate</a><br>Description: This application was developed using React Native and Expo CLI. It was my senior project during my last year of university. The app allows students to view their lecture notes and grades for each subject.<br><br>Mercuryt-shirts Website<br>Website: <a href='https://mercuryt-shirt.web.app'>https://mercuryt-shirt.web.app</a><br>Description: This is a freelance project for a t-shirt store. The website showcases store information and allows customers to place orders. It was developed using React.js, Material UI, and hosted on Firebase.<br><br>Anti Covid (University Project)<br>Website: <a href='https://soravit-varanich.web.app/anticovid'>https://soravit-varanich.web.app/anticovid</a><br>Description: This project was part of my coursework for the ITS432 Mobile Application Programming course during my third year at Sirindhorn International Institute of Technology (SIIT), Thammasat University. It is a React Native application developed using Expo CLI. The app provides real-time information about the Covid-19 situation.<br>"
    ]
  }
};
