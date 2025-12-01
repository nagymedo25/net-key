import { Network } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 dark:border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Network className="text-brand-primary" />
          <span className="font-bold text-lg">NET KEY</span>
        </div>
        <p className="text-slate-500 text-sm">© 2025 NET KEY Project. All rights reserved.</p>
      </div>
    </footer>
  );
}