import {defineStore} from "pinia";
import {ref} from "vue";


export const useKnowledgeStore = defineStore('knowledge', () => {

    const data = ref([
        {
            level: 1,
            shorthand: "Novice",
            description: "Absolute beginner with little to no prior exposure. Requires step-by-step guidance for all tasks."
        },
        {
            level: 2,
            shorthand: "Beginner",
            description: "Has basic understanding of core concepts but lacks practical experience. Can complete simple tasks with assistance."
        },
        {
            level: 3,
            shorthand: "Advanced Beginner",
            description: "Gaining practical experience. Can perform routine tasks independently but struggles with troubleshooting edge cases."
        },
        {
            level: 4,
            shorthand: "Competent",
            description: "Comfortable with standard day-to-day tasks. Requires occasional guidance for complex problems but is generally self-sufficient."
        },
        {
            level: 5,
            shorthand: "Intermediate",
            description: "Solid foundation of knowledge. Can handle moderately complex tasks and requires minimal supervision."
        },
        {
            level: 6,
            shorthand: "Advanced Intermediate",
            description: "Strong understanding of the subject. Troubleshoots effectively and works on complex projects independently."
        },
        {
            level: 7,
            shorthand: "Proficient",
            description: "Highly capable and autonomous. Can design standard solutions and starts mentoring junior team members."
        },
        {
            level: 8,
            shorthand: "Advanced",
            description: "Deep, comprehensive knowledge. Foresees potential pitfalls, optimizes workflows, and regularly guides the team."
        },
        {
            level: 9,
            shorthand: "Senior",
            description: "Highly experienced authority within the team. Leads projects and solves difficult, non-standard problems."
        },
        {
            level: 10,
            shorthand: "Expert",
            description: "10,000h+ experience; innovates, architects complex systems, and sets industry standards"
        }
    ])

    return {data}
})
