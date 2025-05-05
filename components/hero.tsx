"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    "/hero.webp",
    "/hero1.webp",
    "/hero2.webp",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {images.map((src, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentImageIndex === index ? 1 : 0,
            transition: { duration: 1 },
          }}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={`Bringo delivery service ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>
      ))}

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Vos courses livrées en un clic
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Découvrez un large éventail de produits frais et de qualité, livrés à votre porte en moins de 90 minutes.
        </motion.p>

        <motion.div
          className="w-full max-w-md flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Input
            type="text"
            placeholder="Rechercher un produit..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="rounded-r-none bg-white/90 text-black"
          />
          <Button className="rounded-l-none bg-yellow-500 hover:bg-yellow-600">
            <Search className="mr-2" size={18} />
            Rechercher
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
