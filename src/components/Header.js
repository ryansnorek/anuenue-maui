import { Link } from "react-router-dom";

export default function Header({ bag }) {
    return (
        <header>
                <h1>ANUENUE MAUI</h1>
            <nav>
                <div className="links">
                    <ul>
                        <li>
                            <Link to="/shop">shop</Link>
                        </li>
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                        <li>
                            <Link to="/bag">
                                bag
                                <span className="bag-badge">
                                    {bag.length > 0 && bag.length}
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/login">login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}