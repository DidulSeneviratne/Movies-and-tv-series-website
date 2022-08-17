//giving values to variables from the html
const IMGS = document.querySelectorAll(".images img");
const modalBox = document.querySelector(".modalBox");
const modalImage = document.querySelector(".ModalImage");
const modalText = document.querySelector(".modalTxt");
const closeBtn = document.querySelector(".closeBtn");

//After clicking on a specific image it will popup and show the text
IMGS.forEach((image) => {
  image.addEventListener("click", () => {
    modalImage.src = image.src;
    modalText.innerHTML = image.alt;
    modalBox.classList.add("appear");
//when clicked close it returns back 
    closeBtn.addEventListener("click", () => {
      modalBox.classList.remove("appear");
    });
  });
});

//function for background color change
function colorbg() {
                //get the color id from the html selection
                var x = document.getElementById("bgID");
                var bgcolor = x.options[x.selectedIndex].value;
                document.body.style.backgroundColor = bgcolor;
            }
             //checking the inputs and according to the it changes the bacgkround color
            function selecttx() {
                var selectedColour = document.getElementsByName("colors").value;
                if (selectedColour == "red") {
                    document.getElementsById("caption").style.color = "#ff0000";
                }
                else if (selectedColour == "blue") {
                    document.getElementById("caption").style.color = "#011591";
                }
                else if (selectedColour == "purple") {
                    document.getElementById("caption").style.color = "#800080";
                }
                else if (selectedColour == "green") {
                    document.getElementById("caption").style.color = "#0c6101";
                }
                else if (selectedColour == "white") {
                    document.getElementById("caption").style.color = "#ffffff";

                }
            }
//function for changing the text color
 function changetextColor(event)
            {   //change the text color accrding to the selection from html
                var color = event.value;
                document.getElementsByTagName('BODY')[0].style.color=color;
            }