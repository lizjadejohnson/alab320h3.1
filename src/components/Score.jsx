import React from 'react';

// Receiving destructured score info as props from the Learner component,
// for each score being mapped over we are going to pass back a date and a score.

function Score({ score }) {
    return (
        <li>
            Date: {score.date}, Score: {score.score}
        </li>
    );
}

export default Score;
