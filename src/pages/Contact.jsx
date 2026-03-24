import { useState } from "react";
import {
  CONTACT_INFO,
  SOCIAL_LINKS,
  SUBJECT_OPTIONS,
  FORMSPREE_ID,
} from "../data/contact";

const INITIAL_FORM = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function FormInput({
  label,
  id,
  type = "text",
  required = false,
  optional = false,
  value,
  onChange,
  placeholder,
  error,
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400"
      >
        {label}
        {required && <span className="text-indigo-500 ml-1">*</span>}
        {optional && (
          <span className="ml-2 text-[10px] normal-case tracking-normal font-normal text-slate-400">
            (optional)
          </span>
        )}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/60
          border transition-all duration-200 outline-none
          text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600
          focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500
          ${
            error
              ? "border-red-400 dark:border-red-500"
              : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
          }`}
      />
      {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (form.phone && !/^[+\d\s\-()]{7,15}$/.test(form.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!form.subject) {
      newErrors.subject = "Please select a subject.";
    }
    if (!form.message.trim()) {
      newErrors.message = "Please write a message.";
    } else if (form.message.trim().length < 20) {
      newErrors.message = "Message is too short — at least 20 characters.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTouched({ name: true, email: true, subject: true, message: true });
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || "Not provided",
          subject: form.subject,
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm(INITIAL_FORM);
        setTouched({});
        setErrors({});
      } else {
        throw new Error("Server error");
      }
    } catch {
      setStatus("error");
    }
  };

  const isFormspreeConfigured = Boolean(FORMSPREE_ID);

  return (
    <main className="pt-20 min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      {/* ── PAGE HERO ──────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 py-20 max-w-7xl mx-auto">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-125 h-75 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-indigo-500 mb-4">
            — Get In Touch
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] mb-6">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-amber-500">
              connect.
            </span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
            Whether you have an opportunity, a project idea, or just want to
            talk backend systems — my inbox is always open.
          </p>

          {/* Availability badge */}
          {CONTACT_INFO.availableForWork && (
            <div className="inline-flex items-center gap-2 px-4 py-2 mt-6 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                Open to opportunities
              </span>
            </div>
          )}
        </div>
      </section>

      {/* ── MAIN GRID ──────────────────────────────────── */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* ── LEFT PANEL (2 cols) ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Direct contact links */}
            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 rounded-3xl p-6">
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-5">
                Contact Directly
              </h2>
              <div className="flex flex-col gap-3">
                {SOCIAL_LINKS.map(({ label, href, icon, description }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 rounded-2xl hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-indigo-500/10 text-xl shrink-0">
                      {icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm text-slate-800 dark:text-slate-100">
                        {label}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        {description}
                      </p>
                    </div>
                    <span className="text-slate-300 dark:text-slate-600 group-hover:text-indigo-500 transition-colors text-lg">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Location & timezone */}
            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 rounded-3xl p-6">
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-5">
                Location
              </h2>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <p className="font-bold text-sm">{CONTACT_INFO.location}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {CONTACT_INFO.timezone}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">⏱️</span>
                  <div>
                    <p className="font-bold text-sm">Fast Response</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Usually within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Open to */}
            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 rounded-3xl p-6">
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-5">
                Open To
              </h2>
              <ul className="flex flex-col gap-2">
                {CONTACT_INFO.openTo.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── RIGHT PANEL — FORM (3 cols) ── */}
          <div className="lg:col-span-3">
            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 rounded-3xl p-8">
              {/* Formspree not configured warning */}
              {!isFormspreeConfigured && (
                <div className="mb-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl">
                  <p className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                    ⚠️ Setup Required
                  </p>
                  <p className="text-xs text-amber-700 dark:text-amber-300 leading-relaxed">
                    Replace{" "}
                    <code className="bg-amber-500/20 px-1 rounded">
                      YOUR_FORM_ID
                    </code>{" "}
                    in{" "}
                    <code className="bg-amber-500/20 px-1 rounded">
                      src/data/contact.js
                    </code>{" "}
                    with your real Formspree ID from{" "}
                    <a
                      href="https://formspree.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      formspree.io
                    </a>
                    .
                  </p>
                </div>
              )}

              <h2 className="text-2xl font-black tracking-tighter mb-6">
                Send a message
              </h2>

              {/* Success state */}
              {status === "success" ? (
                <div className="py-16 text-center">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-black mb-3">Message sent!</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                    Thanks for reaching out, I'll get back to you at{" "}
                    <span className="font-semibold text-indigo-500">
                      {form.email || "your email"}
                    </span>{" "}
                    within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl text-sm hover:bg-indigo-700 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-5"
                >
                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormInput
                      label="Full Name"
                      id="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Jane Smith"
                      error={touched.name ? errors.name : ""}
                    />
                    <FormInput
                      label="Email Address"
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="jane@company.com"
                      error={touched.email ? errors.email : ""}
                    />
                  </div>
                  {/* Phone (optional) */}

                  {/* Subject dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="subject"
                      className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400"
                    >
                      Subject <span className="text-indigo-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/60
                        border transition-all duration-200 outline-none cursor-pointer
                        text-slate-900 dark:text-white
                        focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500
                        ${
                          errors.subject && touched.subject
                            ? "border-red-400 dark:border-red-500"
                            : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                        }`}
                    >
                      <option value="" disabled>
                        Select a topic...
                      </option>
                      {SUBJECT_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.subject && touched.subject && (
                      <p className="text-xs text-red-500 font-medium">
                        {errors.subject}
                      </p>
                    )}
                  </div>
                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400"
                    >
                      Message <span className="text-indigo-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tell me about your project, opportunity or idea..."
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/60
                        border transition-all duration-200 outline-none resize-none
                        text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600
                        focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500
                        ${
                          errors.message && touched.message
                            ? "border-red-400 dark:border-red-500"
                            : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                        }`}
                    />
                    <div className="flex justify-between items-center">
                      {errors.message && touched.message ? (
                        <p className="text-xs text-red-500 font-medium">
                          {errors.message}
                        </p>
                      ) : (
                        <span />
                      )}
                      <p
                        className={`text-xs ml-auto ${form.message.length < 20 ? "text-slate-400" : "text-emerald-500"}`}
                      >
                        {form.message.length} / 20 min
                      </p>
                    </div>
                  </div>
                  {/* Honeypot — hidden from real users, catches spam bots */}
                  <div style={{ display: "none" }} aria-hidden="true">
                    <input
                      type="text"
                      name="_gotcha"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  {/* Error message */}
                  {status === "error" && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                      <p className="text-sm text-red-600 dark:text-red-400 font-semibold">
                        Something went wrong. Please email me directly at{" "}
                        <a
                          href={`mailto:${CONTACT_INFO.email}`}
                          className="underline"
                        >
                          {CONTACT_INFO.email}
                        </a>
                        .
                      </p>
                    </div>
                  )}
                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed
                      text-white font-black uppercase tracking-widest text-sm rounded-xl
                      shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40
                      hover:-translate-y-0.5 disabled:hover:translate-y-0
                      transition-all duration-200"
                  >
                    {status === "sending" ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message →"
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-400 dark:text-slate-600">
                    I typically respond within 24 hours. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
