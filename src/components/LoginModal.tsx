import { useState } from "react";
import "../assets/css/LoginModal.css";

const hardcodedUsername = "Quentin";
const hardcodedPassword = "password123";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLoginSuccess: (username: string) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === hardcodedUsername && password === hardcodedPassword) {
            onLoginSuccess(username);
        } else {
            setError("Invalid username or password");
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;