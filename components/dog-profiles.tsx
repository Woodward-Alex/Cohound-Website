import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, MapPin } from "lucide-react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { AlertTriangle } from "lucide-react"

export function DogProfiles() {
  return (
    <section id="profiles" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Dog Profiles & Connections</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Create detailed profiles for your dogs and connect with others based on breed, temperament, age and
              compatibility.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl py-8">
          <Tabs defaultValue="profiles" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profiles">Sample Profiles</TabsTrigger>
              <TabsTrigger value="breeds">Breed Matching</TabsTrigger>
              <TabsTrigger value="temperament">Temperament</TabsTrigger>
              <TabsTrigger value="dogswap">Dog Swap</TabsTrigger>
            </TabsList>

            <TabsContent value="profiles" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                <Card>
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center gap-4">
                      <div className="relative h-40 w-40 overflow-hidden rounded-full">
                        <Image
                          src="/JordanBlake.png?height=160&width=160"
                          alt="Dog profile"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-bold">Max</h3>
                        <p className="text-sm text-muted-foreground">Golden Retriever • 3 years</p>
                      </div>
                      <div className="flex flex-wrap justify-center gap-2">
                        <Badge variant="outline" className="bg-green-50">
                          Friendly
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50">
                          Playful
                        </Badge>
                        <Badge variant="outline" className="bg-purple-50">
                          Outgoing
                        </Badge>
                      </div>
                      <Button size="sm" className="w-full">
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center gap-4">
                      <div className="relative h-40 w-40 overflow-hidden rounded-full">
                        <Image
                          src="/MikeSmith.png?height=160&width=160"
                          alt="Dog profile"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-bold">Bella</h3>
                        <p className="text-sm text-muted-foreground">Beagle • 11 years</p>
                      </div>
                      <div className="flex flex-wrap justify-center gap-2">
                        <Badge variant="outline" className="bg-green-50">
                          Calm
                        </Badge>
                        <Badge variant="outline" className="bg-orange-50">
                          Shy
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50">
                          Anxious
                        </Badge>
                      </div>
                      <Button size="sm" className="w-full">
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center gap-4">
                      <div className="relative h-40 w-40 overflow-hidden rounded-full">
                        <Image
                          src="/SarahJohnson.png?height=160&width=160"
                          alt="Dog profile"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-bold">Rocky</h3>
                        <p className="text-sm text-muted-foreground">Border Collie • 4 years</p>
                      </div>
                      <div className="flex flex-wrap justify-center gap-2">
                        <Badge variant="outline" className="bg-yellow-50">
                          Reactive
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50">
                          Intelligent
                        </Badge>
                        <Badge variant="outline" className="bg-red-50">
                          High Energy
                        </Badge>
                      </div>
                      <Button size="sm" className="w-full">
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                
              </div>
            </TabsContent>

            <TabsContent value="breeds" className="mt-6">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-4 text-xl font-bold">Find Dogs by Breed or Size</h3>
                <p className="mb-6 text-muted-foreground">
                  Connect with other owners of the same breed & size to share experiences, tips, and arrange breed-specific
                  meetups.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  <Button variant="outline" className="justify-start">
                    <Image
                      src="/golden.png?height=30&width=30"
                      alt="Golden Retriever"
                      width={50}
                      height={50}
                      className="mr-2 rounded-full"
                    />
                    Golden Retrievers
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Image
                      src="/german.png?height=30&width=30"
                      alt="German Shepherd"
                      width={50}
                      height={50}
                      className="mr-2 rounded-full"
                    />
                    German Shepherds
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Image
                      src="/labrador.png?height=30&width=30"
                      alt="Labrador"
                      width={50}
                      height={50}
                      className="mr-2 rounded-full"
                    />
                    Labradors
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Image
                      src="/Frenchie.png?height=30&width=30"
                      alt="French Bulldog"
                      width={50}
                      height={50}
                      className="mr-2 rounded-full"
                    />
                    French Bulldogs
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Image
                      src="/collie.png?height=30&width=30"
                      alt="Border Collie"
                      width={50}
                      height={50}
                      className="mr-2 rounded-full"
                    />
                    Border Collies
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Image
                      src="/Uknownbreed.png?height=30&width=30"
                      alt="Beagle"
                      width={50}
                      height={50}
                      className="mr-2 rounded-full"
                    />
                    Mixed Breed
                  </Button>
                </div>
                <Button className="mt-6 w-full">Browse All Breeds</Button>
              </div>
            </TabsContent>

            <TabsContent value="temperament" className="mt-6">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-4 text-xl font-bold">Match by Temperament</h3>
                <p className="mb-6 text-muted-foreground">
                  Find compatible dogs based on temperament and personality traits for better playdates and
                  interactions.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  <Card className="p-4">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-2 rounded-full bg-green-100 p-3">
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
                          className="h-6 w-6 text-green-600"
                        >
                          <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 4 0V4a1 1 0 0 0-1-1Z" />
                          <path d="M17 3h-1a1 1 0 0 0-1 1v5a2 2 0 0 0 4 0V5a2 2 0 0 0-2-2Z" />
                          <path d="M10 15v4" />
                          <path d="M14 15v4" />
                          <path d="M14 8a2 2 0 0 0-4 0v7" />
                          <path d="M4 15h16" />
                        </svg>
                      </div>
                      <h4 className="font-semibold">Calm & Gentle</h4>
                      <p className="text-sm text-muted-foreground">
                        Perfect for senior dogs or those who prefer quiet interactions
                      </p>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-2 rounded-full bg-yellow-100 p-3">
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
                          className="h-6 w-6 text-yellow-600"
                        >
                          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                          <line x1="12" y1="9" x2="12" y2="13" />
                          <line x1="12" y1="17" x2="12.01" y2="17" />
                        </svg>
                      </div>
                      <h4 className="font-semibold">Reactive</h4>
                      <p className="text-sm text-muted-foreground">
                        Find suitable environments and compatible companions
                      </p>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-2 rounded-full bg-blue-100 p-3">
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
                          className="h-6 w-6 text-blue-600"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="m8 14 2 2 6-6" />
                        </svg>
                      </div>
                      <h4 className="font-semibold">Playful & Energetic</h4>
                      <p className="text-sm text-muted-foreground">
                        Connect with other high-energy dogs for active playdates
                      </p>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-2 rounded-full bg-red-100 p-3">
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
                          className="h-6 w-6 text-red-600"
                        >
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                      </div>
                      <h4 className="font-semibold">Anxious</h4>
                      <p className="text-sm text-muted-foreground">
                        Find understanding companions and low-stress environments
                      </p>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-2 rounded-full bg-orange-100 p-3">
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
                          className="h-6 w-6 text-orange-600"
                        >
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold">Shy</h4>
                      <p className="text-sm text-muted-foreground">
                        Connect with other shy dogs for gentle socialization
                      </p>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-2 rounded-full bg-purple-100 p-3">
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
                          className="h-6 w-6 text-purple-600"
                        >
                          <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                          <rect width="18" height="18" x="3" y="3" rx="2" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <h4 className="font-semibold">Outgoing</h4>
                      <p className="text-sm text-muted-foreground">Find social environments and friendly companions</p>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="dogswap" className="mt-6">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-4 text-xl font-bold">Dog Swap & Sitting</h3>
                <p className="mb-6 text-muted-foreground">
                  Connect with other dog owners to arrange dog sitting when you're away or out. Build a trusted network of dog
                  lovers who can help care for your furry friend, and return the favor when they need it.
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 text-lg font-semibold">Available Dog Sitters</h4>
                    <div className="grid gap-4">
                      <Card className="p-4">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src="/JordanBlake.png?height=48&width=48" alt="Avatar" />
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h5 className="font-semibold">Jordan Blake</h5>
                              <Badge variant="outline" className="bg-green-50">
                                Available
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Owner of Max (Golden Retriever) • 5 swaps completed
                            </p>
                            <div className="mt-2 flex items-center gap-4">
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Calendar className="mr-1 h-3 w-3" />
                                May 15-20
                              </div>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <MapPin className="mr-1 h-3 w-3" />
                                0.5 miles away
                              </div>
                            </div>
                            <Button size="sm" className="mt-2">
                              Contact
                            </Button>
                          </div>
                        </div>
                      </Card>

                      <Card className="p-4">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src="/MikeSmith.png?height=48&width=48" alt="Avatar" />
                            <AvatarFallback>MS</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h5 className="font-semibold">Mike Smith</h5>
                              <Badge variant="outline" className="bg-green-50">
                                Available
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">Owner of Bella (Beagle) • 3 swaps completed</p>
                            <div className="mt-2 flex items-center gap-4">
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Calendar className="mr-1 h-3 w-3" />
                                June 1-10
                              </div>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <MapPin className="mr-1 h-3 w-3" />
                                1.2 miles away
                              </div>
                            </div>
                            <Button size="sm" className="mt-2">
                              Contact
                            </Button>
                          </div>
                        </div>
                      </Card>

                      <Card className="p-4">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src="/SarahJohnson.png?height=48&width=48" alt="Avatar" />
                            <AvatarFallback>SJ</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h5 className="font-semibold">Sarah Johnson</h5>
                              <Badge variant="outline" className="bg-green-50">
                                Available
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Owner of Rocky (Border Collie) • 7 swaps completed
                            </p>
                            <div className="mt-2 flex items-center gap-4">
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Calendar className="mr-1 h-3 w-3" />
                                May 25-30
                              </div>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <MapPin className="mr-1 h-3 w-3" />
                                1.8 miles away
                              </div>
                            </div>
                            <Button size="sm" className="mt-2">
                              Contact
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 text-lg font-semibold">How Dog Swap Works</h4>
                    <Card className="p-6">
                      <div className="grid gap-6">
                        <div className="flex items-start gap-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <span className="font-bold">1</span>
                          </div>
                          <div>
                            <h5 className="font-semibold">Create Your Profile</h5>
                            <p className="text-sm text-muted-foreground">
                              Add your dog's details, temperament, and care requirements to your profile.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <span className="font-bold">2</span>
                          </div>
                          <div>
                            <h5 className="font-semibold">Find Trusted Sitters</h5>
                            <p className="text-sm text-muted-foreground">
                              Browse profiles of other dog owners in your area who are available for dog swaps.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <span className="font-bold">3</span>
                          </div>
                          <div>
                            <h5 className="font-semibold">Arrange a Meet & Greet</h5>
                            <p className="text-sm text-muted-foreground">
                              Meet potential sitters and their dogs to ensure compatibility before arranging a swap.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <span className="font-bold">4</span>
                          </div>
                          <div>
                            <h5 className="font-semibold">Swap with Confidence</h5>
                            <p className="text-sm text-muted-foreground">
                              Enjoy your time away knowing your dog is in good hands with a fellow dog lover.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <div className="mt-6">
                      <Card className="bg-primary/10 p-4">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-primary/20 p-3">
                            <Clock className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h5 className="font-semibold">Need a Sitter Soon?</h5>
                            <p className="text-sm text-muted-foreground">
                              Post your dates and requirements to find professional available sitters quickly.
                            </p>
                            <Button className="mt-2">Post Request</Button>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
             
                </div>

                <div className="mt-6 flex justify-center">
                  <Button size="lg">Find Dog Sitters Near You</Button>
                </div>
                     <div className="mt-8 rounded-lg border bg-amber-50 p-4">
          {" "}
          {/* Removed dark:bg-amber-950 */}
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 flex-shrink-0 text-amber-600" /> {/* Removed dark:text-amber-400 */}
            <div>
              <h4 className="font-semibold text-amber-800">Safety Disclaimer</h4> {/* Removed dark:text-amber-200 */}
              <p className="text-sm text-amber-700">
                {" "}
                {/* Removed dark:text-amber-300 */}
                Cohound is designed to connect dog owners and provide information about dog-friendly places, but users
                should exercise caution when meeting new people or visiting new locations. See more on our safety disclaimer page.
                </p>
            </div>
          </div>
        </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
