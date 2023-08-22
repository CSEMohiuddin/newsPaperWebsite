import {Routes, Route} from 'react-router-dom'

import Frontend from './components/layout/frontend/Frontend'
// import Admin from './components/layout/admin/Admin'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Privacy from './pages/privacy/Privacy'
import Contact from './pages/contact/Contact'
import Category from './pages/category/Category'
import AllCategory from './pages/allcategory/AllCategory'
import Topic from './pages/topic/Topic'
import Post from './pages/post/Post'
import Dashboard from './pages/dashboard/Dashboard'
import ScrollToTop from './components/ScrollToTop'

function App() {
 

  return (

    <Frontend>
      <ScrollToTop />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/all-category' element={<AllCategory />} />
            <Route path='/category/:ctg' element={<Category />} />
            <Route path='/topic/:topic' element={<Topic />} />
            <Route path='/post/:slug' element={<Post/>} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    </Frontend>
  )
}

export default App
