var React = require('react');

module.exports = React.createClass({
    _handleclick :function(){
        alert("haha")
    },
    render : function(){
        return (
            <div>
             <h1>yoyo</h1>
             <p>yoo</p>
             <button onclick={this._handleclick}>click me</button>
            </div>
            );
    }
})