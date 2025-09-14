import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Award, Clock, Heart, Users, Star } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-primary text-primary-foreground">
        <div className="absolute inset-0 z-0">
          <img
            src="/young-entrepreneur-with-lawn-mower-smiling-confide.png"
            alt="Teen running lawn care business"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight">
            Yo, We’re <span className="text-secondary">All American</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Started by a 14-year-old just trying to make some cash mowing lawns… and it turned into something way bigger.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              How It All Started
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Honestly? It started because I wanted some extra cash for sneakers and games. But then neighbors kept asking me to mow their lawns… and suddenly I had a legit business.
              </p>
              <p>
                Every weekend, I’m out there with my gear, blasting music, mowing lawns, and making sure they look 🔥. It’s not just a side hustle anymore — it’s proof that teens can run real businesses.
              </p>
              <p>
                All American Lawn Maintenance is about more than grass — it’s about grinding, leveling up, and showing that age doesn’t stop you from building something legit.
              </p>
            </div>

            {/* Buttons work now */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/contact">
                <Button size="lg" className="font-heading font-bold">
                  GET A QUOTE
                </Button>
              </Link>
              <Link href="/gallery">
                <Button size="lg" variant="outline" className="font-heading font-bold bg-transparent">
                  SEE OUR WORK
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="/young-entrepreneur-working-hard-lawn-care-busines.png"
              alt="Teen mowing lawn"
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-heading font-bold">14</div>
              <div className="text-sm font-medium">YEARS OLD</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">WHAT WE’RE ABOUT</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No boring mission statement — just what actually matters to us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 shadow-lg bg-white rounded-xl">
            <Heart className="w-8 h-8 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-bold">PASSION</h3>
            <p>We actually enjoy this — and it shows in every lawn we do.</p>
          </div>
          <div className="text-center p-6 shadow-lg bg-white rounded-xl">
            <Award className="w-8 h-8 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-bold">QUALITY</h3>
            <p>No sloppy cuts. No half-done jobs. Just clean, sharp lawns.</p>
          </div>
          <div className="text-center p-6 shadow-lg bg-white rounded-xl">
            <Clock className="w-8 h-8 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-bold">SHOWING UP</h3>
            <p>If we say we’ll be there, we’ll actually be there.</p>
          </div>
          <div className="text-center p-6 shadow-lg bg-white rounded-xl">
            <Users className="w-8 h-8 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-bold">CHILL VIBES</h3>
            <p>We’re your neighbors, not some big company. Easy to work with.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Wanna Join the Squad?
          </h2>
          <p className="text-xl mb-8">
            Hit us up for a free estimate or just call — let’s make your lawn the best on the block.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4 font-heading font-bold">
                GET FREE ESTIMATE
              </Button>
            </Link>
            <a href="tel:2017712580">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 font-heading font-bold border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                CALL 201-771-2580
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}