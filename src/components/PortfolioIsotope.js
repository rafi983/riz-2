import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const PortfolioIsotope = ({ noViewMore }) => {

  return (
    <Fragment>
        <div className="works-items works-masonry-items row">
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single-2">
                    <a>
                      <img
                        decoding="async"
                        src="https://riz82.netlify.app/assets/comfysloth-fd63f7c8.png"
                        alt="comfy"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> React Js </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single-2">
                    <a>Comfy Sloth</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    An ecommerce site where users can purchase their products.
                  </p>
                </div>
                <Link legacyBehavior href="/work-single-2">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-ui-ux-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single-3">
                    <a>
                      <img
                        decoding="async"
                        src="https://riz82.netlify.app/assets/cars-a956445a.png"
                        alt="cars"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> html / css</span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single-3">
                    <a>Classic Cars</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    A website of various different types of cars including new
                    model with vintage cars.
                  </p>
                </div>
                <Link legacyBehavior href="/work-single-3">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single-4">
                    <a>
                      <img
                        decoding="async"
                        src="https://riz82.netlify.app/assets/gitinspector-c804ef30.png"
                        alt="Explore"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> html / css / js </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single-4">
                    <a>Git inspector</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    User can search all the available github users and their
                    details by entering git username.
                  </p>
                </div>
                <Link legacyBehavior href="/work-single-4">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single-5">
                    <a>
                      <img
                        decoding="async"
                        src="https://riz82.netlify.app/assets/architectweb-75e8d28d.png"
                        alt="archi"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> html / css </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single-5">
                    <a>Architecture</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    Architectural website presents you a various interor designs
                    of the house.
                  </p>
                </div>
                <Link legacyBehavior href="/work-single-5">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single-6">
                    <a>
                      <img
                        decoding="async"
                        src="https://riz82.netlify.app/assets/hulu-dcefd980.png"
                        alt="hulu"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> html / css </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single-6">
                    <a>Hulu</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    This is non-functional and nothing but a carbon copy ui
                    design of hulu.
                  </p>
                </div>
                <Link legacyBehavior href="/work-single-6">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single-7">
                    <a>
                      <img
                        decoding="async"
                        src="https://riz82.netlify.app/assets/teastation-7216fa54.png"
                        alt="tea"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> html  css </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single-7">
                    <a>Tea station</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>Tea station which represents a tea website.</p>
                </div>
                <Link legacyBehavior href="/work-single-7">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
        </div>
        {!noViewMore && (
          <div className="load-more-link">
            <Link legacyBehavior href="/works">
              <a
                className="btn scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>View More</span>
              </a>
            </Link>
          </div>
        )}

    </Fragment>
  );
};
export default PortfolioIsotope;
