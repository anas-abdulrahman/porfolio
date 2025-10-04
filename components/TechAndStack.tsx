  "use client";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  CloudLightning,
  Cpu,
  Rocket,
  Sparkle,
  Workflow,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

interface SkillDetail {
  name: string;
  level: number;
  description: string;
  experience: string;
}

interface StackCluster {
  id: string;
  title: string;
  headline: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: SkillDetail[];
}

const STACK_CLUSTERS: StackCluster[] = [
  {
    id: "frontend",
    title: "Frontend Craft",
    headline: "Immersive interfaces that balance performance with polish.",
    icon: Sparkle,
    skills: [
      {
        name: "React 18",
        level: 90,
        description: "Concurrent UI patterns, Suspense, and streaming data flows.",
        experience: "5+ years",
      },
      {
        name: "NextJs",
        level: 80,
        description: "Hybrid rendering, static generation, and edge functions.",
        experience: "5+ years",
      },
      {
        name: "Tailwind CSS",
        level: 90,
        description: "Design systems, responsive tokens, and utility-first scaling.",
        experience: "4+ years",
      },
      {
        name: "Framer Motion",
        level: 50,
        description: "Micro-interactions, scene choreography, and motion heuristics.",
        experience: "3+ years",
      },
    ],
  },
  {
    id: "architecture",
    title: "System Architecture",
    headline: "Composable ecosystems ready for growth and experimentation.",
    icon: Workflow,
    skills: [
      {
        name: "Design Systems",
        level: 87,
        description: "Token-driven theming, UI kits, and accessibility workflows.",
        experience: "4+ years",
      },
      {
        name: "State Modeling",
        level: 85,
        description: "Redux Toolkit, and complex data orchestration.",
        experience: "4+ years",
      },
      {
        name: "Performance Profiling",
        level: 83,
        description: "React Profiler, Lighthouse, bundle strategy, and code splitting.",
        experience: "1+ years",
      },
      {
        name: "Testing Strategy",
        level: 60,
        description: "Jest, React Testing Library, and end-to-end frameworks.",
        experience: "1+ years",
      },
    ],
  },
  {
    id: "server",
    title: "Backend & DevOps",
    headline: "Reliable deployments backed by automation and observability.",
    icon: CloudLightning,
    skills: [
      {
        name: "NodeJs",
        level: 82,
        description: "Express, RESTful APIs, and server-side rendering.",
        experience: "5+ years",
      },
      {
        name: "CI Automation",
        level: 78,
        description: "GitHub Actions, release pipelines, and quality gates.",
        experience: "3+ years",
      },
      {
        name: "Analytics",
        level: 76,
        description: "Product analytics instrumentation and insight loops.",
        experience: "3+ years",
      },
      {
        name: "MySQL & Postgres",
        level: 95,
        description: "Database schema design, indexing, and query optimization.",
        experience: "4+ years",
      },
    ],
  },
];

const AUTO_ROTATE_INTERVAL = 6500;

const TechAndStack = () => {
  const [activeCluster, setActiveCluster] = useState<string>(STACK_CLUSTERS[0].id);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveCluster((previous) => {
        const currentIndex = STACK_CLUSTERS.findIndex((cluster) => cluster.id === previous);
        const nextIndex = (currentIndex + 1) % STACK_CLUSTERS.length;
        return STACK_CLUSTERS[nextIndex].id;
      });
    }, AUTO_ROTATE_INTERVAL);

    return () => window.clearInterval(intervalId);
  }, []);

  const activeStack = useMemo(
    () => STACK_CLUSTERS.find((cluster) => cluster.id === activeCluster) ?? STACK_CLUSTERS[0],
    [activeCluster],
  );

  return (
    <section className="relative isolate overflow-hidden rounded-3xl  border-white/10  backdrop-blur-xl shadow-[0_50px_140px_-40px_rgba(15,23,42,0.45)]">
      {/* <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/40 via-white/10 to-transparent" /> */}
      <div className="border-b py-10 border-white/10">
        {/* <motion.div
          className="inline-flex items-center gap-3 rounded-full bg-slate-900/80 px-5 py-2 text-xs font-medium tracking-widest uppercase text-white/80 shadow-[0_20px_45px_-20px_rgba(15,23,42,0.75)]"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Rocket className="h-4 w-4 text-emerald-300" />
          Tech Stack
        </motion.div> */}
        <div className="mt-6 grid gap-6 sm:grid-cols-[1.5fr,1fr] sm:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
              Building refined digital products with a future-proof toolkit
            </h2>
            <p className="mt-4 text-base text-slate-300 sm:text-lg">
              A blend of expressive UI craftsmanship and resilient delivery pipelines. Each skill is calibrated
              through shipped experiences, lean experimentation, and collaborative product framing.
            </p>
          </div>
          <motion.div
            className="flex flex-wrap items-center gap-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.08, delayChildren: 0.2 },
              },
            }}
          >
            {STACK_CLUSTERS.map((cluster) => {
              const Icon = cluster.icon;
              const isActive = cluster.id === activeCluster;

              return (
                <motion.button
                  key={cluster.id}
                  type="button"
    //               style={{
    //     background: "rgb(4,7,29)",
    //     backgroundColor:
    //       "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
    //   }}
                  onClick={() => setActiveCluster(cluster.id)}
                  className="relative rounded-2xl border border-slate-900/10  px-4 py-3 text-left shadow-sm outline-none transition focus-visible:ring-2 focus-visible:ring-slate-900/30 bg-slate-900/60 backdrop-blur hover:bg-slate-900/70 hover:shadow-md"
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-inner">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{cluster.title}</p>
                      <p className={`text-xs  ${isActive ? "text-slate-800" : "text-slate-500"}`}>{cluster.headline}</p>
                    </div>
                  </div>
                  {isActive ? (
                    <motion.span
                      layoutId="stack-glow"
                      className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-emerald-200/70 to-sky-200/40"
                      transition={{ type: "spring", stiffness: 200, damping: 24 }}
                    />
                  ) : null}
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>

      <div className="relative py-10 sm:px-12">
        <div className="absolute inset-x-0 -top-4 z-0 flex justify-center">
          <motion.div
            className="h-2 w-40 my-6 rounded-full bg-gradient-to-r from-emerald-300/50 via-sky-300/60 to-indigo-300/50"
            layoutId="stack-divider"
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStack.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative z-10 grid gap-8 lg:grid-cols-2"
          >
            <div className="space-y-6">
              {activeStack.skills.map((skill, index) => (
                <motion.div
    //             style={{
    //     background: "rgb(4,7,29)",
    //     backgroundColor:
    //       "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
    //   }}
                  key={skill.name}
                  className="rounded-2xl border border-slate-900/10  p-6 shadow-lg bg-slate-900/60 backdrop-blur"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                      <p className="mt-1 text-sm text-slate-500">{skill.description}</p>
                    </div>
                    <motion.span
                      className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.08 + 0.15 }}
                    >
                      <Cpu className="h-4 w-4" />
                      {skill.experience}
                    </motion.span>
                  </div>
                  <div className="mt-5">
                    <div className="flex items-center justify-between text-xs font-medium uppercase tracking-widest text-slate-500">
                      <span>Mastery</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-slate-200">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-400"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.9, delay: index * 0.08 + 0.15, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-6 rounded-2xl border border-slate-900/10 bg-slate-900/60 text-white p-6 shadow-xl">
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.2 }}
              >
                <BarChart3 className="h-6 w-6 text-emerald-300" />
                <p className="text-sm font-medium uppercase tracking-widest text-white/70">
                  Current Focus
                </p>
              </motion.div>
              <motion.h3
                className="text-2xl font-semibold leading-tight"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
              >
                {activeStack.title}
              </motion.h3>
              <motion.p
                className="text-sm leading-relaxed text-white/70"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {activeStack.headline}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.35 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  Highlight Metrics
                </p>
                <ul className="mt-4 space-y-3 text-sm text-white/80">
                  <li className="flex items-center justify-between">
                    <span>Average project velocity</span>
                    <strong className="text-emerald-200">1.8x</strong>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Production deployments</span>
                    <strong className="text-emerald-200">5</strong>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Design system launches</span>
                    <strong className="text-emerald-200">2</strong>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.4 }}
                className="mt-auto flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-3 text-sm font-medium text-white/80"
              >
                <Rocket className="h-5 w-5 text-emerald-300" />
                Continuously evolving through rapid prototyping and research sprints.
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TechAndStack;

