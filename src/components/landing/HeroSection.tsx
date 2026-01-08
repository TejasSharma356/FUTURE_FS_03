import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-zomato-darker overflow-hidden flex items-center justify-center">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Decorative food elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-zomato-red/10 blur-3xl animate-float" />
      <div className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-zomato-orange/10 blur-3xl animate-float-delayed" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-zomato-gold/10 blur-2xl animate-float" />
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Logo */}
        <h1 className="text-6xl md:text-8xl font-bold italic text-primary mb-6 tracking-tight">
          zomato
        </h1>
        
        {/* Tagline */}
        <p className="text-white text-xl md:text-2xl font-medium mb-4">
          India's #1 Food Delivery App
        </p>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Discover the best food & drinks in your city. Order online for quick delivery!
        </p>
        
        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href="#" 
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-6 py-3 transition-all duration-300 group"
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
              <path d="M17.523 2.014a.763.763 0 0 0-.267.043c-.2.067-.41.22-.635.415-.625.55-1.32 1.487-1.875 2.57-.555 1.085-.98 2.35-1.045 3.48a.764.764 0 0 0 .683.82c1.14.087 2.315-.273 3.33-.86 1.015-.587 1.91-1.403 2.377-2.368a.764.764 0 0 0-.29-.95c-.83-.5-1.67-.87-2.278-1.15zm-5.52 6.462c-1.667 0-2.99.547-3.988 1.07-.5.26-.895.513-1.2.71-.152.098-.28.18-.39.248l-.11.07-.042.028-.015.01-.005.003-.002.002-.001 0 .428.642-.428-.642a.764.764 0 0 0-.305.935l4.5 11.5a.764.764 0 0 0 1.418.002l4.5-11.5a.764.764 0 0 0-.305-.937l-.001-.001-.002-.001-.005-.003-.015-.01-.042-.028-.11-.07c-.11-.068-.238-.15-.39-.248-.305-.197-.7-.45-1.2-.71-.998-.523-2.32-1.07-3.987-1.07z"/>
            </svg>
            <div className="text-left">
              <p className="text-white/70 text-xs">Download on the</p>
              <p className="text-white font-semibold text-lg">App Store</p>
            </div>
          </a>
          
          <a 
            href="#" 
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-6 py-3 transition-all duration-300 group"
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.807 1.626L15.206 12l2.492-2.49zM5.864 2.658L16.8 9.99l-2.302 2.302-8.635-8.635z"/>
            </svg>
            <div className="text-left">
              <p className="text-white/70 text-xs">Get it on</p>
              <p className="text-white font-semibold text-lg">Google Play</p>
            </div>
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll-hint">
        <span className="text-white/50 text-sm">Scroll down</span>
        <ChevronDown className="w-6 h-6 text-white/50" />
      </div>
    </section>
  );
};

export default HeroSection;
