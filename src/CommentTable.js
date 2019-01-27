import React from 'react';

 class CommentTable extends React.Component {

    createComment ( comment ) {
        return <div className='theList' key={comment.key}><p>{comment.name}</p><p>{comment.comment}</p></div>
    }


    render() {
        var commentItem =this.props.commentEntries.map(this.createComment);
        return (
            <div id='commentTable'>
               {commentItem}
            </div>
        );
    }
}

export default CommentTable;