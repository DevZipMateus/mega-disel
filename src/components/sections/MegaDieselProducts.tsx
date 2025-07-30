import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MegaDieselProducts = () => {
  const products = [
    {
      id: 1,
      image: '/lovable-uploads/da7ed15e-d692-4e94-8a35-e69d4bdb8567.png',
      title: 'Injetores CR Delphi',
      description: 'Injetores Common Rail Delphi para linha pesada e leve'
    },
    {
      id: 2,
      image: '/lovable-uploads/edd5b00e-56df-4bc7-b9df-aadfc6c5e073.png',
      title: 'Bicos Injetores',
      description: 'Bicos injetores de alta qualidade para sistema de injeção'
    },
    {
      id: 3,
      image: '/lovable-uploads/295f2aa3-6e1d-4a3e-aa3f-779a50b659cf.png',
      title: 'Kit Motor Completo',
      description: 'Pistões, anéis e componentes para reforma de motor'
    },
    {
      id: 4,
      image: '/lovable-uploads/9d8a0bd0-e233-4706-bc23-6bc9b3526b66.png',
      title: 'Bicos Injetores Delphi',
      description: 'Bicos injetores Delphi originais para máxima performance'
    },
    {
      id: 5,
      image: '/lovable-uploads/ba1700b2-16fa-436c-9d2b-76d7fb182fb9.png',
      title: 'Bicos Injetores Especiais',
      description: 'Linha completa de bicos injetores para diversos motores'
    },
    {
      id: 6,
      image: '/lovable-uploads/84c3d2e7-4e2a-426a-a12d-c8578a68ab2c.png',
      title: 'Peças Delphi',
      description: 'Componentes originais Delphi para sistema de injeção'
    },
    {
      id: 7,
      image: '/lovable-uploads/098a1be2-3425-4eba-9d5a-9ef88c97e679.png',
      title: 'Anéis de Motor',
      description: 'Anéis de segmento Delphi para reforma de motores'
    },
    {
      id: 8,
      image: '/lovable-uploads/eda57ca3-1820-4898-8d74-46501ecf49b6.png',
      title: 'Atuadores Delphi',
      description: 'Atuadores e componentes eletrônicos Delphi'
    },
    {
      id: 9,
      image: '/lovable-uploads/2971075b-bba9-4651-91ad-496024ebc65c.png',
      title: 'Kit Embreagem',
      description: 'Rolamento de embreagem e kits completos LUK RepSet'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? products.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === products.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="produtos" className="section-container bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="section-title">Um Pouco de Nossos Produtos</h2>
        <p className="section-subtitle mx-auto">
          Conheça nossa linha completa de autopeças para linha pesada e leve. 
          Produtos de qualidade das melhores marcas do mercado.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Main carousel container */}
        <div className="relative overflow-hidden rounded-xl bg-white shadow-xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="w-full flex-shrink-0">
                <div className="flex items-center justify-center p-8">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-w-full max-h-80 object-contain rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex 
                  ? 'bg-yellow-500' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-1 mt-4">
          <div 
            className="bg-yellow-500 h-1 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / products.length) * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default MegaDieselProducts;
