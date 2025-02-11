import { Brain, Cloud, Shield, Zap } from "lucide-react"

const features = [
  {
    name: "AI-Powered Analytics",
    description: "Harness the power of machine learning to get personalized financial advice based on your spending habits",
    icon: Brain,
  },
  {
    name: "Efficient Spending Tracking",
    description: "Easily log your transactions, categorize spendings, and monitor where your money goes,all in real time",
    icon: Cloud,
  },
  {
    name: "Enterprise-Grade Security",
    description: "State-of-the-art security measures to protect your most valuable assets.",
    icon: Shield,
  },
  {
    name: "Smart Budget Limits",
    description: "Set weekly or monthly spending limits and receive timely reminders to keep your budget on track",
    icon: Zap,
  },
]

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">What We Offer</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Discover how Spend in Peace can transform your finances with our innovative solutions.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

