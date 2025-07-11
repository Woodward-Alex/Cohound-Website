import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Logo } from "@/components/logo"

export function DownloadApp() {
  return (
    <section id="download" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex justify-end w-full justify-center"> 
            <div className="relative h-[600px] w-[300px] sm:h-[600px] sm:w-[300px] lg:w-[300px] object-cover">
              <Image
                src="/DownloadApp.png?height=1200&width=400"
                alt="CoHound mobile app screenshot"
                fill
                loading="eager"
                decoding="sync"
                priority
              />
            </div>            
          </div>
          
          <div className="flex flex-col">
            <div className="space-y-8"> {/* Increased from space-y-6 to space-y-8 */}
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">Download the Cohound App</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl text-center">
                Get the full experience on your mobile device. Find dog-friendly places, connect with other owners, and
                join events on the go. 
              </p>
            </div>

            {/* Button Container with padding */}
            <div className="py-8"> {/* Added py-8 for vertical padding */}
              <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link href="./signup">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                      <path d="M10 2c1 .5 2 2 2 5" />
                    </svg>
                    App Store
                  </Link>
                </Button>

                <Button asChild size="lg" variant="outline" className="gap-2">
                  <Link href="./signup">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <polygon points="3 2 21 12 3 22" />
                    </svg>
                    Google Play
                  </Link>
                </Button>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-8 grid grid-cols-3 gap-4 md:grid-cols-3"> {/* Changed mt-4 to mt-8 */}
              <div className="flex flex-col items-center text-center">
                <div className="text-3xl font-bold">1000+</div>
                <p className="text-sm text-muted-foreground">Dog-Friendly Places</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-3xl font-bold">200+</div>
                <p className="text-sm text-muted-foreground">Monthly Events</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-3xl font-bold">4.8</div>
                <p className="text-sm text-muted-foreground">App Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}