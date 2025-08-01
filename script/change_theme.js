let isDark = false

function changeTheme(){
  if(isDark === false){
    body.style.backgroundColor = "black"
    body.style.color = "white"
    theme.style.color = "white"
    navigator.style.color = "white"
    navigator.style.backgroundColor = "black"
    isDark = true
    searchIcon.style.filter = "invert(1)"
    titleIcon.style.filter = "invert(0)"
    theme.style.backgroundImage = `url("${sunIcon}")`
    theme.style.filter = "invert(1)"
    tabsPanel.style.backgroundColor = "black"
    tabsPanel.style.color = "white"
    naviLine.style.backgroundColor = "white"
    tabsPanel.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.05), 0 0 30px rgba(255, 255, 255, 0.08), 0 0 50px rgba(255, 255, 255, 0.1)"
    tabIcons.forEach(tabicon =>{
      tabicon.style.filter = "invert(1)"
    })
  }else{
    body.style.backgroundColor = "white"
    body.style.color = "black"
    isDark = false
    theme.style.color = "black"
    navigator.style.color = "black"
    navigator.style.backgroundColor = "white"
    searchIcon.style.filter = "invert(0)"
    titleIcon.style.filter = "invert(1)"
    theme.style.backgroundImage = `url("${moonIcon}")`
    theme.style.filter = "invert(0)"
    tabsPanel.style.backgroundColor = "white"
    tabsPanel.style.color = "black"
    naviLine.style.backgroundColor = "black"
    tabsPanel.style.boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    tabIcons.forEach(tabicon =>{
      tabicon.style.filter = "invert(0)"
    })
  }
}