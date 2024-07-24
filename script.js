function calculateAge() {
    // Retrieve the values entered in the input fields for day, month, and year
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    // Check if any of the input fields are empty
    if (!day || !month || !year) {
        // Alert the user to enter their complete birthdate if any field is missing
        alert('Please enter your complete birthdate.');
        return; // Exit the function if inputs are incomplete
    }

    // Create a Date object for the birthdate using the input values
    const birthDate = new Date(year, month - 1, day); // month - 1 because months are zero-based in JavaScript Date
    const today = new Date(); // Create a Date object for the current date

    // Calculate the difference in years between today and the birthdate
    let years = today.getFullYear() - birthDate.getFullYear();
    // Calculate the difference in months between today and the birthdate
    let months = today.getMonth() - birthDate.getMonth();
    // Calculate the difference in days between today and the birthdate
    let days = today.getDate() - birthDate.getDate();

    // Display the calculated years in the HTML element with id 'years'
    document.getElementById('years').innerText = years;
    // Display the calculated months in the HTML element with id 'months'
    document.getElementById('months').innerText = months;
    // Display the calculated days in the HTML element with id 'days'
    document.getElementById('days').innerText = days;
}

// Set up an event listener on the button with id 'calculateButton' to call the calculateAge function when clicked
document.getElementById('calculateButton').onclick = calculateAge;
