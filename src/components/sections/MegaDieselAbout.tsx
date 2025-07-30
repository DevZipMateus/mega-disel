import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Users, Award, Wrench } from 'lucide-react';

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
      icon: Wrench,
      title: 'Experiência',
      description: 'Anos de experiência no mercado de autopeças para linha pesada e leve.'
    },
    {
      icon: Award,
      title: 'Qualidade',
      description: 'Produtos de qualidade das melhores marcas do mercado nacional e internacional.'
    },
    {
      icon: Users,
      title: 'Atendimento',
      description: 'Atendimento personalizado com agilidade, qualidade e confiança.'
    }
  ];

  return (
    <section ref={sectionRef} id="sobre" className="py-16 lg:py-24 bg-white">
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
            A MEGA DIESEL AUTOPEÇAS é seu novo conceito em autopeças para linha pesada e linha leve. 
            Oferecemos agilidade, qualidade e confiança em cada atendimento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bg-black rounded-lg p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-yellow-500">AGILIDADE</span> • 
            <span className="text-yellow-500"> QUALIDADE</span> • 
            <span className="text-yellow-500"> CONFIANÇA</span>
          </h3>
          <p className="text-lg max-w-3xl mx-auto">
            Na MEGA DIESEL AUTOPEÇAS, trabalhamos com dedicação para oferecer as melhores soluções 
            em autopeças, garantindo que seu veículo tenha o desempenho e a durabilidade que você precisa.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MegaDieselAbout;
