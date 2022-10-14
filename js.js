const bait = document.querySelectorAll(".bait");

for(let i = 0; i < bait.length; i++) {
    bait[i].addEventListener("click", (e) => {
        window.open('https://www.dehaagsehogeschool.nl/', '_blank');
    })
}


