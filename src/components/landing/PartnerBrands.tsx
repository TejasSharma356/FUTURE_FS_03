import { ExternalLink } from "lucide-react";

const partners = [
  {
    name: "zomato",
    tagline: "Discover the best food & drinks",
    gradient: "from-red-600 to-rose-500",
    textColor: "text-white",
    isItalic: true,
  },
  {
    name: "blinkit",
    tagline: "Groceries in 10 minutes",
    gradient: "from-yellow-400 to-amber-500",
    textColor: "text-black",
    isItalic: false,
  },
  {
    name: "district",
    tagline: "Going-out, made easy",
    gradient: "from-violet-600 to-purple-500",
    textColor: "text-white",
    isItalic: false,
  },
  {
    name: "hyperpure",
    tagline: "Fresh ingredients for restaurants",
    gradient: "from-emerald-500 to-teal-500",
    textColor: "text-white",
    isItalic: false,
  },
];

const PartnerBrands = () => {
  return (
    <section className="relative py-24 bg-zomato-dark overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-white/70 text-sm font-medium mb-4">
            Eternal
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powering India's Changing Lifestyles
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A family of apps designed to transform how you live, eat, and explore
          </p>
        </div>
        
        {/* Partner Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <a
              key={index}
              href="#"
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              {/* Card background with gradient */}
              <div className={`relative bg-gradient-to-br ${partner.gradient} p-8 h-56 flex flex-col justify-between`}>
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-black/10 rounded-full" />
                
                {/* Brand name */}
                <h3 className={`text-3xl font-bold ${partner.textColor} ${partner.isItalic ? 'italic' : ''} relative z-10`}>
                  {partner.name}
                </h3>
                
                {/* Tagline and link */}
                <div className="relative z-10">
                  <p className={`${partner.textColor} opacity-80 text-sm mb-3`}>
                    {partner.tagline}
                  </p>
                  <div className={`flex items-center gap-2 ${partner.textColor} text-sm font-medium group-hover:gap-3 transition-all duration-300`}>
                    <span>Check it out</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            </a>
          ))}
        </div>
        
        {/* Scrolling logos strip */}
        <div className="mt-20 overflow-hidden">
          <div className="flex animate-marquee">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-16 px-8">
                {partners.map((partner, index) => (
                  <span
                    key={`${setIndex}-${index}`}
                    className={`text-4xl font-bold text-white/20 whitespace-nowrap ${partner.isItalic ? 'italic' : ''}`}
                  >
                    {partner.name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBrands;
