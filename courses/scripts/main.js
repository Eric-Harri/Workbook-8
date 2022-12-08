// "strict uses";

// const courseTableBody = document.querySelector("#course-table tbody");

// function loadCourseTableBody() {
//   fetch("http://localhost:8888/courses")
//     .then((response) => response.json())
//     .then((courses) => {
//       console.log(courses);
//       courses.forEach((course) => {
//         let row = courseTableBody.insertRow(-1);
//         let cell1 = row.insertCell(0);
//         let cell2 = row.insertCell(1);
//         let cell3 = row.insertCell(2);
//         let cell4 = row.insertCell(3);
//         let cell5 = row.insertCell(4);
//         let cell6 = row.insertCell(5);
//         let cell7 = row.insertCell(6);
//         cell1.innerText = course.courseName;
//         cell2.innerText = course.courseNum;
//         cell3.innerText = course.dept;
//         cell4.innerText = course.instructor;
//         cell5.innerText = course.startDate 
//         cell6.innerText = course.numDays

//         const anchor = document.createElement("a");
//         anchor.href = `./edit-courses.html?courseid=${course.id}`;
//         anchor.innerText = "Edit"
//         const divider = document.createTextNode(" | ")
//         const a = document.createElement("a")
//         a.href = `./delete-course.html?courseid=${course.id}`
//         a.innerText = "Delete"

//         cell7.append(anchor, divider, a)
        
//       });
//     });
// }

// window.onload = () => {
//   const messageDiv = document.getElementById("messageDiv")
//    function displayMessage() {
//      if (sessionStorage.message) {
//        messageDiv.innerText = sessionStorage.message;
//        console.log(sessionStorage.message);
//      }
//    }

//    function removeMessage() {
//      if (sessionStorage.message) {
//        messageDiv.innerText = "";
//        sessionStorage.removeItem("message");
//      }
//    }

//    displayMessage();
//    setTimeout(removeMessage, 3000);

  
  
//   loadCourseTableBody();


  
    
// }

