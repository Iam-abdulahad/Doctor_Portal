import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Service from './Service';


const AvailableAppointments = ({ date }) => {
          const [treatment, setTreatment] = useState(null);

          const formattedDate = format(date, 'PP');
          const { data: services, Loading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
                    .then(res => res.json()))

          if (Loading) {
                    return (
                              <div className='min-h-screen text-center justify-items-center '>
                                        <span class="loading loading-ball loading-lg"></span>
                              </div>
                    );
          }

          return (
                    <div className='my-10'>
                              <h4 className='text-xl text-secondary text-center my-12'>Available Appointments on {format(date, 'PP')}</h4>
                              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                                        
                                        {
                                                  services?.map(service => <Service
                                                  key={service._id}
                                                  service={service}
                                                  setTreatment={setTreatment}
                                                  ></Service> )
                                        }
                              </div>
                              {treatment && <BookingModal
                                        date={date}
                                        treatment={treatment}
                                        setTreatment={setTreatment}
                                        refetch={refetch}
                              ></BookingModal>}
                    </div>
          );
};

export default AvailableAppointments;