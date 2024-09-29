import React from 'react'

type Props = {
  params: {
    id: number;
  }
}

const page = ({ params }: Props) => {
  return (
    <div>{params.id} page</div>
  )
}

export default page