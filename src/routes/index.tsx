import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Check,
  X,
  ChevronDown,
  Clock,
  ShoppingBasket,
  Utensils,
  Dumbbell,
  HeartPulse,
  Salad,
  Sparkles,
  ShieldCheck,
  Gift,
  Star,
} from "lucide-react";
import { useRef } from "react";
import heroMockupAsset from "@/assets/fitbook-covers.png.asset.json";
const heroMockup = heroMockupAsset.url;
import pagesMockup from "@/assets/fitbook-pages.png";
import bundleMockup from "@/assets/fitbook-bundle.png";
import fitFood from "@/assets/fit-food.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fitbook 210 Receitas | Receitas fit para o dia a dia" },
      {
        name: "description",
        content:
          "210 receitas fit práticas, saborosas e com ingredientes acessíveis. Pare de improvisar na cozinha e emagreça com sabor.",
      },
      { property: "og:title", content: "Fitbook 210 Receitas" },
      {
        property: "og:description",
        content:
          "210 receitas fit prontas para aplicar hoje: café da manhã, almoço, jantar, snacks e sobremesas.",
      },
    ],
  }),
  component: Index,
});

const CTA_HREF = "#planos";

function Cta({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={CTA_HREF}
      className={`inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-center text-sm font-bold tracking-wide text-accent-foreground uppercase shadow-lg transition hover:brightness-105 active:scale-[0.99] ${className}`}
    >
      {children}
    </a>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-center text-2xl leading-snug font-bold text-primary sm:text-3xl">
      {children}
    </h2>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-center text-[11px] font-semibold tracking-[0.3em] text-accent uppercase">
      {children}
    </p>
  );
}

function Arrow() {
  return (
    <div className="flex justify-center py-6">
      <ChevronDown className="h-6 w-6 text-primary/40" />
    </div>
  );
}

const doubts = [
  "O que eu faço pra comer hoje sem sair da dieta?",
  "Como cozinhar fit sem gastar uma fortuna?",
  "Será que a família vai comer a mesma comida?",
  "Como variar o menu sem passar horas na cozinha?",
];

const forYou = [
  "Você quer emagrecer sem viver de frango com batata doce",
  "Você tem pouco tempo e precisa de receitas rápidas",
  "Você já tentou dieta e desistiu por falta de sabor",
  "Você cozinha para a família e quer agradar todo mundo",
  "Você quer organizar suas refeições da semana",
  "Você quer resultado sem dieta restritiva",
];

const features = [
  { icon: Utensils, label: "210 receitas testadas" },
  { icon: Clock, label: "Prontas em até 30 min" },
  { icon: ShoppingBasket, label: "Ingredientes de mercado" },
  { icon: HeartPulse, label: "Macros calculados" },
  { icon: Salad, label: "Opções low carb e veggie" },
  { icon: Dumbbell, label: "Foco em proteína" },
];

const thoughtFor = [
  "Divisão por refeição: café, almoço, jantar, snacks e doces fit",
  "Modo de preparo em passos curtos, sem termos técnicos",
  "Substituições para cada ingrediente difícil",
  "Tabela de calorias e macros em cada receita",
  "Versões para air fryer, forno e frigideira",
];

const included = [
  "210 receitas fit completas",
  "Café da manhã e pré-treino",
  "Almoços e jantares práticos",
  "Snacks e doces fit sem culpa",
  "Tabela de macros por porção",
  "Lista de substituições inteligentes",
  "Acesso imediato no celular",
  "Atualizações gratuitas",
];

const bonuses = [
  {
    tag: "Bônus 1",
    title: "Planner de refeições semanal",
    text: "Monte a semana inteira em 10 minutos e nunca mais improvise no almoço.",
  },
  {
    tag: "Bônus 2",
    title: "Lista de compras inteligente",
    text: "Compre só o necessário e economize até 30% no mercado.",
  },
  {
    tag: "Bônus 3",
    title: "Guia de marmitas fit",
    text: "Congelamento, validade e porcionamento para a semana toda.",
  },
  {
    tag: "Bônus 4",
    title: "50 snacks de 5 minutos",
    text: "Para matar a vontade de doce sem sair do plano.",
  },
  {
    tag: "Bônus 5",
    title: "Guia de mindset e constância",
    text: "Como manter a rotina fit mesmo nas semanas corridas.",
  },
];

const testimonials = [
  {
    name: "Juliana M.",
    text: "Perdi 6kg em 3 meses comendo comida de verdade. As receitas de doce fit salvaram minha vida.",
  },
  {
    name: "Rafael S.",
    text: "Eu odiava cozinhar. Hoje faço marmita no domingo em 1 hora e sigo a semana tranquilo.",
  },
  {
    name: "Camila P.",
    text: "Meu marido e meus filhos comem as mesmas receitas. Acabou a comida separada em casa.",
  },
];

const faqs = [
  {
    q: "Como recebo o Fitbook?",
    a: "O acesso é 100% digital e liberado na hora da compra, direto no seu e-mail. Você pode ler no celular, tablet ou computador.",
  },
  {
    q: "As receitas usam ingredientes caros?",
    a: "Não. Todas as receitas foram criadas com ingredientes encontrados em qualquer mercado, e cada uma traz opções de substituição.",
  },
  {
    q: "Serve para quem quer ganhar massa?",
    a: "Sim. As receitas trazem macros calculados e há uma seção específica com foco em proteína e pré/pós-treino.",
  },
  {
    q: "Preciso saber cozinhar?",
    a: "Não. O passo a passo é simples, curto e direto, pensado para quem está começando.",
  },
  {
    q: "Tenho restrição alimentar. Funciona?",
    a: "O material inclui versões low carb, sem lactose e vegetarianas, além da lista de substituições.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia. Se não fizer sentido para você, devolvemos 100% do valor.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="bg-cream px-5 pt-12 pb-14">
        <div className="mx-auto max-w-xl">
          <Eyebrow>Fitbook 210 Receitas</Eyebrow>
          <h1 className="font-display mt-4 text-center text-[28px] leading-tight font-bold text-primary sm:text-4xl">
            +210 Receitas Fit para preparar no dia a dia sem perder o sabor
          </h1>
          <div className="mt-8">
            <img
              src={heroMockup}
              alt="Coleção de 7 ebooks Fitbook com 210 receitas: café da manhã, lanches, almoço, jantas, sobremesas, smoothies e pães"
              width={1536}
              height={1024}
              className="mx-auto w-full max-w-md"
            />
          </div>
          <p className="mt-6 text-center text-sm leading-relaxed text-muted-foreground">
            Um guia completo com receitas rápidas, saborosas e com ingredientes que você já tem em
            casa. Café da manhã, almoço, jantar, snacks e doces fit — tudo com macros calculados.
          </p>
          <div className="mt-7 flex justify-center">
            <Cta className="w-full max-w-sm">Quero minhas 210 receitas</Cta>
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Acesso imediato • Garantia de 7 dias
          </p>
        </div>
        <Arrow />
      </section>

      {/* DÚVIDAS */}
      <section className="bg-background px-5 py-14">
        <div className="mx-auto max-w-xl">
          <SectionTitle>Todo dia surge a mesma dúvida...</SectionTitle>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {doubts.map((d, i) => (
              <div
                key={d}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">
                  {i + 1}
                </span>
                <p className="text-sm leading-snug text-foreground">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            O problema nunca foi força de vontade. É falta de um menu pronto para seguir.
          </p>
        </div>
        <Arrow />
      </section>

      {/* PARA VOCÊ QUE */}
      <section className="bg-mint px-5 py-14">
        <div className="mx-auto max-w-xl">
          <SectionTitle>Esse material é para você que...</SectionTitle>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {forYou.map((f) => (
              <div
                key={f}
                className="flex items-start gap-3 rounded-xl bg-card p-4 text-sm text-foreground shadow-sm"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="leading-snug">{f}</span>
              </div>
            ))}
          </div>
        </div>
        <Arrow />
      </section>

      {/* ANTES x DEPOIS */}
      <section className="bg-background px-5 py-14">
        <div className="mx-auto max-w-xl">
          <SectionTitle>
            Menos improviso na cozinha. Mais receitas prontas para aplicar.
          </SectionTitle>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-muted p-5">
              <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                Antes
              </p>
              <ul className="mt-4 space-y-3 text-sm text-foreground">
                {[
                  "Comer sempre a mesma coisa",
                  "Dieta sem sabor e sem constância",
                  "Gastar demais no mercado",
                  "Desistir na primeira semana",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-mint p-5">
              <p className="text-xs font-bold tracking-widest text-primary uppercase">Depois</p>
              <ul className="mt-4 space-y-3 text-sm text-foreground">
                {[
                  "210 opções para variar todo dia",
                  "Comida gostosa e dentro da meta",
                  "Compras planejadas e econômicas",
                  "Rotina fit que você mantém",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Arrow />
      </section>

      {/* O QUE É */}
      <section className="bg-cream px-5 py-14">
        <div className="mx-auto max-w-xl">
          <SectionTitle>O que é o Fitbook 210 Receitas?</SectionTitle>
          <p className="mt-4 text-center text-sm leading-relaxed text-muted-foreground">
            É um livro digital de receitas fit organizado por refeição, com passo a passo curto,
            macros calculados e substituições para cada ingrediente. Você abre, escolhe e cozinha.
          </p>
          <img
            src={pagesMockup}
            alt="Páginas internas do Fitbook com receitas e tabela de macros"
            width={1200}
            height={768}
            loading="lazy"
            className="mt-8 w-full"
          />
          <div className="mt-8 grid grid-cols-2 gap-3">
            {features.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 rounded-xl bg-card p-4 text-center shadow-sm"
              >
                <Icon className="h-5 w-5 text-primary" />
                <span className="text-xs leading-snug font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <Arrow />
      </section>

      {/* PENSADO PARA */}
      <section className="bg-background px-5 py-14">
        <div className="mx-auto max-w-xl">
          <SectionTitle>Pensado para quem quer comer bem — com pouco tempo</SectionTitle>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Nada de dieta complicada. Só receitas que caem na sua rotina real.
          </p>
          <ul className="mt-8 space-y-3">
            {thoughtFor.map((t) => (
              <li
                key={t}
                className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground"
              >
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm font-semibold text-accent">
            Você não precisa de mais disciplina. Precisa de um menu pronto.
          </p>
        </div>
        <Arrow />
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section className="bg-mint px-5 py-14">
        <div className="mx-auto max-w-xl">
          <SectionTitle>O que você vai receber</SectionTitle>
          <img
            src={bundleMockup}
            alt="Fitbook 210 Receitas com bônus inclusos"
            width={1200}
            height={800}
            loading="lazy"
            className="mt-8 w-full"
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {included.map((t) => (
              <div
                key={t}
                className="flex items-start gap-2 rounded-xl bg-card px-4 py-3 text-sm text-foreground shadow-sm"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="leading-snug">{t}</span>
              </div>
            ))}
          </div>
        </div>
        <Arrow />
      </section>

      {/* BÔNUS */}
      <section className="bg-cream px-5 py-14">
        <div className="mx-auto max-w-xl">
          <SectionTitle>Você ainda ganha 5 Super Bônus</SectionTitle>
          <img
            src={fitFood}
            alt="Refeições fit variadas prontas para a semana"
            width={1200}
            height={800}
            loading="lazy"
            className="mt-8 w-full rounded-2xl"
          />
          <div className="mt-8 space-y-3">
            {bonuses.map((b) => (
              <div
                key={b.title}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm"
              >
                <Gift className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="text-[11px] font-bold tracking-widest text-accent uppercase">
                    {b.tag}
                  </p>
                  <p className="text-sm font-semibold text-primary">{b.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-dashed border-accent/60 p-5 text-center">
            <p className="text-xs font-bold tracking-widest text-accent uppercase">
              Tudo isso junto
            </p>
            <p className="font-display mt-1 text-lg font-bold text-primary">
              Receitas + bônus liberados no mesmo acesso
            </p>
          </div>
        </div>
        <Arrow />
      </section>

      {/* PLANOS */}
      <section id="planos" className="bg-background px-5 py-14">
        <div className="mx-auto max-w-xl">
          <Eyebrow>Oferta por tempo limitado</Eyebrow>
          <SectionTitle>Escolha a melhor opção para você</SectionTitle>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-sm font-semibold text-muted-foreground">Essencial</p>
              <p className="mt-3 text-xs text-muted-foreground">de R$ 47 por</p>
              <p className="font-display text-3xl font-bold text-primary">R$ 19</p>
              <p className="text-xs text-muted-foreground">pagamento único</p>
              <ul className="mt-5 space-y-2 text-sm text-foreground">
                <li className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  210 receitas fit completas
                </li>
                <li className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  Macros por porção
                </li>
                <li className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  Acesso imediato
                </li>
              </ul>
              <a
                href="#"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-bold text-primary transition hover:bg-secondary"
              >
                Quero o essencial
              </a>
            </div>

            <div className="relative rounded-2xl border-2 border-accent bg-cream p-6">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[10px] font-bold tracking-widest text-accent-foreground uppercase">
                Mais escolhido
              </span>
              <p className="text-sm font-semibold text-primary">Completo + 5 bônus</p>
              <p className="mt-3 text-xs text-muted-foreground">de R$ 97 por</p>
              <p className="font-display text-4xl font-bold text-accent">R$ 27</p>
              <p className="text-xs text-muted-foreground">pagamento único</p>
              <ul className="mt-5 space-y-2 text-sm text-foreground">
                {[
                  "Tudo do plano essencial",
                  "Planner de refeições semanal",
                  "Lista de compras inteligente",
                  "Guia de marmitas fit",
                  "50 snacks de 5 minutos",
                  "Guia de mindset e constância",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground uppercase shadow-lg transition hover:brightness-105"
              >
                Quero o completo
              </a>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Compra segura • Garantia de 7 dias
              </p>
            </div>
          </div>
        </div>
        <Arrow />
      </section>

      {/* DEPOIMENTOS */}
      <section className="bg-primary px-5 py-14">
        <h2 className="font-display text-center text-2xl font-bold text-primary-foreground">
          O que dizem quem já usa o Fitbook
        </h2>
        <div className="mx-auto mt-8 max-w-xl space-y-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-card p-5 shadow-sm">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground">"{t.text}"</p>
              <p className="mt-3 text-xs font-semibold text-muted-foreground">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GARANTIA */}
      <section className="bg-cream px-5 py-14">
        <div className="mx-auto max-w-md rounded-2xl bg-card p-8 text-center shadow-sm">
          <ShieldCheck className="mx-auto h-12 w-12 text-primary" />
          <p className="font-display mt-4 text-xl font-bold text-primary">Garantia de 7 dias</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Teste as receitas por 7 dias. Se você achar que não é para você, devolvemos 100% do
            valor investido, sem burocracia.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background px-5 py-14">
        <div className="mx-auto max-w-xl">
          <SectionTitle>Perguntas frequentes</SectionTitle>
          <Accordion type="single" collapsible className="mt-8">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left text-sm font-semibold text-foreground">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-10 flex justify-center">
            <Cta className="w-full max-w-sm">Garantir meu acesso agora</Cta>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-cream px-5 py-10 text-center">
        <p className="font-display text-sm font-bold text-primary">Fitbook 210 Receitas</p>
        <p className="mt-2 text-xs text-muted-foreground">
          Este material é informativo e não substitui orientação nutricional individual.
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Fitbook. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
