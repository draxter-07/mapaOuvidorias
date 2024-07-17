let countries = [["Abecásia", "28%", "59%"],
                ["Afeganistão", "34.5%", "67%"],
                ["África do Sul", "77.5%", "54%"],
                ["Albânia", "29.5%", "52.5%"],
                ["Alemanha", "23%", "49.5%"],
                ["Andorra", "28.7%", "47%"],
                ["Angola", "65.5%", "52%"],
                ["Antígua e Barbuda", "47%", "26%"],
                ["Arábia Saudita", "41.5%", "61%"],
                ["Argélia", "38.5%", "47.5%"],
                ["Argentina", "80%", "26%"],
                ["Armênia", "30.5%", "60.2%"],
                ["Austrália", "74%", "90%"],
                ["Áustria", "25.3%", "50.7%"],
                ["Azerbaijão", "30%", "61%"],
                ["Bahamas", "41%", "21%"],
                ["Bahrain", "40.2%" ,"63.2%"],
                ["Bangladesh", "41.3%", "75.5%"],
                ["Barbados", "48%", "27%"],
                ["Bélgica", "23.4%" ,"47.8%"],
                ["Belize", "46%" ,"17%"],
                ["Benim", "50.3%", "46.9%"],
                ["Bielorrússia", "21.3%", "54.6%"],
                ["Bolívia", "69%", "25%"],
                ["Bósnia e Herzegovina", "27.7%", "51.8%"],
                ["Botswana", "72%", "54%"],
                ["Brasil", "65%", "29.5%"],
                ["Brunei", "54%", "84.5%"],
                ["Bulgária", "28.5%", "54%"],
                ["Burkina Faso", "49%", "45.5%"],
                ["Burundi", "59.7%", "56.1%"],
                ["Butão", "38.7%", "75.4%"]
                ]
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