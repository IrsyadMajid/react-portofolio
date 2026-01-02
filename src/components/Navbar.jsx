import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="text-xl font-bold">MyPortfolio</Link>
        <div className="flex gap-4">
          <Link to="/"><Button variant="ghost">Home</Button></Link>
          <Link to="/about"><Button variant="ghost">About</Button></Link>
          <Link to="/projects"><Button variant="ghost">Projects</Button></Link>
          <Link to="/contact"><Button variant="ghost">Contact</Button></Link>
        </div>
      </div>
    </nav>
  )
}
