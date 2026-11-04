import { useSearchParams } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle.js'

// Week 1 placeholder. The layout is built in Week 2, search and filters in Week 3.
export default function Clubs() {
  usePageTitle('Clubs | AfterClass Kigali')
  const [params] = useSearchParams()
  const entries = [...params.entries()]

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-semibold">Clubs</h1>
      <p className="mt-3 max-w-prose text-lg">
        The full directory with search, filters, and monthly prices.
      </p>
      {entries.length > 0 && (
        <div className="mt-6 max-w-prose rounded-2xl bg-rose p-4">
          <h2 className="text-lg font-semibold">Your search was received</h2>
          <ul className="mt-2 list-disc pl-5">
            {entries.map(([key, value]) => (
              <li key={key}>{key}: {value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
