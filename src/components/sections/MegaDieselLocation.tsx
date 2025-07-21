
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Car, Navigation } from 'lucide-react';

const MegaDieselLocation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1
    });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="localizacao" className="py-16 lg:py-24 bg-gray-50">
      <div className="section-container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16" 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            Nossa <span className="text-yellow-500">Localização</span>
          </h2>
          <p className="section-subtitle">
            Estamos estrategicamente localizados na zona norte de Porto Alegre, local de fácil acesso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <MapPin className="h-8 w-8 text-yellow-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Endereço</h3>
                  <p className="text-gray-700">
                    RUA HERMETO BERMUDEZ, 75<br />
                    JD LEOPOLDINA<br />
                    CEP 91250-040<br />
                    PORTO ALEGRE - RS
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <Clock className="h-8 w-8 text-yellow-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Atendimento</h3>
                  <p className="text-gray-700">
                    Atendimento Digital 24/7<br />
                    WhatsApp, Redes Sociais e Mercado Livre
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <Car className="h-8 w-8 text-yellow-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Entrega</h3>
                  <p className="text-gray-700">
                    • Entrega pessoal (dependendo da região)<br />
                    • Grandes transportadoras<br />
                    • Condições a combinar
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black rounded-lg p-6 text-white">
              <h3 className="text-xl font-bold text-yellow-500 mb-4">
                Fácil Acesso
              </h3>
              <p className="mb-4">
                Nossa localização na zona norte de Porto Alegre oferece fácil acesso 
                para clientes de toda a região metropolitana.
              </p>
              <a 
                href="https://share.google/PwfLuGWDUVX67I2hh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-yellow-500 hover:text-yellow-400 transition-colors duration-300"
              >
                <Navigation className="h-5 w-5 mr-2" />
                Ver Rota no Google Maps
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white rounded-lg p-4 shadow-lg h-full min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.123456789!2d-51.123456789!3d-30.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA3JzI0LjQiUyA1McKwMDcnMjQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '8px' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização MEGA DIESEL AUTOPEÇAS"
                className="min-h-[350px]"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MegaDieselLocation;
