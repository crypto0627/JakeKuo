"use client"

import { useMousePosition } from "@/lib/hooks/use-mouse-position"
import { useEffect, useRef, useState } from "react"

interface SparklesProps {
  id?: string
  background?: string
  minSize?: number
  maxSize?: number
  particleDensity?: number
  className?: string
  particleColor?: string
}

interface ParticlePosition {
  x: number
  y: number
}

interface ParticleVelocity {
  speedX: number
  speedY: number
}

interface ParticleSize {
  size: number
}

interface CanvasDimensions {
  width: number
  height: number
}

export const SparklesCore = ({
  id = "tsparticles",
  background = "transparent",
  minSize = 0.6,
  maxSize = 1.4,
  particleDensity = 100,
  className = "h-full w-full",
  particleColor = "#FFFFFF",
}: SparklesProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const mousePosition = useMousePosition()
  const [dimensions, setDimensions] = useState<CanvasDimensions>({ width: 1200, height: 800 })

  useEffect(() => {
    if (typeof window === "undefined") return

    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const canvas: HTMLCanvasElement | null = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let particles: Particle[] = []
    let animationFrameId: number

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    class Particle implements ParticlePosition, ParticleVelocity, ParticleSize {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number

      constructor() {
        const canvasWidth = canvas?.width ?? window.innerWidth
        const canvasHeight = canvas?.height ?? window.innerHeight
        this.x = Math.random() * canvasWidth
        this.y = Math.random() * canvasHeight
        this.size = Math.random() * (maxSize - minSize) + minSize
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
      }

      update(): void {
        this.x += this.speedX
        this.y += this.speedY

        const canvasWidth = canvas?.width ?? window.innerWidth
        const canvasHeight = canvas?.height ?? window.innerHeight

        if (this.x > canvasWidth) this.x = 0
        if (this.x < 0) this.x = canvasWidth
        if (this.y > canvasHeight) this.y = 0
        if (this.y < 0) this.y = canvasHeight

        // Mouse interaction
        const dx = mousePosition.x - this.x
        const dy = mousePosition.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 100) {
          const angle = Math.atan2(dy, dx)
          this.x -= Math.cos(angle) * 1
          this.y -= Math.sin(angle) * 1
        }
      }

      draw(): void {
        if (!ctx) return
        ctx.fillStyle = particleColor
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const init = (): void => {
      particles = []
      for (let i = 0; i < particleDensity; i++) {
        particles.push(new Particle())
      }
    }

    const animate = (): void => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    init()
    animate()

    const handleResize = (): void => {
      if (typeof window === "undefined") return

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
      init()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [maxSize, minSize, particleColor, particleDensity, mousePosition.x, mousePosition.y])

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={className}
      style={{
        background,
        width: dimensions.width,
        height: dimensions.height,
      }}
    />
  )
}

