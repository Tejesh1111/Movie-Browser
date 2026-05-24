function GenreFilter({ setSelectedGenre }) {

  const genres = [
    "Action",
    "Comedy",
    "Horror",
    "Drama",
  ];

  return (

    <div>

      {genres.map((genre) => (

        <button
          key={genre}
          onClick={() => setSelectedGenre(genre)}
        >

          {genre}

        </button>
      ))}

    </div>
  );
}

export default GenreFilter;