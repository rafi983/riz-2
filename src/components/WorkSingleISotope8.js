import Isotope from "isotope-layout";
import { Fragment, useEffect, useRef } from "react";
const WorkSingleISotope8 = () => {
  const isotope = useRef();
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".m-gallery", {
        itemSelector: ".col-xs-12",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".col-xs-12",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
  }, []);
  return (
    <Fragment>
      <div className="m-gallery">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="works-item">
              <div
                className="image scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="img">
                  <a
                    href="assets/images/3dcube.png"
                    className="has-popup-image"
                  >
                    <img
                      decoding="async"
                      src="assets/images/3dcube.png"
                      alt="Item 1"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="works-item">
              <div
                className="image scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="img">
                  <a href="assets/images/cube2.png" className="has-popup-image">
                    <img
                      decoding="async"
                      src="assets/images/cube2.png"
                      alt="Item 1"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="works-item">
              <div
                className="image scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="img">
                  <a href="assets/images/cube3.png" className="has-popup-image">
                    <img
                      decoding="async"
                      src="assets/images/cube3.png"
                      alt="Item 2"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="works-item">
              <div
                className="image scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="img">
                  <a href="assets/images/cube4.png" className="has-popup-image">
                    <img
                      decoding="async"
                      src="assets/images/cube4.png"
                      alt="Item 3"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default WorkSingleISotope8;
