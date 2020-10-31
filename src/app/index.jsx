import React from 'react'
import Navbar from './navbar'
import Slider from './slider'
import Modal from './modal'
import ModalButton from './modal/modal-button'

export default function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <ModalButton />
      <Modal />
    </>
  )
}
