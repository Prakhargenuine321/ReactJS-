function customReact(reactElement ,container){

    //following portion of code is used when there are less attributes

    /*const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href' ,reactElement.href);
    domElement.setAttribute('target' ,reactElement.target);
    container.appendChild(domElement);*/


    //but what if it has a lot attributes
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for(const prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop , reactElement.props[prop]);
    }

    container.appendChild(domElement);

}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector("#root");

customReact(reactElement ,mainContainer);