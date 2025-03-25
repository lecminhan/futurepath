import { useState } from "react"
import { Link } from "react-router-dom"
import { User, Lock, Unlock } from "lucide-react"
import "../styles/auth.css"
import NavBar from "../components/Navbar"

export default function LoginPage() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const [isCardVisible, setIsCardVisible] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    // Animation effect
    useState(() => {
        const timer = setTimeout(() => {
            setIsCardVisible(true)
        }, 100)
        return () => clearTimeout(timer)
    })

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Login attempt with:", { username, password, rememberMe })
        // Add your authentication logic here
    }

    return (
        <div className="auth-container">
            <NavBar />
            <div
                className="auth-card"
                style={{
                    opacity: isCardVisible ? 1 : 0,
                    transform: isCardVisible ? "translateY(0)" : "translateY(20px)",
                }}
            >
                <h1 className="auth-title">Login</h1>

                <form onSubmit={handleLogin}>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <div className="input-icon">
                            <User size={18} />
                        </div>
                    </div>

                    <div className="input-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <div
                            className="input-icon"
                            onClick={() => setShowPassword(!showPassword)}
                            style={{ cursor: "pointer" }}
                        >
                            {showPassword ? <Unlock size={18} /> : <Lock size={18} />}
                        </div>
                    </div>

                    <div className="remember-forgot">
                        <label className="remember-me">
                            <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                            <span>Remember Me</span>
                        </label>
                        <Link to="/forgot-password" className="forgot-link">
                            Forgot Password
                        </Link>
                    </div>

                    <button type="submit" className="auth-button">
                        Login
                    </button>

                    <button type="button" className="google-button">
                        <img
                            src="https://t4.ftcdn.net/jpg/03/08/54/37/360_F_308543787_DmPo1IELtKY9hG8E8GlW8KHEsRC7JiDN.jpg"
                            alt="Google"
                            className="google-icon"
                        />
                        <span className="google-button-text">Or, sign-in with Google</span>
                    </button>

                    <div className="auth-footer">
                        Don't have an account?
                        <Link to="/register" className="auth-link">
                            Register
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}