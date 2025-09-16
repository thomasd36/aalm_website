"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleGetQuote = () => {
    router.push("/contact")
    setIsOpen(false)
  }

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="All American Lawn Maintenance Logo"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-heading font-bold tracking-tight">ALL AMERICAN</h1>
              <p className="text-sm opacity-90 -mt-1">LAWN MAINTENANCE</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-secondary transition-colors uppercase tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:2017712580"
              className="flex items-center gap-2 text-sm hover:text-secondary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">201-771-2580</span>
            </a>

            <Button variant="secondary" size="sm" className="font-medium" onClick={handleGetQuote}>
              GET QUOTE
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-primary-foreground/20 py-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium hover:text-secondary transition-colors uppercase tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-primary-foreground/20">
                <a
                  href="tel:2017712580"
                  className="flex items-center gap-2 text-sm mb-3 hover:text-secondary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">201-771-2580</span>
                </a>

                <Button
                  variant="secondary"
                  size="sm"
                  className="font-medium"
                  onClick={handleGetQuote}
                >
                  GET QUOTE
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}