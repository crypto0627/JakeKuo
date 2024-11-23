import { Banner, Footer, Gallery, Navbar, News, TeamMember } from './components'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Banner />
      <Gallery />
      <News />
      <TeamMember />
      <Footer />
    </main>
  )
}
