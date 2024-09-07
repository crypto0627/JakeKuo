import {
  Navbar,
  Banner,
  Feature,
  Blog,
  Footer,
} from '@/app/frontend-interview/components'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Banner />
        <Feature />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
