"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navigation } from "@/components/navigation"
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    propertySize: "",
    details: "",
    contactMethod: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitMessage("Thank you! Your quote request has been submitted. We will contact you within 24 hours.")
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          service: "",
          propertySize: "",
          details: "",
          contactMethod: "",
        })
      } else {
        setSubmitMessage("Sorry, there was an error submitting your request. Please try again or call us directly.")
      }
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      setSubmitMessage("Sorry, there was an error submitting your request. Please try again or call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCall = () => {
    window.location.href = "tel:201-771-2580"
  }

  const handleText = () => {
    window.location.href = "sms:201-771-2580"
  }

  const handleEmail = () => {
    window.location.href = "mailto:2023aalm@gmail.com"
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "PHONE",
      details: "201-771-2580",
      subtitle: "Call or text anytime",
    },
    {
      icon: Mail,
      title: "EMAIL",
      details: "2023aalm@gmail.com",
      subtitle: "We respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "SERVICE AREA",
      details: "Your Local Area",
      subtitle: "Free estimates within Dumont, NJ",
    },
    {
      icon: Clock,
      title: "HOURS",
      details: "Mon-Friday: 9AM-7:30PM",
      subtitle: "Saturday & Sunday: By appointment only",
    },
  ]

  const services = [
    "Lawn Mowing",
    "Lawn Edging",
    "Lawn Seeding",
    "Lawn Aeration",
    "Weeding",
    "Plant & Grass Watering",
    "Leaf Clean Ups",
    "Snow Shoveling",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-primary text-primary-foreground">
        <div className="absolute inset-0 z-0">
          <img
            src="/contact-lawn-care-professional-consultation-meeti.png"
            alt="Professional lawn care consultation"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-secondary text-secondary-foreground text-sm px-4 py-2 font-medium">
            GET IN TOUCH
          </Badge>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight text-balance">
            CONTACT <span className="text-secondary">US</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-balance max-w-3xl mx-auto leading-relaxed">
            Ready to transform your lawn? Get your free estimate today and join our growing family of satisfied
            customers.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">GET YOUR FREE ESTIMATE</h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours with a personalized estimate.
                </p>
              </div>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-heading font-bold flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-secondary" />
                    Request Your Estimate
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">First Name *</label>
                          <Input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="John"
                            className="h-12"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Last Name *</label>
                          <Input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Smith"
                            className="h-12"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Phone Number *</label>
                          <Input
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="(555) 123-4567"
                            className="h-12"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Email Address *</label>
                          <Input
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            type="email"
                            className="h-12"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Property Address *</label>
                        <Input
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="123 Main Street, Your City, State 12345"
                          className="h-12"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Service Needed *</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full h-12 px-3 border border-input bg-background rounded-md"
                          required
                        >
                          <option value="">Select a service...</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Property Size (approximate)</label>
                        <select
                          name="propertySize"
                          value={formData.propertySize}
                          onChange={handleInputChange}
                          className="w-full h-12 px-3 border border-input bg-background rounded-md"
                        >
                          <option value="">Select property size...</option>
                          <option value="small">Small (Under 1/4 acre)</option>
                          <option value="medium">Medium (1/4 - 1/2 acre)</option>
                          <option value="large">Large (1/2 - 1 acre)</option>
                          <option value="xlarge">Extra Large (Over 1 acre)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Additional Details</label>
                        <Textarea
                          name="details"
                          value={formData.details}
                          onChange={handleInputChange}
                          placeholder="Tell us about your specific needs, current lawn condition, or any special requirements..."
                          className="min-h-[120px]"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Preferred Contact Method</label>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="contactMethod"
                              value="phone"
                              checked={formData.contactMethod === "phone"}
                              onChange={handleInputChange}
                              className="text-secondary"
                            />
                            <span className="text-sm">Phone</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="contactMethod"
                              value="email"
                              checked={formData.contactMethod === "email"}
                              onChange={handleInputChange}
                              className="text-secondary"
                            />
                            <span className="text-sm">Email</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="contactMethod"
                              value="text"
                              checked={formData.contactMethod === "text"}
                              onChange={handleInputChange}
                              className="text-secondary"
                            />
                            <span className="text-sm">Text</span>
                          </label>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full font-heading font-bold text-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "SUBMITTING..." : "GET MY FREE ESTIMATE"}
                      </Button>

                      {submitMessage && (
                        <div
                          className={`p-4 rounded-md text-center ${
                            submitMessage.includes("Thank you")
                              ? "bg-green-50 text-green-800 border border-green-200"
                              : "bg-red-50 text-red-800 border border-red-200"
                          }`}
                        >
                          {submitMessage}
                        </div>
                      )}

                      <p className="text-sm text-muted-foreground text-center">
                        * = Required fields. We respect your privacy and will never share your information.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">GET IN TOUCH</h2>
                <p className="text-lg text-muted-foreground">
                  Have questions? Need immediate assistance? Here's how to reach us directly.
                </p>
              </div>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-lg mb-1">{info.title}</h3>
                        <p className="text-xl font-semibold mb-1">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Quick Actions */}
              <Card className="p-6 bg-secondary/5 border-secondary/20">
                <h3 className="font-heading font-bold text-xl mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-secondary" />
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start font-heading font-bold bg-transparent"
                    onClick={handleCall}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now: 201-771-2580
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start font-heading font-bold bg-transparent"
                    onClick={handleText}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Text Us for Quick Estimate
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start font-heading font-bold bg-transparent"
                    onClick={handleEmail}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email: 2023aalm@gmail.com
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">FREQUENTLY ASKED QUESTIONS</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-heading font-bold text-lg mb-3">How quickly can you provide a quote?</h3>
              <p className="text-muted-foreground">
                We typically respond within 24 hours with a detailed quote. For urgent requests, call or text us
                directly for same-day quotes.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-heading font-bold text-lg mb-3">Do you provide free estimates?</h3>
              <p className="text-muted-foreground">
                Yes! All estimates are completely free with no obligation. We'll assess your property and provide a
                detailed quote at no cost.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-heading font-bold text-lg mb-3">
                What makes you different from other lawn care services?
              </h3>
              <p className="text-muted-foreground">
                We're a young, passionate entrepreneur who treats every lawn like our own. You get personal attention,
                competitive pricing, and the satisfaction of supporting a local young business owner.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-balance">Ready to get started?</h2>
          <p className="text-xl mb-8 text-balance">
            Don't wait - your dream lawn is just one call away. Get your free estimate today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-4 font-heading font-bold"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              GET FREE ESTIMATE NOW
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 font-heading font-bold border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
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
