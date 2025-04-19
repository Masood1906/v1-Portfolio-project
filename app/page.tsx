
import React from 'react';
import { MoveRight } from "lucide-react"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import SkillsSection from "@/components/skills-section"
import ProjectCard from "@/components/project-card"
import ExperienceTimeline from "@/components/experience-timeline"
import EducationTimeline from "@/components/education-timeline"
import CertificationsList from "@/components/certifications-list"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Mohammed<span className="text-emerald-600">.dev</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild className="hidden md:flex">
              <a href="#contact">
                Get in Touch <MoveRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <section className="py-12 md:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Mohammed Masood Ahmed</h1>
            <p className="text-xl text-muted-foreground max-w-[600px]">
              Software Developer specializing in AI & Machine Learning
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button asChild size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
          <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-emerald-600">
            <Image
            
              src="/profile.jpg" 

              alt="Mohammed Masood Ahmed"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Professional Profile</h3>
              <p className="text-muted-foreground">
                Motivated and detail-oriented software graduate with a Master's in Software Design with Artificial
                Intelligence and a strong foundation in front-end development. Skilled in HTML, CSS, JavaScript, and
                responsive design principles, with hands-on experience in creating interactive web applications.
              </p>
              <p className="text-muted-foreground">
                Proven ability to learn quickly and apply modern technologies in academic and internship projects.
                Currently expanding technical expertise through a data science internship, while seeking an opportunity
                to grow as a front-end developer in a collaborative and innovative tech environment.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Career Objective</h3>
              <p className="text-muted-foreground">
                As a highly motivated AI and software design graduate, I aim to apply my expertise in machine learning,
                data science, and cloud technologies to create innovative, data-driven solutions. I am eager to
                contribute to cutting-edge projects in a dynamic environment where I can leverage my technical skills in
                Python, NLP, and AI to drive business impact, optimize processes, and continuously grow in the field of
                artificial intelligence.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <div className="bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-sm">
                  Python
                </div>
                <div className="bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-sm">
                  Machine Learning
                </div>
                <div className="bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-sm">
                  NLP
                </div>
                <div className="bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-sm">
                  Web Development
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <ExperienceTimeline />
        </section>

        {/* Education Section */}
        <section id="education" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <EducationTimeline />
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <SkillsSection />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="AI-Driven AR Virtual Try-On Systems"
              description="Developed a virtual try-on system enabling users to visualize clothing using advanced computer vision techniques, including pose estimation and garment segmentation."
              tags={["Deep Learning", "Computer Vision", "GitHub Actions"]}
            />
            <ProjectCard
              title="Smart Extract: Intelligent Information Retrieval"
              description="Developed a robust system for extracting structured data from unstructured machinery manuals using OCR and Named Entity Recognition (NER)."
              tags={["OCR", "NLP", "BERT", "T5"]}
            />
            <ProjectCard
              title="Intrusion Detection using PCA with Random Forest"
              description="Led a team to develop an intrusion detection system using PCA and Random Forest. Responsible for project planning, execution, and team coordination."
              tags={["Python", "Selenium", "Matplotlib", "Random Forest"]}
            />
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Certifications</h2>
          <CertificationsList />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 md:py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mohammed Masood Ahmed. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="http://www.linkedin.com/in/masood-ahmed-mohammed-razaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Masood1906"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:kaifrazaa4111@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
