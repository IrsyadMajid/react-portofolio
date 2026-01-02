import { Button } from "@/components/ui/button"
// Note: Input component might not be installed yet, using standard HTML input if needed or assuming user might add it.
// Safest to just use standard HTML or Button for now if Input isn't confirmed installed.
// Checking previous file list, only 'button' is in ui.
// I will just use standard HTML structure for now to avoid errors.

export default function Contact() {
  return (
    <div className="container mx-auto py-12 max-w-md">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <form className="flex flex-col gap-4">
        <label className="flex flex-col gap-2">
          <span>Name</span>
          <input className="border p-2 rounded-md" type="text" placeholder="Your Name" />
        </label>
        <label className="flex flex-col gap-2">
          <span>Email</span>
          <input className="border p-2 rounded-md" type="email" placeholder="your@email.com" />
        </label>
        <label className="flex flex-col gap-2">
          <span>Message</span>
          <textarea className="border p-2 rounded-md" rows={4} placeholder="Your message..."></textarea>
        </label>
        <Button type="submit">Send Message</Button>
      </form>
    </div>
  )
}
