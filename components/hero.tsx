import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="flex flex-col items-start space-y-2 mb-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Tailored for your dog.</h1>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Built for you.</h1><br />
              <p className="max-w-[600px] text-xl font-medium text-primary md:text-2xl">
                Where your dog's happiness meets your convenience
              </p>
              <div className="mt-4 max-w-[600px] text-muted-foreground font-bold">
                <p className="text-sm md:text-base">
                  Cohound is more than just an app — it's a community-driven platform.
                </p>
                </div>
              <div className="mt-4 max-w-[600px] text-muted-foreground">
                <p className="text-sm md:text-base">
                  Our mission is to transform the way you and your dog experience the world together. 
                  Discover personalized maps and recommendations catered to your location and dog's temperament. From energetic breeds who need adventure to gentle souls seeking quiet spaces. 
                  Build meaningful connections with local pet owners through our app matchmaking and forums. Connect with others who share your struggles, passion and hobbies. 
                  Find the services, places, and people designed to help you & your dog thrive.
                 </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center max-w-screen-xl mx-auto w-full">
            <div className="relative h-[500px] w-[500px] sm:h-[500px] sm:w-[1000px] lg:h-[550px] lg:w-[950px] object-cover">
              <Image
                src="/LaughingPeople.png?height=800&width=900"
                alt="Happy dog and owner at a park"
                fill
                className="object-cover rounded-lg"
                loading="eager"
                decoding="sync"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
