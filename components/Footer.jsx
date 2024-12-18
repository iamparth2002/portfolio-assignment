import React from 'react'

const Footer = () => {
  return (
    <footer className="">
      <section className="bg-black/">
        <div className="mx-auto flex flex-col md:flex-row justify-between px-4 sm:px-6 py-10 md:py-20 ">
          <p className="text-darkfg">
            Built with Next JS and Tailwind
          </p>
          <p className="text-darkfg">© 2024 Parth Gandhi.</p>
        </div>
      </section>
    </footer>

  )
}

export default Footer