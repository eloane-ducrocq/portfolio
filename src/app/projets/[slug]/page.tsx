import {PROJECTS} from "@/constants/projects";
import {redirect} from "next/navigation";
import Project from "@/components/Project";

export default async function ProjectPage({
                                              params,
                                          }: {
    params: Promise<{ slug: string }>
}) {
    const {slug} = await params;
    const correspondingProject = PROJECTS.find((project) => project.slug === slug);
    if (!correspondingProject) {
        redirect("/")
    }

    return (
        <Project project={correspondingProject}/>
    )
}