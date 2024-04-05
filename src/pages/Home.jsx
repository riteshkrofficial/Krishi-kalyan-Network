import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowRight , FaAmbulance} from 'react-icons/fa';
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/Button';
import Banner from '../assets/Images/banner.mp4'
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import TimeLineSection from '../components/core/HomePage/TimeLineSection';
import LearningSection from '../components/core/HomePage/LearningSection';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import Footer from '../components/Common/Footer';
import ExploreMore from '../components/core/HomePage/ExploreMore';
import ReviewSlider from '../components/Common/ReviewSlider';



const Home = () => {
  return (
    <div>
     
    {/*Section 1*/}
    <div className='relative mx-auto flex flex-col items-center  max-w-maxContent bg-white text-richblack-800 justify-between'>
        
        <Link to={"/dashboard/my-profile"}>
           <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-700 font-bold text-white
           transition-all duration-200 hover:scale-95 w-fit'>
              <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all 
              duration-200 group-hover:bg-pink-600'>
                  <p>DASHBOARD</p>
                  {/* <FaArrowRight/> */}
                  {/* <FaAmbulance/> */}
              </div>
           </div>
        </Link>

        <div className='font-semibold text-3xl mt-7 text-center'>
        कृषि सम्बंधी जानकारियों को अपनी भाषा में प्राप्त करें और खेती को समृद्धि दें।
            {/* <HighlightText text={" India"}/> */}
            {/* . Specially desgined for Himanchal Pradesh */}
        </div>

        <div className='mt-4 w-[80%] text-center font-bold text-lg text-richblack-400'>
        किसानों को और भी मजबूत बनाने के लिए हमें उनके जीवन को सुधारने और उन्हें नई तकनीकों और विधियों के साथ अपडेट करने का प्रयास करना आवश्यक है। सम्भावित खेती क्षेत्रों में उन्हें नई वार्षिक उपजों और फसलों के विकास के लिए तकनीकी ज्ञान और संसाधनों की पहुँच प्रदान करनी चाहिए। सरकारी योजनाओं और उपायों का लाभ उठाने के लिए उन्हें उचित मार्गदर्शन और सहायता प्रदान करने की आवश्यकता है। साथ ही,हम उन्हें बाजार विश्वस्तता और संभावित व्यापारिक अवसरों के बारे में जागरूक करने के लिए अधिक प्रशिक्षण और विचार-विमर्श का मौका दे रहे है। हम इसके साथ ही, किसानों की समुदायिक ऊर्जा और सामूहिक आर्थिक विकास के लिए नेटवर्क बनाने का प्रयास भी कर रहे है |
          
           </div>

        <div className='flex flex-row mt-8 gap-7'>
        <CTAButton active={true} linkto={"/signup"}>
            Connect with Experts
        </CTAButton>
        <div className='text-white'>
        <CTAButton active={false} linkto={"/login"}>
            Soil Testing
        </CTAButton>
        </div>
        </div>

        {/* <div className='mx-3 my-12 shadow-lg'>
            <video
            muted
            loop
            autoPlay
            >
            <source src={Banner}/>
            </video>
        </div> */}

        <div className='m-2'>
            <CodeBlocks 
                position={"flex flex-col lg:flex-row"}
                heading={
                    <div className='text-2xl font-semibold'>
                        नई तकनीकें और विपणन विकल्पों का ज्ञान किसानों को समृद्ध बनाता है।
                        {/* <HighlightText text={" Himanchal Pradesh"}/> */}
                        
                    </div>
                }
                subheading={"फसल रोगों के पूर्वानुमान और समय पर पहचान एक महत्वपूर्ण कृषि तकनीक है। उन्नत तकनीकों का उपयोग करके, विशेषज्ञ अल्गोरिदम्स और उपयुक्त डेटा विज्ञान के साथ, हम फसलों को होने वाली बीमारियों का पूर्वानुमान लगा सकते हैं। यह किसानों को नुकसान से बचाने और उनकी उत्पादकता बढ़ाने में मदद करता है। इसके अलावा, जल्दी ही रोगों को पहचानकर उपयुक्त उपचार करने से फसलों की सुरक्षा और उत्पादकता को बढ़ावा मिलता है। इस तकनीक से भारत के किसान अपनी उत्पादकता में सुधार कर सकते हैं और खुद को आर्थिक रूप से मजबूत कर सकते हैं।"}
                ctabtn1={
                    {
                        btnText:"Check Crop Disease",
                        linkto:"/signup",
                        active:true,
                    }
                }
                ctabtn2={
                    {
                        btnText:"Chat With Us",
                        linkto:"/login",
                        active:true,
                    }
                }
                codeblock={`Schedule your appointment\nConnect With Experts\nPersonalized Dashboard\nRegular and timely Status Update\nGet Free Consultation\nVoice assistant\nChat With Us\nUpload your Documents\nKnow about Government policies\nJoin us`}
                codeColor={"text-yellow-25"}
            />
        </div>

        {/* <div className='m-2'>
            <CodeBlocks 
                position={"flex flex-col-reverse lg:flex-row-reverse"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Join Us In
                        <HighlightText text={" Seconds"}/>
                    </div>
                }
                subheading={"Our doctors spend adequate time with our patients to identify the root cause of the problem so that we can not only cure but also prevent the problem from recurring ensuring our patient's questions are answered."}
                ctabtn1={
                    {
                        btnText:"Book Appointment",
                        linkto:"/signup",
                        active:true,
                    }
                }
                ctabtn2={
                    {
                        btnText:"Learn More",
                        linkto:"/login",
                        active:false,
                    }
                }
                codeblock={`Schedule your appointment\nConnect With doctor\nPersonalized health check ups\nRegular and timely follow-ups are done\nGet Free Consultation\nOrder Medicine\nChat With Us\nUpload your previous Certificates\nBe Healthy\nJoin us`}
                codeColor={"text-yellow-25"}
            />
        </div> */}

        <ExploreMore />

    </div>

    {/*Section 2*/}
    <div className='bg-pure-greys-5 text-richblack-700'>
       
       <div className='h-[333px] homepage_bg'>

       <div className='w-11/12 max-w-maxContent flex flex-col justify-between items-center gap-5 mx-auto'>

       <div className='h-[200px]'></div>
       <div className='text-white flex gap-7'>

       <CTAButton active={true} linkto={"/signup"}>
           
           <div className='flex gap-2 items-center'>
            Explore More
           <FaArrowRight/>
           </div>

       </CTAButton>

       <CTAButton active={false} linkto={"/signup"}>
           
           <div className='flex items-center'>
            Book Appointment
           </div>

       </CTAButton>

       </div>
       
       </div>

       </div>

       <div className='w-11/12 mx-auto flex max-w-maxContent flex-col items-center justify-between gap-7'>

             <div className='flex flex-row gap-10 mb-10 mt-[100px]'>
                <div className='text-4xl font-semibold w-[45%]'>
                Consultation Made Easy!
                    <HighlightText text={" Experts  with proven experience  "} />
                </div>

                <div className='flex flex-col gap-8 w-[40%] items-start'>
                   <p className='text-[16px]'>
                   
                   Empowering farmers involves equipping them with modern techniques, knowledge, and market access. Strengthening their financial stability and providing timely support during challenges is crucial. By fostering a supportive environment, we can help farmers thrive and contribute to a robust agricultural sector.
                   </p>

                   <CTAButton active={true} linkto={"/signup"}>
                    Learn more
                   </CTAButton>
                </div>
             </div>

             <TimeLineSection />

             {/* <LearningSection /> */}
             
       </div>


    </div>

    {/*Section 3*/}
    <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 bg-richblack-900 text-white'>

        {/* <InstructorSection /> */}

        {/* <h2 className='font-semibold text-4xl text-center mt-10'>Review from Other Learners</h2> */}
        <ReviewSlider />
    </div>

    {/*Footer Section*/}
    {/* <Footer /> */}

    </div>
  )
}

export default Home
