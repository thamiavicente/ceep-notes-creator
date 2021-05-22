import React, { Component } from 'react';
import "./style.css";

export default class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.title="";
        this.text="";
        this.category="None";
    }

    _handleCategoryChange (event) {
        event.stopPropagation();
        this.category = event.target.value;
    }

    _handleTitleChange (event) {
        event.stopPropagation();
        this.title = event.target.value;
    }

    _handleTextChange (event) {
        event.stopPropagation();
        this.text = event.target.value;
    }

    _createNote (event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.createNote(this.title, this.text, this.category);
    }

    render() {
        return (
            <form className="register-form"
            onSubmit={this._createNote.bind(this)}
            >
                <select
                className="register-form_input"
                onChange={this._handleCategoryChange.bind(this)}>
                    <option>{this.category}</option>
                    {this.props.categories.map(category => {
                        return <option>{category}</option>
                    })}
                </select>
                <input
                className="register-form_input"
                type="text"
                placeholder="Title"
                onChange={this._handleTitleChange.bind(this)} />

                <textarea
                className="register-form_input"
                rows={15}
                placeholder="Write here..."
                onChange={this._handleTextChange.bind(this)} />

                <button
                className="register-form_input register-form_submit">Create</button>
            </form>
        );
    }
}