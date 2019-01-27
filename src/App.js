import React from 'react';
import CommentTable from './CommentTable';
import CommentForm from './CommentForm';

export default class App extends React.Component {

    render() {
        return (<div>
           <CommentForm/>
           <CommentTable/>
        </div>
        );
    }
}
