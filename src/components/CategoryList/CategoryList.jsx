import React, { Component } from 'react';
import './style.css';

export default class CategoryList extends Component {
    _handleEnterCategory(e){
        if(e.key === "Enter") {
            let categoryValue = e.target.value;
            this.props.addCategory(categoryValue);
        }
    }

    render() { 
        return ( 
            <section className="category-list">
                <ul className="category-list_list">
                    {this.props.categories.map((category, index) => {
                        return (<li key={index} className="category-list_item">{category}</li>);
                    })}
                </ul>
                <input
                type="text"
                className="category-list_input"
                placeholder="Add Category"
                onKeyUp={this._handleEnterCategory.bind(this)}
                />
            </section>
        );
    }
}