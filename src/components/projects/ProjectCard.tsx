"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import LiquidCard from "@/components/ui/LiquidCard";
import {
  MapPin,
  Clock,
  Maximize2,
  PlayCircle,
  ArrowLeft,
  FileText,
  BadgeCheck,
} from "lucide-react";
import { Project } from "@/types/project";
import ProjectVisual from "./ProjectVisualFallback";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <LiquidCard glowColor="sky" className="h-full flex flex-col">
      {/* ── Visual Thumbnail / Mockup ───────────────────────────────── */}
      <Link
        href={`/projects/${project.slug}`}
        className="relative block h-56 w-full overflow-hidden bg-slate-950"
      >
        <ProjectVisual
          categoryId={project.category.id}
          title={project.title}
          stage="featured"
          className="h-full w-full transition-transform duration-500 group-hover:scale-105"
        />

        {/* Riyadh Neighborhood Badge (Top Right) */}
        <div className="absolute top-3 right-3 z-20">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 border border-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-md shadow-md">
            <MapPin className="h-3.5 w-3.5 text-sky-400" />
            {project.district}
          </span>
        </div>

        {/* Warranty Badge (Top Left) */}
        <div className="absolute top-3 left-3 z-20">
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-600/90 border border-blue-400/30 px-2.5 py-1 text-[11px] font-extrabold text-white backdrop-blur-md shadow-md">
            <BadgeCheck className="h-3.5 w-3.5 text-sky-300" />
            {project.warranty.split(" ")[0]} {project.warranty.split(" ")[1]}
          </span>
        </div>

        {/* Video Coverage Indicator if available */}
        {project.videoUrl && (
          <div className="absolute bottom-3 left-3 z-20">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-black/70 border border-sky-400/40 px-2.5 py-0.5 text-[11px] font-bold text-sky-300 backdrop-blur-md">
              <PlayCircle className="h-3.5 w-3.5 text-red-400" />
              فيديو التغطية
            </span>
          </div>
        )}
      </Link>

      {/* ── Card Content ────────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col p-6 text-right">
        {/* Category Pill & City */}
        <div className="mb-3 flex items-center justify-between gap-2 text-xs">
          <span
            className={`inline-block rounded-lg border px-2.5 py-0.5 font-bold ${project.category.badgeColor}`}
          >
            {project.category.nameAr}
          </span>
          <span className="text-slate-400 font-mono text-[11px]">
            {project.city}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-lg font-bold leading-snug text-white group-hover:text-sky-300 transition-colors line-clamp-2">
          <Link href={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="mb-5 text-xs leading-relaxed text-slate-300 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Quick Specs Chips Grid */}
        <div className="mb-6 grid grid-cols-2 gap-2 border-t border-b border-white/5 py-3 text-[11px] text-slate-300">
          <div className="flex items-center gap-1.5">
            <Maximize2 className="h-3.5 w-3.5 text-sky-400 shrink-0" />
            <span className="font-medium text-slate-400">المساحة:</span>
            <span className="font-bold text-white">{project.area}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-teal-400 shrink-0" />
            <span className="font-medium text-slate-400">المدة:</span>
            <span className="font-bold text-white truncate">{project.duration.split(" ")[0]} {project.duration.split(" ")[1]}</span>
          </div>
        </div>

        {/* Footer Action CTA */}
        <div className="mt-auto flex items-center justify-between pt-2">
          <Link
            href={`/projects/${project.slug}`}
            className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600/20 border border-blue-500/30 px-4 py-2.5 text-xs font-extrabold text-blue-200 transition-all duration-200 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/30"
          >
            <FileText className="h-4 w-4" />
            <span>عرض تفاصيل المشروع والتقرير الفني</span>
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover/btn:-translate-x-1" />
          </Link>
        </div>
      </div>
    </LiquidCard>
  );
}
