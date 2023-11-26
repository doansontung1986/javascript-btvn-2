const grades = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
];

// 1. Viết function tính thứ hạng trung bình của cả lớp
{
  console.log("1. Viết function tính thứ hạng trung bình của cả lớp");

  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i].grade;
  }

  let average = sum / grades.length;
  console.log(average);
}

// 2. Viết function tính thứ hạng trung bình của nam trong lớp
{
  console.log("2. Viết function tính thứ hạng trung bình của nam trong lớp");

  let sum = 0;
  let count = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].sex == "M") {
      sum += grades[i].grade;
      count++;
    }
  }

  let average = sum / count;
  console.log(average);
}

// 3. Viết function tính thứ hạng trung bình của Nữ trong lớp
{
  console.log("3. Viết function tính thứ hạng trung bình của Nữ trong lớp");

  let sum = 0;
  let count = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].sex == "F") {
      sum += grades[i].grade;
      count++;
    }
  }

  let average = sum / count;
  console.log(average);
}

// 4. Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
{
  console.log(
    "4. Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp"
  );

  let gradeArr = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].sex == "M") {
      gradeArr.push(grades[i].grade);
    }
  }
  console.log(gradeArr);
  console.log(Math.max(...gradeArr));
}

// 5. Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
{
  console.log(
    "5. Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp"
  );

  let gradeArr = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].sex == "F") {
      gradeArr.push(grades[i].grade);
    }
  }
  console.log(gradeArr);
  console.log(Math.max(...gradeArr));
}
// 6. Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp
{
  console.log(
    "6. Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp"
  );

  let gradeArr = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].sex == "M") {
      gradeArr.push(grades[i].grade);
    }
  }
  console.log(gradeArr);
  console.log(Math.min(...gradeArr));
}
// 7. Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp
{
  console.log(
    "7. Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp"
  );

  let gradeArr = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].sex == "F") {
      gradeArr.push(grades[i].grade);
    }
  }
  console.log(gradeArr);
  console.log(Math.min(...gradeArr));
}
// 8. Viết function thứ hạng cao nhất của cả lớp
{
  console.log("8. Viết function thứ hạng cao nhất của cả lớp");

  let gradeArr = [];
  for (let i = 0; i < grades.length; i++) {
    gradeArr.push(grades[i].grade);
  }
  console.log(gradeArr);
  console.log(Math.max(...gradeArr));
}
// 9. Viết function thứ hạng thấp nhất của cả lớp
{
  console.log("9. Viết function thứ hạng thấp nhất của cả lớp");

  let gradeArr = [];
  for (let i = 0; i < grades.length; i++) {
    gradeArr.push(grades[i].grade);
  }
  console.log(gradeArr);
  console.log(Math.min(...gradeArr));
}
// 10. Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
{
  console.log(
    "10. Viết function lấy ra danh sách tất cả học viên Nữ trong lớp"
  );

  let femaleArr = grades.filter(student => student.sex == "F");

  femaleArr.forEach(student =>
    console.log(`${student.name} - ${student.grade} - ${student.sex}`)
  );
}
// 11. Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
{
  console.log(
    "11. Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái"
  );

  let sortedAscArr = [...grades].sort((studentA, studentB) => {
    if (studentA.name.toLowerCase() > studentB.name.toLowerCase()) {
      return 1;
    } else if (studentA.name.toLowerCase() < studentB.name.toLowerCase()) {
      return -1;
    }
    return 0;
  });

  sortedAscArr.forEach(student =>
    console.log(`${student.name} - ${student.grade} - ${student.sex}`)
  );
}
// 12. Viết function sắp xếp thứ hạng học viên theo chiều giảm dần
{
  console.log(
    "12. Viết function sắp xếp thứ hạng học viên theo chiều giảm dần"
  );

  let sortedAscArr = [...grades].sort(
    (studentA, studentB) => studentB.grade - studentA.grade
  );

  sortedAscArr.forEach(student =>
    console.log(`${student.name} - ${student.grade} - ${student.sex}`)
  );
}
// 13. Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”
{
  console.log('13. Viết function lấy ra học viên Nữ có tên bắt đầu bằng "J"');
  let femaleNameStartWithJ = [...grades]
    .filter(student => student.name.startsWith("J") && student.sex == "F")
    .forEach(student =>
      console.log(`${student.name} - ${student.grade} - ${student.sex}`)
    );
}
// 14. Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp
{
  console.log(
    "14. Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp"
  );

  let topStudents = [...grades]
    .sort((studentA, studentB) => studentB.grade - studentA.grade)
    .splice(0, 5);

  topStudents.forEach(student =>
    console.log(`${student.name} - ${student.grade} - ${student.sex}`)
  );
}
