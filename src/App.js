
import './App.css';
import { useState } from 'react';
import learners from './models/learners';
import Learner from './components/Learner'

function App() {
  // Use the provided array of "learner" data (in models/learners) to initialize state
  //as an object with a learners key in the <App> component.
  // Initialize state with the learners data
  const [allLearners, setAllLearners] = useState(learners);

  return (
    <div className="App">
      <div className="learners-container">
        {/* Map over the allLearners state (which is really just the learner data right now) */}
        {allLearners.map((learner) => (
          // For each learner mapped over, we will set the key to the learner name
          //and learner to the whole info for each learner and pass as props into the Learner component.
          <Learner key={learner.name} learner={learner} />
        ))}
      </div>
    </div>
  );
}

export default App;
