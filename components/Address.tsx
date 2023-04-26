import React from 'react'

function Address() {
  return (
    <div className=' px-10 md:px-48 space-y-40 mt-40 ' >
         <section className="section-contact space-y-10">
        <h1 className="heading-1">
          <span>Wanna Hire me  </span> <small></small>
        </h1>
        <h2 className="paragraph text-white text-xl">
          Thanks for stopping by, I’m currently looking to join a new team
          of creative designers and developers. If you think we might be a
          good fit for one another, give me a
          <a href="tel:+251987270756"> call Ethiopia &nbsp;</a>
          or send me an
          <a
            href="mailto:girumegizachew@gmail.com"
            rel="noopener"
            target="_blank"
          >
            &nbsp; email 📧
          </a>
          .
        </h2>
      </section>
        <section className="section-socials mt-10 space-y-10">
        <h1 className="heading-1">
          <span>Wanna To contact me?</span> <small>👋</small>
          <a href="https://www.buymeacoffee.com/girumegizaM?new=1" className='text-white' >Buy me coffee</a> <small>👋</small>
        </h1>
        <p className="paragraph">Connect with me online</p>
        <div className="section-socials--links text-white space-x-16">
          <a
            href="https://github.com/girumgizachew1"
            rel="noopener"
            target="_blank"
          >
            👾 GitHub
          </a>
          <a
            href="https://twitter.com/girumgizachew"
            rel="noopener"
            target="_blank"
          >
            🐦 Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/girum-gizachew-9324b820b/"
            rel="noopener"
            target="_blank"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://www.instagram.com/girumegizacheew"
            rel="noopener"
            target="_blank"
          >
            📸 Instagram
          </a>
        </div>
      </section>
    </div>
  )
}

export default Address