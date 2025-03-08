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
    const [leftDie, setLeftDie] = useState<number>(d6());
    const [rightDie, setRightDie] = useState<number>(d6());

    const rollLeftDie = () => {
        setLeftDie(d6());
    };

    const rollRightDie = () => {
        setRightDie(d6());
    };

    const isGameLost = leftDie === 1 && rightDie === 1;
    const isGameWon = leftDie === rightDie && leftDie !== 1;
    return (
        <div>
            <h3>Roll the Dice</h3>
            <div data-testid="left-die">Left Die: {leftDie}</div>
            <div data-testid="right-die">Right Die: {rightDie}</div>

            {isGameLost && <p>Lose</p>}
            {isGameWon && <p>Win</p>}
            <Button onClick={rollLeftDie}>Roll Left</Button>
            <Button onClick={rollRightDie}>Roll Right</Button>
        </div>
    );
}
