import React from 'react'
import useSwr from "swr";

const fetcher = (url: any) => fetch(url).then((res) => res.json());
interface Ireply {
    id: number;
    name: string;
    userName: string;
    reply: string;
  }
function hero() {
    const { data: reviews, error } = useSwr("/api/tweets", fetcher);

    if (error) console.log(error);
return(
    <main className="container">
        <p className="about-text">
            Hello ! , I am a Fullstack web Developer/ Software Engineer in AddisAbaba/Ethiopia with professional Frontend development skills.
            <br/> 
            I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. 
            I honed my skills at web development, technical writing, product design and SEO analytics. 
            <br />
            well orginized person, problem solver, independent employee with high attention to detail 
          </p>
          <section id="sectionProjects" className="section-projects">
            <h1 className="heading-1">
              <span>Some Worthy mentioning projects </span> <small>💼</small>
            </h1>
            <p className="paragraph">
              Each project is unique. Here are some of my works.
            </p>

            <div className="project-card">
              <div className="project-card__left">
                <h4 className="heading-4">
                  NEXT JS, LOCOMOTIVE SCROLL, FRAMER MOTION
                </h4>
              </div>
              <div
                className="project-card__middle"
                data-displacement="webp/myDistorsionImage.webp"
              >
                <img src="webp/hyab1.png" alt="alexxandria model" />
                <img src="webp/hyab1.png" alt="alexxandria logo" />
              </div>
              <div className="project-card__right">
                <h2
                  data-scroll
                  data-scroll-offset="35%"
                  data-scroll-repeat={true}
                  data-scroll-class="alexxandria-anim"
                  className="heading-2"
                >
                  hYAB gIFTS
                  <br /> gIFTS
                </h2>
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://hyab-15046.web.app/"
                  className="project-card__link"
                >
                  VISIT THE WEBSITE
                </a>
                
                </div>
            </div>

            <div className="project-card">
              <div className="project-card__left">
                <h4 className="heading-4">REACT JS, Tailwindcss, NodeJS</h4>
              </div>
              <div
                className="project-card__middle"
                data-displacement="webp/myDistorsionImage.webp"
              >
                <img src="webp/abyssinaye.png" alt="abyssinaye" />
                <img src="webp/abyssinaye.png" alt="abyssinaye logo" />
              </div>
              <div className="project-card__right">
                <h2
                  data-scroll
                  data-scroll-offset="35%"
                  data-scroll-repeat={true}
                  data-scroll-class="safarika-anim"
                  className="heading-2"
                >
                  Abyssiniaye ኢትዮጲያን እንወቅ
                </h2>
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://abyssiniaye.netlify.app/"
                  className="project-card__link"
                >
                  VISIT THE WEBSITE
                </a>
                
              </div>
            </div>

            <div className="project-card">
              <div className="project-card__left">
                <h4 className="heading-4">
                 JavaScript , Scss, 
                </h4>
              </div>
              <div
                className="project-card__middle"
                data-displacement="webp/myDistorsionImage.webp"
              >
                <img src="webp/infinite.jpg" alt="heatrow" />
                <img src="webp/infinite.jpg" alt="heatrow logo" />
              </div>
              <div className="project-card__right">
                <h2
                  data-scroll
                  data-scroll-offset="35%"
                  data-scroll-repeat={true}
                  data-scroll-class="heatrow-anim"
                  className="heading-2"
                >
                  In-finite
                  <br /> Consulting
                </h2>
                <a
                  href="https://in-finiteconsulting.com/final"
                  rel="noopener"
                  target="_blank"
                  className="project-card__link"
                >
                  VISIT THE WEBSITE
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card__left">
                <h4 className="heading-4">Wordpress, JAVASCRIPT</h4>
              </div>
              <div
                className="project-card__middle"
                data-displacement="webp/myDistorsionImage.webp"
              >
                <img src="webp/giriv1.png" alt="adeola model" />
                <img src="webp/giriv1.png" alt="adeola logo" />
              </div>
              <div className="project-card__right">
                <h2
                  data-scroll
                  data-scroll-offset="35%"
                  data-scroll-repeat={true}
                  data-scroll-class="giriv1-anim"
                  className="heading-2"
                >
                  Girum Gizachew 
                  <br /> version 1
                </h2>
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://girumgizachew.netlify.app/"
                  className="project-card__link"
                >
                  Visit the Website
                </a>
              </div>
            </div>




            <div className="project-card">
              <div className="project-card__left">
                <h4 className="heading-4">React.js, Mysql, Express.js, Node.js</h4>
              </div>
              <div
                className="project-card__middle"
                data-displacement="webp/myDistorsionImage.webp"
              >
                <img src="webp/dgh.jpg" alt="adeola model" />
                <img src="webp/dgh.jpg" alt="adeola logo" />
              </div>
              <div className="project-card__right">
                <h2
                  data-scroll
                  data-scroll-offset="35%"
                  data-scroll-repeat={true}
                  data-scroll-class="adeola-anim"
                  className="heading-2"
                >
                  DGH Ecommerce
                  <br /> And Analytics
                </h2>
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://e-comm-e8626.web.app/"
                  className="project-card__link"
                >
                  Visit the Website
                </a>
              </div>
            </div>



            <div className="project-card">
              <div className="project-card__left">
                <h4 className="heading-4">React.js, Mysql, Express.js, Node.js</h4>
              </div>
              <div
                className="project-card__middle"
                data-displacement="webp/myDistorsionImage.webp"
              >
                <img src="webp/HULU.webp" alt="adeola model" />
                <img src="webp/HULU.webp" alt="adeola logo" />
              </div>
              <div className="project-card__right">
                <h2
                  data-scroll
                  data-scroll-offset="35%"
                  data-scroll-repeat={true}
                  data-scroll-class="hulu-anim"
                  className="heading-2"
                >
                  Hulu Habeshan
                  <br /> Shirts
                </h2>
                <a
                  rel="noopener"
                  target="_blank"
                  href="http://hulutryshirts.unaux.com/"
                  className="project-card__link"
                >
                  Visit the Website
                </a>
              </div>
            </div>





            <div className="project-card">
              <div className="project-card__left">
                <h4 className="heading-4">Reactjs, nodeJs, CSS, JAVASCRIPT</h4>
              </div>
              <div
                className="project-card__middle"
                data-displacement="webp/myDistorsionImage.webp"
              >
                <img src="webp/imagebound.jpg" alt="adeola model" />
                <img src="webp/imagebound.jpg" alt="adeola logo" />
              </div>
              <div className="project-card__right">
                <h2
                  data-scroll
                  data-scroll-offset="35%"
                  data-scroll-repeat={true}
                  data-scroll-class="tolo-anim"
                  className="heading-2"
                >
                  Tolo  
                  <br />Delivery
                </h2>
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://jimma-36404.web.app/"
                  className="project-card__link"
                >
                  Visit the Website
                </a>
              </div>
            </div>








          </section>
          <section
            data-scroll
            data-scroll-offset="35%"
            data-scroll-repeat={true}
            data-scroll-class="section-reviews__bg"
            className="section-reviews"
          >
            <div className="section-reviews__top">
              <h1 className="heading-1">
                <span>i take my client Seriously  </span> <small></small>
              </h1>
              <p className="paragraph paragraph__sub">
                What people are saying Me              </p>
            </div>
            <div className="section-reviews__bottom">
              <div className="section-reviews__bottom-wrapper review-card__anim1">
                {reviews?.data.map((review: Ireply) => (
                  <div key={review.id} className="review-card">
                    <div className="review-card__top">
                      <div className="review-card__top--left">
                        <p className="review-card__p">{review.name}</p>
                        <h3 className="review-card__h3">{review.userName}</h3>
                      </div>
                      <div className="review-card__top--right">
                        <img src="svg/twitter.svg" alt="twitter icon" />
                      </div>
                    </div>
                    <div className="review-card__bottom">
                      <h2 className="review-card__h2">{review.reply}</h2>
                    </div>
                  </div>
                ))}
              </div>
              <div className="section-reviews__bottom-wrapper review-card__anim2">
                {reviews?.data.sort().map((review: Ireply) => (
                  <div key={review.id} className="review-card">
                    <div className="review-card__top">
                      <div className="review-card__top--left">
                        <p className="review-card__p">{review.name}</p>
                        <h3 className="review-card__h3">{review.userName}</h3>
                      </div>
                      <div className="review-card__top--right">
                        <img src="svg/twitter.svg" alt="twitter icon" />
                      </div>
                    </div>
                    <div className="review-card__bottom">
                      <h2 className="review-card__h2">{review.reply}</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="section-contact">
            <h1 className="heading-1">
              <span>Wanna Hire me  </span> <small></small>
            </h1>
            <h2 className="section-contact__h2">
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
          <section className="section-socials">
            <h1 className="heading-1">
              <span>Wanna To contact me?</span> <small>👋</small>
              <a href="https://www.buymeacoffee.com/girumegizaM?new=1" >Buy me coffee</a> <small>👋</small>
            </h1>
            <p className="paragraph">Connect with me online</p>
            <div className="section-socials--links">
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
        </main>
   
    )
}
export default hero