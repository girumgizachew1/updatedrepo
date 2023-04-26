import React from 'react'
import useSwr from "swr";
import Address from './Address';
import Reviewcard from './Reviewcard';
import Projects from './Projects';
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
  return (
    <main className="flex flex-col justify-center items-center">
      <section>
        <p className="about-text mt-40 mx-10 md:mx-48 ">
          Greetings! I am a proficient Fullstack Web Developer/Software Engineer hailing from Addis Ababa, Ethiopia.
          <br />
          My areas of expertise lie in professional Frontend development, wherein I possess exceptional skills. I take immense pride in utilizing my multifaceted background to decrypt intricate problems and craft splendid experiences. My competencies extend to the fields of web development, technical writing, product design, and SEO analytics.
          <br />
          I am a well-organized individual who possesses a natural flair for problem-solving, and I am known for my ability to work independently while paying meticulous attention to detail.
        </p>
      </section>
      <section><Projects /></section>
      <div className="section-reviews mt-20">
        <h1 className="text-white text-3xl">
          <span className='text-5xl' >I take my client Seriously  </span> <small></small>
        </h1>
        <p className="paragraph paragraph__sub">
          What My colleages saying About Me              </p>
      </div>
      <section
        data-scroll
        data-scroll-offset="35%"
        data-scroll-repeat={true}
        data-scroll-class="section-reviews__bg"
        className="section-reviews"
      >


        <div className="col-span-5 overflow-x-hidden mt-32 mb-16;">
          <div className="flex items-center justify-center max-w-max1 flex-wrap">
            {reviews?.data.map((review: Ireply, index: number) => {
              if (index < 10) {
                return <Reviewcard review={review} key={review.id} />;
              }
              return null;
            })}
          </div>

        </div>
      </section>
      <section> <Address /> </section>

    </main>

  )
}
export default hero