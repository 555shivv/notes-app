import React,{useContext} from "react";
import noteContext  from "../context/notes/noteContext";
import { ThemeProvider } from "../context/ThemeContext";
const NoteItem = (props) => {
  const context = useContext(noteContext);
  const {deleteNote} = context;
  const { note, updateNote} = props;
  return (
    <ThemeProvider>
    <div className="col md-3 my-3">
      <div className="card">
        <div className="card-body">
        <div className="d-flex align-items-center">
          <h5 className="card-title">{note.title}</h5>
          <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>
          <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
          </div>
          <p className="card-text">{note.description} </p>
        
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
};

export default NoteItem;
