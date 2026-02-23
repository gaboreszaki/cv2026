import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useHistoryStore = defineStore('history', () => {

    const employments = ref([
        {
            company_name: "Creative Collisions Limited",

            company_li_url: "https://www.linkedin.com/company/mydutycollect/",
            company_location: "Dublin",
            country: "Ireland",
            country_code: "IE",
            position: "Chief Technology Officer (CTO)",
            date_from: "2020-09-01",
            date_until: "2023-02-01",
            image: "pexels-tomfisk-3063470.jpg",
            hats: [
                "Chief technology officer",
                "Lead Software Engineer",
                "Lead Architect",
                "DevOps Engineer",
                "Scrum Master"
            ],
            responsibilities: [
                "Create a complete ecosystem of Duty, VAT, and Tax calculation",
                "Lead Engineer in the team to develop the company's main project (My Duty Collect)",
                "Supervise an AI engine development",
                "Oversee the company other major projects (PostLocal, IOSS)",
                "Oversee company property, security, source code, and other valuable possessions.",
                "Implement industry standards in development processes",
                "Maintain the old system, while improving the code standards",
                "Hire new developers and create the Hiring process",
                "Mentor and tutor other developers and staff",
                "Creating, refining, and maintaining company processes and ceremonies",
                "Creating release versions and maintaining release schedules"
            ],
            highlights: [
                "Planed and delivered the company Main Project, a complete ecosystem of RESTful API Microservices,\nwith Single-Sign-On (SSO), Modular infrastructure, Docker containerisation, and Kubernetes or AWS Orchestration.\nDesigned to be scalable HORIZONTALLY and VERTICALLY.",
                "Introduced and trained employees to Modern frameworks Like Laravel, Vue.js.",
                "Introduced Git Releases & CI – DC pipelines",
                "Added Jira flow integration to Git development cycle",
                "Defined Coding standards inside the company",
                "Created Developer documentations and user guides"
            ],
            tech_stack: [
                {
                    name: "Frameworks",
                    items: [
                        "Laravel 7.1 - 11.0,",
                        "Laravel Lumen 5.0 - 8.0",
                        "Laravel - Jetstream",
                        "Vue.js 3",
                        "VuePress 1.0 - 2.0",
                        "Yii 2"
                    ]
                },
                {
                    name: "Languages",
                    items: [
                        "PHP 7.0 - 8.2",
                        "Javascript ES6",
                        "Python 2 - 3",
                        "Bash",
                        "HTML5 & CSS3",
                        "SASS & SCSS",
                        "JSON, XML, Markdown"
                    ]
                },
                {
                    name: "Components",
                    items: [
                        "Kubernetes",
                        "Docker containers",
                        "AWS Ecosystem",
                        "DigitalOcean",
                        "TenserFlow",
                        "Webpack",
                        "Composer & NPM",
                        "Bootstrap 5.0",
                        "Font Awesome 6.0"
                    ]
                },
                {
                    name: "Tools",
                    items: [
                        "Environment: Agile / Scrum",
                        "Dependency management: Composer / NPM ",
                        "Version management: GitHub ",
                        "CI & CD: Github Actions",
                        "Project management: Jira",
                        "Issue tracking: Jira",
                        "Team collaboration: Slack, Google meet"
                    ]
                }
            ]
        },
        {
            company_name: "Immersive VR Education",
            company_web_url: "https://engagevr.io/",
            company_li_url: "https://www.linkedin.com/company/engagexr/",
            company_location: "Waterford",
            country: "Ireland",
            country_code: "IE",
            position: "Software Engineer & SysAdmin",
            date_from: "2018-05-01",
            date_until: "2020-03-01",
            image: "pexels-sound-on-3761124.jpg",
            hats: [
                "Senior Software Engineer",
                "Lead Architect of Payment System integration",
                "DevOps Engineer & SysAdmin"
            ],
            responsibilities: [
                "Plan and deliver company requested features to the application.",
                "Develop API endpoints (RESTFul) and third party API integrations.",
                "Develop Front-End & Back-end components.",
                "Develop PHPUnit tests.",
                "Code review and code delegation.",
                "Develop CI – CD pipelines.",
                "Deploy and secure LNPP & LAMP stack environments.",
                "Maintain the server park.",
                "Mentoring other developers.",
                "Make documentation."
            ],
            highlights: [
                "Introduced Test Driven Development (TDD) to the company.",
                "Introduced a secure way to share passwords with developer groups. (Passbolt)",
                "Built the initial design for the website.",
                "Planed and developed the payment system with STRIPE.",
                "Helped to build the “rules of development”.",
                "Second to leader in the development team"
            ],
            tech_stack: [
                {
                    name: "Frameworks",
                    items: [
                        "Laravel 5.0 - 5.8",
                        "Vue.js 3"
                    ]
                },
                {
                    name: "Languages",
                    items: [
                        "PHP 7.0 - 7.3",
                        "Javascript ES4",
                        "Bash",
                        "HTML5 & CSS3",
                        "SASS & SCSS"
                    ]
                },
                {
                    name: "Components",
                    items: [
                        "LNPP stack",
                        "DigitalOcean",
                        "Stripe",
                        "Passbolt",
                        "Webpack",
                        "Bootstrap 4.0",
                        "Font Awesome 5.0",
                        "Wordpress"
                    ]
                },
                {
                    name: "Tools",
                    items: [
                        "Dependency management: Composer / NPM ",
                        "Version management: GitHub / GitLab ",
                        "CI & CD: GitLab",
                        "Environment: Agile / Scrum",
                        "Project management: Jira",
                        "Issue tracking: Jira",
                        "Team collaboration: Slack"
                    ]
                }
            ]
        },
        {
            company_name: "North Web Solutions LTD",
            company_web_url: "https://northweb.co.uk/",
            company_location: "Bristol",
            country: "United Kingdom",
            country_code: "GB",
            position: "Software Engineer & SysAdmin",
            date_from: "2015-03-01",
            date_until: "2022-10-01",
            image: "nws_bg_mobile_hd.jpg",
            hats: [
                "Lead Software Engineer",
                "Lead Architect",
                "DevOps Engineer & SysAdmin"
            ],
            responsibilities: [
                "Develop Company and project management tools.",
                "Develop Large scale inventories.",
                "Create CodeIgniter libraries.",
                "Maintain CRMs.",
                "Develop Presentation websites.",
                "Develop Magento 2 websites & themes.",
                "Create WP themes.",
                "Develop Android applications. "
            ],
            highlights: "Most of the company's project was under strict NDA, so I can't share many details on the projects what we developed, but in general, we created large scale inventories and management systems, for military and civilian applications.",
            tech_stack: [
                {
                    name: "Frameworks",
                    items: [
                        "Laravel 5.0-8",
                        "Vue.js 2 & 3",
                        "CodeIgniter 3.0 - 4.0",
                        "Magento 2.3"
                    ]
                },
                {
                    name: "Languages",
                    items: [
                        "PHP 5.6-7.4",
                        "Javascript ES4",
                        "Bash",
                        "HTML5 & CSS3",
                        "SASS & SCSS",
                        "Python"
                    ]
                },
                {
                    name: "Components",
                    items: [
                        "LAMP stack",
                        "DigitalOcean",
                        "Webpack",
                        "Bootstrap 3.0-4.0",
                        "Font Awesome 5.0",
                        "jQuery 3.2.1",
                        "Animate CSS"
                    ]
                },
                {
                    name: "Tools",
                    items: [
                        "Dependency management: Composer / NPM ",
                        "Version management: GitHub & Bitbucket",
                        "Environment: Waterfall",
                        "Project management: Github",
                        "Issue tracking: Github",
                        "Team collaboration: Google"
                    ]
                }
            ]
        },
        {
            company_name: "Maslovs & Co",
            company_location: "Bristol",
            country: "United Kingdom",
            country_code: "GB",
            position: "PHP Developer (Full Stack)",
            date_from: "2014-09-01",
            date_until: "2015-09-01",
            image: "pexels-brett-sayles-3027216.jpg",
            hats: [
                "Software Engineer",
                "DevOps Engineer & SysAdmin"
            ],
            responsibilities: [
                "Develop Company and project management tools.",
                "Plan and develop client & internally requested features",
                "Maintain CRMs.",
                "Develop Android applications. "
            ],
            highlights: [
                "Developed a starter page which can adopt new links and the user can customize the environment.",
                "Developed a small Chat system with built in file-share system which is based on 'room authentication'."
            ],
            tech_stack: [
                {
                    name: "Frameworks",
                    items: [
                        "Laravel 3",
                        "InfoCore 1.0"
                    ]
                },
                {
                    name: "Languages",
                    items: [
                        "PHP 5.6",
                        "HTML5 & CSS3",
                        "SASS & SCSS"
                    ]
                },
                {
                    name: "Components",
                    items: [
                        "Bootstrap 3.0"
                    ]
                },
                {
                    name: "Tools",
                    items: [
                        "Environment: Waterfall",
                        "Dependency management: Composer",
                        "Version management: GitHub ",
                        "Team collaboration: Slack"
                    ]
                }
            ]
        },
        {
            company_name: "InfoCorp KFT",
            company_location: "Pecs",
            country: "Hungary",
            country_code: "HU",
            position: "WebDeveloper & Computer mechanic",
            date_from: "2008-02-01",
            date_until: "2014-09-01",
            image: "pexels-sejio402-6466141.jpg",
            hats: [
                "Software Engineer",
                "Lead Architect",
                "Computer technician"
            ],
            responsibilities: [
                "Build Company's  framework",
                "Develop complex food ordering systems and inventories for the company's main client",
                "Develop small scale websites"
            ],
            highlights: [
                "Created a reusable Food and pizza ordering system completed with order tracking in 2010",
                "Created the company main framework (InfoCore 1.0)"
            ],
            tech_stack: [
                {
                    name: "Frameworks",
                    items: [
                        "InfoCore 1.0"
                    ]
                },
                {
                    name: "Languages",
                    items: [
                        "PHP 5.6",
                        "HTML5 & CSS3",
                        "SASS & SCSS"
                    ]
                },
                {
                    name: "Components",
                    items: [
                        "Bootstrap 3.0"
                    ]
                },
                {
                    name: "Tools",
                    items: [
                        "Environment: Waterfall",
                        "Dependency management: Composer",
                        "Version management: GitHub "
                    ]
                }
            ]
        },
        {
            company_name: "Kreat-Pol KFT",
            company_location: "Pecs",
            country: "Hungary",
            country_code: "HU",
            position: "WebDeveloper & Computer mechanic",
            date_from: "2005-01-01",
            date_until: "2008-02-01",
            image: "pexels-denis-ngai-2620907-7459407.jpg",
            hats: [
                "Software Engineer",
                "Computer technician"
            ],
            responsibilities: [
                "Develop small scale websites presentation and interactive websites"
            ],
            highlights: [
                "Built lots of presentation sites.",
                "Repaired many computers, and built a few houses :)"
            ],
            tech_stack: [
                {
                    name: "Languages",
                    items: [
                        "PHP 5.0-5.4",
                        "HTML5 & CSS3",
                        "SASS & SCSS"
                    ]
                },
                {
                    name: "Tools",
                    items: [
                        "Environment: Waterfall",
                        "Dependency management: Composer"
                    ]
                }
            ]
        }
    ])

    return {employments}

})