import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'
import './styles.css'

export default function App() {
  const [services, setServices] = useState(data)
  const [index, setIndex] = React.useState(0)

  useEffect(() => {
    const lastIndex = services.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, services])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>services
        </h2>
      </div>
      <div className='section-center'>
        {services.map((service, serviceIndex) => {
          const { id, image, name, title, quote } = service

          let position = 'nextSlide'
          if (serviceIndex === index) {
            position = 'activeSlide'
          }
          if (
            serviceIndex === index - 1 ||
            (index === 0 && serviceIndex === services.length - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}
