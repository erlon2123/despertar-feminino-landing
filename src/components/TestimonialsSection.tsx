
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Com você foi tudo tão simples, não mudou só na parte física, mas principalmente na autoestima que eu consegui recuperar, me sentir mais mulher, mais segura. Obrigadaaa! 🥰",
      name: "Camila Rodrigues"
    },
    {
      text: "Só tenho a agradecer. Me arrependo de não ter começado antes! São pontos positivos! Super importante conhecer nossa região íntima e desenvolver uma boa musculatura.",
      name: "Juliana Santos"
    },
    {
      text: "Realmente muda a qualidade de vida! O melhor é que conseguimos aprender os exercícios e levar para nossa rotina, sem interferir nas nossas atividades.",
      name: "Fernanda Costa"
    },
    {
      text: "Prescreve exercícios para serem executados em casa e está sempre disponível para esclarecer dúvidas. É nítida a percepção dos meus ganhos e a melhoria da minha qualidade de vida. Super indico!",
      name: "Ana Paula Silva"
    },
    {
      text: "Sempre que lembro, faço para manter a musculatura pélvica. Tive um ótimo resultado, recomendo para quem não conhece. A Priscila é qualificada, atenciosa. Beijos, Priscila.",
      name: "Mariana Oliveira"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#deafc8]/30 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#683351] mb-16">
          O Que Nossas Alunas Dizem
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <p className="text-gray-700 italic leading-relaxed mb-4">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-[#683351]">
                    {testimonial.name}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
