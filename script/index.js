const items = document.querySelectorAll(".featured-img");
const container = document.querySelector(".grid-featured");

function checkInView() {
    items.forEach(img => {
        const rect = img.getBoundingClientRect();
        const imgCenter = rect.left + rect.width / 2;
        const containerCenter = window.innerWidth / 2;

        if(Math.abs(imgCenter - containerCenter) < rect.width / 2){
            img.classList.add("active");
        }else{
            img.classList.remove("active");
        }
    })
}

container.addEventListener('scroll', checkInView);
checkInView();