import "./blogdetails.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import facebook from "./img/facebook-blog.png";
import instagram from "./img/instagram-blog.png";
import twitter from "./img/twitter-blog.png";

import BlogsPostData from "./blogsdata.json";

const BlogDetail = (params) => {
  const { path } = useParams();

  const [blogsPost, setBlogsPost] = useState(null);

  useEffect(() => {
    // Simulating fetching the blog post from an API
    const fetchBlogsPost = async () => {
      try {
        // Perform the API call or fetch the blog post using the 'id'
        // const response = await fetch(`/api/blog/${id}`);
        // const data = await response.json();
        // setBlogsPost(data);
        
        // Assuming you have a hardcoded array of blog posts

        const foundPost = BlogsPostData.find((post) => post.path === path);
        setBlogsPost(foundPost);
      } catch (error) {
        console.log("Error fetching blog post:", error);
      }
    };

    fetchBlogsPost();
  }, [path]);
  return (
    <>
      {blogsPost && (
        <>
          <section className="blogdetails">
            <div className="pageheader">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12"></div>
                </div>
              </div>
            </div>
            <div className="headercontent">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-11 col-lg-11 col-md-11">
                    <div className="post-left">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                          <img
                            src={blogsPost.image}
                            alt=""
                            className="leftimg"
                          />

                          <div className="date">{blogsPost.date}</div>
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={facebook} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={instagram} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={twitter} alt="" className="social1" />
                          </a>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                          <div className="post-right">
                            <h1 className="heading">{blogsPost.heading}</h1>

                            <div className="date1">{blogsPost.date}</div>

                            <p className="Desc">{blogsPost.Desc}</p>
                          </div>
                        </div>
                      </div>

                      <div className="content">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="blog-details">
                              {blogsPost.SubData.map((subdatalist, index) => (
                                <div className="detail-box" key={index}>
                                  {subdatalist.subtopic && (
                                    <h3>{subdatalist.subtopic}</h3>
                                  )}

                                  <div className="list">
                                    <div className="list1">
                                      {subdatalist.subtitle && (
                                        <h4>{subdatalist.subtitle}</h4>
                                      )}

                                      {subdatalist.subDesc.map(
                                        (list, index) => (
                                          <p key={index}>{parse(list)}</p>
                                        )
                                      )}

                                      {/* {subdatalist.subtopic && (
                                        <h3>{subdatalist.subtopic}</h3>
                                      )} */}
                                      {subdatalist.subjectlist && (
                                        <ul>
                                          {subdatalist.subjectlist.map(
                                            (listdata, index) => (
                                              <li key={index}>
                                                {parse(listdata)}
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      )}

                                      {subdatalist.note && (
                                        <p>{subdatalist.note}</p>
                                      )}
                                    </div>
                                    <div className="list2">
                                      {subdatalist.subjectlist2 && (
                                        <ul>
                                          {subdatalist.subjectlist2.map(
                                            (listdata, index) => (
                                              <li key={index}>{listdata}</li>
                                            )
                                          )}
                                        </ul>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};
export default BlogDetail;
