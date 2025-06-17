import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin } from "lucide-react"
import Image from "next/image"

export function MapSection() {
  return (
    <section id="map" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Find Dog-Friendly Places Near You</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Discover parks, cafes, shopping, accommodation and more that welcome your furry friend.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-8">
          <div className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden">
            <div className="p-4 border-b">
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search for places..." className="w-full pl-8" />
                </div>
                <div className="flex flex-wrap gap-2">
                   <Button variant="outline"> My Location
                    <MapPin className="mr-2 h-4 w-4" />
                  </Button>
                  <Button aria-pressed="true" variant="outline" className="bg-primary/20">
                    Reactive-Friendly
                  </Button>
                  <Button aria-pressed="true" variant="outline" className="bg-primary/20">
                   Inside Seating
                   </Button>
                  <Button aria-pressed="true" variant="outline" className="bg-primary/20">
                    Off-Leash Zones
                  </Button>
                  <Button>More Filters</Button>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] w-full max-w-screen-xl mx-auto w-full">
              <Image
                src="/Maps.png?height=800&width=1200"
                alt="Map showing dog-friendly locations"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/5"></div>
            </div>

            <div className="grid gap-3 p-4 sm:grid-cols-2 md:grid-cols-3">
              <div className="rounded-lg border p-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">Central Park Dog Run</h3>
                    <p className="text-sm text-muted-foreground">0.5 miles away</p>
                     <p className="text-sm text-muted-foreground">Dog friendly run-group every Sunday</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium">4.8</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-1 h-4 w-4 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">Hoboken Mall</h3>
                    <p className="text-sm text-muted-foreground">1.2 miles away</p>
                    <p className="text-sm text-muted-foreground">Mall provides water bowls for dogs!</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium">4.5</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-1 h-4 w-4 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">Barking Bistro</h3>
                    <p className="text-sm text-muted-foreground">1.8 miles away</p>
                    <p className="text-sm text-muted-foreground">Great inside seating for my large dog</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium">4.7</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-1 h-4 w-4 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 grid gap-2 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Dog-Friendly Accomodation & Workplaces</h3>
                <Button variant="link">See All</Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div className="rounded-lg border p-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">Parkview Apartments</h3>
                      <p className="text-sm text-muted-foreground">Pet-friendly rentals, no breed restrictions</p>
                      <div className="mt-1 flex items-center">
                        <span className="text-sm font-medium">4.6</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="ml-1 h-4 w-4 text-yellow-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">PetTech Solutions</h3>
                      <p className="text-sm text-muted-foreground">Dog-friendly office, on-site dog park</p>
                      <div className="mt-1 flex items-center">
                        <span className="text-sm font-medium">4.9</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="ml-1 h-4 w-4 text-yellow-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">Dogwood Homes</h3>
                      <p className="text-sm text-muted-foreground">Pet-friendly homes for sale, fenced yards</p>
                      <div className="mt-1 flex items-center">
                        <span className="text-sm font-medium">4.7</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="ml-1 h-4 w-4 text-yellow-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
