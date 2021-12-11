
import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [peopleList, setPopleList] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{peopleList.length} birthdays today</h3>
        <List  peopleList={peopleList} />
        <button onClick={() => setPopleList([])}>clear all</button>
      </section>
    </main>
  )
}

export default App