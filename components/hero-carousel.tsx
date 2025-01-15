'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeroSlide {
  title: string
  description: string
  image: string
}

const slides: HeroSlide[] = [
  {
    title: "Dress Up in Style, Stay Covered, and Feel Your Best",
    description: "Uncover our latest collection designed for every moment of life",
    image: "/fashion1.jpg",
  },
  {
    title: "Embrace the New Season with Confidence and Fresh Style",
    description: "Dive into the summer collection of 2024 and redefine your wardrobe",
    image: "/fashion10.jpg",
  },
  {
    title: "Elegant Fashion Choices Crafted for Your Everyday Adventures",
    description: "Discover outfits that match your personality and elevate your day",
    image: "/fashion11.jpg",
  }
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full mb-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          <div className="relative aspect-[3/4]">
            <Image
              src={slides[currentSlide].image || "/placeholder.svg"}
              alt="Hero image"
              fill
              className="object-cover rounded-lg transition-opacity duration-500"
              priority
            />
          </div>
          <div className="space-y-6 relative z-10 w-full">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight whitespace-pre-line">
              {slides[currentSlide].title}
            </h1>
            <p className="text-muted-foreground">
              {slides[currentSlide].description}
            </p>
            <Button className="rounded-full px-8">SHOP NOW</Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={previousSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-primary' : 'bg-primary/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

