import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MegaDieselProducts = () => {
  const products = [
    {
      id: 1,
      image: '/lovable-uploads/da7ed15e-d692-4e94-8a35-e69d4bdb8567.png',
      title: 'Peças para Sistema de Injeção Delphi',
      description: 'Injetores Common Rail Delphi para linha pesada e leve'
    },
    {
      id: 2,
      image: '/lovable-uploads/edd5b00e-56df-4bc7-b9df-aadfc6c5e073.png',
      title: 'Peças para Sistema de Injeção Diesel',
      description: 'Bicos injetores de alta qualidade para sistema de injeção'
    },
    {
      id: 3,
      image: '/lovable-uploads/295f2aa3-6e1d-4a3e-aa3f-779a50b659cf.png',
      title: 'Peças para Reforma de Motor',
      description: 'Pistões, anéis e componentes para reforma de motor'
    },
    {
      id: 4,
      image: '/lovable-uploads/9d8a0bd0-e233-4706-bc23-6bc9b3526b66.png',
      title: 'Peças Originais Delphi para Motores Diesel',
      description: 'Bicos injetores Delphi originais para máxima performance'
    },
    {
      id: 5,
      image: '/lovable-uploads/ba1700b2-16fa-436c-9d2b-76d7fb182fb9.png',
      title: 'Peças para Diversos Motores Diesel',
      description: 'Linha completa de bicos injetores para diversos motores'
    },
    {
      id: 6,
      image: '/lovable-uploads/84c3d2e7-4e2a-426a-a12d-c8578a68ab2c.png',
      title: 'Peças Originais para Sistema Delphi',
      description: 'Componentes originais Delphi para sistema de injeção'
    },
    {
      id: 7,
      image: '/lovable-uploads/098a1be2-3425-4eba-9d5a-9ef88c97e679.png',
      title: 'Peças para Reforma de Motores Diesel',
      description: 'Anéis de segmento Delphi para reforma de motores'
    },
    {
      id: 8,
      image: '/lovable-uploads/eda57ca3-1820-4898-8d74-46501ecf49b6.png',
      title: 'Peças Eletrônicas para Sistema Delphi',
      description: 'Atuadores e componentes eletrônicos Delphi'
    },
    {
      id: 9,
      image: '/lovable-uploads/2971075b-bba9-4651-91ad-496024ebc65c.png',
      title: 'Peças para Sistema de Embreagem',
      description: 'Rolamento de embreagem e kits completos LUK RepSet'
    },
    {
      id: 10,
      image: '/lovable-uploads/37c5e978-3d93-496a-a2c2-ab31210602a4.png',
      title: 'Peças para Linha Pesada',
      description: 'Componentes especializados para veículos de linha pesada'
    },
    {
      id: 11,
      image: '/lovable-uploads/7525d0b4-588c-4993-921d-7258bbb74b8e.png',
      title: 'Peças para Sistema de Injeção',
      description: 'Componentes para sistema de injeção diesel'
    },
    {
      id: 12,
      image: '/lovable-uploads/261337e7-4b4e-4e83-9815-cfa2a67eb698.png',
      title: 'Peças para Motores Diesel',
      description: 'Componentes diversos para motores diesel'
    },
    {
      id: 13,
      image: '/lovable-uploads/e0b4c28e-5ed7-4afa-aced-fcc1389f4083.png',
      title: 'Peças para Linha Leve',
      description: 'Componentes especializados para veículos de linha leve'
    },
    {
      id: 14,
      image: '/lovable-uploads/2343b17d-10fe-4a9d-b1ae-311d119b5e05.png',
      title: 'Peças para Sistema Automotivo',
      description: 'Componentes diversos para sistemas automotivos'
    },
    {
      id: 15,
      image: '/lovable-uploads/69d71750-0c64-4543-bc62-d85bb85ff3f1.png',
      title: 'Peças Continental para Sistema de Injeção',
      description: 'Componentes Continental de alta qualidade'
    },
    {
      id: 16,
      image: '/lovable-uploads/65d41b33-5d4c-4c0b-afd6-09b1c997b9f1.png',
      title: 'Injetores DENSO Common Rail',
      description: 'Injetores DENSO Common Rail para máxima performance'
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
        <h2 className="section-title">Nossas Peças Especializadas</h2>
        <p className="section-subtitle mx-auto">
          Conheça nossa linha completa de peças para linha pesada e leve. 
          Peças de qualidade das melhores marcas do mercado para todos os tipos de veículos.
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
                    alt={`Produto ${product.id}`}
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
