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
    <path d="M29.5,17.9c0-5.8-3.4-10.8-8.2-13c-0.2-0.1-0.4-0.1-0.6-0.1H11.3c-0.2,0-0.4,0-0.6,0.1c-4.8,2.2-8.2,7.2-8.2,13c0,0.4,0,0.9,0.1,1.3l-0.1-0.2v3.6c0,2.4,1.9,4.3,4.3,4.3h2.8v3.5c0,0.8,0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5v-3.5h5.8v3.5c0,0.8,0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5v-3.5h2.8c2.4,0,4.3-1.9,4.3-4.3v-3.6C29.5,18.7,29.5,18.3,29.5,17.9z M10.4,14.6c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S11.2,14.6,10.4,14.6z M21.6,14.6c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S22.4,14.6,21.6,14.6z"/>
    <path d="M10.1,4.4L10.1,4.4c-0.2-0.6-0.8-1-1.4-0.8l-2.3,0.7c-0.6,0.2-1,0.8-0.8,1.4c0.2,0.6,0.8,1,1.4,0.8l2.3-0.7C10,6.2,10.3,5.1,10.1,4.4z"/>
    <path d="M21.9,4.4L21.9,4.4c0.2-0.6-0.2-1.2-0.8-1.4l-2.3-0.7c-0.6-0.2-1.2,0.2-1.4,0.8c-0.2,0.6,0.2,1.2,0.8,1.4l2.3,0.7C21.2,5.4,21.8,5.1,21.9,4.4z"/>
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
