import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import AnimatedSection from "@/components/animated-section";

const projects = [
  {
    title: "Demsi, Bodo Keyboard App",
    description: "Built the first Android keyboard for the Bodo language, one of India's 22 scheduled languages. Reached 1,000+ Play Store downloads and was featured in regional media.",
    image: "/images/project-demsi.png",
    imageHint: "keyboard app",
    tags: ["Bodo Language", "Android Keyboard"],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.nlpcse.bodokeyboardv1",
  },
  {
    title: "WallisWall, Simple Wallpapers",
    description: "Developed a Material-themed wallpaper app with Firebase backend and smooth image loading using Glide.",
    image: "/images/projects/walliswall.png",
    imageHint: "wallpaper app",
    tags: ["Material Design", "Firebase", "Glide"],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.Sujal_Industries.wallpapers.WALLisWALL",
    githubLink: "https://github.com/Sujal1245/WALLisWALL-Wallpaper-App",
  },
  {
    title: "SelfNotes, Alarm & Routine Manager",
    description: "Created an app to manage daily alarms and routines using Android's AlarmManager. Focused on delivering a clean and reliable UI for everyday productivity.",
    image: "/images/project-selfnotes.png",
    imageHint: "notes app",
    tags: ["AlarmManager", "Productivity"],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.Sujal_Industries.Notes.SelfNotes",
  },
  {
    title: "SelfEmot, Look into Photos",
    description: "Built an image recognition app using Google's ML Kit to detect and label objects in photos with real-time confidence scores.",
    image: "/images/project-selfemot.png",
    imageHint: "photo recognition",
    tags: ["Google ML Kit", "Image Recognition"],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.Sujal_Industries.SelfEmot",
  },
  {
    title: "MarketGo, Store Manager",
    description: "Developed an inventory management app using Sugar ORM to handle local data storage and basic stock tracking.",
    image: "/images/project-marketgo.png",
    imageHint: "inventory app",
    tags: ["Sugar ORM", "Inventory Management"],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.Sujal_Industries.AndroidMarket",
  },
];

export default function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-semibold uppercase tracking-wider text-primary">My Projects</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Featured Work</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the Android applications I've developed, available on the Google Play Store.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-border/50 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 flex flex-col">
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
              <CardContent className="flex-grow">
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex gap-2">
                {project.playStoreLink && (
                  <Button asChild variant="outline" className="w-full">
                    <Link href={project.playStoreLink} target="_blank" rel="noopener noreferrer">
                      Play Store
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
                {project.githubLink && (
                  <Button asChild variant="secondary" className="w-full">
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
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
