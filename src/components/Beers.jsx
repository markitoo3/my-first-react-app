import Beer from './Beer.jsx'

function Beers({list}) {
    const a = 10
    console.log(<Beer info={list[0]} randomNum={a} key={10}/>)
    return (
        <div className="beers">
            {list.map((item, index) => <Beer info={item} key={index} randomNum={a}/>)}
        </div>
    )
    
}

export default Beers