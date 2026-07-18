function customRender(reactElement,Container){
    // const domElement = document.createElement(reactElement.type);

    // domElement.innerHTML = reactElement.children;

    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);
// <--!-- the attribute should be constent only two --!-->
    // Container.appendChild(domElement);

    const domElement = document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if(prop === 'childern') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }

    Container.appendChild(domElement);

}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const MainContainer = document.querySelector('#root')

customRender(reactElement,MainContainer);