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
    <path d="M480 208c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zM32 208c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zM256 112c-48.6 0-88 39.4-88 88v112h176V200c0-48.6-39.4-88-88-88zm120 288H136c-22.09 0-40-17.91-40-40V248h48v112h176V248h48v112c0 22.09-17.91 40-40 40zM200 80c0-22.09-17.91-40-40-40s-40 17.91-40 40c17.91 0 40 17.91 40 40s-22.09 40-40 40c0 22.09 17.91 40 40 40s40-17.91 40-40c-17.91 0-40-17.91-40-40s22.09-40 40-40zm112 0c0-22.09-17.91-40-40-40s-40 17.91-40 40c17.91 0 40 17.91 40 40s-22.09 40-40 40c0 22.09 17.91 40 40 40s40-17.91 40-40c-17.91 0-40-17.91-40-40s22.09-40 40-40z" />
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