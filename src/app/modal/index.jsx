import React from 'react'
import { useGlobalContext } from './context'
import { FaTimes } from 'react-icons/fa'
import './styles.css'

export default function Modal() {
  const { isModalOpen, closeModal } = useGlobalContext()
  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
        <h3>modal content</h3>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eaque
          nesciunt nam porro praesentium nihil non error ullam ipsa cum tempora
          sed culpa maxime asperiores blanditiis, quo harum hic? Optio.
        </div>
      </div>
    </div>
  )
}
