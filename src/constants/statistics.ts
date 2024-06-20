import {Project, Statistic} from "@/types/interfaces";
import {client} from "../../sanity/lib/client";

async function fetchProjects() {
    const query = `
        *[_type == "projects"]
    `;
    const data = await client.fetch(query);
    return data as Project[];
}

export async function getStatistics() {

    const totalProjects: number = (await fetchProjects()).length;

    const statistics: Statistic[] = [
        {
            label: "Years of experience",
            value: new Date().getFullYear() - 2022,
        },
        {
            label: "Completed projects",
            value: totalProjects,
        },
    ];
    return { statistics };
}