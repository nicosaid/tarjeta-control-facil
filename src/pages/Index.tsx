
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard, 
  Shield, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  Users, 
  FileText,
  Phone,
  Mail,
  MapPin,
  Star,
  Archive,
  AlertTriangle,
  Settings
} from "lucide-react";

const Index = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5491149383569";
    const message = "Hola quiero probar el servicio de tarjeta control";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleContactClick = () => {
    const phoneNumber = "5491149383569";
    const message = "Hola necesito presupuesto para múltiples terminales";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-150 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-300 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400 rounded-square animate-pulse opacity-50"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-500 rounded-full animate-bounce animation-delay-1000 opacity-40"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-blue-600 rotate-45 animate-pulse animation-delay-3000 opacity-30"></div>
      </div>

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-blue-100">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/65f1c437-fb99-471f-a8c9-eef0dc3fb87c.png" 
                alt="TarjetaControl" 
                className="h-12 sm:h-14 md:h-16 hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-600 hover:text-blue-600 transition-colors relative group">
                Inicio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#servicios" className="text-gray-600 hover:text-blue-600 transition-colors relative group">
                Servicios
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#precios" className="text-gray-600 hover:text-blue-600 transition-colors relative group">
                Precios
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contacto" className="text-gray-600 hover:text-blue-600 transition-colors relative group">
                Contacto
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base px-4 sm:px-6"
              onClick={handleWhatsAppClick}
            >
              Comenzar Ahora
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-4 sm:mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100 text-sm sm:text-base animate-fade-in">
            🚀 Revoluciona tu negocio
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-blue-600 animate-fade-in leading-tight">
            Controla Todas Tus Ventas con Tarjetas
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4 animate-fade-in animation-delay-300">
            Nuestro servicio informa diariamente las liquidaciones, cobranzas, rechazos y contracargos, ayudando al comercio a poseer información exacta y veraz
          </p>
          <div className="flex justify-center mb-8 sm:mb-12 animate-fade-in animation-delay-600">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 sm:px-8 py-3 sm:py-4 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={handleWhatsAppClick}
            >
              Probar el Servicio
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-white relative">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-800 animate-fade-in">
              Servicios
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 animate-fade-in animation-delay-300">
              Servicios profesionales especializados en el control y gestión de tarjetas de crédito y débito
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-blue-200 bg-white transform hover:-translate-y-2 group">
              <CardContent className="p-0">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                  <BarChart3 className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Control Diario de Cobranzas</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Monitoreo diario de todas las liquidaciones y cobranzas de tus ventas con tarjetas
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-blue-200 bg-white transform hover:-translate-y-2 group">
              <CardContent className="p-0">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                  <Clock className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Control Periódico de Cupones</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Verificación y seguimiento periódico de todos los cupones procesados
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-blue-200 bg-white transform hover:-translate-y-2 group">
              <CardContent className="p-0">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                  <Settings className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Configuración de Reportes a Medida</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Reportes personalizados según las necesidades específicas de tu negocio
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-blue-200 bg-white transform hover:-translate-y-2 group">
              <CardContent className="p-0">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                  <Archive className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Guarda de Cupones</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Archivo seguro y organizado de todos los cupones y documentación
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-blue-200 bg-white transform hover:-translate-y-2 group">
              <CardContent className="p-0">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                  <AlertTriangle className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Gestión de Reclamos e Incidentes</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Manejo profesional de reclamos ante las emisoras de tarjetas de crédito
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-blue-200 bg-white transform hover:-translate-y-2 group">
              <CardContent className="p-0">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                  <Users className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Asesoramiento AHORA 3/6/12/18</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Consultoría especializada en temas relacionados con tarjetas de crédito
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-800 animate-fade-in">
              Precios
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 animate-fade-in animation-delay-300">
              Planes transparentes y accesibles para tu negocio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <Card className="p-6 sm:p-8 bg-white border-2 border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0 text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">1 Terminal</h3>
                <div className="mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">$10,000</span>
                  <span className="text-gray-600 ml-2 text-sm sm:text-base">ARS/mes</span>
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-left text-sm sm:text-base">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                    <span>Todas las tarjetas de débito y crédito</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                    <span>Control diario de cobranzas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                    <span>Reportes personalizados</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                    <span>Soporte especializado</span>
                  </li>
                </ul>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  onClick={handleWhatsAppClick}
                >
                  Empezar Ahora
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 sm:p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0 text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">Múltiples Terminales</h3>
                <div className="mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl font-bold text-blue-600">Presupuesto</span>
                  <span className="text-gray-600 ml-2 text-sm sm:text-base">personalizado</span>
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-left text-sm sm:text-base">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                    <span>Todo lo del plan básico</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                    <span>Gestión centralizada</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                    <span>Reportes consolidados</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                    <span>Descuentos por volumen</span>
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  onClick={handleContactClick}
                >
                  Contáctanos para Presupuesto
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-white relative">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-800 animate-fade-in">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 animate-fade-in animation-delay-300">
              Miles de negocios ya confían en TarjetaControl para gestionar sus ventas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="p-6 sm:p-8 bg-white border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 sm:h-5 w-4 sm:w-5 text-blue-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  "TarjetaControl nos ayudó a aumentar nuestras ventas un 30% en los primeros 3 meses. La plataforma es increíblemente fácil de usar."
                </p>
                <div className="flex items-center">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-white font-bold text-sm sm:text-base">MC</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-sm sm:text-base">María Contreras</div>
                    <div className="text-gray-500 text-xs sm:text-sm">Directora de Ventas, RetailMax</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 sm:p-8 bg-white border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 sm:h-5 w-4 sm:w-5 text-blue-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  "La seguridad y los reportes en tiempo real son exactamente lo que necesitábamos. Excelente soporte técnico."
                </p>
                <div className="flex items-center">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-white font-bold text-sm sm:text-base">JR</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-sm sm:text-base">Jorge Ramírez</div>
                    <div className="text-gray-500 text-xs sm:text-sm">CEO, TechSolutions</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 sm:p-8 bg-white border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 sm:h-5 w-4 sm:w-5 text-blue-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  "Implementación súper rápida y resultados inmediatos. No podríamos operar sin TarjetaControl ahora."
                </p>
                <div className="flex items-center">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-white font-bold text-sm sm:text-base">AS</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-sm sm:text-base">Ana Sánchez</div>
                    <div className="text-gray-500 text-xs sm:text-sm">Gerente, Café Central</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-800 opacity-20"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in">
            ¿Listo para Transformar tu Negocio?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto px-4 animate-fade-in animation-delay-300">
            Únete a miles de empresarios que ya optimizaron sus ventas con TarjetaControl
          </p>
          <div className="flex justify-center animate-fade-in animation-delay-600">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-6 sm:px-8 py-3 sm:py-4 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={handleWhatsAppClick}
            >
              Comenzar Ahora!
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-white text-gray-800 py-12 sm:py-16 px-4 sm:px-6 border-t border-blue-100 relative">
        <div className="container mx-auto">
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="space-y-2 sm:space-y-3 text-gray-600">
              <p className="text-sm sm:text-base">
                <Mail className="inline-block w-4 h-4 mr-2" />
                info@tarjetacontrol.com
              </p>
              <p className="text-sm sm:text-base">
                <Phone className="inline-block w-4 h-4 mr-2" />
                Teléfono: (011) 4938-3569
              </p>
            </div>
            
            <div className="pt-4 sm:pt-6 border-t border-blue-100">
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">&copy; TARJETACONTROL.COM</p>
              
              <div className="flex justify-center">
                <p className="text-xs sm:text-sm text-gray-500">
                  Hecho por <span className="font-semibold text-blue-600">ZENDA</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
