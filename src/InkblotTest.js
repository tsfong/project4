import React from "react"
import { useState } from "react";
import "./InkblotTest.css";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import inkblot1 from "./images/inkblot1.jpeg";

const InkblotTest = () => (
    <>
    <div className="card-container">
    <Card style={{ width: '60rem' }}>
  <Card.Img variant="top" src={inkblot1} />
  <Card.Body>
    <Card.Title>Inkblot I</Card.Title>
    <Card.Text className="text-box">
      What do you see?
    </Card.Text>
    <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>First Name:</Form.Label>
    <Form.Control type="first-name" placeholder="Bob" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Response:</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
  </Card.Body>
</Card>

{/* NEXT CARD */}

    <Card style={{ width: '60rem' }}>
  <Card.Img variant="top" src="./images/inkblot2.jpeg" alt="pic" />
  <Card.Body>
    <Card.Title>Inkblot II</Card.Title>
    <Card.Text>
      What do you see?
    </Card.Text>
    <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>First Name:</Form.Label>
    <Form.Control type="first-name" placeholder="Bob" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Response:</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
  </Card.Body>
</Card>

{/* NEXT CARD */}

<Card style={{ width: '60rem' }}>
  <Card.Img variant="top" src="./images/inkblot3.jpeg" />
  <Card.Body>
    <Card.Title>Inkblot III</Card.Title>
    <Card.Text className="text-box">
      What do you see?
    </Card.Text>
    <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>First Name:</Form.Label>
    <Form.Control type="first-name" placeholder="Bob" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Response:</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
  </Card.Body>
</Card>

{/* NEXT CARD */}

<Card style={{ width: '60rem' }}>
  <Card.Img variant="top" src="./images/inkblot4.jpeg" />
  <Card.Body>
    <Card.Title>Inkblot IV</Card.Title>
    <Card.Text className="text-box">
      What do you see?
    </Card.Text>
    <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>First Name:</Form.Label>
    <Form.Control type="first-name" placeholder="Bob" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Response:</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
  </Card.Body>
</Card>

{/* NEXT CARD */}

<Card style={{ width: '60rem' }}>
  <Card.Img variant="top" src="./images/inkblot5.jpeg" />
  <Card.Body>
    <Card.Title>Inkblot V</Card.Title>
    <Card.Text className="text-box">
      What do you see?
    </Card.Text>
    <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>First Name:</Form.Label>
    <Form.Control type="first-name" placeholder="Bob" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Response:</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
  </Card.Body>
</Card>

{/* NEXT CARD */}

<Card style={{ width: '60rem' }}>
  <Card.Img variant="top" src="./images/inkblot6.jpeg" />
  <Card.Body>
    <Card.Title>Inkblot VI</Card.Title>
    <Card.Text className="text-box">
      What do you see?
    </Card.Text>
    <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>First Name:</Form.Label>
    <Form.Control type="first-name" placeholder="Bob" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Response:</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
  </Card.Body>
</Card>

{/* NEXT CARD */}

<Card style={{ width: '60rem' }}>
  <Card.Img variant="top" src="./images/inkblot7.jpeg" />
  <Card.Body>
    <Card.Title>Inkblot VII</Card.Title>
    <Card.Text className="text-box">
      What do you see?
    </Card.Text>
    <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>First Name:</Form.Label>
    <Form.Control type="first-name" placeholder="Bob" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Response:</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
  </Card.Body>
</Card>

{/* NEXT CARD */}

<Card style={{ width: '60rem' }}>
  <Card.Img variant="top" src="./images/inkblot8.jpeg" />
  <Card.Body>
    <Card.Title>Inkblot VIII</Card.Title>
    <Card.Text className="text-box">
      What do you see?
    </Card.Text>
    <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>First Name:</Form.Label>
    <Form.Control type="first-name" placeholder="Bob" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Response:</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
  </Card.Body>
</Card>

{/* NEXT CARD */}

<Card style={{ width: '60rem' }}>
  <Card.Img variant="top" src="./images/inkblot9.jpeg" />
  <Card.Body>
    <Card.Title>Inkblot IX</Card.Title>
    <Card.Text className="text-box">
      What do you see?
    </Card.Text>
    <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>First Name:</Form.Label>
    <Form.Control type="first-name" placeholder="Bob" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Response:</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
  </Card.Body>
</Card>

{/* NEXT CARD */}

<Card style={{ width: '60rem' }}>
  <Card.Img variant="top" src="./images/inkblot10.jpeg" />
  <Card.Body>
    <Card.Title>Inkblot X</Card.Title>
    <Card.Text className="text-box">
      What do you see?
    </Card.Text>
    <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>First Name:</Form.Label>
    <Form.Control type="first-name" placeholder="Bob" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Response:</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
  </Card.Body>
</Card>

{/* NEXT CARD */}

</div>
</>
);

export default InkblotTest;

// export default function InkblotTest() {
//     const [toggle, setToggle] = useState("1");
//         return (
//         <div className="inkblot-test" id={'inkblot-test'}>
//         {inkblots.map(({ title, text, key, img }) => {
//           return (
//             <>
//               <div className="main">
//                 <div className="text">
//                   <h1 onClick={() => setToggle(key)}>{title} </h1>
//                   {toggle === key ? (
//                     <>
//                       <p>{text}</p>
//                     </>
//                   ) : null}
//                 </div>
  
//                 <div className="img">
//                   {toggle === key ? (
//                     <>
//                       <img src={img} key={key} className="photo" alt="pic" />
//                     </>
//                   ) : null}
//                 </div>
              
//                 <div className="form">
//                     {toggle === key ? (
//                     <>
//               <form>
//                   <label>
//                       Answer:&nbsp;
//                       <input type="text" name="answer" />
//                   </label>
//                   <input type="submit" value="Submit" />
//               </form>
//               </>
//                     ) : null}
          
//               </div>
//             </div>  
//             </>
//           );
//         })}
//       </div>
//     );
//   }
// const inkblots = [
//     {
//       id: "1",
//       key: "1",
//       title: "Card 1",
//       text: "What do you see?",
//       img: "./images/inkblot1.jpeg"
//     },
//     {
//       id: "2",
//       key: "2",
//       title: "Card 2",
//       text: "What do you see?",
//       img: "./images/inkblot2.jpeg"
//     },
//     {
//       id: "3",
//       key: "3",
//       title: "Card 3",
//       text: "What do you see?",
//       img: "./images/inkblot3.jpeg"
//     },
//     {
//       id: "4",
//       key: "4",
//       title: "Card 4",
//       text: "What do you see?",
//       img: "./images/inkblot4.jpeg"
//     },
//     {
//         id: "5",
//         key: "5",
//         title: "Card 5",
//         text: "What do you see?",
//         img: "./images/inkblot5.jpeg"
//       },
//       {
//         id: "6",
//         key: "6",
//         title: "Card 6",
//         text: "What do you see?",
//         img: "./images/inkblot6.jpeg"
//       },
//       {
//         id: "7",
//         key: "7",
//         title: "Card 7",
//         text: "What do you see?",
//         img: "./images/inkblot7.jpeg"
//       },
//       {
//         id: "8",
//         key: "8",
//         title: "Card 8",
//         text: "What do you see?",
//         img: "./images/inkblot8.jpeg"
//       },
//       {
//         id: "9",
//         key: "9",
//         title: "Card 9",
//         text: "What do you see?",
//         img: "./images/inkblot9.jpeg"
//       },
//       {
//         id: "10",
//         key: "10",
//         title: "Card 10",
//         text: "What do you see?",
//         img: "./images/inkblot10.jpeg"
//       },
//   ];
  
  




