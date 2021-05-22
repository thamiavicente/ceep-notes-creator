import { Component } from "react";
import NoteList from "./components/NoteList/NoteList";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import CategoryList from "./components/CategoryList/CategoryList";

import "./assets/App.css";
import './assets/index.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      notes:[],
      categories:[ ]
    }
  }

  createNote(title, text, category){
    const newNote = {title, text, category};
    const arrayNotesCreate = [...this.state.notes,newNote];
    const newState = { notes:arrayNotesCreate }
    this.setState(newState);
  }

  addCategory(categoryName){
    const arrayCategoriesAdd = [...this.state.categories, categoryName]
    const newState = {...this.state, categories:arrayCategoriesAdd};
    this.setState(newState);
  }

  deleteNote(index) {
    let arrayNotesDelete = this.state.notes;
    arrayNotesDelete.splice(index, 1);
    this.setState({ notes:arrayNotesDelete });
  }

  render() {
    return(
      <section className="content">
        <RegisterForm
        categories={this.state.categories}
        createNote={this.createNote.bind(this)} />
        <main className="main-content">
          <CategoryList
          addCategory={this.addCategory.bind(this)}
          categories={this.state.categories} />
          <NoteList 
          deleteNote={this.deleteNote.bind(this)}
          notes={this.state.notes} />
        </main>
      </section>
    )
  }
}
