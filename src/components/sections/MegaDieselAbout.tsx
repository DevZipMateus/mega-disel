
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Award, Users, Clock } from 'lucide-react';

const MegaDieselAbout = () => {
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

  const features = [
    {
      icon: TrendingUp,
      title: "Crescimento Constante",
      description: "Empresa nova no mercado em constante crescimento e expansão."
    },
    {
      icon: Award,
      title: "Qualidade Garantida",
      description: "Peças de qualidade para veículos diesel linha pesada e linha leve."
    },
    {
      icon: Users,
      title: "Atendimento Digital",
      description: "Atuação no âmbito digital através de redes sociais e WhatsApp."
    },
    {
      icon: Clock,
      title: "Agilidade",
      description: "Entrega rápida pessoalmente ou através de transportadoras."
    }
  ];

  return (
    <section ref={sectionRef} id="sobre" className="py-16 lg:py-24 bg-gray-50">
      <div className="section-container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16" 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            Sobre a <span className="text-yellow-500">MEGA DIESEL</span>
          </h2>
          <p className="section-subtitle">
            Conheça nossa história e compromisso com a excelência em autopeças.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-black mb-6">
              Sua Nova Referência em Autopeças
            </h3>
            
            <div className="space-y-4 text-gray-700 mb-8">
              <p>
                A MEGA DIESEL AUTO PEÇAS é uma empresa nova no mercado de Auto Peças, 
                que vem em constante crescimento! Atuamos no âmbito digital através de 
                redes sociais, Mercado Livre e WhatsApp.
              </p>
              
              <p>
                Dependendo da região entregamos pessoalmente ou através de grandes 
                transportadoras, conforme a combinar com o cliente. Estamos localizados 
                na zona norte de Porto Alegre, local de fácil acesso.
              </p>
              
              <p className="font-semibold text-black">
                Trabalhamos com ampla linha de peças para veículos diesel linha pesada 
                e também para veículos de linha leve.
              </p>
            </div>

            <div className="bg-black text-white p-6 rounded-lg">
              <p className="text-lg font-semibold text-yellow-500 mb-2">
                Nossa Missão
              </p>
              <p>
                Fornecer peças automotivas de qualidade com agilidade, qualidade e 
                confiança, sendo sua nova referência no mercado de autopeças.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <feature.icon className="h-12 w-12 text-yellow-500 mb-4" />
                <h4 className="text-lg font-semibold text-black mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MegaDieselAbout;
