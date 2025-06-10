import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function VolunteeringSection() {
  return (
    <section id="volunteering" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Giving Back to Our Furry Friends</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Join our community in supporting local shelters, rescue organizations, and dogs in need.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl py-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold">Volunteer Opportunities</h3>
              <div className="grid gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      
                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src="/Volunteer.png?height=64&width=64"
                          alt="Dog shelter"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">Local Shelter Support</h4>
                        <p className="text-sm text-muted-foreground">
                          Help walk, socialize, and care for shelter dogs waiting for their forever homes.
                        </p>
                        <Button variant="link" className="mt-1 h-auto p-0 text-sm">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src="/Foster.png?height=64&width=64"
                          alt="Foster dog"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">Fostering Program</h4>
                        <p className="text-sm text-muted-foreground">
                          Provide a temporary home for dogs in need while they wait for adoption.
                        </p>
                        <Button variant="link" className="mt-1 h-auto p-0 text-sm">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src="/Adopt.png?height=64&width=64"
                          alt="Adoption event"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">Adoption Events</h4>
                        <p className="text-sm text-muted-foreground">
                          Help organize and staff adoption events to find homes for rescue dogs.
                        </p>
                        <Button variant="link" className="mt-1 h-auto p-0 text-sm">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button className="mt-2">Find Volunteer Opportunities</Button>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-bold">Training Volunteer</h3>
              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src="/Training.png?height=300&width=500"
                    alt="Dog training volunteer"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Share your dog training expertise with shelter dogs and new dog owners. Help improve a dog's chances
                    of finding a forever home by teaching them basic commands and good behavior.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <Card className="p-3">
                      <div className="text-center">
                        <h4 className="font-semibold">Shelter Training</h4>
                        <p className="text-xs text-muted-foreground">Help shelter dogs learn basic commands</p>
                      </div>
                    </Card>
                    <Card className="p-3">
                      <div className="text-center">
                        <h4 className="font-semibold">New Owner Coaching</h4>
                        <p className="text-xs text-muted-foreground">Guide first-time owners through training</p>
                      </div>
                    </Card>
                  </div>
                  <Button className="mt-4 w-full">Become a Training Volunteer</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12 rounded-lg border bg-card p-6">
            <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
              <div className="relative mb-4 h-24 w-24 flex-shrink-0 overflow-hidden rounded-full md:mb-0 md:mr-6">
                <Image
                  src="/Favicon-Color.png?height=20&width=10"
                  alt="Charity spotlight"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <Badge className="mb-2">Charity Spotlight</Badge>
                <h3 className="text-xl font-bold">Paws Rescue Center</h3>
                <p className="mt-2 text-muted-foreground">
                  This month, we're highlighting Paws Rescue Center, a local organization dedicated to rescuing,
                  rehabilitating, and rehoming abandoned and abused dogs. They've saved over 500 dogs this year alone!
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
                  <Button>Donate</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
