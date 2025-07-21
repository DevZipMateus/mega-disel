
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Wrench, Settings, Truck, Filter, Droplet, ShieldCheck } from 'lucide-react';

const MegaDieselServices = () => {
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

  const services = [
    {
      icon: Wrench,
      title: "Reformas de Motores",
      description: "Reforma completa de motores diesel com peças de qualidade e mão de obra especializada.",
      features: ["Retífica", "Substituição de peças", "Testes de qualidade"]
    },
    {
      icon: Settings,
      title: "Sistema de Injeção",
      description: "Peças e serviços para sistemas de injeção eletrônica e mecânica.",
      features: ["Bicos injetores", "Bombas de combustível", "Sensores"]
    },
    {
      icon: Truck,
      title: "Suspensão",
      description: "Componentes de suspensão para veículos pesados e linha leve.",
      features: ["Amortecedores", "Molas", "Buchas e componentes"]
    },
    {
      icon: ShieldCheck,
      title: "Sistemas de Freios",
      description: "Peças para sistemas de freio com segurança e qualidade garantida.",
      features: ["Pastilhas e lonas", "Discos e tambores", "Componentes hidráulicos"]
    },
    {
      icon: Filter,
      title: "Filtros",
      description: "Linha completa de filtros para todos os tipos de veículos diesel.",
      features: ["Filtros de ar", "Filtros de óleo", "Filtros de combustível"]
    },
    {
      icon: Droplet,
      title: "Lubrificantes",
      description: "Óleos e lubrificantes de qualidade premium para máximo desempenho.",
      features: ["Óleos de motor", "Óleos hidráulicos", "Graxas especiais"]
    }
  ];

  return (
    <section ref={sectionRef} id="servicos" className="py-16 lg:py-24 bg-white">
      <div className="section-container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16" 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            Nossos <span className="text-yellow-500">Serviços</span>
          </h2>
          <p className="section-subtitle">
            Tudo, exatamente tudo que você precisar, vai encontrar na MEGA DIESEL AUTOPEÇAS.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-yellow-500" />
              </div>
              
              <h3 className="text-xl font-bold text-black mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-700 mb-4">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-black rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Precisa de <span className="text-yellow-500">Autopeças</span>?
            </h3>
            <p className="text-lg mb-6">
              Entre em contato conosco e encontre exatamente o que você precisa!
            </p>
            <a 
              href="https://wa.me/5551984082546?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20autopeças."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300"
            >
              Falar com Especialista
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MegaDieselServices;
