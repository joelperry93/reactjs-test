var ____Classb=React.Component;for(var ____Classb____Key in ____Classb){if(____Classb.hasOwnProperty(____Classb____Key)){Comment[____Classb____Key]=____Classb[____Classb____Key];}}var ____SuperProtoOf____Classb=____Classb===null?null:____Classb.prototype;Comment.prototype=Object.create(____SuperProtoOf____Classb);Comment.prototype.constructor=Comment;Comment.__superConstructor__=____Classb;function Comment(){"use strict";if(____Classb!==null){____Classb.apply(this,arguments);}}
    Object.defineProperty(Comment.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        return (
            React.createElement("h3", null, "Hello, world!")
        );
    }});


var ____Classc=React.Component;for(var ____Classc____Key in ____Classc){if(____Classc.hasOwnProperty(____Classc____Key)){CommentBox[____Classc____Key]=____Classc[____Classc____Key];}}var ____SuperProtoOf____Classc=____Classc===null?null:____Classc.prototype;CommentBox.prototype=Object.create(____SuperProtoOf____Classc);CommentBox.prototype.constructor=CommentBox;CommentBox.__superConstructor__=____Classc;function CommentBox(){"use strict";if(____Classc!==null){____Classc.apply(this,arguments);}}
  Object.defineProperty(CommentBox.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        return (
            React.createElement("div", {className: "commentBox"}, 
                React.createElement(Comment, null)
            )
        );
    }});


React.render(React.createElement(CommentBox, null), document.getElementById('content'));