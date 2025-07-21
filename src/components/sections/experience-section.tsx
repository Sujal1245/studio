import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    company: "Vrid",
    title: "Android Development Intern",
    period: "Ongoing",
    type: "Remote",
    description: [
      "Contributed to the development of a new social media feature, increasing user engagement by 15%.",
      "Collaborated with the UI/UX team to implement modern, responsive layouts using Jetpack Compose.",
      "Participated in agile development cycles, including daily stand-ups, sprint planning, and retrospectives.",
      "Fixed critical bugs and improved application performance and stability.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Experience</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Where I've Worked</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm passionate about building great software and have had the opportunity to work on exciting projects.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-3xl gap-8">
          {experienceData.map((exp, index) => (
            <Card key={index} className="shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                     <Briefcase className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle className="font-headline text-2xl">{exp.title}</CardTitle>
                      <CardDescription>{exp.company}</CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline">{exp.period}</Badge>
                    <p className="text-sm text-muted-foreground mt-1">{exp.type}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
