import React from 'react'
import { DummyData } from '../../Data/Dummy'
import './style.css'
import { useNavigate } from "react-router-dom";
export default function Postlistt() {
  const navigate = useNavigate();
  return (
    <>
     <div className="container post-container" style={{position:"relative",marginTop:"50px"}}>
      <section className="featured-posts">
        <div className="section-title">
          <h2><span>Popular  Posts</span></h2>
        </div>
        <div className="row listfeaturedtag">
          {DummyData.map((postData, index) => (
            <div className="col-md-6" key={index}>
              <div className="card post-card">
                <div className="row">
                  <div className="col-md-5 wrapthumbnail">
                    <a href=""  style={{ cursor: "pointer" }} onClick={() => navigate(`/post/${postData.id}`)}>
                      <img className="thumbnail post-image" src={postData.image} alt="Post Thumbnail" />
                    </a>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h4 className="post-title">
                        <a href=""  onClick={() => navigate(`/post/${postData.id}`)}>{postData.title}</a>
                        <span className="underline"></span>
                      </h4>
                      <p className="post-text"  onClick={() => navigate(`/post/${postData.id}`)}>{postData.content.slice(0, 100)}...</p>
                      <div className="post-meta">
                        <span className="author">
                          <img className="author-thumb" src={postData.image} alt="Author" />
                          <a href="/author"  onClick={() => navigate(`/post/${postData.id}`)}>{postData.author}</a>
                        </span>
                        <span className="post-date">{postData.Date}</span>
                      </div>
                      <ul className="social-icons">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fab fa-x-twitter"></i></a></li>
                        <li><a href="#"><i className="fas fa-link"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  )
}
