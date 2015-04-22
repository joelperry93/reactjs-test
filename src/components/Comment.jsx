export class Comment extends React.Component {
    sayHello() {
        console.log('Hello!');
    }

    render() {
        return (
            <h3 onClick={this.sayHello}>Hello, world!</h3> 
        ); 
    }
}