import React, { Component } from 'react';
import Navbar from './components/navbar';
import Habits from './components/habits';
import InputHabit from './components/input';
import ResetHabits from './components/reset';

import './app.css';

class app extends Component {
  state = {
    habits : [
        { id : 1, name : 'Reading2', count : 0 },
        { id : 2, name : 'Running2', count : 0 },
        { id : 3, name : 'Coding2', count : 0 },
    ], 
    total : 0
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <InputHabit></InputHabit>
        <Habits 
          all={this.state.habits}>
        </Habits>
        <ResetHabits></ResetHabits>
      </div>
    );
  }
}

export default app;