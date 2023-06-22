import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../InfoCard/Info';
import Services from '../Service/Services';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';

const Home = () => {
          return (
                    <div>
                              <Banner></Banner>
                              <Info></Info>
                              <Services></Services>
                              <MakeAppointment></MakeAppointment>
                              <Testimonials></Testimonials>
                              <Contact></Contact>
                    </div>
          );
};

export default Home;