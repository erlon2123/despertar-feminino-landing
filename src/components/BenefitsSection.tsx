
import { Heart, Flower, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Heart className="w-12 h-12 text-[#683351] mb-4" />,
      title: "Autoestima nas Alturas",
      description: "Sinta-se mais confiante, amada e segura em todos os momentos. Eleve sua autoestima e descubra uma nova mulher dentro de você!"
    },
    {
      icon: <Flower className="w-12 h-12 text-[#683351] mb-4" />,
      title: "Prazer & Saúde Íntima",
      description: "Aprenda práticas seguras e naturais para cuidar da sua saúde íntima com carinho, prevenindo desconfortos e aumentando o prazer com consciência."
    },
    {
      icon: <Sparkles className="w-12 h-12 text-[#683351] mb-4" />,
      title: "Autoconhecimento & Liberdade",
      description: "Desperte sensações adormecidas, quebre tabus e descubra um novo universo de liberdade e conexão com seu corpo."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#deafc8]/20 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#683351] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
