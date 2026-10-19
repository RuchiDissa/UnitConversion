
const inputNumber = document.getElementById("input-number");
const convertBtn = document.getElementById("convert-btn");

const lengthResult = document.getElementById("length-result");
const volumeResult = document.getElementById("volume-result");
const massResult = document.getElementById("mass-result");

// Run when the Convert button is clicked
convertBtn.addEventListener("click", function () {

    // Get the number entered by the user
    const value = Number(inputNumber.value);

    // Check for empty or invalid input
    if (inputNumber.value.trim() === "" || !Number.isFinite(value)) {
        lengthResult.textContent = "Please enter a valid number.";
        volumeResult.textContent = "";
        massResult.textContent = "";
        return;
    }

    // LENGTH CONVERSION
    const metersToFeet = (value * 3.28084).toFixed(3);
    const feetToMeters = (value / 3.28084).toFixed(3);

    lengthResult.textContent =
        `${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters`;

    // VOLUME CONVERSION
    const litersToGallons = (value * 0.264172).toFixed(3);
    const gallonsToLiters = (value / 0.264172).toFixed(3);

    volumeResult.textContent =
        `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`;

    // MASS CONVERSION
    const kgToPounds = (value * 2.20462).toFixed(3);
    const poundsToKg = (value / 2.20462).toFixed(3);

    massResult.textContent =
        `${value} kilos = ${kgToPounds} pounds | ${value} pounds = ${poundsToKg} kilos`;

});
