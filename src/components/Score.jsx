import React from 'react';

// Receiving destructured score info as props from the Learner component,
// for each score being mapped over we are going to pass back a date and a score.

function Score({ score }) {
    const unpackedDate = score.date.split("-");
    const unpackedYear = parseInt(unpackedDate[0], 10); // Splice just the year and parse as an integer
    console.log(unpackedDate)
    console.log(unpackedYear)
    const scoreClassName = score.score > 85 ? 'score-high' : score.score < 70 ? 'score-low' : 'black';
    const dateClassName = unpackedYear > 2018 ? 'date-yellow' : '';

    console.log(dateClassName); // This should log 'date-yellow' if the year is after 2019


    return (
        <li>
            {/* Apply conditional class to the date */}
            <span className={dateClassName}>Date: {score.date}</span>, <span className={scoreClassName}>Score: {score.score}</span>
        </li>
    );
}

export default Score;
