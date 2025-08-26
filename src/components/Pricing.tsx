// Pricing Component
// Generated: 2025-08-26T22:41:10.561Z
// Template: pricing-c001
// Context: Homepage
// Position: pages.0.sections.5

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Database, BarChart3, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams exploring data analytics",
      price: "$299",
      period: "/month",
      badge: null,
      features: [
        "Up to 5 data sources",
        "10GB data storage",
        "Basic dashboards",
        "Email support",
        "Standard reporting",
        "5 user seats",
        "Data refresh every 4 hours"
      ],
      cta: "Start Analytics Trial",
      popular: false,
      icon: BarChart3
    },
    {
      name: "Professional",
      description: "Advanced analytics for growing enterprises",
      price: "$899",
      period: "/month",
      badge: "Most Popular",
      features: [
        "Unlimited data sources",
        "500GB data storage",
        "Advanced visualizations",
        "Priority support",
        "Real-time analytics",
        "25 user seats",
        "Custom integrations",
        "API access",
        "Advanced security",
        "Automated reporting"
      ],
      cta: "Begin Free Trial",
      popular: true,
      icon: Database
    },
    {
      name: "Enterprise",
      description: "Complete business intelligence platform",
      price: "Custom",
      period: "",
      badge: "Contact Sales",
      features: [
        "Everything in Professional",
        "Unlimited storage",
        "White-label solution",
        "24/7 dedicated support",
        "Custom data connectors",
        "Advanced ML models",
        "Unlimited users",
        "SLA guarantee",
        "Dedicated account manager",
        "On-premise deployment"
      ],
      cta: "Schedule Consultation",
      popular: false,
      icon: Building2
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Analytics Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Enterprise-Grade Analytics
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              For Every Scale
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Transform your data into actionable insights with our comprehensive business intelligence platform. 
            Flexible pricing that scales with your analytics needs.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Monthly
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Annual
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 25%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <Card 
                key={index}
                className={cn(
                  "relative overflow-hidden transition-all duration-300 hover:shadow-lg",
                  plan.popular 
                    ? "border-primary/50 shadow-lg shadow-primary/10 scale-105" 
                    : "border-border/50 hover:border-primary/20"
                )}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="size-3 mr-1" />
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                {/* Background Gradient */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
                )}

                <CardHeader className="relative text-center pb-8">
                  <div className="size-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="size-8 text-primary" />
                  </div>
                  
                  {plan.badge && !plan.popular && (
                    <Badge variant="outline" className="mb-4 mx-auto w-fit">
                      {plan.badge}
                    </Badge>
                  )}
                  
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-base mb-6">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground mb-1">{plan.period}</span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="relative space-y-6">
                  {/* Features List */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="size-3 text-primary" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    className={cn(
                      "w-full text-base py-6",
                      plan.popular 
                        ? "bg-primary hover:bg-primary/90" 
                        : ""
                    )}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.popular && <Zap className="size-4 mr-2" />}
                    {plan.cta}
                  </Button>

                  {plan.name === "Professional" && (
                    <p className="text-center text-sm text-muted-foreground">
                      30-day free trial • Full platform access
                    </p>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">
            Need a custom analytics solution?
          </h3>
          <p className="text-muted-foreground mb-6">
            We create tailored business intelligence platforms for enterprises with unique data requirements. 
            Let's discuss your analytics transformation journey.
          </p>
          <Button variant="outline" size="lg">
            Book Strategy Session
          </Button>
        </div>
      </div>
    </section>
  )
}