export interface SkillItemData {
    icon?: string;
    name?: string;
    versions?: string | null;
    date_started?: number | null;
    date_ended?: number | null;
    knowledge_level?: number;
}

export interface SkillGroup {
    order: number;
    class?: string;
    title: string;
    data_type?: string;
    data: string[] | SkillItemData[];
}