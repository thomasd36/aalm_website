import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Star, ArrowRight, Calendar, MapPin } from "lucide-react"

export default function GalleryPage() {
  const beforeAfterProjects = [
    {
      id: 1,
      title: "Suburban Lawn Transformation",
      location: "Maple Street",
      date: "March 2024",
      description: "Complete lawn renovation with new sod, landscaping, and maintenance setup.",
      beforeImage: "/overgrown-neglected-lawn-with-weeds-and-bare-patch.png",
      afterImage: "/pristine-green-lawn-perfectly-manicured-with-lands.png",
      services: ["Lawn Renovation", "Landscaping", "Sod Installation"],
    },
    {
      id: 2,
      title: "Backyard Makeover",
      location: "Oak Avenue",
      date: "February 2024",
      description: "Transformed an overgrown backyard into a beautiful outdoor space.",
      beforeImage: "/overgrown-backyard-with-tall-weeds-and-debris.png",
      afterImage: "/beautiful-manicured-backyard-with-clean-edges-and-.png",
      services: ["Yard Cleanup", "Landscaping", "Regular Maintenance"],
    },
    {
      id: 3,
      title: "Front Yard Curb Appeal",
      location: "Pine Street",
      date: "January 2024",
      description: "Enhanced curb appeal with professional landscaping and lawn care.",
      beforeImage: "/plain-front-yard-with-patchy-grass-and-no-landscap.png",
      afterImage: "/stunning-front-yard-with-perfect-lawn-and-professi.png",
      services: ["Lawn Care", "Landscaping Design", "Edging"],
    },
  ]

  const serviceGallery = [
    {
      category: "Lawn Mowing & Maintenance",
      images: [
        "/professional-lawn-mowing-with-perfect-stripes.png",
        "/lawn-edging-and-trimming-around-walkways.png",
        "/lawn-maintenance-equipment-and-tools.png",
      ],
    },
    {
      category: "Landscaping & Design",
      images: [
        "/beautiful-flower-bed-installation-and-mulching.png",
        "/professional-shrub-planting-and-arrangement.png",
        "/decorative-stone-and-landscape-design.png",
      ],
    },
    {
      category: "Seasonal Services",
      images: [
        "/fall-leaf-cleanup-and-removal.png",
        "/spring-yard-cleanup-and-preparation.png",
        "/winter-storm-cleanup-and-debris-removal.png",
      ],
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Maple Street",
      rating: 5,
      text: "Amazing work! My lawn has never looked better. This young entrepreneur really knows what he's doing.",
      project: "Complete Lawn Renovation",
    },
    {
      name: "Mike Chen",
      location: "Oak Avenue",
      rating: 5,
      text: "Professional, reliable, and affordable. So impressed with the transformation of our backyard!",
      project: "Backyard Makeover",
    },
    {
      name: "Lisa Rodriguez",
      location: "Pine Street",
      rating: 5,
      text: "Our neighbors keep asking who did our landscaping. Couldn't be happier with the results!",
      project: "Front Yard Landscaping",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-primary text-primary-foreground">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=800&width=1200"
            alt="Professional lawn care portfolio"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-secondary text-secondary-foreground text-sm px-4 py-2 font-medium">OUR WORK</Badge>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight text-balance">
            GALLERY & <span className="text-secondary">PORTFOLIO</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-balance max-w-3xl mx-auto leading-relaxed">
            See the incredible transformations we've achieved for our satisfied customers. Quality work speaks for
            itself.
          </p>
        </div>
      </section>

      {/* Before & After Projects */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">BEFORE & AFTER TRANSFORMATIONS</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See the dramatic improvements we've made for our customers. Every project tells a story of transformation.
            </p>
          </div>

          <div className="space-y-20">
            {beforeAfterProjects.map((project, index) => (
              <Card key={project.id} className="overflow-hidden shadow-xl">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                    {/* Images */}
                    <div className={`space-y-0 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                      <div className="relative">
                        <img
                          src={project.beforeImage || "/placeholder.svg"}
                          alt={`${project.title} - Before`}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-red-500 text-white font-bold">BEFORE</Badge>
                        </div>
                      </div>
                      <div className="relative">
                        <img
                          src={project.afterImage || "/placeholder.svg"}
                          alt={`${project.title} - After`}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-green-500 text-white font-bold">AFTER</Badge>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="mb-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {project.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {project.date}
                          </div>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">{project.title}</h3>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-heading font-bold mb-3">Services Provided:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.services.map((service, serviceIndex) => (
                            <Badge key={serviceIndex} variant="outline" className="text-sm">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button className="w-fit font-heading font-bold">
                        Get Similar Results
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Gallery */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">SERVICE GALLERY</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A closer look at our professional lawn care and landscaping services in action.
            </p>
          </div>

          <div className="space-y-16">
            {serviceGallery.map((category, index) => (
              <div key={index}>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">{category.category}</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {category.images.map((image, imageIndex) => (
                    <Card key={imageIndex} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${category.category} service ${imageIndex + 1}`}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">WHAT OUR CUSTOMERS SAY</h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from our satisfied customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 shadow-lg">
                <div className="mb-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.text}"</p>
                </div>
                <div className="border-t pt-4">
                  <p className="font-heading font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <p className="text-sm text-secondary font-medium">{testimonial.project}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12">BY THE NUMBERS</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-2">50+</div>
              <p className="text-lg">Lawns Transformed</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-2">100%</div>
              <p className="text-lg">Customer Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-2">2+</div>
              <p className="text-lg">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-2">24hr</div>
              <p className="text-lg">Response Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-balance">
            Ready for your transformation?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground text-balance">
            Join our growing list of satisfied customers. Get your free estimate today and see what we can do for your
            lawn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4 font-heading font-bold">
              GET YOUR FREE ESTIMATE
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 font-heading font-bold bg-transparent">
              VIEW MORE PROJECTS
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
