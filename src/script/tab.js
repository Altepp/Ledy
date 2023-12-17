let tab0 = document.getElementById("content-0")
let tab1 = document.getElementById("content-1")
let tab2 = document.getElementById("content-2")
let tab3 = document.getElementById("content-3")
let tab4 = document.getElementById("content-4")

let tabBtn0 = document.getElementById("tab-0")
let tabBtn1 = document.getElementById("tab-1")
let tabBtn2 = document.getElementById("tab-2")
let tabBtn3 = document.getElementById("tab-3")
let tabBtn4 = document.getElementById("tab-4")

let tabs = [
    tab0,
    tab1,
    tab2,
    tab3,
    tab4
]

let tabsBtn = [
    tabBtn0,
    tabBtn1,
    tabBtn2,
    tabBtn3,
    tabBtn4,
    
]

function switchTab(id) {

    tabs.forEach((tab)=>{
        let tabId = tab.id.split("-")[1]


        if (tabId == id + "") {
            tab.hidden = false
        } else {
            tab.hidden = true
        }

    })

    tabsBtn.forEach((tab)=>{
        let tabBtnId = tab.id.split("-")[1]

        if (tabBtnId == id + "") {
            tab.className = "selected-tab"
        } else {
            tab.className = ""
        }
        

    })

}