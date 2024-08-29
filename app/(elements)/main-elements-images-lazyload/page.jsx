import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import { menuItems } from "@/data/menu";

export const metadata = {
  title:
    "Element Page Image LazyLoad || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function ElementPageImageLazyLoad() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems} />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/section-bg-1.jpg)",
                }}
              >
                <div className="container position-relative pt-30 pt-sm-50">
                  {/* Section Content */}
                  <div className="text-center">
                    <div className="row">
                      {/* Page Title */}
                      <div className="col-md-8 offset-md-2">
                        <h1 className="hs-title-1 mb-20">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            <AnimatedText text="Images Lazyload" />
                          </span>
                        </h1>
                        <div className="row">
                          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                            <p
                              className="section-descr mb-0 wow fadeIn"
                              data-wow-delay="0.2s"
                              data-wow-duration="1.2s"
                            >
                              Open this file in the HTML editor and copy the
                              code of the wished component.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* End Page Title */}
                    </div>
                  </div>
                  {/* End Section Content */}
                </div>
              </ParallaxContainer>
            </section>
            <section className="page-section">
              <div className="container relative">
                <div className="mb-30 wow fadeInUp">
                  <Image
                    src="/assets/images/portfolio/full-project-1.jpg"
                    width={1290}
                    height={827}
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="mb-30 wow fadeInUp">
                  <Image
                    src="/assets/images/portfolio/full-project-2.jpg"
                    width={1290}
                    height={827}
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="mb-30 wow fadeInUp">
                  <Image
                    src="/assets/images/portfolio/full-project-3.jpg"
                    width={1290}
                    height={827}
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="mb-30 wow fadeInUp">
                  <Image
                    src="/assets/images/portfolio/full-project-4.jpg"
                    width={1290}
                    height={827}
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="mb-30 wow fadeInUp">
                  <Image
                    src="/assets/images/portfolio/full-project-5.jpg"
                    width={1290}
                    height={827}
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="wow fadeInUp">
                  <Image
                    src="/assets/images/portfolio/full-project-6.jpg"
                    width={1290}
                    height={827}
                    loading="lazy"
                    alt=""
                  />
                </div>
              </div>
            </section>
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
