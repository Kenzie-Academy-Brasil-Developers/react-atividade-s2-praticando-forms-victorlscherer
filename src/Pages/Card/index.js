import './style.css'

const Card = ({ data }) => {

    console.log(data);

    return (
        <div className="cardContainer">
            <h1>Dados de usuário</h1>
            <div className="dataContainer">
                <p>Username: {data.username}</p>
                <p>Complete Name: {data.completeName}</p>
                <p>Email: {data.email} </p>
                <p>Password: {data.password} </p>
            </div>
        </div>
    )
}

export default Card;