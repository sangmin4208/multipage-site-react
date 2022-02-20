import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'
// styles
import './Home.css'
export default function Home() {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch('http://localhost:3001/articles')
  return (
    <div className="home">
      <h2>Articles</h2>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {articles &&
        articles.map((article) => (
          <div className="card" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.author}</p>
            <Link to={`/articles/${article.id}`}>Read more</Link>
          </div>
        ))}
    </div>
  )
}
