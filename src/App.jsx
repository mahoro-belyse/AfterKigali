import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Clubs from './pages/Clubs.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <div className="p-1.5 md:px-2 md:py-3">
  <div className="mx-auto flex min-h-[calc(100vh-0.75rem)] max-w-[1920px] flex-col overflow-hidden rounded-[2rem] bg-ivory md:min-h-[calc(100vh-1.5rem)]">
      
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-butter focus:px-4 focus:py-2 focus:font-semibold focus:text-cocoa"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div></div>
  )
}
