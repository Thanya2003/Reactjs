function Cloneelem(reactelem, mainer){
    /*
    const domele = document.createElement(reactelem.type)
    domele.innerHTML=reactelem.childern
    domele.setAttribute('href', reactelem.props.href)
    domele.setAttribute('target',reactelem.props.target)
    mainer.appendChild(domele)
    */
   const domele = document.createElement(reactelem.type)
   domele.innerHTML=reactelem.childern
   for ( const prop in reactelem.props) {
    if(prop== 'childern') continue;
    domele.setAttribute(prop, reactelem.props[prop])
    
    
   }
   mainer.appendChild(domele)
}
const reactelem= {
    type:'a',
    props:{
        href:'https://www.netflix.com',
        target:'_blank'
    },
    childern:'click me '

}
const maincont=document.querySelector("#root")

Cloneelem(reactelem, maincont)