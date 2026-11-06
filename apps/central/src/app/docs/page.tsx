import { PublicNav } from "@/components/public-nav";
import { PublicFooter } from "@/components/public-footer";
import Link from "next/link";
import { Terminal, Server, FileText, CheckCircle2, Copy } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNav />

      <main className="flex-grow py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">Technical Manual</span>
            <h1 className="text-4xl font-extrabold text-[#0A192F] tracking-tight">
              AVRO Deployment & Administration Guide
            </h1>
            <p className="text-slate-600 text-sm">
              Complete technical documentation for deploying AVRO self-hosted instances on Ubuntu, Debian, Docker, or any Linux server.
            </p>
          </div>

          <div className="space-y-10">
            {/* 1. Requirements */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0A192F] border-b pb-2">1. Minimum System Requirements</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <li className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="block text-slate-800 text-sm mb-1">Compute & RAM</strong>
                  <span>1 vCPU, 2GB RAM minimum (4GB recommended for 5,000+ daily visitors).</span>
                </li>
                <li className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="block text-slate-800 text-sm mb-1">Operating System</strong>
                  <span>Ubuntu 22.04 LTS / 24.04 LTS, Debian 12, or Alpine Linux.</span>
                </li>
                <li className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="block text-slate-800 text-sm mb-1">Runtime Environment</strong>
                  <span>Node.js v20.x or v22.x LTS, or Docker Engine 24+.</span>
                </li>
                <li className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="block text-slate-800 text-sm mb-1">Database & Storage</strong>
                  <span>PostgreSQL 14+ or SQLite 3.38+ with fast SSD storage.</span>
                </li>
              </ul>
            </div>

            {/* 2. Docker Deployment */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0A192F] border-b pb-2">2. Docker Quickstart</h2>
              <p className="text-xs text-slate-600">Run AVRO instantly using standard Docker Compose:</p>
              <div className="p-5 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto space-y-2">
                <p className="text-slate-400"># 1. Download production docker-compose.yml</p>
                <p className="text-emerald-400">curl -O https://releases.technext.co/avro/docker-compose.yml</p>
                <p className="text-slate-400"># 2. Launch container stack in background</p>
                <p className="text-emerald-400">docker compose up -d</p>
                <p className="text-slate-400"># 3. Access your server IP or domain on port 3001 to run setup wizard</p>
                <p className="text-blue-300">http://your-server-ip:3001/setup</p>
              </div>
            </div>

            {/* 3. Nginx Reverse Proxy & SSL */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0A192F] border-b pb-2">3. Nginx Reverse Proxy & SSL</h2>
              <p className="text-xs text-slate-600">Sample Nginx site configuration block for Let's Encrypt SSL:</p>
              <div className="p-5 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto space-y-1">
                <p className="text-slate-400">server &#123;</p>
                <p className="pl-4 text-slate-300">server_name your-store.com www.your-store.com;</p>
                <p className="pl-4 text-slate-300">location / &#123;</p>
                <p className="pl-8 text-emerald-400">proxy_pass http://127.0.0.1:3001;</p>
                <p className="pl-8 text-slate-300">proxy_http_version 1.1;</p>
                <p className="pl-8 text-slate-300">proxy_set_header Upgrade $http_upgrade;</p>
                <p className="pl-8 text-slate-300">proxy_set_header Connection 'upgrade';</p>
                <p className="pl-8 text-slate-300">proxy_set_header Host $host;</p>
                <p className="pl-8 text-slate-300">proxy_set_header X-Forwarded-For $remote_addr;</p>
                <p className="pl-4 text-slate-300">&#125;</p>
                <p className="text-slate-400">&#125;</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
