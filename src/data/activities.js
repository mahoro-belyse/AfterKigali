import { Code, Trophy, Palette, Music, BookOpen, PersonStanding, Bot, Mic } from 'lucide-react'

// The 8 activities used by the search bar, activity strip, and club cards.
// "tint" holds the full Tailwind class names so Tailwind can detect them.
export const ACTIVITIES = [
  { id: 'coding', label: 'Coding', icon: Code, tint: 'bg-rose text-cocoa' },
  { id: 'sports', label: 'Sports', icon: Trophy, tint: 'bg-butter text-cocoa' },
  { id: 'art', label: 'Art', icon: Palette, tint: 'bg-rose text-cocoa' },
  { id: 'music', label: 'Music', icon: Music, tint: 'bg-butter text-cocoa' },
  { id: 'tutoring', label: 'Tutoring', icon: BookOpen, tint: 'bg-rose text-cocoa' },
  { id: 'dance', label: 'Dance', icon: PersonStanding, tint: 'bg-butter text-cocoa' },
  { id: 'robotics-science', label: 'Robotics and science', icon: Bot, tint: 'bg-rose text-cocoa' },
  { id: 'drama-debate', label: 'Drama and debate', icon: Mic, tint: 'bg-butter text-cocoa' },
]

export const AGE_GROUPS = ['6-9', '10-13', '14-18']

// Real Kigali neighbourhoods are used only as locations. The clubs in them are invented.
export const AREAS = ['Kimihurura', 'Kacyiru', 'Nyarutarama', 'Remera', 'Kicukiro', 'Nyamirambo', 'Kimironko', 'Gikondo']

export function getActivity(id) {
  return ACTIVITIES.find((a) => a.id === id)
}
