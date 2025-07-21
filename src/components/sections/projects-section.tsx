import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Productivity Pro",
    description: "A comprehensive productivity app to manage tasks, notes, and habits, helping users stay organized and focused.",
    image: "https://placehold.co/600x400.png",
    imageHint: "app screenshot",
    tags: ["Kotlin", "Jetpack Compose", "Room DB"],
    link: "#",
  },
  {
    title: "ConnectSphere",
    description: "A social networking app that connects people with shared interests and hobbies in their local area.",
    image: "https://placehold.co/600x400.png",
    imageHint: "mobile application",
    tags: ["Java", "MVVM", "Firebase", "Retrofit"],
    link: "#",
  },
  {
    title: "FitTrack",
    description: "A fitness tracking application to monitor workouts, log meals, and track progress towards health goals.",
    image: "https://placehold.co/600x400.png",
    imageHint: "health application",
    tags: ["Kotlin", "Coroutines", "Google Fit API"],
    link: "#",
  },
  {
    title: "E-Learn Platform",
    description: "An educational app offering a wide range of courses and interactive lessons for students of all ages.",
    image: "https://placehold.co/600x400.png",
    imageHint: "learning app",
    tags: ["Jetpack Compose", "Dagger-Hilt", "ExoPlayer"],
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">My Projects</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Featured Work</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the Android applications I've developed, available on the Google Play Store.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="h-60 w-full object-cover"
                data-ai-hint={project.imageHint}
              />
              <CardHeader>
                <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    View on Google Play
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
