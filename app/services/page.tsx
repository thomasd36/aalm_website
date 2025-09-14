import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Scissors, Sprout, Droplets, Calendar, CheckCircle, Star } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Scissors,
      title: "LAWN MOWING & EDGING",
      description: "Professional mowing with precision edging for clean, crisp lines around walkways and flower beds.",
      features: [
        "Professional-grade equipment",
        "Optimal grass height cutting",
        "Precision edge trimming",
        "Debris cleanup included",
        "Consistent scheduling",
      ],
      price: "Starting at $35/visit",
      image: "/lawn-mowing-service-professional-equipment-cutting.png",
    },
    {
      icon: Sprout,
      title: "LAWN SEEDING & AERATION",
      description:
        "Improve your lawn's health with professional seeding and aeration services for thicker, greener grass.",
      features: [
        "Core aeration service",
        "Premium grass seed selection",
        "Soil preparation",
        "Overseeding for thick growth",
        "Seasonal timing optimization",
      ],
      price: "Custom quotes available",
      image: "/landscaping-design-service-beautiful-garden-transf.png",
    },
    {
      icon: Droplets,
      title: "WEEDING & PLANT WATERING",
      description: "Keep your lawn and garden beds healthy with regular weeding and proper plant watering services.",
      features: [
        "Hand weeding for precision",
        "Targeted weed prevention",
        "Plant watering schedules",
        "Garden bed maintenance",
        "Seasonal plant care",
      ],
      price: "Starting at $25/visit",
      image: "/yard-cleanup-service-removing-leaves-and-debris-f.png",
    },
    {
      icon: Calendar,
      title: "SEASONAL SERVICES",
      description: "Year-round lawn care including leaf cleanups in fall and snow shoveling in winter.",
      features: [
        "Fall leaf removal & cleanup",
        "Winter snow shoveling",
        "Spring lawn preparation",
        "Seasonal maintenance",
        "Weather-responsive service",
      ],
      price: "Seasonal packages available",
      image: "/seasonal-lawn-care-services-four-seasons-maintena.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-primary text-primary-foreground">
        <div className="absolute inset-0 z-0">
          <img
            src="/comprehensive-lawn-care-services-professional-equ.png"
            alt="Professional lawn care services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-secondary text-secondary-foreground text-sm px-4 py-2 font-medium">
            PROFESSIONAL SERVICES
          </Badge>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight text-balance">
            OUR <span className="text-secondary">SERVICES</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-balance max-w-3xl mx-auto leading-relaxed">
            Comprehensive lawn care solutions designed to keep your property looking its absolute best throughout every
            season.
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
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <img
                    src={service.image || "/placeholder.svg"}
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
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button size="lg" className="font-heading font-bold">
                    GET QUOTE FOR THIS SERVICE
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-balance">
              WHY CHOOSE ALL AMERICAN LAWN MAINTENANCE
            </h2>
            <p className="text-xl text-balance max-w-3xl mx-auto">
              Experience the difference that comes with passion, professionalism, and a commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">QUALITY GUARANTEED</h3>
              <p className="leading-relaxed opacity-90">
                Every job is completed with the highest standards of quality. If you're not satisfied, we'll make it
                right.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">RELIABLE SERVICE</h3>
              <p className="leading-relaxed opacity-90">
                Consistent, dependable service you can count on. We show up when we say we will, every time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sprout className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">PASSIONATE CARE</h3>
              <p className="leading-relaxed opacity-90">
                Your lawn is treated with the same care and attention as if it were our own. Passion drives everything
                we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-balance">
            Ready to transform your lawn?
          </h2>
          <p className="text-xl mb-8 text-balance">
            Get your free estimate today and see why neighbors trust All American Lawn Maintenance.
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
