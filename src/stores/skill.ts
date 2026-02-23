import {defineStore} from "pinia";
import {ref} from "vue";

export const useSkillStore = defineStore('knowledge', () => {

    const skills = ref([
        {
            title: "Programming style",
            sub_title: "Programming & Script Languages",
            note: [
                "NO VIBE CODING - NO AI generated slop",
                "Optimised, Clean, Readable Code (with PSR-12 standards)",
                "Object Oriented Programming (OOP) with MVC",
                "MicroServices Architecture",
                "Test Driven Development (TDD)",
                "Don't repeat yourself principle (DRY)",
                "Single-responsibility principle (SRP)",
                "Keep It Simple Silly principle (KISS)",
                "Open-closed principle",
                "API-first & Mobile-first approach"
            ],
            data: [
                {
                    icon: "fa-brands fa-php",
                    name: "PHP",
                    versions: "(v5.6 – 8.5)",
                    date_started: 2003,
                    knowledge_level: 10
                },
                {
                    icon: "fa-brands fa-js",
                    name: "JavaScript",
                    versions: null,
                    date_started: 2012,
                    knowledge_level: 7
                },
                {
                    icon: "fa-brands fa-python",
                    name: "Python",
                    versions: "(v2.7 – 3.7)",
                    date_started: 2019,
                    knowledge_level: 6
                },

                {
                    icon: "fa-solid fa-terminal",
                    name: "Bash",
                    versions: null,
                    date_started: 2019,
                    knowledge_level: 8
                },
                {
                    icon: "fa-brands fa-html5",
                    name: "HTML5",
                    versions: null,
                    date_started: 2001,
                    knowledge_level: 9
                }, {
                    icon: "fa-brands fa-css3-alt",
                    name: "CSS3",
                    versions: null,
                    date_started: 2001,
                    knowledge_level: 9
                },
                {
                    icon: "fa-brands fa-sass",
                    name: "SASS ",
                    versions: null,
                    date_started: 2008,
                    knowledge_level: 8
                },
                {
                    icon: "fa-brands fa-less",
                    name: "LESS",
                    versions: null,
                    date_started: 2008,
                    knowledge_level: 8
                },



                {
                    name: "XML & JSON",
                    versions: null,
                    date_started: 2009,
                    knowledge_level: 8
                },
                {
                    // icon: "fa-brands fa-golang",
                    name: "GO",
                    versions: "(v1.0 – 1.2)",
                    date_started: 2023,
                    date_ended: 2024,
                    knowledge_level: 2
                },
                {
                    name: "C#",
                    versions: "(v13)",
                    date_started: 2025,
                    date_ended: 2026,
                    knowledge_level: 2
                },
                {
                    name: "C++",
                    versions: "(v13)",
                    date_started: 2025,
                    date_ended: 2026,
                    knowledge_level: 2
                }
            ]
        },
        {
            title: "Server Technologies",
            sub_title: "Experience as sysadmin",
            note: [
                "Build & configure a Linux based server from scratch.",
                "Confident use of CLI over SSH",
                "Cron and Bash scripts automations",
                "Confident use of LAMP & LNPP Environment",
                "High Security Standards (Encrypted HDD’s / VPN / SSH / etc.)",
                "FTP / SFTP, TS, SMTP, SSL / OpenSSL, media & game servers, Cloud, VPS, GRID"
            ],

            data: [
                {
                    icon: "fa-brands fa-ubuntu",
                    name: "Linux - Ubuntu server",
                    versions: "(v16 – v24.04)",
                    date_started: 2004,
                    knowledge_level: 8
                },
                {
                    name: "Apache Web server",
                    versions: "(v2.4)",
                    date_started: 2004,
                    knowledge_level: 9
                },
                {
                    name: "Nginx",
                    versions: "(v1.22)",
                    date_started: 2004,
                    knowledge_level: 7
                },
                {
                    name: "MySQL server",
                    versions: "(v3.5 - v8.0)",
                    date_started: 2004,
                    knowledge_level: 8
                },
                {
                    icon: "fa-brands fa-postgresql",
                    name: "PostgreSQL",
                    versions: "(v2.7 – 3.7)",
                    date_started: 2018,
                    knowledge_level: 5
                },
                {
                    icon: "fa-brands fa-docker",
                    name: "Docker",
                    versions: null,
                    date_started: 2019,
                    knowledge_level: 7
                },
                {
                    icon: "fa-brands fa-kubernetes",
                    name: "Kubernetes",
                    versions: null,
                    date_started: 2020,
                    knowledge_level: 6
                },
                {
                    icon: "fa-brands fa-aws",
                    name: "AWS ecosystem",
                    versions: null,
                    date_started: 2021,
                    knowledge_level: 5
                },
                {
                    icon: "fa-brands fa-digital-ocean",
                    name: "Digital Ocean",
                    versions: null,
                    date_started: 2018,
                    knowledge_level: 8
                }
            ]
        },
        {
            title: "PHP Frameworks",
            data: [
                {
                    name: "Laravel",
                    versions: "(V5.8 – 11)",
                    date_started: 2019,
                    knowledge_level: 6
                },
                {
                    name: "CodeIgniter",
                    versions: "(v2.0 – v3.1)",
                    date_started: 2014,
                    date_ended: 2018,
                    knowledge_level: 5
                },
                {
                    name: "CAKEPHP",
                    versions: "(v3.5)",
                    date_started: 2012,
                    date_ended: 2014,
                    knowledge_level: 4
                },
                {
                    name: "Yii 2",
                    versions: "(V2 – 3)",
                    date_started: 2020,
                    date_ended: 2022,
                    knowledge_level: 4
                },
                {
                    name: "SYMFONY",
                    versions: "(v2.0-v2.2)",
                    date_started: 2011,
                    date_ended: 2013,
                    knowledge_level: 3
                },
                {
                    name: "PHP ZEND",
                    versions: "(V2.7 – 3.7)",
                    date_started: 2005,
                    date_ended: 2011,
                    knowledge_level: 4
                }
            ]
        },
        {
            title: "JavaScript Frameworks",
            data: [
                {
                    name: "Vue.js",
                    versions: "(V2.1 – 3)",
                    date_started: 2018,
                    knowledge_level: 5
                },
                {
                    name: "jQuery",
                    versions: "(v2 – v3.3)",
                    date_started: null,
                    knowledge_level: 5
                },
                {
                    name: "Angular",
                    versions: "(v3.5)",
                    date_started: null,
                    knowledge_level: 2
                },
                {
                    name: "React",
                    versions: "(v2.0-v2.2)",
                    date_started: null,
                    knowledge_level: 2
                },
                {
                    name: "Node.js",
                    versions: "(V2.7 – 3.7)",
                    date_started: null,
                    knowledge_level: 3
                }
            ]
        },
        {
            title: "CSS Frameworks",
            note: "I love to develop stunning, clean designs to catch the audience’s attention from the very first moment when the page is loaded. I always put a great effort to deliver a very fast & optimised clean content. ",
            data: [
                {
                    name: "Bootstrap",
                    versions: "(v3.0 – v5.4)",
                    date_started: 2013,
                    knowledge_level: 6
                },
                {
                    name: "Tailwind",
                    versions: "(v3.0)",
                    date_started: 2022,
                    knowledge_level: 3
                },
                {
                    name: "Animate CSS",
                    versions: "(v3.0)",
                    date_started: 2022,
                    knowledge_level: 3
                }
            ]
        },
        {
            title: "Version management & Progress tracking",
            data: [
                {
                    name: "GitHub",
                    versions: null,
                    date_started: null,
                    knowledge_level: 6
                },
                {
                    name: "GitLab",
                    versions: null,
                    date_started: null,
                    knowledge_level: 5
                },
                {
                    name: "Jira",
                    versions: null,
                    date_started: null,
                    knowledge_level: 4
                },
                {
                    name: "BitBucket",
                    versions: null,
                    date_started: null,
                    knowledge_level: 5
                }
            ]
        }
    ])

    return {skills}
})
