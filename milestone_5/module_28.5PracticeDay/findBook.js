/* array with English Js Book,find 'javascript' word include books
in another array as output. camparison shoulbe case insensative. */

const jsBooks = [
  "Learn javascript in hard way",
  "Learn Programming Js",
  "best practice of Javascript",
  "Interactive WebProgramming",
];

const searchKey = "JavaScript";

function BookSearch(books, searchKey) {
  const result = [];
  if (Array.isArray(books) && isNaN(searchKey)) {
    for (const book of books) {
      if (book.toLowerCase().includes(searchKey.toLowerCase())) {
        result.push(book);
      }
    }
  } else {
    return "Pass a valid parameter";
  }
  return result;
}

console.log(BookSearch(jsBooks, "javascript"));
