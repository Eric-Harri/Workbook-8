(function () {
    const $q = (s) => document.querySelector(s);
    const $qa = (s) => document.querySelectorAll(s);

    const deptInput = $q("#deptInput");
    const courseNumInput = $q("#courseNumInput");
    const courseNameInput = $q("#courseNameInput");
    const instructorInput = $q("#instructorInput");
    const startDateInput = $q("#startDateInput");
    const numDaysInput = $q("#numDaysInput");
    const form = $q("form");
    const messageParagraph = $q("#messageParagraph");

    function addCourse(event) {
      event.preventDefault();

      const bodyData = {
        dept: deptInput.value,
        courseNum: courseNumInput.value,
        courseName: courseNameInput.value,
        instructor: instructorInput.value,
        startDate: startDateInput.value,
        numDays: numDaysInput.value
      };

      fetch("http://localhost:8888/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData)
      }).then((response) => response.json())
        .then((data) => {
          console.log(data);
          messageParagraph.innerText = "Successfully added.";
        })
        .catch((err) => {
          console.log(err);
          messageParagraph.innerText = "Unsuccessful please try again.";
        });
    }

    window.onload = () => {
      form.onsubmit = addCourse;
    };

})()


