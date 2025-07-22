
import { useEffect } from 'react';
import MegaDieselHeader from '@/components/layout/MegaDieselHeader';
import MegaDieselFooter from '@/components/layout/MegaDieselFooter';
import MegaDieselHero from '@/components/sections/MegaDieselHero';
import MegaDieselAbout from '@/components/sections/MegaDieselAbout';
import MegaDieselServices from '@/components/sections/MegaDieselServices';
import MegaDieselProducts from '@/components/sections/MegaDieselProducts';
import MegaDieselLocation from '@/components/sections/MegaDieselLocation';
import MegaDieselContact from '@/components/sections/MegaDieselContact';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import { motion } from 'framer-motion';

const MegaDiesel = () => {
  useEffect(() => {
    // SEO meta tags
    document.title = 'MEGA DIESEL AUTOPEÇAS - Agilidade, Qualidade e Confiança';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'MEGA DIESEL AUTOPEÇAS - Seu novo conceito em autopeças para linha pesada e linha leve. Reformas de motores, sistema de injeção, suspensão, freios, filtros e lubrificantes em Porto Alegre RS.');
    }

    // Open Graph meta tags
    const head = document.head;
    const ogTags = [
      { property: 'og:title', content: 'MEGA DIESEL AUTOPEÇAS - Agilidade, Qualidade e Confiança' },
      { property: 'og:description', content: 'Seu novo conceito em autopeças para linha pesada e linha leve em Porto Alegre RS.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/lovable-uploads/a053a4c1-4f2f-487d-8096-af876dedd9a0.png' }
    ];

    ogTags.forEach(tag => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', tag.property);
      meta.setAttribute('content', tag.content);
      head.appendChild(meta);
    });

    // Smooth scroll function for anchor links
    const handleAnchorLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorLinkClick);
    return () => {
      document.removeEventListener('click', handleAnchorLinkClick);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-hidden"
    >
      <MegaDieselHeader />
      <main>
        <MegaDieselHero />
        <MegaDieselAbout />
        <MegaDieselServices />
        <MegaDieselProducts />
        <MegaDieselLocation />
        <MegaDieselContact />
      </main>
      <WhatsAppFloat />
      <MegaDieselFooter />
    </motion.div>
  );
};

export default MegaDiesel;
