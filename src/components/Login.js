import { useState } from "react";

export default function Login() {
    const [values, setValues] = useState({ username:"", password:"" });
    const handleChange = e => setValues({ ...values, [e.target.name]: e.target.value });
    const handleSubmit = e => {
        e.preventDefault();
        
    }

    return (
        <div className="login">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input 
                        name="username"
                        type="text"
                        placeholder="username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    <input 
                        name="password"
                        type="password"
                        placeholder="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    <button>login</button>
                </form>
            </div>
        </div>
    )
}