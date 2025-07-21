import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import AnimatedSection from "@/components/animated-section";

const educationData = [
  {
    institution: "Tezpur University",
    degree: "Bachelor of Technology, Electronics and Communication Engineering (ECE)",
    period: "Nov 2022 - Present",
    details: "CGPA: 7.68 | SGPA: 7.75",
  },
  {
    institution: "Paramount Academy School",
    degree: "Higher Secondary",
    period: "2020 - 2022",
    details: "Score: 89.2%",
  },
  {
    institution: "North Point Children's School",
    degree: "Matriculation",
    period: "2019 - 2020",
    details: "Score: 88.4%",
  },
];

export default function EducationSection() {
  return (
    <AnimatedSection id="education" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-semibold uppercase tracking-wider text-primary">Education</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">My Academic Journey</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My educational background has provided me with a strong foundation in technology and engineering principles.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-1 lg:grid-cols-3">
          {educationData.map((edu, index) => (
             <Card key={index} className="border-border/50 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
               <CardHeader className="flex flex-row items-center gap-4">
                 <div className="rounded-full bg-primary/10 p-3">
                   <GraduationCap className="h-6 w-6 text-primary" />
                 </div>
                 <div className="flex-1">
                   <CardTitle className="font-headline text-xl">{edu.degree}</CardTitle>
                   <p className="text-sm text-muted-foreground">{edu.institution}</p>
                 </div>
               </CardHeader>
               <CardContent className="space-y-2 pl-[calc(1.5rem+40px)]">
                 <p className="font-semibold">{edu.period}</p>
                 <p className="text-muted-foreground">
                   {edu.details}
                 </p>
               </CardContent>
             </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
