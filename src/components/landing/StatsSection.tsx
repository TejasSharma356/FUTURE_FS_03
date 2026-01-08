import { Store, MapPin, Package } from "lucide-react";

const stats = [
  {
    icon: Store,
    value: "3,00,000+",
    label: "Restaurants",
    color: "text-zomato-orange",
    bgColor: "bg-zomato-orange/10",
  },
  {
    icon: MapPin,
    value: "800+",
    label: "Cities",
    color: "text-zomato-green",
    bgColor: "bg-zomato-green/10",
  },
  {
    icon: Package,
    value: "3 billion+",
    label: "Orders delivered",
    color: "text-zomato-blue",
    bgColor: "bg-zomato-blue/10",
  },
];

const StatsSection = () => {
  return (
    <section className="relative py-24 bg-zomato-dark overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-zomato-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Better food for more people
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're on a mission to elevate the quality of food for everyone, everywhere.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-white/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${stat.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              
              {/* Value */}
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </h3>
              
              {/* Label */}
              <p className="text-muted-foreground text-lg">
                {stat.label}
              </p>
              
              {/* Decorative gradient line */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 ${stat.color.replace('text-', 'bg-')} rounded-full group-hover:w-1/2 transition-all duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
