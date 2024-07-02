import './App.css'

function App() {
  return (
    <>
      <nav className="bg-slate-50 px-8 py-6 sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between">

          <div className="">
            <img src="./logo.png" alt="" width="120" />
          </div>

          <div className="flex justify-evenly items-center space-x-36">
            {/* Nav Menu */}
            <div className="hidden lg:flex space-x-10">
              <a href="#" className="text-xl font-semibold hover:text-blue-600">Home</a>
              <a href="#" className="text-xl font-semibold hover:text-blue-600">About</a>
              <a href="#" className="text-xl font-semibold hover:text-blue-600">Services</a>
              <a href="#" className="text-xl font-semibold hover:text-blue-600">Portfolio</a>
              <a href="#" className="text-xl font-semibold hover:text-blue-600">Blog</a>
              <a href="#" className="text-xl font-semibold hover:text-blue-600">Contact</a>
            </div>

            <div>
              <button className="bg-blue-600 text-white px-10 py-4 rounded-full hover:bg-blue-700 font-semibold">
                Let`s Talk
              </button>
            </div>
          </div>

        </div>
      </nav>
      {/* home */}
      <div className="container mx-auto my-32">
        <div className='flex flex-wrap px-16 space-x-16'>
          <div className='flex-1'>
            <button className='bg-blue-50 text-blue-600 px-6 py-1 round rounded-full text-lg font-semibold'>👏 Welcome to my Portfolio</button>
            <h1 className='mt-5 text-6xl font-bold'>I`m Jugal Kishore Sahu</h1>
            <h1 className='mt-7 text-5xl font-bold text-blue-600'>MERN Developer</h1>

            <p className='mt-10 text-2xl text-gray-500'>I specialize in building robust and dynamic web applications using MongoDB, Express, React, and Node.js</p>
            <div className='mt-16 w-40 h-40 p-10 rounded-full bg-white shadow-xl flex justify-center items-center border'>
              <div className="w-20 h-20 bg-blue-600 rounded-full flex justify-center items-center">
                <span className='text-white text-xl text-center'>HIRE</span>
              </div>
            </div>

          </div>
          <div className='relative '>
            <img src="./actor.jpg" alt="" className='rounded-full w-[600px]' />
            <div className='absolute w-44 h-44 bg-blue-600 rounded-full left-0 bottom-0 text-center'>
              <div className='flex flex-col justify-center h-full w-full'>
                <h1 className='text-white text-4xl font-bold'>2</h1>
                <h1 className='text-white text-xl font-bold'>Years of Experience</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Clients */}
      <div className='container bg-sky-100 min-w-full py-20 md:px-32 px-20'>
        <div className="flex items-center justify-center">
          <span>
            <img src="./left.png" alt="" className="w-6 h-4 mr-1" />
          </span>
          <span className="ml-1 text-2xl text-blue-600">Clients</span>
        </div>
        <div className='text-center mt-6 min-w-full'>
          <h1 className='text-5xl font-bold'>Clients I`ve worked with</h1>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 mt-16 px-4 sm:px-16'>
          <img src="./1.png" alt="" width="150" />
          <img src="./2.png" alt="" width="150" />
          <img src="./3.png" alt="" width="150" />
          <img src="./4.png" alt="" width="150" />
          <img src="./5.png" alt="" width="150" />
          <img src="./6.png" alt="" width="150" />
          <img src="./7.png" alt="" width="150" />
          <img src="./8.png" alt="" width="150" />
          <img src="./9.png" alt="" width="150" />
          <img src="./10.png" alt="" width="150" />
          <img src="./11.png" alt="" width="150" />
          <img src="./12.png" alt="" width="150" />
          <img src="./13.png" alt="" width="150" />
          <img src="./14.png" alt="" width="150" />
          <img src="./15.png" alt="" width="150" />
          <img src="./15.png" alt="" width="150" />
          <img src="./17.png" alt="" width="150" />
          <img src="./18.png" alt="" width="150" />
        </div>

      </div>

      {/* services */}
      <div className='container bg-blue-50 min-w-full py-20 md:px-32'>
        <div className="flex items-center justify-center">
          <img src="./left.png" alt="" className="w-6 h-4 mr-1" />
          <span className="text-2xl text-blue-600">MY SERVICES</span>
        </div>
        <div className='text-center mt-6'>
          <h1 className='text-5xl font-bold'>What I Do</h1>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 px-4 sm:px-16'>
          <div className="bg-white px-6 py-12 shadow-lg border-2 border-transparent hover:border-blue-600 hover:shadow-xl transition duration-300 ease-in-out rounded-lg">
            <h1 className='text-2xl font-bold text-blue-700'>%</h1>
            <h1 className='font-bold text-2xl mt-6'>Single Page Application</h1>
            <p className='mt-10 text-gray-600 text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>

          <div className="bg-white px-6 py-12 shadow-lg border-2 border-transparent hover:border-blue-600 hover:shadow-xl transition duration-300 ease-in-out rounded-lg">
            <h1 className='text-2xl font-bold text-blue-700'>%</h1>
            <h1 className='font-bold text-2xl mt-6'>Single Page Application</h1>
            <p className='mt-10 text-gray-600 text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>

          <div className="bg-white px-6 py-12 shadow-lg border-2 border-transparent hover:border-blue-600 hover:shadow-xl transition duration-300 ease-in-out rounded-lg">
            <h1 className='text-2xl font-bold text-blue-700'>%</h1>
            <h1 className='font-bold text-2xl mt-6'>Single Page Application</h1>
            <p className='mt-10 text-gray-600 text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>

          <div className="bg-white px-6 py-12 shadow-lg border-2 border-transparent hover:border-blue-600 hover:shadow-xl transition duration-300 ease-in-out rounded-lg">
            <h1 className='text-2xl font-bold text-blue-700'>%</h1>
            <h1 className='font-bold text-2xl mt-6'>Single Page Application</h1>
            <p className='mt-10 text-gray-600 text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>

          <div className="bg-white px-6 py-12 shadow-lg border-2 border-transparent hover:border-blue-600 hover:shadow-xl transition duration-300 ease-in-out rounded-lg">
            <h1 className='text-2xl font-bold text-blue-700'>%</h1>
            <h1 className='font-bold text-2xl mt-6'>Single Page Application</h1>
            <p className='mt-10 text-gray-600 text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>

          <div className="bg-white px-6 py-12 shadow-lg border-2 border-transparent hover:border-blue-600 hover:shadow-xl transition duration-300 ease-in-out rounded-lg">
            <h1 className='text-2xl font-bold text-blue-700'>%</h1>
            <h1 className='font-bold text-2xl mt-6'>Single Page Application</h1>
            <p className='mt-10 text-gray-600 text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>

          <div className="bg-white px-6 py-12 shadow-lg border-2 border-transparent hover:border-blue-600 hover:shadow-xl transition duration-300 ease-in-out rounded-lg">
            <h1 className='text-2xl font-bold text-blue-700'>%</h1>
            <h1 className='font-bold text-2xl mt-6'>Single Page Application</h1>
            <p className='mt-10 text-gray-600 text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>

          <div className="bg-white px-6 py-12 shadow-lg border-2 border-transparent hover:border-blue-600 hover:shadow-xl transition duration-300 ease-in-out rounded-lg">
            <h1 className='text-2xl font-bold text-blue-700'>%</h1>
            <h1 className='font-bold text-2xl mt-6'>Single Page Application</h1>
            <p className='mt-10 text-gray-600 text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </div>


      {/* resume */}
      <div className='container bg-sky-50 min-w-full py-20 md:px-32'>
        <div className="flex items-center justify-center">
          <img src="./left.png" alt="" className="w-6 h-4 mr-1" />
          <span className="text-2xl text-blue-600">RESUME</span>
        </div>
        <div className='text-center mt-6'>
          <h1 className='text-5xl font-bold'>My Work Experience</h1>
        </div>

        <div className='flex flex-col items-center  lg:px-20 mt-10'>

          <div className='md:w-full lg:w-3/4 xl:w-3/4 bg-white shadow-md rounded-lg mt-8'>
            <div className='flex flex-col md:flex-row justify-between px-6 py-4 md:px-10 md:py-6'>
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>
                <h1 className="text-lg md:text-xl font-bold">Web Copywriter</h1>
              </div>

              <h1 className="text-lg md:text-xl mt-4 md:mt-0">2022 - 24 (Present)</h1>
            </div>

            <div className="border-t border-gray-200 px-6 py-4 md:px-6 lg:px-10 md:py-10 flex flex-col md:flex-row items-center">
              <div className='w-full md:w-96 mb-4 md:mb-0 md:mr-10'>
                <img src="./1.png" alt="" className="w-full h-auto rounded-lg" />
              </div>
              <div>
                <h1 className='font-bold'>Allianz</h1>
                <p className='mt-4 text-gray-600'>I must explain to you how all this mistaken idea of denouncing pleasure and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
              </div>
            </div>
          </div>

          <div className='md:w-full lg:w-3/4 xl:w-3/4 bg-white shadow-md rounded-lg mt-8'>
            <div className='flex flex-col md:flex-row justify-between px-6 py-4 md:px-10 md:py-6'>
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>
                <h1 className="text-lg md:text-xl font-bold">Web Copywriter</h1>
              </div>

              <h1 className="text-lg md:text-xl mt-4 md:mt-0">2022 - 24 (Present)</h1>
            </div>

            <div className="border-t border-gray-200 px-6 py-4 md:px-6 lg:px-10 md:py-10 flex flex-col md:flex-row items-center">
              <div className='w-full md:w-96 mb-4 md:mb-0 md:mr-10'>
                <img src="./2.png" alt="" className="w-full h-auto rounded-lg" />
              </div>
              <div>
                <h1 className='font-bold'>Chanel</h1>
                <p className='mt-4 text-gray-600'>I must explain to you how all this mistaken idea of denouncing pleasure and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
              </div>
            </div>
          </div>

          <div className='md:w-full lg:w-3/4 xl:w-3/4 bg-white shadow-md rounded-lg mt-8'>
            <div className='flex flex-col md:flex-row justify-between px-6 py-4 md:px-10 md:py-6'>
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>
                <h1 className="text-lg md:text-xl font-bold">Web Copywriter</h1>
              </div>

              <h1 className="text-lg md:text-xl mt-4 md:mt-0">2022 - 24 (Present)</h1>
            </div>

            <div className="border-t border-gray-200 px-6 py-4 md:px-6 lg:px-10 md:py-10 flex flex-col md:flex-row items-center">
              <div className='w-full md:w-96 mb-4 md:mb-0 md:mr-10'>
                <img src="./3.png" alt="" className="w-full h-auto rounded-lg" />
              </div>
              <div>
                <h1 className='font-bold'>Dell</h1>
                <p className='mt-4 text-gray-600'>I must explain to you how all this mistaken idea of denouncing pleasure and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
              </div>
            </div>
          </div>

          <div className='md:w-full lg:w-3/4 xl:w-3/4 bg-white shadow-md rounded-lg mt-8'>
            <div className='flex flex-col md:flex-row justify-between px-6 py-4 md:px-10 md:py-6'>
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>
                <h1 className="text-lg md:text-xl font-bold">Web Copywriter</h1>
              </div>

              <h1 className="text-lg md:text-xl mt-4 md:mt-0">2022 - 24 (Present)</h1>
            </div>

            <div className="border-t border-gray-200 px-6 py-4 md:px-6 lg:px-10 md:py-10 flex flex-col md:flex-row items-center">
              <div className='w-full md:w-96 mb-4 md:mb-0 md:mr-10'>
                <img src="./4.png" alt="" className="w-full h-auto rounded-lg" />
              </div>
              <div>
                <h1 className='font-bold'>Heineken</h1>
                <p className='mt-4 text-gray-600'>I must explain to you how all this mistaken idea of denouncing pleasure and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Document */}
        <div className='mt-40 sm:px-5 lg:px-20'>
          <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            <div>
              <img className="hover:scale-105 transition-transform duration-300" src="./document.jpg" alt="" />
              <h1 className='text-2xl font-semibold mt-8'>Document Manager Application</h1>
              <p>Web Development</p>
            </div>

            <div>
              <img className="hover:scale-105 transition-transform duration-300" src="./digital.jpg" alt="" />
              <h1 className='text-2xl font-semibold mt-8'>Document Manager Application</h1>
              <p>Web Development</p>
            </div>
            <div>
              <img className="hover:scale-105 transition-transform duration-300" src="./document.jpg" alt="" />
              <h1 className='text-2xl font-semibold mt-8'>Document Manager Application</h1>
              <p>Web Development</p>
            </div>

            <div>
              <img className="hover:scale-105 transition-transform duration-300" src="./digital.jpg" alt="" />
              <h1 className='text-2xl font-semibold mt-8'>Document Manager Application</h1>
              <p>Web Development</p>
            </div>
          </div>
        </div>

      </div>
      {/* TESTIMONIALS */}

      <div className='container bg-gray-50 min-w-full py-20 md:px-32'>
        <div className="flex items-center justify-center">
          <img src="./left.png" alt="" className="w-6 h-4 mr-1" />
          <span className="text-2xl text-blue-600">TESTIMONIALS</span>
        </div>
        <div className='text-center mt-6'>
          <h1 className='text-5xl font-bold'>What My Clients Say</h1>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 px-4 sm:px-16'>

          <div className="bg-white px-4 py-8 sm:px-6 sm:py-12 shadow-lg border-2 border-transparent hover:border-blue-600 hover:shadow-xl transition duration-300 ease-in-out rounded-lg max-w-md mx-auto">
            <div className='flex flex-col sm:flex-row gap-4'>
              <h1 className='font-bold text-lg'>Great Advice</h1>
              <img className='sm:ml-auto h-7' src="https://flixta.rstheme.com/wp-content/plugins/rselements/widgets/testimonial-slider-custom//img/5.png" alt="Profile Image" width="150" />
            </div>
            <p className='mt-6 sm:mt-10 text-gray-600 text-base sm:text-lg'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>

            <div className='mt-6 sm:mt-8'>
              <h1 className='font-bold text-lg sm:text-xl'>Tom Hanks</h1>
              <p>Client</p>
            </div>
          </div>


          <div className="bg-white px-4 py-8 sm:px-6 sm:py-12 shadow-lg border-2 border-transparent hover:border-blue-600 hover:shadow-xl transition duration-300 ease-in-out rounded-lg max-w-md mx-auto">
            <div className='flex flex-col sm:flex-row gap-4'>
              <h1 className='font-bold text-lg'>Design Quality</h1>
              <img className='sm:ml-auto h-7' src="https://flixta.rstheme.com/wp-content/plugins/rselements/widgets/testimonial-slider-custom//img/4.png" alt="ratings" width="150" />
            </div>
            <p className='mt-6 sm:mt-10 text-gray-600 text-base sm:text-lg'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>

            <div className='mt-6 sm:mt-8'>
              <h1 className='font-bold text-lg sm:text-xl'>Mel Gibson</h1>
              <p>Client</p>
            </div>
          </div>


          <div className="bg-white px-4 py-8 sm:px-6 sm:py-12 shadow-lg border-2 border-transparent hover:border-blue-600 hover:shadow-xl transition duration-300 ease-in-out rounded-lg max-w-md mx-auto">
            <div className='flex flex-col sm:flex-row gap-4'>
              <h1 className='font-bold text-lg'>Great Solution</h1>
              <img className='sm:ml-auto h-7' src="https://flixta.rstheme.com/wp-content/plugins/rselements/widgets/testimonial-slider-custom//img/4.png" alt="ratings" width="150" />
            </div>
            <p className='mt-6 sm:mt-10 text-gray-600 text-base sm:text-lg'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>

            <div className='mt-6 sm:mt-8'>
              <h1 className='font-bold text-lg sm:text-xl'>Mel Gibson</h1>
              <p>Client</p>
            </div>
          </div>

        </div>
      </div>

      {/* who am i */}

      <div className="container px-8 md:px-20 lg:px-32 py-16 lg:py-24 bg-slate-100 min-w-full">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="md:max-w-[600px]">
            <img src="./actor2.jpg" alt="Profile" className="rounded-full w-full md:w-[400px]" />
          </div>
          <div className="md:w-1/2 relative">
            <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left">Who I Am</h1>
            <p className="mt-6 text-2xl text-gray-700 text-center md:text-left">
              I am <b>Jugal Kishore Sahu</b>, a passionate MERN stack developer with two years of hands-on experience in crafting robust and dynamic web applications. My journey in the world of web development has been defined by a relentless pursuit of excellence and a deep-seated curiosity for cutting-edge technologies.
            </p>

            <div className='w-28 h-28 bg-blue-600 rounded-full mt-10 text-center shadow-xl'>
              <div className='flex flex-col justify-center h-full w-full'>
                <h1 className='text-white text-xl font-bold'>2</h1>
                <h1 className='text-white text-sm font-bold'>Years of Experience</h1>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className='container bg-sky-50 min-w-full py-20 md:px-20'>
        <div className="flex items-center justify-center">
          <img src="./left.png" alt="" className="w-6 h-4 mr-1" />
          <span className="text-2xl text-blue-600">FAQ</span>
        </div>
        <div className='text-center mt-6'>
          <h1 className='text-5xl font-bold'>Your Question and Answer</h1>
        </div>


        <div className="flex flex-col items-center lg:px-8 mt-10">
          <div className="w-full lg:w-2/3 bg-white shadow-lg rounded-lg overflow-hidden mb-8">
            <div className="px-6 py-8 lg:p-10">
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <h1 className="text-blue-600 text-3xl lg:text-4xl font-bold">How do I get a quotation for my project?</h1>
                <span className="text-blue-400 text-2xl lg:text-3xl">+</span>
              </div>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
                10+ years later and I’ve learned that in order to succeed in this business, I need to be your business partner and problem solver. Which is the same as saying through shrinking from toil and pain these cases.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-2/3 bg-white shadow-lg rounded-lg overflow-hidden mb-8">
            <div className="px-6 py-8 lg:p-10">
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <h1 className="text-blue-600 text-3xl lg:text-4xl font-bold">How many landing pages I can work with your product?</h1>
                <span className="text-blue-400 text-2xl lg:text-3xl">+</span>
              </div>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
                10+ years later and I’ve learned that in order to succeed in this business, I need to be your business partner and problem solver. Which is the same as saying through shrinking from toil and pain these cases.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-2/3 bg-white shadow-lg rounded-lg overflow-hidden mb-8">
            <div className="px-6 py-8 lg:p-10">
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <h1 className="text-blue-600 text-3xl lg:text-4xl font-bold">Can I use your product for my client?</h1>
                <span className="text-blue-400 text-2xl lg:text-3xl">+</span>
              </div>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
                10+ years later and I’ve learned that in order to succeed in this business, I need to be your business partner and problem solver. Which is the same as saying through shrinking from toil and pain these cases.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-2/3 bg-white shadow-lg rounded-lg overflow-hidden mb-8">
            <div className="px-6 py-8 lg:p-10">
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <h1 className="text-blue-600 text-3xl lg:text-4xl font-bold">Will Growth Products slow down my website?</h1>
                <span className="text-blue-400 text-2xl lg:text-3xl">+</span>
              </div>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
                10+ years later and I’ve learned that in order to succeed in this business, I need to be your business partner and problem solver. Which is the same as saying through shrinking from toil and pain these cases.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* UPDATE */}

      <div className='container bg-gray-50 min-w-full py-20 md:px-32'>
        <div className="flex items-center justify-center">
          <img src="./left.png" alt="" className="w-6 h-4 mr-1" />
          <span className="text-2xl text-blue-600">UPDATE</span>
        </div>
        <div className='text-center mt-6'>
          <h1 className='text-5xl font-bold'>Latest News & Blogs</h1>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 px-4 sm:px-16">

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative overflow-hidden">
              <img src="./a.jpg" alt="Image" className="w-full h-auto transition duration-300 transform hover:scale-105" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
                <h1 className="font-bold text-lg sm:text-xl ">Do you want to become professional?</h1>
                <p className="text-gray-300">By Flexta | July 2, 2024</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative overflow-hidden">
              <img src="./b.jpg" alt="Image" className="w-full h-auto transition duration-300 transform hover:scale-105" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
                <h1 className="font-bold text-lg sm:text-xl">Do you want to become professional?</h1>
                <p className="text-gray-300">By Flexta | July 2, 2024</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative overflow-hidden">
              <img src="./c.jpg" alt="Image" className="w-full h-auto transition duration-300 transform hover:scale-105" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
                <h1 className="font-bold text-lg sm:text-xl">Do you want to become professional?</h1>
                <p className="text-gray-300">By Flexta | July 2, 2024</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Stay Connected */}

      <div className='container bg-blue-50 min-w-full py-12 md:py-28 px-4 md:px-32'>
        <div className='flex flex-col md:flex-row justify-between px-4 md:px-16'>
          {/* Left box */}
          <div className='flex flex-col'>
            <div className='flex items-center'>
              <img src="./left.png" alt="" className="w-6 h-4 mr-1" />
              <span className="text-2xl text-blue-600">STAY CONNECTED</span>
            </div>
            <h1 className='font-bold text-4xl md:text-5xl mt-4 md:mt-5'>Let`s Work Together!</h1>

            {/* Contact info */}
            <div className='flex flex-col mt-6 md:mt-8'>
              <div className='flex items-center'>
                <div className='w-12 h-12 bg-blue-600 rounded-full'></div>
                <div className='ml-4'>
                  <h2 className='text-lg'>Phone</h2>
                  <h3 className='text-xl'>+91 7873841779</h3>
                </div>
              </div>

              <div className='flex items-center mt-4'>
                <div className='w-12 h-12 bg-blue-600 rounded-full'></div>
                <div className='ml-4'>
                  <h2 className='text-lg'>Email</h2>
                  <h3 className='text-xl'>jugalasahu@gmail.com</h3>
                </div>
              </div>

              <div className='flex items-center mt-4'>
                <div className='w-12 h-12 bg-blue-600 rounded-full'></div>
                <div className='ml-4'>
                  <h2 className='text-lg'>Address</h2>
                  <h3 className='text-xl'>Ammerpet, Hyderabad, 500016</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right box */}
          <div className='bg-white p-6 md:p-10 mt-6 md:mt-0'>
            <form className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <input
                  required
                  type="text"
                  name="fullname"
                  className="p-3 rounded border border-gray-300 w-full"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <input
                  required
                  type="email"
                  name="email"
                  className="p-3 rounded border border-gray-300 w-full"
                  placeholder="Email Address"
                />
              </div>

              <div>
                <input
                  required
                  type="tel"
                  name="phone"
                  className="p-3 rounded border border-gray-300 w-full"
                  placeholder="Your Phone"
                />
              </div>
              <div>
                <select className="p-3 rounded border border-gray-300 w-full">
                  <option disabled selected>Choose Services</option>
                  <option>Service 1</option>
                  <option>Service 2</option>
                  <option>Service 3</option>
                </select>
              </div>
              <div className='col-span-2'>
                <textarea
                  className="p-3 rounded border border-gray-300 w-full h-40 resize-none"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className='col-span-2'>
                <button
                  type="submit"
                  className="w-52 bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition duration-300"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* footer */}

      <div className='bg-sky-100 min-w-full'>
  <div className='container mx-auto py-10 px-4 sm:px-6 lg:px-8'>
    <div className='flex flex-col items-center justify-between gap-6'>
      {/* Logo */}
      <div className='mb-4 md:mb-0'>
        <img src="./logo.png" alt="Logo" className="w-32 md:w-40" />
      </div>

      {/* Navigation */}
      <div className='mb-4 md:mb-0'>
        <ul className='flex flex-wrap justify-center md:justify-end gap-10'>
          <li><a href='#' className='text-gray-800 hover:text-blue-600'>Home</a></li>
          <li><a href='#' className='text-gray-800 hover:text-blue-600'>About</a></li>
          <li><a href='#' className='text-gray-800 hover:text-blue-600'>Services</a></li>
          <li><a href='#' className='text-gray-800 hover:text-blue-600'>Portfolio</a></li>
          <li><a href='#' className='text-gray-800 hover:text-blue-600'>Blog</a></li>
          <li><a href='#' className='text-gray-800 hover:text-blue-600'>Contact</a></li>
        </ul>
      </div>

      {/* Copyright */}
      <div>
        <p className='text-gray-600 text-center md:text-right'>© 2024 Flixta. Designed by Jugal Kishore Sahu ❤️.</p>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default App
