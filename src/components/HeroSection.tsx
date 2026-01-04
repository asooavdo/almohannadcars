import { MessageCircle, ChevronDown } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
const HeroSection = () => {
  const scrollToVehicles = () => {
    const element = document.getElementById("vehicles");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroCar} alt="سيارة فاخرة" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-5 py-2 mb-[33px] mt-[11px]">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-sm font-medium">VIP · فخامة · تميّز</span>
        </div>

        {/* Main Headline */}
        <h1 className="animate-fade-up text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{
        animationDelay: '100ms'
      }}>
          <span className="block text-foreground">المهند لتجارة السيارات</span>
          <span className="block gold-gradient-text mt-2">حيث الفخامة تلتقي بالثقة</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed" style={{
        animationDelay: '200ms'
      }}>
          تشكيلة واسعة من السيارات الفاخرة بأفضل الأسعار. خبرة، ثقة، واختيار ذكي لمن يبحث عن القيمة الحقيقية
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4" style={{
        animationDelay: '300ms'
      }}>
          <a href="https://wa.me/962797055388" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-md font-bold text-lg hover:bg-primary/90 transition-all shadow-gold hover:shadow-[0_0_50px_hsl(43_65%_55%_/_0.4)]">
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span>تواصل معنا الآن</span>
          </a>
          <button onClick={scrollToVehicles} className="flex items-center gap-2 border border-foreground/20 text-foreground px-8 py-4 rounded-md font-semibold text-lg hover:border-primary hover:text-primary transition-all">
            <span>استعرض السيارات</span>
          </button>
        </div>

        {/* Stats */}
        <div style={{
        animationDelay: '400ms'
      }} className="animate-fade-up grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto border-t border-border/30 pt-0 ml-[83px] mr-[92px] py-0 mt-0 mb-0">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">+366</div>
            <div className="text-sm text-muted-foreground mt-1">سيارة تم بيعها</div>
          </div>
          <div className="text-center bg-black/0">
            <div className="text-3xl md:text-4xl font-bold text-primary">+18</div>
            <div className="text-sm text-muted-foreground mt-1">سنة خبرة</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">​98%</div>
            <div className="text-sm text-muted-foreground mt-1">رضا العملاء</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      
    </section>;
};
export default HeroSection;