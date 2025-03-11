import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const firstRoll = d6();
    let secondRoll = d6();
    if (firstRoll === secondRoll) {
        secondRoll = (firstRoll % 6) + 1;
    }

    const [leftDie, setLeftDie] = useState<number>(firstRoll);
    const [rightDie, setRightDie] = useState<number>(secondRoll);

    let message = "";
    if (leftDie === rightDie) {
        message = leftDie === 1 ? "Lose" : "Win";
    }

    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <Button
                onClick={() => {
                    setLeftDie(d6());
                }}
            >
                Roll Left
            </Button>

            <span data-testid="right-die">{rightDie}</span>
            <Button
                onClick={() => {
                    setRightDie(d6());
                }}
            >
                Roll Right
            </Button>

            {message && <div>{message}</div>}
        </div>
    );
}
