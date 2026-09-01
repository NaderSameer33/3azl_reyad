"use client";

import { useEffect, useState } from "react";
import { ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MediaProtectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showNotice, setShowNotice] = useState(false);
  const [noticeText, setNoticeText] = useState("");

  const triggerNotice = (msg: string) => {
    setNoticeText(msg);
    setShowNotice(true);
    setTimeout(() => {
      setShowNotice(false);
    }, 2500);
  };

  useEffect(() => {
    // 1. Prevent keyboard save & dev shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+S / Cmd+S
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
        triggerNotice("محتوى وحقوق الصور والفيديوهات محفوطة لشركة المعمورة");
      }
      // Ctrl+U
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "u") {
        e.preventDefault();
      }
      // Ctrl+P
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "p") {
        e.preventDefault();
        triggerNotice("طباعة المحتوى غير متاحة لحماية حقوق الصور والأفلام");
      }
      // PrintScreen key
      if (e.key === "PrintScreen") {
        triggerNotice("علامة حماية حقوق الصور والفيديوهات - شركة المعمورة");
      }
    };

    // 2. Global contextmenu handler on image/video elements
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "IMG" ||
          target.tagName === "VIDEO" ||
          target.closest(".protected-media"))
      ) {
        e.preventDefault();
        triggerNotice("الصور والفيديوهات محمية من التنزيل أو النسخ المباشر");
      }
    };

    // 3. Prevent dragstart globally on images
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === "IMG" || target.tagName === "VIDEO")) {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return (
    <>
      {children}

      {/* Floating Notice when user attempts to copy/download */}
      <AnimatePresence>
        {showNotice && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-2.5 rounded-2xl bg-slate-950/95 border border-sky-400/40 px-5 py-3 text-xs font-black text-white shadow-2xl backdrop-blur-2xl text-right dir-rtl pointer-events-none"
          >
            <ShieldAlert className="h-5 w-5 text-amber-400 shrink-0 animate-pulse" />
            <span>{noticeText}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
