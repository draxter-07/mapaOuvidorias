let countries = [["Brasil", "67%", "61%"],
                ["França", "38%", "85%"]]
let earth = document.getElementById("earthTerrain")
for(let i = 0; i < countries.length; i++){
    let c = countries[i];
    earth.innerHTML += `<div 
                        class="pin" 
                        style="top: ${c[1]}; left: ${c[2]}"
                        title=${c[0]}
                        onclick="moveToCountry(event)">
                        </div>`
}

function rotateEarth(type){
    let earth = document.getElementById("earthTerrain")
    let transNumber = Number((earth.style.translate).replace("%", ""))
    if(type==0 && transNumber != -75){
        earth.style.translate = `${transNumber - 15}%`
    }
    if(type==1 && transNumber != 0){
        earth.style.translate = `${transNumber + 15}%`
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function moveToCountry(e){
    let divToGo = document.getElementById(e.target.title);
    divToGo.scrollIntoView({behavior: "smooth"})
    await sleep(500)
    divToGo.style.border = "3px solid rgb(0, 150, 255)";
    await sleep(1000)
    divToGo.style.border = "3px solid rgb(255, 255, 255)";
}