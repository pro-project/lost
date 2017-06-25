var React = require('react');

module.exports = React.createClass({
    _handleclick : function(){
        debugger
        alert("haha")
    },
    render : function(){
        return (
            <html>
              <head>
                <title>lost </title>
                <link rel='stylesheet' href='/style.css' />
             </head>
             <body>
                <div>
                 <h1>{this.props.title}</h1>
                 <p>yoo</p>
                 <button onClick={this._handleclick}>click me</button>
                </div>
                <script dangerouslySetHTML={{
                    __html: 'window.PROPS=' + JSON.stringify(this.props)
                }}/>
                <script src='/bundle.js' />
             </body>
            </html> 
            );
    }
})