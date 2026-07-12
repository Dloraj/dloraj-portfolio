"use client";

import { useState, useEffect } from "react";

interface ProjectItem {
  tag: string;
  title: string;
  description: string;
  tech: string[];
  certificateImage?: string | string[];
}

const projects: ProjectItem[] = [
  {
    tag: "IoT + AI + Web",
    title: "Fishtastic Capstone",
    description:
      "Solar-powered IoT aquaculture system monitoring 5 parameters, reducing manual checks by 80%. Developed AI-analytics web/mobile app improving response by 70% (ISO 25010 Evaluated at 96.18% - Excellent).",
    tech: ["React Native", "Expo", "Express", "Node.js", "PostgreSQL", "Redis", "Clerk", "Firebase", "TypeScript", "Tailwind CSS", "IoT Sensors", "DevOps"],
  },
  {
    tag: "AI + Helpdesk + Web",
    title: "Queryous IT Autopilot",
    description:
      "Enterprise IT helpdesk autopilot powered by Google Gemini. Automatically triages tickets, classifies category urgency, balances technician workloads, and drafts customized self-resolution troubleshooting steps.",
    tech: ["Next.js", "Google Gemini", "Prisma", "PostgreSQL", "Zod", "Tailwind CSS", "TypeScript"],
  },
  {
    tag: "Portal + Networks + PHP",
    title: "DOST3 Guest Wi-Fi Portal",
    description:
      "A high-performance Captive Portal and administrative dashboard integrated with FortiGate Firewall APIs. Features daily quota tracking, Trainee & Visitor role limit rules, Real User Monitoring (RUM), and MAC-address device whitelisting.",
    tech: ["Laravel", "Vue.js", "PHP", "SQLite", "FortiGate API", "Vite", "Axios", "Tailwind CSS"],
  },
  {
    tag: "Certification",
    title: "Cisco Certified Support Technician (CCST) Cybersecurity",
    description:
      "Certified in cybersecurity fundamentals, including threat analysis, network defense, and incident response.",
    tech: ["Threat Analysis", "Network Defense", "Incident Response", "Cisco"],
    certificateImage: "/certificates/ccst-cybersecurity.pdf",
  },
  {
    tag: "Certification",
    title: "Information Technology Specialist (ITS) Python",
    description:
      "Certified in Python programming, covering variables, functions, data structures, and program logic.",
    tech: ["Python", "Programming Logic", "Data Structures", "Certiport"],
    certificateImage: "/certificates/its-python.pdf",
  },
  {
    tag: "Certification",
    title: "Information Technology Specialist (ITS) Networking",
    description:
      "Certified in networking fundamentals, including TCP/IP, IP addressing, and network security.",
    tech: ["TCP/IP", "IP Addressing", "Network Security", "Certiport"],
    certificateImage: "/certificates/its-networking.pdf",
  },
  {
    tag: "Competition",
    title: "National Programming Challenge 2025 — CODECHUM",
    description:
      "Placed 2nd in the Finals and 5th overall in the Grand Finals among 64 schools nationwide in a high-stakes algorithmic coding challenge.",
    tech: ["Algorithms", "Data Structures", "Competitive Programming"],
    certificateImage: [
      "/certificates/codechum-2025-finals.pdf",
      "/certificates/codechum-2025-group.pdf"
    ],
  },
  {
    tag: "Competition",
    title: "National Programming Challenge 2024 — CODECHUM",
    description:
      "Developed and applied programming skills in a national-level challenge.",
    tech: ["Algorithms", "Problem Solving", "Competitive Programming"],
    certificateImage: "/certificates/codechum-2024.pdf",
  },

  {
    tag: "Certification",
    title: "Google IT Support — Coursera",
    description:
      "Completed a 6-course professional certificate covering IT support, networking, system administration, operating systems, and basic security best practices — 170+ hours.",
    tech: ["SysAdmin", "Networking", "Operating Systems", "Cybersecurity"],
    certificateImage: "/certificates/google-it-support.pdf",
  },
  {
    tag: "Certification",
    title: "Google Cybersecurity — Coursera",
    description:
      "Completed a 9-course professional certificate covering threat analysis, network security, SIEM tools, Python security automation, and incident response — 168+ hours.",
    tech: ["SIEM Tools", "Network Security", "Python", "Incident Response"],
    certificateImage: "/certificates/google-cybersecurity.pdf",
  },
  {
    tag: "Certification",
    title: "Google AI Professional — Coursera",
    description:
      "Completed a 7-course professional certificate covering AI fundamentals, prompt engineering, and responsible AI practices — 10 hours.",
    tech: ["AI Fundamentals", "Prompt Engineering", "Responsible AI"],
    certificateImage: "/certificates/google-ai-professional.pdf",
  },
  {
    tag: "Certification",
    title: "Cisco Networking Academy Certifications",
    description:
      "Completed 19 specialized academy certifications covering CCNA, Linux, Cyber Threat Management, Ethical Hacking, Python, and AI.",
    tech: ["CCNA", "Linux Essentials", "Ethical Hacking", "Threat Management", "Python Essentials", "Modern AI", "AI Fundamentals", "Data Analytics"],
    certificateImage: [
      "/certificates/cisco-linux.pdf",
      "/certificates/cisco-python2.pdf",
      "/certificates/cisco-netbasics.pdf",
      "/certificates/cisco-datascience.pdf",
      "/certificates/cisco-ccna1.pdf",
      "/certificates/cisco-python1.pdf",
      "/certificates/cisco-netconfig.pdf",
      "/certificates/cisco-secsupport.pdf",
      "/certificates/cisco-threatmgmt.pdf",
      "/certificates/cisco-introsec.pdf",
      "/certificates/cisco-netaddress.pdf",
      "/certificates/cisco-packettracer.pdf",
      "/certificates/cisco-modernai.pdf",
      "/certificates/cisco-aifundamentals.pdf",
      "/certificates/cisco-dataanalytics.pdf"
    ],
  },
  {
    tag: "Certification",
    title: "SoloLearn Certifications",
    description:
      "Completed coursework covering Java Programming and intermediate SQL Database queries.",
    tech: ["Java", "SQL Intermediate"],
    certificateImage: [
      "/certificates/sololearn-java.pdf",
      "/certificates/sololearn-sql.pdf"
    ],
  },
];

interface ProjectImageProps {
  title: string;
  isActive: boolean;
}

interface TechChipProps {
  name: string;
}

function TechChip({ name }: TechChipProps) {
  const getIcon = (techName: string) => {
    const lowercase = techName.toLowerCase();
    switch (lowercase) {
      case "react native":
      case "react":
        return (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        );
      case "expo":
        return (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
            <path d="M2.083 3.375A.375.375 0 001.7 3.75v16.5c0 .207.168.375.375.375h19.834a.375.375 0 00.375-.375V3.75a.375.375 0 00-.375-.375H2.083zm4.5 3h10.834v1.5H6.583v-1.5zm0 3.75h10.834v1.5H6.583v-1.5zm0 3.75h10.834v1.5H6.583v-1.5zm0 3.75h6.5v1.5h-6.5v-1.5z" />
          </svg>
        );
      case "next.js":
        return (
          <svg viewBox="0 0 180 180" width="12" height="12" fill="currentColor">
            <path d="M117.818 107.03c-2.457-3.923-5.263-7.553-8.358-10.841l-14.733-15.617c-2.42-2.56-5.836-4.004-9.418-4.004h-.233c-3.582 0-7 .126-10.22 1.341v48.618h9.873V88.895c2.193-.846 4.544-1.272 6.944-1.272h.168c2.4 0 4.698.966 6.335 2.697l29.642 31.425C136.002 110.158 144 95.969 144 80c0-35.346-28.654-64-64-64S16 44.654 16 80s28.654 64 64 64c14.288 0 27.42-4.686 37.818-12.97zM80 0c44.183 0 80 35.817 80 80s-35.817 80-80 80S0 124.183 0 80 35.817 0 80 0z" />
          </svg>
        );
      case "node.js":
        return (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
            <path d="M12 2L3.5 6.93v9.85L12 21.7l8.5-4.92V6.93L12 2zm6.65 13.9l-6.65 3.85-6.65-3.85V8.04l6.65-3.85 6.65 3.85v7.86zM12 7.15c-2.67 0-4.85 2.18-4.85 4.85s2.18 4.85 4.85 4.85 4.85-2.18 4.85-4.85-2.18-4.85-4.85-4.85z" />
          </svg>
        );
      case "express":
        return (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
            <line x1="6" y1="6" x2="6.01" y2="6" />
            <line x1="6" y1="18" x2="6.01" y2="18" />
          </svg>
        );
      case "postgresql":
        return (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.66 0 3 1.34 3 3v1.41c1.21.39 2 1.51 2 2.78 0 1.35-.91 2.5-2.1 2.82z" />
          </svg>
        );
      case "redis":
        return (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        );
      case "clerk":
        return (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
          </svg>
        );
      case "firebase":
        return (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L3.5 17.5 12 22l8.5-4.5L12 2z" />
            <path d="M12 2l-4 10 4 3 4-3-4-10z" fill="currentColor" opacity="0.3" />
          </svg>
        );
      case "typescript":
        return (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
            <path d="M2 0h20a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM12 17.5c.3 0 .6-.1.8-.3s.3-.4.3-.8c0-.7-.3-1.1-.9-1.4l-.8-.4c-.7-.3-1.2-.6-1.5-1-.3-.4-.5-.9-.5-1.5 0-.7.3-1.3.8-1.7.5-.4 1.2-.6 2.1-.6.7 0 1.3.1 1.8.4.5.3.8.7.9 1.3l-1.6 1c-.1-.3-.3-.5-.5-.6s-.4-.2-.7-.2c-.3 0-.5.1-.7.2-.2.1-.3.3-.3.5 0 .2.1.4.3.5l.8.4c.8.3 1.3.7 1.6 1.1s.4 1 .4 1.6c0 .8-.3 1.4-.8 1.9s-1.3.7-2.3.7c-.9 0-1.7-.2-2.3-.6s-.9-.9-1-1.6l1.7-.8c.1.3.3.6.5.7.3.1.6.2.9.2zm8.3-4.9h-2.1v7.1H16v-7.1h-2.1v-1.8h6.4v1.8z" />
          </svg>
        );
      case "tailwind css":
      case "nativewind":
        return (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
            <path d="M12 6.086c-2.314-.029-4.225.864-5.734 2.68C5.22 10.144 4.5 12.064 4.5 14.152c0 .28.024.557.069.83.086.518.267.994.542 1.428.275.434.629.774 1.06 1.02.432.247.92.383 1.468.409.28.013.56-.007.84-.06a5.753 5.753 0 002.83-1.428 12.08 12.08 0 002.69-5.734 12.164 12.164 0 00-.069-.83 5.795 5.795 0 00-.542-1.428 5.727 5.727 0 00-1.06-1.02A5.632 5.632 0 0012 6.086zm0 11.828c2.314.029 4.225-.864 5.734-2.68 1.046-1.378 1.766-3.298 1.766-5.386 0-.28-.024-.557-.069-.83a5.772 5.772 0 00-.542-1.428 5.727 5.727 0 00-1.06-1.02A5.632 5.632 0 0012 6.086zm0 0c-2.314-.029-4.225.864-5.734 2.68-1.046 1.378-1.766 3.298-1.766 5.386 0 .28.024.557.069.83.086.518.267.994.542 1.428.275.434.629.774 1.06 1.02.432.247.92.383 1.468.409.28.013.56-.007.84-.06a5.753 5.753 0 002.83-1.428 12.08 12.08 0 002.69-5.734z" />
          </svg>
        );
      case "google gemini":
        return (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
            <path d="M12 2L14.85 9.15L22 12L14.85 14.85L12 22L9.15 14.85L2 12L9.15 9.15L12 2Z" />
            <path d="M19 19L19.7 20.8L21.5 21L19.7 21.2L19 23L18.3 21.2L16.5 21L18.3 20.8L19 19Z" opacity="0.7" />
          </svg>
        );
      case "prisma":
        return (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
            <polyline points="2 8.5 12 12 22 8.5" />
            <polyline points="12 12 12 22" />
          </svg>
        );
      case "zod":
        return (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 11l2 2 4-4" />
          </svg>
        );
      case "laravel":
        return (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
            <path d="M12 12v10" strokeDasharray="3" />
          </svg>
        );
      case "vue.js":
        return (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
            <path d="M12.001 21.144L22.659 2.7H18.33l-6.329 10.96L5.67 2.7H1.341l10.66 18.444z" />
            <path d="M12.001 14.156L17.925 2.7h-3.864l-2.06 3.568L9.94 2.7H6.076l5.925 11.456z" opacity="0.7" />
          </svg>
        );
      case "php":
        return (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="12" rx="10" ry="6" />
            <path d="M8 9v6M12 9v6M16 9v6M12 12h4" />
          </svg>
        );
      case "sqlite":
        return (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
          </svg>
        );
      case "fortigate api":
        return (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        );
      case "vite":
        return (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l-6 13h5.5l-1.5 7L18 9h-5.5l1.5-7z" />
          </svg>
        );
      case "axios":
        return (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="17" y1="10" x2="3" y2="10" />
            <polyline points="13 6 17 10 13 14" />
            <line x1="7" y1="14" x2="21" y2="14" />
            <polyline points="11 18 7 14 11 10" />
          </svg>
        );
      case "python":
        return (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
            <path d="M14.25.18c.9 0 1.76.08 2.58.22a6.72 6.72 0 0 1 5.02 5.02c.14.82.22 1.68.22 2.58v2.4a6.72 6.72 0 0 1-5.24 6.58V18a4.8 4.8 0 0 1-4.8 4.8h-2.4a4.8 4.8 0 0 1-4.8-4.8v-1.02a6.72 6.72 0 0 1-5.02-5.02C.08 11.14 0 10.28 0 9.38v-2.4A4.8 4.8 0 0 1 4.8 2.18h1.02A6.72 6.72 0 0 1 10.84.39C11.97.25 13.12.18 14.25.18zM8.38 5.4a1.2 1.2 0 1 0 0 2.4c.66 0 1.2-.54 1.2-1.2s-.54-1.2-1.2-1.2zm7.2 10.8a1.2 1.2 0 1 0 0 2.4c.66 0 1.2-.54 1.2-1.2s-.54-1.2-1.2-1.2z" />
          </svg>
        );
      case "c++":
      case "c":
        return (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        );
      case "iot sensors":
        return (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
            <rect x="9" y="9" width="6" height="6" />
            <line x1="9" y1="1" x2="9" y2="4" />
            <line x1="15" y1="1" x2="15" y2="4" />
            <line x1="9" y1="20" x2="9" y2="23" />
            <line x1="15" y1="20" x2="15" y2="23" />
            <line x1="20" y1="9" x2="23" y2="9" />
            <line x1="20" y1="15" x2="23" y2="15" />
            <line x1="1" y1="9" x2="4" y2="9" />
            <line x1="1" y1="15" x2="4" y2="15" />
          </svg>
        );
      case "devops":
        return (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 12h.01" strokeWidth="3" />
            <path d="M2.5 12a9.5 9.5 0 0 1 19 0 9.5 9.5 0 0 1-19 0z" strokeDasharray="3" />
            <path d="M6.5 12a5.5 5.5 0 0 1 11 0 5.5 5.5 0 0 1-11 0z" />
          </svg>
        );
      case "network security":
      case "threat management":
      case "incident response":
      case "ethical hacking":
        return (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        );
      case "networking":
      case "sysadmin":
      case "active directory":
      case "operating systems":
      case "siem tools":
        return (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
            <line x1="6" y1="6" x2="6" y2="6" strokeWidth="3" />
            <line x1="6" y1="18" x2="6" y2="18" strokeWidth="3" />
          </svg>
        );
      case "agile":
      case "risk management":
      case "project management":
      case "prompt engineering":
      case "modern ai":
        return (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <line x1="12" y1="2" x2="12" y2="22" />
            <line x1="2" y1="12" x2="22" y2="12" />
          </svg>
        );
      case "data structures":
      case "algorithms":
        return (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 3h12" />
            <path d="M12 3v18" />
            <path d="M8 12h8" />
            <path d="M8 21h8" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        );
    }
  };

  return (
    <span className="tech-chip">
      <span className="tech-chip-icon">
        {getIcon(name)}
      </span>
      {name}
    </span>
  );
}

interface ProjectImageProps {
  title: string;
  isActive: boolean;
}

function ProjectImage({ title, isActive }: ProjectImageProps) {
  const pngSrc = title === "Fishtastic Capstone"
    ? "/fishtastic.png"
    : title === "DOST3 Guest Wi-Fi Portal"
      ? "/dost3-portal.png"
      : title === "Queryous IT Autopilot"
        ? "/queryous.png"
        : "/projects-glimpse.png";

  const gifSrc = title === "Fishtastic Capstone"
    ? "/fishtastic.gif"
    : title === "DOST3 Guest Wi-Fi Portal"
      ? "/dost3-portal.gif"
      : title === "Queryous IT Autopilot"
        ? "/queryous.gif?v=6"
        : null;

  const [loadedGif, setLoadedGif] = useState<string | null>(null);
  const [isGifLoaded, setIsGifLoaded] = useState(false);
  const [isPngLoaded, setIsPngLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Preload PNG
  useEffect(() => {
    const img = new Image();
    img.src = pngSrc;
    img.onload = () => {
      setIsPngLoaded(true);
    };
  }, [pngSrc]);

  useEffect(() => {
    if ((isActive || isMobile) && gifSrc && !loadedGif) {
      const img = new Image();
      img.src = gifSrc;
      img.onload = () => {
        setLoadedGif(gifSrc);
        setIsGifLoaded(true);
      };
    }
  }, [isActive, isMobile, gifSrc, loadedGif]);

  const showGif = (isActive || isMobile) && isGifLoaded && loadedGif;

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", background: "rgba(255,255,255,0.01)" }}>
      {/* Shimmer skeleton underlay */}
      {!isPngLoaded && <div className="skeleton-shimmer" />}

      {/* Static PNG (always rendered as background/fallback) */}
      <img
        src={pngSrc}
        alt={`${title} Preview`}
        className="projects-glimpse-img"
        onLoad={() => setIsPngLoaded(true)}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: !isPngLoaded ? 0 : (showGif ? 0 : 1),
          transition: "opacity 0.4s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 1,
        }}
      />
      {/* GIF element (only active and faded in when fully loaded) */}
      {gifSrc && (
        <img
          src={gifSrc}
          alt={title}
          className="projects-glimpse-img"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: showGif ? 1 : 0,
            transition: "opacity 0.4s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            zIndex: 2,
            pointerEvents: showGif ? "auto" : "none",
          }}
        />
      )}
    </div>
  );
}

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"projects" | "certification">("projects");
  const [certPage, setCertPage] = useState(0);
  const [projectPage, setProjectPage] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState<{ title: string; images: string[] } | null>(null);
  const [certModalIndex, setCertModalIndex] = useState(0);
  const [chunkSize, setChunkSize] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      setChunkSize(window.innerWidth < 768 ? 2 : 4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock background scroll when certificate modal is open
  useEffect(() => {
    const pageWrapper = document.querySelector(".page-wrapper") as HTMLElement;
    const body = document.body;
    if (selectedCertificate) {
      if (pageWrapper) pageWrapper.style.overflowY = "hidden";
      body.style.overflow = "hidden";
    } else {
      if (pageWrapper) pageWrapper.style.overflowY = "auto";
      body.style.overflow = "";
    }
    return () => {
      if (pageWrapper) pageWrapper.style.overflowY = "auto";
      body.style.overflow = "";
    };
  }, [selectedCertificate]);

  const onlyProjects = projects.filter(
    (p) => p.tag !== "Certification" && p.tag !== "Networking" && p.tag !== "Competition"
  );
  const certifications = projects.filter(
    (p) => p.tag === "Certification" || p.tag === "Networking" || p.tag === "Competition"
  );

  const chunkedCertifications = [];
  for (let i = 0; i < certifications.length; i += chunkSize) {
    chunkedCertifications.push(certifications.slice(i, i + chunkSize));
  }

  const handleTabChange = (tab: "projects" | "certification") => {
    setActiveTab(tab);
    setCertPage(0);
    setProjectPage(0);
  };

  return (
    <section id="projects" className="snap-section" aria-label="Projects and Certifications">
      <div className="section-inner">
        <p className="section-label">
          {activeTab === "projects" ? "What I've built" : "What I've earned"}
        </p>
        <h2 className="section-title">
          {activeTab === "projects" ? "Projects" : "Certifications"}
        </h2>
        <div className="section-divider" aria-hidden="true" />

        {/* Sliding Tabs Nav */}
        <div className="projects-tabs-container">
          <div className="projects-tabs-nav">
            <button
              onClick={() => handleTabChange("projects")}
              className={`projects-tab-btn ${activeTab === "projects" ? "active" : ""}`}
            >
              Projects
            </button>
            <button
              onClick={() => handleTabChange("certification")}
              className={`projects-tab-btn ${activeTab === "certification" ? "active" : ""}`}
            >
              Certification
            </button>
            <div
              className="projects-tab-indicator"
              style={{
                transform: activeTab === "projects" ? "translateX(0)" : "translateX(100%)",
              }}
            />
          </div>
        </div>

        {/* Sliding Slides */}
        <div className="projects-slider-container">
          <div
            className="projects-slider"
            style={{
              transform: activeTab === "projects" ? "translateX(0%)" : "translateX(-50%)",
            }}
          >
            {/* Slide 1: Projects Cinematic Carousel */}
            <div className={`projects-slide slide-projects ${activeTab === "projects" ? "active" : ""}`}>

              {/* Top Project Selector Bar */}
              {onlyProjects.length > 1 && (
                <div
                  className="project-selector-bar"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "40px",
                    marginBottom: "32px",
                    flexWrap: "wrap"
                  }}
                >
                  {onlyProjects.map((project, idx) => {
                    const isActive = projectPage === idx;
                    return (
                      <button
                        key={project.title}
                        onClick={() => setProjectPage(idx)}
                        className={`project-selector-btn ${isActive ? "active" : ""}`}
                        style={{
                          background: "transparent",
                          border: "none",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "8px 0 10px 0",
                          position: "relative",
                          color: isActive ? "var(--text-primary)" : "var(--text-muted-45)",
                          transition: "color 0.3s ease",
                          outline: "none"
                        }}
                      >
                        <span
                          className="project-selector-num"
                          style={{
                            fontFamily: "var(--font-space-grotesk), sans-serif",
                            fontSize: "11px",
                            fontWeight: 700,
                            color: "var(--accent-gold)"
                          }}
                        >
                          0{idx + 1}.
                        </span>
                        <span
                          className="project-selector-name"
                          style={{
                            fontFamily: "var(--font-sans), sans-serif",
                            fontSize: "14px",
                            fontWeight: 600,
                            letterSpacing: "-0.01em"
                          }}
                        >
                          {project.title}
                        </span>
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "2px",
                            background: "var(--accent-gold)",
                            transform: isActive ? "scaleX(1)" : "scaleX(0)",
                            transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                            transformOrigin: "center"
                          }}
                        />
                      </button>
                    );
                  })}
                </div>
              )}

              <div className="projects-carousel-container">
                <div
                  className="projects-carousel-slider"
                  style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    width: `${onlyProjects.length * 100}%`,
                    transform: `translateX(-${(projectPage * 100) / onlyProjects.length}%)`
                  }}
                >
                  {onlyProjects.map((project, idx) => {
                    const isActive = projectPage === idx;

                    const projectMockupAddress = project.title === "Fishtastic Capstone"
                      ? "jarold-portfolio://fishtastic"
                      : project.title === "DOST3 Guest Wi-Fi Portal"
                        ? "jarold-portfolio://dost3-portal"
                        : project.title === "Queryous IT Autopilot"
                          ? "jarold-portfolio://queryous"
                          : "jarold-portfolio://codechum-npc";

                    return (
                      <div
                        key={project.title}
                        className={`project-slide-item ${isActive ? "active" : ""}`}
                        style={{
                          width: `${100 / onlyProjects.length}%`,
                          flexShrink: 0
                        }}
                      >
                        <div className="projects-layout">
                          {/* Left: Mockup */}
                          <div className="projects-glimpse-mockup">
                            <div className="mockup-header">
                              <div className="mockup-dots">
                                <span className="mockup-dot red" />
                                <span className="mockup-dot yellow" />
                                <span className="mockup-dot green" />
                              </div>
                              <div className="mockup-address">{projectMockupAddress}</div>

                              {/* Integrated Browser Nav Buttons */}
                              {onlyProjects.length > 1 && (
                                <div className="mockup-nav">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setProjectPage((p) => Math.max(0, p - 1));
                                    }}
                                    disabled={projectPage === 0}
                                    className="mockup-nav-btn"
                                    aria-label="Back"
                                    title="Previous Project"
                                  >
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                      <polyline points="15 18 9 12 15 6" />
                                    </svg>
                                  </button>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setProjectPage((p) => Math.min(onlyProjects.length - 1, p + 1));
                                    }}
                                    disabled={projectPage === onlyProjects.length - 1}
                                    className="mockup-nav-btn"
                                    aria-label="Forward"
                                    title="Next Project"
                                  >
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                      <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                  </button>
                                </div>
                              )}
                            </div>
                            <div className="projects-glimpse-body">
                              <ProjectImage title={project.title} isActive={isActive} />
                            </div>
                          </div>

                          {/* Right: Detailed text details card */}
                          <div
                            className="project-details-card"
                            style={{
                              border: "1px solid var(--border-card)",
                              borderRadius: "12px",
                              padding: "30px",
                              background: "var(--bg-card)",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "flex-start",
                              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                              minHeight: "100%",
                              width: "100%"
                            }}
                          >
                            <span
                              className="project-tag"
                              style={{
                                display: "inline-block",
                                fontSize: "8px",
                                fontWeight: "600",
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                                color: "var(--accent-gold)",
                                border: "1px solid rgba(212, 168, 83, 0.3)",
                                borderRadius: "100px",
                                padding: "4px 10px",
                                marginBottom: "14px",
                                alignSelf: "flex-start"
                              }}
                            >
                              {project.tag}
                            </span>
                            <h3
                              className="project-title"
                              style={{
                                fontSize: "24px",
                                fontWeight: "700",
                                marginBottom: "12px",
                                lineHeight: "1.25",
                                color: "var(--text-primary)"
                              }}
                            >
                              {project.title}
                            </h3>
                            <p
                              className="project-desc"
                              style={{
                                fontSize: "14px",
                                lineHeight: "1.7",
                                color: "var(--text-muted-60)",
                                marginBottom: "20px",
                                textAlign: "left",
                                maxWidth: "520px"
                              }}
                            >
                              {project.description}
                            </p>
                            <div
                              className="project-tech"
                              aria-label="Technologies used"
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "8px"
                              }}
                            >
                              {project.tech.map((t) => (
                                <TechChip key={t} name={t} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Slide 2: Certifications Grid Carousel */}
            <div className={`projects-slide slide-certification ${activeTab === "certification" ? "active" : ""}`}>
              <div className="certifications-carousel">
                <div
                  className="certifications-slider"
                  style={{
                    width: `${chunkedCertifications.length * 100}%`,
                    transform: `translateX(-${(certPage * 100) / chunkedCertifications.length}%)`
                  }}
                >
                  {chunkedCertifications.map((chunk, idx) => (
                    <div
                      key={idx}
                      className="certifications-page"
                      style={{ width: `${100 / chunkedCertifications.length}%` }}
                    >
                      <div className="certifications-grid">
                        {chunk.map((cert) => (
                          <article
                            key={cert.title}
                            className="project-card"
                            onClick={() => {
                              if (cert.certificateImage) {
                                const images = Array.isArray(cert.certificateImage)
                                  ? cert.certificateImage
                                  : [cert.certificateImage];
                                setSelectedCertificate({ title: cert.title, images });
                                setCertModalIndex(0);
                              }
                            }}
                          >
                            <span className="project-tag" style={{ alignSelf: 'flex-start' }}>{cert.tag}</span>
                            <h3 className="project-title">{cert.title}</h3>
                            <p className="project-desc">{cert.description}</p>
                            <div className="project-tech" aria-label="Technologies used" style={{ marginBottom: cert.certificateImage ? '12px' : '0' }}>
                              {cert.tech.map((t) => (
                                <TechChip key={t} name={t} />
                              ))}
                            </div>
                            {cert.certificateImage && (
                              <div className="view-cert-btn">
                                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={{ marginRight: '6px' }}>
                                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                View Credential
                              </div>
                            )}
                          </article>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pagination Controls */}
              {chunkedCertifications.length > 1 && (
                <div className="carousel-controls">
                  <button
                    onClick={() => setCertPage((p) => Math.max(0, p - 1))}
                    disabled={certPage === 0}
                    className="carousel-control-btn"
                    aria-label="Previous Page"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>

                  <div className="carousel-dots">
                    {chunkedCertifications.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCertPage(idx)}
                        className={`carousel-dot ${certPage === idx ? "active" : ""}`}
                        aria-label={`Go to page ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setCertPage((p) => Math.min(chunkedCertifications.length - 1, p + 1))}
                    disabled={certPage === chunkedCertifications.length - 1}
                    className="carousel-control-btn"
                    aria-label="Next Page"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div
            className="cert-modal-overlay"
            onClick={() => {
              setSelectedCertificate(null);
              setCertModalIndex(0);
            }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 9999,
              padding: '20px',
            }}
          >
            <div
              className="cert-modal-content"
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-card-hover)',
                borderRadius: '16px',
                padding: '24px',
                maxWidth: '900px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)' }}>{selectedCertificate.title}</h3>
                  {selectedCertificate.images.length > 1 && (
                    <p style={{ fontSize: '12px', color: 'var(--accent-gold)', marginTop: '4px', fontWeight: 500 }}>
                      Certificate {certModalIndex + 1} of {selectedCertificate.images.length}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => {
                    setSelectedCertificate(null);
                    setCertModalIndex(0);
                  }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-muted-45)',
                    cursor: 'pointer',
                    fontSize: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    transition: 'all 0.2s ease',
                    outline: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--text-muted-45)';
                  }}
                >
                  &times;
                </button>
              </div>
              <div style={{ position: 'relative', width: '100%', overflow: 'hidden', borderRadius: '8px', background: '#0a0a0a', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px' }}>
                {selectedCertificate.images[certModalIndex].toLowerCase().endsWith('.pdf') ? (
                  <iframe
                    src={`${selectedCertificate.images[certModalIndex]}#toolbar=0&navpanes=0&view=Fit`}
                    title={selectedCertificate.title}
                    style={{ width: '100%', height: '70vh', border: 'none', background: '#fff' }}
                  />
                ) : (
                  <img
                    src={selectedCertificate.images[certModalIndex]}
                    alt={selectedCertificate.title}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const placeholder = document.getElementById('cert-placeholder');
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                    onLoad={(e) => {
                      e.currentTarget.style.display = 'block';
                      const placeholder = document.getElementById('cert-placeholder');
                      if (placeholder) placeholder.style.display = 'none';
                    }}
                    style={{ maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain' }}
                  />
                )}
                <div
                  id="cert-placeholder"
                  style={{
                    display: 'none',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '40px 20px',
                    color: 'var(--text-muted-60)',
                    fontFamily: 'var(--font-sans), sans-serif',
                    textAlign: 'center'
                  }}
                >
                  <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ marginBottom: '16px', color: 'var(--accent-gold)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                  <h4 style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Certificate Image Not Found</h4>
                  <p style={{ fontSize: '14px', maxWidth: '400px' }}>
                    Please save the certificate image as <strong>{selectedCertificate.images[certModalIndex]}</strong> in your project's <code>/public/certificates/</code> folder to display it here.
                  </p>
                </div>

                {/* Navigation Arrows */}
                {selectedCertificate.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCertModalIndex((prev) => (prev === 0 ? selectedCertificate.images.length - 1 : prev - 1))}
                      style={{
                        position: 'absolute',
                        left: '16px',
                        background: 'rgba(0, 0, 0, 0.6)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#fff',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background 0.2s ease',
                        zIndex: 10,
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)'}
                    >
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setCertModalIndex((prev) => (prev === selectedCertificate.images.length - 1 ? 0 : prev + 1))}
                      style={{
                        position: 'absolute',
                        right: '16px',
                        background: 'rgba(0, 0, 0, 0.6)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#fff',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background 0.2s ease',
                        zIndex: 10,
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)'}
                    >
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
