import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
      { 
        id: 1,
        title:'Gray chair',
        img: 'chair-grey.jpeg',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
        category: 'chairs',
        price: '49.99'
      },
      { 
        id: 2,
        title:'Table',
        img: 'table.webp',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
        category: 'tables',
        price: '149.99'
      },
      { 
        id: 3,
        title:'Sofa',
        img: 'sofa.jpeg',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
        category: 'sofas',
        price: '449.99'
      },
      {
        id: 4,
        title:'Wall light',
        img: 'wall-light.jpeg',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
        category: 'Lights',
        price: '99.99'
      }

      ]
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items}/>
        <Footer />
      </div>
    )
  }
}

export default App;
