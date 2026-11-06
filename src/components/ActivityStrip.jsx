import { Link } from 'react-router-dom'
import { ACTIVITIES } from '../data/activities.js'

export default function ActivityStrip() {
  return (
    <section aria-labelledby="activities-title" className="mx-auto max-w-6xl px-4 py-8">
      <h2 id="activities-title" className="text-center text-3xl font-semibold">Browse by activity</h2>
      
      <ul className="mt-6 flex gap-3 overflow-x-auto pb-3 md:flex-wrap md:justify-center md:overflow-visible">
        {ACTIVITIES.map(({ id, label, icon: Icon }) => (
          <li key={id} className="shrink-0">
            <Link
              to={`/clubs?activity=${id}`}
              className="flex items-center gap-2 rounded-full border-2 border-cocoa bg-white px-4 py-2 font-semibold hover:bg-rose"
            >
              <Icon aria-hidden="true" size={20} />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
