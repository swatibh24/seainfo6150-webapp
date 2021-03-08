import React, {useEffect, useState} from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import DynamicArticle from "./DynamicArticle/DynamicArticle";
import ArticleList from "./ArticleList/ArticleList";
import { isEmpty } from "lodash";
import WelcomePage from "./DynamicArticle/WelcomePage";

function App() {
  const [fetchedData, setFetchedData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
          "http://demo1390455.mockable.io/articles"
      );
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };
    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? <div>You have no data!</div> : (
        <div className="App">
          <Switch>
            <Route path="/" exact component={WelcomePage}></Route>
            <Route exact path="/articleList">
              <ArticleList articles={Object.values(fetchedData)} />
            </Route>
            <Route exact path='/articleList/:slug' render={routerProps => {
              const slug = routerProps.match.params.slug;
              const [data, setData] = Object.values(fetchedData).filter(item=>item.slug==slug);
              return <DynamicArticle {...routerProps} props={{slug}} article={data}/>;}}/>
          </Switch>
        </div>
    );
};


export default App;
