import { Statistic } from "@/types/interfaces";
import {getProjects} from "@/lib/projects";

export async function getStatistics() {

    const totalProjects: number = (await getProjects()).length;

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