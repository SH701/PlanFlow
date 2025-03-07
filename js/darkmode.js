const darkButton = document.querySelector(".dark");
const lightButton = document.querySelector(".light");

function toggleMode(isDarkMode) {
    document.body.classList.toggle("dark-mode", isDarkMode);
    document.body.classList.toggle("light-mode", !isDarkMode);
    
    if (isDarkMode) {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "RGB(18, 18, 18)";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundImage = `url('img/${chosenImage}')`;
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
    }
    
    const elementsToUpdate = document.querySelectorAll("a, li, p, h1, h2, h3, span, input");
    elementsToUpdate.forEach(element => {
        element.style.color = isDarkMode ? "white" : "";
    });
    
    
    const inputs = document.querySelectorAll("#login-form input,");
    inputs.forEach(input => {
        input.style.color = isDarkMode ? "white" : "";
        input.style.border = isDarkMode ? "1px solid white" : "";
    });
    
    const placeholderColor = isDarkMode ? "white" : "black";
    const placeholderStyle = document.createElement("style");
    placeholderStyle.innerHTML = `
        #login-form input::placeholder {
            color: ${placeholderColor};
            opacity: 1; 
        }`;
    document.head.appendChild(placeholderStyle);
    
    const calendar = document.getElementById("calendar");
    if (calendar) calendar.style.border = isDarkMode ? "1px solid white" : "";
    
    const monthYear = document.querySelector("#month-year :first-child");
    if (monthYear) monthYear.style.color = isDarkMode ? "white" : "";
    
    const calendarButtons = document.querySelectorAll("#calendar-header button");
    calendarButtons.forEach(button => button.style.color = isDarkMode ? "white" : "");
    
    const modeButtons = document.querySelectorAll("#mode button");
    if (modeButtons.length > 1) {
        modeButtons[0].style.backgroundColor = isDarkMode ? "black" : "";
        modeButtons[1].style.backgroundColor = isDarkMode ? "black" : "";
    }
}

darkButton.addEventListener("click", () => toggleMode(true));
lightButton.addEventListener("click", () => toggleMode(false));