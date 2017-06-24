var React = require('react');

module.exports = React.createClass({
    _handleclick :function(){
        alert("haha")
    },
    render : function(){
        return (
            <html>
              <head>
                <title>LOST </title>
                <link rel='stylesheet' href='/style.css' />
             </head>
             <body>
                <div>
                 <h1>yoyo</h1>
                 <p>yoo</p>
                 <button onclick={this._handleclick}>click me</button>
                </div>
             </body>
            </html> 
            );
    }
})