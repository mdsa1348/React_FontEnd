import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import downloadImage from './download.png';
import OIP from './OIP.jpeg';

import './Extra.css';

function Header() {
    return (
        <header>

            <img src={downloadImage} alt="It's a PNG" width={50} />
            <img src={OIP} alt="It's a JPEG" width={40} />
            <h1>I am excited to learn react.</h1>


        </header>
    )
}

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

const MyContainer = {
    margin: '5%',
   

    // Media query for screens with a maximum width of 600px
    '@media (max-width: 600px)': {
        margin: '10px', // Adjust margin for smaller screens
    },

    // Media query for screens with a minimum width of 1200px
    '@media (min-width: 1200px)': {
        margin: '30px', // Adjust margin for larger screens
    },
};

const Pad_mar = {

    marginTop: '10px',
};

const Card_padd = {

    marginRight: '-15px',
    marginLeft: '5px',
    marginBottom: '13px',

};

function Mycard(props) {
    console.log(props)

    return (
        <div  className="Mycard" style={Card}>
            <img src={props.img} alt="It's a PNG" style={Card.image} />
            <h4>{props.title}</h4>
            {props.body && <p>{props.body}</p>}
            <h6 className='Mycard_email'>{props.phone}</h6>
            <h6 className='Mycard_email'>{props.email}</h6>
        </div>
    )
}
const marginTop ={
    marginBottom:'6+-0px',
}

function Body() {
    return (
        <div style={marginTop}>
        <div style={Pad_mar}>
            <h3>Its an react Body.</h3>
            <Row>
                <Col xs={6} sm={6} md={3} lg={3} style={Card_padd}>
                    <Mycard
                        img={OIP}
                        title="Title 1"
                        body="Title 1 body"
                        phone="01610585100"
                        email="Mdsa1348@gmail.com"
                    />
                </Col>
                <Col xs={6} sm={6} md={3} lg={3} style={Card_padd}>
                <Mycard
                        img={OIP}
                        title="Title 2"
                        body="Title 2 body"
                        phone="01610585100"
                        email="Mdsa1348@gmail.com"
                    />
                </Col>
                <Col xs={6} sm={6} md={3} lg={3} style={Card_padd}>
                <Mycard
                        img={OIP}
                        title="Title 3"
                        body="Title 3 body"
                        phone="01610585100"
                        email="Mdsa1348@gmail.com"
                    />
                </Col>
                <Col xs={6} sm={6} md={3} lg={3} style={Card_padd}>
                <Mycard
                        img={OIP}
                        title="Title 4"
                        body="Title 4 body"
                        phone="01610585100"
                        email="Mdsa1348@gmail.com"
                    />
                </Col>
            </Row>

        </div>
        </div>
    )
}
const Footer = () => {
    const footerStyle = {
        textAlign: 'center',
        padding: '6px',
        position: 'fixed',
        bottom: '0',
        width: '100%',
        backgroundColor: 'lightgray',
    };

    return (
        <footer style={footerStyle}>
            <p className="default-text">Default Footer Text</p>
            <p className="small-screen-text">Footer Text for Small Screens</p>
            <p className="large-screen-text">Footer Text for Large Screens</p>
        </footer>
    );
};


function Extra() {
    return (
        <>
            <div style={MyContainer}>
                <Header />
                <Body />

            </div>
            <Footer />
        </>
    )
}

export default Extra;