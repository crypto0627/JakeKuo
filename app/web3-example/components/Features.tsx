import { Lightbulb, Network, Target, TrendingUp, Wallet } from 'lucide-react'

export function Features() {
  return (
    <section className="flex py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 justify-items-center">
          <article className="p-4 md:p-6 rounded-lg bg-gray-800 shadow-[0_0_15px_rgba(168,85,247,0.4)] w-full">
            <figure className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
              <Wallet className="w-6 h-6" />
            </figure>
            <h3 className="text-xl font-semibold mb-2">Web3 Integration</h3>
            <p className="text-gray-400">
              Seamlessly connect and interact with blockchain networks and smart
              contracts.
            </p>
          </article>

          <article className="p-4 md:p-6 rounded-lg bg-gray-800 shadow-[0_0_15px_rgba(168,85,247,0.4)] w-full">
            <figure className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6" />
            </figure>
            <h3 className="text-xl font-semibold mb-2">
              Portfolio Exploration
            </h3>
            <p className="text-gray-400">
              Track and manage your digital assets with advanced portfolio
              tools.
            </p>
          </article>

          <article className="p-4 md:p-6 rounded-lg bg-gray-800 shadow-[0_0_15px_rgba(168,85,247,0.4)] w-full">
            <figure className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
              <Target className="w-6 h-6" />
            </figure>
            <h3 className="text-xl font-semibold mb-2">Market Analysis</h3>
            <p className="text-gray-400">
              Real-time market data and comprehensive analysis tools.
            </p>
          </article>

          <article className="p-4 md:p-6 rounded-lg bg-gray-800 shadow-[0_0_15px_rgba(168,85,247,0.4)] w-full">
            <figure className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6" />
            </figure>
            <h3 className="text-xl font-semibold mb-2">Feature Innovation</h3>
            <p className="text-gray-400">
              Cutting-edge features and innovative solutions for the Web3
              ecosystem.
            </p>
          </article>

          <article className="p-4 md:p-6 rounded-lg bg-gray-800 shadow-[0_0_15px_rgba(168,85,247,0.4)] w-full">
            <figure className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
              <Network className="w-6 h-6" />
            </figure>
            <h3 className="text-xl font-semibold mb-2">
              Ecosystem Integration
            </h3>
            <p className="text-gray-400">
              Comprehensive integration with various blockchain ecosystems and
              protocols.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
