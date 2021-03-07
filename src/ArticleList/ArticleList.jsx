import React from "react";
import PropTypes from 'prop-types';
import ArticleListItem from './ArticleListItem';

let ArticleList = ({ articles }) => (
  <ul>
      { 
        Object.values(articles).map(article => {
          return <ArticleListItem
            key={article.slug}
            title={article.title}
            shortText={article.shortText}
            displayDate={article.displayDate}
            timeStamp={article.timeStamp}
          />
        })
      }
  </ul>
);
ArticleList.propTypes = {
  articles: PropTypes.object.isRequired
}

export default ArticleList;


