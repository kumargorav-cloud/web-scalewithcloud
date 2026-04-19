import { motion } from "framer-motion";
import { Bot, GitBranch, Server, Cloud, Sparkles, ArrowRight } from "lucide-react";

const useCases = [
  {
    clientType: "Early-stage startup",
    challenge: "Tiny team, no DevOps hire, manual deployments",
    aiRole: "AI-generated pipelines, automated alerts, and smart incident grouping.",
    tools: ["GitHub Copilot", "ChatOps bots", "AI alerting"],
    service: GitBranch,
    serviceLabel: "CI/CD",
  },
  {
    clientType: "Scale-up engineering team",
    challenge: "Inconsistent Docker images causing bugs",
    aiRole: "AI Dockerfile analysis, security scans, and automated fixes.",
    tools: ["AI scanners", "LLM code review", "Diff reports"],
    service: Server,
    serviceLabel: "Docker",
  },
  {
    clientType: "Enterprise migrating to cloud",
    challenge: "Legacy infra, no IaC, high risk",
    aiRole: "AI infra mapping, cost monitoring, and smart dashboards.",
    tools: ["Infra AI", "Cost detection", "Cloud dashboards"],
    service: Cloud,
    serviceLabel: "Cloud",
  },
];

const principles = [
  {
    title: "Client context first",
    body: "AI amplifies good process — it can't replace it.",
  },
  {
    title: "Explainability over magic",
    body: "Everything is reviewed and understood by your team.",
  },
  {
    title: "Targeted, not sprayed",
    body: "AI solves specific bottlenecks — not random problems.",
  },
];

export default function AIApproach() {
  return (
    <section id="ai" className="py-24 relative bg-white">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[300px] bg-blue-100 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Header */}
        <motion.div className="mb-6">
          <p className="font-mono text-blue-600 text-sm mb-3">
            // ai_in_my_workflow
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            How I use AI —
            <br />
            <span className="text-blue-600">tailored to you.</span>
          </h2>
        </motion.div>

        <motion.p className="text-gray-600 max-w-2xl mb-16">
          AI is not one-size-fits-all. I tailor tools based on your team and workflow.
        </motion.p>

        {/* Use cases */}
        <div className="space-y-6 mb-20">
          {useCases.map((u, i) => {
            const Icon = u.service;

            return (
              <motion.div
                key={u.clientType}
                className="group grid md:grid-cols-[200px_1fr] rounded-2xl border border-gray-200 bg-white hover:shadow-md transition"
              >
                {/* Left */}
                <div className="p-6 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>

                  <p className="text-xs font-mono text-blue-600 mb-1">
                    {u.serviceLabel}
                  </p>

                  <p className="font-bold text-sm">{u.clientType}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {u.tools.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] bg-blue-100 text-blue-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right */}
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-xs font-mono text-gray-500 mb-1">
                      // challenge
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      "{u.challenge}"
                    </p>
                  </div>

                  <div className="h-px bg-gray-200" />

                  <div>
                    <p className="text-xs font-mono text-blue-600 mb-2 flex items-center gap-1.5">
                      <Bot className="w-3.5 h-3.5" /> solution
                    </p>
                    <p className="text-sm text-gray-700">{u.aiRole}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Principles */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              className="p-6 rounded-xl border border-gray-200 bg-white"
            >
              <div className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center mb-4 text-xs font-bold">
                0{i + 1}
              </div>

              <h4 className="font-semibold mb-2">{p.title}</h4>
              <p className="text-sm text-gray-600">{p.body}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl border border-blue-200 bg-blue-50">
          <div>
            <p className="font-semibold">
              Want AI in your DevOps workflow?
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Tell me your stack — I’ll suggest the right tools.
            </p>
          </div>

          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition"
          >
            Let's talk AI
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}