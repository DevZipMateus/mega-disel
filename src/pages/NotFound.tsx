
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <img 
            src="/lovable-uploads/a053a4c1-4f2f-487d-8096-af876dedd9a0.png" 
            alt="MEGA DIESEL AUTOPEÇAS" 
            className="h-20 w-auto mx-auto mb-8"
          />
          
          {/* 404 Text */}
          <h1 className="text-8xl md:text-9xl font-bold text-yellow-500 mb-4">404</h1>
          
          {/* Error Message */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Página Não Encontrada
          </h2>
          
          <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto">
            A página que você está procurando não existe ou foi movida.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/')}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3"
            >
              <Home className="h-5 w-5 mr-2" />
              Voltar ao Início
            </Button>
            
            <Button 
              onClick={() => navigate(-1)}
              variant="outline"
              className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold px-6 py-3"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Página Anterior
            </Button>
          </div>
          
          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-400 mb-4">
              Precisa de ajuda? Entre em contato conosco:
            </p>
            <Button 
              onClick={() => window.open('https://wa.me/5551984082546?text=Olá!%20Preciso%20de%20ajuda%20para%20navegar%20no%20site.', '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              <img src="/lovable-uploads/5a46be1b-4445-4178-8d9f-a7e8edfd42d5.png" alt="WhatsApp" className="h-4 w-4 mr-2" />
              WhatsApp: (51) 98408-2546
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
