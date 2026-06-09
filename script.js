const form = document.getElementById("bookingForm");
const popup = document.getElementById("popup");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let checkin =
    new Date(document.getElementById("checkin").value);

    let checkout =
    new Date(document.getElementById("checkout").value);

    if(checkout <= checkin){
        alert("Check-out date must be after Check-in date");
        return;
    }

    popup.style.display = "block";

    setTimeout(()=>{
        popup.style.display = "none";
    },3000);

    form.reset();
});

window.addEventListener("scroll",()=>{

    const header =
    document.querySelector("header");

    if(window.scrollY > 100){
        header.style.background = "#111";
    }
    else{
        header.style.background =
        "rgba(0,0,0,0.5)";
    }
});

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

document
.querySelectorAll(".hidden")
.forEach(el=>observer.observe(el));