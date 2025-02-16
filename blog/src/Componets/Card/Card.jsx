import React from 'react';
import { DummyData } from '../../Data/Dummy';
import { useNavigate } from "react-router-dom";
import '../animatedline/animeted.css';
import '../SecodPostlist/style.css';
import '../Card/Card.css';  // Adding PostList styles
import Call from '../Call/Call';
import Postlistt from '../SecodPostlist/Postlistt';
import ImageCarousel from '../Carasoul/ImageCarousel';
import TrendingTopicsCarousel from '../Categeory/Categeory';
import PostGrid from '../POstGrid/Grid';


export default function Card() {
    const navigate = useNavigate();

    return (
        <>
        <div className='container post-container' style={{ marginTop: "6rem", position: "relative" }}>
            <section className="featured-posts">
                <div className="section-title text-hover-effect">
                    <h2 className='text-center roll-text'><span>Featured Post</span></h2>
                </div>
                <div className="row listfeaturedtag">
                    {
                        DummyData.map((postData) => (
                            <div className="col-sm-6" key={postData.id}>
                                <div className="card m-3 post-card">
                                    <div className="row">
                                        <div className="col-md-5 wrapthumbnail post-image-container">
                                            <a onClick={() => navigate(`/post/${postData.id}`)} style={{ cursor: "pointer" }}>
                                                <img className="thumbnail post-image zoom-effect" src={postData.image} alt="Post" />
                                            </a>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-block">
                                                <h2 className="card-title animated-underline post-title" onClick={() => navigate(`/post/${postData.id}`)} style={{ cursor: "pointer" }}>
                                                    <a >{postData.title}</a>
                                                </h2>
                                                <h4 className="card-text post-text" onClick={() => navigate(`/post/${postData.id}`)} style={{ cursor: "pointer" }}>
                                                    {postData.content}
                                                </h4>
                                                <div className="metafooter">
                                                    <div className="wrapfooter">
                                                        <span className="meta-footer-thumb">
                                                            <img className="author-thumb" src={postData.image} alt={postData.author} />
                                                        </span>
                                                        <span className="author-meta author">
                                                            <span className="post-name author-thumb" onClick={() => navigate(`/post/${postData.id}`)} style={{ cursor: "pointer" }}>
                                                                <a target="_blank" href="#">{postData.author}</a>
                                                            </span>
                                                            <br />
                                                            <span className="post-date">{postData.Date}</span>
                                                        </span>
                                                        <span className="post-read-more">
                                                            <a title="Read Story"><i className="fa fa-link"></i></a>
                                                        </span>
                                                        <div className="clearfix"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
           
        </div>
        <Call />
        <Postlistt />
       <ImageCarousel />
       <TrendingTopicsCarousel />
       <PostGrid />
        </>
    );
}
