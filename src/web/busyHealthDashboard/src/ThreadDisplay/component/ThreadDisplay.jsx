/* global ThreadDisplay */

import React from 'react';

import PostEditor from '../../PostEditor/component/PostEditor';

import Post from '../../Post/component/Post';





var postType ="General Feed";

var currentType ="";

var x = 1;

export default class ThreadDisplay extends React.Component {

    constructor(props){

        super(props);



        this.databaseRef = this.props.database .ref().child(postType);

        this.addPost = this.addPost.bind(this);

        this.updateLocalState = this.updateLocalState.bind(this);

        this.state = {

            posts:[],

        }

    }

    componentWillMount(){

      console.log("component mounted!!!");

      console.log(x);

      x =x+1;

        this.databaseRef = this.props.database .ref().child(postType);

        const{updateLocalState} = this;

        this.databaseRef.on('child_added',snapshot => {

            const response = snapshot.val();

            updateLocalState(response)

        });



    }

    //throws undefined error if not bound in constructor

    updateLocalState(response){

        const posts = this.state.posts;

        const title = response.title;

        const parsePosts = response.postBody.split(/[\r\n]/g);



        posts.push(title,parsePosts);

        this.setState({

            posts:posts,

        });

    }



    setPostCategory(category){



    }



    addPost(title,postBody,category){

       const postToSave = {title,postBody,category};

        var cat = category.toString();

        if(cat.length > postType.length){

          postType = cat;

        }

       this.databaseRef =this.props.database.ref().child(postType);

       this.databaseRef.push().set(postToSave);

       console.log("Logging category inside addPost");

       console.log(category);

       console.log(category.toString());



    }

    render() {

        return (



            <div>

                {/*the text area*/}

                <PostEditor addPost={this.addPost}/>



                {/*the item*/}

                {   this.state.posts.map((postBody, idx) => {

                    return (

                        <Post key={idx} postBody={postBody} />

                    )

                })

                }

            </div>

        );

    }

}
