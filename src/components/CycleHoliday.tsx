import React, { useState } from "react";
import { Button } from "react-bootstrap";

const holidays = [
    { name: "Easter", emoji: "🐰" },
    { name: "4th of July", emoji: "🎆" },
    { name: "Halloween", emoji: "🎃" },
    { name: "Christmas", emoji: "🎄" },
    { name: "Valentines", emoji: "💞" }
];

// Define alphabetical order for cycling
const holidaysAlphabetically = [
    { name: "Christmas", emoji: "🎄" },
    { name: "Easter", emoji: "🐰" },
    { name: "Halloween", emoji: "🎃" },
    { name: "4th of July", emoji: "🎆" },
    { name: "Valentines", emoji: "💞" }
];

// Define chronological order for cycling (yearly)
const holidaysByYear = [
    { name: "Valentines", emoji: "💞" },
    { name: "Easter", emoji: "🐰" },
    { name: "4th of July", emoji: "🎆" },
    { name: "Halloween", emoji: "🎃" },
    { name: "Christmas", emoji: "🎄" }
];

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<{
        name: string;
        emoji: string;
    }>(holidays[0]);

    const cycleAlphabetically = () => {
        const currentIndex = holidaysAlphabetically.findIndex(
            (holiday) => holiday.name === currentHoliday.name
        );
        const nextHoliday =
            holidaysAlphabetically[
                (currentIndex + 1) % holidaysAlphabetically.length
            ];
        setCurrentHoliday(nextHoliday);
    };

    const cycleByYear = () => {
        const currentIndex = holidaysByYear.findIndex(
            (holiday) => holiday.name === currentHoliday.name
        );
        const nextHoliday =
            holidaysByYear[(currentIndex + 1) % holidaysByYear.length];
        setCurrentHoliday(nextHoliday);
    };
    return (
        <div>
            <h3>Holiday: {currentHoliday.emoji}</h3>
            <Button onClick={cycleAlphabetically}>Advance by Alphabet</Button>
            <Button onClick={cycleByYear}>Advance by Year</Button>
        </div>
    );
}
