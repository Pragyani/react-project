import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import "./App.css";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import { Note } from "./Note";

const App = () => {
    const [addItems, setAddItems] = useState([]);
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const addNote = (note) => {
        setAddItems((preData) => {
            return [...preData, note];
        });
    };

    const onDelete = (id) => {
        setAddItems((oldData) => oldData.filter((currData, indx) => {
            return indx !== id;
        })
        );
    };

    return (
        <div className={`app ${theme}`}>
            <Header toggleTheme={toggleTheme} isDarkMode={theme === "dark"} />
            <CreateNote passNote={addNote} />
            {addItems.map((data, index) => {
                return (
                    <Note
                        title={data.title} contet={data.content}
                        key={index} id={index} deletItem={onDelete} />);
            })}
            <Footer />
        </div>
    );
};
export default App;