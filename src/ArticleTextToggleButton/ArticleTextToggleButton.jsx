import React,{Component} from "react";
import PropTypes from "prop-types";
import styles from "../ArticleTextToggleButton/ArticleTextToggleButton.module.css";

class ArticleTextToggleButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
          clicked: false,
          shortText: this.props.article.shortText,
          timeStamp: this.props.article.timeStamp,
          displayDate: this.props.article.displayDate
        };
      }
      
      onClick=() => {
          this.setState({clicked: !this.state.clicked});
      }
    

      render() {
        return (
          <section>
            <p>{this.state.clicked?  this.state.shortText: null}</p>
            <time dateTime={this.state.clicked? this.state.timeStamp:null}>
                {this.state.clicked? this.state.displayDate:null}
            </time>
            <div>
            <button className={styles.button} onClick={this.onClick}>
              {this.state.clicked? 'Show Less' : 'Show More'}
            </button>
            </div>
          </section>
        );
      }
    }

    ArticleTextToggleButton.propTypes = {
      article: PropTypes.object.isRequired,
    };

export default ArticleTextToggleButton;