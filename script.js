const form = document.querySelector(".contact form");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("Thank you for joining FitZone Gym!");

        form.reset();
    });
}


function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (weight === "" || height === "") {
        document.getElementById("bmi-result").innerText =
            "Please enter your weight and height.";
        return;
    }

    height = height / 100;

    let bmi = weight / (height * height);

    document.getElementById("bmi-result").innerText =
        "Your BMI is: " + bmi.toFixed(2);
}
