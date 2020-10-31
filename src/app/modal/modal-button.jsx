import React from 'react'
import { useGlobalContext } from './context'

export default function Home() {
  const { openModal } = useGlobalContext()
  return (
    <div className='main'>
      <button onClick={openModal} className='btn-modal-open'>
        show modal
      </button>
    </div>
  )
}
