const itemCount = ({stock, onAdd, setStock, contador, onSubstract}) => {

    return (
    <>
       <div className='contadorBox d-flex flex-column justify-content-between'>
            <div className='operBox'>
                <button className='oper' onClick={onSub} disabled={contador == 1}>-</button>
                <b>{contador}</b>
                <button className='oper'  onClick={onAdd} disabled={contador == stock || contador > stock}>+</button>
            </div>
            
            <p>Stock:{stock}</p>
        </div>
        <div>
            <button className='confirmar' onClick={onBuy} disabled={stock == 0}>{btnCompra}</button>
        </div>

    </>
    )
}

export default itemCount;
