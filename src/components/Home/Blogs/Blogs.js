import React from 'react';
import kabir from '../../../images/winson.png';
import ema from '../../../images/ema.png';
import BlogPost from '../BlogPost/BlogPost';

const blogData=[

    {
        title: 'Check at least a doctor in a year for yyour teeth',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae maiores ratione est dolorem enim officia.',
        author: 'Rashed Kabir',
        authorImg: ema,
        date: '25 April 2021',
    },
    {
        title: '2 times of brush in a day can keep you healthy',
        description: 'It is a long established fact that by the readable content of a lot layour. The point.',
        author: 'Dr.Caudi',
        authorImg: kabir,
        date: '25 April 2021',
    },
    {
        title: 'The tooth cancer is taking a challenge',
        description: 'It is a long established fact that by the readable content of a lot layour. The point.',
        author: 'Dr. Ema Whatson',
        authorImg: ema,
        date: '25 April 2021',
    },
]

const Blogs = () => {
    return (
        <section className="container pt-5 mb-5">
            <div className="text-center">
                <h5 style={{ color: "#1CC7C1" }}>OUR BLOG</h5>
                <h1>Form Our Blog Post</h1>
            </div>
            <div className="row mt-5">
                {
                    blogData.map(post => <BlogPost post={post}></BlogPost>)
                }
            </div>
        </section>
    );
};

export default Blogs;