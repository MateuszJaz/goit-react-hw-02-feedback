import React, {Component} from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
    
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = option => { 
    this.setState(prevState => ({[option]: prevState[option] + 1 }));
  };
  
  countTotalFeedback() {
    const {good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }
  
  render() {
    const {good, neutral, bad } = this.state;
    const options = Object.keys(this.state)
    return (
      <div>
        <Section title='Please leave feedback'>
          <FeedbackOptions 
            options={options} 
            onLeaveFeedback ={this.onLeaveFeedback}
          />
        </Section>
  
        <Section title='Statistics'>
          {this.countTotalFeedback() > 0 ? ( 
            <Statistics 
              good={good} 
              neutral={neutral} 
              bad={bad} 
              total={this.countTotalFeedback()} 
              positivePercentage={this.countPositiveFeedbackPercentage()} 
            /> 
          ) : ( 
            <Notification message="There is no feedback"/> 
          )}
        </Section>
      </div>
    )
  }
}