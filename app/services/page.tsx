"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Scissors, Sprout, Droplets, Calendar, CheckCircle, Star, Phone } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ServicesPage() {
  const router = useRouter()

  const handleGetQuote = () => {
    router.push("/contact")
  }

  const handleCall = () => {
    window.location.href = "tel:2017712580"
  }

  const services = [
    {
      icon: Scissors,
      title: "LAWN MOWING & EDGING",
      description: "Keep your lawn fresh and clean with mowing and precise edging.",
      features: [
        "Pro-level equipment (but still fun to use!)",
        "Grass cut at perfect height",
        "Edge trimming for neat lines",
        "We clean up debris after",
        "Flexible weekend scheduling",
      ],
      price: "$35/visit",
      image: "/lawn-mowing-service.png",
    },
    {
      icon: Sprout,
      title: "LAWN SEEDING & AERATION",
      description: "Get thicker, greener grass with aeration and seeding.",
      features: [
        "Core aeration",
        "Premium grass seeds",
        "Soil prep",
        "Overseeding for max growth",
        "Seasonal timing",
      ],
      price: "Custom quote",
      image: "/lawn-seeding-service.png",
    },
    {
      icon: Droplets,
      title: "WEEDING & WATERING",
      description: "We keep your garden healthy by weeding and watering like a pro.",
      features: [
        "Hand weeding",
        "Weed prevention",
        "Watering schedules",
        "Garden bed care",
        "Seasonal plant maintenance",
      ],
      price: "$25/visit",
      image: "/weed-watering-service.png",
    },
    {
      icon: Calendar,
      title: "SEASONAL SERVICES",
      description: "Year-round care: leaf cleanup, snow removal, and more.",
      features: [
        "Fall leaf removal",
        "Winter snow shoveling",
        "Spring prep",
        "Seasonal maintenance",
        "Weather-based scheduling",
      ],
      price: "Package pricing",
      image: "/seasonal-lawn-care.png",
    },
  ]

  const packages = [
    {
      type: "BASIC",
      title: "ESSENTIAL CARE",
      price: "$35/visit",
      features: [
        "Weekly/bi-weekly mowing",
        "Precision edging",
        "Debris cleanup",
        "Basic lawn assessment",
      ],
    },
    {
      type: "PREMIUM",
      title: "COMPLETE CARE",
      price: "$65/visit",
      features: [
        "Everything in Essential",
        "Weeding service",
        "Plant watering",
        "Seasonal cleanup",
        "Priority scheduling",
      ],
      popular: true,
    },
    {
      type: "LUXURY",
      title: "PREMIUM CARE",
      price: "$95/visit",
      features: [
        "Everything in Complete",
        "Lawn seeding & aeration",
        "Snow shoveling (winter)",
        "Monthly consultation",
        "Same-day response",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-primary text-primary-foreground">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-lawn-services.png"
            alt="Teen entrepreneur mowing lawn"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary/90"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-secondary text-secondary-foreground text-sm px-4 py-2 font-medium">
            FUN & FRESH
          </Badge>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight text-balance">
            OUR <span className="text-secondary">SERVICES</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-balance max-w-3xl mx-auto leading-relaxed">
            Lawn care made easy and fun by a teen entrepreneur with big dreams.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <Badge className="bg-secondary/10 text-secondary border-secondary">{service.price}</Badge>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button size="lg" className="font-heading font-bold" onClick={handleGetQuote}>
                    GET QUOTE FOR THIS SERVICE
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">SERVICE PACKAGES</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Pick a package that works for you. All include quality care and fun vibes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative overflow-hidden ${pkg.popular ? "border-2 border-secondary" : ""}`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-secondary text-secondary-foreground text-center py-2">
                    <span className="text-sm font-heading font-bold">MOST POPULAR</span>
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-12">
                  <Badge className="w-fit mx-auto mb-4">{pkg.type}</Badge>
                  <CardTitle className="text-2xl font-heading font-bold">{pkg.title}</CardTitle>
                  <div className="text-3xl font-heading font-bold text-primary">
                    {pkg.price}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full font-heading font-bold mt-6 ${pkg.popular ? "bg-secondary hover:bg-secondary/90" : ""}`}
                    onClick={handleGetQuote}
                  >
                    CHOOSE {pkg.title.toUpperCase()}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-balance">
            WHY CHOOSE US?
          </h2>
          <p className="text-xl text-balance max-w-3xl mx-auto mb-12">
            Experience teen energy, passion, and dedication with every lawn we touch.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">QUALITY GUARANTEE</h3>
              <p className="opacity-90">Every job is done right. We make it fun and perfect!</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">RELIABLE SERVICE</h3>
              <p className="opacity-90">We show up on time, every time, because we care.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sprout className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">PASSIONATE CARE</h3>
              <p className="opacity-90">We treat your lawn like it's our own. Teens take pride too!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white text-black text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-balance">
            Ready to transform your lawn?
          </h2>
          <p className="text-xl mb-8 text-balance">
            Get your free estimate today and see why neighbors trust teen-run lawn care!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 font-heading font-bold" onClick={handleGetQuote}>
              GET FREE ESTIMATE
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 font-heading font-bold border-2 border-black text-black hover:bg-black hover:text-white bg-transparent"
              onClick={handleCall}
            >
              CALL 201-771-2580
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}