import DisplayItem from "./DisplayItem";
import Menu from "./Menu";
import { useState } from "react";

export default function Home() {
    const [viewingItem, setViewingItem] = useState(false); 

    return (
        <div>
           <Menu setViewingItem={setViewingItem}/>
           {viewingItem && <DisplayItem viewingItem={viewingItem} setViewingItem={setViewingItem}/>}
        </div>
    );
}





