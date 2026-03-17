"use client";

import ScrollReveal from "./ScrollReveal";

const timeline = [
  {
    year: "2018",
    title: "ハーバード大学 主席卒業",
    description:
      "世界最高峰の学び舎にて学業を修め、首席で卒業。在学中からビジネスと金融に関する深い知見を蓄積。",
    tag: "EDUCATION",
  },
  {
    year: "2019",
    title: "MLM 世界No.1達成",
    description:
      "グローバルネットワークビジネスにおいて世界トップの成績を記録。マーケティングとセールスの実力を証明。",
    tag: "ACHIEVEMENT",
  },
  {
    year: "2020",
    title: "暗号資産取引所を開設",
    description:
      "BTC取引所を立ち上げ、金融テクノロジーの最前線に参入。プロダクト設計からオペレーションまでを統括。",
    tag: "STARTUP",
  },
  {
    year: "2021",
    title: "ビリオネア達成",
    description:
      "暗号資産市場の成長と独自の投資戦略により、資産がビリオネアの水準に到達。",
    tag: "MILESTONE",
  },
  {
    year: "2022",
    title: "合同会社Meme 創業",
    description:
      "暇つぶしに新会社を設立。経営・マーケティング・財務・テクノロジー・翻訳——多様なスキルセットを駆使し、複数の事業をスタート。",
    tag: "STARTUP",
  },
  {
    year: "2024",
    title: "金融関連の罪に問われる",
    description:
      "事業活動に関連し、金融関連の法的問題に直面。新たな局面を迎える。",
    tag: "TURNING POINT",
  },
  {
    year: "NOW",
    title: "パナマ在住 — リモートで事業を推進",
    description:
      "現在はパナマに拠点を移し、リモート体制で事業を展開。国境を越えたビジネスを推進中。",
    tag: "CURRENT",
  },
];

export default function History() {
  return (
    <section id="history" className="py-32 px-8 lg:pr-72">
      <div className="max-w-3xl">
        {/* Section Heading */}
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em]">HISTORY</h2>
            <span className="text-[11px] text-muted ml-1">自分の歴史</span>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="text-2xl md:text-3xl font-medium leading-relaxed mb-16">
            <span className="inline bg-accent text-accent-text px-1">常識を超える</span>
            <br />
            <span className="inline bg-accent text-accent-text px-1">キャリアの軌跡</span>
          </h3>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[39px] top-0 bottom-0 w-px bg-foreground/15" />

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="relative flex gap-8 pb-12 last:pb-0">
                  {/* Year Badge */}
                  <div className="shrink-0 w-[80px] relative">
                    <span
                      className={`relative z-10 inline-block text-xs font-bold tracking-[0.1em] px-2 py-1 ${
                        item.year === "NOW"
                          ? "bg-accent text-accent-text"
                          : "bg-foreground text-background"
                      }`}
                    >
                      {item.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-0.5">
                    <span className="inline-block text-[10px] tracking-[0.2em] text-muted mb-2">
                      {item.tag}
                    </span>
                    <h4 className="text-base font-bold mb-2">{item.title}</h4>
                    <p className="text-xs text-muted leading-[2]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
