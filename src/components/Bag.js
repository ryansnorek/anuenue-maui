export default function Bag({ bag, setBag }) {
    const removeFromBag = id => setBag(bag.filter(item => item.id !== id));

    return (
        <div>
            {bag.map(item => {
                return (
                    <div className="bag">
                        <div className="image">
                            <img src={item.img} alt={item.img}/>
                        </div>
                        <div className="text">
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <button onClick={() => removeFromBag(item.id)}>remove</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}