import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const INTERVAL_MS = 6000

const SLIDES = [
  {
    id: 'sports',
    headline: 'Find a club that gets you moving',
    text: 'Football, basketball, and more after school.',
    gradient: 'linear-gradient(110deg, #5C3A2E 0%, #8E2150 45%, #D6336C 100%)',
    shapes: [
      { type: 'circle', color: '#FFE066', size: 200, top: -60, right: -40 },
      { type: 'square', color: 'rgba(248,225,236,0.35)', size: 130, top: 170, right: 150, rotate: 18 },
      { type: 'triangle', color: '#F8E1E7', size: 70, top: 250, right: 50 },
      { type: 'ring', color: '#FFE066', size: 90, top: 50, right: 260 },
    ],
    stickers: [
      { label: 'Football', bg: '#FFE066', fg: '#3A2A00', rotate: -7, top: '12%', right: '30%' },
      { label: 'Basketball', bg: '#F8E1E7', fg: '#5C3A2E', rotate: 5, top: '40%', right: '8%' },
      { label: 'Athletics', bg: '#B02458', fg: '#FFFFFF', rotate: -4, top: '66%', right: '28%' },
    ],
  },
  {
    id: 'creative',
    headline: 'Make something creative after class',
    text: 'Art, music, dance, and drama clubs near you.',
    gradient: 'linear-gradient(110deg, #4A2A22 0%, #8F2A25 50%, #C23B4E 100%)',
    shapes: [
      { type: 'circle', color: 'rgba(248,225,236,0.3)', size: 230, top: -50, right: 90 },
      { type: 'square', color: '#FFE066', size: 110, top: 190, right: -20, rotate: -12 },
      { type: 'ring', color: 'rgba(255,255,255,0.55)', size: 80, top: 60, right: 20 },
      { type: 'triangle', color: '#FFE066', size: 60, top: 40, right: 330 },
    ],
    stickers: [
      { label: 'Art', bg: '#F8E1E7', fg: '#5C3A2E', rotate: 6, top: '10%', right: '10%' },
      { label: 'Music', bg: '#FFE066', fg: '#3A2A00', rotate: -6, top: '32%', right: '32%' },
      { label: 'Dance', bg: '#B02458', fg: '#FFFFFF', rotate: 4, top: '54%', right: '8%' },
      { label: 'Drama', bg: '#F8E1E7', fg: '#5C3A2E', rotate: -5, top: '74%', right: '30%' },
    ],
  },
  {
    id: 'coding',
    headline: 'Build your first app or robot',
    text: 'Coding, robotics, and science clubs for curious minds.',
    gradient: 'linear-gradient(110deg, #5C3A2E 0%, #A02453 48%, #E0568A 100%)',
    shapes: [
      { type: 'square', color: '#FFE066', size: 150, top: -30, right: 50, rotate: 14 },
      { type: 'circle', color: 'rgba(248,225,236,0.35)', size: 150, top: 200, right: 200 },
      { type: 'ring', color: '#FFE066', size: 100, top: 130, right: -20 },
      { type: 'triangle', color: '#F8E1E7', size: 64, top: 260, right: 90 },
    ],
    stickers: [
      { label: 'Coding', bg: '#FFE066', fg: '#3A2A00', rotate: -6, top: '14%', right: '26%' },
      { label: 'Robotics', bg: '#F8E1E7', fg: '#5C3A2E', rotate: 5, top: '40%', right: '6%' },
      { label: 'Science', bg: '#B02458', fg: '#FFFFFF', rotate: -4, top: '66%', right: '28%' },
    ],
  },
]

function Shape({ shape }) {
  const { type, color, size, top, right, rotate = 0 } = shape
  const base = { position: 'absolute', top, right, width: size, height: size, transform: `rotate(${rotate}deg)` }
  if (type === 'circle') return <div style={{ ...base, borderRadius: '50%', background: color }} />
  if (type === 'square') return <div style={{ ...base, borderRadius: 24, background: color }} />
  if (type === 'ring')
    return <div style={{ ...base, borderRadius: '50%', border: `${Math.round(size / 8)}px solid ${color}` }} />

  return (
    <div
      style={{
        position: 'absolute',
        top,
        right,
        width: 0,
        height: 0,
        borderLeft: `${size / 2}px solid transparent`,
        borderRight: `${size / 2}px solid transparent`,
        borderBottom: `${size}px solid ${color}`,
        transform: `rotate(${rotate}deg)`,
      }}
    />
  )
}

function usePrefersReducedMotion() {
  const query = '(prefers-reduced-motion: reduce)'
  const [reduced, setReduced] = useState(() => window.matchMedia(query).matches)
  useEffect(() => {
    const mq = window.matchMedia(query)
    const onChange = (e) => setReduced(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0)
  const reducedMotion = usePrefersReducedMotion()


  useEffect(() => {
    if (reducedMotion) return
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), INTERVAL_MS)
    return () => clearInterval(id)
  }, [reducedMotion])

  const slide = SLIDES[index]

  return (
    <section
      aria-labelledby="hero-title"
      className="on-dark relative overflow-hidden bg-cocoa text-white md:min-h-[27rem]"
    >
    
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          aria-hidden="true"
          className="absolute inset-0 transition-opacity duration-[800ms]"
          style={{ opacity: i === index ? 1 : 0, background: s.gradient }}
        >
          <div className="absolute inset-0 opacity-25 md:opacity-100">
            {s.shapes.map((shape, n) => (
              <Shape key={n} shape={shape} />
            ))}
          </div>
        </div>
      ))}

      <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-32 md:pb-28 md:pt-36">
        <div key={slide.id} className="slide-text max-w-xl">
          <h1 id="hero-title" className="text-4xl font-semibold leading-tight md:text-5xl">
            {slide.headline}
          </h1>
          <p className="mt-4 text-lg text-white/90">{slide.text}</p>
        </div>

        <Link
          to="/clubs"
          className="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-raspberry-dark hover:bg-rose"
        >
          Browse clubs
        </Link>

        
        <div
          key={`stickers-${slide.id}`}
          aria-hidden="true"
          className="pointer-events-none mt-8 flex flex-wrap gap-2 md:absolute md:inset-x-0 md:bottom-24 md:top-28 md:mt-0 md:block"
        >
          {slide.stickers.map((s, n) => (
            <div
              key={s.label}
              className="slide-text md:absolute md:top-[var(--t)] md:right-[var(--r)]"
              style={{ '--t': s.top, '--r': s.right, animationDelay: `${n * 150}ms`, animationFillMode: 'backwards' }}
            >
              <span
                className="inline-block rounded-xl px-4 py-2 text-base font-semibold shadow-[0_4px_0_rgba(0,0,0,0.25)] md:text-lg"
                style={{ background: s.bg, color: s.fg, transform: `rotate(${s.rotate}deg)` }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

       
        <div aria-hidden="true" className="mt-8 flex gap-2">
          {SLIDES.map((s, i) => (
            <span
              key={s.id}
              className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-butter' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}