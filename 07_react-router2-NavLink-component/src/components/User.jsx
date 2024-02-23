import React from 'react'
import { useParams } from 'react-router-dom' // for dynamic route 

export default function User() {
    const params = useParams()
  return (
    <div>
    I am a user {params.username}
    </div>
  )
}
