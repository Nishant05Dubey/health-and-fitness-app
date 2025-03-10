function calculateCalories() {
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let activity = document.getElementById("activity").value;

    if (age === "" || height === "" || weight === "") {
        alert("Please fill out all fields!");
        return;
    }

    age = parseInt(age);
    height = parseFloat(height);
    weight = parseFloat(weight);
    activity = parseFloat(activity);

    let BMR;

    if (gender === "male") {
        BMR = 10 * weight + 6.25 * height - 5 * age + 5;  // Mifflin-St Jeor for men
    } else {
        BMR = 10 * weight + 6.25 * height - 5 * age - 161; // Mifflin-St Jeor for women
    }

    let dailyCalories = BMR * activity;

    document.getElementById("result").innerHTML = `You need approximately <strong>${Math.round(dailyCalories)}</strong> calories per day.`;
}
