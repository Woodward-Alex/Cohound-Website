import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CommunitySection() {
  return (
    <section id="community" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join Our Community</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Connect with other dog owners, find walking buddies, and build your support network.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold">Upcoming Events</h3>
            <div className="grid gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 flex flex-col items-center justify-center rounded-lg bg-primary/10 p-2 text-center">
                      <span className="text-xl font-bold">15</span>
                      <span className="text-xs">MAY</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Puppy Playdate at Central Park</h4>
                      <p className="text-sm text-muted-foreground">10:00 AM - 12:00 PM</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Badge variant="outline">Puppies</Badge>
                        <Badge variant="outline">Socialization</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 flex flex-col items-center justify-center rounded-lg bg-primary/10 p-2 text-center">
                      <span className="text-xl font-bold">22</span>
                      <span className="text-xs">MAY</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Reactive Dog Training Workshop</h4>
                      <p className="text-sm text-muted-foreground">2:00 PM - 4:00 PM</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Badge variant="outline">Training</Badge>
                        <Badge variant="outline">Reactive Dogs</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 flex flex-col items-center justify-center rounded-lg bg-primary/10 p-2 text-center">
                      <span className="text-xl font-bold">29</span>
                      <span className="text-xs">MAY</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Senior Dog Meetup</h4>
                      <p className="text-sm text-muted-foreground">11:00 AM - 1:00 PM</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Badge variant="outline">Senior Dogs</Badge>
                        <Badge variant="outline">Low Energy</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Button className="w-full">View All Events</Button>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold">Dog Owners Near You</h3>
            <div className="grid gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/JordanBlake.png?height=50&width=50" alt="Avatar" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">Jordan Blake</h4>
                        <span className="text-xs text-muted-foreground">0.5 miles away</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Owner of Max (Golden Retriever, 3 yrs)</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Badge variant="outline">Walking Buddy</Badge>
                        <Badge variant="outline">High Energy</Badge>                        
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/MikeSmith.png?height=50&width=50" alt="Avatar" />
                      <AvatarFallback>MS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">Mike Smith</h4>
                        <span className="text-xs text-muted-foreground">1.2 miles away</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Owner of Bella (Beagle, 11 yrs)</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Badge variant="outline">Senior Dog</Badge>
                        <Badge variant="outline">Dog Sitting</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/SarahJohnson.png?height=50&width=50" alt="Avatar" />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">Sarah Johnson</h4>
                        <span className="text-xs text-muted-foreground">1.8 miles away</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Owner of Rocky (Border Collie, 4 yrs)</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Badge variant="outline">Agility Training</Badge>
                        <Badge variant="outline">Running Member</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Button className="w-full">Find More Dog Owners</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
