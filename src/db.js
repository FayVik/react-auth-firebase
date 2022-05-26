const course = [
  {
    id: 1,
    name: "chemistry",
    details: {
      intro: "Chemistry is a physical science, and it is the study of the properties of and interactions between matter and energy. In other words, chemistry is a way to study the properties, characteristics, and physical and chemical changes of matter.",
      branches: [
        "Biochemistry",
        "Analytical chemistry",
        "Physical Chemistry"
      ]
    }
  },
  {
    id: 2,
    name: "Physics",
    details: {
      intro: "Physics is a science. Science works according to the scientific method. The scientific method accepts only reason, logic, and experimental evidence to tell between what is scientifically correct and what is not. Scientists do not simply believe – they test, and keep testing until satisfied. Just because some “big scientist” says something is right, that thing does not become a fact of science.",
      branches: [
        "Classical Physics.",
        "Modern Physics.",
        "Nuclear Physics.",
        "Atomic Physics.",
        "Geophysics.",
        "Biophysics.",
        "Mechanics.",
        "Acoustics.",
      ]
    }
  },
  {
    id: 3,
    name: "Mathematics",
    details: {
      intro: "Mathematics is  not  only  concerned with everyday problems, but  also  with  using  imagination,  intuition  and  reasoning  to find new ideas  and  to  solve puzzling problems.",
       branches: [
        "Algebra.",
        "Geometry.",
        "Trigonometry.",
        "Calculus.",
        "Statistics and Probability.",
      ]
    }
  },
  {
    id: 4,
    name: "Biology",
    details: {
      intro: "The word biology means, the science of life, from the Greek bios, life, and logos, word or knowledge. Therefore, Biology is the science of Living Things. That is why Biology is sometimes known as Life Science.",
      branches: [
        "Anatomy.",
        "Botany.",
        "Taxonomy.",
        "Zoology.",
        "Microbiology.",
        "Mycology.",
        "Phycology.",
        "Parasitology."
      ]
    }
  },
  {
    id: 5,
    name: "English Language",
    details: {
      intro: "English studies (usually called simply English) is an academic discipline taught in primary, secondary, and post-secondary education in English-speaking countries; it is not to be confused with English taught as a foreign language, which is a distinct discipline. It involves the study and exploration of texts created in English literature.",
      branches: [
        "English linguistics.",
        "English sociolinguistics.",
        "Discourse analysis in English.",
        "English Stylistics (linguistics)",
        "World Englishes.",
        "History of the English language.",
        "Composition studies.",
        "Rhetoric.",
      ]
    }
  }
]
export default course;


// import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Die Hard",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Get Out",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 8,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Trip to Italy",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Airplane",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Wedding Crashers",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Gone Girl",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 7,
    dailyRentalRate: 4.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "The Sixth Sense",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Avengers",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  }
];

export function getMovies() {
  return movies;
}

// export function getMovie(id) {
//   return movies.find(m => m._id === id);
// }

// export function saveMovie(movie) {
//   let movieInDb = movies.find(m => m._id === movie._id) || {};
//   movieInDb.name = movie.name;
//   movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
//   movieInDb.numberInStock = movie.numberInStock;
//   movieInDb.dailyRentalRate = movie.dailyRentalRate;

//   if (!movieInDb._id) {
//     movieInDb._id = Date.now();
//     movies.push(movieInDb);
//   }

//   return movieInDb;
// }

// export function deleteMovie(id) {
//   let movieInDb = movies.find(m => m._id === id);
//   movies.splice(movies.indexOf(movieInDb), 1);
//   return movieInDb;
// }


// export const genres = [
//   { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
//   { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
//   { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" }
// ];

// export function getGenres() {
//   return genres.filter(g => g);
// }


// const cNameList = course.map(c => ({ id: c.id, name: c.name }))

// const courseDetail = course.find(c=> c.id === 1)