import React from "react";
import PropTypes from "prop-types";
import styles from "../ArticleListItem/ArticleListItem.module.css";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton.jsx";

const ArticleListItem = (props) => {
  return (
    <div className={styles.list_item}>
      <article className={styles.article_text}>
        <h2>{props.article.title}</h2>
        <ArticleTextToggleButton article={props.article} />
      </article>
    </div>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired,
};
export default ArticleListItem;
