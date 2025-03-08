import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isVisible, setVisible] = useState<boolean>(false);

    const answerVisibility = () => {
        setVisible(!isVisible);
    };

    return (
        <div>
            <Button onClick={answerVisibility}>Reveal Answer</Button>
            {isVisible && <h3>42</h3>}
        </div>
    );
}
