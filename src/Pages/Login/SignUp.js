import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const SignUp = () => {
          return (
                    <div>
                              <div class="bg-gray-100 min-h-screen flex flex-col justify-center sm:py-12">
                                        <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                                                  <h1 class="font-bold text-center text-2xl mb-5">Sign Up</h1>
                                                  <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                                                            <div class="px-5 py-7">
                                                                      <form>
                                                                                <label class="font-semibold text-sm text-gray-600 pb-1 block">Name</label>
                                                                                <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                                                                                <label class="font-semibold text-sm text-gray-600 pb-1 block">Email</label>
                                                                                <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                                                                                <label class="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                                                                                <input type="password" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                                                                                <label class="font-semibold text-sm text-gray-600 pb-1 block">Confirm Password</label>
                                                                                <input type="password" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                                                                                <button type="submit" class="transition duration-200 h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-r from-purple-500 to-pink-500 focus:bg-blue-700 focus:outline-none rounded-lg px-3 py-2 text-white w-full">Sign in</button>
                                                                      </form>
                                                            </div>
                                                            <div class="py-5 mx-8">
                                                                      <div class="grid grid-cols-2 gap-1">
                                                                                <div class="text-center sm:text-left whitespace-nowrap">
                                                                                          <a href="#" class="transition duration-200 hover:text-blue-500 text-gray-600 text-sm font-semibold">Forgot password?</a>
                                                                                </div>
                                                                                <div class="text-center sm:text-right whitespace-nowrap">
                                                                                          <Link to="/login" class="transition duration-200 hover:text-blue-500 text-gray-600 text-sm font-semibold">Log in</Link>
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                            <SocialLogin></SocialLogin>
                                                  </div>
                                        </div>
                              </div>

                    </div>
          );
};

export default SignUp;