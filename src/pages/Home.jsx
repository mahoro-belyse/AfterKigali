import usePageTitle from '../hooks/usePageTitle.js'
import HeroSlideshow from '../components/HeroSlideshow.jsx'
import SearchBar from '../components/SearchBar.jsx'
import Welcome from '../components/Welcome.jsx'
import ActivityStrip from '../components/ActivityStrip.jsx'
import FeaturedClubs from '../components/FeaturedClubs.jsx'

export default function Home() {
  usePageTitle('AfterClass Kigali | Find after-school clubs')

  return (
    <>
      <HeroSlideshow />
      {/* The search bar overlaps the bottom edge of the hero: negative margin + z-index */}
      <div className="relative z-10 -mt-10 px-4">
        <SearchBar />
      </div>
      <Welcome />
      <ActivityStrip />
      <FeaturedClubs />
    </>
  )
}
