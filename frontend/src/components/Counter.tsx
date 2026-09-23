import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  end: number
  suffix?: string
  duration?: number
}

export default function Counter({ end, suffix = '', duration = 1800 }: CounterProps) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const t0 = performance.now()
            const tick = (now: number) => {
              const p = Math.min((now - t0) / duration, 1)
              const eased = 1 - Math.pow(1 - p, 3)
              setValue(Math.round(end * eased))
              if (p < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}
