import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="footer flex justify-between px-20">
        <img
          src="svg/text.png"
          alt="design and devloped by Girum.G"
        />
        <div className="footer__socials mt-20">
          <a
            href="https://github.com/girumgizachew1"
            target="_blank"
            rel="noopener"
          >
            <img src="svg/github.svg" alt="github logo" />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer