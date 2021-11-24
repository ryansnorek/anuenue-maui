export default function DisplayItem({ viewingItem, setViewingItem }) {

    const handleClose = () => setViewingItem(false);
    return (
        <div className="display-box">
            <div className="display-item">
                <div>
                    <img src={viewingItem.img} alt={viewingItem.name}/>
                </div>
                <div className="display-text">
                    <h2>{viewingItem.name}</h2>
                    <p>{viewingItem.description}</p>
                    <p>{viewingItem.price}</p>
                </div>
                <span className="close-icon" onClick={handleClose}>x</span>
            </div>
        </div>
    );
}