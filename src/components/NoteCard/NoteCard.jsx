import React, { Component } from 'react';
import "./style.css";
import { ReactComponent as DeleteIcon } from '../../assets/img/delete_black_24dp.svg'

export default class NoteCard extends Component {
    delete(){
        const index = this.props.index;
        this.props.deleteNote(index);
    }

    render() { 
        return (
            <section className="note-card">
                <header className="note-card_header">
                    <DeleteIcon onClick={this.delete.bind(this)} />
                    <h4 className="note-card_title">{this.props.title}</h4>
                    <p>{this.props.category}</p>
                </header>
                <p className="note-card_text">{this.props.text}</p>
            </section>
        );
    }
}