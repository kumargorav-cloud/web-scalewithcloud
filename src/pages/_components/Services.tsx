import { motion } from "framer-motion";
import { GitBranch, Server, Cloud, CheckCircle } from "lucide-react";

const services = [
  {
    icon: GitBranch,
    title: "CI/CD Pipeline Automation",
    tagline: "Ship faster. Break nothing.",
    description:
      "End-to-end pipeline design and automation using GitHub Actions, GitLab CI, Jenkins, or CircleCI.",
    bullets: [
      "Multi-stage pipeline design",
      "Automated test & quality gates",
      "Blue/green & canary deployments",
      "Secrets management & SAST",
    ],
    accent: "#22c55e", // green
  },
  {
    icon: Server,
    title: "Docker Deployment",
    tagline: "Container everything. Worry about nothing.",
    description:
      "Full Dockerization of your applications with consistent environments.",
    bullets: [
      "Multi-stage Dockerfiles",
      "Docker Compose orchestration",
      "Kubernetes setup",
      "Image security hardening",
    ],
    accent: "#3b82f6", // blue
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    tagline: "Scale on demand.",
    description:
      "Deploy across AWS, GCP, and Azure with Terraform and auto-scaling.",
    bullets: [
      "Cloud architecture",
      "Terraform automation",
      "Load balancing",
      "Cost optimization",
    ],
    accent: "#10b981", // emerald
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <p className="font-mono text-blue-600 text-sm mb-3">// services</p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            What I deliver
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl">
            Focused specializations to eliminate infrastructure headaches.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, _i) => {
            const Icon = s.icon;

            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition flex flex-col"
              >
                {/* Top line */}
                <div
                  className="absolute top-0 left-6 right-6 h-[2px] opacity-0 group-hover:opacity-100 transition"
                  style={{ background: s.accent }}
                />

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 border"
                  style={{
                    background: `${s.accent}20`,
                    borderColor: `${s.accent}40`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: s.accent }} />
                </div>

                {/* Tagline */}
                <p
                  className="font-mono text-xs mb-1"
                  style={{ color: s.accent }}
                >
                  {s.tagline}
                </p>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-5">
                  {s.description}
                </p>

                {/* Bullets */}
                <ul className="mt-auto space-y-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle
                        className="w-4 h-4 mt-0.5"
                        style={{ color: s.accent }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
