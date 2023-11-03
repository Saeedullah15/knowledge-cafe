import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  return (
    <main className='w-9/12 mx-auto'>
      <Header></Header>
      <section className='flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </section>
    </main>
  )
}

export default App
