import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Database, Rocket, Layers3 as ArchIcon } from "lucide-react";
import AnimatedSection from "@/components/animated-section";

const skillsData = {
  languages: ["Kotlin", "Java", "Python", "C++", "C"],
  android: ["Jetpack Compose", "Coroutines", "Flows", "RxJava", "SQLDelight", "Room", "DataStore", "Retrofit", "Ktor", "Gradle", "Material 3", "XML"],
  di: ["Hilt", "Koin"],
  firebase: ["Authentication", "Firestore", "Messaging (FCM)", "Crashlytics", "App Distribution", "Cloud Functions"],
  architecture: ["MVVM", "Clean Architecture"],
  tools: ["Git", "GitHub", "GitHub Actions", "Mixpanel", "Trello", "Play Console"]
};

const SkillCategory = ({ title, skills, icon }: { title: string, skills: string[], icon: React.ReactNode }) => (
  <Card className="border-border/50 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
    <CardHeader className="flex flex-row items-center gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        {icon}
      </div>
      <CardTitle className="font-headline text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
       <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="text-sm">{skill}</Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-semibold uppercase tracking-wider text-primary">Skills</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">My Technical Expertise</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I have experience with a wide range of technologies for building robust and scalable applications.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
           <SkillCategory title="Languages" skills={skillsData.languages} icon={<Code className="h-6 w-6 text-primary" />} />
           <SkillCategory title="Android Development" skills={skillsData.android} icon={<Smartphone className="h-6 w-6 text-primary" />} />
           <SkillCategory title="Dependency Injection" skills={skillsData.di} icon={<Rocket className="h-6 w-6 text-primary" />} />
           <SkillCategory title="Firebase" skills={skillsData.firebase} icon={<Database className="h-6 w-6 text-primary" />} />
           <SkillCategory title="Architecture" skills={skillsData.architecture} icon={<ArchIcon className="h-6 w-6 text-primary" />} />
           <SkillCategory title="Tools & Platforms" skills={skillsData.tools} icon={<Code className="h-6 w-6 text-primary" />} />
        </div>
      </div>
    </AnimatedSection>
  );
}
