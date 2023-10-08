import React from 'react'
import Breadcrumb from '../../../../components/UI/Breadcrumb/Breadcrumb';
import './BlogsIndividual.css'
import { Text, Textarea } from '@mantine/core';
import { Link } from 'react-router-dom';
//import images for icons 
import folder from '../../../../assets/home/home-blogs/folder.webp'
import time from '../../../../assets/home/home-blogs/time.webp'
import living_linen from '../../../../assets/home/grid-category/living_linen.webp'
import facebook from '../../../../assets/footer/follow-as/facebook.webp'
import instagram from '../../../../assets/footer/follow-as/instagram.webp'
import twitter from '../../../../assets/footer/follow-as/twitter.webp'
import whatsapp from '../../../../assets/footer/follow-as/whatsapp.webp'

const BlogsIndividual = () => {

  // array for breadcrumb
  const items = [
    { title: 'Home', href: '/' },
    { title: 'Blogs', href: '/ui_blogs' },
    { title: 'Living Linen is a heading', href: '/ui_blogs' },
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

  const firstThreeBlogs = homeBlogsArray.slice(0, 3);

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  }


  return (
    <div>
      <div className="blogs-individual-div">
        <div className="blogs-individual-div-container">
          <div className="category-div-container-breadcrumb">
            <Breadcrumb value={items} />
          </div>
          <div className="blogs-individual-div-container-heading">
            <h2>Living Linen is a heading</h2>
            <div className="homeblogs-div-container-content-slider-individual-blog-content-type-time blog-flex-main">
              <div className="homeblogs-div-container-content-slider-individual-blog-content-type-time-type blog-flex">
                <div className="homeblogs-div-container-content-slider-individual-blog-content-type-time-type-icon">
                  <img src={folder} width="12" alt="" />
                </div>
                <div className="homeblogs-div-container-content-slider-individual-blog-content-type-time-type-icon-content">
                  <p>lifestyle</p>
                </div>
              </div>
              <div className="homeblogs-div-container-content-slider-individual-blog-content-type-time-time blog-flex">
                <div className="homeblogs-div-container-content-slider-individual-blog-content-type-time-type-icon">
                  <img src={time} width="10" alt="" />
                </div>
                <div className="homeblogs-div-container-content-slider-individual-blog-content-type-time-type-icon-content">
                  <p>2 weeks ago</p>
                </div>
              </div>
            </div>
          </div>
          <div className="blogs-individual-div-container-content">
            <div className="blogs-individual-div-container-content-blog-display">
              <div className="blogs-individual-div-container-content-blog-display-left">
                <div className="blogs-individaul-div-container-content-blog-display-left-main">
                  <div className="blogs-individual-div-container-content-blog-display-left-image">
                    <img src={living_linen} alt="living linen" />
                  </div>
                  <div className="blogs-individual-div-container-content-blog-display-left-blog-content">
                    <p>In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.</p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    <div className="blog-share-buttons">
                      <p><b>SHARE</b></p>
                      <button><img src={facebook} width={14} alt="" /></button>
                      <button><img src={instagram} width={14} alt="" /></button>
                      <button><img src={twitter} width={14} alt="" /></button>
                      <button><img src={whatsapp} width={14} alt="" /></button>
                    </div>
                  </div>
                </div>
                <div className="blogs-individual-div-container-content-blog-display-right-heading tag-head">
                  <h3>Latest Blogs</h3>
                </div>
                <div className='hr-line mt-10' />
                <div className="blogs-div-container-content-main">
                  {
                    firstThreeBlogs.map((homeblogs, index) => {

                      const truncatedDescription = truncateText(
                        homeblogs.blog_description,
                        100
                      );
                      return (
                        <div key={index} className="homeblogs-div-container-content-slider-individual-blog">
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
                <div className="blogs-comment-section">
                  <div className="blogs-individual-div-container-content-blog-display-right-heading tag-head">
                    <h3>Comments</h3>
                  </div>
                  <div className='hr-line mt-10' />
                  <div className="blogs-comment-section-form">
                    <Textarea
                      placeholder="Comment"
                      radius="xs"
                      size="xs"
                      autosize
                      minRows={4}
                    />
                    <button>Submit</button>
                  </div>
                  <div className="blogs-comment-section-show">
                    <div className="product-div-container-main-product-details-tab-comments-main-show-comment-individual">
                      <div className="product-div-container-main-product-details-tab-comments-main-show-comment-individual-image"></div>
                      <div className="product-div-container-main-product-details-tab-comments-main-show-comment-individual-content">
                        <p className='product-div-container-main-product-details-tab-comments-main-show-comment-individual-content-user'>Admin</p>
                        <p className="product-div-container-main-product-details-tab-comments-main-show-comment-individual-content-comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, inventore corporis neque beatae minima ipsam voluptatum laboriosam, aliquam atque vero mollitia accusantium doloribus at repellendus! Facilis, cum. Minus, sed sit?</p>
                        <p className="product-div-container-main-product-details-tab-comments-main-show-comment-individual-content-time">1 hour Ago</p>
                      </div>
                    </div>
                    <div className="product-div-container-main-product-details-tab-comments-main-show-comment-individual">
                      <div className="product-div-container-main-product-details-tab-comments-main-show-comment-individual-image"></div>
                      <div className="product-div-container-main-product-details-tab-comments-main-show-comment-individual-content">
                        <p className='product-div-container-main-product-details-tab-comments-main-show-comment-individual-content-user'>Admin</p>
                        <p className="product-div-container-main-product-details-tab-comments-main-show-comment-individual-content-comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, inventore corporis neque beatae minima ipsam voluptatum laboriosam, aliquam atque vero mollitia accusantium doloribus at repellendus! Facilis, cum. Minus, sed sit?</p>
                        <p className="product-div-container-main-product-details-tab-comments-main-show-comment-individual-content-time">1 hour Ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blogs-individual-div-container-content-blog-display-right">
                <div className="blogs-individual-div-container-content-blog-display-right-heading">
                  <h3>Latest Blogs</h3>
                </div>
                <div className='hr-line mt-10' />
                <div className="blogs-individual-div-container-content-blog-display-right-content">
                  <div className="blogs-individual-div-container-content-blog-display-right-content-blog">
                    {
                      homeBlogsArray.map((homeblogs, index) => {

                        const truncatedDescription = truncateText(
                          homeblogs.blog_description,
                          50
                        );
                        return (
                          <div key={index} className="homeblogs-div-container-content-slider-individual-blog individual-blog-div">
                            <div className="homeblogs-div-container-content-slider-individual-blog-image individual-blog-image">
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
                  <div className="blogs-individual-div-container-content-blog-display-right-heading tag-head">
                    <h3>Latest Blogs</h3>
                  </div>
                  <div className='hr-line mt-10' />
                  <div className="display-tags-in-blog">
                    <button>blogs</button>
                    <button>blogs fdfd</button>
                    <button>blogs</button>
                    <button>blogssdfas asfdsf fsdf</button>
                    <button>blogs</button>
                    <button>blogs</button>
                    <button>blogs</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogsIndividual