import React from "react";
import { Link } from "react-router-dom";
import "./css/featuredStories.scss";

export default function FeaturedStories() {
  return (
    <>
      <div className="container feature-cont">
        <div className="col-md-3 block1">
          <h4>Featured Stories</h4>
          <hr></hr>
        </div>

        <div className="block2">
          <div className="feat-img-block">
            <div>
              <div className="feat-img"></div>
              <p> May 3, 2019 * 3 min read</p>
              <Link to="">
                Six of my Online Stores Failed <br></br>
                <small> Read More{">>"}</small>
              </Link>
            </div>
            {/* <div>
              <div className="feat-img"></div>
              <p> May 3, 2019 * 3 min read</p>
              <Link to="">
                Six of my Online Stores Failed <br></br>
                <small> Read More{">>"}</small>
              </Link>
            </div>
            <div>
              <div className="feat-img"></div>
              <p> May 3, 2019 * 3 min read</p>
              <Link to="">
                Six of my Online Stores Failed <br></br>
                <small> Read More{">>"}</small>
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      {/* <div className="container latest-cont">
        <div className="col-md-3 block1">
          <h4>Latest Stories</h4>
          <hr></hr>
        </div>

        <div className="block2">
          <div className="latest-img-block">
            <div>
              <div className="latest-img"></div>
              <p> May 3, 2019 * 3 min read</p>
              <Link to="">
                Six of my Online Stores Failed <br></br>
                <small> Read More{">>"}</small>
              </Link>
            </div>
            <div className="middle-img">
              <div className="latest-img-middle"></div>
              <p> May 3, 2019 * 3 min read</p>
              <Link to="">
                Six of my Online Stores Failed <br></br>
                <small> Read More{">>"}</small>
              </Link>
            </div>
            <div>
              <div className="latest-img"></div>
              <p> May 3, 2019 * 3 min read</p>
              <Link to="">
                Six of my Online Stores Failed <br></br>
                <small> Read More{">>"}</small>
              </Link>
            </div>
          </div>
        </div>

        <div className="block3">
          <div className="latest-img-block3">
            <div>
              <div className="latest-img3"></div>
              <p> May 3, 2019 * 3 min read</p>
              <Link to="">
                Six of my Online Stores Failed <br></br>
                <small> Read More{">>"}</small>
              </Link>
            </div>
            <div className="middle-img3">
              <div className="latest-img-middle3"></div>
              <p> May 3, 2019 * 3 min read</p>
              <Link to="">
                Six of my Online Stores Failed <br></br>
                <small> Read More{">>"}</small>
              </Link>
            </div>
            <div>
              <div className="latest-img3"></div>
              <p> May 3, 2019 * 3 min read</p>
              <Link to="">
                Six of my Online Stores Failed <br></br>
                <small> Read More{">>"}</small>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
