document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ script.js is running!");

    const workoutPlans = [
        { name: "Beginner Full Body", duration: "4 Weeks", description: "Ideal for newcomers, full-body workouts 3x a week." },
        { name: "Muscle Gain", duration: "8 Weeks", description: "Focused on hypertrophy, split training 5x a week." },
        { name: "Fat Loss", duration: "6 Weeks", description: "High-intensity workouts to burn fat quickly." },
        { name: "Strength Training", duration: "12 Weeks", description: "Powerlifting-style workouts to increase strength." }
    ];

    console.log("✅ Workout plans array loaded:", workoutPlans);

    const plansContainer = document.getElementById("workout-plans");

    if (!plansContainer) {
        console.error("❌ Element with ID 'workout-plans' not found in workouts.html.");
        return;
    }

    console.log("✅ Found 'workout-plans' container in workouts.html!");

    workoutPlans.forEach(plan => {
        console.log(`▶️ Adding workout: ${plan.name}`);

        const planDiv = document.createElement("div");
        planDiv.classList.add("plan-card");
        planDiv.innerHTML = `
            <h3>${plan.name}</h3>
            <p><strong>Duration:</strong> ${plan.duration}</p>
            <p>${plan.description}</p>
        `;

        // Redirect to exercises.html when a plan is clicked
        planDiv.addEventListener("click", function () {
            localStorage.setItem("selectedWorkout", JSON.stringify(plan.name));
            window.location.href = "exercises.html";
        });

        plansContainer.appendChild(planDiv);
    });

    console.log("✅ Workout plans added successfully!");
});
