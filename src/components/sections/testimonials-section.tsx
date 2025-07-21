import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AnimatedSection from "@/components/animated-section";

const testimonials = [
  {
    name: "Jane Doe",
    title: "Lead Developer, Vrid",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "woman portrait",
    fallback: "JD",
    text: "Working with them has been an absolute pleasure. Their expertise in Android development is evident in the quality of their work. They are a proactive and detail-oriented developer who consistently delivers excellent results.",
  },
  {
    name: "John Smith",
    title: "Project Manager, Vrid",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "man portrait",
    fallback: "JS",
    text: "A highly skilled and dedicated team member. Their ability to tackle complex problems and collaborate effectively with the team was instrumental in our project's success. I highly recommend them.",
  },
    {
    name: "Emily White",
    title: "UI/UX Designer, Vrid",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "person face",
    fallback: "EW",
    text: "Their attention to UI/UX details is remarkable. They transformed our designs into a beautiful, functional, and intuitive Android app. A great collaborator and a valuable asset to any team.",
  },
];

export default function TestimonialsSection() {
  return (
    <AnimatedSection id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">What Others Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here's what my supervisors and colleagues have to say about my work.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-4">
                    <Card className="h-full shadow-lg border-border/50 transition-all duration-300 hover:shadow-primary/20">
                      <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                        <p className="flex-grow text-lg italic text-muted-foreground">"{testimonial.text}"</p>
                        <div className="mt-6 flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                            <AvatarFallback>{testimonial.fallback}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </AnimatedSection>
  );
}
