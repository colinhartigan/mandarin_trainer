import { useState, useEffect } from 'react'
import { Stack, Card, Form, Button, ButtonGroup, ToggleButton } from 'react-bootstrap'

import Menu from "./components/Menu"
import TestingZone from "./components/TestingZone"

function App() {

  

  return (
    <div style={{ width: "100vw", height: "100vh" }}>

      <Stack style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
          <Menu />
        <TestingZone />
      </Stack>


      {/* <Container className="w-full h-full">
          <Row>
            <Col xs="6">
              <Card>
                <Card.Img />
                <Card.Body>
                  <Card.Title>
                    Eric Website
                  </Card.Title>
                  <Card.Text>
                    yeah you heard that
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6">
              <body>
                Words here
              </body>
            </Col>
          </Row>
        </Container>
        <Alert variant="secondary">This button has been pressed {count} times</Alert>
        <Button onClick={doThing}>Test Button 2</Button>
        <body>the number is {isEven ? 'even' : 'not even'}</body> */}

    </div >
  );
}

export default App;
