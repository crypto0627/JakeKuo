import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { WalletIcon, ShoppingCartIcon, ClubIcon } from 'lucide-react'

export default function Market() {
  return (
    <>
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">CryptoArt Bazaar</h1>
        <Button
          variant="outline"
          className="text-white border-white hover:bg-white hover:text-purple-900"
        >
          <WalletIcon className="mr-2 h-4 w-4" /> Connect Wallet
        </Button>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4">
            Discover, Collect, and Sell Extraordinary NFTs
          </h2>
          <p className="text-xl mb-8">
            Enter the world of digital art and collectibles on the blockchain
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            <ShoppingCartIcon className="mr-2 h-4 w-4" /> Explore Marketplace
          </Button>
        </section>

        <section>
          <h3 className="text-3xl font-bold mb-6">Featured NFTs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-purple-800 border-purple-700">
                <CardContent className="p-4">
                  <div className="aspect-square bg-purple-700 mb-4 rounded-lg flex items-center justify-center">
                    <ClubIcon className="h-16 w-16 text-purple-300" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    Cosmic Cube #{i}
                  </h4>
                  <p className="text-purple-300 mb-4">By Artist{i}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Current Bid</span>
                    <span className="font-bold">3.5 ETH</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-16 border-t border-purple-800 py-6 text-center text-purple-300">
        <p>&copy; 2023 CryptoArt Bazaar. All rights reserved.</p>
      </footer>
    </>
  )
}
