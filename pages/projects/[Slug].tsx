import Head from 'next/dist/next-server/lib/head'
import React, { useEffect, useState } from 'react'
import { Navigation } from "../../components/Navigation/Navigation";
import Projectcasestudy from '../../components/Project/Projectcasestudy';
import projectsData from '../../lib/project'
import { useRouter } from 'next/router';

function Slug() {
  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);
  const router = useRouter();
  const  {Slug}  = router.query;
 
  const [project, setProject] = useState(null);
  
  useEffect(() => {
    if (Slug) {
      const project:any = projectsData.find(p => p.slug === Slug);
      setProject(project);
    }
  }, [Slug]);
  function toggleBodyScroll(isToggleOpen: boolean) {
    if (isToggleOpen === false) {
      setIsToggleOpen(true);
    } else if (isToggleOpen === true) {
      setIsToggleOpen(false);
    }
  }
  return (
    <div>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6513560829041028"
          crossOrigin="anonymous"></script>
        <link rel="icon" href="svg/logo2.png" />
        <link href="https://girum.netlify.app/" rel="canonical" />
        <meta name="theme-color" content="#10101A" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="#10101A"
        />
        <meta name="google-site-verification" content="yPdBVDKst-ITfiTQPTkB8rxQjArTSTzqFJ65hJK9C4Q" />
        <title>Girum Gizachew &mdash; Frontend Devloper || FullStack Developer</title>
        <meta
          name="description"
          content="I'm a FrontEnd Developer And A Software Engineer ."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Girum Gizachew &mdash; Frontend Devloper and FullStack Developer"
        />
        <meta property="og:url" content="" />
        <meta property="og:image" content="webp/preview-image.png" />
        <meta
          property="og:description"
          content="I'm a FrontEnd Developer And A Software Engineer ."
        />
        <meta
          name="twitter:title"
          content="Girum Gizachew 🚀 &mdash; Frontend Devloper and FullStack Developer"
        />
        <meta
          name="twitter:description"
          content="I'm a FrontEnd Developer And A Software Engineer ."
        />
        <meta name="twitter:image" content="webp/preview-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="" />
      </Head>

      <Navigation
        isOpen={isToggleOpen}
        toggleOpen={() => toggleBodyScroll(isToggleOpen)}
      />
      {
        project && <Projectcasestudy project={project} />
     }

    </div>
  )
}

export default Slug