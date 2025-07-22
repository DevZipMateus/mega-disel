
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5551984082546?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20autopeças.', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        aria-label="Falar no WhatsApp"
      >
        <img 
          src="/lovable-uploads/5a46be1b-4445-4178-8d9f-a7e8edfd42d5.png" 
          alt="WhatsApp" 
          className="h-8 w-8" 
        />
      </Button>
    </div>
  );
};

export default WhatsAppFloat;
