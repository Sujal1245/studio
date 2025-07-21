import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            Have a project in mind or just want to say hello? Feel free to reach out.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name">Name</label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email">Email</label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message">Message</label>
                  <Textarea id="message" placeholder="Your message..." className="min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full" variant="outline">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <h3 className="font-headline text-2xl font-bold">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-primary/10 p-2 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:your.email@example.com" className="text-muted-foreground hover:text-primary">
                    your.email@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-primary/10 p-2 text-primary">
                  <Linkedin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    linkedin.com/in/your-profile
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-primary/10 p-2 text-primary">
                  <Github className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">GitHub</h4>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    github.com/your-username
                  </a>
                </div>
              </div>
               <div className="flex items-start gap-4">
                <div className="rounded-md bg-primary/10 p-2 text-primary">
                  <Twitter className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Twitter</h4>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    @your_handle
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
