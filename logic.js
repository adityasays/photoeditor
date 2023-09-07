document.addEventListener("DOMContentLoaded", function () {
   
    const options = document.querySelectorAll('.option');
    const saveImageBtn = document.querySelector('.saveimage');
    let fltname = document.getElementsByClassName("name")[0];
    let brightness=100 , saturation=100, inversion=0,greyscale=0;
    function handleOptionClick(event) {
      document.querySelector(".active").classList.remove("active");
      event.target.classList.add("active");
      const selectedEffect = event.target.getAttribute('data-effect');
      document.querySelector(".textbox").value = selectedEffect;
      fltname.innerText = selectedEffect;
      if (selectedEffect === "brightness") {
        filterslider.value = brightness;
        values.innerHTML = `&nbsp ${filterslider.value} % `;
      } else if (selectedEffect === "saturation") {
        filterslider.value = saturation;
        values.innerHTML = `&nbsp ${filterslider.value} % `;
      } else if (selectedEffect === "greyscale") {
        filterslider.value = greyscale;
        values.innerHTML = `&nbsp ${filterslider.value} % `;
      } else if (selectedEffect === "inversion") {
        filterslider.value = inversion;
        values.innerHTML = `&nbsp ${filterslider.value} % `;
      }
    }
    
  

    options.forEach(option => {
      option.addEventListener('click', handleOptionClick);
    });
  
    
    saveImageBtn.addEventListener('click', () => {
      
    });
  
    let fileInput = document.querySelector(".file-input");
    let chooseImg = document.querySelector(".chooseimage");
    let preview = document.querySelector(".image_container img");
  
    function loadImg() {
      let file = fileInput.files[0];
      if (!file) {
        return;
      }
      preview.src = URL.createObjectURL(file);
      preview.addEventListener("load", () => {
        document.querySelector(".dropdown").classList.remove("disable");
        document.querySelector(".saveimage").classList.remove("disable");
        document.querySelector(".slider_container").classList.remove("disable");
        document.querySelector(".foot").classList.remove("disable");
      });
    }
    let filterslider=document.querySelector(".filter")
    let values=document.querySelector(".value")

    function updatefilter()
    {
      //values.innerHTML= `&nbsp ${filterslider.value} % `
      const selectedfilter=document.querySelector(".dropdown .active")
      if(selectedfilter.id === "brightness")
      {
        brightness=filterslider.value;

      }
      else if(selectedfilter.id==="saturation")
      {
        saturation=filterslider.value
      }
      else if(selectedfilter.id==="inversion")
      {
        inversion=filterslider.value
      }
      else if(selectedfilter.id==="greyscale")
      {
        greyscale=filterslider.value
      }
    }
    fileInput.addEventListener("change", loadImg);
    filterslider.addEventListener("input",updatefilter)
    chooseImg.addEventListener("click", () => fileInput.click());
  });
  