import ProjectCard from './ProjectCard';
import { ExternalLink, Github, FileText } from 'lucide-react';
import hydroAiImage from '@/assets/hydro-ai-project.jpg';
import commerceImage from '@/assets/commerce-analytics.jpg';
import brandAiImage from '@/assets/brand-ai-project.jpg';

const Projects = () => {
  const projects = [
    {
      title: "HydroAI - Smart Hydroponic Innovation System",
      description: "Award-winning hydroponic management platform powered by dedicated AI models. Complete IoT solution with real-time monitoring, automated control systems, and predictive growth analytics serving 50+ commercial hydroponic farms.",
      features: [
        "AI-powered growth prediction",
        "Real-time sensor monitoring", 
        "Automated nutrient management",
        "Mobile-responsive dashboard",
        "Predictive maintenance alerts"
      ],
      technologies: ["React", "Node.js", "Python", "TensorFlow", "IoT", "MongoDB", "WebSockets", "PWA"],
      impact: "50+ active commercial users, 40% increased crop yield, 30% reduction in resource waste, Winner of Innovation Competition",
      badges: [
        { text: "🏆 Competition Winner", type: "gold" },
        { text: "👥 50+ Active Users", type: "success" },
        { text: "🤖 AI-Powered", type: "ai" }
      ],
      image: hydroAiImage,
      buttons: [
        { text: "Live Dashboard", icon: ExternalLink, variant: "default" as const },
        { text: "Case Study", icon: FileText, variant: "outline" as const },
        { text: "GitHub", icon: Github, variant: "outline" as const }
      ]
    },
    {
      title: "CommercePro Analytics - E-commerce BI Dashboard", 
      description: "Comprehensive business intelligence platform for e-commerce businesses, combining my Google BI/DA certification with real e-commerce experience. Provides actionable insights for online retailers and marketplaces.",
      features: [
        "Sales performance analytics",
        "Customer behavior tracking",
        "Inventory optimization insights", 
        "Revenue forecasting",
        "Automated reporting"
      ],
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Google Analytics API", "Tableau", "Python"],
      impact: "Used by 10+ e-commerce businesses, 25% improvement in inventory decisions, Real-time sales tracking",
      badges: [
        { text: "📊 Google BI Certified", type: "primary" },
        { text: "💼 Business Intelligence", type: "success" }
      ],
      image: commerceImage,
      buttons: [
        { text: "Live Demo", icon: ExternalLink, variant: "default" as const },
        { text: "Documentation", icon: FileText, variant: "outline" as const },
        { text: "Source Code", icon: Github, variant: "outline" as const }
      ]
    },
    {
      title: "BrandAI - Intelligent Brand Building Assistant",
      description: "AI-powered platform that helps entrepreneurs build strong brands using advanced prompt engineering and my experience building successful brands. Combines GPT-4 with strategic branding frameworks.",
      features: [
        "Brand strategy generation",
        "Logo and visual identity AI",
        "Market positioning analysis",
        "Content strategy automation", 
        "Competitor analysis"
      ],
      technologies: ["React", "Node.js", "OpenAI GPT-4", "DALL-E", "Stripe", "MongoDB"],
      impact: "Helped 30+ startups develop brand strategies, Featured in startup accelerator demo day, Revenue-generating SaaS platform",
      badges: [
        { text: "🤖 Prompt Engineering", type: "ai" },
        { text: "🎨 Branding Expert", type: "gold" }
      ],
      image: brandAiImage,
      buttons: [
        { text: "Try Platform", icon: ExternalLink, variant: "default" as const },
        { text: "Case Studies", icon: FileText, variant: "outline" as const },
        { text: "API Docs", icon: Github, variant: "outline" as const }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text-hero">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications serving actual users and winning competitions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;