import { data } from "../data";

export default function Menu({ setViewingItem }) {
    const handleClick = id => {
        const clickedItem = data.filter(item => item.id === id);
        setViewingItem(clickedItem);
        // store # clicks data
    };
    return (
        <div className="menu">
            {data.map(item => {
                return (
                    <div className="item">
                        <div className="image" onClick={() => handleClick(item.id)}>
                            <img src={item.img} alt={item.img}/>
                        </div>
                        <div className="text">
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}