import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [Type, setType] = useState<QuestionType>("short_answer_question");

    const changeType = () => {
        setType((prevType) =>
            prevType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    };
    return (
        <div>
            <h3>
                {Type === "multiple_choice_question"
                    ? "Multiple Choice"
                    : "Short Answer"}
            </h3>
            <Button onClick={changeType}>Change Type</Button>
        </div>
    );
}
