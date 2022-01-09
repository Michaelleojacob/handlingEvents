import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//? ==============================================
//? < activateLasers exmaple v1 >

// function activateLasers(e) {
//   console.log('this was clicked!');
// }

// class ActivateLaserBtn extends React.Component {
//   render() {
//     return <button onClick={activateLasers}>ActivateLasers</button>;
//   }
// }

// const App = () => {
//   return (
//     <div>
//       <ActivateLaserBtn />
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.getElementById('root'));

//? </ activateLasers exmaple v1 >
//? ==============================================

//todo ==============================================
//todo < toggle example >

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isToggleOn: true };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState((prevState) => ({
//       isToggleOn: !prevState.isToggleOn,
//     }));
//   }
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }
// ReactDOM.render(<Toggle />, document.getElementById('root'));

//todo </ toggle example >
//todo ==============================================

//todo ==============================================
//todo < arrow function to avoid needing to use .bind(this) >

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }
  handleClick = () => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
ReactDOM.render(<Toggle />, document.getElementById('root'));

//todo </ arrow function to avoid needing to use .bind(this) >
//todo ==============================================

//todo ==============================================
//todo < invoking the function on the onClick instead of using a callback >

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isToggleOn: true };
//   }
//   handleClick() {
//     this.setState((prevState) => ({
//       isToggleOn: !prevState.isToggleOn,
//     }));
//   }
//   render() {
//     return (
//       <button onClick={() => this.handleClick()}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }
// ReactDOM.render(<Toggle />, document.getElementById('root'));

//todo </ invoking the function on the onClick instead of using a callback >
//todo ==============================================

//?
//Passing Arguments to Event Handlers

{
  /* <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button> */
}
{
  /* <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> */
}
//?
