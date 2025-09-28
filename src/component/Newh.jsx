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
{/*---stories images-----*/}
import  goku from "../stories/goku.jpg"
import  goku2 from "../stories/goku2.jpg"
import  goten from "../stories/goten.jpg"
import  krisna from "../stories/krisna.jpg"
import  pokemon from "../stories/pokemon.jpg"
import  shine from "../stories/shine.jpg"
import  shine2 from "../stories/shine2.jpg"
import  shine3 from "../stories/shine3.jpg"
import tom from "../stories/tom.jpg"
import StoryViewer from "./StoryViewer"


import {useState} from "react"

useState
export default function Newh(){
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [selectedProfile, setSelectedProfile] = useState(0);
        const profiles=[
                                {
                                id: 1,
                                name: "me",
                                avatarUrl: me,
                                stories: [
                                { id: 1, imageUrl: goku },
                                { id: 2, imageUrl: goku2 },
                                ],
                            },
                             {
                                id: 2,
                                name: "elon",
                                avatarUrl: elon,
                                stories: [
                                { id: 1, imageUrl: goten },
                                { id: 2, imageUrl: goku },
                                ],
                            },
                             {
                                id: 3,
                                name: "isro",
                                avatarUrl: isro,
                                stories: [
                                { id: 1, imageUrl: krisna },
                                { id: 2, imageUrl: pokemon },
                                ],
                            },
                             {
                                id: 4,
                                name: "larry",
                                avatarUrl:larry,
                                stories: [
                                { id: 1, imageUrl:shine },
                                { id: 2, imageUrl: shine2 },
                                ],
                            },
                             {
                                id: 5,
                                name: "sam",
                                avatarUrl: sam,
                                stories: [
                                { id: 1, imageUrl: shine3 },
                                { id: 2, imageUrl: tom},
                                ],
                            },
                             {
                                id: 6,
                                name: "mark",
                                avatarUrl: mark,
                                stories: [
                                { id: 1, imageUrl: "" },
                                { id: 2, imageUrl:""  },
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
    
    
    
    
    return <div className="flex flex-row">
             <div className="pr-6">
                   <div className="relative pt-21  ">
                                    <div className="snap-center h-20 w-20" >
                                        <img  className="rounded-full " src={me} alt="" />
                                    </div> 
                                    <button className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md border border-gray-300"><span class="text-black text-lg leading-none">+</span></button>
                  </div>
             </div>
                 
                <div  className="gap-6 pt-18 scroll-smooth flex items-center snap-x snap-mandatory overflow-x-auto  overflow-y-hidden no-scrollbar" >
                    {
                        profiles.map((profile,idx)=>( <div >
                                                <div className= "snap-center h-24 w-24 rounded-full p-[3px] bg-gradient-to-tr from-pink-500 to-yellow-400" >
                                                    <img  className="rounded-full bg-white p-1" src={profile.avatarUrl}  onClick={()=>{setSelectedProfile(idx);setIsViewerOpen(true);}}  alt={profile.name} />
                                                </div> 
                                        </div>
                                        )
                                    ) 
                        
                    }
                </div>
                        {isViewerOpen && (
                            <StoryViewer
                                profiles={profiles}
                                initialProfileIndex={selectedProfile}
                                onClose={() => setIsViewerOpen(false)}
                            />
                        )}

           </div>
           
}