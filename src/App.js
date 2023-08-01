import './App.css';
import { Component } from "react";

class App extends Component{
    state = {
      picture: null,
      name: null,
      surName: null,
      email: null
    }

    async componentDidMount() {
      //fetching user details using firebase auth api and setting it to the component's initial state
      const url = "https://api.randomuser.me/";
      const response = await fetch(url);
      const data = await response.json();

      this.setState({
        picture: data.results[0].picture.medium,
        name:data.results[0].name.first,
        surName:data.results[0].name.last,
        email: data.results[0].email 
      })
    }


    render(){
      return(
        <div>
          <img src={this.state.picture} width="120px" alt="gender"/>
          <h2>{this.state.name}</h2>
          <h2>{this.state.surName}</h2>
          <p>{this.state.email}</p>
        </div>
      )
    }
}


export default App;



//*************************
//random dog API
// import './App.css';
// import { Component } from "react";

// class App extends Component{
//   state = {
//     picture: null
//   } 

//   async componentDidMount() {
//     const url = "https://random.dog/woof.json";
//     const response = await fetch (url);
//     const data = await response.json();
//     this.setState({picture: data.url})
//   }


//   render() {
//     return(
//       <img src={this.state.picture} alt='dog' width="400px"/>
//     )
//   }
// }

// export default App;




//**************************
//Fox pictures fetch request
// import './App.css';
// import { Component } from "react";

// class App extends Component{
//   state = {
//     image : null
//   }

//   async componentDidMount() {
//     //fetching the fox picture using unsplash API and setting it to component's state
//     const link = "https://randomfox.ca/floof/";
//     const response = await fetch (link);
//     const data = await response.json();
//     this.setState({image: data.image})
//   }


//   render() {
//     return (
//       <div>
//         <img src={this.state.image} width="350px" alt="fox"/>
//       </div>
//     )
//   }
// }

// export default App;



//**********************************************
//API of quotes
//import './App.css';

//import { Component } from 'react';

// class App extends Component{

//   state = {
//     content : null,
//     author : null
//   }

//   async componentDidMount() {
//     const url = "https://api.quotable.io/random";
//     const response = await fetch (url);
//     const data = await response.json();
//     this.setState({content: data.content, author: data.author})
//   }

//   render() {
    
//     return(
//       <div>
//         <p>{this.state.content}</p>
//         <p>{this.state.author}</p>
//       </div>
//     )
//   }
// }

// export default App;




// *************************************
//Photos of tomato and avocado

/*import { Component } from "react";
import Avocado from './Avocado';
import Tomato from "./Tomato";

class App extends Component{

  state = {
    show: true,
  }

    render() {
      const btn = this.state.show ? "Tomato" : "Avocado";
      return(
        <div>
          <p>{this.state.show ? <Avocado /> : <Tomato />}</p>
          <button onClick={() => {this.setState({show: !this.state.show})}}>{btn}</button>
        </div>
      )
    }
}


export default App;
*/

