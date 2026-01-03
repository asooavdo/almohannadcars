import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-right">
            <img src={logo} alt="المهند للسيارات" className="h-16 w-auto mx-auto md:mx-0 md:mr-0 mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              تشكيلة واسعة من السيارات بأفضل الأسعار. خبرة، ثقة، واختيار ذكي لمن يبحث عن القيمة الحقيقية.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-bold text-foreground mb-4">روابط سريعة</h4>
            <nav className="flex flex-col gap-2">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">الرئيسية</a>
              <a href="#vehicles" className="text-muted-foreground hover:text-primary transition-colors">السيارات</a>
              <a href="#why-us" className="text-muted-foreground hover:text-primary transition-colors">لماذا نحن</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">تواصل معنا</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-foreground mb-4">تواصل معنا</h4>
            <div className="space-y-3">
              <a 
                href="tel:+962797055388"
                className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span dir="ltr">+962 797 055 388</span>
              </a>
              <a 
                href="mailto:loumazi_mohannad83@yahoo.com"
                className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span dir="ltr" className="text-sm">loumazi_mohannad83@yahoo.com</span>
              </a>
              <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">عمّان - المنطقة الحرة الزرقاء</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} المهند لتجارة السيارات. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
