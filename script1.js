document.addEventListener("DOMContentLoaded", function () {
    const progressForm = document.getElementById("progress-form");
    const progressList = document.getElementById("progress-list");

    // Load saved workouts from local storage
    let workouts = JSON.parse(localStorage.getItem("workouts")) || [];

    function renderWorkouts() {
        progressList.innerHTML = "";
        workouts.forEach((workout, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${workout.date}</td>
                <td>${workout.workout}</td>
                <td>${workout.sets}</td>
                <td>${workout.reps}</td>
                <td><button class="delete-btn" data-index="${index}">Delete</button></td>
            `;
            progressList.appendChild(row);
        });

        // Attach event listeners to delete buttons
        document.querySelectorAll(".delete-btn").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                workouts.splice(index, 1);
                localStorage.setItem("workouts", JSON.stringify(workouts));
                renderWorkouts();
            });
        });
    }

    // Add new workout
    progressForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const date = document.getElementById("date").value;
        const workout = document.getElementById("workout").value;
        const sets = document.getElementById("sets").value;
        const reps = document.getElementById("reps").value;

        workouts.push({ date, workout, sets, reps });
        localStorage.setItem("workouts", JSON.stringify(workouts));

        progressForm.reset();
        renderWorkouts();
    });

    // Initial render
    renderWorkouts();
});
