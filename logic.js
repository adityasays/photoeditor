// Select all option elements and buttons
const options = document.querySelectorAll('.option');
const saveImageBtn = document.querySelector('.saveimage');
let fltname=document.querySelector(".details .name")

// Function to handle when an option is clicked
function handleOptionClick(event) {
    const selectedEffect = event.target.getAttribute('data-effect');
    document.querySelector(".textbox").value = selectedEffect;
    console.log(selectedEffect)
    
    // Perform any other actions for the selected effect here
fltname.innerText = selectedEffect;
}

// Add click event listeners to each option
options.forEach(option => {
    option.addEventListener('click', handleOptionClick);
});


// Event listener for the "Save Image" button
saveImageBtn.addEventListener('click', () => {
    // Code to save the edited image goes here
});

let fileInput = document.querySelector(".file-input");
let chooseImg = document.querySelector(".chooseimage");
let preview = document.querySelector(".image_container img");

function loadImg(){
    let file=fileInput.files[0];
    if(!file)
    {
        return;
    }
    preview.src = URL.createObjectURL(file);
    preview.addEventListener("load",()=>{
        document.querySelector(".dropdown").classList.remove("disable");
        document.querySelector(".saveimage").classList.remove("disable");
        document.querySelector(".slider_container").classList.remove("disable");
        document.querySelector(".foot").classList.remove("disable");



    })
    console.log(file)
}
fileInput.addEventListener("change",loadImg)
chooseImg.addEventListener("click",()=>fileInput.click());

