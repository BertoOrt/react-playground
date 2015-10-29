var students = [
  {name: "Ryan", onTrack: true, id: 1},
  {name: "Ash", onTrack: true, id: 2},
  {name: "Christopher", onTrack: true, id: 3},
  {name: "Ben", onTrack: true, id: 4},
  {name: "Anna", onTrack: true, id: 5},
  {name: "Elijah", onTrack: true, id: 6},
  {name: "Jennifer", onTrack: true, id: 7},
  {name: "Eric", onTrack: true, id: 8},
  {name: "Adam", onTrack: true, id: 9},
  {name: "Samuel", onTrack: true, id: 10},
  {name: "Elana", onTrack: true, id: 11},
  {name: "Josh", onTrack: true, id: 12},
  {name: "Michael", onTrack: true, id: 13},
  {name: "William", onTrack: true, id: 14},
  {name: "David", onTrack: true, id: 15},
  {name: "David", onTrack: true, id: 16},
  {name: "Jonathan", onTrack: true, id: 17},
  {name: "Louis", onTrack: true, id: 18},
  {name: "J.", onTrack: true, id: 19},
  {name: "Brian", onTrack: true, id: 20},
  {name: "Addison", onTrack: true, id: 21},
  {name: "Zac", onTrack: true, id: 22},
  {name: "Isaac", onTrack: true, id: 23},
  {name: "Derik", onTrack: true, id: 24},
  {name: "Justin", onTrack: true, id: 25},
  {name: "Alex", onTrack: true, id: 26},
  {name: "Noah", onTrack: true, id: 27},
]

export const actions = {
  createStudent (student) {
    students.push(student)
  },
  deleteStudent (id) {
    students.filter( (student) => {
      return student.id === id ? true : false;
    })
  },
  editStudent (id, newName) {
    students.forEach( (student, i) => {
      if (student.id === id) students.name = newName;
    })
  },
  getStudents () {
    return students
  },
  toggleOnTrack (id) {
    students.forEach( student => {
      if (student.id === id) student.onTrack = !student.onTrack;
    })
  }
}
