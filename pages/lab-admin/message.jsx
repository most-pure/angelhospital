"use client"

import Search from "@/components/Search";
import Searchs from "@/components/Searchs";
import AdminLayout from "@/components/admin/AdminLayout";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Appointment({ appointmentData }) {
 

  return (
    <AdminLayout>
      <div className="appointment-page">
        <div className="appointment">
          <div className="appointment-header">
            <h2 className="lg:text-3xl text-xl font-bold">Messages</h2>
            <p className="welcome-text text-sm pt-3">
              Here are the messages you have got so far
            </p>
            <hr />
          </div >
          <Search />
        </div> 
        <div className="grid grid-cols-12 ">

            <div className="pt-5 lg:col-span-5 col-span-12 border-2 border-[rgba(203,214,216,1)] p-5 ">
            <Searchs />
            <div className=" flex pl-2 pt-3">
            <div className="">
            <Image src ="../pic/photo.svg"
            width ={36}
            height={36}
            priority
            />
            </div>
            
            <div className="grid grid-cols-12 ">
            <div className="lg:col-span-8 col-span-7">
            <h1 className="pl-2 lg:text-[16px] text-[14px] font-semibold text-[rgba(20,20,20,1)]">Suzana Colin <span className="text-[rgba(79,86,101,1)] font-normal gap-2 text-[14px]"> #p245879</span></h1>
            <p className="text-[10px] pl-3 font-normal">Chris Martin reacted with </p>
            </div>
        
            <div className="lg:col-span-4 col-span-5">
            <p className="text-[10px] pl-20 text-[rgba(79,86,101,1)] font-normal ">Dec 15</p>
            </div>
            </div>
        </div>
        <div className=" flex pl-2 pt-3">
        <div className="">
        <Image src ="../pic/photo.svg"
        width ={36}
        height={36}
        priority
        />
        </div>
        
        <div className="grid grid-cols-12 ">
        <div className="lg:col-span-8 col-span-7">
        <h1 className="pl-2 lg:text-[16px] text-[14px] font-semibold text-[rgba(20,20,20,1)]">Christina Ker <span className="text-[rgba(79,86,101,1)] font-normal gap-2 text-[14px]"> #p245879</span></h1>
        <p className="text-[10px] pl-3 font-normal">thank a lot for your good recommendati... </p>
        </div>
    
        <div className="lg:col-span-4 col-span-5">
        <p className="text-[10px] pl-20 text-[rgba(79,86,101,1)] font-normal">Dec 15</p>
        </div>
        </div>
    </div>
    <div className=" flex pl-2 pt-3">
    <div className="">
    <Image src ="../pic/photo.svg"
    width ={36}
    height={36}
    priority
    />
    </div>
    
    <div className="grid grid-cols-12 ">
    <div className="lg:col-span-8 col-span-7">
    <h1 className="pl-2 text-[14px] lg:text-[16px] font-semibold text-[rgba(20,20,20,1)]">Charles May <span className=" text-[rgba(79,86,101,1)] font-normal gap-2 text-[14px]"> #p245879</span></h1>
    <p className="text-[10px] pl-3 font-normal">Chris Martin reacted with  </p>
    </div>

    <div className="lg:col-span-4 col-span-5">
    <p className="text-[10px] pl-20 font-normal text-[rgba(79,86,101,1)]">Dec 15</p>
    </div>
    </div>
</div>
<div className=" flex pl-2 pt-3">
<div className="">
<Image src ="../pic/photo.svg"
width ={36}
height={36}
priority
/>
</div>

<div className="grid grid-cols-12 ">
<div className="lg:col-span-8 col-span-7">
<h1 className="pl-2 text-[14px] lg:text-[16px] font-semibold text-[rgba(20,20,20,1)]">John Hope <span className="text-[rgba(79,86,101,1)] font-normal gap-2 text-[14px]"> #p245879</span></h1>
<p className="text-[10px] pl-3 font-normal ">i just said, we may have a good Doctor. </p>
</div>

<div className="lg:col-span-4 col-span-5">
<p className="text-[10px] pl-20 font-normal text-[rgba(79,86,101,1)]">Dec 15</p>
</div>
</div>
</div>
<div className=" flex pl-2 pt-3">
<div className="">
<Image src ="../pic/photo.svg"
width ={36}
height={36}
priority
/>
</div>

<div className="grid grid-cols-12 ">
<div className="lg:col-span-8 col-span-7">
<h1 className="pl-2 text-[14px] lg:text-[16px] font-semibold text-[rgba(20,20,20,1)]">Michael Hopkins <span className="text-[rgba(79,86,101,1)] font-normal gap-2 text-[14px]"> #p245879</span></h1>
<p className="text-[10px] pl-3 font-normal ">Chris Martin reacted with </p>
</div>

<div className="lg:col-span-4 col-span-5">
<p className="text-[10px] pl-20 font-normal text-[rgba(79,86,101,1)]">Dec 15</p>
</div>
</div>
</div>
<div className=" flex pl-2 pt-3">
<div className="">
<Image src ="../pic/photo.svg"
width ={36}
height={36}
priority
/>
</div>

<div className="grid grid-cols-12 ">
<div className="lg:col-span-8 col-span-7">
<h1 className="pl-2  text-[14px] lg:text-[16px] font-semibold text-[rgba(20,20,20,1)]">Suzana Colin <span className="text-[rgba(79,86,101,1)] gap-2 text-[14px] font-normal"> #p245879</span></h1>
<p className="text-[10px] pl-3 font-normal text-[rgba(79,86,101,1)]">nooo, :D you cant do this anymore </p>
</div>

<div className="lg:col-span-4 col-span-5">
<p className="text-[10px] pl-20 font-normal text-[rgba(79,86,101,1)]">Dec 15</p>
</div>
</div>
</div>
       
            </div>
            <div className=" col-span-7 pt-5 pl-5 hidden lg:block">
             <div className="">
             <div className="flex  gap-3">
             <Image src ="../pic/photo.svg"
             width ={48}
             height={48}
             priority
             />

              <h1 className="font-semibold text-[rgba(20,20,20,1)] text-[16px]"> Sunzana Collins<br/><span className="font-normal text-[10px] text-[rgba(79,86,101,1)]">ID: #p245879</span></h1>
              <br/>
            
              </div>
              
            
            
              <div className="mt-5 pl-20"> 
                 <h1 className=" w-[258px] mb-3 rounded-r-lg rounded-tl-lg text-xs lg:text-sm font-normal bg-[rgba(208,248,255,1)] lg:w-[466px] h-[60px] top-[209px] left-[750px] pl-3 pt-5 p-3 ">
                  Good Morning Doc i am having body pain and headache </h1>
                <h1 className="w-[258px] pb-20  rounded-r-lg lg:text-sm text-xs font-normal bg-[rgba(208,248,255,1)] lg:w-[466px] h-[60px] top-[209px] left-[750px]  p-3 pl-3 pt-5" >All i know is that i slept late yesterday and i guess i sleep on my neck and 
not comfortable tho.</h1>

            
              
              </div>
             </div>
             <div className="flex gap-8 w-fit mt-5 ">
             <div className="">
             <Image src ="../pic/photo.svg"
             width ={48}
             height={48}
             priority
             />
             </div>
             <div className="rounded-r-lg bg-[rgba(208,248,255,1)] flex lg:w-[193px] h-[60px] top-[357px] left-[750px] justify-center items-cente pl-10r ">
             <Image src ="../pic/loop.svg"
             width ={36}
             height={36}
             priority
             className=""
             />
             <Image src ="../pic/loop.svg"
             width ={36}
             height={36}
             priority
             />
             <Image src ="../pic/loop.svg"
             width ={36}
             height={36}
             priority
             />
             </div>
               
             
             </div>
             <p className=" text-xs font-normal pl-20 pt-3 text-[rgba(79,86,101,1)]">Sat 5:15 AM</p>
             <div className="float-right">
             
             </div>
             <div className=" mt-5 grid justify-items-stretch">
              <h1 className=" justify-self-end mb-5 rounded-l-lg lg:text-sm text-xs  pt-5 pr-5 font-normal bg-[rgba(22,130,149,1)] lg:w-[466px] w-[258px] p-5 h-[72px] top-[474px] left-[1416px] text-[rgba(251,251,253,1)] ">Good Morning Suzan,  does your headache make your head hot</h1>

              <h1 className="justify-self-end mb-5 rounded-l-lg rounded-tr-lg lg:text-sm text-xs p-5 pt-3 pr-5 font-normal bg-[rgba(22,130,149,1)] w-[258px] lg:w-[466px] h-[118px] top-[620px] left-[753px] text-[rgba(251,251,253,1)] ">If yes,  that is not a big deal all you need to do is just for you to sleep after i prescribe some drugs and connect you 
                to our pharmacy so you will get the drugs in the next  5mins after the payment of the drugs has been confirmed and i will 
                send the prescriptions on hoe to use to you just hold on there alright.</h1>
                <p className="justify-self-end text-xs font-normal pt-3 text-[rgba(79,86,101,1)]">Sat 5:15 AM</p>
             </div>
            
             <div className="mt-20 w-full">
             <hr/>
             <div className="grid grid-cols-12 pt-5">
               <div className="col-span-2 flex gap-2">
               <Image src ="../pic/frame3.svg"
              width ={24}
              height={24}
              priority
              />
              <Image src ="../pic/frame2.svg"
              width ={24}
              height={24}
              priority
              />
               </div>
               <div className="col-span-9 flex justify-between rounded-full border-solid border-[#243c5a] border p-3 w-full ">
               <h1 className="text-[rgba(199,195,195,1)]"> Start a new message</h1>
               <Image src ="../pic/frame1.svg"
              width ={24}
              height={24}
              priority
              />
               </div>
               <div className="col-span-1 pl-3 pt-2">
               <Image src ="../pic/frame.svg"
               width ={24}
               height={24}
               priority
               />
               </div>
             </div>
             </div>
            </div>
           
        </div>

        

      </div>
    </AdminLayout>
  );
}

export async function getStaticProps() {
  const { all_appointments } = await import("@/data/appointment.json");

  return {
    props: {
      appointmentData: all_appointments,
    },
  };
}
