import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        id: 1,
        subject:'Teeth Orthodontics',
        visitingHour:'8:00 PM -9:00 PM' ,
        totalSpace:10,
    },
    {
        id: 2,
        subject:'Cosmetics Dentistry',
        visitingHour:'5:00 PM -7:00 PM' ,
        totalSpace:10,
    },
    {
        id: 3,
        subject:'Teeth Cleaning',
        visitingHour:'6:00 PM -8:00 PM' ,
        totalSpace:10,
    },
    {
        id: 4,
        subject:'Cavity Protection',
        visitingHour:'8:00 PM -9:00 PM' ,
        totalSpace:10,
    },
    {
        id: 5,
        subject:'Teeth Orthodontics',
        visitingHour:'3:00 PM -6:00 PM' ,
        totalSpace:10,
    },
    {
        id: 6,
        subject:'Teeth Orthodontics',
        visitingHour:'7:00 PM -10:00 PM' ,
        totalSpace:10,
    },
   
]
const BookingAppointment = ({date}) => {
    return (
        <section>
            <h1 className='text-center text-brand mb-5'>Available Appointment on {date.toDateString()}</h1>
            <div className="row">
                {
                    bookingData.map(book => <BookingCard book={book} date={date} key={book.id}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookingAppointment;