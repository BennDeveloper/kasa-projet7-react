import React from 'react'
import "./Main.css"

function Main({children}) {                       /* dés que vous mettez main autour de quelque chose ça lui rajoute les propité de (className='main')  */
  return <div className='main'>{children}</div>
}

export default Main