
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Dumbbell, Users, Target, Diameter } from "lucide-react";
import JamesDean from '@/assets/jamesdean.jpg'

const Index = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-950"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl tracking-tight mb-6 italic font-thin text-zinc-400">
            Treine
            <span className="block text-zinc-400 italic font-thin">de forma <span className="text-zinc-100">inteligente</span></span>
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Sem achismo. Métodos com base em evidências. 
          </p>
          <Button 
            size="lg" 
            className="bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700 py-4 text-lg font-light tracking-wide transition-all duration-300"
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Subtle smoke effect overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent"></div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-zinc-100 mb-8 tracking-tight">
                Treine da forma real
                <span className="block text-zinc-400 italic">e tenha resultados reais</span>
              </h2>
              <p className="text-xl text-zinc-400 font-light leading-relaxed mb-8">
              Hipertrofia é baseada no esforço. Se você estiver fazendo esforço, vai ter resultados, porém,
              há como você maximizar a hipertrofia, e eu posso te ajudar nisso.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-zinc-800/50 rounded-sm border border-zinc-800"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/20 to-transparent rounded-sm">
                <img className="w-full h-full object-cover rounded-sm" src={JamesDean} alt="James Dean" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-normal text-center text-zinc-100 mb-16 tracking-tight">
            O que está incluso?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-zinc-900/50 border-zinc-800 p-8 hover:bg-zinc-900/70 transition-all duration-300">
              <Dumbbell className="h-12 w-12 text-zinc-400 mb-6" strokeWidth={1} />
              <h3 className="text-2xl  text-zinc-100 mb-4">Treino Sob Medida</h3>
              <p className="text-zinc-400  leading-relaxed">
                Treino personalizado, totalmente individualizado. É o que a ciência diz que vai te levar do ponto A ao ponto B.
              </p>
            </Card>
            
            <Card className="bg-zinc-900/50 border-zinc-800 p-8 hover:bg-zinc-900/70 transition-all duration-300">
              <Diameter className="h-12 w-12 text-zinc-400 mb-6" strokeWidth={1} />
              <h3 className="text-2xl  text-zinc-100 mb-4">Alimentação</h3>
              <p className="text-zinc-400 leading-relaxed">
                Dieta ajustada e personalizada para o seu objetivo. Comida de verdade, que vai te ajudar a levar a onde você quer.
              </p>
            </Card>
            
            <Card className="bg-zinc-900/50 border-zinc-800 p-8 hover:bg-zinc-900/70 transition-all duration-300">
              <Target className="h-12 w-12 text-zinc-400 mb-6" strokeWidth={1} />
              <h3 className="text-2xl  text-zinc-100 mb-4">Suporte</h3>
              <p className="text-zinc-400 leading-relaxed">
                Suporte sempre que necessário. Aberto para toda dúvida, desde a complexa a mais simples possível.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-6 bg-zinc-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-3xl md:text-4xl font-light text-zinc-300 italic mb-8 leading-relaxed">
            Treinamento inteligente, pensado e baseado em evidências. 
          </blockquote>
          <div className="w-24 h-px bg-zinc-700 mx-auto"></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-zinc-100 mb-8 tracking-tight">
            Pronto para resultados
            <span className="block text-zinc-400 italic">De verdade?</span>
          </h2>
          <p className="text-xl text-zinc-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Não perca tempo com tecnicas mirabolantes que no final só te deixa frustrado.          </p>
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="bg-zinc-100 hover:bg-zinc-200 text-zinc-900 px-8 py-4 text-lg font-medium tracking-wide transition-all duration-300"
            >
              Chama no privado
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-zinc-500 font-light">
            © 2024 DeanHpy
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
