

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleButtonClick = () => {
    window.open('https://pay.kirvano.com/5213b3f0-8fe9-4c15-ac18-b5b2338ed3f6', '_blank');
  };

  return (
    <section className="bg-gradient-to-br from-[#683351] to-[#deafc8] min-h-screen flex flex-col items-center justify-center text-white px-4 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Content */}
        <div className="text-center md:text-left space-y-8">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start mb-8">
            <img 
              src="/images/LOGO BRANCO.png" 
              alt="Elisama Santos - Fisioterapeuta" 
              className="h-20 w-auto"
            />
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Desperte Todo o Seu Poder Feminino!
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-10">
            Descubra os segredos da Saúde Íntima com um ebook completo que vai transformar sua autoestima, bem-estar e prazer. Para mulheres que querem viver sua melhor versão – com leveza e liberdade!
          </p>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-white text-[#683351] hover:bg-white/90 px-8 py-4 text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={handleButtonClick}
          >
            Quero Despertar Agora!
          </Button>
        </div>

        {/* Right side - Photo */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <img 
              src="/lovable-uploads/3eeafc64-97b8-46c8-80fc-41ba3f45d88e.png" 
              alt="Elisama Santos - Fisioterapeuta" 
              className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-4 border-white/20"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent to-[#683351]/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
