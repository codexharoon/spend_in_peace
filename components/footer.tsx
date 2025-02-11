import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <h2 className="font-bold">Spend in Peace</h2>
          <p className="text-sm text-muted-foreground">Every Penny Matters</p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Features</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/efficient-tracking" className="text-muted-foreground transition-colors hover:text-primary">
                  Efficient Spending Tracking
                </Link>
              </li>
              <li>
                <Link href="/smart-budget-limits" className="text-muted-foreground transition-colors hover:text-primary">
                  Smart Budget Limits
                </Link>
              </li>
              <li>
                <Link href="/ai-financial-advice" className="text-muted-foreground transition-colors hover:text-primary">
                  AI Financial Advice
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Who We Are ?</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/our_mission" className="text-muted-foreground transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground transition-colors hover:text-primary">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground transition-colors hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/your-team"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com/your-team"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com/company/your-team"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Spend in Peace. Developed by Team RHM [Rafay,Haroon,Manaal].
        </p>
      </div>
    </footer>
  )
}
