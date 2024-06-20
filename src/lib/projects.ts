import { Project } from "@/types/interfaces";
import { sanityFetch} from "../../sanity/lib/client";

export async function getProjects() {
    const PROJECTS_QUERY = `
                    *[_type=="projects"]{
                        _id,
                        title,
                        description,
                        images,
                        tags,
                        demoLink,
                        githubLink,
                        publishedAt,
                        isResponsive
                    }
                `;
    const data = await sanityFetch<Project[]>({ query: PROJECTS_QUERY });
    return data as Project[];
}