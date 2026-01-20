
import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components/Navbar"

export const metadata: Metadata = {
  title: "Student Housing Finder",
  description: "Browse, filter, and save student housing listings.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
      </body>
    </html>
  )
}
