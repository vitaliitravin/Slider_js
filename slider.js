let images = [{
    url: "images/Desktop1.png",
    title: "Rostov"
}, {
    url: "images/Desktop-2.png",
    title: "Sochi" 
}, {
    url: "images/Desktop-3.png",
    title: "Rostovn2"
    
}];

let textArea = [{
    city: "Rostov-on-Don LCD admiral",
    area: "81 m2",
    time: "3.5 months",
    cost: "Upon request"
}, {
    city: "Sochi Thieves",
    area: "105 m2",
    time: "4 months",
    cost: "Upon request"
}, {
    city: "Rostov-on-Don Patriotic",
    area: "93 m2",
    time: "3 months",
    cost: "Upon request"
}];


document.addEventListener('DOMContentLoaded', function () {
   if(!images || !images.length) return;
  
    let sliderImages = document.querySelector('.slider-image');
    let sliderArrows = document.querySelector('.slider-arrows');
    let sliderDots = document.querySelector('.slider-dots');
    let sliderLinks = document.querySelector('.projects-navigation');
    



    initImages();
    initArrows();
    initDots();
    initLinks();
    initText();
    

    function initImages () {
        images.forEach((image, index) => {
            let imageDiv = `<div class='image n${index} ${index === 0 ? 'active' : ''}' 
            style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
        });
    }

  



    function initArrows () {
        let prev = document.querySelector(".btn-prev");
        let next = document.querySelector(".btn-next");

        let index = 0;

    const nextSlide = () => {
        if(index === images.length - 1) {
            index = 0;
            moveSlider(index);  
        } else {
            index++;
            moveSlider(index); 
        }
    };
    next.addEventListener("click", nextSlide);

    const prevSlide = () => {
        if (index === 0) {
            index = images.length - 1;
            moveSlider(index);
        } else {
            index--;
            moveSlider(index);
        }
    };
    prev.addEventListener("click", prevSlide);

    }

    

    function initDots () {
        images.forEach((image, index) => {
            let dot = `<div class="slider__dots-item n${index} ${index === 0 ? "active" : ""}" data-index = '${index}'></div>`;
            sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
            dot.addEventListener("click", function() {
                moveSlider(this.dataset.index);
               
            });
        });
    }

    function initLinks () {
        images.forEach((image, index) => {

        
        let firstLink = `<li class="projects-navigation__item n${0} ${index === 0 ? "active" : ""}" data-index = "${0}">Rostov-on-Don, Admiral</li>`;
        let secondLink = `<li class="projects-navigation__item n${1} ${index === 0 ? "active" : ""}" data-index = "${1}">Sochi Thieves</li>`;
        let thirdLink = `<li class="projects-navigation__item n${2} ${index === 0 ? "active" : ""}" data-index = "${2}">Rostov-on-Don Patriotic</li>`;


        if (index === 0) {
            sliderLinks.innerHTML += firstLink;
        } else if (index === 1) {
            sliderLinks.innerHTML += secondLink;
        } else if (index === 2) {
            sliderLinks.innerHTML += thirdLink;
        };
        
        
        sliderLinks.querySelectorAll(".projects-navigation__item").forEach(link => {
            link.addEventListener("click", function() {
                moveSlider(this.dataset.index);
            });
        });
    });
    }

    function initText () {
        const cityText = document.querySelector(".slider-city");
        const ApartmentAreaText = document.querySelector(".slider-metr");
        const repairTimeText = document.querySelector(".slider-time");

        images.forEach((image, index) => {
            if (index === 0) {
            cityText.innerText = textArea[0].city;
        } else if (index === 1) {
            cityText.innerText = textArea[1].city;
        } else if (index === 2) {
            cityText.innerText = textArea[2].city;
            }
        });
    }



    


    


    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");
        sliderDots.querySelector(".active").classList.remove("active");
        sliderDots.querySelector(".n" + num).classList.add("active");
        sliderLinks.querySelector(".active").classList.remove("active");
        sliderLinks.querySelector(".n" + num).classList.add("active");
    }
    

})


