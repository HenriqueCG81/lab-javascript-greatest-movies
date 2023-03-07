// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map(movie => movie.director);
  return directors;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let bestMovies = moviesArray.filter(eachMovie => {
    return (
      eachMovie.genre.includes('Drama') &&
      eachMovie.director === 'Steven Spielberg'
    );
  });
  return bestMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let scores = moviesArray.reduce((acc, eachElem) => {
    if (eachElem.score === undefined) {
      return acc;
    } else {
      return eachElem.score + acc;
    }
  }, 0);
  let averageScore = scores / moviesArray.length;
  return parseFloat(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let filteredDramaScores = moviesArray.filter(elem => {
    return elem.genre.includes('Drama');
  });
  if (filteredDramaScores.length === 0) {
    return 0;
  }
  let averageDrama = filteredDramaScores.reduce((acc, eachElem) => {
    return acc + eachElem.score;
  }, 0);
  let decimal = parseFloat(
    (averageDrama / filteredDramaScores.length).toFixed(2)
  );
  return decimal;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedArray = moviesArray.slice();

  sortedArray.sort((movie1, movie2) => {
    if (movie1.year !== movie2.year) {
      return movie1.year - movie2.year;
    }

    if (movie1.title < movie2.title) {
      return -1;
    } else if (movie1.title > movie2.title) {
      return 1;
    }

    return 0;
  });

  return sortedArray;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  // create a new array of movie objects sorted alphabetically by title
  const sortedMovies = moviesArray.slice().sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else {
      return 0;
    }
  });
  const movieTitles = sortedMovies.map(movie => movie.title).slice(0, 20);

  return movieTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
