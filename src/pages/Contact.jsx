export default function Contact() {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 py-16">
      <header className="text-center sm:text-left">
        <h1 className="text-3xl font-bold sm:text-4xl">Get in Touch</h1>
        <p className="mt-3 text-base-content/70">
          Have a question about our trips or want help planning your next adventure? Send us a note and
          we will get back to you within two business days.
        </p>
      </header>

      <form className="rounded-3xl border border-base-300 bg-base-100 p-8 shadow-sm">
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm font-semibold text-base-content">
            Full name
            <input
              type="text"
              name="fullName"
              placeholder="Ada Lovelace"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-semibold text-base-content">
            Email address
            <input
              type="email"
              name="email"
              placeholder="ada@example.com"
              className="input input-bordered w-full"
              required
            />
          </label>
        </div>

        <label className="mt-6 flex flex-col gap-2 text-sm font-semibold text-base-content">
          How can we help?
          <textarea
            name="message"
            rows="5"
            placeholder="Tell us where you would like to go or what you need help with."
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
        </label>

        <button type="submit" className="btn btn-secondary mt-8 w-full sm:w-auto">
          Send message
        </button>
      </form>
    </section>
  );
}
