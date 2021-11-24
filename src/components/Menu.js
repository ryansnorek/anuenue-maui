import { data } from "../data";

export default function Menu({ setViewingItem, addToBag }) {
    const handleClick = id => {
        const clickedItem = data.filter(item => item.id === id);
        setViewingItem(clickedItem);
        // store # clicks data
    };
    return (
        <div className="menu">
            {data.map(item => {
                return (
                    <div className="item" onClick={() => handleClick(item.id)}>
                        <div className="image">
                            <img src={item.img} alt={item.img}/>
                        </div>
                        <div className="text">
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <button onClick={() => addToBag(item)}>add to bag</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}