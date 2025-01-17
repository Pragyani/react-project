/** 
 *  Internal Dependecies
*/
import React, { useState } from "react";
import Footer from "./Footer";
import { Header } from "./Header/Header";
import CreateNote from "./CreateNote/CreateNote";
import { Note } from "./CreateNote/Note";
import "./App.css";

const App = () => {
  const [additems, setAddItems] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);  // State for dark mode
  const [isListView, setIsListView] = useState(false); // State for list view toggle

  const addNote = (note) => {
    setAddItems((preData) => {
      return [...preData, note];
    });
  };

  const onDelete = (id) => {
    setAddItems((olddata) =>
      olddata.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };

  // Function to toggle dark mode
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Function to toggle between list and flex view
  const toggleView = () => {
    setIsListView((prevState) => !prevState);
  };

  return (
    <>
      <div className={isDarkMode ? "app dark" : "app light"}>
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} toggleView={toggleView} />
        <CreateNote passNote={addNote} />
        
        <div className={`note-container ${isListView ? 'list-view' : 'flex-view'}`}>
          {additems.map((data, index) => {
            return (
              <Note
                title={data.title}
                contet={data.content}
                key={index}
                id={index}
                deletItem={onDelete}
              />
            );
          })}
        </div>
        
        <Footer />
      </div>
    </>
  );
};
export default App;