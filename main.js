let countries = [["Abecásia", "27.5%", "58.5%"],
                ["Afeganistão", "34%", "67%"],
                ["África do Sul", "77.5%", "53.5%"],
                ["Albânia", "29.5%", "52.2%"],
                ["Alemanha", "22.5%", "49.2%"]]
let earth = document.getElementById("earthTerrain")
for(let i = 0; i < countries.length; i++){
    let c = countries[i];
    earth.innerHTML += `<div 
                        class="pin" 
                        style="top: ${c[1]}; left: ${c[2]}"
                        title="${c[0]}"
                        onclick="moveToCountry(event)">
                        </div>`
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function moveToCountry(e){
    let divToGo = document.getElementById(e.target.title);
    divToGo.scrollIntoView({behavior: "smooth"})
    openCountryContent(e.target.title)
    await sleep(200)
    divToGo.style.border = "3px solid rgb(0, 150, 255)";
    await sleep(1000)
    divToGo.style.border = "3px solid rgb(255, 255, 255)";
}

function openCountryContent(id){
    let divToOpen = document.getElementById(id)
    let nowMaxHeight = divToOpen.style.maxHeight
    if (nowMaxHeight == "" || nowMaxHeight == "50px"){
        divToOpen.style.overflowY = "scroll";
        divToOpen.style.maxHeight = "300px";
    }
    else{
        divToOpen.style.maxHeight = "50px";
        divToOpen.style.overflowY = "hidden";
    }
}