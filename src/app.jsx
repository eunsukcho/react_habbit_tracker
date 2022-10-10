import React, { Component } from 'react';
import Navbar from './components/navbar';
import Habits from './components/habits';
import InputHabit from './components/input';
import ResetHabits from './components/reset';

import './App.css';

class App extends Component {
  state = {
    habits : [
        { id : 1, name : 'Reading', count : 0 },
        { id : 2, name : 'Running', count : 0 },
        { id : 3, name : 'Coding', count : 0 },
    ], 
    total : 0
  }

  addTotalHabit = () => {

  }
  
  handleIncrement = habit => {
    const habits = [...this.state.habits]; // 새로운 배열에 Object를 생성함.
    const index = habits.indexOf(habit);
    habits[index].count++;

    this.setState({habits})  // {habits : habits} 키와 값이 동일할 경우 생략 가능
  }

  handleDecrement = habit => {
      const habits = [...this.state.habits]; // 새로운 배열에 Object를 생성함.
      const index = habits.indexOf(habit);
      const count = habits[index].count - 1;
      habits[index].count = count < 0 ? 0 : count;

      this.setState({habits})
  }

  handleDelete = habit => {
      /*const habits = [...this.state.habits]; // 새로운 배열에 Object를 생성함.
      const index = habits.indexOf(habit);
      delete habits[index]; */

      const habits = this.state.habits.filter(item => item.id !== habit.id);
      this.setState({habits})
  }

  render() {
    return (
      <>
        <Navbar total={this.state.habits.filter(item=> item.count > 0).length}></Navbar>
        <InputHabit></InputHabit>
        <Habits 
          habits={this.state.habits}
          onIncrement={this.handleIncrement} 
          onDecrement={this.handleDecrement} 
          onDelete={this.handleDelete} >
        </Habits>
        <ResetHabits></ResetHabits>
      </>
    );
  }
}

export default App;