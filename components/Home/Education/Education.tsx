"use client";
import React, {useState} from 'react';

type TabType = 'education' | 'experience' | 'extracurricular';

const Education = () => {
const [activeTab, setActiveTab] = useState<TabType>('experience');

  // Tab configuration
  const tabs: { id: TabType; label: string }[] = [
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'extracurricular', label: 'Extracurricular' },
  ];

  return (
    // Background simulating a desktop
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-8">
      
      {/* 
        Folder Wrapper 
        We use a max-w-4xl to keep it wide.
      */}
      <div className="relative w-full max-w-4xl mt-12">
        
        {/* 
          TABS CONTAINER
          flex row, aligned to bottom so they sit on top of the folder body.
          We use -mb-[2px] to pull them down over the folder's top border.
        */}
        <div className="flex items-end px-4 -mb-[2px] relative z-10">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative px-8 py-3 font-semibold text-lg capitalize rounded-t-2xl transition-all duration-200
                  border-t-2 border-l-2 border-r-2
                  /* The Magic: Active tab has no bottom border and blends with folder */
                  ${isActive 
                    ? 'bg-yellow-400 border-black text-black border-b-yellow-400 translate-y-[2px] z-20 pb-4' 
                    : 'bg-yellow-300 border-black/50 text-black/70 hover:bg-yellow-400/80 translate-y-2 shadow-inner z-10'
                  }
                `}
                // Slight custom border radius for that specific folder tab look
                style={{ borderBottomRightRadius: isActive ? 0 : '1rem', borderBottomLeftRadius: isActive ? 0 : '1rem' }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 
          FOLDER BODY
          Thick borders, yellow background, rounded corners.
          The content will sit inside this.
        */}
        <div className="relative bg-yellow-400 border-2 border-black rounded-b-3xl rounded-tr-3xl p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)] z-10 min-h-[400px]">
          
          {/* Optional: A subtle inner shadow or line to make it look like thick paper */}
          <div className="absolute inset-0 rounded-b-3xl rounded-tr-3xl border-b-4 border-r-4 border-yellow-500/50 pointer-events-none"></div>

          {/* CONTENT AREA */}
          <div className="relative z-20">
            {activeTab === 'education' && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-black mb-6 uppercase tracking-wider border-b-2 border-black inline-block pb-1">
                  Education
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold">B.S. Computer Science</h3>
                    <p className="text-black/70 font-medium">University of Technology • 2018 - 2022</p>
                    <p className="mt-2">Graduated with Honors. Specialized in Frontend Architecture and UI/UX design.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-black mb-6 uppercase tracking-wider border-b-2 border-black inline-block pb-1">
                  Experience
                </h2>
                <div className="space-y-6">
                  <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-black/20">
                    <div className="absolute left-[-4px] top-2 w-2.5 h-2.5 bg-black rounded-full"></div>
                    <h3 className="text-xl font-bold">Senior Frontend Developer</h3>
                    <p className="text-black/70 font-medium">Tech Corp • 2022 - Present</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 marker:text-black/50">
                      <li>Led a team of 4 developers to rebuild the core dashboard.</li>
                      <li>Improved Lighthouse performance scores by 40%.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'extracurricular' && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-black mb-6 uppercase tracking-wider border-b-2 border-black inline-block pb-1">
                  Extracurricular
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold">Open Source Contributor</h3>
                    <p className="text-black/70 font-medium">Various Projects • 2020 - Present</p>
                    <p className="mt-2">Contributed UI components to popular React libraries. Organized local hackathons.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Decorative "Paper" fold or staple (Optional creative touch) */}
          <div className="absolute bottom-4 right-4 w-12 h-12 border-r-4 border-b-4 border-black/10 rounded-br-3xl"></div>
        </div>
      </div>

      {/* Tailwind global animation definition (add to your globals.css or tailwind.config.js) */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default Education