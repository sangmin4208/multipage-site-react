import { useLocation } from 'react-router-dom'
export default function Contact() {
  const { search } = useLocation()
  const queryParams = new URLSearchParams(search)
  const name = queryParams.get('name')

  return (
    <div>
      <h2>Hey {name}, Contact us here...</h2>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
        explicabo laudantium nemo voluptas cum omnis error voluptate. Nihil
        numquam ipsum necessitatibus hic odit neque consequuntur dolor. Magni
        quos ratione iste.
      </p>
    </div>
  )
}
