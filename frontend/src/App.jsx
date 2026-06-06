import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import MyNotes from './pages/MyNotes'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'

const App = () => {
  return (
    <div
      className="relative min-h-screen w-full"
    >
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/myNotes' element={<MyNotes />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/note/:id' element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App