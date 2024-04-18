

export const Note = (props) => {

    const deletedNote=()=>{
        props.deletItem(props.id)
    }

    return (
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <br />
                <p>{props.contet}</p>
                <button className="btn" onClick={deletedNote}>-</button>
            </div>


        </>
    )
}
