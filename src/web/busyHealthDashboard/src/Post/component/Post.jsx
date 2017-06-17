import React from 'react';
import '../styles/post.css';

const Post = (props) =>(
    <div className ="body">
      <div className="panel panel-body post-body">
          <div className ="panel-body">
              <h2>{props.title}</h2>
              {/*should be prop types here*/}
              {
                  props.postBody


              }

          </div>
      </div>
    </div>
);
export default Post;
