import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Precedent — Commercial law, explained",
  description:
    "Short briefings on commercial law and legal-AI developments for aspiring commercial lawyers — what happened, and why it happened.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <header className="border-b border-border">
          <div className="mx-auto max-w-3xl px-5 py-5 flex items-baseline justify-between">
            <Link href="/" className="font-serif text-2xl tracking-tight">
              Precedent
            </Link>
            <span className="text-xs uppercase tracking-widest text-muted hidden sm:block">
              Commercial law, explained
            </span>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border mt-16">
          <div className="mx-auto max-w-3xl px-5 py-8 text-xs text-muted leading-relaxed">
            <p>
              Precedent is a briefing format, not a news wire — each segment
              exists to explain why a commercial law or legal-AI story
              happened, not just to report that it did. Source links point to
              the original reporting for every story.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
