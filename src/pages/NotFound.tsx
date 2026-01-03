import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, MessageCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">الصفحة غير موجودة</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-all"
          >
            <Home className="w-5 h-5" />
            <span>العودة للرئيسية</span>
          </Link>
          <a 
            href="https://wa.me/962797055388"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-md font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>تواصل معنا</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
