import { Terminal, Code2, ExternalLink } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Why These?", href: "#why" },
  { label: "How I Work", href: "#process" },
  { label: "AI Workflow", href: "#ai" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Code2, href: "#", label: "GitHub" },
  { icon: ExternalLink, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-blue-100 border border-blue-300 flex items-center justify-center">
              <Terminal className="w-3.5 h-3.5 text-blue-600" />
            </div>
            <span className="font-mono text-sm font-semibold text-gray-800">
              <span className="text-blue-600">{">"}</span> devops.pro
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs text-gray-500 hover:text-blue-600 transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s) => {
              const Icon = s.icon;

              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-400 transition"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500 font-mono">
            &copy; {new Date().getFullYear()} devops.pro — Built with purpose, shipped with precision.
          </p>
        </div>

      </div>
    </footer>
  );
}