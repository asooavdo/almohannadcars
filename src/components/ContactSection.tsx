import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider mb-3">
            تواصل معنا
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            نحن <span className="gold-gradient-text">بانتظارك</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            فريقنا جاهز للإجابة على جميع استفساراتك ومساعدتك في اختيار سيارتك المثالية
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <a 
                href="tel:+962797055388"
                className="luxury-card p-6 flex items-start gap-4 hover-lift group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">اتصل بنا</h4>
                  <p className="text-muted-foreground text-sm" dir="ltr">+962 797 055 388</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/962797055388"
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-card p-6 flex items-start gap-4 hover-lift group border-primary/30"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">واتساب</h4>
                  <p className="text-muted-foreground text-sm">تواصل فوري</p>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:loumazi_mohannad83@yahoo.com"
                className="luxury-card p-6 flex items-start gap-4 hover-lift group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">البريد الإلكتروني</h4>
                  <p className="text-muted-foreground text-sm break-all" dir="ltr">loumazi_mohannad83@yahoo.com</p>
                </div>
              </a>

              {/* Hours */}
              <div className="luxury-card p-6 flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">ساعات العمل</h4>
                  <p className="text-muted-foreground text-sm">السبت - الخميس: 9ص - 8م</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="luxury-card p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">موقعنا</h4>
                  <p className="text-muted-foreground">الأردن – عمّان</p>
                  <p className="text-muted-foreground">المنطقة الحرة الزرقاء / عمّان وادي صقرة</p>
                </div>
              </div>
            </div>

            {/* Main CTA */}
            <a 
              href="https://wa.me/962797055388"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-primary text-primary-foreground py-5 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-gold hover:shadow-[0_0_50px_hsl(43_65%_55%_/_0.4)]"
            >
              <MessageCircle className="w-6 h-6" />
              <span>تواصل معنا عبر واتساب</span>
            </a>
          </div>

          {/* Map */}
          <div className="luxury-card overflow-hidden h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108268.29655085476!2d35.84367!3d31.9539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca0f47f24d783%3A0x39e87ae42d05c37!2sAmman%2C%20Jordan!5e0!3m2!1sen!2s!4v1704067200000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع المهند للسيارات"
              className="min-h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
