function customRender(reactElement,container){
    // Rendering part  
    
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href )
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue; // when we put children in props so it cause some error
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

// Custom react
const reactElement = {
    type: 'a', // type of tag 
    props: {
        href: 'https://google.com',
        target: '_blank'
    } ,
    children: 'Click me to visit google'
}// React jo bhi element hai usa tree banna ki koshish karta ha

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
