"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  FiCode,
  FiShield,
  FiLayers,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiArrowRight,
  FiCheckCircle,
  FiZap,
  FiTrendingUp,
} from "react-icons/fi";

// Illustration components
const BrowserIllustration = () => (
  <svg
    viewBox="0 0 200 200"
    className="w-full h-full"
    preserveAspectRatio="xMidYMid meet"
  >
    <rect
      x="20"
      y="30"
      width="160"
      height="120"
      rx="8"
      fill="url(#browserGradient1)"
    />
    <rect x="20" y="30" width="160" height="30" rx="8" fill="#e2e8f0" />
    <circle cx="35" cy="45" r="4" fill="#ef4444" />
    <circle cx="50" cy="45" r="4" fill="#f59e0b" />
    <circle cx="65" cy="45" r="4" fill="#10b981" />
    <rect
      x="40"
      y="80"
      width="120"
      height="6"
      rx="3"
      fill="#6366f1"
      opacity="0.6"
    />
    <rect
      x="40"
      y="95"
      width="100"
      height="6"
      rx="3"
      fill="#8b5cf6"
      opacity="0.6"
    />
    <rect
      x="40"
      y="110"
      width="110"
      height="6"
      rx="3"
      fill="#ec4899"
      opacity="0.6"
    />
    <motion.circle
      cx="150"
      cy="80"
      r="12"
      fill="#06b6d4"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <defs>
      <linearGradient id="browserGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
  </svg>
);

const AppIllustration = () => (
  <svg
    viewBox="0 0 200 200"
    className="w-full h-full"
    preserveAspectRatio="xMidYMid meet"
  >
    {/* App/Application illustration */}
    {/* Phone/Mobile device */}
    <rect
      x="60"
      y="40"
      width="80"
      height="120"
      rx="12"
      fill="url(#appGradient1)"
    />
    {/* Screen */}
    <rect x="68" y="55" width="64" height="90" rx="6" fill="#1e293b" />
    {/* App icons on screen */}
    <rect x="75" y="65" width="12" height="12" rx="2" fill="#8b5cf6" />
    <rect x="92" y="65" width="12" height="12" rx="2" fill="#06b6d4" />
    <rect x="109" y="65" width="12" height="12" rx="2" fill="#ec4899" />
    <rect x="75" y="82" width="12" height="12" rx="2" fill="#10b981" />
    <rect x="92" y="82" width="12" height="12" rx="2" fill="#f59e0b" />
    <rect x="109" y="82" width="12" height="12" rx="2" fill="#6366f1" />
    {/* Home indicator */}
    <rect x="90" y="140" width="20" height="3" rx="1.5" fill="#64748b" />

    {/* Desktop/Web view */}
    <rect
      x="30"
      y="100"
      width="140"
      height="80"
      rx="8"
      fill="url(#appGradient2)"
      opacity="0.8"
    />
    <rect x="30" y="100" width="140" height="25" rx="8" fill="#e2e8f0" />
    <circle cx="45" cy="112" r="3" fill="#ef4444" />
    <circle cx="55" cy="112" r="3" fill="#f59e0b" />
    <circle cx="65" cy="112" r="3" fill="#10b981" />
    <rect
      x="40"
      y="135"
      width="120"
      height="5"
      rx="2.5"
      fill="#8b5cf6"
      opacity="0.6"
    />
    <rect
      x="40"
      y="145"
      width="100"
      height="5"
      rx="2.5"
      fill="#ec4899"
      opacity="0.6"
    />
    <rect
      x="40"
      y="155"
      width="110"
      height="5"
      rx="2.5"
      fill="#06b6d4"
      opacity="0.6"
    />

    {/* Connection lines */}
    <motion.path
      d="M100 60 Q120 80 140 100"
      stroke="#8b5cf6"
      strokeWidth="2"
      fill="none"
      strokeDasharray="4 4"
      opacity="0.5"
      animate={{ pathLength: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    />

    <defs>
      <linearGradient id="appGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
      <linearGradient id="appGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
  </svg>
);

const AdminIllustration = () => (
  <svg
    viewBox="0 0 200 200"
    className="w-full h-full"
    preserveAspectRatio="xMidYMid meet"
  >
    {/* Server/Dashboard illustration */}
    {/* Main server box */}
    <rect
      x="40"
      y="60"
      width="120"
      height="80"
      rx="6"
      fill="url(#serverGradient1)"
    />
    {/* Server panel lines */}
    <rect
      x="50"
      y="75"
      width="100"
      height="3"
      rx="1.5"
      fill="#10b981"
      opacity="0.8"
    />
    <rect
      x="50"
      y="85"
      width="80"
      height="3"
      rx="1.5"
      fill="#10b981"
      opacity="0.6"
    />
    <rect
      x="50"
      y="95"
      width="90"
      height="3"
      rx="1.5"
      fill="#10b981"
      opacity="0.6"
    />
    <rect
      x="50"
      y="105"
      width="70"
      height="3"
      rx="1.5"
      fill="#10b981"
      opacity="0.6"
    />
    <rect
      x="50"
      y="115"
      width="100"
      height="3"
      rx="1.5"
      fill="#10b981"
      opacity="0.8"
    />

    {/* Status indicators */}
    <motion.circle
      cx="160"
      cy="80"
      r="6"
      fill="#10b981"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.circle
      cx="160"
      cy="100"
      r="6"
      fill="#10b981"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
    />
    <motion.circle
      cx="160"
      cy="120"
      r="6"
      fill="#10b981"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
    />

    {/* Backup/Cloud icon */}
    <motion.path
      d="M100 40 Q80 30 60 40 Q50 50 60 60 Q80 50 100 60 Q120 50 140 60 Q150 50 140 40 Q120 30 100 40"
      fill="#10b981"
      opacity="0.7"
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
    />

    {/* Settings gear */}
    <motion.g
      transform="translate(30, 150)"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <circle
        cx="0"
        cy="0"
        r="12"
        fill="none"
        stroke="#10b981"
        strokeWidth="2"
        opacity="0.6"
      />
      <circle cx="0" cy="0" r="6" fill="#10b981" opacity="0.8" />
      <rect x="-1" y="-12" width="2" height="4" fill="#10b981" opacity="0.6" />
      <rect x="-1" y="8" width="2" height="4" fill="#10b981" opacity="0.6" />
      <rect x="-12" y="-1" width="4" height="2" fill="#10b981" opacity="0.6" />
      <rect x="8" y="-1" width="4" height="2" fill="#10b981" opacity="0.6" />
    </motion.g>

    {/* Database icon */}
    <motion.g transform="translate(170, 150)">
      <ellipse cx="0" cy="0" rx="8" ry="4" fill="#10b981" opacity="0.7" />
      <ellipse cx="0" cy="-6" rx="8" ry="4" fill="#10b981" opacity="0.8" />
      <ellipse cx="0" cy="-12" rx="8" ry="4" fill="#10b981" opacity="0.9" />
      <line
        x1="-8"
        y1="0"
        x2="-8"
        y2="-12"
        stroke="#10b981"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        x1="8"
        y1="0"
        x2="8"
        y2="-12"
        stroke="#10b981"
        strokeWidth="1.5"
        opacity="0.6"
      />
    </motion.g>

    <defs>
      <linearGradient id="serverGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>
  </svg>
);

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("hero");
  const [formStatus, setFormStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset dla lepszego wykrywania

      const sections = [
        { id: "hero", ref: heroRef },
        { id: "uslugi", ref: servicesRef },
        { id: "kontakt", ref: contactRef },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          const sectionBottom = sectionTop + rect.height;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }

      // Jeśli jesteśmy na samej górze, ustaw hero
      if (window.scrollY < 100) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Wywołaj na początku
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ type: "loading", message: "Wysyłanie..." });

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus({
          type: "success",
          message: "Wiadomość została wysłana pomyślnie!",
        });
        (e.target as HTMLFormElement).reset();
        setTimeout(() => {
          setFormStatus({ type: "idle", message: "" });
        }, 5000);
      } else {
        setFormStatus({
          type: "error",
          message: result.error || "Wystąpił błąd podczas wysyłania",
        });
      }
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "Wystąpił błąd podczas wysyłania wiadomości",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 overflow-hidden">
      {/* Animated background gradient */}
      <div
        className="fixed inset-0 opacity-30 dark:opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 50%)`,
        }}
      />

      {/* Sidebar Navigation */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed left-0 top-0 bottom-0 z-50 w-20 md:w-24 flex flex-col items-center py-8 backdrop-blur-lg bg-white/70 dark:bg-slate-900/70 border-r border-slate-200/30 dark:border-slate-800/30"
      >
        <motion.a
          href="#"
          whileHover={{ scale: 1.1 }}
          className="mb-12 flex items-center justify-center"
        >
          <Image
            src="/logo.svg"
            alt="Logo"
            width={40}
            height={40}
            className="dark:invert dark:brightness-0 dark:contrast-200"
            priority
          />
        </motion.a>
        <div className="flex flex-col gap-8 flex-1">
          {[
            { label: "Usługi", href: "#uslugi", id: "uslugi", icon: FiCode },
            { label: "Kontakt", href: "#kontakt", id: "kontakt", icon: FiMail },
          ].map((item, index) => {
            const isActive = activeSection === item.id;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.1, x: 4 }}
                className={`group relative flex flex-col items-center gap-2 transition-colors ${
                  isActive
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                }`}
                title={item.label}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? "bg-indigo-100 dark:bg-indigo-900/40 shadow-lg shadow-indigo-500/20"
                      : "bg-slate-100 dark:bg-slate-800 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/30"
                  }`}
                >
                  <item.icon
                    className={`w-5 h-5 ${
                      isActive ? "text-indigo-600 dark:text-indigo-400" : ""
                    }`}
                  />
                </div>
                <span className="text-xs font-medium hidden md:block">
                  {item.label}
                </span>
                <span className="absolute left-full ml-4 px-3 py-1 bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {item.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 w-1 h-10 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-r-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ y }}
        className="relative min-h-screen flex items-center justify-center px-6 py-20 md:py-32 ml-20 md:ml-24"
      >
        {/* Hero Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block w-96 h-96 z-0"
        >
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Laptop base */}
            <motion.rect
              x="50"
              y="200"
              width="300"
              height="150"
              rx="10"
              fill="url(#laptopGradient)"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            />
            {/* Laptop screen */}
            <motion.rect
              x="70"
              y="80"
              width="260"
              height="140"
              rx="8"
              fill="url(#screenGradient)"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            />
            {/* Code lines on screen */}
            {[
              { x: 90, y: 120, width: 80 },
              { x: 90, y: 150, width: 120 },
              { x: 90, y: 180, width: 100 },
            ].map((line, i) => (
              <motion.rect
                key={i}
                x={line.x}
                y={line.y}
                width={line.width}
                height="8"
                rx="4"
                fill="currentColor"
                className="text-indigo-400"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: line.width }}
                transition={{ delay: 0.9 + i * 0.2, duration: 0.5 }}
              />
            ))}
            {/* Floating code elements */}
            <motion.circle
              cx="320"
              cy="100"
              r="8"
              fill="#8b5cf6"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
            <motion.circle
              cx="340"
              cy="130"
              r="6"
              fill="#06b6d4"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1.2 }}
            />
            <defs>
              <linearGradient
                id="laptopGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <linearGradient
                id="screenGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-block mb-6"
            ></motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight"
            >
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Tworzę nowoczesne
              </span>
              <br />
              <span className="text-slate-900 dark:text-slate-50">
                strony internetowe
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-14 leading-relaxed max-w-2xl mx-auto"
            >
              Przekształcam Twoje pomysły w{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                funkcjonalne
              </span>
              ,{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                responsywne
              </span>{" "}
              i{" "}
              <span className="font-semibold text-pink-600 dark:text-pink-400">
                wydajne
              </span>{" "}
              strony internetowe
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="#kontakt"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-medium flex items-center gap-2 shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/40 transition-all duration-300"
              >
                Skontaktuj się
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
              <motion.a
                href="#uslugi"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 rounded-2xl font-medium hover:bg-indigo-50 dark:hover:bg-indigo-950/30 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300"
              >
                Zobacz usługi
              </motion.a>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              variants={itemVariants}
              className="mt-24 flex justify-center gap-6 flex-wrap"
            >
              {[
                { icon: FiZap, text: "Szybko", color: "yellow" },
                { icon: FiTrendingUp, text: "Skalowalnie", color: "green" },
                { icon: FiCheckCircle, text: "Profesjonalnie", color: "blue" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="flex flex-col items-center gap-3 p-5 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-3xl border border-slate-200/40 dark:border-slate-700/40 shadow-sm hover:shadow-md transition-all duration-300 min-w-[120px]"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </motion.section>

      {/* Services Section */}
      <section
        id="uslugi"
        ref={servicesRef}
        className="relative py-40 px-6 scroll-mt-20 ml-20 md:ml-24 overflow-hidden"
      >
        {/* Decorative background graphics */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Moje usługi
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Kompleksowe rozwiązania dla Twojego biznesu
            </p>
          </motion.div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            style={{ gridAutoRows: "1fr" }}
          >
            {[
              {
                icon: FiCode,
                title: "Tworzenie stron internetowych",
                description:
                  "Projektuję i tworzę nowoczesne, responsywne strony internetowe dostosowane do Twoich potrzeb. Każda strona jest zoptymalizowana pod kątem wydajności i SEO.",
                gradient: "from-blue-500 to-cyan-500",
                features: [
                  "Responsywny design",
                  "Optymalizacja SEO",
                  "Szybkie ładowanie",
                ],
                illustration: "browser",
              },
              {
                icon: FiLayers,
                title: "Tworzenie aplikacji webowych",
                description:
                  "Tworzę zaawansowane aplikacje webowe z wykorzystaniem nowoczesnych technologii. Aplikacje są wydajne, skalowalne i dostosowane do Twoich wymagań biznesowych.",
                gradient: "from-purple-500 to-pink-500",
                features: [
                  "Nowoczesne technologie",
                  "Skalowalność",
                  "Wydajność",
                ],
                illustration: "app",
              },
              {
                icon: FiShield,
                title: "Administrowanie stron",
                description:
                  "Zapewniam kompleksową opiekę nad Twoją stroną internetową. Aktualizacje treści, kopie zapasowe, monitoring bezpieczeństwa i wsparcie techniczne.",
                gradient: "from-green-500 to-emerald-500",
                features: ["Aktualizacje", "Kopie zapasowe", "Bezpieczeństwo"],
                illustration: "shield",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative p-10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-3xl border border-slate-200/40 dark:border-slate-800/40 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}
                />
                <div className="relative mb-8 shrink-0 h-48 flex items-center justify-center">
                  {service.illustration === "browser" ? (
                    <BrowserIllustration />
                  ) : service.illustration === "app" ? (
                    <AppIllustration />
                  ) : (
                    <AdminIllustration />
                  )}
                </div>
                <div
                  className={`relative w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300 shadow-lg shrink-0`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-5 leading-tight shrink-0 h-20 flex items-center">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 text-base shrink-0 h-24 overflow-hidden">
                  {service.description}
                </p>
                <ul className="space-y-3 shrink-0 mt-auto h-24 flex flex-col justify-end">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
                    >
                      <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                        <FiCheckCircle className="text-green-600 dark:text-green-400 w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="kontakt"
        ref={contactRef}
        className="relative py-40 px-6 scroll-mt-20 ml-20 md:ml-24 overflow-hidden"
      >
        {/* Decorative background graphics */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-200 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Skontaktuj się
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Chętnie odpowiem na Twoje pytania
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="hidden md:block"
            >
              <svg
                viewBox="0 0 300 300"
                className="w-full h-auto max-w-md mx-auto"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Mail/Envelope illustration */}
                <rect
                  x="50"
                  y="80"
                  width="200"
                  height="140"
                  rx="8"
                  fill="url(#mailGradient1)"
                />
                <path
                  d="M50 80 L150 180 L250 80"
                  stroke="white"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Letter inside */}
                <motion.rect
                  x="80"
                  y="120"
                  width="140"
                  height="80"
                  rx="4"
                  fill="white"
                  initial={{ y: 120 }}
                  animate={{ y: [120, 110, 120] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {/* Decorative elements */}
                <motion.circle
                  cx="100"
                  cy="60"
                  r="8"
                  fill="#8b5cf6"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.circle
                  cx="200"
                  cy="60"
                  r="6"
                  fill="#06b6d4"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <defs>
                  <linearGradient
                    id="mailGradient1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-3xl border border-slate-200/40 dark:border-slate-800/40 p-10 md:p-14 shadow-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  {
                    id: "name",
                    label: "Imię i nazwisko",
                    type: "text",
                    placeholder: "Jan Kowalski",
                  },
                  {
                    id: "email",
                    label: "Email",
                    type: "email",
                    placeholder: "jan@example.com",
                  },
                ].map((field) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <label
                      htmlFor={field.id}
                      className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      placeholder={field.placeholder}
                      required
                      disabled={formStatus.type === "loading"}
                      className="w-full px-5 py-3.5 border-2 border-slate-200 dark:border-slate-700 rounded-2xl bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10 dark:focus:ring-indigo-400/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Opisz swój projekt..."
                    required
                    disabled={formStatus.type === "loading"}
                    className="w-full px-5 py-3.5 border-2 border-slate-200 dark:border-slate-700 rounded-2xl bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10 dark:focus:ring-indigo-400/10 transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </motion.div>
                {formStatus.type !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-2xl ${
                      formStatus.type === "success"
                        ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800"
                        : formStatus.type === "error"
                        ? "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800"
                        : "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
                    }`}
                  >
                    <p className="text-sm font-medium">{formStatus.message}</p>
                  </motion.div>
                )}
                <motion.button
                  type="submit"
                  disabled={formStatus.type === "loading"}
                  whileHover={
                    formStatus.type !== "loading"
                      ? {
                          scale: 1.05,
                          boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)",
                        }
                      : {}
                  }
                  whileTap={
                    formStatus.type !== "loading" ? { scale: 0.95 } : {}
                  }
                  className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-medium shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/40 flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus.type === "loading" ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Wysyłanie...
                    </>
                  ) : (
                    <>
                      <FiMail />
                      Wyślij wiadomość
                    </>
                  )}
                </motion.button>
              </form>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800"
              >
                <p className="text-center text-slate-600 dark:text-slate-400 mb-4">
                  Lub znajdź mnie na:
                </p>
                <div className="flex justify-center gap-4">
                  {[
                    {
                      icon: FiLinkedin,
                      href: "https://www.linkedin.com/in/tokarski-bartosz-poznan/",
                      label: "LinkedIn",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 py-8 border-t border-slate-200 dark:border-slate-800"
      >
        <div className="text-center text-slate-600 dark:text-slate-400">
          <p>&copy; {new Date().getFullYear()} Wszelkie prawa zastrzeżone</p>
        </div>
      </motion.footer>
    </div>
  );
}
