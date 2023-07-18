import { useState, useEffect } from 'react'
import { Stack, Card, Form, Button, ButtonGroup, ToggleButton, Spinner, CloseButton } from 'react-bootstrap'

export default function Menu(props) {

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count => count + 1);
    }

    return (
        <Card body style={{ width: "400px" }}>
            <Stack direction="horizontal" style={{ justifyContent: "space-between", alignItems: "right" }}>
                <Card.Title>
                    Testing PINYIN
                </Card.Title>

                <CloseButton />
            </Stack>
            <Card.Body>
                <Stack gap={1}>
                    <Stack gap={2}>
                        <Form.Label style={{ fontSize: '50px' }}>鐘點費</Form.Label>
                        <Form.Control />
                    </Stack>
                    <Button onClick={handleClick}>SUBMIT {count} times clicked</Button>
                </Stack>

            </Card.Body>
        </Card>
    )
}