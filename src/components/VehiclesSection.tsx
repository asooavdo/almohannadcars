import { MessageCircle, Eye } from "lucide-react";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";
import car5 from "@/assets/car-5.jpg";
import car6 from "@/assets/car-6.jpg";
interface Vehicle {
  id: number;
  name: string;
  nameEn: string;
  year: string;
  price: string;
  image: string;
  features: string[];
}
const vehicles: Vehicle[] = [{
  id: 1,
  name: "بي ام دبليو الفئة السابعة",
  nameEn: "BMW 7 Series",
  year: "2024",
  price: "اتصل للسعر",
  image: car1,
  features: ["فل كامل", "جلد طبيعي", "بانوراما"]
}, {
  id: 2,
  name: "رينج روفر سبورت",
  nameEn: "Range Rover Sport",
  year: "2023",
  price: "اتصل للسعر",
  image: car2,
  features: ["V8", "فل كامل", "نظام ملاحة"]
}, {
  id: 3,
  name: "بورش كايين",
  nameEn: "Porsche Cayenne",
  year: "2024",
  price: "اتصل للسعر",
  image: car3,
  features: ["توربو", "فل كامل", "كاميرا 360"]
}, {
  id: 4,
  name: "مرسيدس S-Class",
  nameEn: "Mercedes S-Class",
  year: "2024",
  price: "اتصل للسعر",
  image: car4,
  features: ["AMG", "فل كامل", "مساج"]
}, {
  id: 5,
  name: "أودي RS7",
  nameEn: "Audi RS7",
  year: "2024",
  price: "اتصل للسعر",
  image: car5,
  features: ["سبورت", "فل كامل", "كواترو"]
}, {
  id: 6,
  name: "لكزس LC 500",
  nameEn: "Lexus LC 500",
  year: "2023",
  price: "اتصل للسعر",
  image: car6,
  features: ["V8", "فل كامل", "رياضية"]
}];
const VehicleCard = ({
  vehicle,
  index
}: {
  vehicle: Vehicle;
  index: number;
}) => {
  const whatsappMessage = encodeURIComponent(`مرحباً، أنا مهتم بسيارة ${vehicle.name} ${vehicle.year}. أرجو التواصل معي للمزيد من التفاصيل.`);
  return <div className="group luxury-card overflow-hidden hover-lift opacity-0 animate-fade-up" style={{
    animationDelay: `${index * 100}ms`
  }}>
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
        
        {/* Year Badge */}
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-bold">
          {vehicle.year}
        </div>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href={`https://wa.me/962797055388?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <Eye className="w-5 h-5" />
            <span>استفسر الآن</span>
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-foreground mb-1">{vehicle.name}</h3>
          <p className="text-sm text-muted-foreground font-display">{vehicle.nameEn}</p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-5">
          {vehicle.features.map((feature, i) => <span key={i} className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
              {feature}
            </span>)}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <span className="text-sm text-muted-foreground">السعر</span>
            <p className="text-lg font-bold text-primary">{vehicle.price}</p>
          </div>
          <a href={`https://wa.me/962797055388?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground px-4 py-2 rounded-md transition-all duration-300">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-semibold">استفسر</span>
          </a>
        </div>
      </div>
    </div>;
};
const VehiclesSection = () => {
  return <section id="vehicles" className="bg-gradient-to-b from-background via-card to-background mx-0 pb-0 pr-0 py-0 my-[13px] mb-0 mt-[11px]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold tracking-wider mb-3 text-xl">
            تشكيلتنا المميزة
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            سيارات <span className="gold-gradient-text">استثنائية</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            مجموعة مختارة بعناية من أفخم السيارات العالمية، جاهزة للتسليم الفوري
          </p>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />)}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a href="https://wa.me/962797055388?text=مرحباً، أرغب في الاطلاع على جميع السيارات المتوفرة لديكم" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border border-primary text-primary px-8 py-4 rounded-md font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            <MessageCircle className="w-5 h-5" />
            <span>استعرض جميع السيارات</span>
          </a>
        </div>
      </div>
    </section>;
};
export default VehiclesSection;