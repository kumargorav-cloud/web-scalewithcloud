import { motion } from "framer-motion";
import { ArrowRight, GitBranch, Server, Cloud } from "lucide-react";

const tags = [
  "CI/CD Pipelines",
  "Docker",
  "AWS / GCP / Azure",
  "Kubernetes",
  "GitHub Actions",
  "Terraform",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,197,94,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-green-200 blur-[120px]" />

      {/* Background image */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1760548425425-e42e77fa38f1)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-400 bg-green-100 text-green-700 text-xs font-mono mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
          Available for new projects
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold leading-tight tracking-tight"
        >
          I ship infrastructure
          <br />
          <span className="text-green-600">that never sleeps.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          DevOps engineer specializing in CI/CD pipelines, Docker deployments,
          and scalable cloud infrastructure.
        </motion.p>

        {/* CTA */}
        <motion.div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition"
          >
            Start a project
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#services"
            className="flex items-center gap-2 px-6 py-3 rounded border border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-600 transition"
          >
            View services
          </a>
        </motion.div>

        {/* Tags */}
        <motion.div className="mt-14 flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs border border-gray-200"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Icons */}
        <motion.div className="mt-20 grid grid-cols-3 gap-6 max-w-md mx-auto">
          {[
            { icon: GitBranch, label: "CI/CD" },
            { icon: Server, label: "Docker" },
            { icon: Cloud, label: "Cloud" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              <Icon className="w-6 h-6 text-green-600" />
              <span className="text-xs text-gray-500">{label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}