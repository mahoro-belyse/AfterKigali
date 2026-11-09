export default function ShapesCollage() {
  return (
    <div aria-hidden="true" className="relative h-56 overflow-hidden rounded-3xl bg-rose md:h-72">
      <div className="absolute left-6 top-10 h-28 w-28 rounded-full bg-raspberry md:h-36 md:w-36" />
      <div className="absolute right-8 top-6 h-20 w-20 rotate-12 rounded-2xl bg-butter md:h-24 md:w-24" />
      <div className="absolute bottom-4 right-12 h-0 w-0 border-x-[34px] border-b-[58px] border-x-transparent border-b-cocoa" />
      <span className="absolute left-4 top-4 -rotate-6 rounded-xl bg-butter px-3 py-1.5 text-sm font-semibold text-cocoa shadow-[0_3px_0_rgba(0,0,0,0.18)]">
        Ages 6-18
      </span>
      <span className="absolute bottom-6 left-8 rotate-3 rounded-xl bg-raspberry-dark px-3 py-1.5 text-sm font-semibold text-white shadow-[0_3px_0_rgba(0,0,0,0.18)]">
        8 activities
      </span>
    </div>
  )
}
