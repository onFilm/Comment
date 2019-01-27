import React from 'react';
import CommentTable from './CommentTable';

export default class CommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: []
        };

        this.addComment = this.addComment.bind(this);
    }

    addComment(e) {
        if (this.nameNode.value !== "") {
            var newComment = {
                name: this.nameNode.value,
                comment: this.commentNode.value,
                key: Date.now()
            };


            this.setState((prevState) => {
                return {
                    comment: prevState.comment.concat(newComment)
                };
            });
        }
        this.nameNode.value="";
        this.commentNode.value="";
        
        e.preventDefault();
    }
    render() {
        return (
            <div>

            
            <div id='commentForm'>
                <h3>Inside commentForm</h3>
                <form onSubmit={this.addComment}>
                    <input type='text' placeholder='Enter your name' ref={namenode => (this.nameNode = namenode)}></input><br />
                    <textarea placeholder='Enter your comment' ref={commentnode => (this.commentNode = commentnode)}></textarea><br />
                    <button type='submit'>Save</button>
                </form>
            </div>
            <CommentTable commentEntries={this.state.comment}/>
            </div>
        );
    }
}