const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map((movie, index) => (
        <div className='image-container d-flex justify-content-start m3 k' key={index}>
          <img src={movie.Poster} alt='movie' />
        </div>
      ))}
    </>
  );
};
export default MovieList;
