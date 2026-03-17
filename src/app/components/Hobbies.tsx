"use client";

import ScrollReveal from "./ScrollReveal";

const hobbies = [
  {
    name: "トレード",
    description: "暗号資産・為替・デリバティブ。市場が開いている限り、チャートは常に頭の中にある。",
  },
  {
    name: "ハッキング",
    description: "CTF常連。セキュリティの穴を見つけるのは趣味であり、システム設計への理解を深める手段。",
  },
  {
    name: "チェス",
    description: "オンラインレーティング上位0.1%。数手先を読む思考は経営判断にも直結する。",
  },
  {
    name: "論文読解",
    description: "経済学・計算機科学・行動心理学。週に10本以上の論文を読み、知識をアップデートし続ける。",
  },
  {
    name: "オープンソース開発",
    description: "自分が使うツールは自分で作る。複数のOSSプロジェクトにコントリビュート。",
  },
  {
    name: "ポーカー",
    description: "不完全情報ゲームの最高峰。確率計算と心理戦の融合は、交渉力のトレーニングそのもの。",
  },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-32 px-8 lg:pr-72">
      <div className="max-w-3xl">
        {/* Section Heading */}
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em]">HOBBIES</h2>
            <span className="text-[11px] text-muted ml-1">趣味</span>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="text-2xl md:text-3xl font-medium leading-relaxed mb-12">
            <span className="inline bg-foreground text-background px-1">遊びですら</span>
            <br />
            <span className="inline bg-foreground text-background px-1">常人の仕事を超える</span>
          </h3>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-0">
          {hobbies.map((hobby, i) => (
            <ScrollReveal key={hobby.name} delay={i * 100}>
              <div className="py-6 border-t border-foreground/15">
                <h4 className="text-sm font-bold mb-2">{hobby.name}</h4>
                <p className="text-xs text-muted leading-[2]">
                  {hobby.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
