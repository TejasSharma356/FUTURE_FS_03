import { Leaf, Heart, BookOpen, Clock, PartyPopper, Tags, Train, Crown, Gift } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Veg Mode",
    description: "Switch to pure veg mode",
    gradient: "from-green-500 to-emerald-600",
    bgGlow: "bg-green-500/20",
  },
  {
    icon: Heart,
    title: "Healthy",
    description: "Nutritious & balanced meals",
    gradient: "from-pink-500 to-rose-600",
    bgGlow: "bg-pink-500/20",
  },
  {
    icon: BookOpen,
    title: "Collections",
    description: "Curated lists for every mood",
    gradient: "from-purple-500 to-violet-600",
    bgGlow: "bg-purple-500/20",
  },
  {
    icon: Clock,
    title: "Schedule Order",
    description: "Plan your meals ahead",
    gradient: "from-blue-500 to-cyan-600",
    bgGlow: "bg-blue-500/20",
  },
  {
    icon: PartyPopper,
    title: "Plan a Party",
    description: "Bulk orders made easy",
    gradient: "from-orange-500 to-amber-600",
    bgGlow: "bg-orange-500/20",
  },
  {
    icon: Tags,
    title: "Offers Zone",
    description: "Best deals curated for you",
    gradient: "from-red-500 to-rose-600",
    bgGlow: "bg-red-500/20",
  },
  {
    icon: Train,
    title: "Food on Train",
    description: "Order on the go",
    gradient: "from-teal-500 to-cyan-600",
    bgGlow: "bg-teal-500/20",
  },
  {
    icon: Crown,
    title: "Gourmet",
    description: "Premium dining experience",
    gradient: "from-yellow-500 to-orange-600",
    bgGlow: "bg-yellow-500/20",
  },
  {
    icon: Gift,
    title: "Gift Cards",
    description: "Share the joy of food",
    gradient: "from-indigo-500 to-purple-600",
    bgGlow: "bg-indigo-500/20",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="relative py-24 bg-zomato-darker overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-zomato-purple/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What's waiting for you
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore features designed to make your food ordering experience delightful
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-white/20 cursor-pointer overflow-hidden"
            >
              {/* Glow effect */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 ${feature.bgGlow} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-white font-semibold text-lg mb-1 relative">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm relative">
                {feature.description}
              </p>
              
              {/* Arrow indicator */}
              <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
