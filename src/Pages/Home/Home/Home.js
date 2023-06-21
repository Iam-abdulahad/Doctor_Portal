import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../InfoCard/Info';
import Services from '../Service/Services';
import MakeAppointment from '../MakeAppointment/MakeAppointment';

const Home = () => {
          return (
                    <div>
                              <Banner></Banner>
                              <Info></Info>
                              <Services></Services>
                              <MakeAppointment></MakeAppointment>
                    </div>
          );
};

export default Home;