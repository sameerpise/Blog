import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLink } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import image1 from "../../assets/1.webp"
import image2 from "../../assets/2.webp"
import image3 from "../../assets/3.webp"
import image4 from '../../assets/4.webp'
import image5 from '../../assets/5.webp'
import image6 from '../../assets/6.webp'
const PostGrid = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Left Column */}
        <div className="col-lg-5">
          <div className="row">
            {/* First Post */}
            <div className="col-12">
              <div className="card mt-3 border-0 shadow-sm">
                <a href="post-details.html">
                  <img
                    src={image5}
                    alt="Lifestyle"
                    className="card-img-top"
                  />
                </a>
                <div className="card-body">
                  <span className="badge bg-primary">LIFESTYLE</span>
                  <h5 className="card-title mt-2">
                    <a href="post-details.html" className="text-dark text-decoration-none">
                      iPadOS 14 new designed specifically for iPad
                    </a>
                  </h5>
                </div>
              </div>
            </div>

            {/* Second Post */}
            <div className="col-12">
              <div className="card mt-3 border-0 shadow-sm">
                <a href="post-details.html">
                  <img
                    src={image1}
                    alt="Travel"
                    className="card-img-top"
                  />
                </a>
                <div className="card-body">
                  <span className="badge bg-success">TRAVEL</span>
                  <h5 className="card-title mt-2">
                    <a href="post-details.html" className="text-dark text-decoration-none">
                      Apple reimagines the iPhone experience with iOS 14
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-lg-7">
          <div className="card mt-3 border-0 shadow-lg">
            <a href="post-details.html">
              <img
                src={image2}
                alt="Design"
                className="card-img-top"
              />
            </a>
            <div className="card-body">
              <span className="badge bg-danger">Youtube</span>
              <h3 className="mt-2">
                <a href="post-details.html" className="text-dark text-decoration-none">
                  Eating right is part of my lifestyle now.
                </a>
              </h3>
              <div className="d-flex align-items-center mt-3">
                <img
                  src={image4}
                  alt="Author"
                  className="rounded-circle me-3"
                  width="50"
                />
                <div>
                  <h6 className="mb-0">Rahabi Khan</h6>
                  <small className="text-muted">Feb 17, 2019 • 300k Views</small>
                </div>

              </div>
            </div>
          </div>
        </div>

            
      </div> 
      <div className="row">
        {/* Left Column */}
        <div className="col-lg-5">
          <div className="row">
            {/* First Post */}
            <div className="col-12">
              <div className="card mt-3 border-0 shadow-sm">
                <a href="post-details.html">
                  <img
                    src={image5}
                    alt="Lifestyle"
                    className="card-img-top"
                  />
                </a>
                <div className="card-body">
                  <span className="badge bg-primary">LIFESTYLE</span>
                  <h5 className="card-title mt-2">
                    <a href="post-details.html" className="text-dark text-decoration-none">
                      iPadOS 14 new designed specifically for iPad
                    </a>
                  </h5>
                </div>
              </div>
            </div>

            {/* Second Post */}
            <div className="col-12">
              <div className="card mt-3 border-0 shadow-sm">
                <a href="post-details.html">
                  <img
                    src={image1}
                    alt="Travel"
                    className="card-img-top"
                  />
                </a>
                <div className="card-body">
                  <span className="badge bg-success">TRAVEL</span>
                  <h5 className="card-title mt-2">
                    <a href="post-details.html" className="text-dark text-decoration-none">
                      Apple reimagines the iPhone experience with iOS 14
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-lg-7">
          <div className="card mt-3 border-0 shadow-lg">
            <a href="post-details.html">
              <img
                src={image2}
                alt="Design"
                className="card-img-top"
              />
            </a>
            <div className="card-body">
              <span className="badge bg-danger">Youtube</span>
              <h3 className="mt-2">
                <a href="post-details.html" className="text-dark text-decoration-none">
                  Eating right is part of my lifestyle now.
                </a>
              </h3>
              <div className="d-flex align-items-center mt-3">
                <img
                  src={image4}
                  alt="Author"
                  className="rounded-circle me-3"
                  width="50"
                />
                <div>
                  <h6 className="mb-0">Rahabi Khan</h6>
                  <small className="text-muted">Feb 17, 2019 • 300k Views</small>
                </div>

              </div>
            </div>
          </div>
        </div>

            
      </div> 
      
    </div>
  );
};

export default PostGrid;
