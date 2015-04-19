class Comment extends React.Component {
    sayHello() {
        console.log('Hello!');
    }

    render() {
        return (
            <h3 onClick={this.sayHello}>Hello, world!</h3> 
        ); 
    }
}

class CommentBox extends React.Component {
  render() {
        return (
            <div className="commentBox">
                <Comment />
            </div>
        );
    }
}

React.render(<CommentBox />, document.body);