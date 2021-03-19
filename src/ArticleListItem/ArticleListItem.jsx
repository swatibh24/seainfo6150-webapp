import React from "react";
import PropTypes from "prop-types";
import styles from "../ArticleListItem/ArticleListItem.module.css";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton.jsx";
import {Link} from "react-router-dom";

const ArticleListItem = (props) => {
  return (
    <div className={styles.list_item}>
      <article className={styles.article_text}>
        <Link className={styles.link} to= {`/articlelist/${props.article.slug}`}>{props.article.title}</Link>
        <ArticleTextToggleButton article={props.article} />
      </article>
    </div>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired,
};
export default ArticleListItem;
