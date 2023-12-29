const parallax_el = document.querySelectorAll(".parallax");
const main = document.querySelector("main");

// Set initial values for xValue and yValue
let xValue = window.innerWidth / 2;
let yValue = window.innerHeight / 2;

// Set initial positions for parallax elements
parallax_el.forEach((el) => {
  let speedx = el.dataset.speedx;
  let speedy = el.dataset.speedy;
  let speedz = el.dataset.speedz;

  let elementCenterX = el.offsetLeft + el.offsetWidth / 2;
  let isInLeft = elementCenterX < window.innerWidth / 2 ? 1 : -1;
  let zValue = (xValue - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

  el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) 
    translateY(calc(-50% + ${yValue * speedy * 0.4}px)) perspective(2300px) 
    translateZ(${zValue * speedz}px)
    `;
});

window.addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerWidth / 2;    
  yValue = e.clientY - window.innerHeight / 2;

  parallax_el.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    let speedz = el.dataset.speedz;

    let elementCenterX = el.offsetLeft + el.offsetWidth / 2;
    let isInLeft = elementCenterX < window.innerWidth / 2 ? 1 : -1;
    let zValue = (xValue - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

    el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) 
    translateY(calc(-50% + ${yValue * speedy * 0.4}px)) perspective(2300px) 
    translateZ(${zValue * speedz}px)
    `;
  });
});

if (window.innerWidth >= 725){
    main.style.maxHeight = `${window.innerWidth * 0.5}px`;  
} else { 
    main.style.maxHeight = `${window.innerWidth * 1.6}px`;
}
 
/* GSAP ANIMATION*/

let timeline = gsap.timeline();

Array.from(parallax_el)
.filter(el => !el.classList.contains("text")) 
.forEach((el) => {
    timeline.from(
        el,
        {
        top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
        duration: 3,  
        ease:"power3.out",
    }, 
    "1"
    );    
}); 


timeline.from(
  ".text h1",
  {
    y:
    window.innerHeight -
    document.querySelector(".text h1").getBoundingClientRect().top +200,
    duration:2,
  },
  "2.5"
)
.from(
  ".text h2",
  {
    y: -150,
    opacity:0,
    duration:1.5,
  },
  "3"
)
.from(
  ".text h4",     
  {
    y: -150,
    opacity:0,
    duration:1.5,
  },
  "3"
)
.from(
  ".hide",
  {
    opacity:0,
    duration:1.5,
  },
  "3"
);

 

 
// Function to simulate mouse movement
function simulateMouseMovement() {
  const event = new Event("mousemove");
  window.dispatchEvent(event);
}

// Trigger the initial mouse movement simulation after a delay
setTimeout(simulateMouseMovement, 100);

// Rest of the existing code...
   




const observer = new IntersectionObserver((entries)=> {
  entries.forEach((entry)=>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    } else{
      entry.target.classList.remove('show');
    }
  }); 
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));  













document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll("#app .container card");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() { 
    cards.forEach((card) => {
      if (isInViewport(card)) {
        card.classList.add("card-visible");
      }
    });
  }

  // Initial check on page load
  handleScroll();

  // Listen for scroll events
  window.addEventListener("scroll", handleScroll);
});
  

//----------------------------------------------------------------------------------------//




//email// 
document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    var message = document.querySelector("#messageForm input[type='text']").value;   
    var recipientEmail = "coolgamerz905@gmail.com";
    var subject = "New Message from Yuva Tourism";
    var emailBody = encodeURIComponent(message); // Encode the message for URL
    
    // Open Gmail compose page in a new tab with pre-filled recipient, subject, and pre-composed email body
    window.open("https://mail.google.com/mail/u/0/?fs=1&tf=1&view=cm&to=" + recipientEmail + "&su=" + subject + "&body=" + emailBody, "_blank");
});

  //------------------------------------------------------------------------//

//top button// 


let topIcon = document.getElementById('top-icon');

topIcon.addEventListener('click', function() {
  const homeSection = document.getElementById('home');
  homeSection.scrollIntoView({ behavior: 'smooth' });
});
 


topIcon.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});



topIcon.addEventListener('mouseenter', function() {
  topIcon.classList.add('fa-bounce'); // Add the "fa-bounce" class on hover
});

topIcon.addEventListener('mouseleave', function() {
  topIcon.classList.remove('fa-bounce'); // Remove the "fa-bounce" class when not hovering
});
  

//------------------------------------------------------------------------//
//------------------------------------------------------------------------// 


/*faq*/
let li = document.querySelectorAll(".faq-text li");
    for (var i = 0; i < li.length; i++) {
      li[i].addEventListener("click", (e)=>{
        let clickedLi;
        if(e.target.classList.contains("question-arrow")){
          clickedLi = e.target.parentElement;
        }else{
          clickedLi = e.target.parentElement.parentElement;
        }
       clickedLi.classList.toggle("showAnswer");
      });
    }  

//----------------------------------------------------------------------------------------//
    //loader//
document.addEventListener("DOMContentLoaded", function() {

setTimeout(function() {
  var loaderWrapper = document.querySelector(".loading");  
  loaderWrapper.style.display = "none";
}, 1500);  
});  
//----------------------------------------------------------------------------------------//
/*pop up */
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("popupContainer").style.display = "flex";
    }, 120000);      
});

function handleYes() {
    var message = "Thank you for your positive feedback! We're thrilled that you had a great experience on our website.";
    showNotificationCard(message);
    hidePopup();
}

function handleNo() {
    var message = "We're sorry to hear that you didn't have a positive experience. Your feedback is important to us, and we would like to learn more about what went wrong.";
    showNotificationCard(message);
    hidePopup();
}

function showNotificationCard(message) {
    var notificationCard = document.getElementById("notificationCard");
    var notificationMessage = document.getElementById("notificationMessage");

    notificationMessage.innerText = message;
    notificationCard.style.left = "20px";

    setTimeout(function() {
        hideNotificationCard();
    }, 5000);                  
}

function hideNotificationCard() {
    var notificationCard = document.getElementById("notificationCard");

    notificationCard.style.left = "-8000px";
    notificationCard.style.transition = "left 2s ease";
}

function hidePopup() {
    document.getElementById("popupContainer").style.display = "none";
}    
//----------------------------------------------------------------------------------------//


// List of available songs
var songList = [
      'song1.mp3',
      'song3.mp3'     
      // Add more songs as needed
    ];

    // Play a random song when the page loads
    window.onload = function () {
      playRandomMusic();
    };

    function playRandomMusic() {
      // Get a random index from the song list
      var randomIndex = Math.floor(Math.random() * songList.length);

      // Get the random song URL
      var randomSong = songList[randomIndex];

      // Play the random song
      var musicPlayer = document.getElementById("musicPlayer");
      musicPlayer.src = randomSong;
      musicPlayer.play();
    } 
//----------------------------------------------------------------------------------------//


function redirectToBeach() {
  window.location.href = 'beaches1.html';
}

function redirectToMountain() {
  window.location.href = 'mountain.html';
}

function redirectToCity() {
  window.location.href = 'city.html';
}


setTimeout(() => {
  document.querySelector(".card").focus();
},1500); 
         

//----------------------------------------------// 