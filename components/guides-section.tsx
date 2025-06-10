import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export function GuidesSection() {
  return (
    <section id="guides" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Guides & Resources</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Everything you need to be a confident and successful dog owner, from first-time tips to advanced training.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl py-8">
          <Tabs defaultValue="new-owners" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="new-owners">First-Time Owners</TabsTrigger>
              <TabsTrigger value="training">Training Guides</TabsTrigger>
              <TabsTrigger value="support">Owner Support</TabsTrigger>
            </TabsList>

            <TabsContent value="new-owners" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src="/First30.png?height=200&width=300"
                      alt="Puppy care guide"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Badge className="mb-2">Beginner</Badge>
                    <h3 className="text-xl font-bold">First 30 Days With Your Puppy</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      A comprehensive guide to help you navigate the crucial first month with your new puppy.
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full">Read Guide</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src="/Essentials.png?height=200&width=300"
                      alt="Essential supplies"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Badge className="mb-2">Essentials</Badge>
                    <h3 className="text-xl font-bold">Essential Supplies Checklist</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Everything you need to prepare your home for your new four-legged family member.
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full">Download Checklist</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image src="/Vet.png?height=200&width=300" alt="Vet visits" fill className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <Badge className="mb-2">Healthcare</Badge>
                    <h3 className="text-xl font-bold">First Vet Visits Guide</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      What to expect and how to prepare for your dog's first veterinary appointments.
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full">Read Guide</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="training" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src="/Basic.png?height=200&width=300"
                      alt="Basic commands"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Badge className="mb-2">Basics</Badge>
                    <h3 className="text-xl font-bold">Basic Commands Training</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Step-by-step guide to teaching your dog essential commands like sit, stay, and come.
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full">View Training Guide</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src="/leash.png?height=200&width=300"
                      alt="Leash training"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Badge className="mb-2">Walking</Badge>
                    <h3 className="text-xl font-bold">Leash Training Guide</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      How to teach your dog to walk politely on a leash without pulling or lunging.
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full">View Training Guide</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src="/Reactive.png?height=200&width=300"
                      alt="Reactive dog training"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Badge className="mb-2">Specialized</Badge>
                    <h3 className="text-xl font-bold">Reactive Dog Training</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Techniques and strategies to help manage and improve reactivity in dogs.
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full">View Training Guide</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="support" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src="/disability.png?height=50&width=50"
                      alt="Behavior problems"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Badge className="mb-2">Events</Badge>
                    <h3 className="text-xl font-bold">DisABILITY</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Events, meetups & sharing your experiences with dogs that thrive with disABILITY.
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full">Join Network</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src="/Running.png?height=200&width=300"
                      alt="Mental health"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Badge className="mb-2">Events</Badge>
                    <h3 className="text-xl font-bold">Sports & Agility Group</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      From trail runs to swimming - discover and share your techniques, events & tips with our community.
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full">Join Network</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src="/Community.png?height=200&width=300"
                      alt="Owner support"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Badge className="mb-2">Support</Badge>
                    <h3 className="text-xl font-bold">Owner Support Network</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Connect with experienced dog owners and trainers for advice and encouragement.
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full">Join Network</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8 flex justify-center">
            <Button size="lg">Browse All Resources</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
