/** @format */

import ButtonComponent from "./Components/ButtonComponent"
import ImageComponent from "./Components/ImageComponent"
import "./App.css"

function App() {
  return (
    <div className='App'>
      <ButtonComponent label='Sidath' />
      <ButtonComponent label='Dabare' />
      <ImageComponent
        src='https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_960_720.jpg'
        alt='dog1'
      />
      <ImageComponent
        src='https://cdn.pixabay.com/photo/2016/02/26/16/32/bulldog-1224267_960_720.jpg'
        alt='dog2'
      />
    </div>
  )
}

export default App
