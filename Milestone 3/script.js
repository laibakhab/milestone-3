var resumeForm = document.getElementById('resumeform');
var resumeOutput = document.getElementById('resumeOutput');
// Select input fields
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');
var addressInput = document.getElementById('address');
var skillsInput = document.getElementById('skills');
var educationInput = document.getElementById('education');
var experienceInput = document.getElementById('experience');
var pictureInput = document.getElementById('picture');
// Output fields
var displayPicture = document.getElementById('displayPicture');
var displayName = document.getElementById('displayName');
var displayPhone = document.getElementById('displayPhone');
var displayEmail = document.getElementById('displayEmail');
var displayAddress = document.getElementById('displayAddress');
var displaySkills = document.getElementById('displaySkills');
var displayEducation = document.getElementById('displayEducation');
var displayExperience = document.getElementById('displayExperience');
// Function to generate the resume dynamically
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Display picture if uploaded
    if (pictureInput.files && pictureInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            displayPicture.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(pictureInput.files[0]);
    }
    // Inject form data into resume output fields
    displayName.innerText = nameInput.value;
    displayEmail.innerText = emailInput.value;
    displayPhone.innerText = phoneInput.value;
    displayAddress.innerText = addressInput.value;
    displaySkills.innerText = skillsInput.value;
    displayEducation.innerText = educationInput.value;
    displayExperience.innerText = experienceInput.value;
    // Show the resume output
    resumeOutput.style.display = 'block';
});
