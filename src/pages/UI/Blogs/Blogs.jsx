import React from 'react'
import Breadcrumb from '../../../components/UI/Breadcrumb/Breadcrumb';
import './Blogs.css'
//import images for blogs
import living_linen from '../../../assets/home/grid-category/living_linen.webp'
import { Text } from '@mantine/core';
import { Link } from 'react-router-dom';

//import images for icons 
import folder from '../../../assets/home/home-blogs/folder.webp'
import time from '../../../assets/home/home-blogs/time.webp'

const Blogs = () => {

  // array for breadcrumb
  const items = [
    { title: 'Home', href: '/' },
    { title: 'Blogs', href: '/ui_blogs' },
  ];

  const homeBlogsArray = [
    {
      image: living_linen,
      blog_head: 'Living Linen is a heading',
      blog_link: '/ui_blogs_individual',
      type: 'lifestyle',
      uploadedtime: '2 weeks ago',
      blog_description: 'The Living Linen Project was set up in 1995 as an oral archive of the knowledge of the Irish linen industry still available within a nucleus of people who were formerly working in the industry in Ulster.'
    },
    {
      image: living_linen,
      blog_head: 'Living Linen is a heading',
      blog_link: '/ui_blogs_individual',
      type: 'lifestyle',
      uploadedtime: '2 weeks ago',
      blog_description: 'The Living Linen Project was set up in 1995 as an oral archive of the knowledge of the Irish linen industry still available within a nucleus of people who were formerly working in the industry in Ulster.'
    },
    {
      image: living_linen,
      blog_head: 'Living Linen is a heading',
      blog_link: '/ui_blogs_individual',
      type: 'lifestyle',
      uploadedtime: '2 weeks ago',
      blog_description: 'The Living Linen Project was set up in 1995 as an oral archive of the knowledge of the Irish linen industry still available within a nucleus of people who were formerly working in the industry in Ulster.'
    },
    {
      image: living_linen,
      blog_head: 'Living Linen is a heading',
      blog_link: '/ui_blogs_individual',
      type: 'lifestyle',
      uploadedtime: '2 weeks ago',
      blog_description: 'The Living Linen Project was set up in 1995 as an oral archive of the knowledge of the Irish linen industry still available within a nucleus of people who were formerly working in the industry in Ulster.'
    },
  ]

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  }

  return (
    <div>
      <div className="blogs-div">
        <div className="blogs-div-container">
          <div className="category-div-container-breadcrumb">
            <Breadcrumb value={items} />
          </div>
          <div className="blogs-div-container-heading">
            <h2>Blogs</h2>
          </div>
          <div className="blogs-div-container-content">
            <div className="blogs-div-container-content-main">
              {
                homeBlogsArray.map((homeblogs, index) => {

                  const truncatedDescription = truncateText(
                    homeblogs.blog_description,
                    100
                  );
                  return (
                    <div className="homeblogs-div-container-content-slider-individual-blog">
                      <div className="homeblogs-div-container-content-slider-individual-blog-image">
                        <Text component={Link} to={homeblogs.blog_link}><img src={homeblogs.image} alt="" /></Text>
                      </div>
                      <div className="homeblogs-div-container-content-slider-individual-blog-content">
                        <div className="homeblogs-div-container-content-slider-individual-blog-content-heading">
                          <Text className='blogs-links' component={Link} to={homeblogs.blog_link}><h2>{homeblogs.blog_head}</h2></Text>
                        </div>
                        <div className="homeblogs-div-container-content-slider-individual-blog-content-type-time">
                          <div className="homeblogs-div-container-content-slider-individual-blog-content-type-time-type">
                            <div className="homeblogs-div-container-content-slider-individual-blog-content-type-time-type-icon">
                              <img src={folder} width="12" alt="" />
                            </div>
                            <div className="homeblogs-div-container-content-slider-individual-blog-content-type-time-type-icon-content">
                              <p>{homeblogs.type}</p>
                            </div>
                          </div>
                          <div className="homeblogs-div-container-content-slider-individual-blog-content-type-time-time">
                            <div className="homeblogs-div-container-content-slider-individual-blog-content-type-time-type-icon">
                              <img src={time} width="10" alt="" />
                            </div>
                            <div className="homeblogs-div-container-content-slider-individual-blog-content-type-time-type-icon-content">
                              <p>{homeblogs.uploadedtime}</p>
                            </div>
                          </div>
                        </div>
                        <div className="homeblogs-div-container-content-slider-individual-blog-content-description">
                          <p>{truncatedDescription}</p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs