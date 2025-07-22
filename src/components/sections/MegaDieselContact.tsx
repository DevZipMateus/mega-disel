
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MessageCircle, Instagram, Facebook } from 'lucide-react';
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

  return (
    <section ref={sectionRef} id="contato" className="py-16 lg:py-24 bg-black text-white">
      <div className="section-container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16" 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Entre em <span className="text-yellow-500">Contato</span>
          </h2>
          <p className="text-lg text-gray-300">
            Estamos prontos para atender você! Entre em contato através dos nossos canais de atendimento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-green-500 rounded-lg p-6 text-center hover:bg-green-600 transition-colors duration-300"
          >
            <MessageCircle className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="mb-4">(51) 98408-2546</p>
            <Button 
              className="bg-white text-green-500 hover:bg-gray-100 w-full"
              onClick={() => window.open('https://wa.me/5551984082546?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20autopeças.', '_blank')}
            >
              Conversar Agora
            </Button>
          </motion.div>

          {/* Telefone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800 rounded-lg p-6 text-center"
          >
            <Phone className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Telefone</h3>
            <p className="text-yellow-500 text-lg font-semibold">(51) 98408-2546</p>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-800 rounded-lg p-6 text-center"
          >
            <Mail className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-yellow-500 break-all">megadieseldistribuidora@gmail.com</p>
          </motion.div>
        </div>

        {/* Redes Sociais */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">
            Siga-nos nas <span className="text-yellow-500">Redes Sociais</span>
          </h3>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.instagram.com/megadieselpecas?igsh=NzJyZGk5aDg0ejA4"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 hover:bg-pink-600 rounded-full w-16 h-16 flex items-center justify-center transition-colors duration-300"
            >
              <Instagram className="h-8 w-8" />
            </a>
            <a 
              href="https://www.facebook.com/share/19WUPPjhq1/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 rounded-full w-16 h-16 flex items-center justify-center transition-colors duration-300"
            >
              <Facebook className="h-8 w-8" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MegaDieselContact;
