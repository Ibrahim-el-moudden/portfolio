import {SectionTitle} from "@/components/section-title";
import {SkillsContainer} from "@/components/skills/skills-container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabsItems } from "@/constants/tabs-items";
import {client} from "../../sanity/lib/client";
import {Skill} from "@/types/interfaces";

async function fetchSkills(category: string) {
    const query = `
        *[_type == "skills" && category == "${category}"] {
            _id,
            label,
            value,
            category
        }
    `;
    const data = await client.fetch(query);
    return data as Skill[];
}

export async function SkillsSection() {

    const frontendSkills = await fetchSkills("frontend");
    const backendSkills = await fetchSkills("backend");
    const tools = await fetchSkills("tools");

    return (
        <section id="skills" className="relative space-y-6">
            <SectionTitle title="Skills" description="My technical proficiency" />
            <Tabs defaultValue={tabsItems[0].value}>
                <div className="grid md:grid-cols-3 gap-4 md:gap-8">
                    {/* tabs list */}
                    <TabsList className="grid grid-cols-3 md:grid-cols-1 gap-2 w-full h-fit">
                        {tabsItems.map((item) => {
                            const { value, label, icon: Icon } = item;
                            return (
                                <TabsTrigger key={value} value={value} className="w-full gap-2">
                                    <Icon className="size-4" />
                                    <span className="capitalize">{label}</span>
                                </TabsTrigger>
                            );
                        })}
                    </TabsList>
                    {/* tabs content */}
                    <div className="md:col-span-2 bg-background/50">
                        <TabsContent value="frontend">
                            <SkillsContainer data={frontendSkills} label="front end" />
                        </TabsContent>
                        <TabsContent value="backend">
                            <SkillsContainer data={backendSkills} label="back end" />
                        </TabsContent>
                        <TabsContent value="tools">
                            <SkillsContainer data={tools} label="tools" />
                        </TabsContent>
                    </div>
                </div>
            </Tabs>
        </section>
    )
}