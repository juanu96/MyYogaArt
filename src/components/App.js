import React, { useState } from 'react'
import { hot } from 'react-hot-loader'
import './App.scss'
import imagenes from './data/Data.json'
import Items from './ItemsCarpet'
import PrincipalCarpet from './PrincipalCarpet'
import Shades from './Shades'

function App () {
  const [images, setimages] = useState(imagenes)

  const changeCarpet = (color, id) => {
    const updateData = images.filter(data => {
      if (data.done === true && data.type === 'closed') {
        data.done = !data.done
      }

      if (data.done === true && data.type === 'opened') {
        data.done = !data.done
      }

      if (data.color === color && data.type === 'closed') {
        data.done = !data.done
      }

      if (data.color === color && data.type === 'opened') {
        data.done = !data.done
      }

      return data
    })

    setimages(updateData)
  }

  return (
    <div>
      <div className='flex'>
        <div className='showcarpet'>
          <Shades data={images} changeCarpet={(x, y) => changeCarpet(x, y)} />
          <PrincipalCarpet data={images} changeCarpet={(x, y) => changeCarpet(x, y)} />
        </div>
        <div className='selectcarpet'>
          <Items data={images} changeCarpet={(x, y) => changeCarpet(x, y)} />
        </div>
      </div>
    </div>
  )
}

export default hot(module)(App)
