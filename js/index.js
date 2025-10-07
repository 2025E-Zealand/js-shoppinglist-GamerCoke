//Write your Javascript code here
console.log("Shoppinglist")
// let newnode = document.createElement("li");
// newnode.setAttribute("id","4");
// newnode.setAttribute("class","unhealthy");
// let txtnode = document.createTextNode("");

let click = document.getElement

function createLiNode(classname, id, text){
    let liElement = document.createElement("li");
    liElement.setAttribute("id", id);
    // alternative way to set an element attribute, in this case class
    // node.className = classname;
    liElement.setAttribute("class", classname);
    let txtnode = document.createTextNode(text);
    liElement.appendChild(txtnode);
    document.body.appendChild(liElement);
    return liElement;
}

function appendLiToList(list, id){
    // the following comment is a single line of code, as an alternative. It is less readable.
    // document.getElementById(list).appendChild(document.getElementById(id)) 
    let linode = document.getElementById(id);
    let listnode = document.getElementById(list);
    listnode.appendChild(linode);
} 

function changeOrAddClass(id, classname){
    let node = document.getElementById(id);
    node.setAttribute("class", classname);
    //
    // if (node.className == null) {
    //    node.setAttribute("class", classname)
    // }

/*
    alternative:
    let sheet = document.styleSheets[0];
    let classExists = false;
    
    for (let i = 0; i < sheet.cssRules.length; i++){
        if (sheet.cssRules[i].selectorText === `.${classname}`){
            classExists = true;
            break;
        }
    }

    if (!classExists) {
        let defaultRule = `.${classname} {
            background-color: lightgray;
            color = #fff;
            text-shadow: 2px 2px 1px #000;
            border-top: 1px solid #888;
            border-bottom: 1px solid #888;
        }`;
        sheet.insertRule(defaultRule, sheet.cssRules.length);
        console.log(`Created new class: .${classname}`)
    }

    element.setAttribute("class", classname)
    */
}

function deleteLi(id){
    document.getElementById(id).remove();
}