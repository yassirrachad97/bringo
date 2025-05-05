import { Suspense } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Categories from "@/components/categories"
import DeliveryOptions from "@/components/delivery-options"
import HowItWorks from "@/components/how-it-works"
import Support from "@/components/support"
import Footer from "@/components/footer"
import Loading from "@/components/loading"

export default function Home() {
  return (
    <main className="min-h-screen bg-yellow-50">
      <Header />
      <Suspense fallback={<Loading />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Categories />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <DeliveryOptions />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <HowItWorks />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Support />
      </Suspense>
      <Footer />
    </main>
  )
}
