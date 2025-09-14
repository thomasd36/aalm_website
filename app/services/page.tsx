"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Scissors, Sprout, Droplets, Calendar, CheckCircle, Star } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ServicesPage() {
  const router = useRouter()

  const services = [
    {
      icon: Scissors,
      title: "Lawn Mowing & Edging",
      description: "Clean cuts, sharp edges, and a lawn that looks tight every time.",
      features: ["Mow & edge like a pro", "Clean up debris", "Weekly or bi-weekly schedule", "Consistent care"],
      price: "$35/visit",
      image: "/lawn-mowing.jpg",
    },
    {
      icon: Sprout,
      title: "Seeding & Aeration",
      description: "Make your grass thicker and greener with proper care.",
      features: ["Aerate soil", "Overseed patchy areas", "Seasonal timing", "Better root growth"],
      price: "Custom quote",
      image: "/lawn-seeding.jpg",
    },
    {
      icon: Droplets,
      title: "Weeding & Watering",
      description: "Keep your garden beds clean and plants hydrated.",
      features: ["Hand weeding", "Plant watering schedule", "Bed maintenance", "Seasonal plant care"],
      price: "$25/visit",
      image: "/weeding-watering.jpg",
    },
    {
      icon: Calendar,
      title: "Seasonal Services",
      description: "Leaves in fall, snow in winter—we got you.",
      features: ["Leaf cleanup", "Snow shoveling", "Spring prep", "Seasonal maintenance"],
      price: "Seasonal packages",
      image: "/seasonal-lawn.jpg",
    },
  ]

  const packages = [
    {
      title: "Essential Care",
      type: "Basic",
      price: "$35/visit",
      features: ["Weekly/bi-weekly mowing", "Edge trimming", "Debris cleanup", "Basic lawn check"],
      popular: false,
    },
    {
      title: "Complete Care",
      type: "Premium",
      price: "$65/visit",
      features: ["Everything in Basic", "Weeding service", "Plant watering", "Seasonal cleanup", "Priority scheduling"],
      popular: true,
    },
    {
      title: "Premium Care",
      type: "Luxury",
      price: "$95/visit",
      features: ["Everything in Complete", "Lawn seeding & aeration", "Snow shoveling", "Monthly consultation", "Same-day response"],
      popular: false,
    },
  ]

  const handleQuote = () => {
    router.push("/contact")
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-primary text-primary-foreground">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-lawn.jpg"
            alt="Lawn care teen entrepreneur"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-secondary text-secondary-foreground px-4 py-2">Our Services</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Teen-Powered <span className="text-secondary">Lawn Care</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Simple, reliable, and teen-run lawn services that make your yard look awesome.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid gap-16">
          {services.map((service, i) => (
            <div key={i} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className={i % 2 === 1 ? "lg:col-start-1" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <Badge className="bg-secondary/10 text-secondary border-secondary">{service.price}</Badge>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="font-bold" onClick={handleQuote}>
                  Get a Quote
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Teen-Powered Lawn Care?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-12">
            Fast, friendly, and passionate—this is what makes teen entrepreneurs stand out.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Work</h3>
              <p>We take pride in every cut, every edge, every cleanup.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Reliable Service</h3>
              <p>Show up on time, every time—no exceptions.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sprout className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Passionate Care</h3>
              <p>We treat your lawn like it’s our own and have fun doing it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Service Packages</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Pick the package that fits your lawn and your schedule. All include teen-powered care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, i) => (
            <Card key={i} className={`relative overflow-hidden border ${pkg.popular ? "border-secondary" : "border-transparent"}`}>
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-secondary text-secondary-foreground text-center py-2">
                  MOST POPULAR
                </div>
              )}
              <CardHeader className="text-center pt-12 pb-8">
                <Badge className="w-fit mx-auto mb-4">{pkg.type}</Badge>
                <CardTitle className="text-2xl font-bold">{pkg.title}</CardTitle>
                <div className="text-3xl font-bold text-primary">
                  {pkg.price}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {pkg.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full font-bold mt-6" onClick={handleQuote}>
                  Choose {pkg.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white text-black text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to level up your lawn?</h2>
          <p className="text-xl mb-8">
            Hit us up and see why neighbors trust teen-powered All American Lawn Maintenance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 font-bold" onClick={handleQuote}>
              GET YOUR FREE ESTIMATE
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 font-bold border-2 border-black text-black hover:bg-black hover:text-white bg-transparent"
            >
              CALL 201-771-2580
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
