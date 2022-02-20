import { useParams, useHistory } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { useEffect } from 'react'
export default function Article() {
  const { id } = useParams()
  const url = `http://localhost:3001/articles/${id}`
  const { data: article, isPending, error } = useFetch(url)
  const history = useHistory()
  useEffect(() => {
    if (error) {
      // redirect
      // history.goBack()
      setTimeout(() => {
        history.push('/')
      }, 2000)
    }
  }, [error, history])

  return (
    <div className="article">
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>By {article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  )
}
