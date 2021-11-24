import DisplayItem from "./DisplayItem";
import Menu from "./Menu";
import { useState } from "react";

export default function Home({ bag, setBag }) {
    const [viewingItem, setViewingItem] = useState(false); 
    

    const addToBag = item => setBag([ ...bag, item ])
    console.log(bag)
    return (
        <div>
           <Menu setViewingItem={setViewingItem} addToBag={addToBag}/>
           {/* {viewingItem && 
                <DisplayItem 
                    viewingItem={viewingItem} 
                    setViewingItem={setViewingItem}
                    addToBag={addToBag}
                />} */}
        </div>
    );
}





