import {
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const GITHUB = "https://github.com/rakshith072227";
const LINKEDIN = "https://linkedin.com/in/rakshith-kumar-d-2a38981ab";
const EMAIL = "rakshithk422@gmail.com";
const WHATSAPP = "+919019054557";
const ADDRESS = "Coffee Board Layout, Bengaluru – 560024";

export default function Index() {
  return (
    <div id="home" className="relative">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Featured />
      <Certifications />
      <Achievements />
      <Contact />
      <ScrollExploreButton />
    </div>
  );
}

function SectionTitle({
  id,
  kicker,
  title,
  description,
}: {
  id: string;
  kicker?: string;
  title: string;
  description?: string;
}) {
  return (
    <div id={id} className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        {kicker ? (
          <p className="text-base font-semibold uppercase tracking-widest text-primary">
            {kicker}
          </p>
        ) : null}
        <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-muted-foreground text-xl">{description}</p>
        ) : null}
      </div>
    </div>
  );
}

import AnimatedBackground from "../components/addons/AnimatedBackground";
import AnimatedSection from "../components/addons/AnimatedSection";
function WordByWordAnimation({ text, className, isGradient = false }: { text: string; className: string; isGradient?: boolean }) {
  const words = text.split(' ');

  return (
    <p className={`${className} ${isGradient ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent' : ''}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block mr-1"
          style={{
            animation: `wordFadeIn 0.3s ease-in-out forwards`,
            animationDelay: `${index * 0.05}s`,
            opacity: 0,
          }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}
function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <AnimatedBackground />

      {/* Gradient blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-violet-400/70 to-fuchsia-400/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-fuchsia-300/60 to-violet-300/60 blur-3xl" />

      <div className="container pt-24 md:pt-32 pb-16 md:pb-24 grid gap-10 md:grid-cols-12 items-center">

        {/* LEFT SIDE */}
        <div className="md:col-span-8 space-y-6">

          {/* About */}
          <AnimatedSection animationType="fadeInUp" delay={0} duration={0.5}>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              About Me
            </p>
          </AnimatedSection>

          {/* Name */}
          <WordByWordAnimation
            text="Rakshith Kumar D"
            className="text-5xl md:text-6xl font-extrabold leading-none"
            speed={0.02}
          />

          {/* Roles text — fixed visibility */}
          <div className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100">
            {`Data Enthusiast | MBA (Food Business) | Business Analytics | Finance | ESG | IoT in AgriTech`
              .split(" ")
              .map((word, index) => (
                <span
                  key={index}
                  className="inline-block mr-1"
                  style={{
                    animation: `wordFadeIn 0.18s ease-out forwards`,
                    animationDelay: `${index * 0.025}s`,
                    opacity: 0,
                  }}
                >
                  {word}
                </span>
              ))}
          </div>

          {/* Description */}
          <AnimatedSection animationType="fadeInUp" delay={0.15} duration={0.5}>
            <p className="text-muted-foreground max-w-2xl text-lg">
              A statistically adept data visionary pursuing an MBA in Food
              Business (Business Analytics & Finance). I turn raw data into
              actionable insights across finance, ESG, agriculture and IoT
              forecasting.
            </p>
          </AnimatedSection>

          {/* Buttons */}
          <AnimatedSection animationType="fadeInUp" delay={0.25} duration={0.5}>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 shadow hover:shadow-md transition-shadow"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 hover:bg-foreground/5"
              >
                Email Me
              </a>
            </div>
          </AnimatedSection>

          {/* Social Icons */}
          <AnimatedSection animationType="fadeInUp" delay={0.35} duration={0.5}>
            <div className="flex items-center gap-3 text-muted-foreground">
              <a
                aria-label="GitHub"
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md hover:bg-foreground/5 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                aria-label="LinkedIn"
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md hover:bg-foreground/5 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                aria-label="Email"
                href={`mailto:${EMAIL}`}
                className="p-2 rounded-md hover:bg-foreground/5 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>

              <a
                aria-label="Phone"
                href={`tel:${WHATSAPP}`}
                className="p-2 rounded-md hover:bg-foreground/5 transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:col-span-4">
          <AnimatedSection animationType="fadeInRight" delay={0.1} duration={0.7}>
            <div className="relative mx-auto aspect-square w-56 md:w-72 rounded-3xl bg-gradient-to-br from-violet-500 to-fuchsia-500 p-1 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="h-full w-full overflow-hidden rounded-[20px] bg-background">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fbadfe5f8d72a4f4a8286e087988f3add%2Fa0ccb2ce56794efb8e3c3173927daaf7?format=webp&width=800"
                  alt="Rakshith Kumar D profile photo"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
}
function ScrollExploreButton() {
  const [currentSection, setCurrentSection] = useState('home');

  const sections = ['home', 'about', 'education', 'skills', 'experience', 'projects', 'featured', 'certifications', 'achievements', 'contact'];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToNext = () => {
    const currentIndex = sections.indexOf(currentSection);
    const nextIndex = (currentIndex + 1) % sections.length;
    const nextSectionId = sections[nextIndex];

    const nextSection = document.getElementById(nextSectionId);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToNext}
      className="fixed bottom-32 right-10 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-500 group z-40 hover:scale-110"
      aria-label="Scroll to next section"
    >
      <div className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-2 group-hover:border-primary group-hover:text-primary transition-colors">
        <div className="w-1 h-2 bg-current rounded-full animate-bounce group-hover:bg-primary" style={{ animationDuration: '2s' }} />
      </div>
    </button>
  );
}

function About() {
  return (
    <section>
      <SectionTitle
        id="about"
        kicker="About"
        title="About Me"
        description="Data + business blend with strong communication and leadership."
      />
      <div className="container -mt-6">
        <AnimatedSection animationType="fadeInUp">
          <div className="group rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-10 md:p-12 shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-300 backdrop-blur-sm hover:bg-gradient-to-br hover:from-card hover:to-card/60 relative overflow-hidden">
            {/* Gradient accent bar at the top */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

            {/* Left accent element */}
            <div className="absolute -left-20 -top-20 w-40 h-40 rounded-full bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 blur-3xl" />

            <div className="space-y-6 text-muted-foreground leading-relaxed relative z-10">
              <p className="text-lg md:text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
                Being curious about how businesses move from farms and factories to consumers, I've built my journey around understanding the systems that make this possible. With roots in agriculture and current exposure to the food business ecosystem, I enjoy working at the intersection of operations, markets, and real-world business challenges.
              </p>
              <p className="text-lg md:text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
                My professional experiences have given me the opportunity to work closely with people across supply chains, operations, and business functions, where solving practical problems and improving processes became part of everyday learning. I am driven by environments that demand adaptability, collaboration, and continuous improvement.
              </p>
              <p className="text-lg md:text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
                I am passionate about contributing to organizations that are building efficient, scalable, and impactful solutions in food, supply chains, and consumer-focused industries. For me, every role is an opportunity to learn, create value, and grow while working on problems that have real-world impact.
              </p>
            </div>

            {/* Bottom accent bar */}
            <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-gradient-to-tl from-violet-500/10 to-fuchsia-500/10 blur-3xl" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section>
      <SectionTitle id="education" kicker="Education" title="Education" />
      <div className="container -mt-6 grid gap-6 md:grid-cols-2">
        <Card>
          <h3 className="text-lg font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
            MBA – Food Business (Business Analytics & Finance)
          </h3>
          <p className="mt-2 text-base text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
            KVAFSU University — Nov 2024 – Present | CGPA: 8.66
          </p>
        </Card>
        <Card>
          <h3 className="text-lg font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">B.Sc. (Hons.) Agriculture</h3>
          <p className="mt-2 text-base text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
            UAS B University — Sep 2019 – Aug 2023 | CGPA: 8.1
          </p>
        </Card>
      </div>
    </section>
  );
}

function Skills() {
  const skillCategories = [
    {
      name: "Business Analytics & Data-Driven Decision Making",
      items: [
        "Data Interpretation",
        "Strategic Insights",
        "Decision Support Systems",
        "KPI Analysis",
        "Data-Driven Strategy Formulation",
      ],
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-300/30",
      accentColor: "from-blue-400 to-cyan-400",
    },
    {
      name: "Data Visualization & Dashboarding",
      items: [
        "Power BI",
        "Excel",
        "Python",
        "R",
        "Dashboard Automation",
        "Storytelling with Data",
      ],
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-300/30",
      accentColor: "from-green-400 to-emerald-400",
    },
    {
      name: "Predictive Analytics, Regression & Time-Series Forecasting",
      items: [
        "Linear & Multiple Regression",
        "ARIMA Models",
        "Forecast Accuracy Evaluation",
        "Machine Learning Models",
        "Scenario Analysis",
      ],
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-300/30",
      accentColor: "from-purple-400 to-pink-400",
    },
    {
      name: "Statistical Analysis, Hypothesis Testing & Data Modeling",
      items: [
        "Descriptive & Inferential Statistics",
        "ANOVA & Chi-Square Tests",
        "Correlation & Covariance",
        "Sampling Design",
        "Model Validation",
      ],
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-300/30",
      accentColor: "from-orange-400 to-red-400",
    },
    {
      name: "Customer Behavior Analytics, CRM & Market Strategy",
      items: [
        "Customer Segmentation",
        "Churn Analysis",
        "Lead Management",
        "Market Research",
        "Sales Forecasting",
      ],
      color: "from-rose-500/20 to-pink-500/20",
      borderColor: "border-rose-300/30",
      accentColor: "from-rose-400 to-pink-400",
    },
    {
      name: "AI & IoT Applications in Smart Agriculture",
      items: [
        "Precision Farming",
        "Sensor Data Analysis",
        "Yield Prediction",
        "Farm Automation",
        "Agritech Data Integration",
      ],
      color: "from-lime-500/20 to-green-500/20",
      borderColor: "border-lime-300/30",
      accentColor: "from-lime-400 to-green-400",
    },
    {
      name: "Business Intelligence (BI) Reporting & KPI Optimization",
      items: [
        "Performance Dashboards",
        "Operational Metrics",
        "Executive Summary Reports",
        "Process Optimization",
        "Benchmarking",
      ],
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-300/30",
      accentColor: "from-cyan-400 to-blue-400",
    },
    {
      name: "ESG & Sustainability",
      items: [
        "GRI",
        "BRSR",
        "Materiality Mapping",
        "Sustainability Research",
        "ESG Reporting Frameworks",
        "Stakeholder Engagement",
      ],
      color: "from-teal-500/20 to-green-500/20",
      borderColor: "border-teal-300/30",
      accentColor: "from-teal-400 to-green-400",
    },
    {
      name: "Communication & Reporting",
      items: [
        "Presentation Design",
        "Stakeholder Documentation",
        "Report Preparation",
        "Data Storytelling",
        "Analytical Writing",
      ],
      color: "from-indigo-500/20 to-violet-500/20",
      borderColor: "border-indigo-300/30",
      accentColor: "from-indigo-400 to-violet-400",
    },
    {
      name: "Languages",
      items: [
        "English",
        "Kannada",
        "Hindi",
        "Telugu",
        "Tamil",
        "Malayalam",
      ],
      color: "from-amber-500/20 to-yellow-500/20",
      borderColor: "border-amber-300/30",
      accentColor: "from-amber-400 to-yellow-400",
    },
  ];

  return (
    <section>
      <SectionTitle
        id="skills"
        kicker="Skills"
        title="Skills & Expertise"
        description="A comprehensive toolkit spanning analytics, technology, and domain knowledge."
      />
      <div className="container -mt-6 grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <Card key={category.name}>
            <div className="flex flex-col gap-4 h-full">
              {/* Category Header */}
              <div className="pb-3 border-b border-border/20">
                <h3 className="font-bold text-base leading-snug bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
                  {category.name}
                </h3>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className={`inline-flex items-center rounded-full border ${category.borderColor} px-3 py-1.5 text-sm font-medium bg-gradient-to-br ${category.color} group-hover:shadow-md group-hover:${category.borderColor} transition-all duration-300 hover:scale-105 cursor-default`}
                  >
                    <span className="inline-block w-1 h-1 rounded-full bg-gradient-to-r mr-2 opacity-70 group-hover:opacity-100" style={{
                      backgroundImage: `linear-gradient(135deg, ${category.accentColor.split(' ')[1]}, ${category.accentColor.split(' ')[3]})`
                    }} />
                    {skill}
                  </span>
                ))}
              </div>

              {/* Skill Count Indicator */}
              <div className="mt-auto pt-3 flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary/70 transition-colors duration-300">
                <div className="flex gap-1">
                  {Array.from({ length: Math.min(5, Math.ceil(category.items.length / 2)) }).map((_, i) => (
                    <div
                      key={i}
                      className="h-1.5 rounded-full bg-gradient-to-r opacity-60 group-hover:opacity-100 transition-opacity"
                      style={{
                        width: `${8 + i * 2}px`,
                        backgroundImage: `linear-gradient(90deg, var(--color-primary), var(--color-primary) 50%, transparent)`
                      }}
                    />
                  ))}
                </div>
                <span className="ml-auto font-medium">{category.items.length} skills</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section>
      <SectionTitle id="experience" kicker="Experience" title="Experience" />
      <div className="container -mt-6 grid gap-6 md:grid-cols-2">
        <Card>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="https://cdn.builder.io/api/v1/image/assets%2Fbadfe5f8d72a4f4a8286e087988f3add%2F196b53ce3ca5433d979896437f5e966e?format=webp&width=120" alt="SIRPI" className="h-8 w-8 rounded-sm object-contain group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">Data Analyst Intern – Sirpi Data Science</h3>
                <p className="text-base text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">Bengaluru | Oct 1st – Oct 31st 2024</p>
              </div>
            </div>
            <span className="rounded-full bg-gradient-to-br from-accent/60 to-accent/30 group-hover:from-accent group-hover:to-accent/50 px-3 py-1 text-sm font-medium transition-all duration-300">Intern</span>
          </div>
          <ul className="mt-3 space-y-1.5 text-base text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
            <li className="flex gap-2"><span className="mt-1 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />Data collection, cleaning, modeling</li>
            <li className="flex gap-2"><span className="mt-1 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />Built dashboards & visualized outcomes</li>
            <li className="flex gap-2"><span className="mt-1 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />Supported decisions using statistical tools</li>
            <li className="flex gap-2"><span className="mt-1 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />Participated in Code2Cognition Bootcamp</li>
          </ul>
        </Card>
        <Card>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="https://cdn.builder.io/api/v1/image/assets%2Fbadfe5f8d72a4f4a8286e087988f3add%2F4c1b9a544fc940ca8c3b57125ecc75c5?format=webp&width=120" alt="NSL Sugars" className="h-8 w-8 rounded-sm object-contain group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">Senior Executive Officer – NSL Sugars Ltd.</h3>
                <p className="text-base text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">Mandya | Oct 2023 – Dec 2024</p>
              </div>
            </div>
            <span className="rounded-full bg-gradient-to-br from-accent/60 to-accent/30 group-hover:from-accent group-hover:to-accent/50 px-3 py-1 text-sm font-medium transition-all duration-300">Full‑time</span>
          </div>
          <ul className="mt-3 space-y-1.5 text-base text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
            <li className="flex gap-2"><span className="mt-1 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />Interactive dashboards in Power BI & Excel</li>
            <li className="flex gap-2"><span className="mt-1 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />Predictive analytics for sugarcane yield</li>
            <li className="flex gap-2"><span className="mt-1 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />Farmer Connect & CRM streamlining</li>
            <li className="flex gap-2"><span className="mt-1 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />Cost‑revenue‑resource optimization</li>
          </ul>
        </Card>
        <Card>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="https://cdn.builder.io/api/v1/image/assets%2Fbadfe5f8d72a4f4a8286e087988f3add%2F077e4074b2104ef29494cc0093fe20dc?format=webp&width=120" alt="KSDA" className="h-8 w-8 rounded-sm object-contain group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">Quality Control Intern KSDA Bio‑Control Lab</h3>
                <p className="text-base text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">Mandya | Nov – Dec 2022</p>
              </div>
            </div>
            <span className="rounded-full bg-gradient-to-br from-accent/60 to-accent/30 group-hover:from-accent group-hover:to-accent/50 px-3 py-1 text-sm font-medium transition-all duration-300">Intern</span>
          </div>
          <ul className="mt-3 space-y-1.5 text-base text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
            <li className="flex gap-2"><span className="mt-1 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />Evaluated bio‑agents</li>
            <li className="flex gap-2"><span className="mt-1 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />Managed parasite rearing systems</li>
          </ul>
        </Card>
      </div>
    </section>
  );
}

function Projects() {
  const cards = [
    {
      title: "Credit Pathways for Small Businesses: Bank Lending vs Trade Credit in Tier-2 & Tier-3 Markets",
      description:
        "Field-based study on MSME credit access in Southern Karnataka, analyzing bank lending vs trade credit mechanisms across formal and informal sectors.",
      bullets: [
        "Conducted field-based research on MSME credit access across Tier-2 and Tier-3 districts of Southern Karnataka.",
        "Analyzed primary data from 90 MSMEs across textile, food processing, and retail sectors to identify dominant working capital financing patterns.",
        "Evaluated formal bank credit instruments (term loans, cash credit, PSL loans) versus informal trade credit systems (supplier and distributor credit).",
        "Identified key barriers to formal finance including collateral constraints, poor financial documentation, and limited credit history.",
        "Developed policy and managerial recommendations highlighting hybrid credit models, digital lending, and supply-chain finance solutions.",
      ],
    },
    {
      title: "Food Retail & Quick Commerce Business Models: Operations, Strategy and Supply Chain Analysis",
      description:
        "Comparative analysis of leading Indian food retail and quick-commerce players, examining business models, supply chain operations, and competitive positioning.",
      bullets: [
        "Conducted in-depth comparative analysis of leading Indian food retail and quick-commerce players including BigBasket, Reliance Fresh, Namdhari Fresh, Zomato, and Blinkit.",
        "Analyzed business models, revenue streams, private label strategies, and competitive positioning across online, offline, and omni-channel formats.",
        "Studied end-to-end supply chain operations, including farm-to-fork sourcing, dark store networks, cold-chain logistics, inventory planning, and last-mile delivery systems.",
        "Evaluated the role of technology integration such as demand forecasting, warehouse management systems, route optimization, and data analytics in operational efficiency.",
        "Assessed customer experience strategies including loyalty programs, service-level guarantees, and quick-commerce delivery models.",
        "Compared traditional retail vs quick-commerce economics, highlighting cost structures, speed-to-market advantages, and scalability challenges.",
        "Documented key learnings from industrial exposure, focusing on warehouse operations, farmer integration, employee welfare, and sustainability practices.",
      ],
    },
    {
      title: "Working Capital Efficiency & Shareholder Return Analysis (FMCG Sector)",
      description:
        "Company-wise financial analysis examining cash conversion cycles, working capital efficiency, and shareholder returns across Nestlé India, Tata Consumer Products, and Britannia Industries.",
      bullets: [
        "Analyzed cash conversion cycle (CCC) trends for Nestlé India, highlighting efficient inventory management and strong receivables control, supported by robust brand strength and faster inventory turnover.",
        "Evaluated ROE performance for Nestlé showing consistently high returns driven by strong operating margins and efficient capital utilization.",
        "Assessed Tata Consumer Products CCC post-portfolio integration, noting moderate working capital intensity and identifying scope for improving receivables and inventory cycles.",
        "Reviewed Britannia Industries CCC analysis indicating efficient payables management and strong ROE driven by high asset turnover and disciplined cost management.",
        "Identified comparative insights: companies with shorter CCC (Nestlé, Britannia) demonstrated higher and more stable ROE, confirming the link between working capital efficiency and profitability.",
        "Demonstrated how Tata Consumer showed improving ROE potential with better working capital optimization and scale efficiencies.",
      ],
    },
    {
      title: "Influence of ESG on Indian Capital Market",
      description:
        "Explored ESG score impact on investment decisions with Python, R, Excel & Shiny; regression and time-series aligned to SEBI BRSR.",
      bullets: [
        "Explored the impact of ESG scores on investment decisions in Indian equity markets.",
        "Built regression models, conducted time-series analysis, and visualized key correlations.",
        "Aligned with SEBI's BRSR mandate and sustainable finance frameworks.",
        "Addressed challenges like greenwashing, data standardization, and compliance complexity.",
        "Discussed the future of Sustainable Finance and ESG-linked instruments in India.",
        "Showcased how companies leverage ESG for innovation, cost-efficiency, and brand equity.",
      ],
    },
    {
      title: "Drought Management in Mandya & Maddur",
      description:
        "Optimal water resource allocation using agri-climatic and spatial data; early warning for farmers and authorities.",
      bullets: [
        "Designed data-driven models for optimal water resource allocation using agri-climatic, hydrological, and spatial datasets to combat drought severity in vulnerable agricultural zones.",
        "Conducted time-series rainfall and soil-moisture analysis to forecast water scarcity trends and guide proactive planning.",
        "Developed an early warning and advisory system to alert farmers and local authorities on potential drought risks, enabling timely crop and irrigation management decisions.",
        "Collaborated with regional agricultural officers and local governance bodies to validate model outputs and ensure field-level applicability.",
        "Proposed a scalable decision-support framework integrating meteorological data, crop stress indicators, and remote sensing imagery to enhance resilience against climate variability.",
      ],
    },
    {
      title: "AI & IoT in Smart Agriculture",
      description:
        "Yield forecasting from automated weather stations and drone imagery; analytics for crop planning and risk management.",
      bullets: [
        "Designed and implemented AI-driven yield forecasting models using automated weather station (AWS) data, drone imagery, and environmental parameters to enhance predictive accuracy.",
        "Applied predictive analytics and machine learning to support data-backed crop planning, irrigation scheduling, and agri-risk management.",
        "Led installation of Automated Weather Stations (AWS) in collaboration with Solidaridad (Netherlands-based global organization).",
        "Developed weather advisory communication system delivering regional-language alerts via WhatsApp for inclusive farmer engagement.",
        "Demonstrated IoT-enabled precision agriculture linking field-level sensing to actionable decision-making for sustainable farming.",
      ],
    },
    {
      title: "Drone Tech for Abiotic Stress Management",
      description: "Tools: Remote Sensing, Data Analytics",
      bullets: [
        "Served as Main Project Coordinator for a drone-assisted foliar spraying initiative covering 1,303 acres across Maddur, Kunigal, and Huliyurdurga.",
        "Collaborated with CRIYAGEN to execute foliar spraying of potassium enhancing drought resilience and water-holding capacity.",
        "Integrated real-time analytics to monitor crop stress recovery and improve precision farming efficiency.",
        "Developed scalable models demonstrating UAV-based nutrient delivery and data-driven agronomic decision-making.",
      ],
    },
    {
      title: "Supply Chain Finance in Dairy Industry – An Overview",
      description:
        "Study on the role of Supply Chain Finance (SCF) in optimizing working capital and financial flows across the Indian dairy sector.",
      bullets: [
        "Conducted a comprehensive study on the role of Supply Chain Finance (SCF) in optimizing working capital and financial flows across the Indian dairy sector.",
        "Analyzed key challenges in dairy supply chains, including payment delays, liquidity issues, and infrastructure gaps, and explored SCF models like reverse factoring, dynamic discounting, and inventory financing.",
        "Developed case studies on leading Indian dairy firms such as Amul, Dodla, Heritage Foods, and Godrej Agrovet, highlighting their SCF initiatives and digital integration (Blockchain, IoT, FinTech partnerships).",
        "Proposed actionable recommendations for improving farmer liquidity, reducing credit risk, and promoting financial sustainability through digital SCF platforms and embedded finance solutions.",
      ],
    },
    {
      title: "Empirical Analysis of Intellectual Property Rights (IPR) in India",
      description:
        "Empirical study of India’s IPR ecosystem analyzing patent, trademark, copyright, and design trends (2019–2024) using IP India datasets.",
      bullets: [
        "Conducted an empirical analysis of India’s IPR ecosystem using official datasets from IP India (2019–2024), identifying key growth patterns in patents, trademarks, copyrights, industrial designs, and GIs.",
        "Analyzed year-on-year patent filing trends and the impact of Startup India and Make in India initiatives on domestic innovation and R&D intensity.",
        "Created data-driven visual reports and dashboards highlighting trends in IP revenues, applicant categories (startups, SMEs, educational institutions), and international vs. domestic participation.",
        "Evaluated policy implications of the Patents Act (1970), Trade Marks Act (1999), Copyright Act (1957), and Plant Variety Protection Act (2001) on India’s innovation ecosystem.",
        "Integrated corporate case studies (Tata Motors, HUL, ITC, Dabur, Marico) linking patent activity to product innovation, sustainability, and competitive advantage.",
        "Presented findings through quantitative charts and legal insight summaries, demonstrating the correlation between IPR growth and national innovation performance.",
        "Engaged in structured Q&A on royalty vs. loyalty fees, patent relaxations during emergencies, and compulsory licensing frameworks, reinforcing understanding of applied IPR policies.",
        "Key Skills: Empirical Data Analysis | Legal & Policy Research | IP Portfolio Analytics | Data Visualization | Business Environment Analysis | Research Presentation.",
      ],
    },
  ];

  return (
    <section>
      <SectionTitle
        id="projects"
        kicker="Projects"
        title="Projects"
        description="Work blending analytics, finance, ESG, and agri-tech innovation."
      />
      <div className="container -mt-6 grid gap-6 md:grid-cols-3">
        {cards.map((c) => (
          <ProjectCard
            key={c.title}
            title={c.title}
            description={c.description}
            image={c.image}
            alt={c.alt}
            bullets={c.bullets}
          />
        ))}
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section>
      <SectionTitle
        id="featured"
        kicker="Featured"
        title="Featured Projects"
        description="Select innovations blending AI, automation, and data-driven financial modelling."
      />
      <div className="container -mt-6 space-y-8">
        {/* --- CUTANO PROJECT --- */}
        <Card>
          <h3 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80 transition-all duration-300 mb-2">
            Cutano – AI-Powered Medical Reporting
          </h3>
          <ul className="space-y-2 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
            <li className="flex gap-2 text-base"><span className="mt-1.5 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />Developed under the mentorship of SIRPI using workflow automation.</li>
            <li className="flex gap-2 text-base"><span className="mt-1.5 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />Designed to reduce physician workload and speed up dermatology diagnoses.</li>
            <li className="flex gap-2 text-base"><span className="mt-1.5 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />AI-powered image analysis for skin conditions with real-time symptom-based diagnostic insights.</li>
            <li className="flex gap-2 text-base"><span className="mt-1.5 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />Dual reports: simple for patients, detailed for doctors.</li>
            <li className="flex gap-2 text-base"><span className="mt-1.5 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />Achieved 80% faster reporting, 60% fewer errors, and improved patient satisfaction.</li>
            <li className="flex gap-2 text-base"><span className="mt-1.5 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />Scalable architecture with integrations to WhatsApp, Google Gemini API, and secure cloud storage.</li>
            <li className="flex gap-2 text-base"><span className="mt-1.5 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />Designed a 3-phase investment roadmap with &gt;200% ROI at enterprise rollout.</li>
          </ul>
          <div className="mt-4 pt-4 border-t border-border/30">
            <a
              href="https://cutano.slicearrow.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300 hover:text-primary/80"
            >
              Visit Platform <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </Card>

        {/* --- PORTFOLIO WEBSITE PROJECT --- */}
        <Card>
          <h3 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80 transition-all duration-300 mb-2">
            Portfolio Website | Personal Project
          </h3>
          <ul className="space-y-2 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
            <li className="flex gap-2 text-base"><span className="mt-1.5 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />Developed and deployed a responsive personal portfolio website to highlight academic, professional, and analytical projects.</li>
            <li className="flex gap-2 text-base"><span className="mt-1.5 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />Built using React.js, Tailwind CSS, and modern web development practices for a clean, responsive UI across devices.</li>
            <li className="flex gap-2 text-base"><span className="mt-1.5 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />Integrated SEO metadata and performance optimizations for faster loading and better discoverability.</li>
            <li className="flex gap-2 text-base"><span className="mt-1.5 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />Deployed seamlessly on Netlify with GitHub version control for continuous integration and updates.</li>
            <li className="flex gap-2 text-base"><span className="mt-1.5 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />Showcases real projects including ESG Analytics, AgriTech applications, and Business Intelligence dashboards.</li>
            <li className="flex gap-2 text-base"><span className="mt-1.5 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />Tech Stack: HTML | CSS | JavaScript | React.js | Tailwind CSS | Git | Netlify</li>
          </ul>
          <div className="mt-4 pt-4 border-t border-border/30">
            <a
              href="https://rakshithkumard.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300 hover:text-primary/80"
            >
              Visit Portfolio <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </Card>

        {/* --- DAIRY UNIT ECONOMICS PROJECT --- */}
        <Card>
          <h3 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80 transition-all duration-300 mb-2">
            Dairy Unit Economics Modelling – Lactonomics
          </h3>
          <ul className="space-y-2 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
            <li className="flex gap-2 text-base"><span className="mt-1.5 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />Developed an analytical model to optimize, forecast, and evaluate dairy unit economics in real time.</li>
            <li className="flex gap-2 text-base"><span className="mt-1.5 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />Designed and tested financial models for small and mini dairy enterprises (1+1 and 10-animal units) to assess revenue, cost, and profitability under varying assumptions.</li>
            <li className="flex gap-2 text-base"><span className="mt-1.5 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />Conducted economic simulations integrating feeding, production, and operational cost parameters for six-year projections.</li>
            <li className="flex gap-2 text-base"><span className="mt-1.5 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />Analyzed enterprise performance metrics including total revenue (₹41.7 lakh), total operating cost (₹35.3 lakh), and projected IRR (26.2%) using scenario-based forecasting.</li>
            <li className="flex gap-2 text-base"><span className="mt-1.5 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />Generated interactive financial dashboards for sensitivity testing and real-time decision-making.</li>
            <li className="flex gap-2 text-base"><span className="mt-1.5 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />Tools & Techniques: Excel-based financial modelling, sensitivity analysis, cost-benefit analysis, and IRR forecasting.</li>
          </ul>
          <div className="mt-4 pt-4 border-t border-border/30">
            <a
              href="https://dairyuniteconomics.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300 hover:text-primary/80"
            >
              Visit Platform <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Certifications() {
  const images = [
    {
      alt: "Entrepreneurship Development Program – BOBSETI, Mandya",
      src: "https://cdn.builder.io/api/v1/image/assets%2Fbadfe5f8d72a4f4a8286e087988f3add%2F429551f9b7c646fab4433e83265d97dd?format=webp&width=800",
    },
    {
      alt: "Python for Everybody – Coursera",
      src: "https://cdn.builder.io/api/v1/image/assets%2Fbadfe5f8d72a4f4a8286e087988f3add%2Fd7b851ed53584c55b4093b1392d9a8fe?format=webp&width=800",
    },
    {
      alt: "Code2Cognition Bootcamp Certificate",
      src: "https://cdn.builder.io/api/v1/image/assets%2Fbadfe5f8d72a4f4a8286e087988f3add%2Ffba930feeb664887b4edb95cc4b7b584?format=webp&width=800",
    },
  ];
  return (
    <section>
      <SectionTitle
        id="certifications"
        kicker="Certifications"
        title="Certifications"
      />
      <div className="container -mt-6 grid gap-6 md:grid-cols-3">
        {images.map((img) => (
          <div
            key={img.src}
            className="group relative rounded-2xl border border-border/50 overflow-hidden bg-gradient-to-br from-card/80 to-card/40 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 backdrop-blur-sm hover:bg-gradient-to-br hover:from-card hover:to-card/60"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-transparent opacity-60 group-hover:opacity-100 transition-opacity z-10" />
            <div className="relative overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent group-hover:from-card/50" />
            </div>
            <div className="p-4 text-base text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{img.alt}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Achievements() {
  const items = [
    "Best Manager Award – National-Level Management Fest, TNAU (2025). Represented at State Young Scientific Parliament",
    "Finalist – Innovation Gambit (Business Plan), International Management Fest, Christ University, Bengaluru (2026)",
    "Placement Club Leader – Designed analytics-driven recruitment strategies to enhance placement outcomes.",
    "Conducted 150+ farmer training sessions using data analytics for crop planning.",
    "Best Lecturer Award – Bangalore District Intercollegiate Competition. NCC 'A' & 'B' Certificates with distinction",
    "Served as the official college delegate at the State-Level Young Scientific Parliament Session.",
    "Excelled for National Integration Camp, showcasing leadership and camaraderie under the esteemed DG NCC, New Delhi",
    "National award recipient in International Science Talent Exam (2012), securing 4th highest score.",
    "Honored as Best All-Rounder by the University of Agricultural Sciences Campus School (2017).",
  ];
  return (
    <section>
      <SectionTitle
        id="achievements"
        kicker="Achievements"
        title="Achievements"
        description="Recognition and awards highlighting leadership, innovation, and impact."
      />
      <div className="container -mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((t) => (
          <Card key={t}>
            <div className="flex flex-col h-full">
              <div className="flex-shrink-0 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-violet-300/30">
                  <svg className="w-6 h-6 text-violet-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <p className="text-base leading-relaxed font-semibold text-foreground flex-1 group-hover:text-primary transition-colors duration-300">
                {t}
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"></span>
                <span className="font-medium">Achievement</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const waUrl = useMemo(() => {
    const text = encodeURIComponent(
      `Hello, I'm ${name}.\nEmail: ${email}\nMobile: ${mobile}\n\n${message}`,
    );
    return `https://wa.me/${WHATSAPP.replace(/[^\d]/g, "")}?text=${text}`;
  }, [name, email, mobile, message]);

  return (
    <section>
      <SectionTitle
        id="contact"
        kicker="Contact"
        title="Get In Touch"
        description="Open to opportunities and collaborations."
      />
      <div className="container -mt-6 grid gap-6 md:grid-cols-1">
        <Card>
          <form className="grid gap-4">
            <label className="grid gap-2">
              <span className="text-base font-medium text-foreground">Name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your name"
                className="h-10 rounded-md border border-border/50 bg-background/50 px-3 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all duration-300 hover:border-border/70"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-base font-medium text-foreground">Email</span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                placeholder="you@example.com"
                className="h-10 rounded-md border border-border/50 bg-background/50 px-3 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all duration-300 hover:border-border/70"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-base font-medium text-foreground">Mobile number</span>
              <input
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
                inputMode="tel"
                placeholder="+91 ..."
                className="h-10 rounded-md border border-border/50 bg-background/50 px-3 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all duration-300 hover:border-border/70"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-base font-medium text-foreground">Message</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                placeholder="How can I help?"
                className="rounded-md border border-border/50 bg-background/50 px-3 py-2 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all duration-300 hover:border-border/70"
              />
            </label>
            <div className="flex gap-3 pt-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-5 py-2.5 shadow-md hover:shadow-lg hover:from-primary hover:to-primary/80 transition-all duration-300"
              >
                Send via WhatsApp
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full border border-border/50 px-5 py-2.5 hover:bg-foreground/10 hover:border-primary/30 transition-all duration-300"
              >
                Email
              </a>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <AnimatedSection animationType="fadeInUp">
      <div className="group rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-6 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 backdrop-blur-sm hover:bg-gradient-to-br hover:from-card hover:to-card/60 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
        {children}
      </div>
    </AnimatedSection>
  );
}

function ProjectCard({
  title,
  description,
  image,
  alt,
  bullets,
}: {
  title: string;
  description: string;
  image?: string;
  alt?: string;
  bullets?: string[];
}) {
  const [expanded, setExpanded] = useState(false);
  const visibleBullets = bullets ? (expanded ? bullets : bullets.slice(0, 2)) : null;
  const hasMore = !!bullets && bullets.length > 2;
  return (
    <AnimatedSection animationType="fadeInUp">
      <div className="group h-full min-h-[320px] rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-6 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col backdrop-blur-sm hover:bg-gradient-to-br hover:from-card hover:to-card/60 relative overflow-hidden">
        {/* Gradient accent bar at the top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

        {image ? (
          <div className="relative mb-4 -mx-6 -mt-6 mb-4">
            <img
              src={image}
              alt={alt || title}
              className="h-36 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          </div>
        ) : null}

        <div className="flex-1">
          <h3 className="text-lg font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
            {title}
          </h3>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
            {description}
          </p>

          {visibleBullets && visibleBullets.length > 0 ? (
            <ul className="mt-4 space-y-2">
              {visibleBullets.map((b) => (
                <li key={b} className="flex gap-2 text-base text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                  <span className="mt-1 h-1 w-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {hasMore ? (
          <div className="pt-4 mt-4 border-t border-border/30">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="text-base font-medium text-primary inline-flex items-center gap-1.5 hover:gap-2 hover:text-primary transition-all duration-300 group/btn"
            >
              {expanded ? "Show less" : "Learn more"}
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        ) : null}
      </div>
    </AnimatedSection>
  );
}

