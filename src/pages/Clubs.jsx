import { useRef, useState } from 'react'
import { ChevronDown, SlidersHorizontal } from 'lucide-react'
import usePageTitle from '../hooks/usePageTitle.js'
import clubs from '../data/clubs.json'
import ClubCard from '../components/ClubCard.jsx'
import FilterPanel from '../components/FilterPanel.jsx'

export default function Clubs() {
  usePageTitle('Clubs | AfterClass Kigali')
  const [filtersOpen, setFiltersOpen] = useState(false)
  const buttonRef = useRef(null)

  // Escape closes the filters panel on phones and returns focus to its button
  function handleKeyDown(e) {
    if (e.key === 'Escape' && filtersOpen) {
      setFiltersOpen(false)
      buttonRef.current?.focus()
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 pb-4 pt-4 md:px-6" onKeyDown={handleKeyDown}>
      <div>
        <h1 className="text-4xl font-semibold md:text-5xl">Find your club</h1>
        <p className="mt-3 max-w-prose text-lg">
          Search the directory and compare clubs by age, day, area, and monthly price.
        </p>
      </div>

      {/* Phones and tablets: the filters sit behind a button */}
      <div className="mt-6 lg:hidden">
        <button
          ref={buttonRef}
          type="button"
          aria-expanded={filtersOpen}
          aria-controls="filters-panel"
          onClick={() => setFiltersOpen((o) => !o)}
          className="flex items-center gap-2 rounded-xl border-2 border-raspberry-dark px-4 py-2 font-semibold text-raspberry-dark hover:bg-rose"
        >
          <SlidersHorizontal aria-hidden="true" size={18} />
          Filters
          <ChevronDown
            aria-hidden="true"
            size={18}
            className={`transition-transform ${filtersOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      <div className="mt-4 grid gap-6 lg:mt-8 lg:grid-cols-[18rem_1fr]">
        {/* Desktop: always visible sidebar. Phones: opens and closes. */}
        <div
          id="filters-panel"
          className={`${filtersOpen ? 'block' : 'hidden'} lg:sticky lg:top-4 lg:block lg:self-start`}
        >
          <FilterPanel count={clubs.length} onApply={() => setFiltersOpen(false)} />
        </div>

        <section aria-labelledby="results-title">
          <h2 id="results-title" className="sr-only">Club results</h2>
          <p aria-live="polite" className="mb-4 font-semibold">
            Showing {clubs.length} clubs
          </p>
          <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {clubs.map((club) => (
              <li key={club.id}>
                <ClubCard club={club} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
