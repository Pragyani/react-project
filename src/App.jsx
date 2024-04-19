import React, { useState } from "react";
import { Header } from "./Header";
import "./App.css"
import Footer from "./Footer"
import CreateNote from "./CreateNote";
import { Note } from "./Note"


const App = () => {

    const [additems, setAddItems] = useState([]);


    const addNote = (note) => {
        setAddItems((preData) => {
            return [...preData, note]
        });
        console.log(note)
    }


    const onDelete = (id) => {
        setAddItems((olddata) =>
            olddata.filter((currdata, indx) => {
                return indx !== id
            })
        )
    }

    return (
        <>
            <div>
                <Header />
                <CreateNote passNote={addNote} />
                {
                    additems.map((data, index) => {
                        return (
                            <Note title={data.title} contet={data.content}
                                key={index} id={index} deletItem={onDelete} />

                        )
                    })

                }


                <Footer />
            </div>
        </>
    )
}

export default App;