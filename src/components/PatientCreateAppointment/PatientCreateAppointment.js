import React from 'react';
import './PatientCreateAppointment.css';
import PatientSidebar from '../PatientSidebar/PatientSidebar';

function PatientCreateAppointment() {
  return (
    <div className='patient-main-container'>
      <PatientSidebar />
      <div className='patient-create-appointment-container'>
        <h1>Book an appointment</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          deleniti assumenda praesentium natus quod, veritatis facere mollitia
          aspernatur autem, expedita ea dolore sint ullam tempora ex cumque
          minus eveniet! Consequuntur!
        </p>
        <form className='appointment-form'>
          <select>
            <option hidden>Select Doctor</option>
            <option>Dr. Grace Laura</option>
            <option>Dr. Faith Ondiege</option>
            <option>Dr. Ivy Sifuma</option>
          </select>
          <select>
            <option hidden>Select type of appointment</option>
            <option>Consultation</option>
            <option>Dermatology</option>
            <option>Nutrition</option>
            <option>Pediatrics</option>
          </select>
          <input type='date' />
          <textarea placeholder='Provide information on the apppointment'></textarea>
          <br />
          <div className='form-buttons'>
            <button type='submit'>Submit Request</button>
            <button type='reset'>Reset</button>
          </div>
        </form>
      </div>
      <div className='working-hours'>
        <h2>Opening Hours:</h2>
        <p>
          Do you know of a doctor who can provide you with care? NewLife
          Hospital will offer you the best.
        </p>
        <br />
        <p className='working-weekdays'>
          <span>Mon – Wed:</span> 9:00 AM - 7:00 PM{' '}
        </p>
        <p className='working-weekdays'>
          <span>Thursday:</span> 9:00 AM - 6:30 PM{' '}
        </p>
        <p className='working-weekdays'>
          <span>Friday:</span> 9:00 AM - 6:00 PM{' '}
        </p>
        <p className='working-weekdays'>
          <span>Sun - Sun:</span> CLOSED{' '}
        </p>
        <br />
        <h4>Need a personal health plan?</h4>
        <p>
          We offer you the best. <br />
          Give us a call: <br />
          Toll Free: 0812 345 678 <br /> Saf: +254 712 345 678 <br /> Air: +254
          733 123 456
        </p>
      </div>
    </div>
  );
}

export default PatientCreateAppointment;