import { MapPin, Users, Calendar, Search, Filter, Heart, MessageCircle, Bell } from "lucide-react"

export function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Our forever FREE app</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Everything in one place
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Cohound offers personalized features unlike any other app</p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="grid gap-6">
            <div className="flex gap-4 items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Find Dog-Friendly Spaces</h3>
                <p className="text-muted-foreground">
                  Discover new places to go with your dog. From parks, restaurants, workplaces, housing, and shops. Through integrated maps, tailored filtering & comprehensive listings.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Users className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Engagement Forums</h3>
                <p className="text-muted-foreground">
                  Build your village of pet owners. Connecting through forums to share similar hobbies, experiences, and advice.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Calendar className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Events & Meetups</h3>
                <p className="text-muted-foreground">
                  Discover and join local dog events, breed-specific gatherings, volunteering and training sessions.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="flex gap-4 items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Search className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Find Pet Services</h3>
                <p className="text-muted-foreground">
                  Search & book trusted groomers, vets, walkers and sitters that match your dog's needs.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Heart className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Dog Matchmaking</h3>
                <p className="text-muted-foreground">
                  Match your dog with others nearby for walks, playdates, or meetups with tailored compatibility.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Cohound Chatbot</h3>
                <p className="text-muted-foreground">
                 Get instant answers to your dog-related queries with our AI-powered chatbot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
