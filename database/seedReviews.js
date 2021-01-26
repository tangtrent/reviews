/* eslint-disable no-console */
const dbHelpers = require('./index.js');

const badAdjectives = ['horrible just like jquery', 'not good', 'overrated', 'terrible just like css', 'so ugly just like my code'];
const goodAdjectives = ['awesome like react!', 'fascinating like trent', 'great just like my code', 'incredible like trent', 'stunning like mongoose', 'superb like express'];

// const items = ['hoodie', 'shirt', 'product', 'pair of shorts', 'pair of socks', 'pair of pants'];
const comfortLevelGood = ['Comfortable', 'Very Comfortable', 'Extremely Comfortable'];
const comfortLevelBad = ['Uncomfortable', 'Not Very Comfortable'];
const fit = ['Small', 'A Little Small', 'Fits Good', 'A Little Big', 'Big'];
const badQuality = ['Poor', 'Fair'];
const goodQuality = ['Average', 'Good', 'Excellent'];
const users = ['DoubleCheckYouAreNotZoomedInWhileDoingCSS','iLOVEcss', 'scrimba', 'jQueryisgreatSike','HelpDesk', 'CovidSucks', 'HiHrLA41Seniors', 'HelloHRLA42Juniors', 'ilovebobatea', 'TrentIsaGOD', 'HireMeChampion', 'JulianIsFamous?!', 'HireMeNetflix', 'HireMeFacebook', 'HireMeGoogle', 'VenmoMe$5BucksIfYouSeeThis', 'DivDivDivDivDiv', 'MyBrainIsDone', 'iBrokeMyCode', 'CtrlC+CtrlV'];
const emails = ['@yahoo.com', '@gmail.com', '@outlook.com', '@aol.com', '@microsoft.com', '@hackreactor.com'];
// eslint-disable-next-line max-len
const highStars = [3, 4, 5];
const lowStars = [1, 2];
const recommendNo = ['Never', 'Unlikely'];
const recommendYes = ['Maybe', 'Likely', 'Absolutely'];

const randomizer = (arr) => {
  const output = arr[Math.floor(Math.random() * arr.length)];
  return output;
};

const createBadReview = () => {
  const review = {};

  review.productId = Math.floor(Math.random() * 3);
  review.title = randomizer(badAdjectives);
  review.description = 'This product is ' + randomizer(badAdjectives);
  review.stars = randomizer(lowStars);
  review.comfortLevel = randomizer(comfortLevelBad);
  review.fit = randomizer(fit);
  review.quality = randomizer(badQuality);
  review.recommend = randomizer(recommendNo);
  review.createdAt = Math.floor(Math.random() * 400);
  review.user = randomizer(users) + Math.floor(Math.random() * 100).toString();
  review.email = randomizer(users) + randomizer(emails);
  review.yes = 0;
  review.no = 0;
  review.report = 'Report';

  return review;
};

const createGoodReview = () => {
  const review = {};

  review.productId = Math.floor(Math.random() * 3);
  review.title = randomizer(goodAdjectives);
  review.description = 'This product is ' + randomizer(goodAdjectives);
  review.stars = randomizer(highStars);
  review.comfortLevel = randomizer(comfortLevelGood);
  review.fit = randomizer(fit);
  review.quality = randomizer(goodQuality);
  review.recommend = randomizer(recommendYes);
  review.createdAt = Math.floor(Math.random() * 400);
  review.user = randomizer(users) + Math.floor(Math.random() * 100).toString();
  review.email = randomizer(users) + randomizer(emails);
  review.yes = 0;
  review.no = 0;
  review.report = 'Report';

  return review;
};

const generateReviews = () => {
  const reviews = [];
  for (var i = 0; i < 50; i++) {
    reviews.push(createBadReview());
  }
  for (var x = 0; x < 350; x++) {
    reviews.push(createGoodReview());
  }
  return reviews;
};

const sampleData = generateReviews();

// seeds database
dbHelpers.Review.create(sampleData)
  .then(() => {
    console.log('Seeded Database!');
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = {
  randomizer, createBadReview, generateReviews,
};
