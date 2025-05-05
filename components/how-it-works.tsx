"use client"

import { motion } from "framer-motion"
import { ShoppingCart, Truck, MessageCircle, Check } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Commandez en ligne",
    description: "Sélectionnez vos produits et personnalisez-les selon vos besoins",
    icon: ShoppingCart,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Préparation soignée",
    description: "Nos préparateurs sélectionnent vos produits avec soin pour garantir qualité et fraîcheur",
    icon: Check,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    title: "Livraison rapide",
    description: "Recevez vos courses à domicile le jour même ou en moins de 90 minutes avec la livraison XL",
    icon: Truck,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: 4,
    title: "Support client",
    description: "Précisez vos préférences via le chat en direct ou par appel téléphonique",
    icon: MessageCircle,
    color: "bg-purple-100 text-purple-600",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function HowItWorks() {
  return (
    <section className="py-16 bg-yellow-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Comment ça marche</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Découvrez la simplicité et la sécurité des courses en ligne avec Bringo by Carrefour
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step) => (
            <motion.div key={step.id} variants={item}>
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-4`}>
                  <step.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
