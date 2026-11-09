import { ACTIVITIES, AGE_GROUPS, AREAS } from '../data/activities.js'

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const fieldClass = 'w-full rounded-xl border border-cocoa/20 bg-white px-3 py-2.5 text-cocoa'
const labelClass = 'mb-1 block text-sm font-semibold'

export default function FilterPanel({ count, onApply }) {
  function handleSubmit(e) {
    e.preventDefault()
    onApply?.()
  }

  return (
    <form aria-label="Filter clubs" onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-rose p-4">
      <h2 className="font-display text-xl font-semibold">Filters</h2>

      <div>
        <label htmlFor="f-q" className={labelClass}>Search</label>
        <input id="f-q" name="q" type="search" placeholder="Club name or keyword" className={fieldClass} />
      </div>

      <div>
        <label htmlFor="f-activity" className={labelClass}>Activity</label>
        <select id="f-activity" name="activity" defaultValue="" className={fieldClass}>
          <option value="">Any activity</option>
          {ACTIVITIES.map((a) => (
            <option key={a.id} value={a.id}>{a.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="f-age" className={labelClass}>Age group</label>
        <select id="f-age" name="age" defaultValue="" className={fieldClass}>
          <option value="">Any age</option>
          {AGE_GROUPS.map((g) => (
            <option key={g} value={g}>Ages {g}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="f-day" className={labelClass}>Day</label>
        <select id="f-day" name="day" defaultValue="" className={fieldClass}>
          <option value="">Any day</option>
          {DAYS.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="f-area" className={labelClass}>Area</label>
        <select id="f-area" name="area" defaultValue="" className={fieldClass}>
          <option value="">Any area</option>
          {AREAS.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        {/* Only needed on phones, where the panel opens and closes */}
        <button
          type="submit"
          className="rounded-xl bg-raspberry px-4 py-2.5 font-semibold text-white hover:bg-raspberry-dark lg:hidden"
        >
          Show {count} clubs
        </button>
        <button
          type="reset"
          className="rounded-xl border-2 border-raspberry-dark px-4 py-2.5 font-semibold text-raspberry-dark hover:bg-white"
        >
          Clear filters
        </button>
      </div>
    </form>
  )
}
