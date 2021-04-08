import {useState, useEffect} from "react"
import axios from "axios"
import {Card} from "react-bootstrap"

const ProductsPage = () => {
    const [laptops, setLaptops] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4004/products")
        .then(response => setLaptops(response.data))
        .catch(error => console.log(error.message))
    }, [])
    

    return (
        <div className="home-page"> 
            <h2>Welcome to the Products Page!</h2>
            {laptops.map(laptop => { 
                return  <Card border="dark" style={{ width: '18rem' }}>
                        <Card.Header>{laptop.articleNo}</Card.Header>
                        <Card.Body>
                        <Card.Title>{laptop.name} </Card.Title>
                        <Card.Text> {laptop.description}</Card.Text>
                        <Card.Text> {laptop.price}</Card.Text>
                        </Card.Body>
                    </Card> 
            }
                
            )}
           
        </div>
    )
}

export default ProductsPage