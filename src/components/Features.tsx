// Features Component
// Generated: 2025-08-26T22:41:10.561Z
// Template: features-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  BarChart3, 
  Database, 
  Zap, 
  Shield, 
  Globe, 
  Brain,
  Clock,
  Users,
  TrendingUp
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: BarChart3,
      title: "Real-Time Dashboards",
      description: "Interactive visualizations that update instantly as your data changes, providing live insights for immediate decision-making.",
      badge: "Visualization"
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Machine learning algorithms automatically detect patterns, anomalies, and opportunities in your enterprise data.",
      badge: "AI/ML"
    },
    {
      icon: Database,
      title: "Enterprise Data Platform",
      description: "Unified data warehouse supporting petabyte-scale analytics with 99.9% uptime SLA guarantee.",
      badge: "Infrastructure"
    },
    {
      icon: Zap,
      title: "Sub-Second Query Performance",
      description: "Lightning-fast analytics engine processes complex queries across billions of records in milliseconds.",
      badge: "Performance"
    },
    {
      icon: Shield,
      title: "SOC 2 Type II Compliance",
      description: "Enterprise-grade security with role-based access, data encryption, and comprehensive audit trails.",
      badge: "Security"
    },
    {
      icon: Globe,
      title: "Multi-Cloud Deployment",
      description: "Deploy across AWS, Azure, or GCP with seamless data integration and global availability.",
      badge: "Cloud"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast trends and outcomes using advanced statistical models and machine learning algorithms.",
      badge: "Forecasting"
    },
    {
      icon: Users,
      title: "Collaborative Workspaces",
      description: "Share insights, create team dashboards, and collaborate on data analysis across departments.",
      badge: "Collaboration"
    },
    {
      icon: Clock,
      title: "Automated Reporting",
      description: "Schedule and distribute executive reports, KPI summaries, and custom analytics to stakeholders.",
      badge: "Automation"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Platform Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Enterprise-Grade Analytics
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Built for Scale
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive business intelligence platform designed for Fortune 500 companies 
            and data-driven organizations requiring advanced analytics capabilities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to unlock the power of your enterprise data?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Schedule Executive Demo
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Download Technical Specs
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}