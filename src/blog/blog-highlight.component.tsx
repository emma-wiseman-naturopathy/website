import { Blog } from "./blog";
import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
import './blog-highlight.component.scss';

type Props = {
    blog: Blog
}

export const BlogHighlightComponent: React.StatelessComponent<Props> = (props) => {
    const style: CSSProperties = {
        backgroundImage: `url('${props.blog.thumbnail.url}')`
    }

    return (
        <Link className="blog-highlight-component" style={style} to={`/blog/${props.blog.id}`}>
            <span>
                <strong>{props.blog.category}:</strong>
                {props.blog.title}
            </span>
        </Link>
    );
}