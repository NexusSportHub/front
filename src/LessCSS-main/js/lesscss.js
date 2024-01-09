var touchDevice = ('ontouchstart' in document.documentElement);

const image = document.querySelectorAll(".img-container");
image.forEach((img) => img.addEventListener("click", () => {
    
        const enlace = img.querySelector("img").src;
        const modalCont = document.querySelector(".modal");
        const modalImg = modalCont.querySelector("img");

        modalImg.src = enlace;

        modalCont.className = "modal show";
}))

const modal = document.querySelector(".modal");
if (modal) {
	modal.addEventListener("click", (e) => {
    	if (e.target !== modal.querySelector("img")) {
        	modal.className = "modal hidden";
    	}
    
	})


    const imageTilt = modal.querySelector("img");
/*
    if(!touchDevice){
        VanillaTilt.init(imageTilt, {
        max: 25,
        speed: 400,
        reverse: true
    });
    console.log("tilt is active")
    } else {
    console.log("tilt is inactive")
    }*/
}
/*VanillaTilt.init(imageTilt, {
    max: 25,
    speed: 400,
    reverse: true
})*/