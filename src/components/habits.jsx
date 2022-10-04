import React, { Component } from 'react';
import Habit from './habit';

class habits extends Component {
    
    // 데이터를 가지고 있는 위치에서 핸들링 해주는것이 베스트 

    handleIncrement = habit => {
        const habits = [...this.props.all]; // 새로운 배열에 Object를 생성함.
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({habits})  // {habits : habits} 키와 값이 동일할 경우 생략 가능
    }

    handleDecrement = habit => {
        const habits = [...this.props.all]; // 새로운 배열에 Object를 생성함.
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

    handleIncrement2 = habit => {
        console.log(`habit2 : ${JSON.stringify(habit)}`)
    }


    render() {
        return <ul>
            {
                
                // react에선 고유의 컴포넌트 key가 있어야한다.
                // 기본적인 props key라는게 존재한다.
                // 배열 index는 안되고, object의 고유한 key를 사용해야한다.
                this.props.all.map(habit => (
                <Habit 
                    key={habit.id}
                    habit={habit} 
                    onIncrement={this.handleIncrement} 
                    onDecrement={this.handleDecrement} 
                    onDelete={this.handleDelete} />
                ))   
                // 특정 버튼이 클릭되면 전달해준 실행되어야 하는 함수를 콜백함수로 등록
                // handleIncrement가 가르키고있는 함수의 참조값만 onIncrement라는 prop으로 전달함
            }
            
        </ul>;
    }
}

export default habits;