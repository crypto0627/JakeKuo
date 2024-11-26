import { Banner, Features, Footer, Gallery, Navbar } from './components'

export default function Home() {
  return (
    <main className="flex flex-col text-white bg-black">
      <Navbar />
      <Banner />
      <Features />
      <Gallery />
      <Footer />
    </main>
  )
}
