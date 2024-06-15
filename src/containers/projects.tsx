import {ProjectItem} from "@/components/projects/project-item";
import {SectionTitle} from "@/components/section-title";
import { getProjects } from "@/lib/projects";


export async function ProjectsSection() {
    const projects = await getProjects();
    return(
        <section id="projects" className="relative space-y-6">
            <SectionTitle title="My projects" description="Some things I've built" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <ProjectItem key={project._id} project={project} />
                ))}
            </div>
        </section>
    )
}