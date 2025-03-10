document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ script.js is running!");

    const exercises = {
        "Beginner Full Body": [
            "Push-ups - 3 sets of 10 reps",
            "Squats - 3 sets of 12 reps",
            "Lunges - 3 sets of 10 reps per leg",
            "Dumbbell Rows - 3 sets of 10 reps"
        ],
        "Muscle Gain": [
            "Bench Press - 4 sets of 8 reps",
            "Deadlifts - 4 sets of 6 reps",
            "Pull-ups - 3 sets of 10 reps",
            "Shoulder Press - 3 sets of 8 reps"
        ],
        "Fat Loss": [
            "Jump Rope - 3 sets of 1 minute",
            "Burpees - 3 sets of 15 reps",
            "Mountain Climbers - 3 sets of 30 seconds",
            "Kettlebell Swings - 3 sets of 12 reps"
        ],
        "Strength Training": [
            "Squats - 5 sets of 5 reps",
            "Deadlifts - 5 sets of 3 reps",
            "Overhead Press - 4 sets of 6 reps",
            "Barbell Rows - 4 sets of 8 reps"
        ]
    };

    const workoutTitle = document.getElementById("workout-title");
    const exerciseList = document.getElementById("exercise-list");

    // Get selected workout from localStorage
    const selectedWorkout = JSON.parse(localStorage.getItem("selectedWorkout"));

    if (!selectedWorkout) {
        workoutTitle.textContent = "No workout selected!";
        return;
    }

    workoutTitle.textContent = `Exercises for ${selectedWorkout}`;

    if (exercises[selectedWorkout]) {
        exercises[selectedWorkout].forEach(exercise => {
            const exerciseItem = document.createElement("p");
            exerciseItem.textContent = exercise;
            exerciseList.appendChild(exerciseItem);
        });
    } else {
        exerciseList.innerHTML = "<p>No exercises found for this plan.</p>";
    }
});
