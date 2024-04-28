import React from 'react';
import First from '../images/12341.jpg';


const Card = {
    backgroundColor: 'lightblue',
    borderRadius: '12px',
    padding: '10px',
    border: '1px solid #ccc',
    image: {
        width: '100%', // Set the width to 100% to make it responsive
        height: 'auto', // Maintain aspect ratio
        borderRadius: '10px',
    },
};

function Mycard(props) {
    console.log(props.title);

    return (
        <div className="Mycard" style={Card}>
            <img src={`../images/${props.img}`} alt="It's a PNG" style={Card.image} />
            <img src={props.img} alt="It's a PNG" style={Card.image} />
            <h4>{props.title}</h4>
            {props.body && <p>{props.body}</p>}
        </div>
    );
}
function Mycard1(props) {
    console.log(props.title);

    return (
        <div className="Mycard" style={Card}>
            
            <img src={props.img} alt="It's a PNG" style={Card.image} />
            <h4>{props.title}</h4>
            {props.body && <p>{props.body}</p>}
        </div>
    );
}

function Body() {
    return (
        <div>
            <h1>Thats a Body title </h1>
            <Mycard 
                img="12341.jpg"
                title="Title 1"
                body="Title 1 body" 
            />
            <Mycard1 
                img={First}
                title="Title 1"
                body="Title 1 body" 
            />
        </div>
    );
}

function Gallary() {
    return <Body />;
}

export default Gallary;
