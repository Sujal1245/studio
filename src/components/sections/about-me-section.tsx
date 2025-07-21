import AnimatedSection from "@/components/animated-section";

export default function AboutMeSection() {
  return (
    <AnimatedSection id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              As an Android Developer Intern at Vrid, I've honed my skills in Kotlin, Java, and the Android SDK, contributing to a feature-rich finance app. My work involves improving core functionalities, enhancing UI with Jetpack Compose, and ensuring robust performance through effective crash handling and backend integration with Firestore. I have a strong foundation in MVVM and Clean Architecture, and I am proficient with tools like Git, Hilt, and Firebase.
            </p>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I am passionate about creating impactful mobile applications, demonstrated by my personal projects like the "Demsi" Bodo keyboard app, which has over 1,000 downloads. I am always eager to learn and apply new technologies to build innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
