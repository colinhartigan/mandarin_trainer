import { useState, useEffect } from 'react'
import { Stack, Card, Form, Button, ButtonGroup, ToggleButton } from 'react-bootstrap'
import data from './dictionary.json'

export default function Menu(props) {

    const [given, setGiven] = useState("")
    const [want, setWant] = useState("")
    const [set, setSet] = useState("")


    const answerTypes = [
        {
            name: "Pinyin",
            value: "pinyin"
        },
        {
            name: "Character",
            value: "character",
        },
        {
            name: "Definition",
            value: "definition"
        }
    ]

    return (
        <Card body style={{ width: "400px" }}>
            <Card.Title>
                Mandarin Trainer BETA零
            </Card.Title>
            <Card.Body>
                <Stack gap={3}>

                    <Stack gap={1}>
                        <Form.Select aria-label="WordSet" value={set} onChange={(event) => setSet(event.target.value)} >
                            {data.sets.map((set) => (
                                <option key={set.setName} value={set.setName}>{set.setName}</option>
                            ))}
                        </Form.Select>
                        <Button>
                            Review Set
                        </Button>
                    </Stack>

                    <Stack direction="horizontal" gap={3} style={{ justifyContent: "space-between", alignItems: "center" }}>

                        <Stack>
                            <h6 style={{ textAlign: "center" }}>Given</h6>
                            <ButtonGroup vertical>
                                {answerTypes.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        id={`given-${idx}`}
                                        type="radio"
                                        name="given"
                                        value={radio.value}
                                        checked={given === radio.value}
                                        onChange={(e) => setGiven(e.currentTarget.value)}
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                        </Stack>

                        <Stack>
                            <h6 style={{ textAlign: "center" }}>Test for</h6>
                            <ButtonGroup vertical>
                                {answerTypes.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        id={`want-${idx}`}
                                        type="radio"
                                        name="want"
                                        value={radio.value}
                                        checked={want === radio.value}
                                        onChange={(e) => setWant(e.currentTarget.value)}
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                        </Stack>

                    </Stack>

                    <Button variant="success" onClick={() => {

                    }}>
                        GO!
                    </Button>

                </Stack>
            </Card.Body>
        </Card>
    )
}