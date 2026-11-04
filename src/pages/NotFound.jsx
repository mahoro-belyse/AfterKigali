import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle.js'

export default function NotFound() {
  usePageTitle('Page not found | AfterClass Kigali')
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-semibold">Page not found</h1>
      <p className="mt-3 text-lg">That page does not exist. Go back to the home page to keep exploring.</p>
      <Link to="/" className="mt-6 inline-block font-semibold text-raspberry-dark underline underline-offset-4">
        Back to Home
      </Link>
    </div>
  )
}
