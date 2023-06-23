import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../Shared/Button/PrimaryButton';

const Contact = () => {
          return (
                    <section style={{
                              background: `url(${appointment})`
                    }}
                    >
                              <div className="container mx-auto py-20 grid justify-self-center">

                                        <h2 className="text-2xl font-bold mb-4 text-[#22d3ee] text-center">Contact Us</h2>
                                        <h1 className='text-4xl font-bold mb-4 text-white text-center' >Stay Connected with Us</h1>

                                        <div className=" px-6 py-8 rounded-lg shadow-lg text-center">
                                                  <form>
                                                            <div className="mb-4">
                                                                      <input type="text" id="email" name="email" placeholder="Your email address"className="w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500" />
                                                            </div>
                                                            <div className="mb-4">
                                                                      <input type="text" id="subject" name="subject" placeholder="Subject of your message"className="w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500" />
                                                            </div>
                                                            <div className="mb-4">
                                                                      <textarea id="message" name="message" placeholder="Your message"className="w-96 px-4 py-2 border border-gray-300 rounded-lg resize-none h-32 focus:outline-none focus:border-gray-500"></textarea>
                                                            </div>
                                                            <div className="">
                                                                      <PrimaryButton>SUBMIT</PrimaryButton>
                                                            </div>
                                                           
                                                  </form>
                                        </div>
                              </div>
                    </section>
          );
};

export default Contact;