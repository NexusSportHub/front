import axios from "axios"
import {useQuery, useMutation} from '@tanstack/react-query'

const deleteAuthor = async (id) => {
    axios.delete('http://localhost:8080/api/authors/'+id)
}
const deleteBook = async (id) => {
    axios.delete('http://localhost:8080/api/book/'+id)
}

export default function GetAll() {

    const {isPending, error, data, refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
        axios.get('http://localhost:8080/api/authors').then((res) => {
            return res.data
        })
    })

    const mutationAuthors = useMutation({
        mutationFn: (id) => deleteAuthor(id),
        })

    const mutationBooks = useMutation({
        mutationFn: (id) => deleteBook(id),
        })

    const onClickA = (e) => mutationAuthors.mutate(e.target.textContent)
    const onClickB = (e) => mutationBooks.mutate(e.target.textContent)

    refetch({ refetchOnEvent: 'onClick' })

    if (isPending) return <><p>'Loading...'</p><button onClick={() => refetch()}>Refrescar</button></>
  
    if (error) return <><p>'An error has occurred: ' + {error.message}</p> <button onClick={() => refetch()}>Refrescar</button></>


    return <div id="app" className="flex flex-column align-items-center my-3 gap-1 w-100 h-100vh">
                <div id="cardsContainer" className="flex flex-row justify-content-center my-3 gap-1 w-100 h-100vh">
                {
                    data.map(element => 
                        <div key={element.authorId} className="card w-50">
                            <div  className="card-body">
                                <h3 className="card-title">{element.name}</h3>
                                <h5 className="card-subtitle" onClick={(e) => onClickA(e)}>{element.authorId}</h5>
                                {element.books.map(b => 
                                    <p key={b.bookId} className="card-text">- <span className="ids" onClick={(e) => onClickB(e)}>{b.bookId}</span>, {b.title} <br/></p>
                                )
                                }
                            </div>
                        </div>
                    )
                }
                </div>
            </div>
}