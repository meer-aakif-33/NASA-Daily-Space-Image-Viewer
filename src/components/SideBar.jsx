import React from 'react'

export default function SideBar({ handleToggleModal, data, show }) {
  return (
    <div className={`sidebar ${show ? 'show' : ''}`}>
      <div className="bgOverlay"></div>
      <div className="sidebarContents">
          <h2>{data?.title}</h2>
          <div className='descriptionContainer'>
              <p className='descriptionTitle'>{data?.date}</p>
              <p>{data?.explanation}</p>
          </div>
          <button className='rightButton' onClick={handleToggleModal}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
      </div>
    </div>
  )
}
