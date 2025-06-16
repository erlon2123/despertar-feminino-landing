
import { BookOpen, Target, Calendar, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LearningSection = () => {
  const learningItems = [
    {
      icon: <BookOpen className="w-10 h-10 text-[#683351] mb-4" />,
      title: "O Básico Necessário",
      description: "Aprenda tudo sobre seus músculos íntimos e a técnica do Pompoarismo, garantindo confiança e autoconhecimento desde o início."
    },
    {
      icon: <Target className="w-10 h-10 text-[#683351] mb-4" />,
      title: "Exercícios Eficazes",
      description: "Descubra exercícios específicos que vão melhorar seu desempenho e saúde íntima, baseados em práticas comprovadas."
    },
    {
      icon: <Calendar className="w-10 h-10 text-[#683351] mb-4" />,
      title: "Rotina Saudável",
      description: "Incorpore exercícios simples no seu dia a dia para fortalecer sua musculatura e manter sua saúde íntima em alta."
    },
    {
      icon: <Zap className="w-10 h-10 text-[#683351] mb-4" />,
      title: "Saúde Íntima Completa",
      description: "Adote uma rotina que melhora não só sua saúde física, mas também sua satisfação e qualidade de vida íntima."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#683351] to-[#deafc8]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          O Que Você Vai Aprender
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningItems.map((item, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-0 text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
