import React from "react";

const BlogPost = ({ post }) => {
  return (
    <div className="col-md-4">
      <div style={{height:'300px'}} className="card m-1 py-4 px-5">
        <div>
          <div className="d-flex align-items-center">
            <div>
              <img className="w-75" src={post.authorImg} alt="" />
            </div>

            <div>
              <h6>{post.author}</h6>
              <small>{post.date}</small>
            </div>
          </div>
          <div className="mt-4">
            <h5 className="card-title mb-4">{post.title}</h5>
            <p>{post.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
