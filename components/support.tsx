"use client"

import { motion } from "framer-motion"
import { MessageSquare, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Support() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Support Client</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Besoin d'aide ou de préciser vos préférences ? Nos équipes sont à votre écoute
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="mr-2 text-yellow-600" /> Chat en direct
                </CardTitle>
                <CardDescription>Discutez avec nos conseillers pour personnaliser votre commande</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Précisez vos préférences en temps réel : personnalisez chaque produit pour une expérience de courses
                  unique, comme en magasin.
                </p>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600">Démarrer un chat</Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2 text-yellow-600" /> Appel téléphonique
                </CardTitle>
                <CardDescription>Appelez-nous pour toute question ou assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Nos conseillers sont disponibles pour vous aider à finaliser votre commande et répondre à toutes vos
                  questions.
                </p>
                <Button variant="outline" className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50">
                  +212 5XX XX XX XX
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
