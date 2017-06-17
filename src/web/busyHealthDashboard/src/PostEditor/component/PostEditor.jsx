import React, {Component} from 'react';
import '../styles/posteditor.css';

class PostEditor extends Component{
    constructor(props){
        super(props);
        this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);
        this.handleTitleChange= this.handleTitleChange.bind(this);
        this.createPost = this.createPost.bind(this);
        this.state = {
            title:'',
            newPostBody:'',
            category:'',

        };

    }
    handlePostEditorInputChange(e){
        this.setState({
            newPostBody: e.target.value
        })
    }
    handleTitleChange(e){
        this.setState({
            title: e.target.value
        })
    }

    createPost(){
        this.props.addPost(this.state.title,this.state.newPostBody,this.state.category);
        this.setState({
            newPostBody:'',
            title:'',
            category:''
        });

    }
    handleCategorySelection(e,cat){
        this.setState({
            category:cat
        })
    }
    render(){
        var categories = [
            "General Feed",
            "Pharmacy Feed",
            "Nurses & MidWives Feed",
            "Medical & Dental Feed",
            "Alternate Medicine Feed",
            "Allied Health Care Feed"
        ];
        return(
          <div className ="body">
            <div className="panel panel-default post-editor">
                <div className="panel-body">
                    <textarea className = "form-control post-editor-title" placeholder="Enter title of feed Item" value ={this.state.title} onChange={this.handleTitleChange}/>
                    <textarea className ="form-control post-editor-input" value ={this.state.newPostBody} onChange ={this.handlePostEditorInputChange}/>
                    <button className ="btn btn-success post-editor-button" onClick={this.createPost}>Post</button>
                    <div className="dropdown">
                    <button type ="button" className="btn btn-default dropdown-toggle" data-toggle ="dropdown">
                     {this.state.category}
                        <span className="caret"></span>
                    </button>
                    <ul className ="dropdown-menu">
                        {categories.map((aclass, i)=>(
                        <li key ={i}>
                            <a href="#" onClick={(e) =>{
                                this.handleCategorySelection(e,aclass)
                            }
                            } >
                                {aclass}
                            </a>
                        </li>
                    ))}

                    </ul>
                </div>
                </div>
            </div>
          </div>


        )
    }
}
export default PostEditor;
