import React, {useState} from 'react';
import "../assets/Form.css"

const Form = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errorUserName, setErrorUserName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

    const [userColor, setUserColor] = useState("");
    const [emailColor, setEmailColor] = useState("");
    const [passwordColor, setPasswordColor] = useState("");
    const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

    const handleValidate = (e) => {
        e.preventDefault()
        if (username.length < 8) {
            setErrorUserName("Username must be at least 8 characters long");
            setUserColor("red");
        } else {
            setErrorUserName("");
            setUserColor("green");
        }
        if (!email.endsWith("@gmail.com")) {
            setErrorEmail("Email must end with @gmail.com");
            setEmailColor("red");
        } else {
            setErrorEmail("");
            setEmailColor("green");
        }
        if (password.length < 8) {
            setErrorPassword("Password must be at least 8 characters long");
            setPasswordColor("red");
        } else {
            setErrorPassword("");
            setPasswordColor("green");
        }
        if (password === confirmPassword && confirmPassword !== "" && password !== "") {
            setErrorConfirmPassword("");
            setConfirmPasswordColor("green");
        } else {
            setErrorConfirmPassword("Passwords do not match");
            setConfirmPasswordColor("red");
        }
    }

    return (
        <>
        <div className={"card"}>
            <div className="card-image"></div>
            <form>
                <input
                    type={"text"}
                    value={username}
                    placeholder={"Username"}
                    onChange={e => setUserName(e.target.value)}
                    style={{borderColor: userColor}}
                >
                </input>
                <p className={"error"} color={userColor}>{errorUserName}</p>
                <input
                    type={"email"}
                    value={email}
                    placeholder={"Email"}
                    onChange={e => setEmail(e.target.value)}
                    style={{borderColor: emailColor}}
                >
                </input>
                <p className={"error"} color={emailColor}>{errorEmail}</p>
                <input
                    type={"password"}
                    value={password}
                    placeholder={"Password"}
                    onChange={e => setPassword(e.target.value)}
                    style={{borderColor: passwordColor}}
                >
                </input>
                <p className={"error"} color={passwordColor}>{errorPassword}</p>
                <input
                    type={"password"}
                    value={confirmPassword}
                    placeholder={"Confirm Password"}
                    onChange={e => setConfirmPassword(e.target.value)}
                    style={{borderColor: confirmPasswordColor}}
                >
                </input>
                <p className={"error"} color={confirmPasswordColor}>{errorConfirmPassword}</p>
                <button className={"submit-btn"} onClick={handleValidate}>Submit</button>
            </form>
        </div>
        </>
    );
};

export default Form;