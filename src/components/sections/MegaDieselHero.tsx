
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock } from 'lucide-react';

const MegaDieselHero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced animated gradient background */}
      <div className="absolute inset-0 bg-gradient-animated"></div>
      
      {/* Improved overlay for better contrast and depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/60"></div>
      
      {/* Additional subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Logo with enhanced animation */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <img 
              src="/lovable-uploads/a053a4c1-4f2f-487d-8096-af876dedd9a0.png" 
              alt="MEGA DIESEL AUTOPEÇAS" 
              className="h-24 sm:h-32 md:h-40 w-auto mx-auto filter drop-shadow-2xl"
            />
          </motion.div>

          {/* Main heading with enhanced glow effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg"
            style={{
              textShadow: '0 0 20px rgba(255, 215, 0, 0.3), 0 0 40px rgba(255, 215, 0, 0.1)'
            }}
          >
            MEGA DIESEL
            <br />
            <span className="text-yellow-500 drop-shadow-xl">AUTOPEÇAS</span>
          </motion.h1>

          {/* Slogan with enhanced styling */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-yellow-400 mb-8 font-semibold drop-shadow-md"
          >
            AGILIDADE, QUALIDADE E CONFIANÇA
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg text-gray-200 mb-10 max-w-3xl mx-auto drop-shadow-sm"
          >
            Seu novo conceito em autopeças, linha pesada e linha leve.
            <br />
            Tudo que você precisar, vai encontrar na MEGA DIESEL AUTOPEÇAS.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button className="btn-secondary px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <a href="https://wa.me/5551984082546?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20autopeças." target="_blank" rel="noopener noreferrer">
                Fale Conosco no WhatsApp
              </a>
            </Button>
            <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <a href="#servicos">Nossos Serviços</a>
            </Button>
          </motion.div>

          {/* Enhanced quick info cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
              <Phone className="h-8 w-8 text-yellow-500 mx-auto mb-3 drop-shadow-lg" />
              <h3 className="text-white font-semibold mb-2">Contato Direto</h3>
              <p className="text-gray-300 text-sm">(51) 98408-2546</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
              <MapPin className="h-8 w-8 text-yellow-500 mx-auto mb-3 drop-shadow-lg" />
              <h3 className="text-white font-semibold mb-2">Localização</h3>
              <p className="text-gray-300 text-sm">Porto Alegre - RS</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
              <Clock className="h-8 w-8 text-yellow-500 mx-auto mb-3 drop-shadow-lg" />
              <h3 className="text-white font-semibold mb-2">Atendimento</h3>
              <p className="text-gray-300 text-sm">Digital 24/7</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MegaDieselHero;
