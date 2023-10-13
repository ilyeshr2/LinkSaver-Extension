let input_btn =document.getElementById("inp_btn")
let tab =document.getElementById("tab")
//let del = document.getElementById("del")
let inp_el = document.getElementById("inp_el")
let links = document.getElementById("links")
let inp_arr=[]
let dom=""

inp_btn.addEventListener("click", save_inp);
tab.addEventListener("click", save_tab);
del.addEventListener("click", delete_inp);



function save_inp(){
    let input_value=
    inp_arr.push(inp_el.value)
    inp_el.value=""
    render()
}

function render(){
    dom=""
    for(let i=0; i<inp_arr.length; i++){
        dom+=`<li>${inp_arr[i]}</li>`
    }
    console.log(dom)
    links.innerHTML=dom
}

function save_tab(){
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        console.log(url)
        // use `url` here inside the callback because it's asynchronous!
    });
    //inp_arr.push(url)
    //render()

}
function delete_inp(){
    console.log("delete all")
}