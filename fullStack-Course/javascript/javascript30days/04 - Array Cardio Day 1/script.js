




// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
  { first: 'Alan', last: 'Turing', year: 1912, passed: 1954 },
  { first: 'Grace', last: 'Hopper', year: 1906, passed: 1992 },
  { first: 'Rosalind', last: 'Franklin', year: 1920, passed: 1958 },
  { first: 'James', last: 'Clerk Maxwell', year: 1831, passed: 1879 },
  { first: 'Blaise', last: 'Pascal', year: 1623, passed: 1662 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank',
  'Curie, Marie', 'Franklin, Rosalind', 'Turing, Alan', 'Hopper, Grace', 'Maxwell, James'
];

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck',
  'scooter', 'bike', 'car', 'van', 'bike', 'skateboard', 'walk', 'walk', 'car','skateboard'];


// Array.prototype.filter()
//  novoArray = array.filter(function(item, index, array) {
//  return true para manter o elemento, false para remover
// });
// 1. Filter the list of inventors for those who were born in the 1500's

const born1500 = inventors.filter(item => { return item.year > 1499 && item.year < 1600 })
// console.table(born1500)
// document.body.innerText = JSON.stringify(born1500, null, 2)

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const inventorsName = inventors.map(inv => ` ${inv.first} ${inv.last}`)
// document.body.innerText = inventorsName

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const ages = inventors.sort((firstPerson, secondPerson) => firstPerson.year - secondPerson.year);
// or if(firstPerson.year > secondPerson.year) return true 1 else return false -1
// or ((a,b) => a.year > b.year ? 1 : -1)
// document.body.innerText = ages.map(age => ` ${age.first} ${age.year}`)
// console.table(ages)

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const yearLife = inventors.map(inv => {
  return inv.passed - inv.year
}).reduce((a, b) => {
  return a + b
})

console.log(yearLife)

const yearLife2 = inventors.reduce((total, inv) => {
  return total + (inv.passed - inv.year)
}, 0)

console.log(yearLife2)

// 5. Sort the inventors by years lived
const oldest = inventors.sort((a, b) => {
  const lastGuy = a.passed - a.year
  const nextGuy = b.passed = b.year
  return lastGuy > nextGuy ? -1 : 1;
});

// const withAge = inventors.map(inv => {
//  return {
//   ...inv,
//   age: inv.passed - inv.year
//   }
// })

// console.table(oldest)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. sort Exercise
// Sort the people alphabetically by last name
const alpha = people.sort((person1, person2) => {
  const [aLast, aFirst] = person1.split(', ')
  const [bLast, bFirst] = person2.split(', ')
  return aLast > bLast ? 1 : -1
})

// console.table(alpha)

// 8. Reduce Exercise
// Sum up the instances of each of these

const transportations = data.reduce((obj, item) => {
  if(!obj[item]){
    obj[item] = 0
  }
  obj[item]++;
  return obj
},{} )

console.table(transportations)
