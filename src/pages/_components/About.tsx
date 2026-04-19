import { motion } from "framer-motion";
import { Award, Coffee, Globe, Users } from "lucide-react";

const stats = [
  { icon: Award, value: "5+", label: "Years in DevOps" },
  { icon: Globe, value: "30+", label: "Projects Shipped" },
  { icon: Users, value: "20+", label: "Happy Clients" },
  { icon: Coffee, value: "∞", label: "Cups of Coffee" },
];

const tools = [
  "GitHub Actions", "GitLab CI", "Jenkins", "CircleCI",
  "Docker", "Kubernetes", "Helm", "AWS", "GCP", "Azure",
  "Terraform", "Pulumi", "Prometheus", "Grafana", "ArgoCD",
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      
      {/* Glow */}
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-blue-100 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Header */}
        <motion.div className="mb-16">
          <p className="font-mono text-blue-600 text-sm mb-3">// about_me</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            The engineer behind the pipelines
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* Left */}
          <motion.div className="space-y-8">

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7"
                alt="Developer"
                className="w-full h-full object-cover brightness-90"
              />

              <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur border border-blue-200 text-xs font-mono text-blue-600">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                Open to new projects
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => {
                const Icon = s.icon;

                return (
                  <motion.div
                    key={s.label}
                    className="p-4 rounded-xl border border-gray-200 bg-white flex items-center gap-3"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-blue-600" />
                    </div>

                    <div>
                      <p className="text-xl font-bold">{s.value}</p>
                      <p className="text-xs text-gray-500">{s.label}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div className="space-y-8">

            {/* Text */}
            <div className="space-y-4 text-gray-600">
              <p>
                I'm a DevOps engineer who bridges development and operations.
                Infrastructure should just work — silently and reliably.
              </p>

              <p>
                Over 5 years, I’ve helped teams move from risky deployments
                to fully automated pipelines with zero downtime.
              </p>

              <p>
                Every system I design is tailored to your workflow, not a generic template.
              </p>
            </div>

            {/* Philosophy */}
            <div className="p-5 rounded-xl border border-blue-200 bg-blue-50">
              <p className="font-mono text-xs text-blue-600 mb-2">// philosophy</p>
              <p className="text-sm">
                Automate everything possible. Document everything else.
              </p>
            </div>

            {/* Tools */}
            <div>
              <p className="font-mono text-xs text-gray-500 mb-4">// tools_i_use</p>

              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded border border-gray-200 bg-gray-100 text-gray-700 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}