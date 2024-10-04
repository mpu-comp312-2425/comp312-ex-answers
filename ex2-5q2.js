// 2-5 Q2. Write a program to print the content of the timetable.
const timetab = {
  acadYear: "2021/22",
  semester: 1,
  modules: [
    {
      code: 'comp211', title: 'Database design', year: 2,
      lectures: [
        { dow: 2, start: 1130, end: 1300, room: 'A203' },
        { dow: 4, start: 1000, end: 1130, room: 'A318' }
      ]
    },
    {
      code: 'comp212', title: 'Programming II', year: 2,
      lectures: [
        { dow: 4, start: 1430, end: 1600, room: 'A317' },
        { dow: 3, start: 1600, end: 1730, room: 'A210' }
      ]
    },
    {
      code: 'comp214', title: 'Computer networks', year: 2,
      lectures: [
        { dow: 5, start: 1000, end: 1300, room: 'A206' }
      ]
    }
  ]
};

for (let m of timetab.modules) {
  console.log(`${m.code} ${m.title}:`);
  for (let lec of m.lectures) {
    console.log(`  dow:${lec.dow}\ttime:${lec.start}-${lec.end}\troom: ${lec.room}`)
  }
}
