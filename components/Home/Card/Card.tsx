import React from 'react';
import ProfilePic from '@/components/Home/Card/profilePic';
import Image from 'next/image';

const Card = () => {
  return (
    <div className='flex min-h-screen justify-center py-30'>
      {/* FLIP WRAPPER */}
      <div className='group h-[30rem] w-[55rem] [perspective:1000px] flex items-center justify-center'>
        <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>

          {/* FRONT SIDE */}
          <div className='absolute inset-0 h-full w-full rounded-xl bg-olive-900 text-white [backface-visibility:hidden] overflow-hidden'>
            <div className='flex h-full items-center gap-8 p-8'>

              {/* PICTURE */}
              <div className='relative shrink-0 w-64 h-64 rounded-2xl overflow-hidden ring-4 ring-white/20'>
                <ProfilePic />
              </div>

              <div className='flex flex-col justify-center gap-3'>
                <h2 className='text-3xl font-bold tracking-tight'>Ahmad Muizzuddin Ahmad Ridzuan</h2>

                <div className='flex items-center gap-3 text-white/80 text-lg'>
                  <span>Age: 23</span>
                  <span className='h-1 w-1 rounded-full bg-white/40' />
                  <span>Data Scientist</span>
                  <span className='h-1 w-1 rounded-full bg-white/40' />
                  <span>Seeking Job Opportunity</span>
                </div>

                <p className='text-white/60 text-sm max-w-sm text-justify'>
                  Experienced in orchestrating end-to-end cloud deployments and managing data pipelines to build highly scalable applications. Adept at tackling challenging technical requirements by integrating diverse enterprise systems into cohesive, data-driven solutions.
                </p>

                {/* Skill tags */}
                <div className='flex flex-wrap gap-2 mt-2'>
                  <span className='rounded-full bg-white/10 px-3 py-1 text-xs'>Python</span>
                  <span className='rounded-full bg-white/10 px-3 py-1 text-xs'>SQL</span>
                  <span className='rounded-full bg-white/10 px-3 py-1 text-xs'>Machine Learning</span>
                </div>

              </div>
            </div>
          </div>

          {/* BACK SIDE */}
          <div className='absolute inset-0 h-full w-full rounded-xl bg-olive-900 p-4 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]'>
            <h3 className='text-xl font-bold'>Technologies</h3>
            <p className='text-white/60 text-m max-w-sm text-justify'>
            These are the technologies I have been working with:
            </p>



          <div className="grid grid-cols-4 gap-4 mt-6">
            {/* Item 1 */}
            <div className='flex flex-col items-center justify-center gap-2 p-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer'>
              <Image src='/logo/python.png' alt='Python' width={32} height={32} className='object-contain' />
              <span className='text-xs text-center font-medium'>Python</span>
            </div>

            {/* Item 3 */}
            <div className='flex flex-col items-center justify-center gap-2 p-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer'>
              <Image src='/logo/sql-file.png' alt='SQL' width={32} height={32} className='object-contain' />
              <span className='text-xs text-center font-medium'>SQL</span>
            </div>

            {/* Item 2 */}
            <div className='flex flex-col items-center justify-center gap-2 p-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer'>
              <Image src='/logo/html.png' alt='Html' width={32} height={32} className='object-contain' />
              <span className='text-xs text-center font-medium'>HTML</span>
            </div>

            {/* Item 2 */}
            <div className='flex flex-col items-center justify-center gap-2 p-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer'>
              <Image src='/logo/css-3.png' alt='CSS' width={32} height={32} className='object-contain' />
              <span className='text-xs text-center font-medium'>CSS</span>
            </div>

            {/* Item 2 */}
            <div className='flex flex-col items-center justify-center gap-2 p-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer'>
              <Image src='/logo/js.png' alt='JavaScript' width={32} height={32} className='object-contain' />
              <span className='text-xs text-center font-medium'>JavaScript</span>
            </div>

            {/* Item 2 */}
            <div className='flex flex-col items-center justify-center gap-2 p-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer'>
              <Image src='/logo/typescript.png' alt='TypeScript' width={32} height={32} className='object-contain' />
              <span className='text-xs text-center font-medium'>TypeScript</span>
            </div>

            {/* Item 2 */}
            <div className='flex flex-col items-center justify-center gap-2 p-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer'>
              <Image src='/logo/tailwindcss-icon.svg' alt='TailwindCSS' width={32}   height={32} className='object-contain' />
              <span className='text-xs text-center font-medium'>TailwindCSS</span>
            </div>

            {/* Item 2 */}
            <div className='flex flex-col items-center justify-center gap-2 p-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer'>
              <Image src='/logo/docker.png' alt='Docker' width={32} height={32} className='object-contain' />
              <span className='text-xs text-center font-medium'>Docker</span>
            </div>

            <div className='flex flex-col items-center justify-center gap-2 p-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer'>
              <Image src='/logo/kubernetes-logo.png' alt='Kubernetes' width={32} height={32} className='object-contain' />
              <span className='text-xs text-center font-medium'>Kubernetes</span>
            </div>

            <div className='flex flex-col items-center justify-center gap-2 p-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer'>
              <Image src='/logo/red-hat.svg' alt='RedHatOpenshift' width={32} height={32} className='object-contain' />
              <span className='text-xs text-center font-medium'>Red Hat Openshift</span>
            </div>

            
          </div>

            
          </div>

        </div>
      </div>
    </div>
  )
}

export default Card