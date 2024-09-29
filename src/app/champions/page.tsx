import Link from 'next/link'
import React from 'react'

const ChampionsPage = () => {
  return (
    <>
      <div>ChampionsPage</div> 
      <Link href={"/champions/1"}>1</Link>
      <Link href={"/champions/2"}>2</Link>
      <Link href={"/champions/3"}>3</Link>
      <Link href={"/champions/4"}>4</Link>
    </>
  )
}

export default ChampionsPage