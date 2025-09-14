import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Award, Clock, Heart, Users, Star } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "PASSION",
      description:
        "Every lawn we care for receives the same attention and dedication as if it were our own family's yard.",
    },
    {
      icon: Award,
      title: "EXCELLENCE",
      description: "We never settle for 'good enough.' Our commitment to quality shows in every blade of grass we cut.",
    },
    {
      icon: Clock,
      title: "RELIABILITY",
      description: "When we say we'll be there, we show up. Consistent, dependable service you can count on.",
    },
    {
      icon: Users,
      title: "COMMUNITY",
      description: "We're not just a business - we're your neighbors, invested in making our community beautiful.",
    },
  ]

  const stats = [
    { number: "50+", label: "LAWNS MAINTAINED" },
    { number: "4", label: "YEARS EXPERIENCE" },
    { number: "100%", label: "SATISFACTION RATE" },
    { number: "24hr", label: "RESPONSE TIME" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-primary text-primary-foreground">
        <div className="absolute inset-0 z-0">
          <img
            src="/young-entrepreneur-with-lawn-mower-smiling-confide.png"
            alt="Young entrepreneur with lawn mower"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-primary/85"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-secondary text-secondary-foreground text-sm px-4 py-2 font-medium">OUR STORY</Badge>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight text-balance">
            ABOUT <span className="text-secondary">ALL AMERICAN</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-balance max-w-3xl mx-auto leading-relaxed">
            Founded by a passionate 14-year-old entrepreneur with a vision to transform neighborhoods one lawn at a
            time.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-balance">
                THE AMERICAN DREAM STARTS YOUNG
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  What started as a simple desire to earn some spending money has grown into something much bigger. At
                  just 14 years old, our founder saw an opportunity to combine hard work, entrepreneurial spirit, and a
                  genuine love for making things beautiful.
                </p>
                <p>
                  Every weekend, you'll find us out there with professional-grade equipment, treating each lawn with the
                  same care and attention we'd give our own family's yard. We believe that age is just a number when it
                  comes to dedication, quality, and customer service.
                </p>
                <p>
                  All American Lawn Maintenance isn't just about cutting grass - it's about proving that with passion,
                  hard work, and the right attitude, anyone can build something meaningful and make their community a
                  better place.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="font-heading font-bold">
                  GET YOUR FREE ESTIMATE
                </Button>
                <Button size="lg" variant="outline" className="font-heading font-bold bg-transparent">
                  SEE OUR WORK
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/young-entrepreneur-working-hard-lawn-care-busines.png"
                alt="Young entrepreneur working on lawn care"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-heading font-bold">14</div>
                <div className="text-sm font-medium">YEARS OLD</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">OUR VALUES</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              These core principles guide everything we do, from our first consultation to the final cleanup.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">BY THE NUMBERS</h2>
            <p className="text-xl text-balance max-w-3xl mx-auto opacity-90">
              Our track record speaks for itself. Here's what we've accomplished in just a few short years.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-heading font-bold text-secondary mb-2">{stat.number}</div>
                <div className="text-sm font-heading font-medium opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-balance">OUR MISSION</h2>
          <div className="text-xl leading-relaxed text-muted-foreground space-y-6">
            <p>
              To prove that excellence has no age limit. We're here to show that a young entrepreneur with the right
              attitude, professional equipment, and genuine care can deliver results that exceed expectations.
            </p>
            <p>
              Every lawn we maintain is a testament to the American dream - that with hard work, dedication, and a
              commitment to quality, anyone can build something meaningful and make their community a better place.
            </p>
          </div>
          <div className="mt-12 p-8 bg-secondary/5 rounded-lg border border-secondary/20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Star className="w-8 h-8 text-secondary" />
              <h3 className="text-2xl font-heading font-bold">OUR PROMISE</h3>
              <Star className="w-8 h-8 text-secondary" />
            </div>
            <p className="text-lg font-medium">
              "We treat every lawn like it's our own, every customer like family, and every job like our reputation
              depends on it - because it does."
            </p>
            <div className="mt-4 text-sm text-muted-foreground">- Founder, All American Lawn Maintenance</div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">WHY CHOOSE A YOUNG ENTREPRENEUR?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Experience the energy, dedication, and fresh perspective that comes with youthful ambition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">GENUINE PASSION</h3>
              <p className="text-muted-foreground leading-relaxed">
                This isn't just a job - it's a dream being built one lawn at a time. That passion shows in every detail.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">PROVING OURSELVES</h3>
              <p className="text-muted-foreground leading-relaxed">
                We work twice as hard to earn your trust and prove that age doesn't determine quality of work.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">PERSONAL TOUCH</h3>
              <p className="text-muted-foreground leading-relaxed">
                You're not just another client - you're helping support a young person's entrepreneurial journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-balance">
            Ready to support young entrepreneurship?
          </h2>
          <p className="text-xl mb-8 text-balance">
            Join our growing family of satisfied customers and help us prove that dreams have no age limit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 font-heading font-bold">
              GET FREE ESTIMATE
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 font-heading font-bold border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              CALL 201-771-2580
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
