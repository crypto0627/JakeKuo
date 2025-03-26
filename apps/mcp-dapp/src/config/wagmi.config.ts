import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { arbitrum, base, mainnet, polygon, scroll } from '@reown/appkit/networks'
import { cookieStorage, createStorage } from '@wagmi/core'

// Get projectId from https://cloud.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [mainnet, arbitrum, base, scroll, polygon]

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks
})

export const config = wagmiAdapter.wagmiConfig