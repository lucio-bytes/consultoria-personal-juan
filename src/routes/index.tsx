import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Benefits } from "@/components/landing/Benefits";
import { PersonalTrainer } from "@/components/landing/PersonalTrainer";
import { Programs } from "@/components/landing/Programs";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { Plans } from "@/components/landing/Plans";
import { Footer } from "@/components/landing/Footer";
import { StepsSection } from "@/components/landing/StepsSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Benefits />
      <PersonalTrainer />
      <Programs />
      <StepsSection />
      <Testimonials />
      <Plans />
      <FAQ />
      <Footer />
      <Toaster theme="dark" />
    </main>
  );
}
