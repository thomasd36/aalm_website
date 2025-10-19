import { Navigation } from "@/components/navigation"

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex flex-1 flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
          Coming Soon
        </h1>
        <p className="text-xl text-muted-foreground">
          Please check back at a later date.
        </p>
      </main>
    </div>
  )
}
