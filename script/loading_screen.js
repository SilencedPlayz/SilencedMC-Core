setTimeout(()=>{
  loading.style.opacity = 0
},1000)

setTimeout(()=>{
  loading.style.display = "none"
  tabsPanel.style.bottom = 0
  naviLine.style.bottom = "10px"
  navigator.style.top = "0"
},1500)