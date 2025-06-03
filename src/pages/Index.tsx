
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-blue-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CreditCard className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-800">TarjetaControl</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-600 hover:text-blue-600 transition-colors">Inicio</a>
              <a href="#servicios" className="text-gray-600 hover:text-blue-600 transition-colors">Servicios</a>
              <a href="#precios" className="text-gray-600 hover:text-blue-600 transition-colors">Precios</a>
              <a href="#contacto" className="text-gray-600 hover:text-blue-600 transition-colors">Contacto</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Comenzar Ahora
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">
            🚀 Revoluciona tu negocio
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-blue-600 animate-fade-in">
            Controla Todas Tus Ventas con Tarjetas
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Nuestro servicio informa diariamente las liquidaciones, cobranzas, rechazos y contracargos, ayudando al comercio a poseer información exacta y veraz
          </p>
          <div className="flex justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4"
              onClick={handleWhatsAppClick}
            >
              Probar el Servicio
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-6 bg-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Servicios profesionales especializados en el control y gestión de tarjetas de crédito y débito
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-blue-200 bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Control Diario de Cobranzas</h3>
                <p className="text-gray-600">
                  Monitoreo diario de todas las liquidaciones y cobranzas de tus ventas con tarjetas
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-blue-200 bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Control Periódico de Cupones</h3>
                <p className="text-gray-600">
                  Verificación y seguimiento periódico de todos los cupones procesados
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-blue-200 bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Configuración de Reportes a Medida</h3>
                <p className="text-gray-600">
                  Reportes personalizados según las necesidades específicas de tu negocio
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-blue-200 bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <Archive className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Guarda de Cupones</h3>
                <p className="text-gray-600">
                  Archivo seguro y organizado de todos los cupones y documentación
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-blue-200 bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <AlertTriangle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Gestión de Reclamos e Incidentes</h3>
                <p className="text-gray-600">
                  Manejo profesional de reclamos ante las emisoras de tarjetas de crédito
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-blue-200 bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Asesoramiento AHORA 3/6/12/18</h3>
                <p className="text-gray-600">
                  Consultoría especializada en temas relacionados con tarjetas de crédito
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Precios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Planes transparentes y accesibles para tu negocio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-white border-2 border-blue-200">
              <CardContent className="p-0 text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">1 Terminal</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-blue-600">$10,000</span>
                  <span className="text-gray-600 ml-2">ARS/mes</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span>Todas las tarjetas de débito y crédito</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span>Control diario de cobranzas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span>Reportes personalizados</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span>Soporte especializado</span>
                  </li>
                </ul>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={handleWhatsAppClick}
                >
                  Empezar Ahora
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 bg-blue-50 border-2 border-blue-300">
              <CardContent className="p-0 text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Múltiples Terminales</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-blue-600">Presupuesto</span>
                  <span className="text-gray-600 ml-2">personalizado</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span>Todo lo del plan básico</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span>Gestión centralizada</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span>Reportes consolidados</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span>Descuentos por volumen</span>
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
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
      <section className="py-20 px-6 bg-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Miles de negocios ya confían en TarjetaControl para gestionar sus ventas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border-blue-200">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-blue-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "TarjetaControl nos ayudó a aumentar nuestras ventas un 30% en los primeros 3 meses. La plataforma es increíblemente fácil de usar."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">MC</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">María Contreras</div>
                    <div className="text-gray-500">Directora de Ventas, RetailMax</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white border-blue-200">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-blue-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "La seguridad y los reportes en tiempo real son exactamente lo que necesitábamos. Excelente soporte técnico."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">JR</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">Jorge Ramírez</div>
                    <div className="text-gray-500">CEO, TechSolutions</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white border-blue-200">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-blue-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Implementación súper rápida y resultados inmediatos. No podríamos operar sin TarjetaControl ahora."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">AS</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">Ana Sánchez</div>
                    <div className="text-gray-500">Gerente, Café Central</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para Transformar tu Negocio?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Únete a miles de empresarios que ya optimizaron sus ventas con TarjetaControl
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              Comenzar Prueba Gratuita
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              Hablar con un Experto
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-white text-gray-800 py-16 px-6 border-t border-blue-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <CreditCard className="h-8 w-8 text-blue-600" />
                <span className="text-2xl font-bold">TarjetaControl</span>
              </div>
              <p className="text-gray-600 mb-4">
                La plataforma líder para el control y análisis de ventas con tarjetas de crédito y débito.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Producto</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Características</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Precios</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Integraciones</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Soporte</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Centro de Ayuda</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Documentación</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Estado del Servicio</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Contacto</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-blue-600" />
                  <span>+54 9 11 4938-3569</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-blue-600" />
                  <span>info@tarjetacontrol.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-blue-600" />
                  <span>Ciudad de México, México</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-100 pt-8 text-center text-gray-600">
            <p>&copy; 2024 TarjetaControl. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
