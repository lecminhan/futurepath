import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { User, Mail, Lock, Unlock } from "lucide-react"
import "../styles/auth.css"
import NavBar from "../components/Navbar"

export default function RegisterPage() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isCardVisible, setIsCardVisible] = useState(false)
    const [passwordsMatch, setPasswordsMatch] = useState(true)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    // Animation effect
    useState(() => {
        const timer = setTimeout(() => {
            setIsCardVisible(true)
        }, 100)
        return () => clearTimeout(timer)
    })

    // Check password match
    useEffect(() => {
        if (confirmPassword) {
            setPasswordsMatch(password === confirmPassword)
        }
    }, [password, confirmPassword])

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setPasswordsMatch(false)
            return
        }
        console.log("Registration attempt with:", { username, email, password })
        // Add your registration logic here
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
                <h1 className="auth-title">Register</h1>

                <form onSubmit={handleRegister}>
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
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <div className="input-icon">
                            <Mail size={18} />
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

                    <div className="input-wrapper">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Re-enter Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className={!passwordsMatch ? "password-mismatch" : ""}
                            required
                        />
                        <div
                            className="input-icon"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            style={{ cursor: "pointer" }}
                        >
                            {showConfirmPassword ? <Unlock size={18} /> : <Lock size={18} />}
                        </div>
                    </div>
                    {!passwordsMatch && <div className="password-error">Passwords do not match</div>}

                    <button type="submit" className="auth-button">
                        Register
                    </button>

                    <div className="auth-footer">
                        Already have an account?
                        <Link to="/login" className="auth-link">
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

