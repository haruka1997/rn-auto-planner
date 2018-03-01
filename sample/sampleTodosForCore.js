/**
 * {
 *    date: "YYYYMMDD",
 *    start: "HHMM",
 *    end: "HHMM",
 *    title: "Title of todo",
 *    place: "Where to do",
 *    desc: "Description of todo",
 *    genre: "Genre of todo",
 *    isCompleted: "Is this todo completed",
 *    created: "UNIX time when this todo created (for identification)"
 * }
*/

const sampleTodos = [
  {
    date: "20180221",
    start: "1500",
    end: "1600",
    title: "Shopping",
    place: "Station",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    genre: "private",
    isCompleted: false,
    created: 1111111111
  },
  {
    date: "20180221",
    start: "1800",
    end: "1900",
    title: "Homework",
    place: "School",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    genre: "study",
    isCompleted: false,
    created: 2222222222
  },
  {
    date: "20180222",
    start: "1300",
    end: "1400",
    title: "Shopping",
    place: "Station",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    genre: "private",
    isCompleted: false,
    created: 3333333333
  },
  {
    date: "20180222",
    start: "1500",
    end: "1600",
    title: "Send email",
    place: "company",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    genre: "work",
    isCompleted: false,
    created: 4444444444
  },
  {
    date: "20180222",
    start: "1600",
    end: "1700",
    title: "Sleep",
    place: "Home",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    genre: "private",
    isCompleted: false,
    created: 5555555555
  },
  {
    date: "20180302",
    start: "1400",
    end: "1700",
    title: "Sleep",
    place: "Home",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    genre: "private",
    isCompleted: false,
    created: 5555555555
  },
];

module.exports = sampleTodos;
