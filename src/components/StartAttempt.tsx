import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [quizProgress, setQuizProgress] = useState<boolean>(false);

    const startQuiz = () => {
        if (attempts > 0) {
            setAttempts(attempts - 1);
            setQuizProgress(true);
        }
    };

    const stopQuiz = () => {
        setQuizProgress(false);
    };

    const mulligan = () => {
        setAttempts(attempts + 1);
    };
    return (
        <div>
            <h3>Attempts: {attempts}</h3>

            <Button
                onClick={startQuiz}
                disabled={quizProgress || attempts === 0}
            >
                Start Quiz
            </Button>

            <Button onClick={stopQuiz} disabled={!quizProgress}>
                Stop Quiz
            </Button>

            <Button onClick={mulligan} disabled={quizProgress}>
                Mulligan
            </Button>
        </div>
    );
}
