import './App.css';
import MovieCard from './components/MovieCard';
import {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Trailer from './components/Trailer';


function App() {
  const [newTitle, setNewTitle] = useState('')
  const [newDesc, setNewDesc] = useState('')
  const [newRating, setNewRating] = useState('')
  const [newUrl, setNewUrl] = useState('')
  const [newTrailer, setNewTrailer] = useState(null)


  const [list, setList] = useState([
    {
      id: '1',
      title: 'Uncharted IV',
      description: "If Nate and Sully can decipher the clues and solve one of the world's oldest mysteries, they stand to find $5 billion in treasure and perhaps even Nate's long-lost brother...but only if they can learn to work together.",
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMWFiY2I0MTItZDFmZi00YWFmLTliYzYtM2NmMzQxZjQ2NDBiXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg',
      rating: '5',
      trailerUrl: <iframe width="560" height="315" src="https://www.youtube.com/embed/eHp3MbsCbMg?start=3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  },
  {
      id: '2',
      title: 'Doctor Strange',
      description: "In the new film, Doctor Strange finds himself protecting a young teenager named America Chavez who has the power to open portals through the multiverse, to visit alternate dimensions. The pair of them hop between dimensions to escape the all-powerful villain who wants to steal America's powers for themselves.",
      posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM4hEzB1V0jSftc_Yl-XHk4f6tsveg9X2MgA&usqp=CAU",
      rating: '4',
      trailerUrl: <iframe width="560" height="315" src="https://www.youtube.com/embed/aWzlQ2N6qqg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  },
  ])

  return (
    <div className="App">
      <BrowserRouter>
      
      <div className="head">

      <h1>MOVIE CENTER </h1>
      
      <form className='add-movie-form' onSubmit={e=>{
          e.preventDefault()

          const final ={
            id: list.length+1,
            title: newTitle,
            description: newDesc,
            posterURL: newUrl,
            rating: newRating,
            trailerUrl: newTrailer
          }

          setList(prev=> [...prev, final])
        }}>

            <label>
                Title:-
                <input onChange={(e)=>setNewTitle(e.target.value)} type="text" placeholder='Title....' required/>
            </label>
            <br />
            <label>
                Description:-
                <input onChange={(e)=>setNewDesc(e.target.value)} type="text" placeholder='description....' required/>
            </label>
            <br />
            <label>
                Rating:-
                <input onChange={(e)=>setNewRating(e.target.value)} type="number" max={5} min={1} placeholder='1-5'/>
            </label>
            <br />
            <label>
                URL:-
                <input onChange={(e)=>setNewUrl(e.target.value)} type="text" placeholder='Poster Url...'/>
            </label>
            <label>
                Trailer URL:-
                <input onChange={(e)=>setNewTrailer(e.target.value)} type="text" placeholder='insert iframe <iframe> from YT'/>
            </label>
            <button type='submit'>Add Movie</button>
        </form>
      </div>


      <MovieCard list={list}/> 
    

    {/* Routes */}
      <Routes>
        <Route path='/movies/:id' element={<Trailer mov={list}/>}/>
      </Routes>


      </BrowserRouter>
    </div>
  )
}

export default App;
