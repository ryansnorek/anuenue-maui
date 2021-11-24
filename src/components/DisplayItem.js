export default function DisplayItem({ viewingItem, setViewingItem, addToBag }) {

    const handleClose = () => setViewingItem(false);
    return (
        <div className="display-box">
            <div className="display-item">
                <div>
                    <div>
                        <img src={viewingItem.img} alt={viewingItem.name}/>
                    </div>
                    <div className="display-text">
                        <h2>Item name</h2>
                        <p>Description of the itemmmmmmmm</p>
                        <p>price</p>
                    </div>
                    <button onclick={() => addToBag(viewingItem)}>add to bag</button>
                </div>
                <span className="close-icon" onClick={handleClose}>x</span>
            </div>
        </div>
    );
}