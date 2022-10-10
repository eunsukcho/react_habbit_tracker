import React, { Component } from 'react';
import Habit from './habit';

class habits extends Component {
    
    // 데이터를 가지고 있는 위치에서 핸들링 해주는것이 베스트 

    handleIncrement = habit => {
        this.props.onIncrement(habit);
    }

    handleDecrement = habit => {
        this.props.onDecrement(habit);
    }

    handleDelete = habit => {
        this.props.onDelete(habit);
    }

    render() {
        return (
            <div className="habits">
                <ul>
                    {
                                
                        // react에선 고유의 컴포넌트 key가 있어야한다.
                        // 기본적인 props key라는게 존재한다.
                        // 배열 index는 안되고, object의 고유한 key를 사용해야한다.
                         this.props.habits.map(habit => (
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
                </ul>
            </div>
        );
    }
}

export default habits;