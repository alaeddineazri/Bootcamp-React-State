import react  from 'react'
import info from './info';
import './App.css'

class App extends react.Component {
  constructor() {
    super();
    this.state = {info , show:true,timer:0}
  }


  toggle = () =>
  this.setState((state) => ({ show: !state.show }));

  componentDidMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({ timer: this.state.timer + 1});
      }, 1000),
    });
  }

  render() { 
    return ( 
      <div className='App'>
        <div className='commandeContainer'>
        <button className='btn' onClick={this.toggle}>{this.state.show==true ? 'Hidden':'Visible'}<h2 className='timer' >{this.state.timer}</h2></button>
        
        </div>
        <div>
        {this.state.show ?
        <div className='profile'>
            <div className='imgContainer'>
                <img className= 'img' src={this.state.info.imgSrc} alt="profile image" />
            </div>
            <div className='infoContainer'>
                <h1 style={{color:'red'}} >  {this.state.info.fullName}</h1>
                <h2> Age :{this.state.info.age}</h2>
                <h2> Profession :{this.state.info.profession}</h2>
                <p>{this.state.info.bio} </p>
            </div>
        </div>
        : null}
        </div>
      </div>
    )
  }
}
export default App;



