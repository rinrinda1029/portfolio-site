"use client";

import ScrollReveal from "./ScrollReveal";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useCountUp } from "../hooks/useCountUp";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);
  const count = useCountUp(level, 1500, isVisible);

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs font-medium">{name}</span>
        <span className="text-[10px] text-muted tracking-wider">
          {count}%
        </span>
      </div>
      <div className="w-full h-[3px] bg-foreground/10 overflow-hidden">
        <div
          className="h-full bg-foreground transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

const skillCategories = [
  {
    title: "MANAGEMENT",
    ja: "経営",
    skills: [
      { name: "事業戦略立案", level: 95 },
      { name: "組織マネジメント", level: 90 },
      { name: "M&A / 事業開発", level: 85 },
      { name: "リスクマネジメント", level: 90 },
    ],
  },
  {
    title: "MARKETING",
    ja: "マーケティング",
    skills: [
      { name: "デジタルマーケティング", level: 95 },
      { name: "SNSマーケティング", level: 90 },
      { name: "SEO / コンテンツ戦略", level: 85 },
      { name: "ブランディング", level: 90 },
    ],
  },
  {
    title: "FINANCE",
    ja: "財務",
    skills: [
      { name: "財務分析 / 会計", level: 90 },
      { name: "資金調達 / IR", level: 85 },
      { name: "暗号資産 / ブロックチェーン", level: 95 },
      { name: "投資戦略", level: 90 },
    ],
  },
  {
    title: "TECHNOLOGY",
    ja: "テクノロジー",
    skills: [
      { name: "プロダクト設計", level: 80 },
      { name: "AI / データ分析活用", level: 85 },
      { name: "システムアーキテクチャ", level: 75 },
      { name: "Web3 / DeFi", level: 90 },
    ],
  },
  {
    title: "LANGUAGE",
    ja: "語学・翻訳",
    skills: [
      { name: "英語（ネイティブレベル）", level: 98 },
      { name: "日本語（ネイティブ）", level: 100 },
      { name: "ビジネス翻訳 / 通訳", level: 90 },
      { name: "クロスカルチャー交渉", level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-8 lg:pr-72">
      <div className="max-w-3xl">
        {/* Section Heading */}
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em]">SKILL STACK</h2>
            <span className="text-[11px] text-muted ml-1">能力スタック</span>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="text-2xl md:text-3xl font-medium leading-relaxed mb-16">
            <span className="inline bg-foreground text-background px-1">多領域を横断する</span>
            <br />
            <span className="inline bg-foreground text-background px-1">スキルセット</span>
          </h3>
        </ScrollReveal>

        <div className="space-y-14">
          {skillCategories.map((category, ci) => (
            <ScrollReveal key={category.title} delay={ci * 100}>
              <div className="flex items-center gap-3 mb-6">
                <h4 className="text-xs font-bold tracking-[0.2em]">
                  {category.title}
                </h4>
                <span className="h-px bg-foreground/20 flex-1" />
                <span className="text-[11px] text-muted">{category.ja}</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
                {category.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={si * 150}
                  />
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
