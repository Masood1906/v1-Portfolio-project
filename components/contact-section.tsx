"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Mail, Phone, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      // In a real application, you would send this data to a server
      console.log("Form submitted:", formData)

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })

      // Reset form
      setFormData({ name: "", email: "", message: "" })
    },
    [toast, formData],
  )

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 p-2 rounded-md">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium">Email</h3>
              <a
                href="mailto:kaifrazaa4111@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                kaifrazaa4111@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 p-2 rounded-md">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium">Phone</h3>
              <a href="tel:0899735820" className="text-muted-foreground hover:text-foreground transition-colors">
                0899735820
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 p-2 rounded-md">
              <Linkedin className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium">LinkedIn</h3>
              <a
                href="http://www.linkedin.com/in/masood-ahmed-mohammed-razaa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                masood-ahmed-mohammed-razaa
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 p-2 rounded-md">
              <Github className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium">GitHub</h3>
              <a
                href="https://github.com/Masood1906"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Masood1906
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows={5}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  )
}
