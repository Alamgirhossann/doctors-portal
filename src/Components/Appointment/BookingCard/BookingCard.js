import React, { useState } from 'react';
import BookingForm from '../BookingForm/BookingForm';

const BookingCard = ({book, date}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className='col-md-4 mb-5'>
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className='card-title text-brand'>{book.subject}</h5>
                    <h6>{book.visitingHour}</h6>
                    <p>{book.totalSpace} Space Available</p>
                    <button onClick={openModal} className='text-white btn btn-brand'>BOOK APPOINTMENT</button>
                    <BookingForm modalIsOpen={modalIsOpen} closeModal={closeModal} date={date} bookingOn={book.subject}></BookingForm>
                </div>
            </div>
            
        </div>
    );
};

export default BookingCard;