import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import AnimatedSection from "@/components/animated-section";

const AndroidLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-16 w-16 text-primary drop-shadow-[0_2px_4px_rgba(0,255,0,0.4)]"
    aria-label="Android Logo"
  >
    <path d="M15.41,18.17L15,18.35C13.82,18.79 12.5,19 11,19C9.5,19 8.18,18.79 7,18.35L6.59,18.17C6.22,18.05 6,17.72 6,17.33V11.5H16v5.83C16,17.72 15.78,18.05 15.41,18.17M16.5,9H6.5C6.22,9 6,8.78 6,8.5V8C6,7.72 6.22,7.5 6.5,7.5h10C16.78,7.5 17,7.72 17,8V8.5C17,8.78 16.78,9 16.5,9M15.95,6.5H7.05C6.75,6.5 6.5,6.25 6.5,5.95L6.61,5.3C6.7,4.5 7.12,3.8 7.74,3.29L8.23,2.89C8.42,2.73 8.68,2.65 8.94,2.65H14.06c0.26,0,0.52,0.08,0.71,0.24l0.49,0.4C15.88,3.8 16.3,4.5 16.39,5.3l0.11,0.65C16.5,6.25 16.25,6.5 15.95,6.5M10.1,4.5C10.27,4.5 10.42,4.63 10.5,4.79L10.56,5H9.44l0.06-0.21C9.58,4.63 9.73,4.5 9.9,4.5h0.2M13.1,4.5h0.2c0.17,0,0.32,0.13,0.4,0.29L13.56,5h-1.12l0.06-0.21C12.58,4.63,12.73,4.5,12.9,4.5h0.2Z"></path>
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
              <Button asChild size="lg" variant="ghost">
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
