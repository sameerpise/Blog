
import React, { useEffect, useState } from 'react'
// import { blogs } from '../../Data/Dummy'
import './style.css'
import { useNavigate } from "react-router-dom";
import Postlistt from './Postlistt';
export default function AnotherList () {
  const [blogs, setBlogs] = useState([])
//   const [alert, setAlert] = useState({ message: "", type: "" }); // Alert state
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      const res = await fetch('https://blog-11-jc09.onrender.com/blogs/all')
      const data = await res.json()
      setBlogs(data)
    } catch {
      alert(' blogs fetched failed')
    }
  }
  if (!blogs) return <p>Loading...</p>
  return (
    <>
         <Postlistt />
      <div
        className='container post-container'
        style={{ position: 'relative', marginTop: '50px' }}
      >
        <section className='featured-posts'>
          <div className='section-title'>
            <h2>
              <span>Popular Posts</span>
            </h2>
          </div>
          <div className='row listfeaturedtag'>
            {blogs.map((postData, index) => (
              <div className='col-md-6' key={index}>
                <div className='card post-card'>
                  <div className='row'>
                    <div className='col-md-5 wrapthumbnail'>
                      <a href='' style={{ cursor: 'pointer' }}>
                        {/* <img
                          className='thumbnail post-image'
                          src={postData.image}
                          alt='Post Thumbnail'
                        /> */}
                        <img
                          src={`https://blog-11-jc09.onrender.com${postData.imageUrl}`}
                          alt='Blog'
                          className='thumbnail post-image'
                          onClick={() => navigate(`/blog/${postData._id}`)}
                          //   onClick={() => navigate(`/blog/${blog._id}`)}
                          style={{ cursor: 'pointer' }}
                        />
                      </a>
                    </div>
                    <div className='col-md-7'>
                      <div className='card-body'>
                        <h4 className='post-title'  onClick={() => navigate(`/blog/${postData._id}`)}>
                          <a href=''>{postData.title}</a>
                          <span className='underline'></span>
                        </h4>
                        <p className='post-text'  onClick={() => navigate(`/blog/${postData._id}`)}>
                          {postData.content}...
                        </p>
                        <div className='post-meta'>
                          <span className='author'>
                            <small>
                              By{' '}
                              <span >
                                {postData.author}
                              </span>{' '}
                              | {new Date(postData.createdAt).toLocaleDateString()}
                            </small>
                          </span>
                          <span className='post-date'>{postData.Date}</span>
                        </div>
                        <ul className='social-icons'>
                          <li>
                            <a href='#'>
                              <i className='fab fa-facebook-f'></i>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='fab fa-instagram'></i>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='fab fa-x-twitter'></i>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='fas fa-link'></i>
                            </a>
                          </li>
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
