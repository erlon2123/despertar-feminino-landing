
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const OfferSection = () => {
  const features = [
    "Técnicas de cuidado íntimo e autoestima",
    "Orientações práticas e naturais",
    "Conteúdo exclusivo 100% online",
    "Escrita simples, direta e sem tabus"
  ];

  const handleButtonClick = () => {
    window.open('https://pay.kirvano.com/5213b3f0-8fe9-4c15-ac18-b5b2338ed3f6', '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#683351] to-[#deafc8]">
      <div className="max-w-4xl mx-auto text-center">
        <Card className="bg-white/10 backdrop-blur-sm border-0 p-8">
          <CardContent className="space-y-8">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ebook Saúde Íntima – Só R$9,97 à vista
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Acesso imediato ao conteúdo completo. Leitura leve, prática e transformadora.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center justify-center space-x-3 text-white">
                  <Check className="w-5 h-5 text-white/90 flex-shrink-0" />
                  <span className="text-left">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-white text-[#683351] hover:bg-white/90 px-12 py-4 text-xl rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={handleButtonClick}
            >
              Sim, Quero o Meu Ebook!
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OfferSection;
