import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email, password)
        try {
            const response = await fetch("https://silver-space-zebra-7vwjr5w569qjcx49p-3001.app.github.dev/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "email": email,
                    "password": password,
                })
            })
            console.log(response)
            
     
            if (response.status == 201) {
                navigate("/demo")
            } else {
                alert("usuario ya esta registrado")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="container">
            <div>
                <h1>Registro</h1>
            </div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-primary">Registro</button>
            </form>

        </div>
    )
}


export default Register