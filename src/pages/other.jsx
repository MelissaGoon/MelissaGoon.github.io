import { React, useState } from 'react'
import { cornerstar } from '../assets/images'
import { graphicDesign } from '../constants'
import art from '../assets/images/art'

const other = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className='w-full h-screen relative bg-portfolio bg-cover bg-center'>
      <img src={cornerstar} className='corner-star' alt='✷' />
      <section className='absolute left-0 right-0 z-10 p-7 sm:p-16 w-full min-h-svh sm:top-24 top-28 bg-black'>
        <h1 className='head-text text-white'>
          Graphic Design Work <span className='pink-gradient-text'>✷✶</span>
        </h1>

        {/* Gallery */}
        <section className="py-4 md:py-10">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
            {graphicDesign.map((item) => (
              <li key={item.title} className="relative">
                <button onClick={() => setSelectedItem(item)}>
                  <img className="w-full rounded-lg hover:opacity-80 transition bg-white" src={item.images[0]} alt={item.title} />
                </button>
              </li>
            ))}
          </ul>

        </section>

        {/* Popup */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end md:items-center justify-center">
            <div className="bg-white rounded-lg max-w-lg w-full relative overflow-hidden">
              <div className=" overflow-y-auto max-h-[90vh] md:max-h-[80vh] p-6">
                <button className="absolute top-4 right-6 text-xl text-black hover:text-pink-500" onClick={() => setSelectedItem(null)}>
                  ✖
                </button>

                <h2 className="text-2xl">{selectedItem.title}</h2>
                <p className="mt-2">{selectedItem.description}</p>
                <div className="flex flex-col gap-4 mt-4">
                  {selectedItem.images.map((img, index) => (
                    <img key={index} className="w-full h-auto rounded-lg" src={img} alt={`${selectedItem.title} ${index + 1}`} />
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

        <h1 className='head-text text-white'>
          Illustration <span className='pink-gradient-text'>✷✶</span>
        </h1>

        {/* Art Gallery*/}
        <div className="columns-2 md:columns-5 gap-0 inline-block mx-auto rounded-xl overflow-hidden">
          {art.map((img, index) => (
            <img key={index} className="w-full h-auto" src={img} alt="Art Image" />
          ))}
        </div>


      </section>

    </div>
  )
}

export default other