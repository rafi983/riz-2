import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const PortfolioIsotopeList = ({ noViewMore }) => {

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
                        alt="Zorro"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> React Js</span>
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
                        alt="Gooir"
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
                        alt="Mozar"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> html / css</span>
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
                        alt="Stay Fit"
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
                        alt="Kana"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> html / css </span>
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

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single-8">
                    <a>
                      <img
                        decoding="async"
                        src="./assets/images/3dcube.png"
                        alt="Kana"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> js </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single-8">
                    <a>3d cube</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>It's a 3d cube photo project.</p>
                </div>
                <Link legacyBehavior href="/work-single-8">
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
                  <Link legacyBehavior href="/work-single-9">
                    <a>
                      <img
                        decoding="async"
                        src="./assets/images/photox.png"
                        alt="Kana"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> html / css / js </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single-9">
                    <a>PhotoX</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>PhotoX is where photoLovers and photoTakers live.</p>
                </div>
                <Link legacyBehavior href="/work-single-9">
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
                  <Link legacyBehavior href="/work-single-10">
                    <a>
                      <img
                        decoding="async"
                        src="./assets/images/tracalorie.png"
                        alt="Kana"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> css / js </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single-10">
                    <a>Tracalorie</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    Here user can count their calorie loss, gain and many more,
                  </p>
                </div>
                <Link legacyBehavior href="/work-single-10">
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
                  <Link legacyBehavior href="/work-single-11">
                    <a>
                      <img
                        decoding="async"
                        src="./assets/images/swipepay.png"
                        alt="Kana"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> html / css </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single-11">
                    <a>Swipe Pay</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    This is a payment website and it's a bit clone of real
                    payment system.
                  </p>
                </div>
                <Link legacyBehavior href="/work-single-11">
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
                  <Link legacyBehavior href="/work-single-12">
                    <a>
                      <img
                        decoding="async"
                        src="./assets/images/leno.png"
                        alt="Kana"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> html / css </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single-12">
                    <a>Leno</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    Lino provides productivity to the developers and creators.
                  </p>
                </div>
                <Link legacyBehavior href="/work-single-12">
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
                  <Link legacyBehavior href="/work-single-13">
                    <a>
                      <img
                        decoding="async"
                        src="./assets/images/pizza.png"
                        alt="Kana"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> react js / redux </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single-13">
                    <a>Pizza</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    Here user can search pizza, order and place. Also they can
                    see their order after login.
                  </p>
                </div>
                <Link legacyBehavior href="/work-single-13">
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
                  <Link legacyBehavior href="/work-single-14">
                    <a>
                      <img
                        decoding="async"
                        src="./assets/images/applemac.png"
                        alt="Kana"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> js </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single-14">
                    <a>AppleMac</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>AppleMac is the website of mac products.</p>
                </div>
                <Link legacyBehavior href="/work-single-14">
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
                  <Link legacyBehavior href="/work-single-15">
                    <a>
                      <img
                        decoding="async"
                        src="./assets/images/gitusers.png"
                        alt="Kana"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> react js </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single-15">
                    <a>Git users</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    User has to login with their email to see the details of
                    every github user's details.
                  </p>
                </div>
                <Link legacyBehavior href="/work-single-15">
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
                  <Link legacyBehavior href="/work-single-16">
                    <a>
                      <img
                        decoding="async"
                        src="./assets/images/backroads.png"
                        alt="Kana"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> html / css </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single-16">
                    <a>Backroads</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>This is a website of adventourous thing, touring.</p>
                </div>
                <Link legacyBehavior href="/work-single-16">
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
    </Fragment>
  );
};
export default PortfolioIsotopeList;
