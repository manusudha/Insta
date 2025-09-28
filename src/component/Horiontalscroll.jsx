import elon from  "../Images/elon.jpg"
import lam from "../Images/image.jpg"
import isro from "../Images/ISRO.jpg"
import larry from "../Images/larry.jpg"
import mark from  "../Images/mark.jpg"
import me from "../Images/me.jpg"
import sam from "../Images/sam.jpg"
import tim from "../Images/TIM.jpg"
import virat from  "../Images/VIRAT.jpg"
import donald from "../Images/donald.jpg"
import {useState} from "react"

export default function Horizontalscroll(){
const [isViewerOpen, setIsViewerOpen] = useState(false);
const [selectedProfile, setSelectedProfile] = useState(0);
    const profiles=[
                            {
                            id: 1,
                            name: "me",
                            avatarUrl: me,
                            stories: [
                            { id: 1, imageUrl: "/stories/rahul1.jpg" },
                            { id: 2, imageUrl: "/stories/rahul2.jpg" },
                            ],
                        },
                         {
                            id: 2,
                            name: "elon",
                            avatarUrl: elon,
                            stories: [
                            { id: 1, imageUrl: "/stories/rahul1.jpg" },
                            { id: 2, imageUrl: "/stories/rahul2.jpg" },
                            ],
                        },
                         {
                            id: 3,
                            name: "isro",
                            avatarUrl: isro,
                            stories: [
                            { id: 1, imageUrl: "/stories/rahul1.jpg" },
                            { id: 2, imageUrl: "/stories/rahul2.jpg" },
                            ],
                        },
                         {
                            id: 4,
                            name: "larry",
                            avatarUrl:larry,
                            stories: [
                            { id: 1, imageUrl: "/stories/rahul1.jpg" },
                            { id: 2, imageUrl: "/stories/rahul2.jpg" },
                            ],
                        },
                         {
                            id: 5,
                            name: "sam",
                            avatarUrl: sam,
                            stories: [
                            { id: 1, imageUrl: "/stories/rahul1.jpg" },
                            { id: 2, imageUrl: "/stories/rahul2.jpg" },
                            ],
                        },
                         {
                            id: 6,
                            name: "mark",
                            avatarUrl: mark,
                            stories: [
                            { id: 1, imageUrl: "/stories/rahul1.jpg" },
                            { id: 2, imageUrl: "/stories/rahul2.jpg" },
                            ],
                        },
                         {
                            id: 7,
                            name: "virat",
                            avatarUrl:virat,
                            stories: [
                            { id: 1, imageUrl: "/stories/rahul1.jpg" },
                            { id: 2, imageUrl: "/stories/rahul2.jpg" },
                            ],
                        },
                         {
                            id: 8,
                            name: "donald",
                            avatarUrl:donald,
                            stories: [
                            { id: 1, imageUrl: "/stories/rahul1.jpg" },
                            { id: 2, imageUrl: "/stories/rahul2.jpg" },
                            ],
                        },
                         {
                            id: 9,
                            name: "lam",
                            avatarUrl: lam,
                            stories: [
                            { id: 1, imageUrl: "/stories/rahul1.jpg" },
                            { id: 2, imageUrl: "/stories/rahul2.jpg" },
                            ],
                        },
                         {
                            id: 10,
                            name: "tim",
                            avatarUrl:tim,
                            stories: [
                            { id: 1, imageUrl: "/stories/rahul1.jpg" },
                            { id: 2, imageUrl: "/stories/rahul2.jpg" },
                            ],
                        }



    ]




    return   <div className="gap-6 pt-18 scroll-smooth flex items-center snap-x snap-mandatory overflow-x-auto  overflow-y-hidden no-scrollbar">
               <div className="relative">
                    <div className="snap-center h-20 w-20" >
                        <img  className="rounded-full " src={me} alt="" />
                    </div> 
                    <button className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md border border-gray-300"><span class="text-black text-lg leading-none">+</span></button>
               </div>

 {/*-------------------------------------------------------------------------------------------------------- */}

               <div >
                      <div className="  snap-center h-24 w-24 rounded-full p-[3px] bg-gradient-to-tr from-pink-500 to-yellow-400" >
                        <img  className="rounded-full bg-white p-1" src={lam} alt="" />
                    </div> 
               </div>
 {/*-------------------------------------------------------------------------------------------------------- */}                    

               <div>
                   <div className="snap-center h-24 w-24 rounded-full p-[3px] bg-gradient-to-tr from-pink-500 to-yellow-400" >
                        <img  className="rounded-full bg-white p-1" src={isro} alt="" />
                    </div> 

               </div>
 {/*-------------------------------------------------------------------------------------------------------- */}


               <div>   
                    <div className="snap-center h-24 w-24 rounded-full p-[3px] bg-gradient-to-tr from-pink-500 to-yellow-400" >
                        <img  className="rounded-full bg-white p-1" src={elon} alt="" />
                    </div> 

               </div>

 {/*-------------------------------------------------------------------------------------------------------- */}

               <div>

                   <div className=" snap-center h-24 w-24 rounded-full p-[3px] bg-gradient-to-tr from-pink-500 to-yellow-400" >
                        <img  className="rounded-full bg-white p-1 " src={larry} alt="" />
                    </div> 

               </div>
 {/*-------------------------------------------------------------------------------------------------------- */}

               <div>
                        <div className=" snap-center h-24 w-24 rounded-full p-[3px] bg-gradient-to-tr from-pink-500 to-yellow-400" >
                        <img  className="rounded-full bg-white p-1 " src={mark} alt="" />
                    </div> 
               </div>

 {/*-------------------------------------------------------------------------------------------------------- */}

               <div>
                     <div className=" snap-center h-24 w-24 rounded-full p-[3px] bg-gradient-to-tr from-pink-500 to-yellow-400" >
                        <img  className="rounded-full bg-white p-1" src={sam} alt="" />
                    </div> 
               </div>
 {/*-------------------------------------------------------------------------------------------------------- */}

               <div>
                    <div className="snap-center h-24 w-24 rounded-full p-[3px] bg-gradient-to-tr from-pink-500 to-yellow-400" >
                        <img  className="rounded-full bg-white p-1 " src={tim} alt="" />
                    </div> 
               </div>

 {/*-------------------------------------------------------------------------------------------------------- */}

               <div>
                    <div className="snap-center h-24 w-24 rounded-full p-[3px] bg-gradient-to-tr from-pink-500 to-yellow-400" >
                        <img  className="rounded-full bg-white p-1" src={virat} alt="" />
                    </div> 
               </div>
 {/*-------------------------------------------------------------------------------------------------------- */}


               <div>
                    <div className="snap-center h-24 w-24 rounded-full p-[3px] bg-gradient-to-tr from-pink-500 to-yellow-400" >
                        <img  className="rounded-full bg-white p-1 " src={donald} alt="" />
                    </div> 
               </div>
              <div >
                  {
                    profiles.map((profile,idx)=>(
                        <img key={profile.id} src={profile.avatarUrl} alt={profile.name}  className="rounded-full bg-white p-1 " onClick={()=>{setSelectedProfile(idx); setIsViewerOpen(true);}} />
                    ))
                  }

              </div>
           </div>
          
  {/*-------------------------------------------------------------------------------------------------------- */}
            
}