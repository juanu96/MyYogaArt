import React from 'react'

export default function ItemsCarpet (props) {
  return (
    <div className='childitems'>
      {
                props.data.map(x => {
                  if (x.type === 'closed' && x.done === false) {
                    return (
                      <div className='itemscarpet' key={x.id}>
                        <img src={x.url} onClick={() => props.changeCarpet(x.color, x.id)} />
                      </div>
                    )
                  } return null
                })
            }
    </div>
  )
}
