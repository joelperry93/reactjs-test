var ____Classd=React.Component;for(var ____Classd____Key in ____Classd){if(____Classd.hasOwnProperty(____Classd____Key)){Comment[____Classd____Key]=____Classd[____Classd____Key];}}var ____SuperProtoOf____Classd=____Classd===null?null:____Classd.prototype;Comment.prototype=Object.create(____SuperProtoOf____Classd);Comment.prototype.constructor=Comment;Comment.__superConstructor__=____Classd;function Comment(){"use strict";if(____Classd!==null){____Classd.apply(this,arguments);}}
    Object.defineProperty(Comment.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        return (
            React.createElement("h3", null, "Hello, world!")
        );
    }});


var ____Classe=React.Component;for(var ____Classe____Key in ____Classe){if(____Classe.hasOwnProperty(____Classe____Key)){CommentBox[____Classe____Key]=____Classe[____Classe____Key];}}var ____SuperProtoOf____Classe=____Classe===null?null:____Classe.prototype;CommentBox.prototype=Object.create(____SuperProtoOf____Classe);CommentBox.prototype.constructor=CommentBox;CommentBox.__superConstructor__=____Classe;function CommentBox(){"use strict";if(____Classe!==null){____Classe.apply(this,arguments);}}
  Object.defineProperty(CommentBox.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        return (
            React.createElement("div", {className: "commentBox"}, 
                React.createElement(Comment, null)
            )
        );
    }});


React.render(React.createElement(CommentBox, null), document.body);