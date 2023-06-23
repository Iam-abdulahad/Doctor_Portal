import React from 'react';

const SocialLogin = () => {
          return (
                    <div>
                              <div class="bg-white max-w-md mx-auto rounded-lg overflow-hidden shadow-lg">
                                        <div class="py-4 px-6">
                                                  <h2 class="text-center font-bold text-2xl mb-4">Continue with social account</h2>

                                                  <button class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
                                                            Sign in with Google
                                                  </button>

                                                  <button class="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mt-4">
                                                            Sign in with GitHub
                                                  </button>

                                                  <button class="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mt-4">
                                                            Sign in with Facebook
                                                  </button>

                                        </div>
                              </div>

                    </div>
          );
};

export default SocialLogin;