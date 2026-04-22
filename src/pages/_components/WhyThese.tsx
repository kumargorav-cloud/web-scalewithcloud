import { motion } from "framer-motion";
import { Zap, Lock, TrendingUp, RefreshCw } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Speed is a feature",
    body: "Manual deployments kill momentum. CI/CD automation means your team ships faster.",
  },
  {
    icon: Lock,
    title: "Containers kill 'works on my machine'",
    body: "Docker ensures consistent environments across dev, staging, and production.",
  },
  {
    icon: TrendingUp,
    title: "Cloud scales with you",
    body: "Auto-scaling cloud infra handles traffic spikes while optimizing cost.",
  },
  {
    icon: RefreshCw,
    title: "Reliability over heroics",
    body: "Automated systems reduce firefighting and improve uptime.",
  },
];

export default function WhyThese() {
  return (
    <section id="why" className="py-24 bg-gray-50 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-blue-100 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <p className="font-mono text-blue-600 text-sm mb-3">
            // why_these_services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Not random. Intentional.
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl">
            CI/CD, Docker, and Cloud are the pillars of modern software delivery.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((r, _i) => {
            const Icon = r.icon;

            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {r.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {r.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 p-6 rounded-xl border border-blue-200 bg-blue-50"
        >
          <p className="font-mono text-sm text-blue-600">
            "If it hurts, do it more frequently, and bring the pain forward."
          </p>
          <cite className="block mt-3 text-xs text-gray-500 not-italic">
            — Jez Humble, Continuous Delivery
          </cite>
        </motion.blockquote>

      </div>
    </section>
  );
}
