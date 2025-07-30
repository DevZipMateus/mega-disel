import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock } from 'lucide-react';

const MegaDieselHero = () => {
  return <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced animated gradient background */}
      <div className="absolute inset-0 bg-gradient-animated"></div>
      
      {/* Improved overlay for better contrast and depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/60"></div>
      
      {/* Additional subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Logo with enhanced animation */}
          <motion.div initial={{
          opacity: 0,
          y: 30,
          scale: 0.9
        }} animate={{
          opacity: 1,
          y: 0,
          scale: 1
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} className="mb-8">
            <img src="/lovable-uploads/a053a4c1-4f2f-487d-8096-af876dedd9a0.png" alt="MEGA DIESEL AUTOPEÇAS" className="h-24 sm:h-32 md:h-40 w-auto mx-auto filter drop-shadow-2xl" />
          </motion.div>

          {/* Main heading with enhanced glow effect */}
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Seu Novo Conceito em{' '}
            <span className="text-yellow-500 drop-shadow-lg">Autopeças</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>para Carros, SUVs, Camionetes, Vans, Utilitários, Caminhões e Máquinas Agrícolas
          </motion.h1>

          {/* Subtitle with enhanced styling */}
          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold text-yellow-400">AGILIDADE</span> • {' '}
            <span className="font-semibold text-yellow-400">QUALIDADE</span> • {' '}
            <span className="font-semibold text-yellow-400">CONFIANÇA</span>
          </motion.p>

          {/* Enhanced CTA buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="btn-primary text-lg px-8 py-4 shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 bg-[#b7b719]">
              <a href="https://wa.me/5551984082546?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20autopeças." target="_blank" rel="noopener noreferrer" className="flex items-center">
                <img src="/lovable-uploads/5a46be1b-4445-4178-8d9f-a7e8edfd42d5.png" alt="WhatsApp" className="h-6 w-6 mr-2" />
                Fale Conosco via WhatsApp
              </a>
            </Button>
            
            <Button className="btn-secondary text-lg px-8 py-4 border-2 border-white hover:text-black transition-all duration-300 bg-[#b8b81a]">
              <a href="#servicos">Conheça Nossos Serviços</a>
            </Button>
          </motion.div>

          {/* Contact info cards with enhanced styling */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.8
        }} className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Phone className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Telefone</p>
              <p className="text-gray-300">(51) 98408-2546</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <MapPin className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Localização</p>
              <p className="text-gray-300">Porto Alegre - RS</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Clock className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Atendimento</p>
              <p className="text-gray-300">Atendimento Digital 24/7</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};

export default MegaDieselHero;
