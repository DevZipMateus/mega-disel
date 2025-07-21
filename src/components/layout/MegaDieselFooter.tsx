
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const MegaDieselFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/a053a4c1-4f2f-487d-8096-af876dedd9a0.png" 
                alt="MEGA DIESEL AUTOPEÇAS" 
                className="h-16 w-auto mb-4"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              MEGA DIESEL AUTOPEÇAS - Seu novo conceito em autopeças para linha pesada e linha leve. 
              Agilidade, qualidade e confiança em cada atendimento.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/megadieselpecas?igsh=NzJyZGk5aDg0ejA4"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 hover:bg-pink-600 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/share/19WUPPjhq1/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-500 mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-300">(51) 98408-2546</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-300 text-sm">megadieseldistribuidora@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-500 mt-1" />
                <div className="text-gray-300 text-sm">
                  <p>RUA HERMETO BERMUDEZ, 75</p>
                  <p>JD LEOPOLDINA</p>
                  <p>CEP 91250-040</p>
                  <p>PORTO ALEGRE - RS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-500 mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Reformas de Motores</li>
              <li>Sistema de Injeção</li>
              <li>Suspensão</li>
              <li>Sistemas de Freios</li>
              <li>Filtros</li>
              <li>Lubrificantes</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} MEGA DIESEL AUTOPEÇAS. Todos os direitos reservados.
            </div>
            <div className="text-gray-400 text-sm mt-4 md:mt-0">
              <p>AGILIDADE • QUALIDADE • CONFIANÇA</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MegaDieselFooter;
