import Link from "next/link";
import { Server, ShieldCheck, Mail, ArrowUpRight } from "lucide-react";

export function PublicFooter() {
  return (
    <footer className="bg-[#0A192F] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white px-3 py-1.5 rounded-xl inline-block shadow-sm">
              <img
                src="/avro-logo.png"
                alt="AVROCART by TECHNEXT"
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              AVRO is a professional, self-hosted e-commerce software platform developed and maintained by TECHNEXT TECHNOLOGIES. Your store, your server, your data.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-300">DEVELOPER: TECHNEXT TECHNOLOGIES</p>
              <p>Email: support@technext.co | Delhi & Bengaluru, India</p>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Subscription Pricing</Link></li>
              <li><Link href="/themes" className="hover:text-white transition-colors">Store Themes</Link></li>
              <li><Link href="/addons" className="hover:text-white transition-colors">Add-ons & Customization</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">Self-Hosting Guide</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Developer Support</Link></li>
              <li><a href="http://localhost:3001" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">Live Store Demo <ArrowUpRight className="w-3.5 h-3.5" /></a></li>
            </ul>
          </div>

          {/* Legal & Notice */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Important Note</h4>
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400 space-y-2 leading-relaxed">
              <p className="text-white font-medium">Self-Hosted Architecture</p>
              <p>TECHNEXT provides the AVRO software license and updates. Customers purchase their own hosting server and domain name.</p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 AVRO by TECHNEXT TECHNOLOGIES. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Server Independence Guarantee</span>
            <span>Zero Revenue Cut</span>
            <span>Data Privacy First</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
