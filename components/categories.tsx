"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const categories = [
  { id: 1, name: "Fruits & Légumes", image: "/categories/legumesFruits.webp?height=200&width=200", color: "bg-green-100" },
  { id: 2, name: "Boucherie", image: "/categories/Boucherie.webp?height=200&width=200", color: "bg-red-100" },
  { id: 3, name: "Poissonnerie", image: "/categories/Poissonnerie.webp?height=200&width=200", color: "bg-blue-100" },
  { id: 4, name: "Surgelés", image: "/categories/Surgelés.webp?height=200&width=200", color: "bg-cyan-100" },
  { id: 5, name: "Boissons", image: "/categories/Boissons.webp?height=200&width=200", color: "bg-orange-100" },
  { id: 6, name: "Épicerie", image: "/categories/Épicerie.webp?height=200&width=200", color: "bg-amber-100" },
  { id: 7, name: "Vaisselle", image: "/categories/Vaisselle.webp?height=200&width=200", color: "bg-purple-100" },
  { id: 8, name: "Électroménagers", image: "/categories/Électroménagers.webp?height=200&width=200", color: "bg-gray-100" },
  { id: 9, name: "BIO", image: "/categories/BIO.webp?height=200&width=200", color: "bg-lime-100" },
  { id: 10, name: "Sans Gluten", image: "/categories/SansGluten.webp?height=200&width=200", color: "bg-pink-100" },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Categories() {
  return (
    <section className="py-16 bg-yellow-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Catégories</h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={item}>
              <Link href={`/category/${category.id}`}>
                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl">
                  <CardContent className={`p-0 ${category.color}`}>
                    <motion.div
                      className="relative h-40 w-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        fill
                        className="object-cover p-4"
                      />
                    </motion.div>
                    <div className="p-4 text-center font-medium">{category.name}</div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
