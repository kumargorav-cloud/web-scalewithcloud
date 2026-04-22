import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (field: string) => (e: any) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_hcjfb31",   // 🔁 replace
        "template_fxmilrb",  // 🔁 replace
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "p-s3330CG28JdXp36"    // 🔁 replace
      );

      toast.success("Message sent successfully!");
      setSubmitted(true);

      // reset form
      setForm({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      toast.error("Failed to send message");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div className="mb-12 md:mb-16">
          <p className="font-mono text-blue-600 text-sm mb-3">// contact</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's build something
          </h2>
          <p className="text-gray-600 mt-3">
            Tell me about your project — I’ll respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* Left */}
          <div className="space-y-4">
            <div className="flex gap-3 items-center">
              <Mail className="text-blue-600" />
              <span>devops.pro</span>
            </div>
          </div>

          {/* Right */}
          {submitted ? (
            <div className="text-center py-10">
              <CheckCircle className="text-green-600 w-10 h-10 mx-auto" />
              <h3 className="text-xl font-bold mt-4">
                Message sent!
              </h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                placeholder="Name"
                value={form.name}
                onChange={update("name")}
                className="w-full p-3 border border-gray-300 rounded bg-white"
              />

              <input
                placeholder="Email"
                value={form.email}
                onChange={update("email")}
                className="w-full p-3 border border-gray-300 rounded bg-white"
              />

              <textarea
                placeholder="Your message"
                value={form.message}
                onChange={update("message")}
                className="w-full p-3 border border-gray-300 rounded bg-white"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded flex items-center justify-center gap-2"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>

            </form>
          )}

        </div>
      </div>
    </section>
  );
}
