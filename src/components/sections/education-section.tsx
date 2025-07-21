import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Education</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">My Academic Journey</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My educational background has provided me with a strong foundation in technology and engineering principles.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-md gap-6">
          <Card className="shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-md bg-primary/10 p-3">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle className="font-headline text-xl">Bachelor of Technology in ECE</CardTitle>
                <p className="text-sm text-muted-foreground">Tezpur University</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="font-semibold">Expected Graduation: 2026</p>
              <p className="text-muted-foreground">
                Relevant coursework includes Data Structures and Algorithms, Object-Oriented Programming, and Mobile Application Development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
