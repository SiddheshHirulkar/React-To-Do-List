import React from 'react'

const Search = ({ item, setItem, element, setElement}) => {
    
    const getItemName = (e) => {
        setItem(e.target.value);
    }

    const getItem = (e) => {
        e.preventDefault();
        setItem('');
        setElement((allItems) =>{
            return [...allItems, item];
        });
        console.log(element);
    }

    return (
        <div>
            <form onSubmit={getItem}>
                <input
                    className="input form-control mb-3 col-7 d-inline"
                    name="itemName"
                    value={item}
                    onChange={getItemName}
                />
                <button 
                    className="btn btn-success mb-1 ml-4 d-inline"
                    type="submit"
                >Add</button>
            </form>
        </div>
    )
}

export default Search
