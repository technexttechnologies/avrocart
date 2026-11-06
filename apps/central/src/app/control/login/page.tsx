"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ShieldCheck,
  ShieldAlert,
  Lock,
  Key,
  Eye,
  EyeOff,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Fingerprint,
  Cpu,
  Clock,
  Sparkles,
  Server,
} from "lucide-react";

export const dynamic = "force-dynamic";

export default function CentralAdminLoginPage() {
  const router = useRouter();

  // State
  const [email, setEmail] = useState("admin@technext.co");
  const [password, setPassword] = useState("admin123");
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState<"CREDENTIALS" | "2FA">("CREDENTIALS");
  const [twoFactorPin, setTwoFactorPin] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [lockoutSeconds, setLockoutSeconds] = useState<number | null>(null);

  const pinRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  // Lockout countdown timer
  useEffect(() => {
    if (lockoutSeconds === null || lockoutSeconds <= 0) return;
    const interval = setInterval(() => {
      setLockoutSeconds((prev) => (prev && prev > 1 ? prev - 1 : null));
    }, 1000);
    return () => clearInterval(interval);
  }, [lockoutSeconds]);

  // Password strength calculation
  const getPasswordStrength = (pass: string) => {
    if (!pass) return { score: 0, label: "Empty", color: "bg-slate-700" };
    let score = 0;
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;

    if (score <= 1) return { score: 1, label: "Weak", color: "bg-rose-500" };
    if (score === 2) return { score: 2, label: "Moderate", color: "bg-amber-500" };
    if (score === 3) return { score: 3, label: "Strong", color: "bg-blue-500" };
    return { score: 4, label: "Maximum Enterprise", color: "bg-emerald-500" };
  };

  const strength = getPasswordStrength(password);

  // Handle Step 1 (Credentials)
  const handleVerifyCredentials = async (e: React.FormEvent) => {
    e.preventDefault();
    if (lockoutSeconds && lockoutSeconds > 0) return;

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const res = await fetch("/api/v1/auth/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, step: "CREDENTIALS" }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        if (data.isLocked && data.remainingSeconds) {
          setLockoutSeconds(data.remainingSeconds);
        }
        setErrorMessage(data.error || "Authentication failed. Check your master credentials.");
        return;
      }

      if (data.require2FA) {
        setStep("2FA");
        setSuccessMessage("Credentials authenticated. Enter your 6-digit security PIN.");
        setTimeout(() => pinRefs[0].current?.focus(), 150);
      }
    } catch (err: any) {
      setErrorMessage("Network error connecting to Technext Authentication Authority.");
    } finally {
      setLoading(false);
    }
  };

  // Handle PIN input digit changes
  const handlePinChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newPin = [...twoFactorPin];
    newPin[index] = value;
    setTwoFactorPin(newPin);

    // Auto advance
    if (value && index < 5) {
      pinRefs[index + 1].current?.focus();
    }
  };

  const handlePinKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !twoFactorPin[index] && index > 0) {
      pinRefs[index - 1].current?.focus();
    }
  };

  // Handle Step 2 (2FA Verification)
  const handleVerify2FA = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullPin = twoFactorPin.join("");
    if (fullPin.length < 6) {
      setErrorMessage("Please enter all 6 digits of your security PIN.");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/v1/auth/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          twoFactorCode: fullPin,
          step: "2FA",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMessage(data.error || "Invalid 2FA verification PIN.");
        return;
      }

      setSuccessMessage("Security clearance granted. Establishing encrypted administrative tunnel...");
      setTimeout(() => {
        router.push("/control");
        router.refresh();
      }, 700);
    } catch (err: any) {
      setErrorMessage("Authentication failed during security handshake.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070F1E] text-white flex flex-col justify-between font-sans relative overflow-hidden select-none">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Header */}
      <header className="px-6 py-5 flex items-center justify-between border-b border-white/5 relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-white px-2.5 py-1 rounded-lg shadow-sm">
            <img
              src="/avro-logo.png"
              alt="AVROCART by TECHNEXT"
              className="h-6 w-auto object-contain"
            />
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 font-mono">
            CENTRAL SECURITY GATEWAY
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono text-slate-400">Zero-Trust Shield Active</span>
        </div>
      </header>

      {/* Main Authentication Box */}
      <main className="flex-1 flex items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-md bg-[#0A192F]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-7 sm:p-9 shadow-2xl space-y-6">
          {/* Box Header */}
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-400/20 text-[#2563EB] mx-auto flex items-center justify-center shadow-inner">
              {step === "CREDENTIALS" ? (
                <Lock className="w-7 h-7 text-blue-400" />
              ) : (
                <Fingerprint className="w-7 h-7 text-emerald-400 animate-pulse" />
              )}
            </div>

            <h1 className="text-2xl font-black tracking-tight text-white">
              {step === "CREDENTIALS" ? "Technext Master Portal" : "Two-Factor Security Verification"}
            </h1>
            <p className="text-xs text-slate-400 leading-relaxed">
              {step === "CREDENTIALS"
                ? "Enter your cryptographic master credentials to access the central governance infrastructure."
                : `Enter the 6-digit authorization code for ${email}`}
            </p>
          </div>

          {/* Security Status Alert & Lockout Banner */}
          {lockoutSeconds !== null && lockoutSeconds > 0 && (
            <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs space-y-1">
              <div className="flex items-center gap-2 font-bold text-rose-200">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
                <span>Security Lockout Triggered</span>
              </div>
              <p className="text-[11px] opacity-90">
                Multiple unauthorized attempts detected. Access blocked for safety.
              </p>
              <div className="flex items-center gap-1.5 pt-1 font-mono text-[12px] font-bold text-rose-400">
                <Clock className="w-3.5 h-3.5 animate-spin" />
                <span>
                  Retry in {Math.floor(lockoutSeconds / 60)}:
                  {(lockoutSeconds % 60).toString().padStart(2, "0")}s
                </span>
              </div>
            </div>
          )}

          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2.5">
              <AlertTriangle className="w-4 h-4 text-rose-400 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* STEP 1: CREDENTIALS FORM */}
          {step === "CREDENTIALS" ? (
            <form onSubmit={handleVerifyCredentials} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-bold mb-1.5">
                  Administrator Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    disabled={Boolean(lockoutSeconds && lockoutSeconds > 0) || loading}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@technext.co"
                    className="w-full px-3.5 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all font-mono"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-slate-300 font-bold">Master Password</label>
                  <span className="text-[10px] font-mono text-slate-400">
                    Strength: <strong className="text-white">{strength.label}</strong>
                  </span>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    disabled={Boolean(lockoutSeconds && lockoutSeconds > 0) || loading}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full px-3.5 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all font-mono pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                {/* Password strength meter bar */}
                <div className="grid grid-cols-4 gap-1.5 mt-2">
                  {[1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`h-1 rounded-full transition-all ${
                        strength.score >= level ? strength.color : "bg-slate-800"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={Boolean(lockoutSeconds && lockoutSeconds > 0) || loading}
                className="w-full py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-40 text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Cpu className="w-4 h-4 animate-spin" />
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <>
                    <span>Proceed to 2FA Step</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Quick Fill Demo Helper */}
              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => {
                    setEmail("admin@technext.co");
                    setPassword("admin123");
                  }}
                  className="text-[11px] text-slate-400 hover:text-blue-300 font-mono transition-colors inline-flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  Prefill Master Credentials (admin@technext.co)
                </button>
              </div>
            </form>
          ) : (
            /* STEP 2: 2FA PIN VERIFICATION */
            <form onSubmit={handleVerify2FA} className="space-y-5 text-xs">
              <div className="space-y-3">
                <label className="block text-center text-slate-300 font-bold uppercase tracking-wider text-[11px]">
                  Enter 6-Digit Authorization PIN
                </label>

                {/* 6 Digit Inputs */}
                <div className="flex items-center justify-center gap-2">
                  {twoFactorPin.map((digit, idx) => (
                    <input
                      key={idx}
                      ref={pinRefs[idx]}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handlePinChange(idx, e.target.value)}
                      onKeyDown={(e) => handlePinKeyDown(idx, e)}
                      className="w-11 h-13 text-center text-xl font-mono font-black rounded-xl bg-slate-900 border border-white/20 text-white focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                    />
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 text-center text-[11px] text-slate-400 font-mono">
                  Master Security PIN: <strong className="text-emerald-400">884920</strong>
                  <button
                    type="button"
                    onClick={() => setTwoFactorPin(["8", "8", "4", "9", "2", "0"])}
                    className="ml-2 text-blue-400 underline font-bold"
                  >
                    Auto-Fill
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setStep("CREDENTIALS")}
                  className="w-1/3 py-3 rounded-xl border border-white/10 text-slate-300 hover:bg-white/5 font-bold text-xs transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-2/3 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Cpu className="w-4 h-4 animate-spin" />
                      <span>Authenticating...</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4" />
                      <span>Authorize Session</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Security Standards Footer */}
          <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500 font-mono">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              HMAC-SHA256 Auth
            </span>
            <span>TLS 1.3 Certified</span>
            <span>Zero-Knowledge</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-4 border-t border-white/5 text-center text-xs text-slate-500 relative z-10">
        © 2026 AVRO by TECHNEXT TECHNOLOGIES. Restricted Access. Unauthorized access will be prosecuted.
      </footer>
    </div>
  );
}
