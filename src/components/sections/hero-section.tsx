import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import AnimatedSection from "@/components/animated-section";

const AndroidLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    className="h-16 w-16 text-primary drop-shadow-[0_2px_4px_rgba(var(--primary-rgb),0.4)]"
    aria-label="Android Logo"
  >
    <path d="M29.5 20c-1 0-1.9.1-2.9.1-1.3 0-2.4-.9-2.7-2.1-.4-2.1.8-4.1 2.9-4.7 1-.3 2-.3 3-.2v-1.8c0-3.3-2.7-6-6-6h-1c-1.1 0-2-.9-2-2s.9-2 2-2h1c4.4 0 8 3.6 8 8v6.7c-1.3-.4-2.7-.6-4.2-.6zM7.4 13.3c2.1.6 3.4 2.6 2.9 4.7-.3 1.2-1.4 2.1-2.7 2.1-.9 0-1.9-.1-2.9-.1-1.5 0-2.9.2-4.2.6V16c0-4.4 3.6-8 8-8h1c1.1 0 2 .9 2 2s-.9 2-2 2h-1c-3.3 0-6 2.7-6 6v1.8c1-.1 2-.1 3 .2zM19.9 22.3c-.6 0-1.1.5-1.1 1.1v2.2c0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1v-2.2c0-.6-.5-1.1-1.1-1.1zM12.1 22.3c-.6 0-1.1.5-1.1 1.1v2.2c0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1v-2.2c0-.6-.5-1.1-1.1-1.1zM10.1 8.5c-.8-.8-2.1-.8-2.8 0l-.8.8c-.8.8-.8 2.1 0 2.8l.8.8c.8.8 2.1.8 2.8 0l.8-.8c.8-.8.8-2.1 0-2.8l-.8-.8zM24.8 8.5c-.8-.8-2.1-.8-2.8 0l-.8.8c-.8.8-.8 2.1 0 2.8l.8.8c.8.8 2.1.8 2.8 0l.8-.8c.8-.8.8-2.1 0-2.8l-.8-.8z"></path>
    <path d="M26 21.1c-.1 0 0 0 0 0-.7.2-1.3.5-1.9.9.4.5.7 1.1.8 1.7v.1c0 .1 0 .1.1.2 0 .1.1.1.1.2l-1.4.3c-.3 1.4-1.4 2.4-2.8 2.4-1.4 0-2.5-1-2.8-2.4l-1.4-.3c0-.1.1-.2.1-.3 0-.1.1-.2.1-.2v-.1c.1-.6.3-1.2.8-1.7-.5-.4-1.2-.7-1.9-.9-.1 0-.1 0-.2-.1h-1.6c-.1 0-.1 0-.2.1-.7.2-1.3.5-1.9.9.4.5.7 1.1.8 1.7v.1c0 .1 0 .1.1.2 0 .1.1.1.1.2l-1.4.3c-.3 1.4-1.4 2.4-2.8 2.4s-2.5-1-2.8-2.4l-1.4-.3c0-.1.1-.2.1-.3 0-.1.1-.2.1-.2v-.1c.1-.6.3-1.2.8-1.7-.6-.4-1.2-.7-1.9-.9-.1 0-.1 0-.2-.1H6v-3.8c0-2.2 1.8-4 4-4h12c2.2 0 4 1.8 4 4v3.8h-.2c-.1 0-.1 0-.2-.1z"></path>
  </svg>
);


export default function HeroSection() {
  return (
    <AnimatedSection id="hero" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-2 text-center lg:text-left">
              <div className="mb-4 inline-block animate-float">
                <AndroidLogo />
              </div>
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary">
                Sujal Kumar
              </h1>
              <h2 className="text-2xl font-medium tracking-tight text-foreground/80 sm:text-3xl">
                Android Developer
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
                Crafting innovative and user-friendly mobile experiences. I specialize in building high-quality Android applications from the ground up.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center lg:justify-start">
              <Button asChild size="lg">
                <Link href="#contact">
                  Get in Touch
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#projects">
                  View My Work
                  <MoveRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://placehold.co/550x550.png"
              alt="Profile Picture"
              width={550}
              height={550}
              className="aspect-square overflow-hidden rounded-xl object-cover shadow-2xl shadow-primary/20"
              priority
              data-ai-hint="profile picture"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
