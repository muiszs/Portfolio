import React from 'react'

const Card = () => {
  return (
    <div className='flex min-h-screen justify-center'>
      {/* FLOAT WRAPPER - handles the floating up/down motion */}
      <div className='animate-float hover:[animation-play-state:paused]'>
        
        {/* FLIP WRAPPER - handles the 3D perspective + hover flip */}
        <div className='group h-120 w-220 [perspective:1000px] flex items-center justify-center'>
          <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
            
            {/* FRONT SIDE */}
            <div className='absolute inset-0 h-full w-full rounded-xl bg-slate-900 p-4 text-white [backface-visibility:hidden]'>
              <h3 className='text-xl font-bold'>Front Side</h3>
              <p>Hover me to flip!</p>
            </div>

            {/* BACK SIDE */}
            <div className='absolute inset-0 h-full w-full rounded-xl bg-indigo-600 p-4 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]'>
              <h3 className='text-xl font-bold'>Back Side</h3>
              <p>Here is the extra information.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Card