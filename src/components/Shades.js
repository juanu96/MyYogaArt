import React from 'react'

export default function Shades (props) {
  return (
    <div className='flexshade shadow'>
      <div className='text-shadow'>
        Custom Desing
      </div>
      <div>
        {
            props.data.map(x => {
              if (x.type === 'closed') {
                return <div className={`itemscarpet dot ${x.color} ${x.done ? 'dot-true' : 'dot-false'}`} key={x.id} onClick={() => props.changeCarpet(x.color, x.id)} />
              } return null
            })
        }
      </div>
    </div>
  )
}
