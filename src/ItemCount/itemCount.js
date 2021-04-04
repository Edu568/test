const ItemCount = ({stock, onAdd,onBuy, contador, onSubstract,compra}) => {

    return (
    <>
       <button onClick={onSubstract} disabled={contador == 1}>-</button>
       <b>{contador}</b>
       <button onClick={onAdd} disabled={contador == stock || contador > stock}>+</button> 
       <div>
           <p>Stock:{stock}</p>
       </div>
       <div>
           <button onClick={onBuy} disabled={stock == 0}>{compra}</button>
       </div>

    </>
    )
}

export default ItemCount;
