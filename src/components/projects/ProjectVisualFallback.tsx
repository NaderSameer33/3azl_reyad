import React from "react";
import { ShieldCheck, Droplets, Search, Database, Sparkles, CheckCircle2, Wrench } from "lucide-react";
import { ProjectCategoryId } from "@/types/project";

interface ProjectVisualProps {
  categoryId: ProjectCategoryId;
  title: string;
  stage?: "before" | "during" | "after" | "featured";
  className?: string;
}

export default function ProjectVisual({
  categoryId,
  title,
  stage = "featured",
  className = "",
}: ProjectVisualProps) {
  const getTheme = () => {
    switch (categoryId) {
      case "foam-insulation":
        return {
          gradient: "from-amber-950 via-slate-900 to-amber-900",
          accent: "text-gold-400",
          bgBadge: "bg-gold-500/20 border-gold-500/40 text-gold-300",
          patternColor: "rgba(245, 158, 11, 0.15)",
          icon: ShieldCheck,
          label: "عزل فوم بولي يوريثان",
        };
      case "waterproofing-thermal":
        return {
          gradient: "from-blue-950 via-slate-900 to-sky-950",
          accent: "text-blue-brand-400",
          bgBadge: "bg-blue-brand-500/20 border-blue-brand-500/40 text-blue-brand-300",
          patternColor: "rgba(59, 130, 246, 0.15)",
          icon: Droplets,
          label: "عزل مائي وحراري للأسطح",
        };
      case "leak-detection":
        return {
          gradient: "from-emerald-950 via-slate-900 to-teal-950",
          accent: "text-wa-green-400",
          bgBadge: "bg-wa-green-500/20 border-wa-green-500/40 text-wa-green-300",
          patternColor: "rgba(16, 185, 129, 0.15)",
          icon: Search,
          label: "كشف تسربات المياه",
        };
      case "tank-insulation":
        return {
          gradient: "from-cyan-950 via-slate-900 to-blue-950",
          accent: "text-sky-400",
          bgBadge: "bg-sky-500/20 border-sky-500/40 text-sky-300",
          patternColor: "rgba(6, 182, 212, 0.15)",
          icon: Database,
          label: "عزل وترميم الخزانات",
        };
      case "pools-bathrooms":
      default:
        return {
          gradient: "from-purple-950 via-slate-900 to-indigo-950",
          accent: "text-purple-400",
          bgBadge: "bg-purple-500/20 border-purple-500/40 text-purple-300",
          patternColor: "rgba(168, 85, 247, 0.15)",
          icon: Sparkles,
          label: "عزل المسابح والحمامات",
        };
    }
  };

  const theme = getTheme();
  const IconComponent = theme.icon;

  const getStageBadge = () => {
    switch (stage) {
      case "before":
        return {
          text: "قبل المعالجة والعزل",
          cls: "bg-red-500/25 border-red-500/50 text-red-300",
          icon: Wrench,
        };
      case "during":
        return {
          text: "أثناء مراحل التنفيذ الميداني",
          cls: "bg-gold-500/25 border-gold-500/50 text-gold-300",
          icon: Wrench,
        };
      case "after":
        return {
          text: "بعد اكتمال العزل بنجاح 100%",
          cls: "bg-wa-green-500/25 border-wa-green-500/50 text-wa-green-300",
          icon: CheckCircle2,
        };
      default:
        return null;
    }
  };

  const stageBadge = getStageBadge();

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${theme.gradient} flex flex-col justify-between p-6 select-none ${className}`}
    >
      {/* Background Grid Pattern */}
      <svg
        className="absolute inset-0 h-full w-full opacity-25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`grid-${categoryId}-${stage}`}
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 32V0h32"
              fill="none"
              stroke={theme.patternColor}
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#grid-${categoryId}-${stage})`}
        />
      </svg>

      {/* Header Badges */}
      <div className="relative z-10 flex items-center justify-between gap-2 flex-wrap">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold backdrop-blur-md ${theme.bgBadge}`}
        >
          <IconComponent className="h-3.5 w-3.5" />
          {theme.label}
        </span>

        {stageBadge && (
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-extrabold backdrop-blur-md ${stageBadge.cls}`}
          >
            <stageBadge.icon className="h-3.5 w-3.5" />
            {stageBadge.text}
          </span>
        )}
      </div>

      {/* Center Icon & Visual Blueprint */}
      <div className="relative z-10 my-auto py-6 flex flex-col items-center justify-center text-center">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md shadow-xl transition-transform group-hover:scale-110">
          <IconComponent className={`h-8 w-8 ${theme.accent}`} />
        </div>
        <p className="mt-3 max-w-xs text-xs font-semibold text-white/80 line-clamp-2">
          {title}
        </p>
      </div>

      {/* Bottom Technical Stamp */}
      <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-3 text-[11px] font-medium text-white/50">
        <span>شركة درع الخليج · الرياض</span>
        <span className="font-mono text-white/60">GULF SHIELD SA</span>
      </div>
    </div>
  );
}
