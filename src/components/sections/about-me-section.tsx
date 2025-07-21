"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { aboutMeGenerator } from '@/ai/flows/about-me-generator';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Wand2, LoaderCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const aboutMeSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  title: z.string().min(1, 'Title is required.'),
  experience: z.string().min(1, 'Experience is required.'),
  projects: z.string().min(1, 'Projects are required.'),
  education: z.string().min(1, 'Education is required.'),
  skills: z.string().min(1, 'Skills are required.'),
  achievements: z.string().optional(),
});

type AboutMeFormValues = z.infer<typeof aboutMeSchema>;

export default function AboutMeSection() {
  const [generatedAboutMe, setGeneratedAboutMe] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<AboutMeFormValues>({
    resolver: zodResolver(aboutMeSchema),
    defaultValues: {
      name: "Sujal Kumar",
      title: "Android Developer",
      experience: "Android Development Intern, Vrid (Jun 2025 - Present, Remote). Worked on core features and UI improvements for a finance app, including fixed deposit support, balance privacy toggle, multi-device sync, and crash handling. Contributed to backend integration with Firestore and ongoing development of a chatbot interface using Jetpack Compose.",
      projects: "Demsi, Bodo Keyboard App. WallisWall, Simple Wallpapers. SelfNotes, Alarm & Routine Manager. SelfEmot, Look into Photos. MarketGo, Store Manager.",
      education: "Tezpur University, Bachelor of Technology, Electronics and Communication Engineering (ECE) (Nov 2022 - Present).",
      skills: "Languages: Kotlin, Java, Python, C++, C. Android: Jetpack Compose, Coroutines, Flows, RxJava, SQLDelight, Room, DataStore, Retrofit, Ktor, Gradle, Material 3, XML. Dependency Injection: Hilt, Koin. Firebase: Authentication, Firestore, Messaging (FCM), Crashlytics, App Distribution, Cloud Functions. Architecture: MVVM, Clean Architecture. Tools: Git, GitHub, GitHub Actions, Mixpanel, Trello, Play Console.",
      achievements: "Extracurricular Activities: Google Developer Student Club (GDSC), App Dev. SME (Sep 2024 - Present). Tezpur University Chess Club (TUCC), Member (Nov 2022 - Present). National Service Scheme (NSS), Student Volunteer (Nov 2022 - May 2024)."
    },
  });

  const onSubmit = async (data: AboutMeFormValues) => {
    setIsLoading(true);
    setGeneratedAboutMe('');
    try {
      const result = await aboutMeGenerator({
        ...data,
        achievements: data.achievements || 'N/A'
      });
      if (result.aboutMe) {
        setGeneratedAboutMe(result.aboutMe);
      } else {
        throw new Error("Failed to generate text. The result was empty.");
      }
    } catch (error) {
      console.error("Error generating 'About Me' section:", error);
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: "There was an error generating the 'About Me' text. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              This section is powered by AI. Fill in the details about your career, and let our assistant craft a compelling professional summary for you.
            </p>
            <Card>
              <CardHeader>
                <CardTitle>AI-Generated Summary</CardTitle>
                <CardDescription>Your professional summary will appear here.</CardDescription>
              </CardHeader>
              <CardContent className="min-h-[200px] text-muted-foreground">
                {isLoading && (
                  <div className="flex h-full items-center justify-center">
                    <LoaderCircle className="h-8 w-8 animate-spin text-primary" />
                  </div>
                )}
                {!isLoading && generatedAboutMe && <p className="whitespace-pre-wrap">{generatedAboutMe}</p>}
                {!isLoading && !generatedAboutMe && <p>Click "Generate" to create your summary.</p>}
              </CardContent>
            </Card>
          </div>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Refine Your Story</CardTitle>
              <CardDescription>Provide the details for the AI to work with.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl><Input placeholder="e.g., Jane Doe" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="title" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl><Input placeholder="e.g., Android Developer" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <FormField control={form.control} name="experience" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Experience</FormLabel>
                      <FormControl><Textarea placeholder="Your work experience..." {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="projects" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Projects</FormLabel>
                      <FormControl><Textarea placeholder="Describe your projects..." {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="education" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Education</FormLabel>
                      <FormControl><Input placeholder="Your education..." {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                   <FormField control={form.control} name="skills" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Skills</FormLabel>
                      <FormControl><Textarea placeholder="List your key skills..." {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="achievements" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Achievements (Optional)</FormLabel>
                      <FormControl><Textarea placeholder="Any notable achievements..." {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <Button type="submit" disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    {isLoading ? <LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                    Generate Summary
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
