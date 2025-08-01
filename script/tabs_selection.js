function tab1(){
  tab1icon.style.backgroundImage = `url("${sel1}")`
  tab2icon.style.backgroundImage = `url("${notsel2}")`
  tab3icon.style.backgroundImage = `url("${notsel3}")`
  tab4icon.style.backgroundImage = `url("${notsel4}")`
  naviLine.style.left = "9%"
  contLogo.style.backgroundImage = `url("${creeperIcon}")`
  contText.innerText = "Aww Man!"
  contDesc.innerText = "Server is in development..."
}

function tab2(){
  tab1icon.style.backgroundImage = `url("${notsel1}")`
  tab2icon.style.backgroundImage = `url("${sel2}")`
  tab3icon.style.backgroundImage = `url("${notsel3}")`
  tab4icon.style.backgroundImage = `url("${notsel4}")`
  naviLine.style.left = "32%"
  contLogo.style.backgroundImage = `url("${chickenIcon}")`
  contText.innerText = "Cluck! Cluck!"
  contDesc.innerText = "No available downloads..."
}

function tab3(){
  tab1icon.style.backgroundImage = `url("${notsel1}")`
  tab2icon.style.backgroundImage = `url("${notsel2}")`
  tab3icon.style.backgroundImage = `url("${sel3}")`
  tab4icon.style.backgroundImage = `url("${notsel4}")`
  naviLine.style.left = "55%"
  contLogo.style.backgroundImage = `url("${axolotlIcon}")`
  contText.innerText = "Blob blob"
  contDesc.innerText = "No available mails..."
}

function tab4(){
  tab1icon.style.backgroundImage = `url("${notsel1}")`
  tab2icon.style.backgroundImage = `url("${notsel2}")`
  tab3icon.style.backgroundImage = `url("${notsel3}")`
  tab4icon.style.backgroundImage = `url("${sel4}")`
  naviLine.style.left = "77%"
  contLogo.style.backgroundImage = `url("${foxIcon}")`
  contText.innerText = "Zzzz..."
  contDesc.innerText = "No available news..."
}