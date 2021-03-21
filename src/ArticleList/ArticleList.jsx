import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from "../ArticleListItem/ArticleListItem.jsx";

const ArticleList = (props) => {
  return (
    <div>
      <div>
        {props.articles.map((article) => (
          <ArticleListItem article={article} key={article.slug} />
        ))}
      </div>
    </div>
  );
};

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}
export default ArticleList;