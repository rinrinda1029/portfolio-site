"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const career = [
    {
      period: "- 2018",
      title: "ハーバード大学 主席卒業",
      company: "飛び級で入学、在学中に3つの学術賞を受賞。卒業時GPA 4.0",
    },
    {
      period: "2019",
      title: "MLM世界No.1 — 史上最年少記録",
      company: "参入からわずか11ヶ月でグローバルランキング1位を獲得",
    },
    {
      period: "2020",
      title: "暗号資産取引所を開設",
      company: "独学でブロックチェーン技術を習得し、取引所を設計・ローンチ",
    },
    {
      period: "2021",
      title: "ビリオネア到達",
      company: "独自の投資理論と市場分析により、資産10億ドル超を達成",
    },
    {
      period: "2022 -",
      title: "合同会社Meme 創業",
      company: "経営・マーケ・財務・テック・翻訳を一人で回す異次元の多角経営",
    },
    {
      period: "現在",
      title: "パナマ拠点 — グローバル経営",
      company: "国境に縛られない経営スタイルで、リモートから複数事業を統括",
    },
  ];

  return (
    <section id="about" className="py-32 px-8 lg:pr-72">
      <div className="max-w-3xl">
        {/* Section Heading */}
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em]">ABOUT</h2>
            <span className="text-[11px] text-muted ml-1">プロフィール</span>
          </div>
        </ScrollReveal>

        {/* Profile Photo + Principle */}
        <div className="grid md:grid-cols-5 gap-10 mb-20">
          {/* Photo */}
          <ScrollReveal direction="left" className="md:col-span-2">
            <div className="w-full overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="林田将吾"
                width={1200}
                height={675}
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>
            <div className="mt-4 text-sm">
              <p className="font-bold">林田 将吾</p>
              <p className="text-muted text-xs tracking-[0.1em] mt-1">hayashidashogo</p>
            </div>
          </ScrollReveal>

          {/* Principle */}
          <ScrollReveal direction="right" delay={200} className="md:col-span-3 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
              <span className="inline bg-foreground text-background px-1">すべてを学び、</span>
              <br />
              <span className="inline bg-foreground text-background px-1">すべてを動かす</span>
            </h3>

            <p className="text-sm leading-[2] mb-4">
              ハーバードを主席で卒業後、わずか数年でMLM世界一、取引所設立、ビリオネア到達——通常なら一生かかるキャリアを20代で駆け抜けてきました。
            </p>
            <p className="text-sm leading-[2] mb-4">
              経営、マーケティング、財務、テクノロジー、語学。普通は一つを極めるだけで精一杯のスキルを、すべて実戦レベルで操る。それが自分の武器であり、クライアントに提供できる最大の価値です。
            </p>
            <p className="text-sm leading-[2]">
              現在はパナマを拠点に、国境を越えたビジネスを展開中。ご相談は
              <a href="#contact" className="underline underline-offset-4 hover:text-muted transition-colors">
                こちら
              </a>
              からどうぞ。
            </p>
          </ScrollReveal>
        </div>

        {/* Career */}
        <ScrollReveal>
          <h3 className="text-sm font-bold tracking-[0.2em] mb-8">CAREER</h3>
        </ScrollReveal>

        <div className="space-y-0">
          {career.map((item, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 py-6 border-t border-foreground/15 last:border-b">
                <p className="text-xs tracking-[0.1em] text-muted w-32 shrink-0 pt-0.5">
                  {item.period}
                </p>
                <div>
                  <h4 className="text-sm font-bold">{item.title}</h4>
                  <p className="text-xs text-muted mt-1">{item.company}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
