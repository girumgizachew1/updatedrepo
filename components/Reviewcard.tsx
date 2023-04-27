import React from 'react'

function Reviewcard({review}:any) {
  return (
    <div>
        <div key={review.id} className="bg-zinc-900 rounded-2xl p-12 m-6 h-[30vh] w-[40vh]">
                <div className="flex items-center justify-between mb-6">
                  <div className="review-card__top--left">
                    <p className="text-3xl uppercase leading-tight tracking-widest text-gray-200">{review.name}</p>
                    <h3 className="text-4xl leading-tight  tracking-tighter text-gray-500 mt-6 font-thin">{review.userName}</h3>
                  </div>
                </div>
                <div className="review-card__bottom">
                  <h2 className="text-2xl leading-tight text-gray-400 font-thin">{review.reply}</h2>
                </div>
              </div>
    </div>
  )
}

export default Reviewcard