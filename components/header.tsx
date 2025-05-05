"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Menu, MapPin, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 10)
    })
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-yellow-400 shadow-md" : "bg-yellow-300",
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl">Bringo</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="/categories" className="font-medium hover:text-yellow-800 transition-colors">
            Catégories
          </Link>
          <Link href="/promotions" className="font-medium hover:text-yellow-800 transition-colors">
            Promotions
          </Link>
          <Link href="/delivery" className="font-medium hover:text-yellow-800 transition-colors">
            Livraison
          </Link>
          <div className="flex items-center space-x-1 text-sm">
            <MapPin size={16} />
            <span>Casablanca</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </Button>

          <Button variant="ghost" size="icon" className="hidden md:flex">
            <User />
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-yellow-50">
              <div className="flex flex-col space-y-4 mt-8">
                <Link href="/categories" className="font-medium hover:text-yellow-800 transition-colors">
                  Catégories
                </Link>
                <Link href="/promotions" className="font-medium hover:text-yellow-800 transition-colors">
                  Promotions
                </Link>
                <Link href="/delivery" className="font-medium hover:text-yellow-800 transition-colors">
                  Livraison
                </Link>
                <Link href="/account" className="font-medium hover:text-yellow-800 transition-colors">
                  Mon Compte
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
