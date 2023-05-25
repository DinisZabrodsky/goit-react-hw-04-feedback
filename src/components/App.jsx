
import { useState } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import Notification  from './Notification/Notification';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     total: 0,
//   }

// function reducer (state, action) {
//    console.log({
//      ...state, 
//     })
// }

export function App () {

  const [Feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  })
  

  const addFeedback = ({ target: { dataset: { name } } }) => {
    setFeedback((prev) => {
     return{
      ...prev,
      [name]: prev[name] + 1,
      total: prev.total + 1
    }

    })
  };


  const  countPositiveFeedbackPercentage = () => {
    return (Feedback.good)/(Feedback.total) * 100
  }


    return (<div>
              <h1>Залишіть відгук</h1>
            <div>
              <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={addFeedback}/>
            </div>

            {
                Feedback.total === 0 ? 
                <Notification  message="There is no feedback"/>: 
                <Statistics good={Feedback.good} neutral={Feedback.neutral} bad={Feedback.bad} total={Feedback.total} positivePercentage={countPositiveFeedbackPercentage}/>
            }
            </div>)
};
