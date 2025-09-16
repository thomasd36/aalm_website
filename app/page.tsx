import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Sprout, CheckCircle, Users, Clock } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative h-screen flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/professional-lawn-mowing-equipment-on-pristine-gre.png"
            alt="Professional lawn care equipment"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <div className="mb-6">
            <Badge className="bg-secondary text-secondary-foreground text-sm px-4 py-2 font-medium">
              SERVING YOUR NEIGHBORHOOD
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight text-balance">
            ALL AMERICAN
            <br />
            <span className="text-secondary">LAWN MAINTENANCE</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-balance max-w-3xl mx-auto leading-relaxed">
            Transform your lawn with professional care and attention. Our expert service will help you achieve the
            beautiful yard you've always wanted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 font-heading font-bold">
              BOOK YOUR FREE ESTIMATE
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 font-heading font-bold border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              SEE OUR TESTIMONIALS
            </Button>
          </div>
        </div>
      </section>

      {/* Specialized Service Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary">Professional Lawn Care</Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-balance">
              See the difference professional care makes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Professional lawn care offers focused, efficient service tailored to your yard's needs, ensuring every
              visit maximizes the health and beauty of your lawn.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">REAL RESULTS</h3>
              <p className="text-muted-foreground leading-relaxed">
                Professional lawn care delivers visible results with trusted expertise. We plan for your yard's specific
                needs, promoting healthy growth and maintaining that perfect green appearance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">SAVED TIME</h3>
              <p className="text-muted-foreground leading-relaxed">
                No more spending your weekends on yard work. We handle all your lawn care needs with precision,
                eliminating guesswork and maximizing your free time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">RELIABILITY</h3>
              <p className="text-muted-foreground leading-relaxed">
                Consistent service you can count on. We track your lawn's progress, maintain regular schedules, and
                ensure your yard always looks its best throughout the seasons.
              </p>
            </div>
          </div>
        </div>
      </section>

<section className="py-20 px-6 bg-primary text-primary-foreground">
  <div className="max-w-6xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="flex justify-center">
        <img
          src="/tommy-standing-proud.png"
          alt="Tommy our mascot"
          className="max-h-[700px] w-auto object-contain"
        />
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-balance">
          HELPING HOMEOWNERS ACHIEVE BEAUTIFUL LAWNS
        </h2>
        <p className="text-lg leading-relaxed mb-8">
          "Thomas is detail oriented and reliable. Thomas helped me with seed in the beginning of the season and continues to answer any questions I may have with my lawn. His professionalism is top notch and I enjoy watching Thomas grow his business."
        </p>
        <div className="mb-8">
          <p className="font-heading font-bold text-lg">- Micheal S.</p>
        </div>
        <Button variant="secondary" size="lg" className="font-heading font-bold">
          SEE OUR TESTIMONIALS
        </Button>
      </div>
    </div>
  </div>
</section>


      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/custom-lawn-care-plan-with-before-and-after-transf.png"
                alt="Custom lawn care transformation"
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </div>
            <div>
              <div className="bg-card p-8 rounded-lg">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">CUSTOM LAWN CARE PLANS</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Every lawn is unique, and we create custom care plans that fit your specific needs and goals. Whether
                  you're looking to improve grass health, enhance curb appeal, or maintain year-round beauty, we develop
                  a plan that works for your property, schedule, and budget.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <h4 className="font-heading font-bold mb-2">PERSONALIZED FOR YOUR YARD</h4>
                    <p className="text-sm text-muted-foreground">
                      Your lawn, your goals, your plan. We tailor every service to fit your specific grass type, soil
                      conditions, and aesthetic preferences.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold mb-2">SEASONAL APPROACH</h4>
                    <p className="text-sm text-muted-foreground">
                      Lawn care and seasonal maintenance go hand in hand. We adjust our services throughout the year to
                      keep your yard healthy and beautiful.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold mb-2">ONGOING SUPPORT</h4>
                    <p className="text-sm text-muted-foreground">
                      You're never on your own. From regular maintenance to seasonal adjustments, we're here to keep
                      your lawn looking perfect year-round.
                    </p>
                  </div>
                </div>

                <Button size="lg" className="font-heading font-bold">
                  BOOK YOUR FREE ESTIMATE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">OUR SERVICES INCLUDE</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading font-bold text-xl mb-4">LAWN MOWING</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Professional mowing with precision cutting heights and clean edges. Regular service keeps your lawn
                    healthy and looking perfect.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl mb-4">LAWN EDGING</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Clean, crisp edges around walkways, driveways, and flower beds that give your lawn that
                    professional, finished appearance.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl mb-4">WEEDING</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Thorough weed removal and prevention to keep your lawn and garden beds looking clean and healthy
                    throughout the growing season.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl mb-4">LEAF CLEANUPS</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Seasonal leaf removal and yard cleanup services to prepare your lawn for winter and spring growth
                    cycles.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/spring-yard-cleanup-and-preparation.png"
                alt="Professional lawn care equipment"
                className="w-full h-[600px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-balance">
            Start your transformation today.
          </h2>
          <p className="text-xl mb-8 text-balance">Your first estimate is completely free.</p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4 font-heading font-bold">
            BOOK YOUR FREE ESTIMATE
          </Button>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                  <Sprout className="w-5 h-5 text-secondary-foreground" />
                </div>
                <span className="font-heading font-bold text-lg">ALL AMERICAN LAWN MAINTENANCE</span>
              </div>
              <p className="text-sm opacity-90 leading-relaxed">
                Professional lawn care services delivered with passion, precision, and American values. Your trusted
                partner for a beautiful yard.
              </p>
            </div>

            <div>
              <h5 className="font-heading font-bold mb-4">SERVICES</h5>
              <ul className="text-sm space-y-2 opacity-90">
                <li>Lawn Mowing & Edging</li>
                <li>Lawn Seeding & Aeration</li>
                <li>Weeding & Plant Watering</li>
                <li>Leaf Cleanups & Snow Shoveling</li>
              </ul>
            </div>

            <div>
              <h5 className="font-heading font-bold mb-4">CONTACT</h5>
              <div className="text-sm space-y-2 opacity-90">
                <div>201-771-2580</div>
                <div>2023aalm@gmail.com</div>
                <div className="pt-2">
                  <Badge variant="secondary" className="text-xs">
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-75">
            <p>
              &copy; 2025 All American Lawn Maintenance. All rights reserved. | Proudly serving our community with
              excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
