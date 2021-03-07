import React from "react";
import HTMLText from "../HTMLText/HTMLText";
import styles from "../component-examples/examples.module.css";
import {Link} from "react-router-dom";

const DynamicArticle = (props) => {
    const {slug} = props.match.params;
    return (
        <article>
        <header>
            <nav><ul className={styles.list}><li className={styles.listItem}><Link to={`/articleList`}>Back</Link></li></ul></nav>
      	<h1>{props.article.title}</h1>
      	<address>
      		by {props.article.author}
      		(<a href="{props.article.authorEmail}">{props.article.authorEmail}</a>)
      	</address>
      	<time datetime="{props.article.timeStamp}">{props.article.displayDate}</time>
      </header>
      <HTMLText text={props.article.text} />
    </article>
  );
};

export default DynamicArticle;
