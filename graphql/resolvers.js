import { getMovies, getMovie, getSuggestions } from "./db.js";

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id),
  },
};

export default resolvers;

/*
const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating),
  },
};

export default resolvers;
*/

/* 쿼리문

query {
  movies(rating: 8,limit:40) {
    title
  }}

*/

// import { getMovies, getById, addMovie, deleteMovie } from "./db";

// const resolvers = {
//   Query: {
//     movies: () => getMovies(),
//     movie: (_, { id }) => getById(id),
//   },
//   Mutation: {
//     addMovie: (_, { name, score }) => addMovie(name, score),
//     deleteMovie: (_, { id }) => deleteMovie(id),
//   },
// };
// export default resolvers;
