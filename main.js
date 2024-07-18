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
                ["Butão", "38.7%", "75.4%"],
                ["Cabo Verde", "44.5%", "39%"],
                ["Camarões", "54%", "50%"],
                ["Camboja", "48.8%", "80.8%"],
                ["Canadá", "18%", "18%"],
                ["Catar", "41.3%", "63.2%"],
                ["Cazaquistão", "25%", "66%"],
                ["Chade", "47%", "52.5%"],
                ["Chile", "82%", "24%"],
                ["China", "34.5%", "79%"],
                ["Chipre", "34%", "56.6%"],
                ["Colômbia", "55%", "21.8%"],
                ["Comores", "65%", "61%"],
                ["Congo", "58%", "51.5%"],
                ["Coreia do Norte", "30.2%", "85.3%"],
                ["Coreia do Sul", "33%", "86.3%"],
                ["Costa do Marfim", "52.5%", "44.3%"],
                ["Costa Rica", "50.7%", "18.3%"],
                ["Croácia", "26.8%", "51.4%"],
                ["Cuba", "42.6%", "20.5%"],
                ["Dinamarca", "20%", "49.3%"],
                ["Djibuti", "49.6%", "60.2%"],
                ["Dominica", "45.5%", "25.5%"],
                ["Egito", "39.5%", "55.8%"],
                ["El Salvador", "48%", "16.7%"],
                ["Emirados Árabes Unidos", "41%", "64%"],
                ["Equador", "58.5%", "20%"],
                ["Eritreia", "46.8%", "58.7%"],
                ["Escócia", "19.4%", "45.5%"],
                ["Eslováquia", "25.6%", "52.3%"],
                ["Eslovênia", "26.4%", "50.9%"],
                ["Espanha", "30%", "45.5%"],
                ["Estados Unidos da América", "31%", "16%"],
                ["Estados Federados da Micronésia", "54%", "93%"],
                ["Estônia", "18.3%", "53.8%"],
                ["Eswatini", "75.3%", "56.5%"],
                ["Etiópia", "51.5%", "59%"],
                ["Fiji", "52%", "95%"],
                ["Finlândia", "15%", "53.7%"],
                ["França", "26.1%", "47.2%"],
                ["Gabão", "57.7%", "50%"],
                ["Gâmbia", "48.1%", "40.9%"]
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