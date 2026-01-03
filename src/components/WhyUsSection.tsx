import { Shield, Car, BadgeDollarSign, Handshake, Award, Clock } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => (
  <div 
    className="group relative luxury-card p-8 text-center hover-lift opacity-0 animate-fade-up"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {/* Icon */}
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-6 group-hover:bg-primary/20 transition-colors">
      <div className="text-primary">
        {icon}
      </div>
    </div>

    {/* Content */}
    <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>

    {/* Decorative line */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 transition-all duration-500" />
  </div>
);

const features = [
  {
    icon: <Shield className="w-7 h-7" />,
    title: "الثقة والمصداقية",
    description: "سمعة تمتد لأكثر من 15 عاماً في سوق السيارات الأردني. نضع ثقتكم في مقدمة أولوياتنا"
  },
  {
    icon: <Car className="w-7 h-7" />,
    title: "تنوع السيارات",
    description: "مجموعة واسعة من أفخم الماركات العالمية. سيارات جديدة ومستعملة بحالة ممتازة"
  },
  {
    icon: <BadgeDollarSign className="w-7 h-7" />,
    title: "أسعار تنافسية",
    description: "أسعار مدروسة تناسب جميع الميزانيات مع ضمان أفضل قيمة مقابل المال"
  },
  {
    icon: <Handshake className="w-7 h-7" />,
    title: "خدمة شخصية",
    description: "فريق متخصص يرافقكم من لحظة الاختيار حتى استلام مفاتيح سيارتكم"
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: "ضمان الجودة",
    description: "جميع سياراتنا تخضع لفحص فني دقيق وشامل قبل عرضها للبيع"
  },
  {
    icon: <Clock className="w-7 h-7" />,
    title: "إجراءات سريعة",
    description: "معاملات سلسة وسريعة. نسهل عليكم إجراءات الشراء والتسجيل"
  }
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider mb-3">
            ما يميزنا
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            لماذا <span className="gold-gradient-text">المهند للسيارات</span>؟
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نقدم تجربة استثنائية تجمع بين الخبرة الطويلة والخدمة المتميزة لنضمن لكم أفضل صفقة
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 luxury-card">
            <div className="text-right">
              <p className="text-foreground font-bold text-lg">هل أنت مستعد لامتلاك سيارة أحلامك؟</p>
              <p className="text-muted-foreground text-sm">تواصل معنا الآن واحصل على أفضل العروض</p>
            </div>
            <a 
              href="https://wa.me/962797055388"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-bold hover:bg-primary/90 transition-all whitespace-nowrap"
            >
              <span>ابدأ الآن</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
