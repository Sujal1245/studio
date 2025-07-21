import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import AnimatedSection from "@/components/animated-section";

const AndroidLogo = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 160"
      fill="currentColor"
      className="h-24 w-24 text-primary drop-shadow-[0_2px_4px_rgba(var(--primary-rgb),0.4)]"
      aria-label="Android and Java Logo"
    >
      <g transform="translate(0, -5)">
        {/* Java Cup */}
        <path
          d="M66.4,124.8c-12.8,4.1-28.7,6.4-46.7,6.4c-12.1,0-18.7-1.4-18.7-3.4c0-2.3,10.6-5,29.9-6.4c29.4-2.1,51.8,0.3,51.8,4.1 C82.7,128.2,76.1,126.9,66.4,124.8z"
          fill="#007396"
        />
        <path
          d="M149.2,112.5c-19.4,7.8-49.4,12.3-85.1,12.3c-28.2,0-43.2-2.3-43.2-5.7s22.4-8.8,55-11.4 c41.3-3.2,74.5,0.2,74.5,7.1C150.4,118.4,150.1,117.8,149.2,112.5z"
          fill="#007396"
        />
        <path
          d="M159.2,90.4c-19.3,6.2-46.9,9.8-79.2,9.8c-30.7,0-48.4-2-48.4-5.3c0-3.7,21.9-8.4,54.1-9.8 c31.7-1.4,59,1.1,59,6.7C144.7,94.2,148.4,93.2,159.2,90.4z"
          fill="#007396"
        />
        <path
          d="M156.4,70.9c-15.3,4-35.9,6.4-60.4,6.4c-26.1,0-42.5-1.7-42.5-4.3s21.1-7.1,49.2-7.8 c23.2-0.6,41.9,0.9,41.9,4.8C144.6,71.5,148.1,71.4,156.4,70.9z"
          fill="#007396"
        />

        {/* Android */}
        <g transform="translate(45, 0)">
          <path d="M58.3,13.5h16.2c3.2,0,5.8,2.6,5.8,5.8v34.9c0,3.2-2.6,5.8-5.8,5.8H58.3c-3.2,0-5.8-2.6-5.8-5.8V19.3 C52.5,16.1,55.1,13.5,58.3,13.5z" fill="#a4c639"/>
          <path d="M46.7,35.8c-2.8,2.5-4.1,6.2-3.3,9.8l5.8,25.9c0.8,3.6,3.8,6.3,7.4,6.3h1c3.6,0,6.7-2.7,7.4-6.3l5.8-25.9 c0.8-3.6-0.5-7.3-3.3-9.8c-1.2-1.1-2.6-1.9-4.2-2.4l-5.6-1.9L50.9,33.4C49.3,33.9,47.9,34.7,46.7,35.8z" fill="#a4c639" />
          <path d="M85.8,35.8c2.8,2.5,4.1,6.2,3.3,9.8l-5.8,25.9c-0.8,3.6-3.8,6.3-7.4,6.3h-1c-3.6,0-6.7-2.7-7.4-6.3L61.7,45.6 c-0.8-3.6,0.5-7.3,3.3-9.8c1.2-1.1,2.6-1.9,4.2-2.4l5.6-1.9l5.6,1.9C83.2,33.9,84.6,34.7,85.8,35.8z" fill="#a4c639" transform="rotate(35, 80, 50)" />
          <path d="M57.6,27c-0.8-0.8-0.8-2,0-2.8l2.8-2.8c0.8-0.8,2-0.8,2.8,0l2.8,2.8c0.8,0.8,0.8,2,0,2.8l-2.8,2.8c-0.8,0.8-2,0.8-2.8,0 L57.6,27z" fill="#FFF"/>
          <path d="M70.1,27c-0.8-0.8-0.8-2,0-2.8l2.8-2.8c0.8-0.8,2-0.8,2.8,0l2.8,2.8c0.8,0.8,0.8,2,0,2.8L75.7,30c-0.8,0.8-2,0.8-2.8,0 L70.1,27z" fill="#FFF"/>
          <path d="M60.4,13.5c-1.1,0-2-0.9-2-2L58.2,6c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2l0.2,5.5C62.4,12.6,61.5,13.5,60.4,13.5z" fill="#a4c639" transform="rotate(-35, 61, 8)" />
          <path d="M72.9,13.5c-1.1,0-2-0.9-2-2L70.7,6c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2l0.2,5.5C74.9,12.6,74,13.5,72.9,13.5z" fill="#a4c639" transform="rotate(35, 74, 8)" />
        </g>
      </g>
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
