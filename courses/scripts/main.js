"strict uses";

const courseTableBody = document.querySelector("#course-table tbody");

function loadCourseTableBody() {
  fetch("http://localhost:8888/courses")
    .then((response) => response.json())
    .then((courses) => {
      console.log(courses);
      courses.forEach((course) => {
        let row = courseTableBody.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        cell1.innerText = course.courseName;
        cell2.innerText = course.courseNum;
        cell3.innerText = course.dept;
        const anchor = document.createElement("a");
        anchor.href = `./edit-courses.html?courseid=${course.id}`;
        anchor.innerText = "Edit"
        cell4.appendChild(anchor)
        
      });
    });
}

window.onload = () => {
    loadCourseTableBody();
    
}

