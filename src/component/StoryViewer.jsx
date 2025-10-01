import { useEffect, useState } from "react";

export default function StoryViewer({ profiles, initialProfileIndex, onClose }) {
  const [profileIndex, setProfileIndex] = useState(initialProfileIndex);
  const [storyIndex, setStoryIndex] = useState(0);

  const currentProfile = profiles[profileIndex];
  const currentStory = currentProfile.stories[storyIndex];

  useEffect(() => {
                    const timer = setTimeout(() => {goNextStory() }, currentStory.duration ? currentStory.duration * 1000 : 5000);  // 5s default
                    return () => clearTimeout(timer);
            }, [storyIndex, profileIndex]);

        const goNextStory = () => {
            if (storyIndex < currentProfile.stories.length - 1) {
            setStoryIndex((prev) => prev + 1);
            } else {
            goNextProfile();
            }
        };

  const goNextProfile = () => {
    if (profileIndex < profiles.length - 1) {
      setProfileIndex((prev) => prev + 1);
      setStoryIndex(0);
    } else {
      onClose(); // close this window
    }
  };

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
      {/* ProgressBar */}
      <div className="flex gap-1 absolute top-4 w-[90%]">
        {currentProfile.stories.map((story, idx) => (
          <div
            key={story.id}
            className={`h-1 flex-1 rounded-full ${
              idx <= storyIndex ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
  
      {/* -------------------------------------------------------------------Story Content------------------------------------------------------------------------------------------- */}
      <img
        src={currentStory.imageUrl}
        alt="story"
        className="max-h-[90%] object-contain"
      />

      {/*---------------------------------------------------------------------- Navigation---------------------------------------------------------------------------- */}    
      <div className="absolute inset-0 flex">
        <div className="flex-1" onClick={ () =>{
                                              if(profileIndex!=0 && storyIndex==0){
                                                    setProfileIndex(profileIndex-1);   
                                              }
                                             else {setStoryIndex(Math.max(storyIndex - 1, 0))}}}>
                                  
       </div>
        <div className="flex-1" onClick={goNextStory}></div>
      </div>
    </div>
  );
}
