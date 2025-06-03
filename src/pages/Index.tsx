
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
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Star
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CreditCard className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-800">TarjetaControl</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-600 hover:text-blue-600 transition-colors">Inicio</a>
              <a href="#beneficios" className="text-gray-600 hover:text-blue-600 transition-colors">Beneficios</a>
              <a href="#como-funciona" className="text-gray-600 hover:text-blue-600 transition-colors">Cómo Funciona</a>
              <a href="#contacto" className="text-gray-600 hover:text-blue-600 transition-colors">Contacto</a>
            </nav>
            <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent animate-fade-in">
            Controla Todas Tus Ventas con Tarjetas
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            La plataforma más completa para gestionar y analizar todas tus transacciones con tarjetas de crédito y débito en tiempo real
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-4">
              Empezar Gratis
            </Button>
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
              Ver Demo
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Sin comisiones ocultas
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Configuración en 5 minutos
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Soporte 24/7
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="hover-scale">
              <div className="text-4xl font-bold text-blue-600 mb-2">+10,000</div>
              <div className="text-gray-600">Negocios Activos</div>
            </div>
            <div className="hover-scale">
              <div className="text-4xl font-bold text-green-600 mb-2">$2.5M</div>
              <div className="text-gray-600">Procesados Mensualmente</div>
            </div>
            <div className="hover-scale">
              <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600">Tiempo de Actividad</div>
            </div>
            <div className="hover-scale">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              ¿Por Qué Elegir TarjetaControl?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optimiza tu negocio con herramientas profesionales diseñadas para maximizar tus ventas y minimizar riesgos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-all duration-300 hover-scale border-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Análisis en Tiempo Real</h3>
                <p className="text-gray-600">
                  Monitorea todas tus transacciones al instante con dashboards intuitivos y reportes detallados
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 hover-scale border-0 bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Máxima Seguridad</h3>
                <p className="text-gray-600">
                  Protección bancaria con encriptación de datos y cumplimiento de estándares PCI DSS
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 hover-scale border-0 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Configuración Rápida</h3>
                <p className="text-gray-600">
                  Comienza a operar en menos de 5 minutos con nuestra integración automatizada
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 hover-scale border-0 bg-gradient-to-br from-orange-50 to-orange-100">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Aumenta tus Ventas</h3>
                <p className="text-gray-600">
                  Optimiza tu tasa de conversión con herramientas inteligentes de análisis de ventas
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 hover-scale border-0 bg-gradient-to-br from-teal-50 to-teal-100">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Gestión de Equipos</h3>
                <p className="text-gray-600">
                  Administra permisos y accesos para tu equipo con roles personalizables
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 hover-scale border-0 bg-gradient-to-br from-pink-50 to-pink-100">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mb-6">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Múltiples Procesadores</h3>
                <p className="text-gray-600">
                  Conecta con todos los principales procesadores de pago en una sola plataforma
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="como-funciona" className="py-20 px-6 bg-gradient-to-r from-blue-900 to-green-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Cómo Funciona
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Tres simples pasos para revolucionar el control de tus ventas con tarjetas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Regístrate</h3>
              <p className="opacity-90">
                Crea tu cuenta gratuita y conecta tus procesadores de pago en minutos
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Configura</h3>
              <p className="opacity-90">
                Personaliza tus dashboards y alertas según las necesidades de tu negocio
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Controla</h3>
              <p className="opacity-90">
                Monitorea y optimiza todas tus ventas desde una plataforma centralizada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-50">
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
            <Card className="p-8 bg-white border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
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

            <Card className="p-8 bg-white border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "La seguridad y los reportes en tiempo real son exactamente lo que necesitábamos. Excelente soporte técnico."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">JR</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">Jorge Ramírez</div>
                    <div className="text-gray-500">CEO, TechSolutions</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Implementación súper rápida y resultados inmediatos. No podríamos operar sin TarjetaControl ahora."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
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
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-green-600 text-white">
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
      <footer id="contacto" className="bg-gray-900 text-white py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <CreditCard className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">TarjetaControl</span>
              </div>
              <p className="text-gray-400 mb-4">
                La plataforma líder para el control y análisis de ventas con tarjetas de crédito y débito.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Producto</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Características</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Precios</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integraciones</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Soporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Centro de Ayuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentación</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Estado del Servicio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Contacto</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>info@tarjetacontrol.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>Ciudad de México, México</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TarjetaControl. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
