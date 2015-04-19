var ____Class2=React.Component;for(var ____Class2____Key in ____Class2){if(____Class2.hasOwnProperty(____Class2____Key)){Comment[____Class2____Key]=____Class2[____Class2____Key];}}var ____SuperProtoOf____Class2=____Class2===null?null:____Class2.prototype;Comment.prototype=Object.create(____SuperProtoOf____Class2);Comment.prototype.constructor=Comment;Comment.__superConstructor__=____Class2;function Comment(){"use strict";if(____Class2!==null){____Class2.apply(this,arguments);}}
    Object.defineProperty(Comment.prototype,"sayHello",{writable:true,configurable:true,value:function() {"use strict";
        console.log('Hello!');
    }});

    Object.defineProperty(Comment.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        return (
            React.createElement("h3", {onClick: this.sayHello}, "Hello, world!") 
        ); 
    }});


var ____Class3=React.Component;for(var ____Class3____Key in ____Class3){if(____Class3.hasOwnProperty(____Class3____Key)){CommentBox[____Class3____Key]=____Class3[____Class3____Key];}}var ____SuperProtoOf____Class3=____Class3===null?null:____Class3.prototype;CommentBox.prototype=Object.create(____SuperProtoOf____Class3);CommentBox.prototype.constructor=CommentBox;CommentBox.__superConstructor__=____Class3;function CommentBox(){"use strict";if(____Class3!==null){____Class3.apply(this,arguments);}}
  Object.defineProperty(CommentBox.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        return (
            React.createElement("div", {className: "commentBox"}, 
                React.createElement(Comment, null)
            )
        );
    }});


React.render(React.createElement(CommentBox, null), document.body);