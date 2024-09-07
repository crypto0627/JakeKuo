import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export default function Banner() {
  return (
    <div className="relative bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 space-y-6 z-10 relative">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Welcome to Master FE
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Get Frontend Interview answers and prepare for frontend interviews
              with our AI-powered platform.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <Textarea
                placeholder="Enter your question here..."
                className="w-full sm:max-w-xl"
              />
            </div>
            <div className="mt-4 sm:flex sm:justify-center lg:justify-start">
              <Button size="lg">Get Answer</Button>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2 relative">
            <video
              className="w-full h-auto rounded-lg shadow-xl"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/master-fe/banner.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}
