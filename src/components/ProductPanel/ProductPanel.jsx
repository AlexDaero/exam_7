import React from "react";
import './ProductPanel.css'
import Button from "../UI/Button";

function ProductPanel(props) {

    return (
        <div className="panel">
            <div className="panel_block">
                <h3>Наименование</h3>
                <button onClick={() => props.sort('name')} className="sort_btn"></button>
                <div className="panel_block_items">
                    {props.array.map((item, index) => {
                        return (
                            <p key={`${item.name}_${index}`}>
                                {item.name}
                            </p>
                        )
                    })}
                </div>
            </div>
            <div className="panel_block">
                <h3>Цена, ₽</h3>
                <button onClick={() => props.sort('price')} className="sort_btn"></button>
                <div className="panel_block_items">
                    {props.array.map((item, index) => {
                        return (
                            <p key={`${item.price}_${index}`}>
                                {item.price}
                            </p>
                        )
                    })}
                </div>
            </div>
            <div className="panel_block">
                <h3>Остаток на складе</h3>
                <button onClick={() => props.sort('stock')} className="sort_btn"></button>
                <div className="panel_block_items">
                    {props.array.map((item, index) => {
                        return (
                            <div key={`${item.stock}_${index}`} className="panel_block_stock">
                                <p>{item.stock}</p>
                                <Button
                                    width='30px'
                                    height='10px'
                                    background='red'
                                    click={() => props.click(index)}
                                    activeBtn={props.array[index]}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductPanel