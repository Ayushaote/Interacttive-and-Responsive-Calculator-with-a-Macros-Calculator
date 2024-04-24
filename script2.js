function calculate() {
    var height = parseFloat(document.getElementById('height').value);
    var age = parseFloat(document.getElementById('age').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var goal = parseFloat(document.getElementById('goal').value);

    
    if (isNaN(height) || isNaN(age) || isNaN(weight) || isNaN(goal)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    var calories = calculateCalories(height, weight, age, goal);
    var dietPlan = calculateDietPlan(goal);
    var duration = calculateDuration(weight, goal);

    var result = "Calories: " + calories.toFixed(2) + " kcal/day<br>";
    result += "Diet Plan: " + dietPlan + "<br>";
    result += "Duration: " + duration + " weeks";

    document.getElementById('result').innerHTML = result;
}

function calculateCalories(height, weight, age, goal) {
   
    var bmr = 10 * weight + 6.25 * height - 5 * age;
    return bmr + (goal * 500);
}

function calculateDietPlan(goal) {
    if (goal > 0) {
        return "High protein, moderate carb, moderate fat";
    } else if (goal < 0) {
        return "Moderate protein, low carb, low fat";
    } else {
        return "Maintain current diet";
    }
}

function calculateDuration(weight, goal) {
    var weightDifference = Math.abs(goal);
    return Math.ceil(weightDifference / 0.5); 
}
