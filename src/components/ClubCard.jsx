import { CalendarDays, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getActivity } from '../data/activities.js'

const money = new Intl.NumberFormat('en-US')

// Text from data is rendered as plain text by React, never as HTML.
// Missing fields are skipped instead of crashing (Week 4 hardens this further).
export default function ClubCard({ club }) {
  const activity = getActivity(club.activity)
  const Icon = activity?.icon
  const hasPrice = Number.isFinite(club.priceMonthly)

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-rose bg-white">
      <div aria-hidden="true" className={`grid h-28 place-items-center ${activity?.tint ?? 'bg-rose text-cocoa'}`}>
        {Icon && <Icon size={44} strokeWidth={1.75} />}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-xl font-semibold">{club.name ?? 'Unnamed club'}</h3>

        <ul className="flex flex-wrap gap-2 text-sm">
          <li className="rounded-full bg-butter px-3 py-1 font-semibold text-cocoa">
            {activity?.label ?? club.activity}
          </li>
          {club.ageMin != null && club.ageMax != null && (
            <li className="rounded-full bg-rose px-3 py-1">Ages {club.ageMin}-{club.ageMax}</li>
          )}
        </ul>

        {club.description && <p className="text-sm">{club.description}</p>}

        {club.days?.length > 0 && (
          <p className="flex items-center gap-2 text-sm">
            <CalendarDays aria-hidden="true" size={18} />
            {club.days.join(', ')}
          </p>
        )}
        {club.area && (
          <p className="flex items-center gap-2 text-sm">
            <MapPin aria-hidden="true" size={18} />
            {club.area}
          </p>
        )}

        {hasPrice && (
          <p className="mt-auto text-lg font-semibold">
            RWF {money.format(club.priceMonthly)}
            <span className="text-sm font-normal"> / month</span>
          </p>
        )}

        <Link
          to="/clubs"
          className="font-semibold text-raspberry-dark underline underline-offset-4 hover:text-cocoa"
        >
          View club<span className="sr-only">: {club.name}</span>
        </Link>
      </div>
    </article>
  )
}
