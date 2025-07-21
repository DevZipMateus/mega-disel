
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MegaDieselContact = () => {
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

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Atendimento rápido e direto",
      info: "(51) 98408-2546",
      action: "https://wa.me/5551984082546?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20autopeças.",
      color: "bg-green-500"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Envie sua consulta",
      info: "megadieseldistribuidora@gmail.com",
      action: "mailto:megadieseldistribuidora@gmail.com",
      color: "bg-blue-500"
    },
    {
      icon: Phone,
      title: "Telefone",
      description: "Ligue diretamente",
      info: "(51) 98408-2546",
      action: "tel:+5551984082546",
      color: "bg-yellow-500"
    }
  ];

  const socialMedia = [
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/megadieselpecas?igsh=NzJyZGk5aDg0ejA4",
      color: "bg-pink-500"
    },
    {
      icon: Facebook,
      name: "Facebook", 
      url: "https://www.facebook.com/share/19WUPPjhq1/",
      color: "bg-blue-600"
    }
  ];

  return (
    <section ref={sectionRef} id="contato" className="py-16 lg:py-24 bg-white">
      <div className="section-container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16" 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            Entre em <span className="text-yellow-500">Contato</span>
          </h2>
          <p className="section-subtitle">
            Estamos prontos para atender você. Escolha a forma de contato que preferir.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className={`${method.color} rounded-full w-12 h-12 flex items-center justify-center`}>
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-black">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-1">
                      {method.description}
                    </p>
                    <p className="text-black font-medium">
                      {method.info}
                    </p>
                  </div>
                  <a 
                    href={method.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-500 hover:text-yellow-600 transition-colors duration-300"
                  >
                    <Button variant="outline" size="sm">
                      Contatar
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-black rounded-lg p-6 text-white"
            >
              <div className="flex items-start space-x-4">
                <MapPin className="h-8 w-8 text-yellow-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-500 mb-2">
                    Nossa Localização
                  </h3>
                  <p className="mb-4">
                    RUA HERMETO BERMUDEZ, 75<br />
                    JD LEOPOLDINA - CEP 91250-040<br />
                    PORTO ALEGRE - RS
                  </p>
                  <a 
                    href="https://share.google/PwfLuGWDUVX67I2hh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-500 hover:text-yellow-400 transition-colors duration-300 underline"
                  >
                    Ver no Google Maps
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form & Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-8"
          >
            {/* WhatsApp CTA */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <MessageCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-black mb-4">
                Fale Conosco no WhatsApp
              </h3>
              <p className="text-gray-700 mb-6">
                Atendimento rápido e personalizado para suas necessidades em autopeças.
              </p>
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg">
                <a href="https://wa.me/5551984082546?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20autopeças." target="_blank" rel="noopener noreferrer">
                  Iniciar Conversa
                </a>
              </Button>
            </div>

            {/* Social Media */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-black mb-6 text-center">
                Siga-nos nas Redes Sociais
              </h3>
              <div className="flex justify-center space-x-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300`}
                  >
                    <social.icon className="h-6 w-6 text-white" />
                  </a>
                ))}
              </div>
              <p className="text-center text-gray-600 text-sm mt-4">
                Acompanhe nossas novidades e promoções!
              </p>
            </div>

            {/* Business Hours */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-black mb-4">
                Horário de Atendimento
              </h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Digital:</strong> 24 horas por dia, 7 dias por semana</p>
                <p><strong>WhatsApp:</strong> Resposta rápida durante horário comercial</p>
                <p><strong>Redes Sociais:</strong> Acompanhamento constante</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MegaDieselContact;
