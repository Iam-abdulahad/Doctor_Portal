import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const Contact = () => {
          return (
                    <section style={{
                              background: `url(${appointment})`
                    }}
                    >
                              <div class="container mx-auto py-20">
                                        <div class="bg-white bg-opacity-80 px-6 py-8 rounded-lg shadow-lg">
                                                  <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
                                                  <form>
                                                            <div class="mb-4">
                                                                      <label for="email" class="block font-semibold mb-1">Email:</label>
                                                                      <input type="text" id="email" name="email" placeholder="Your email address" class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500" />
                                                            </div>
                                                            <div class="mb-4">
                                                                      <label for="subject" class="block font-semibold mb-1">Subject:</label>
                                                                      <input type="text" id="subject" name="subject" placeholder="Subject of your message" class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500" />
                                                            </div>
                                                            <div class="mb-4">
                                                                      <label for="message" class="block font-semibold mb-1">Message:</label>
                                                                      <textarea id="message" name="message" placeholder="Your message" class="w-full px-4 py-2 border border-gray-300 rounded resize-none h-32 focus:outline-none focus:border-gray-500"></textarea>
                                                            </div>
                                                            <div class="text-center">
                                                                      <button type="submit" class="bg-gray-800 text-white px-6 py-2 rounded font-semibold hover:bg-gray-700">Submit</button>
                                                            </div>
                                                  </form>
                                        </div>
                              </div>
                    </section>
          );
};

export default Contact;