import React from 'react'

const BookingList = ({open, setOpen, img, name, email, mobileNo, id, handleDelete}) => {
  return (
    <div onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open}> 
      <h2>Booking Details</h2>
      <div>
        <img src={img} alt="Booking" />
        <div>
          <header>{name}</header>
          <p>{email}</p>
          <p>{mobileNo}</p>
        </div>
      </div>
      <div>
        <button onClick={() => setOpen(false)}>Close</button>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </div>
  )
}

export default BookingList


