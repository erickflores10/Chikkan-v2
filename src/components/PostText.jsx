import React, { Component } from "react";
import '../scss/index.css';

class PostText extends Component {
    render() {
        return <article className="article">
            <h1 className="article-title">{this.props.aTitle}</h1>
            <p className="article-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat magna vitae metus suscipit, et rutrum nisl vestibulum. Curabitur non neque dui. Sed nulla massa, venenatis et nisi mattis, ullamcorper sollicitudin felis. Sed viverra aliquam tempus. Praesent posuere volutpat elementum. Nullam sit amet sapien tempor, imperdiet libero in, mollis velit. Sed vestibulum malesuada lectus, nec pretium ante tristique sed. Morbi vehicula feugiat eros, vitae laoreet ligula finibus tempor. Etiam efficitur sem enim. Quisque mattis dictum dictum.
            </p>
            <p className="article-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat magna vitae metus suscipit, et rutrum nisl vestibulum. Curabitur non neque dui. Sed nulla massa, venenatis et nisi mattis, ullamcorper sollicitudin felis. Sed viverra aliquam tempus. Praesent posuere volutpat elementum. Nullam sit amet sapien tempor, imperdiet libero in, mollis velit. Sed vestibulum malesuada lectus, nec pretium ante tristique sed. Morbi vehicula feugiat eros, vitae laoreet ligula finibus tempor. Etiam efficitur sem enim. Quisque mattis dictum dictum.
            </p>
            <p className="article-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat magna vitae metus suscipit, et rutrum nisl vestibulum. Curabitur non neque dui. Sed nulla massa, venenatis et nisi mattis, ullamcorper sollicitudin felis. Sed viverra aliquam tempus. Praesent posuere volutpat elementum. Nullam sit amet sapien tempor, imperdiet libero in, mollis velit. Sed vestibulum malesuada lectus, nec pretium ante tristique sed. Morbi vehicula feugiat eros, vitae laoreet ligula finibus tempor. Etiam efficitur sem enim. Quisque mattis dictum dictum.
            </p>
        </article>
    }
}

export default PostText;