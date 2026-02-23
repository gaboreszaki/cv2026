import {defineStore} from "pinia";
import {ref} from "vue";

export const useSkillStore = defineStore('knowledge', () => {

    const skills = ref([
        {
            title: "Programming style",
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
            sub_title: "Programming & Script Languages",
            data: [
                {
                    icon: "fa-brands fa-php",
                    name: "PHP",
                    versions: "(v5.6 – 8.5)",
                    date_started: 2003,
                    knowledge_level: 6
                },
                {
                    icon: "fa-brands fa-js",
                    name: "JavaScript",
                    versions: null,
                    date_started: 2012,
                    knowledge_level: 5
                },
                {
                    icon: "fa-solid fa-terminal",
                    name: "Bash",
                    versions: null,
                    date_started: 2019,
                    knowledge_level: 5
                },
                {
                    icon: "fa-brands fa-html5",
                    name: "HTML5",
                    versions: null,
                    date_started: 2001,
                    knowledge_level: 6
                }, {
                    icon: "fa-brands fa-css3-alt",
                    name: "CSS3",
                    versions: null,
                    date_started: 2001,
                    knowledge_level: 6
                },
                {
                    icon: "fa-brands fa-sass",
                    name: "SASS ",
                    versions: null,
                    date_started: 2008,
                    knowledge_level: 5
                },
                {
                    icon: "fa-brands fa-less",
                    name: "LESS",
                    versions: null,
                    date_started: 2008,
                    knowledge_level: 5
                },

                {
                    name: "XML & JSON",
                    versions: null,
                    date_started: 2009,
                    knowledge_level: 5
                },
                {
                    icon: "fa-brands fa-python",
                    name: "Python",
                    versions: "(v2.7 – 3.7)",
                    date_started: 2019,
                    knowledge_level: 3
                },
                {
                    icon: "fa-brands fa-golang",
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
                    knowledge_level: 2
                }
            ]
        },
        {
            title: "Server Technologies",
            note: [
                "Build & configure a Linux based server from scratch.",
                "Confident use of CLI over SSH",
                "Cron and Bash scripts automations",
                "Confident use of LAMP & LNPP Environment",
                "High Security Standards (Encrypted HDD’s / VPN / SSH / etc.)",
                "FTP / SFTP, TS, SMTP, SSL / OpenSSL, media & game servers, Cloud, VPS, GRID"
            ],
            sub_title: "Experience as sysadmin:",
            data: [
                {
                    name: "Linux - Ubuntu",
                    versions: "(v16 – v24.04)",
                    date_started: 2004,
                    knowledge_level: 5
                },
                {
                    name: "Apache Web server",
                    versions: "(v2.4)",
                    date_started: 2004,
                    knowledge_level: 5
                },
                {
                    name: "Nginx",
                    versions: "(v1.22)",
                    date_started: 2004,
                    knowledge_level: 5
                },
                {
                    name: "PHP",
                    versions: "(v4.3-v8.3)",
                    date_started: 2004,
                    knowledge_level: 5
                },
                {
                    name: "mySQL",
                    versions: "(v3.5)",
                    date_started: 2004,
                    knowledge_level: 5
                },
                {
                    name: "PostgreSQL",
                    versions: "(v2.7 – 3.7)",
                    date_started: 2018,
                    knowledge_level: 5
                },
                {
                    name: "Docker",
                    versions: null,
                    date_started: 2019,
                    knowledge_level: 5
                },
                {
                    name: "Kubernetes",
                    versions: null,
                    date_started: 2020,
                    knowledge_level: 4
                },
                {
                    name: "AWS ecosystem",
                    versions: null,
                    date_started: 2021,
                    knowledge_level: 3
                },
                {
                    name: "Digital Ocean",
                    versions: null,
                    date_started: 2018,
                    knowledge_level: 6
                }
            ]
        }
    ])

    return {skills}
})
