"use client";

import { useState } from "react";
import { Activity } from "lucide-react";
import ProtectedVideo from "@/components/ui/ProtectedVideo";

interface ProjectVideoProps {
  videoUrl?: string;
  videoTitle?: string;
  videoPlatform?: "youtube" | "tiktok" | "snapchat" | "direct";
  projectTitle: string;
}

const realVideoClips = [
  {
    id: "clip-1",
    title: "تغطية ميدانية 1: كواليس وتطبيق رش الفوم بولي يوريثان بالرياض",
    src: "/videos/video-01.mp4",
    poster: "/images/media/img-01.jpg",
    tag: "رش فوم البولي يوريثان",
  },
  {
    id: "clip-2",
    title: "تغطية ميدانية 2: كشف تسربات المياه وإصلاح الخطوط بالأجهزة الألمانية",
    src: "/videos/video-02.mp4",
    poster: "/images/media/img-06.jpg",
    tag: "كشف تسربات بدون تكسير",
  },
  {
    id: "clip-3",
    title: "تغطية ميدانية 3: صيانة وعزل الخزان الأرضي بالإيبوكسي الأزرق الغذائي",
    src: "/videos/video-03.mp4",
    poster: "/images/media/img-11.jpg",
    tag: "عزل وترميم الخزانات",
  },
  {
    id: "clip-4",
    title: "تغطية ميدانية 4: تركيب رول ممبرين بيتوميني 4 ملم ولحام الفواصل حرارياً",
    src: "/videos/video-04.mp4",
    poster: "/images/media/img-16.jpg",
    tag: "عزل رول ممبرين 4ملم",
  },
  {
    id: "clip-5",
    title: "تغطية ميدانية 5: عزل الحمامات والمطابخ والمسابح بالمواد الإسمنتية المرنة",
    src: "/videos/video-05.mp4",
    poster: "/images/media/img-21.jpg",
    tag: "عزل حمامات ومطابخ",
  },
];

export default function ProjectVideoSection({
  videoTitle,
  projectTitle,
}: ProjectVideoProps) {
  const [activeClipId, setActiveClipId] = useState("clip-1");

  const activeClip =
    realVideoClips.find((c) => c.id === activeClipId) || realVideoClips[0];

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950 p-6 sm:p-8 backdrop-blur-xl shadow-2xl text-right select-none">
      {/* ── Header ───────────────────────────────────────────── */}
      <div className="mb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 px-3 py-0.5 text-xs font-bold text-sky-300 mb-2">
            <Activity className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
            فيديوهات التغطيات الميدانية المباشرة
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            {videoTitle || `التغطية المرئية الميدانية — ${projectTitle}`}
          </h3>
        </div>

        {/* Video switcher tabs */}
        <div className="flex flex-wrap items-center gap-1.5 rounded-2xl bg-slate-900 p-1.5 border border-white/10">
          {realVideoClips.map((clip) => (
            <button
              key={clip.id}
              type="button"
              onClick={() => setActiveClipId(clip.id)}
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

      {/* ── Protected HTML5 Video Player Container ──────────────────────── */}
      <div className="max-w-4xl mx-auto">
        <ProtectedVideo
          key={activeClip.id}
          src={activeClip.src}
          poster={activeClip.poster}
          title={activeClip.title}
          className="w-full aspect-video shadow-2xl"
          autoPlay={false}
          controls={true}
          showWatermark={true}
        />
      </div>
    </div>
  );
}
