import { Smartphone, QrCode } from "lucide-react";

const DownloadCTA = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-zomato-darker to-zomato-dark overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Phone mockup decoration */}
          <div className="relative inline-block mb-12">
            <div className="w-24 h-44 bg-gradient-to-b from-white/20 to-white/5 rounded-3xl border border-white/20 flex items-center justify-center backdrop-blur-sm">
              <Smartphone className="w-12 h-12 text-white/50" />
            </div>
            {/* Floating elements around phone */}
            <div className="absolute -top-4 -left-8 w-16 h-16 bg-zomato-orange/20 rounded-2xl animate-float flex items-center justify-center">
              <span className="text-2xl">🍕</span>
            </div>
            <div className="absolute -top-2 -right-10 w-14 h-14 bg-zomato-green/20 rounded-2xl animate-float-delayed flex items-center justify-center">
              <span className="text-2xl">🍔</span>
            </div>
            <div className="absolute -bottom-4 -right-8 w-12 h-12 bg-primary/20 rounded-xl animate-float flex items-center justify-center">
              <span className="text-xl">🍜</span>
            </div>
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Download the app <span className="text-primary">now!</span>
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Get exclusive deals and track your orders in real-time. Available on iOS and Android.
          </p>
          
          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="#" 
              className="flex items-center gap-3 bg-white hover:bg-white/90 rounded-xl px-8 py-4 transition-all duration-300 group shadow-2xl shadow-white/20"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-black" fill="currentColor">
                <path d="M17.523 2.014a.763.763 0 0 0-.267.043c-.2.067-.41.22-.635.415-.625.55-1.32 1.487-1.875 2.57-.555 1.085-.98 2.35-1.045 3.48a.764.764 0 0 0 .683.82c1.14.087 2.315-.273 3.33-.86 1.015-.587 1.91-1.403 2.377-2.368a.764.764 0 0 0-.29-.95c-.83-.5-1.67-.87-2.278-1.15zm-5.52 6.462c-1.667 0-2.99.547-3.988 1.07-.5.26-.895.513-1.2.71-.152.098-.28.18-.39.248l-.11.07-.042.028-.015.01-.005.003-.002.002-.001 0 .428.642-.428-.642a.764.764 0 0 0-.305.935l4.5 11.5a.764.764 0 0 0 1.418.002l4.5-11.5a.764.764 0 0 0-.305-.937l-.001-.001-.002-.001-.005-.003-.015-.01-.042-.028-.11-.07c-.11-.068-.238-.15-.39-.248-.305-.197-.7-.45-1.2-.71-.998-.523-2.32-1.07-3.987-1.07z"/>
              </svg>
              <div className="text-left">
                <p className="text-black/60 text-xs">Download on the</p>
                <p className="text-black font-semibold text-lg">App Store</p>
              </div>
            </a>
            
            <a 
              href="#" 
              className="flex items-center gap-3 bg-white hover:bg-white/90 rounded-xl px-8 py-4 transition-all duration-300 group shadow-2xl shadow-white/20"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-black" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.807 1.626L15.206 12l2.492-2.49zM5.864 2.658L16.8 9.99l-2.302 2.302-8.635-8.635z"/>
              </svg>
              <div className="text-left">
                <p className="text-black/60 text-xs">Get it on</p>
                <p className="text-black font-semibold text-lg">Google Play</p>
              </div>
            </a>
          </div>
          
          {/* QR Code hint */}
          <div className="flex items-center justify-center gap-3 text-white/40">
            <QrCode className="w-5 h-5" />
            <span className="text-sm">Or scan QR code to download</span>
          </div>
        </div>
      </div>
      
      {/* Footer bar */}
      <div className="mt-24 border-t border-white/10 pt-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2024 Zomato Clone. Made for learning purposes.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Privacy</a>
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Terms</a>
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
