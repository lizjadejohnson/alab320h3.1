import React from 'react'
import Score from './Score';

// OBJECTIVE:
    // Code the <Learner> component so that it:

    // Renders the learners's name & bio properties.
    // Renders a <Score> component for each score object in the learner's scores property.
    // Code the <Score> component so that it renders the score object's date & score properties.



//We're creating a div for a single learner
//We're being passed the info for each individual learner as props from the map function we made in App.js:

function Learner({ learner }) {
    return (
      <div className='learner-container'>
        <h2>{learner.name}</h2>
        <p>{learner.bio}</p>
        <ul>
          {/* Mapping over the score array for the learner, passing the destructured
          scores as props to the Score component*/}
          {learner.scores.map((score, index) => (
            <Score key={index} score={score} />
          ))}
        </ul>
      </div>
    );
}

export default Learner
