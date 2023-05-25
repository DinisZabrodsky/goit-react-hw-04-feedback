
import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import Notification  from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  }

  addFeedback = ({target: {dataset: {name}}}) => {
    this.setState((pre) => ({
        [name]: pre[name] + 1,
    }))

    this.countTotalFeedback()
  }

  countTotalFeedback = () => {
    this.setState((pre) => ({
        total: pre.total + 1,
    }))
  }

  countPositiveFeedbackPercentage = () => {
    return (this.state.good)/(this.state.total) * 100
  }


render () {
    return (<div>
            <h1>Залишіть відгук</h1>
            <div>
              <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={this.addFeedback}/>
            </div>

            {
                this.state.total === 0 ? 
                <Notification  message="There is no feedback"/>: 
                <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.state.total} positivePercentage={this.countPositiveFeedbackPercentage}/>
            }
            </div>)}
};
