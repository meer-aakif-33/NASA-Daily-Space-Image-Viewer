import React from 'react'

export default function Footer({ showModal, handleToggleModal, data }) {
  return (
    <footer>
      <div className='bgGradient'></div>
        <div>
          <h1>APOD Project</h1>
          <h2>{data?.title}</h2>
        </div>
        {!showModal && (
          <button onClick={handleToggleModal} className='infoBtn'>
            <i className="fa-solid fa-info"></i>
          </button>
        )}
    </footer>
  )
}
