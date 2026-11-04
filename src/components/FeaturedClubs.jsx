import { Link } from 'react-router-dom'
import clubs from '../data/clubs.json'
import ClubCard from './ClubCard.jsx'

export default function FeaturedClubs() {
  const featured = clubs.slice(0, 3)

  return (
    <section aria-labelledby="featured-title" className="mx-auto max-w-6xl px-4 py-8">
      <h2 id="featured-title" className="text-center text-3xl font-semibold">Featured clubs</h2>
      <p className="mt-2 text-center text-sm">Choose best club for kid so they can gain knowledge and entertained at the same time.</p>

      <ul className="mt-8 grid gap-6 md:grid-cols-3">
        {featured.map((club) => (
          <li key={club.id}>
            <ClubCard club={club} />
          </li>
        ))}
      </ul>

      <div className="mt-8 text-center">
        <Link
          to="/clubs"
          className="inline-block rounded-xl border-2 border-raspberry-dark px-6 py-3 font-semibold text-raspberry-dark hover:bg-rose"
        >
          See all clubs
        </Link>
      </div>
    </section>
  )
}
