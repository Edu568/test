const ItemCount = ({stock, onAdd,onBuy, contador, onSubstract,compra}) => {

    return (
    <>
       <div className="counter d-flex flex-column justify-content-between">
           <div className="counterBox">
               <button className="open" onClick={onSubstract} disabled={contador == 1}>-</button>
               <b>{contador}</b>
               <button className='open'  onClick={onAdd} disabled={contador == stock || contador > stock}>+</button>

           </div>

       </div>

    </>
    )
}

export default ItemCount;
