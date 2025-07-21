import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import AnimatedSection from "@/components/animated-section";

const AndroidLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    className="h-16 w-16 text-primary drop-shadow-[0_2px_4px_rgba(var(--primary-rgb),0.4)]"
    aria-label="Android Logo"
  >
    <path d="M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64v32h128V160zM128 160c0-35.3 28.7-64 64-64s64 28.7 64 64v32H128V160zM96 224h32v128H96c-17.7 0-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm320 0h32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-32V224zM160 224h192v160c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V224zM144 480h32l16-32H128l16 32zm192 0h32l16-32H304l16 32zM281.3 16.3c-7.9-10.4-22.5-13.4-34.8-7.3L229 18.2c-12.3 6.1-18.3 19.9-14.2 32.4L228.3 96h55.4l13.5-45.7c4.1-12.4-1.9-26.2-14.2-32.4l-1.7-.8z" />
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
