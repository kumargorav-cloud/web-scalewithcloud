import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    body: "We talk through your stack, pain points, team size, and goals. I ask the right questions to understand what you actually need — not just what you asked for.",
  },
  {
    num: "02",
    title: "Architecture Proposal",
    body: "I map out the pipeline or infrastructure design with diagrams, tool choices, and a clear rationale. You approve it before a single line is written.",
  },
  {
    num: "03",
    title: "Build & Configure",
    body: "I implement the solution with documentation at every step. Configs live in your repo. No black boxes — your team can maintain it after I'm done.",
  },
  {
    num: "04",
    title: "Handoff & Support",
    body: "Live demo, walkthrough, and a 30-day support window. I train your team and stay available for questions until you're fully confident.",
  },
];

export default function HowIWork() {
  return (
    <section id="process" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-3">// process</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            How I work
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Transparent, async-friendly, and zero-drama. Here is what engaging with me looks like.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-[2.75rem] top-8 bottom-8 w-px bg-border" />
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="shrink-0 w-[5.5rem] h-[5.5rem] rounded-xl border border-primary/30 bg-primary/10 flex flex-col items-center justify-center relative z-10">
                  <span className="font-mono text-primary text-lg font-bold">{step.num}</span>
                </div>
                <div className="pt-3">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
