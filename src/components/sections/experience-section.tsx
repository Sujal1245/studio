import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Briefcase, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";

const experienceData = [
  {
    company: "Vrid",
    title: "Android Development Intern",
    period: "Jun 2025 - Present",
    type: "Remote",
    description: [
      "Worked on core features and UI improvements for a finance app, including fixed deposit support, balance privacy toggle, multi-device sync, and crash handling.",
      "Contributed to backend integration with Firestore and ongoing development of a chatbot interface using Jetpack Compose.",
    ],
    websiteUrl: "https://vrid.in",
    appUrl: "https://play.google.com/store/apps/details?id=in.vrid",
  },
];

export default function ExperienceSection() {
  return (
    <AnimatedSection id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-semibold uppercase tracking-wider text-primary">Experience</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Where I've Worked</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm passionate about building great software and have had the opportunity to work on exciting projects.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-3xl gap-8">
          {experienceData.map((exp, index) => (
            <Card key={index} className="border-border/50 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                     <div className="p-3 rounded-full bg-primary/10">
                       <Briefcase className="h-6 w-6 text-primary" />
                     </div>
                    <div>
                      <CardTitle className="font-headline text-2xl">{exp.title}</CardTitle>
                      <CardDescription>{exp.company}</CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary">{exp.period}</Badge>
                    <p className="text-sm text-muted-foreground mt-1">{exp.type}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex gap-2">
                {exp.websiteUrl && (
                  <Button asChild variant="outline" className="w-full">
                    <Link href={exp.websiteUrl} target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" />
                      Website
                    </Link>
                  </Button>
                )}
                {exp.appUrl && (
                   <Button asChild className="w-full">
                    <Link href={exp.appUrl} target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" viewBox="0 0 512 512"><path d="M96 32C78.3 32 64 46.3 64 64V448c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H96zM221.3 84.7l112 48c14.1 6 22.7 20.1 22.7 35.3V240v32c0 15.2-8.6 29.3-22.7 35.3l-112 48c-13.9 5.9-29.7-1.2-35.6-15.1s1.2-29.7 15.1-35.6l49.4-21.2V176.9l-49.4-21.2c-13.9-5.9-21.7-21.8-15.8-35.6s21.8-21.7 35.6-15.8z" fill="currentColor"/></svg>
                      App
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
