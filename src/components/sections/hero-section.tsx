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
    aria-label="Waving Android Logo"
  >
    {/* Head */}
    <path d="M24,11.5c0-4.4-3.6-8-8-8s-8,3.6-8,8v7h16V11.5z" />
    {/* Eyes */}
    <circle cx="12" cy="12.5" r="1.2" fill="white" />
    <circle cx="20" cy="12.5" r="1.2" fill="white" />
    {/* Antennae */}
    <path d="M10,2.5c-0.2-0.6-0.8-1-1.4-0.8l-2.3,0.7c-0.6,0.2-1,0.8-0.8,1.4s0.8,1,1.4,0.8l2.3-0.7C9.8,4.3,10.2,3.1,10,2.5z" />
    <path d="M22,2.5c0.2-0.6-0.2-1.2-0.8-1.4l-2.3-0.7c-0.6-0.2-1.2,0.2-1.4,0.8s0.2,1.2,0.8,1.4l2.3,0.7C21.2,3.3,21.8,3.1,22,2.5z" />
    {/* Body */}
    <path d="M7,19.5v5c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-5H7z" />
    {/* Legs */}
    <rect x="10" y="26.5" width="4" height="4" rx="1" />
    <rect x="18" y="26.5" width="4" height="4" rx="1" />
    {/* Waving Arm */}
    <path d="M26.7,19.2c0.7-0.6,0.8-1.6,0.2-2.3l-2.8-3.3c-0.6-0.7-1.6-0.8-2.3-0.2s-0.8,1.6-0.2,2.3l2.8,3.3C25,19.6,26,19.8,26.7,19.2z" />
    {/* Other Arm */}
    <rect x="3" y="20.5" width="3" height="4" rx="1.5" />
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
