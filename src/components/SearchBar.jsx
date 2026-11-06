import { useNavigate } from 'react-router-dom'
import { ACTIVITIES, AGE_GROUPS, AREAS } from '../data/activities.js'

const fieldClass =
  'w-full rounded-xl border border-rose bg-white px-3 py-3 text-cocoa placeholder:text-cocoa/70 md:rounded-none md:border-0 md:border-r md:border-rose'

export default function SearchBar() {
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    const params = new URLSearchParams()
    for (const [key, value] of new FormData(e.currentTarget).entries()) {
      const text = String(value).trim()
      if (text) params.set(key, text)
    }
    navigate({ pathname: '/clubs', search: params.toString() })
  }

  return (
    <form
      role="search"
      aria-label="Search clubs"
      onSubmit={handleSubmit}
      className="mx-auto grid max-w-5xl gap-3 rounded-3xl border-2 border-raspberry bg-white p-3 shadow-xl md:grid-cols-[1.5fr_1fr_1fr_1fr_auto] md:items-center md:rounded-full md:px-4 md:py-2"
    >
      <div>
        <label htmlFor="q" className="sr-only">Search clubs by name or keyword</label>
        <input id="q" name="q" type="search" placeholder="Search clubs..." className={fieldClass} />
      </div>

      <div>
        <label htmlFor="activity" className="sr-only">Activity</label>
        <select id="activity" name="activity" className={fieldClass} defaultValue="">
          <option value="">Any activity</option>
          {ACTIVITIES.map((a) => (
            <option key={a.id} value={a.id}>{a.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="age" className="sr-only">Age group</label>
        <select id="age" name="age" className={fieldClass} defaultValue="">
          <option value="">Any age</option>
          {AGE_GROUPS.map((g) => (
            <option key={g} value={g}>Ages {g}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="area" className="sr-only">Area</label>
        <select id="area" name="area" className={`${fieldClass} md:border-r-0`} defaultValue="">
          <option value="">Any area</option>
          {AREAS.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="rounded-xl bg-raspberry px-6 py-3 font-semibold text-white hover:bg-raspberry-dark md:rounded-full"
      >
        Search
      </button>
    </form>
  )
}
