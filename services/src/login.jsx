import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../utils/context/AuthContext";
import { loginUser } from "../services/authService";
import { COLORS } from "../../utils/constants";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Error: Please enter email and password");
      return;
    }
    setLoading(true);
    try {
      const userData = await loginUser({ email, password });
      login(userData);
      navigate("/dashboard");
    } catch (error) {
      alert("Login Failed: " + (error.message || "Invalid credentials"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      {/* Header with back button */}
      <div style={styles.header}>
        <button style={styles.backButton} onClick={() => navigate(-1)}>
          <span style={styles.icon} translate="no">
            ←
          </span>
        </button>
      </div>

      {/* Centered form */}
      <div style={styles.container}>
        <h1 style={styles.title}>Login to NabhaSeva</h1>
        <input
          style={styles.input}
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="username"
        />
        <input
          style={styles.input}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <button style={styles.button} onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <div style={styles.links}>
          <button
            style={styles.linkButton}
            onClick={() => navigate("/register")}
          >
            Register
          </button>
          <button
            style={styles.linkButton}
            onClick={() => navigate("/reset-password")}
          >
            Forgot Password?
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    height: "100vh",
    overflow: "hidden", // no scrolling
    display: "flex",
    flexDirection: "column", // header on top, form below
    backgroundColor: COLORS.background,
  },
  header: {
    padding: "16px",
    backgroundColor: COLORS.cardBackground,
    borderBottom: `1px solid ${COLORS.border}`,
    display: "flex",
    alignItems: "center",
  },
  backButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  icon: {
    fontSize: "24px",
    color: COLORS.textPrimary,
  },
  container: {
    flex: 1, // take remaining space
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // center vertically
    alignItems: "center", // center horizontally
    padding: "24px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: COLORS.textPrimary,
    marginBottom: "24px",
    textAlign: "center",
  },
  input: {
    border: `1px solid ${COLORS.border}`,
    borderRadius: "8px",
    padding: "12px",
    marginBottom: "16px",
    fontSize: "16px",
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: "320px",
    boxSizing: "border-box",
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: "14px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    width: "100%",
    maxWidth: "320px",
    marginTop: "8px",
  },
  links: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "16px",
    width: "100%",
    maxWidth: "320px",
  },
  linkButton: {
    background: "none",
    border: "none",
    color: COLORS.primary,
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default Login;
