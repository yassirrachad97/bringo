import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-yellow-400 text-yellow-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Bringo</h3>
            <p className="mb-4">Le service de livraison de courses à domicile par Carrefour Maroc.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-yellow-700">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-yellow-700">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-yellow-700">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Catégories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-yellow-700">
                  Fruits & Légumes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-700">
                  Boucherie
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-700">
                  Poissonnerie
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-700">
                  Surgelés
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-700">
                  Épicerie
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Villes desservies</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-yellow-700">
                  Casablanca
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-700">
                  Rabat
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-700">
                  Marrakech
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-700">
                  Tanger
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-700">
                  Agadir
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Aide & Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-yellow-700">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-700">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-700">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-700">
                  Nous contacter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-yellow-500 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Bringo. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
