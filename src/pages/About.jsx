import usePageTitle from '../hooks/usePageTitle.js'

// Week 1 placeholder. Built fully in Week 2.
export default function About() {
  usePageTitle('About | AfterClass Kigali')
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-semibold">About</h1>
      <p className="mt-3 max-w-prose text-lg">
        AfterClass Kigali project. Its purpose, how-to-use guide, and contact form

      </p>
    </div>
  )
}
