import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Demsi, Bodo Keyboard App",
    description: "Built the first Android keyboard for the Bodo language, one of India's 22 scheduled languages. Reached 1,000+ Play Store downloads and was featured in regional media.",
    image: "https://play-lh.googleusercontent.com/I2kwnx5v594yL1MSi-7-9-gZ2vw7v195a_T6Gn3r_XH9Uv-42V-T0E7D019lKw4kLNM=w240-h480-rw",
    imageHint: "keyboard app",
    tags: ["Bodo Language", "Android Keyboard"],
    link: "https://play.google.com/store/apps/details?id=com.nlpcse.bodokeyboardv1",
  },
  {
    title: "WallisWall, Simple Wallpapers",
    description: "Developed a Material-themed wallpaper app with Firebase backend and smooth image loading using Glide.",
    image: "https://play-lh.googleusercontent.com/9C0pYn227_-A1sY-i1hM9GBaHhOuh20yv6AFbmzL_Xo1-k4G_k3q7sTv0oK-5aGqIg=w240-h480-rw",
    imageHint: "wallpaper app",
    tags: ["Material Design", "Firebase", "Glide"],
    link: "https://play.google.com/store/apps/details?id=com.Sujal_Industries.wallpapers.WALLisWALL",
  },
  {
    title: "SelfNotes, Alarm & Routine Manager",
    description: "Created an app to manage daily alarms and routines using Android's AlarmManager. Focused on delivering a clean and reliable UI for everyday productivity.",
    image: "https://play-lh.googleusercontent.com/jC_6B-s-19t_5oG0RDRH9m2S2YpAbIs05_R21j5hXJ7_HqjBqsv942g_N_Aqd2D-eA=w240-h480-rw",
    imageHint: "notes app",
    tags: ["AlarmManager", "Productivity"],
    link: "https://play.google.com/store/apps/details?id=com.Sujal_Industries.Notes.SelfNotes",
  },
  {
    title: "SelfEmot, Look into Photos",
    description: "Built an image recognition app using Google's ML Kit to detect and label objects in photos with real-time confidence scores.",
    image: "https://play-lh.googleusercontent.com/xT50qCgUnm-CF-P0A60cZ8s0nNf2xO2-WjnV2sNfM4lTwC6P26pYyG4rY2xZ9A6n1w=w240-h480-rw",
    imageHint: "photo recognition",
    tags: ["Google ML Kit", "Image Recognition"],
    link: "https://play.google.com/store/apps/details?id=com.Sujal_Industries.SelfEmot",
  },
  {
    title: "MarketGo, Store Manager",
    description: "Developed an inventory management app using Sugar ORM to handle local data storage and basic stock tracking.",
    image: "https://play-lh.googleusercontent.com/X-cM4VaxM89N-Oa2g-y2T59Qo-0Vqg1tT7R0Q5q4qG-Xz5b6qY0a9f8s8g=w240-h480-rw",
    imageHint: "inventory app",
    tags: ["Sugar ORM", "Inventory Management"],
    link: "https://play.google.com/store/apps/details?id=com.Sujal_Industries.AndroidMarket",
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
        <div className="mx-auto mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
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
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
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
