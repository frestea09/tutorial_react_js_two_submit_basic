import React from 'react'
import Header from './Component/Header'
import Content from './Component/Content'
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      'bilanganKedua' : 0,
      'bilanganPertama': 0
    }
    this.setBilanganPertama = this.setBilanganPertama.bind(this)
    this.setBilanganKedua = this.setBilanganKedua.bind(this)
    this.sayVariable = this.sayVariable.bind(this)
  }
  setBilanganPertama(inputBilanganPertama){
      this.setState(
        {
          'bilanganPertama' : inputBilanganPertama.target.value
        }
      )
    }
  setBilanganKedua(inputBilanganKedua){
    this.setState(
      {
        bilanganKedua : inputBilanganKedua.target.value
      }
    )
  }
  sayVariable(){
    let hasil = Number(this.state.bilanganPertama) + Number(this.state.bilanganKedua)
    alert(hasil)
  }
  render(){
    return(
      <div className='App'>
        <Header/>
        <Content bilanganPertama = {this.state.bilanganPertama} bilanganKedua = {this.state.bilanganKedua} setBilanganPertama = {this.setBilanganPertama} setBilanganKedua={this.setBilanganKedua} sayVariable = {this.sayVariable}/>
      </div>
    )
  }
}
export default App