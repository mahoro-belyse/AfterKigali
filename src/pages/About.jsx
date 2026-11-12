import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle.js'
import ShapesCollage from '../components/ShapesCollage.jsx'
import ContactForm from '../components/ContactForm.jsx'

const STEPS = [
  { title: 'Search', text: 'Type a club name or choose an activity.' },
  { title: 'Filter', text: 'Narrow the list by age, day, and area.' },
  { title: 'Choose', text: 'Compare clubs and their monthly price.' },
]

export default function About() {
  usePageTitle('About | AfterClass Kigali')

  return (
    <div className="mx-auto max-w-6xl space-y-14 px-4 pb-4 pt-4 md:px-6">
      <div>
        <h1 className="text-4xl font-semibold md:text-5xl">About AfterClass Kigali</h1>
        <p className="mt-3 max-w-prose text-lg">One place to find after-school clubs.</p>
      </div>

      <section aria-labelledby="purpose-title" className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h2 id="purpose-title" className="text-3xl font-semibold">Our purpose</h2>
          <p className="mt-3 max-w-prose text-lg">
            Parents and teenagers often hear about clubs by word of mouth or from posters around town.
            AfterClass Kigali brings those options into one place, so it is quicker to find a club that fits
            an age, an interest, a day, and an area.
          </p>
          <p className="mt-3 max-w-prose text-lg">
            Every club shows its monthly price, so families can compare before they decide.
          </p>
          <Link
            to="/clubs"
            className="mt-6 inline-block rounded-xl bg-raspberry px-6 py-3 font-semibold text-white hover:bg-raspberry-dark"
          >
            Browse clubs
          </Link>
        </div>
        <ShapesCollage />
      </section>

      <section aria-labelledby="how-title">
        <h2 id="how-title" className="text-3xl font-semibold">How to use the site</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={step.title} className="rounded-2xl border border-rose bg-white p-5">
              <span
                aria-hidden="true"
                className="grid h-9 w-9 place-items-center rounded-full bg-raspberry font-semibold text-white"
              >
                {i + 1}
              </span>
              <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
              <p className="mt-1">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="listings-title" className="rounded-2xl bg-butter p-5 text-cocoa md:p-6">
        <h2 id="listings-title" className="text-2xl font-semibold">About the listings</h2>
        <p className="mt-2 max-w-prose">
          The clubs, prices, and contact details on this site are sample information created for a learning
          project. AfterClass Kigali is not a real booking service, and it does not take payments.
        </p>
      </section>

      <section aria-labelledby="contact-title" className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 id="contact-title" className="text-3xl font-semibold">Contact us</h2>
          <p className="mt-3 max-w-prose text-lg">Questions about the site? Send us a note.</p>
          <address className="mt-4 text-lg not-italic">
            <p>Kigali, Rwanda</p>
            <p>
              Email:{' '}
              <a className="font-semibold text-raspberry-dark underline underline-offset-4" href="mailto:hello@example.com">
                AfterKigali1@gmail.com
              </a>
            </p>
          </address>
        </div>
        <ContactForm />
      </section>
    </div>
  )
}
