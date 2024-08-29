
import React from 'react'

const Hero = ({DATA}) => {
  return (
    <section
  id="about-me"
  className="relative z-10 break-words max-w-screen-lg px-4 sm:px-6 mx-auto pt-20 sm:pt-24 md:pt-32 grid grid-cols-3 md:gap-4 place-items-center justify-items-center"
>
  <article className="col-span-full md:col-span-2">
    <h3 className="text-xl font-bold">Hello! I'm {DATA?.name.split(' ')[0]}.</h3>
    <h1 className="text-4xl">
      A <i className="">passionate</i> software developer
    </h1>
    <h2 className="text-2xl">from {DATA?.location}</h2>
    <br />
    <p className="">
      {DATA?.description}
    </p>
    <br />
    <p className="">
     {DATA?.summary}
    </p>
  </article>
  <div
    className="relative shadow-black/5 shadow-none rounded-large"
    style={{ maxWidth: 200 }}
  >
    <img
      src="/rocket.png"
      className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large hidden md:block"
      width={200}
      alt="Rocket"
      data-loaded="true"
    />
    <img
      src="/rocket.png"
      className="absolute z-0 inset-0 w-full h-full object-cover filter blur-lg scale-105 saturate-150 opacity-30 translate-y-1 rounded-large"
      width={200}
      alt="Rocket"
      aria-hidden="true"
      data-loaded="true"
    />
  </div>
  <article className="col-span-3 pt-6 md:pt-0">
    <p className="columns-2">
      I'm always interested in expanding my knowledge and learning new things about the latest technologies and have some fun.
      If you'd like to get in touch, feel free to connect with me on{" "}
      <a
        href={DATA?.contact?.social?.LinkedIn?.url}
        target="_blank"
        rel="noreferrer"
        className="underline bg-[#0077B5]"
      >
        LinkedIn
      </a>
      . You can also find me on{" "}
      <a
        href={DATA?.contact?.social?.GitHub?.url}
        target="_blank"
        rel="noreferrer"
        className="underline bg-black"
      >
        GitHub
      </a>{" "}
      and{" "}
      <a
        href={DATA?.contact?.social?.X?.url}
        target="_blank"
        rel="noreferrer"
        className="underline bg-[#1DA1F2]"
      >
        Twitter
      </a>
      , or directly send me an email at{" "}
      <a
        href="mailto:hello@yogeshsirsat.com"
        className="underline break-all xxs:break-normal"
      >
        {DATA?.contact?.email}
      </a>
    </p>
  </article>
</section>
  )
}

export default Hero