import cinemaapi from '../assets/api.png';
import cinematech from '../assets/cinematech.png';

const technologies = ["Java", "JavaScript", "React", "Node.js", "Spring Boot", "SQL", "PostgreSQL", "Express", "Swagger"]

export default {
    
    main:{
        graduation: "ENGENHEIRO DE SOFTWARE",
        name: "Bruno Bispo",
        description: "Oi, sou o Bruno, estudante de Engenharia de Software. Estou sempre em busca de aprender e criar. Dê uma olhada no meu portfólio e veja os projetos em que estou trabalhando — quem sabe encontramos algo em comum para conversar!",
        downloadResume: "Baixar Currículo",
    },
    menu: {
        about: "Sobre",
        skills: "Habilidades",
        projects: "Projetos",
        contact: "Contatos"
    },

    about: {
        title: "SOBRE",
        subtitle: "Conheça um pouco sobre mim",
        description: "Olá! Sou Bruno Bispo, estudante de Sistemas de Informação na Universidade do Estado da Bahia (UNEB) - Campus II, em Alagoinhas. Apaixonado por resolver problemas complexos, estou focado em me tornar um desenvolvedor backend, aprimorando minhas habilidades em linguagens como Java e JavaScript. Em meu tempo livre, gosto de explorar novas tecnologias e contribuir para projetos de código aberto. Você pode conferir alguns dos meus projetos no meu GitHub"

    },
    projects: {
        title: "PROJETOS",
        projects: [
            {
                title: "Cinema Tech API",
                description: "O projeto Cinema Tech API é uma API RESTful desenvolvida como parte de um trabalho acadêmico, utilizando Node.js e o framework Express. Esta API permite o gerenciamento de informações relacionadas a filmes, sessões e reservas de ingressos em cinemas.",
                technologies: [technologies[3], technologies[6], technologies[7], technologies[8]],
                image: cinemaapi,
                link: "https://github.com/BrunoF2P/cinema-tech-api",
            },
            {
                title: "Cinema Tech",
                description: "Um projeto acadêmico desenvolvido como parte de um trabalho de faculdade. Infelizmente, não há informações detalhadas disponíveis no repositório para fornecer uma descrição mais aprofundada do projeto.",
                technologies: [technologies[1], technologies[2],],
                image: cinematech,
                link: "https://github.com/SandyLemos/Trabalho-Cinema",
            },
        ]
    },
    contact: {
        title: "CONTATO",
        description: "Se você gostou do meu trabalho e quer conversar sobre projetos, oportunidades de trabalho ou apenas bater um papo, entre em contato comigo através das redes sociais"
    }
};
