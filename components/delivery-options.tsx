"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Clock, Truck, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const cities = [
  { id: 1, name: "Casablanca", hasXL: true },
  { id: 2, name: "Rabat", hasXL: true },
  { id: 3, name: "Marrakech", hasXL: true },
  { id: 4, name: "Tanger", hasXL: false },
  { id: 5, name: "Agadir", hasXL: false },
  { id: 6, name: "Tétouan", hasXL: false },
  { id: 7, name: "Mohammédia", hasXL: false },
  { id: 8, name: "Témara", hasXL: false },
  { id: 9, name: "Salé", hasXL: false },
  { id: 10, name: "Dar Bouazza", hasXL: false },
  { id: 11, name: "Bouskoura", hasXL: false },
]

export default function DeliveryOptions() {
  const [selectedCity, setSelectedCity] = useState("Casablanca")

  const cityHasXL = cities.find((city) => city.name === selectedCity)?.hasXL || false

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Options de Livraison</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Choisissez votre ville et découvrez nos options de livraison disponibles
        </p>

        <div className="max-w-md mx-auto mb-12">
          <Select onValueChange={setSelectedCity} defaultValue={selectedCity}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sélectionnez votre ville" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city.id} value={city.name}>
                  {city.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Tabs defaultValue="standard" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="standard">Livraison Standard</TabsTrigger>
            <TabsTrigger value="xl" disabled={!cityHasXL}>
              Livraison XL Rapide
            </TabsTrigger>
          </TabsList>

          <TabsContent value="standard">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Truck className="mr-2" /> Livraison Standard
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Clock className="mr-3 text-yellow-600 mt-1" />
                      <div>
                        <h4 className="font-medium">Délai de livraison</h4>
                        <p className="text-gray-600">Livraison le jour même ou le lendemain selon vos disponibilités</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="mr-3 text-yellow-600 mt-1" />
                      <div>
                        <h4 className="font-medium">Zone de livraison</h4>
                        <p className="text-gray-600">Disponible dans toute la ville de {selectedCity}</p>
                      </div>
                    </div>

                    <div className="bg-yellow-100 p-4 rounded-lg mt-4">
                      <p className="font-medium">
                        Nos préparateurs de commande sélectionnent vos produits avec soin pour en garantir la qualité et
                        la fraîcheur.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card className="border-yellow-400">
                <CardHeader className="bg-yellow-400">
                  <CardTitle className="flex items-center">
                    <Truck className="mr-2" /> Livraison XL Rapide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Clock className="mr-3 text-yellow-600 mt-1" />
                      <div>
                        <h4 className="font-medium">Délai de livraison</h4>
                        <p className="text-gray-600">Livraison en moins de 90 minutes</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="mr-3 text-yellow-600 mt-1" />
                      <div>
                        <h4 className="font-medium">Zone de livraison</h4>
                        <p className="text-gray-600">Disponible dans certaines zones de {selectedCity}</p>
                      </div>
                    </div>

                    <div className="bg-yellow-100 p-4 rounded-lg mt-4">
                      <p className="font-medium">
                        Service premium pour vos courses urgentes. Nos livreurs dédiés vous apportent vos produits en un
                        temps record !
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
