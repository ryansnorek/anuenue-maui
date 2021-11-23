import { data } from "../data";
import Header from "./Header";

export default function Home() {
    return (
        <div>
           <Header/>
           <div className="menu">
                {data.map(item => {
                    return (
                        <div className="item">
                            <div className="image">
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
        </div>
    );
}





