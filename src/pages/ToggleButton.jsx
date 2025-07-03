import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [bgColor, setBgColor] = useState("#f0f0f0");
  const [message, setMessage] = useState("👋 Hello, I am visible!");

  const toggleText = () => {
    setIsVisible((prev) => !prev);

    // Change background color randomly on show
    if (!isVisible) {
      const newColor = getRandomColor();
      setBgColor(newColor);
    }
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div style={{ ...styles.container, backgroundColor: bgColor }}>
      <h1>🎯 Toggle Project</h1>

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
        style={styles.input}
      />

      <button onClick={toggleText} style={styles.button}>
        {isVisible ? "Hide" : "Show"} Text
      </button>

      <div style={{ ...styles.fadeBox, opacity: isVisible ? 1 : 0 }}>
        <p style={styles.text}>{message}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
    minHeight: "100vh",
    transition: "background-color 0.6s ease",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "300px",
  },
  button: {
    padding: "12px 24px",
    fontSize: "18px",
    margin: "10px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#fff",
    transition: "background-color 0.3s ease",
  },
  fadeBox: {
    transition: "opacity 0.6s ease",
    height: "50px",
    marginTop: "30px",
  },
  text: {
    fontSize: "22px",
    color: "#222",
  },
};

export default App;
