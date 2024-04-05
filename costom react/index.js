

function customRender(reactElement,container){
    // const element=document.createElement(reactElement.type);
    // element.innerHTML = reactElement.children;
    // element.setAttribute('href',reactElement.props.href);
    // element.setAttribute('target',reactElement.props.target);
    // container.appendChild(element);

    const domElement =document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    for(let prop in reactElement.props){
        if(prop==='children')continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(domElement);

}


const reactElement={
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"click me to search"
};


const mainContainer=document.querySelector("#root");

customRender(reactElement,mainContainer);
