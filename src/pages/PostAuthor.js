import axios from "axios"
import { useMutation } from '@tanstack/react-query';
import { useState } from "react";
const insertAuthor = async (newAuthor) => {
    axios.post('http://localhost:8080/api/authors', newAuthor)
}

export default function PostAuthor() {
    const [value, setValue] = useState("");

    const mutation = useMutation({
        mutationFn: (newAuthor) => insertAuthor(newAuthor),
        })

    const handleChange = (event) => {
        setValue(event.target.value);
        }

    const onclick = (event) => {
        event.preventDefault()
        mutation.mutate({name: value, books: []})
        alert("Insertado correctamente")
    }
    if (mutation.isLoading) {
        return "Insertando author..."
    }

    if (mutation.isError) {
    return <div>{mutation.error.message}</div>
    }
    return (
        <form className="flex flex-column align-items-center my-3 gap-1 w-100 h-10vh">
            <span><label htmlFor="name">Name: </label> <input type="text" name="name" id="name" onChange={handleChange} value={value}/></span><br/>
            <button id="sendAuthor" type="submit" className="sticky start-50" onClick={(event) => onclick(event)}>Post</button>
        </form>
        )
}