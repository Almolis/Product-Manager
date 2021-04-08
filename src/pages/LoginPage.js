import {Form, Button} from "react-bootstrap"
import {useState} from "react"
import axios from "axios"
import {useHistory} from "react-router-dom"

const LoginPage = () => {
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState("");
    const history = useHistory()

    function login(event){
        event.preventDefault();
        axios.post("http://localhost:4004/login", {username, password})
        .then(() => {history.push("/products")})
        .catch(error => console.log(error.message))
    };
    
    return (
        <div className="home-page"> 
            <h2>Welcome the Login Page!</h2>

            <Form onSubmit={login}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" value={username} onChange={(event)=> setUsername(event.target.value)} placeholder="Enter username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(event)=> setPassword(event.target.value)} placeholder="Password" />
                </Form.Group>
                
                <Button variant="success" type="submit"> Login </Button>
            </Form>
        </div>
    )
}

export default LoginPage