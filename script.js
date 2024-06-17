let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")


// console.log(leadsFromLocalStorage)
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}

deleteBtn.addEventListener("dblclick", function() {
    console.log("double clicked")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    // console.log("Button clicked from addEventListener")
    myLeads.push(inputEl.value);
    inputEl.value= ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

tabBtn.addEventListener("click", function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let activeTab = tabs[0]
         let activeTabId = activeTab.id
    })
    
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

function render(leads) {
     let listItems =""
     for (let i = 0; i < leads.length; i++) {
    listItems +=
    `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
     }
     ulEl.innerHTML = listItems
    }