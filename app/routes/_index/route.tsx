import React from 'react';
import type { LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { motion } from 'framer-motion';
import { Globe, Zap, ShieldCheck, ShoppingCart, Truck, RefreshCw, MessageSquare, BarChart3 } from 'lucide-react';
import { clsx } from "clsx";

import { login } from "../../shopify.server";
import LanguageToggle from "../../components/LanguageToggle";
import { useLanguage } from "../../contexts/LanguageContext";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);

  if (url.searchParams.get("shop")) {
    throw redirect(`/app?${url.searchParams.toString()}`);
  }

  return { showForm: Boolean(login) };
};

export default function Landing() {
  const { language, dir } = useLanguage();

  return (
    <div className="min-h-screen bg-white" dir={dir}>
      {/* Navbar Overlay */}
      <nav className="absolute top-0 w-full p-6 flex justify-between items-center max-w-7xl mx-auto left-0 right-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20">D</div>
          <span className="font-bold text-2xl text-accent font-poppins tracking-tight">Drop Apiba</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8 text-sm font-medium text-gray-600 mr-4">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          </div>
          <LanguageToggle />
          <Link to="/app" className="bg-accent text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-800 transition-all hover:scale-105 shadow-lg">
            {language === 'en' ? 'Login' : (language === 'ar' ? 'تسجيل الدخول' : 'התחברות')}
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-lg text-[10px] font-bold mb-10 tracking-[0.2em] uppercase border border-primary/10">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
              {language === 'en' ? 'Enterprise Supply Orchestration' : 'تنسيق التوريد للمؤسسات'}
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold text-accent leading-[0.95] mb-10 tracking-tighter">
              {language === 'en' ? (
                <>Scale Beyond<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-emerald-500 to-accent">
                    The Ordinary.
                  </span>
                </>
              ) : language === 'ar' ? (
                <>توسع خارج<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-emerald-500 to-accent">
                    عن المألوف.
                  </span>
                </>
              ) : (
                <>לצמוח מעבר<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-emerald-500 to-accent">
                    לרגיל.
                  </span>
                </>
              )}
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-lg leading-relaxed font-medium">
              {language === 'en' ? 'The definitive automation suite for high-volume Shopify entrepreneurs in the Middle East and beyond.' : 'مجموعة الأتمتة النهائية لرواد أعمال شوبيفاي ذوي الحجم العالي في الشرق الأوسط وخارجه.'}
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/app" className="bg-accent hover:bg-black text-white px-12 py-5 rounded-2xl font-bold shadow-2xl shadow-accent/20 hover:-translate-y-1 transition-all text-lg flex items-center gap-3 active:scale-95 group">
                {language === 'en' ? 'Deploy Now' : 'نشر الآن'}
                <Zap size={20} className="group-hover:text-primary transition-colors" fill="currentColor" />
              </Link>
              <div className="flex items-center gap-4 px-6 py-4 border border-gray-100 rounded-2xl bg-gray-50/30">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>)}
                </div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">+1.2k Clusters Active</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Image / Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="bg-white rounded-[3rem] p-4 shadow-[0_32px_128px_-16px_rgba(0,0,0,0.1)] border border-gray-100 relative z-10">
              <img
                src="https://placehold.co/1000x800/white/111111?text=Drop+Apiba+Premium+Interface"
                alt="Enterprise UI"
                className="rounded-[2.5rem] w-full"
              />

              {/* Minimal Floating Badge 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className={clsx(
                  "absolute bottom-20 bg-white/95 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-gray-100/50 flex items-center gap-5 z-20",
                  dir === 'rtl' ? "right-[-40px]" : "left-[-40px]"
                )}
              >
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                  <BarChart3 size={28} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-1">Infrastructure</p>
                  <p className="text-xl font-bold text-accent tracking-tighter">99.9% Uptime</p>
                </div>
              </motion.div>

              {/* Minimal Floating Badge 2 */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, delay: 0.5, ease: "easeInOut" }}
                className={clsx(
                  "absolute top-20 bg-accent/95 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/10 flex items-center gap-5 z-20 text-white",
                  dir === 'rtl' ? "left-[-40px]" : "right-[-40px]"
                )}
              >
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-primary border border-white/5">
                  <Globe size={28} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-1">Connectivity</p>
                  <p className="text-xl font-bold tracking-tighter italic">Global Mesh</p>
                </div>
              </motion.div>
            </div>
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-full blur-[120px] -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50" id="features">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-accent mb-4">Why Drop Apiba?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Built for high-volume dropshippers who need reliability, speed, and perfect localization.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "Native RTL Support", desc: "Instantly switch your entire dashboard and customer-facing flows to Arabic or Hebrew." },
              { icon: ShoppingCart, title: "AliExpress Import", desc: "One-click product import with automated image, pricing, and description optimization." },
              { icon: Zap, title: "Auto-Order Engine", desc: "Place hundreds of orders on AliExpress in seconds with our anti-bot resilient scraping technology." },
              { icon: Truck, title: "Auto Tracking Sync", desc: "Automatically fetch tracking numbers from suppliers and sync them to your customers." },
              { icon: RefreshCw, title: "Supplier Sync", desc: "Real-time inventory and price monitoring to prevent selling out-of-stock items." },
              { icon: MessageSquare, title: "AI Customer Support", desc: "Intelligent chat agents that handle support tickets in English, Arabic, and Hebrew." },
              { icon: BarChart3, title: "Upsell Builder", desc: "Create high-converting pre-purchase and post-purchase funnels to boost AOV." },
              { icon: ShieldCheck, title: "Enterprise Reliability", desc: "99.9% uptime with real-time health monitoring of all supplier connections." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-card border border-gray-100 hover:shadow-card-hover transition-all group">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-accent mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Drop Apiba. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
