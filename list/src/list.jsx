import PropType from 'prop-types';
function list(props){



    // const fruits=[{id: 1, name:"apple", calories: 95},
    //               {id: 2, name:"coconut", calories: 45},
    //               {id: 3, name:"banana",calories: 105} ,
    //               {id: 4, name:"pineapple", calories: 155}];











// Alpha
    // fruits.sort((a,b)=> a.name.localeCompare(b.name)); 
// reverse Alpha
    // fruits.sort((a,b)=> b.name.localeCompare(a.name)); 
// numberic
    // fruits.sort((a,b)=> a.calories-(b.calories)); 

// reverse num
    // fruits.sort((a,b)=> b.calories - (a.calories)); 











// const lowcalfru = fruits.filter(fru => fru.calories<100);
// const highcalfru = fruits.filter(fru => fru.calories>=100);






    // const listitem=fruits.map(fru=><li key={fru.id}>{fru.name} : &nbsp; <b>{fru.calories}</b></li>);

    // const listitem=lowcalfru.map(lowcalfr=><li key={lowcalfr.id}>{lowcalfr.name} : &nbsp; <b>{lowcalfr.calories}</b></li>);












     const cate = props.category;

    const itemList = props.items;
    const listitem=itemList.map(item=><li key={item.id}>{item.name} : &nbsp; <b>{item.calories}</b></li>);


    return(<>
    <h3 className="list-cat">{cate}</h3>
    <ol className="list-item">{listitem}</ol>
    </>

    )
}
list.PropType={
    category:PropType.string,
    items: PropType.arrayOf(PropType.shape({id:PropType.number,
        name:PropType.string,
        calories: PropType.number,
    }))
}
list.defaultProps ={
    category:"Category",
    items:[]
}
export default list;