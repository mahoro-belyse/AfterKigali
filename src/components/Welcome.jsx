import { Link } from 'react-router-dom'

const STEPS = [
  { title: 'Search', text: 'Type a club name or choose an activity.' },
  { title: 'Filter', text: 'Narrow the list by age, day, and area.' },
  { title: 'Choose', text: 'Compare clubs and their monthly price.' },
]

export default function Welcome() {
  return (
    <section aria-labelledby="welcome-title" className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2">
  <div aria-hidden="true" className="relative h-64 overflow-hidden rounded-3xl bg-rose md:h-80">
  <div className="absolute left-6 top-10 h-32 w-32 rounded-full bg-raspberry md:h-40 md:w-40" />
  <div className="absolute right-8 top-6 h-20 w-20 rotate-12 rounded-2xl bg-butter md:h-24 md:w-24" />
  <div className="absolute bottom-4 right-12 h-0 w-0 border-x-[36px] border-b-[62px] border-x-transparent border-b-cocoa" />
  <span className="absolute left-4 top-4 -rotate-6 rounded-xl bg-butter px-3 py-1.5 text-sm font-semibold text-cocoa shadow-[0_3px_0_rgba(0,0,0,0.18)]">
    Ages 6-18
  </span>
  <span className="absolute bottom-5 left-5 rotate-3 rounded-xl bg-raspberry-dark px-3 py-1.5 text-sm font-semibold text-white shadow-[0_3px_0_rgba(0,0,0,0.18)]">
    8 activities
  </span>
  <div className="absolute left-1/2 top-1/2 w-52 -translate-x-1/2 -translate-y-1/2 -rotate-3 rounded-xl bg-white p-3 text-sm shadow-xl">
    <p className="font-display text-base font-semibold">Hilltop Code Lab</p>
    <p>Ages 10-13, Tue and Thu</p>
    <p className="mt-1 font-semibold">RWF 20,000 / month</p>
  </div>
</div>

      <div>
        <h2 id="welcome-title" className="text-3xl font-semibold">Welcome to AfterClass Kigali</h2>
        <p className="mt-3 max-w-prose text-lg">
        Finding a good after-school activity should not take a week of asking around. AfterClass
Kigali brings clubs together so parents and teenagers can compare them in one place.
        </p>

        <ol className="mt-6 space-y-3">
          {STEPS.map((step, i) => (
            <li key={step.title} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-raspberry font-semibold text-white"
              >
                {i + 1}
              </span>
              <p>
                <strong className="font-semibold">{step.title}.</strong> {step.text}
              </p>
            </li>
          ))}
        </ol>

        <Link
          to="/clubs"
          className="mt-8 inline-block rounded-xl border-2 border-raspberry-dark px-6 py-3 font-semibold text-raspberry-dark hover:bg-rose"
        >
          Try the directory
        </Link>
      </div>
    </section>
  )
}
