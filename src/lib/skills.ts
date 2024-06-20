import { Skill, SkillCategory } from "@/types/interfaces";
import { sanityFetch} from "../../sanity/lib/client";

export async function getSkills(category: SkillCategory) {
    const SKILLS_QUERY =
        `
        *[_type=="skills" && category=="${category}"]{
            _id,label,value,category
        }
        `
    ;
    const data = await sanityFetch<Skill[]>({ query: SKILLS_QUERY });
    return data as Skill[];
}