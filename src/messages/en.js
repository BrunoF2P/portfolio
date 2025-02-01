import cinemaapi from '../assets/api.png';
import cinematech from '../assets/cinematech.png';

const technologies = ["Java", "JavaScript", "React", "Node.js", "Spring Boot", "SQL", "PostgreSQL", "Express", "Swagger"]

export default {
    main: {
        graduation: "SOFTWARE ENGINEER",
        name: "Bruno Bispo",
        description: "Hi, I'm Bruno, a Software Engineering student. I'm always looking to learn and create. Take a look at my portfolio and check out the projects I'm working on — maybe we’ll find something in common to talk about!",
        downloadResume: "Download Curriculum",
    },
    menu: {
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
    },
    about: {
        title: "ABOUT",
        subtitle: "Get to know a little about me",
        description: "Hello! I'm Bruno Bispo, a Systems Information student at the State University of Bahia (UNEB) - Campus II, in Alagoinhas. Passionate about solving complex problems, I'm focusing on becoming a backend developer, honing my skills in languages like Java and JavaScript. In my free time, I enjoy exploring new technologies and contributing to open-source projects. You can check out some of my projects on my GitHub"
    },
    projects: {
        title: "PROJECTS",
        projects: [
            {
                title: "Cinema Tech API",
                description: "The Cinema Tech API project is a RESTful API developed as part of an academic assignment, utilizing Node.js and the Express framework. This API enables the management of information related to movies, showtimes, and ticket reservations for cinemas.",
                technologies: [technologies[3], technologies[6], technologies[7], technologies[8]],
                image: cinemaapi,
                link: "https://github.com/BrunoF2P/cinema-tech-api",
            },
            {
                title: "Cinema Tech",
                description: "A academic project developed as part of a university assignment. Unfortunately, there is no detailed information available in the repository to provide a more in-depth description of the project.",
                technologies: [technologies[1], technologies[2],],
                image: cinematech,
                link: "https://github.com/SandyLemos/Trabalho-Cinema",
            },
        ]
    },
    contact: {
        title: "CONTACT",
        description: "If you liked my work and want to talk about projects, job opportunities, or just chat, get in touch with me through social media"
    }
};
