import React from 'react';
import PropTypes from 'prop-types';

class ArticleListItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:this.props.title,
            shorText:this.props.shortText,
            displayDate:this.props.displayDate,
            timeStamp:this.props.timeStamp
        }
    }

    render(){
        return(
            <li>
                <h1>{this.props.title}</h1>
                <time dateTime={this.props.timeStamp}>{this.props.displayDate}</time>
                <p>{this.props.shortText}</p>
            </li>
        );
    }
}

ArticleListItem.propTypes = {
    title: PropTypes.string.isRequired,
    shortText: PropTypes.string.isRequired,
    displayDate: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired
};


export default ArticleListItem;