import React, { useEffect } from 'react'

export default function PrincipalCarpet (props) {
  useEffect(() => {
    // preloading image
    props.data.forEach((items) => {
      const img = new Image()
      img.src = items.url
    })
  }, [])

  return (
    <div className='carpetbg'>

      {
                props.data.map(data => {
                  if (data.type === 'opened') {
                    return (
                      <div key={data.id}>

                        <img className={`principal-img ${data.done ? 'show-img' : 'hide-img'}`} src={data.url} />

                      </div>
                    )
                  } return null
                })
            }
    </div>
  )
}
