import './App.css';
import { useState } from 'react';
import learners from './models/learners';
import Learner from './components/Learner';

function App() {
  const [allLearners, setAllLearners] = useState(learners);
  
  const [user, setUser] = useState({
    isLoggedIn: true,
    status: "hidden",
    content: null,
    active: true,
  });

  // Function to update the visibility status
  const updateState = () => {
    console.log('Currently Updating State');
    setUser(user => ({
      ...user,
      status: "visible",
    }));
  };

  // Function to update multiple attributes of the user state
  const updateMultiple = () => {
    console.log('Currently Updating State');
    setUser(user => ({
      ...user,
      status: "visible",
      content: "new Updated Content"
    }));
  };

  // Function to add a new learner
  const addLearner = () => {
    const newLearner = {
      name: "Jack Black",
      bio: "Ipsum cupidatat commodo id aliquip nulla incididunt. Est ex voluptate veniam aute ipsum elit eiusmod. Id id reprehenderit do nisi eiusmod aliqua elit ut. Et consequat eu consectetur commodo magna amet eu aute eu esse.",
      scores: [{ date: "2024-05-06", score: 68 }]
    };
    setAllLearners(prevLearners => [newLearner, ...prevLearners]);
  };

  // Function to reset the user state
  const resetUserState = () => {
    setUser({
      isLoggedIn: true,
      status: "hidden",
      content: null,
      active: true,
    });
    console.log("User state has been reset");
  };

  // Function to swap the entire user object
  const swapObj = () => {
    const newObject = {
      isLoggedIn: "swap",
      status: "swapping",
      content: "swapping",
      active: "should be swapped",
    };
    setUser(newObject);
    console.log('User updated:', newObject);
  };

  return (
    <div className="App">
      <div className="learners-container">
        {allLearners.map((learner) => (
          <Learner 
            key={learner.name} 
            learner={learner} 
            updateState={updateState} 
            updateMultiple={updateMultiple}  
            addLearner={addLearner}
            swapObj={swapObj}
          />
        ))}
      </div>
    </div>
  );
}

export default App;