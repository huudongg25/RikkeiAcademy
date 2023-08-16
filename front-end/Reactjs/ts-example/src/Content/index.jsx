import React from 'react'

function Content(p) {
  return (
    <div>
      <h1>Xin chào {p.name}</h1>
      <p>Năm nay {p.age} tuổi ,thích ăn {p.eat}</p>
    </div>
  )
}

export default Content