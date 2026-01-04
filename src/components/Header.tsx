import { Phone, MessageCircle, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };
  return <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="h-20 flex-row flex items-center justify-between py-0 px-[20px] mt-[27px] ml-[29px] pt-0 pl-0 pb-0 pr-0 mb-0 mx-[13px] my-0">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="المهند للسيارات" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover-gold font-medium transition-colors">
              الرئيسية
            </button>
            <button onClick={() => scrollToSection("vehicles")} className="text-foreground hover-gold font-medium transition-colors">
              السيارات
            </button>
            <button onClick={() => scrollToSection("why-us")} className="text-foreground hover-gold font-medium transition-colors">
              لماذا نحن
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover-gold font-medium transition-colors">
              تواصل معنا
            </button>
          </nav>

          {/* Contact Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+962797055388" className="flex items-center gap-2 text-foreground hover-gold transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm" dir="ltr">+962 797 055 388</span>
            </a>
            <a href="https://wa.me/962797055388" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold hover:bg-primary/90 transition-all animate-pulse-glow">
              <MessageCircle className="w-4 h-4" />
              <span>واتساب</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-foreground p-2">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="lg:hidden absolute top-20 left-0 right-0 bg-card border-t border-border animate-fade-in">
            <nav className="flex flex-col p-4 gap-4">
              <button onClick={() => scrollToSection("home")} className="text-foreground hover-gold font-medium py-2 text-right">
                الرئيسية
              </button>
              <button onClick={() => scrollToSection("vehicles")} className="text-foreground hover-gold font-medium py-2 text-right">
                السيارات
              </button>
              <button onClick={() => scrollToSection("why-us")} className="text-foreground hover-gold font-medium py-2 text-right">
                لماذا نحن
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-foreground hover-gold font-medium py-2 text-right">
                تواصل معنا
              </button>
              <div className="border-t border-border pt-4 flex flex-col gap-3">
                <a href="tel:+962797055388" className="flex items-center gap-2 text-foreground">
                  <Phone className="w-4 h-4" />
                  <span dir="ltr">+962 797 055 388</span>
                </a>
                <a href="https://wa.me/962797055388" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-md font-semibold">
                  <MessageCircle className="w-5 h-5" />
                  <span>تواصل عبر واتساب</span>
                </a>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;