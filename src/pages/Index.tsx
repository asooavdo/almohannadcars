import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VehiclesSection from "@/components/VehiclesSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>المهند لتجارة السيارات | Almohannad Cars - سيارات فاخرة في عمّان</title>
        <meta name="description" content="المهند لتجارة السيارات - تشكيلة واسعة من السيارات الفاخرة بأفضل الأسعار في الأردن. خبرة تزيد عن 15 عاماً في سوق السيارات. BMW، Mercedes، Range Rover، Porsche والمزيد." />
        <meta name="keywords" content="سيارات للبيع عمان, سيارات فاخرة الأردن, المهند للسيارات, Almohannad Cars, معرض سيارات عمان, بي ام دبليو الأردن, مرسيدس عمان" />
        <meta property="og:title" content="المهند لتجارة السيارات | Almohannad Cars" />
        <meta property="og:description" content="تشكيلة واسعة من السيارات الفاخرة بأفضل الأسعار. خبرة، ثقة، واختيار ذكي لمن يبحث عن القيمة الحقيقية." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://almohannadcars.com" />
        <html lang="ar" dir="rtl" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <VehiclesSection />
          <WhyUsSection />
          <ContactSection />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default Index;
