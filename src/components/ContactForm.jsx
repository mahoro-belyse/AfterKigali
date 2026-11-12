import { useState } from 'react'

const fieldClass = 'w-full rounded-xl border border-cocoa/20 bg-white px-3 py-2.5 text-cocoa'
const labelClass = 'mb-1 block text-sm font-semibold'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    e.currentTarget.reset()
    setSent(true)
  }

  return (
    <form
      aria-labelledby="contact-title"
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-rose bg-white p-5"
    >
      <div>
        <label htmlFor="c-name" className={labelClass}>Name</label>
        <input id="c-name" name="name" type="text" required autoComplete="off" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="c-email" className={labelClass}>Email</label>
        <input id="c-email" name="email" type="email" required autoComplete="off" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="c-message" className={labelClass}>Message</label>
        <textarea id="c-message" name="message" rows={4} required className={fieldClass} />
      </div>

      <button
        type="submit"
        className="rounded-xl bg-raspberry px-6 py-3 font-semibold text-white hover:bg-raspberry-dark"
      >
        Send message
      </button>

      

      <div role="status" aria-live="polite">
        {sent && (
          <p className="rounded-xl bg-rose p-3 font-semibold">
            Thanks for trying the form. 
          </p>
        )}
      </div>
    </form>
  )
}
