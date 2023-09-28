//import react packages
import React, { useRef } from 'react'

//import mantine packages
import { Container } from '@mantine/core'

import Autoplay from 'embla-carousel-autoplay';

//import HomeBlogs css
import './HomeBlogs.css'
import { Carousel } from '@mantine/carousel'

//import images for blogs
import living_linen from '../../../assets/home/grid-category/living_linen.webp'

//import images for icons 
import folder from '../../../assets/home/home-blogs/folder.webp'
import time from '../../../assets/home/home-blogs/time.webp'

const HomeBlogs = ({ header, subheader }) => {

    const autoplay = useRef(Autoplay({ delay: 2000 }));

//function used to slice after certain words in blog description
    function truncateText(text, maxLength) {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    }

    //home blogs array
    const homeBlogsArray = [
        {
            image: living_linen,
            blog_head: 'Living Linen is a heading',
            type: 'lifestyle',
            uploadedtime: '2 weeks ago',
            blog_description: 'The Living Linen Project was set up in 1995 as an oral archive of the knowledge of the Irish linen industry still available within a nucleus of people who were formerly working in the industry in Ulster.'
        },
        {
            image: living_linen,
            blog_head: 'Living Linen is a heading',
            type: 'lifestyle',
            uploadedtime: '2 weeks ago',
            blog_description: 'The Living Linen Project was set up in 1995 as an oral archive of the knowledge of the Irish linen industry still available within a nucleus of people who were formerly working in the industry in Ulster.'
        },
        {
            image: living_linen,
            blog_head: 'Living Linen is a heading',
            type: 'lifestyle',
            uploadedtime: '2 weeks ago',
            blog_description: 'The Living Linen Project was set up in 1995 as an oral archive of the knowledge of the Irish linen industry still available within a nucleus of people who were formerly working in the industry in Ulster.'
        },
        {
            image: living_linen,
            blog_head: 'Living Linen is a heading',
            type: 'lifestyle',
            uploadedtime: '2 weeks ago',
            blog_description: 'The Living Linen Project was set up in 1995 as an oral archive of the knowledge of the Irish linen industry still available within a nucleus of people who were formerly working in the industry in Ulster.'
        },
    ]

    const slidesToShow = 3;
    const calculatedSlideSize = `${100 / slidesToShow}%`;

    return (
        <div>
            <div className="homeblogs-div">
                <Container size={'82rem'} className='homeblogs-div-container'>
                    <div className="homeblogs-div-container-heading">
                        <h1>{header}</h1>
                        <p>{subheader}</p>
                    </div>
                    <div className="homeblogs-div-container-content">
                        <Carousel
                            align="start"
                            controlsOffset="md"
                            loop
                            slideSize={calculatedSlideSize} // Set the calculated slide size
                            slideGap="xs"
                            controlSize={36}
                            className='homeblogs-div-container-content-slider'
                            plugins={[autoplay.current]}
                            onMouseEnter={autoplay.current.stop}
                            onMouseLeave={autoplay.current.reset}
                            dragFree
                        >
                            {
                                homeBlogsArray.map((homeblogs, index) => {

                                    const truncatedDescription = truncateText(
                                        homeblogs.blog_description,
                                        100 // Adjust the maximum length as needed
                                    );
                                    return (
                                        <Carousel.Slide key={index} className='homeblogs-div-container-content-slider-individual'>
                                            <div className="homeblogs-div-container-content-slider-individual-blog">
                                                <div className="homeblogs-div-container-content-slider-individual-blog-image">
                                                    <img src={homeblogs.image} alt="" />
                                                </div>
                                                <div className="homeblogs-div-container-content-slider-individual-blog-content">
                                                    <div className="homeblogs-div-container-content-slider-individual-blog-content-heading">
                                                        <h2>{homeblogs.blog_head}</h2>
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
                                        </Carousel.Slide>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default HomeBlogs