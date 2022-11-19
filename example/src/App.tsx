import React from 'react'

import { plural } from 'react-plural'

const App = () => {
  return (
    <div>
      1{' '}{plural(1, 'one', 'two', 'five')}<br/>
      2{' '}{plural(2, 'one', 'two', 'five')}<br/>
      5{' '}{plural(5, 'one', 'two', 'five')}<br/><br/>
      1{' '}{plural(1, 'день', 'дня', 'дней')}<br/>
      2{' '}{plural(2, 'день', 'дня', 'дней')}<br/>
      5{' '}{plural(5, 'день', 'дня', 'дней')}<br/><br/>
      1{' '}{plural(1, 'day', 'days', 'days')}<br/>
      2{' '}{plural(2, 'day', 'days', 'days')}<br/>
      5{' '}{plural(5, 'day', 'days', 'days')}<br/><br/>
    </div>
  )
}

export default App
