import React,{useState} from 'react'

const GenreFilter = ({genres,onGenreSelect}) => {
  return (
    <div>
        <h1>Filter by Genre</h1>
        {genres.map((genre,index)=>(
            <button key={index} onClick={()=>onGenreSelect(genre)}>
                {genre}
            </button>
        ))}
    </div>
  )
}

export default GenreFilter