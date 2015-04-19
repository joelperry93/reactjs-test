class Comment extends React.Component {
    render() {
        return (
            <h3>Hello, world!</h3>
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