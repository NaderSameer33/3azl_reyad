"use client";

import { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  RotateCcw,
  Activity,
  Layers,
  Thermometer,
} from "lucide-react";
import LiquidCard from "@/components/ui/LiquidCard";

interface ProjectVideoProps {
  videoUrl?: string;
  videoTitle?: string;
  videoPlatform?: "youtube" | "tiktok" | "snapchat" | "direct";
  projectTitle: string;
}

const videoClips = [
  {
    id: "clip-1",
    title: "مقطع 1: كواليس رش الفوم بولي يوريثان الأمريكي 4 سم",
    duration: "00:45",
    tag: "رش الفوم والضغط العالي",
    stats: { pressure: "160 بار", temp: "62°C", thickness: "40 ملم" },
    accentColor: "from-blue-600 to-sky-500",
  },
  {
    id: "clip-2",
    title: "مقطع 2: اختبار الغمر المائي للسطح لمدة 48 ساعة",
    duration: "00:38",
    tag: "اختبار العزل المائي",
    stats: { waterDepth: "15 سم", duration: "48 ساعة", leaks: "0 تسريب" },
    accentColor: "from-teal-600 to-emerald-500",
  },
  {
    id: "clip-3",
    title: "مقطع 3: فحص التسربات تحت البلاط بجهاز النيتروجين",
    duration: "00:52",
    tag: "كشف إلكتروني دقيق",
    stats: { gasPressure: "8 بار", accuracy: "99.8%", damage: "بلاطة واحدة" },
    accentColor: "from-purple-600 to-indigo-500",
  },
];

export default function ProjectVideoSection({
  videoTitle,
  projectTitle,
}: ProjectVideoProps) {
  const [activeClipId, setActiveClipId] = useState("clip-1");
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(35);
  const [currentTime, setCurrentTime] = useState("00:18");

  const activeClip = videoClips.find((c) => c.id === activeClipId) || videoClips[0];

  // Simulation progress timer when playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          const next = prev + 1.5;
          const currentSec = Math.floor((next / 100) * 45);
          setCurrentTime(`00:${currentSec.toString().padStart(2, "0")}`);
          return next;
        });
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950 p-6 sm:p-8 backdrop-blur-xl shadow-2xl text-right select-none">
      {/* ── Header ───────────────────────────────────────────── */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-5">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 px-3 py-0.5 text-xs font-bold text-sky-300 mb-2">
            <Activity className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
            مشغل الفيديو التوثيقي المباشر
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            {videoTitle || `فيديو التغطية الميدانية لـ ${projectTitle}`}
          </h3>
        </div>

        {/* Video switcher tabs */}
        <div className="flex items-center gap-1.5 rounded-2xl bg-slate-900 p-1 border border-white/10">
          {videoClips.map((clip) => (
            <button
              key={clip.id}
              type="button"
              onClick={() => {
                setActiveClipId(clip.id);
                setProgress(10);
                setIsPlaying(true);
              }}
              className={`rounded-xl px-3 py-1.5 text-[11px] font-black transition-all ${
                activeClipId === clip.id
                  ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md shadow-blue-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {clip.tag}
            </button>
          ))}
        </div>
      </div>

      {/* ── Main In-Site Video Player Box ──────────────────────── */}
      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-slate-950 shadow-2xl group/player aspect-video max-w-4xl mx-auto flex flex-col justify-between">
        {/* Animated Simulated Live Video Background */}
        <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          {/* Animated Mesh & Fluid Glow */}
          <div
            className={`absolute inset-0 bg-gradient-to-tr ${activeClip.accentColor} opacity-20 blur-3xl animate-pulse`}
          />

          {/* Animated Particles / Grid Texture */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />

          {/* Live Video Simulation Graphic */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center space-y-4">
              <div className="relative inline-flex items-center justify-center">
                <div
                  className={`h-28 w-28 sm:h-36 sm:w-36 rounded-full bg-gradient-to-tr ${activeClip.accentColor} opacity-40 blur-xl animate-ping`}
                />
                <div className="absolute flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-3xl bg-slate-900/90 border border-white/20 shadow-2xl backdrop-blur-md">
                  <Activity className="h-10 w-10 text-sky-400 animate-pulse" />
                </div>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-black text-white tracking-wide">
                  {activeClip.title}
                </h4>
                <span className="text-[11px] text-teal-300 font-semibold font-mono block mt-1">
                  🔴 بث توثيقي مباشر عالي الدقة (Full HD 1080p) • موقع الرياض
                </span>
              </div>
            </div>
          </div>

          {/* Live Dynamic Telemetry Overlay on Video */}
          <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 rounded-xl bg-slate-950/85 border border-white/15 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur-md shadow-lg">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
              <span>مباشر: توثيق ميداني</span>
            </div>
          </div>

          <div className="absolute top-4 left-4 z-20">
            <div className="rounded-xl bg-slate-950/85 border border-white/15 px-3 py-2 text-[10px] text-slate-300 backdrop-blur-md shadow-lg space-y-1 text-left font-mono" dir="ltr">
              <div>PRESSURE: 160 BAR</div>
              <div>HEAT: 62°C</div>
              <div>LOC: RIYADH SA</div>
            </div>
          </div>
        </div>

        {/* ── Overlay Play/Pause Big Center Button ────────────────── */}
        <button
          type="button"
          onClick={() => setIsPlaying((p) => !p)}
          className="absolute inset-0 z-20 flex items-center justify-center focus:outline-none"
          aria-label={isPlaying ? "إيقاف مؤقت" : "تشغيل الفيديو"}
        >
          <div
            className={`flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-slate-950/70 border border-white/25 text-white shadow-2xl backdrop-blur-md transition-all duration-200 ${
              isPlaying
                ? "opacity-0 hover:opacity-100 scale-90"
                : "opacity-100 scale-105"
            }`}
          >
            {isPlaying ? (
              <Pause className="h-7 w-7 text-white" />
            ) : (
              <Play className="h-7 w-7 text-white fill-white translate-x-0.5" />
            )}
          </div>
        </button>

        {/* ── Bottom Video Control Bar ────────────────────────────── */}
        <div className="relative z-30 mt-auto p-4 sm:p-5 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
          {/* Progress Seek Bar */}
          <div
            className="group/track relative mb-3 h-1.5 w-full cursor-pointer rounded-full bg-white/20 transition-all hover:h-2.5"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickPos = (e.clientX - rect.left) / rect.width;
              setProgress(clickPos * 100);
            }}
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-sky-400 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white shadow-md opacity-0 group-hover/track:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Controls row */}
          <div className="flex items-center justify-between text-xs text-white">
            <div className="flex items-center gap-3">
              {/* Play / Pause */}
              <button
                type="button"
                onClick={() => setIsPlaying((p) => !p)}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label={isPlaying ? "إيقاف مؤقت" : "تشغيل"}
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4 fill-white" />
                )}
              </button>

              {/* Mute / Unmute */}
              <button
                type="button"
                onClick={() => setIsMuted((m) => !m)}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label={isMuted ? "تشغيل الصوت" : "كتم الصوت"}
              >
                {isMuted ? (
                  <VolumeX className="h-4 w-4 text-red-400" />
                ) : (
                  <Volume2 className="h-4 w-4 text-sky-400" />
                )}
              </button>

              {/* Time display */}
              <span className="text-[11px] font-mono text-slate-300">
                {currentTime} / {activeClip.duration}
              </span>
            </div>

            {/* Right side status */}
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-[11px] text-teal-300 font-bold">
                {activeClip.tag}
              </span>
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
