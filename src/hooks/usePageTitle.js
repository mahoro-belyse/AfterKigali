import { useEffect } from 'react'

// Gives each page its own browser tab title (checked again in Week 5)
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title
  }, [title])
}
