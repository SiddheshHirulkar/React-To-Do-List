import React from 'react'
import '../App.css'

const List = ({ element, setElement }) => {
    
    const deleteItem = (itemNo) => {
        console.log(itemNo);
        //list.splice(itemNo, 1);
        setElement((element) => {
            return element.filter((arrEle, index) => {
                return index !== itemNo;
            });
        });
    }

    return (
        <div className="mm-top">
            {element !== null ? (
                element.map((items, index) => 
                    <div 
                        key={index} 
                        className="d-flex bg-light col-8 box-card p-2"
                        id={index}
                    ><span>
                        <i 
                            className="btn badge badge-danger mr-5"
                            onClick={() => deleteItem(index)}
                        >Delete</i>{items}
                    </span>
                    </div>)    
            ) : ('')}
        </div>
    )
}

export default List
