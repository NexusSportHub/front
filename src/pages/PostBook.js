import axios from "axios"
import { useMutation } from '@tanstack/react-query';
import { useState } from "react";

const insertBook = async (newBook) => {
    axios.post('http://localhost:8080/api/book', newBook)
}

export default function PostBook() {
    const [title, setTitle] = useState("");
    const [id, setId] = useState("");

    const mutation = useMutation({
        mutationFn: (newBook) => insertBook(newBook),
        })

    const handleChange = (event, set) => {
        set(event.target.value);
        }

    const onclick = (event) => {
        event.preventDefault()
        console.log({title: title, writer: id})
        mutation.mutate({title: title, writer: {authorId: id}})
        alert("Insertado correctamente")
    }
    if (mutation.isLoading) {
        return "Insertando libro..."
    }

    if (mutation.isError) {
    return <div>{mutation.error.message}</div>
    }
    return (
        <form className="flex flex-column align-items-center my-3 gap-1 w-100 h-10vh">
            <span><label htmlFor="title">Title: </label> <input type="text" name="title" id="title" onChange={(e) => handleChange(e, setTitle)} value={title}/></span><br/>
            <span><label htmlFor="authorId">Id del autor: </label> <input type="text" name="authorId" id="authorId" onChange={(e) => handleChange(e, setId)} value={id}/></span><br/>
            <button id="sendBook" className="sticky start-50" onClick={(event) => onclick(event)}>Post</button>
        </form>
        )
}