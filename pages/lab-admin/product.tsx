import Search from "@/components/Search";
import Admindash from "@/components/admin/Admindash";
import Link from "next/link"; 
import ProductCard from "./ProductCard";
import { useState } from "react";


export default function Appointment({ cardData }: any ) {
  const [allcard, setAllCard] = useState(true);
  const [Dashboard, setDashboard] = useState(true);
  const [Product, setProduct] = useState(false);
  const [Order, setOrder] = useState(false);
  const [cardSchedule, setcardSchedule] = useState(
    cardData ? cardData : []
  );


  const ProductData =[
    {
      id:1,
      name:"menstration",
      image:"../Pic/product1.svg",
    },
    {
      id:1,
      name:"menstration",
      image:"../Pic/loop.svg",
    },
  ];

  return (
    <Admindash>
   
        <div className="bg-white">
        <div className=" ">
        <div className="rounded-mb">
        <div className="flex w-[360px] mr-40 ">
          <div
            onClick={() => {
              setDashboard(true);
              setProduct(false);
              setOrder(false);
             
            }}
            className={
              Dashboard
                ? " font-semibold text-colorviewall border-b border-colorviewall p-2"
                : "cursor-pointer text-colorsubheader font-semibold p-2"
            }
          >
            Dashboard
          </div>
          <div
            onClick={() => {
              setDashboard(false);
              setProduct(true);
              setOrder(false);
            }}
            className={
              Product
                ? "font-semibold text-colorviewall border-b border-colorviewall p-2"
                : "cursor-pointer text-colorsubheader font-semibold p-2"
            }
          >
            Product
          </div>
          <div
            onClick={() => {
              setDashboard(false);
              setProduct(false);
              setOrder(true);
           
            }}
            className={
              Order
                ? "font-semibold text-colorviewall border-b border-colorviewall p-2"
                : "cursor-pointer text-colorsubheader font-semibold p-2"
            }
          >
            Order
          </div>
        
        </div>
<<<<<<< HEAD:pages/lab-admin/product.tsx
        <div className="">
            <div className="flex gap-3 fixed cursor-pointer">
              
              
              
            </div>
         
        <div className="grid grid-cols-4  gap-x-3 w-fit pt-5 rounded-lg bg-white;
=======
        
        {Dashboard && (
          <div className="overflow-x-auto mt-5">
              <div className=" grid-cols-1 lg:grid grid-cols-4  gap-x-3 w-fit pt-5 rounded-lg bg-white;
>>>>>>> c1a5c20176bdee598d77edb9bee7b9345b74b169:pages/admin-dashboard/product.tsx
">
            <div  className="shadow-md p-5 ">
                <h1 className="lg:text-base font-light text-xs">TOTAL APPROVED PRODUCT</h1>
                <p>1509</p>
            </div>
            <div  className="shadow-md p-5 ">
                <h1 className="lg:text-base font-light text-xs">TOTAL NON APPROVED PRODUCT</h1>
                <p>700</p>
            </div>
            <div  className="shadow-md p-5 ">
                <h1 className="lg:text-base font-light text-xs">TOTAL REJECTED PRODUCT</h1>
                <p>200</p>
            </div>
            <div className="shadow-md p-5">
                <h1 className="lg:text-base font-light text-xs  ">WALLET BALANCET</h1>
                <p>200,000</p>
            </div>
        </div>

        <div className="lg:grid grid-cols-3  pt-5 shadow-md p-5">
        <div className="lg:pb-0 pb-5">
            <h1 className="text-sm"> TOTAL PROJECT POSTED</h1>
            <p className="text-lg font-normal"> <span className="text-xl font-semibold">4000</span> Products</p>
        </div>
        <div  className=" lg:pb-0 pb-5">
            <h1 className="text-sm"> TOTAL PROJECT SOLD</h1>
            <p className="text-lg font-normal"> <span className="text-xl font-semibold">500</span> Products</p>
        </div>
        <div  className="lg:pb-0 pb-5">
            <h1 className="text-sm "> TOTAL PROJECT AVALIABLE</h1>
            <p className="text-lg font-normal"> <span className="text-xl font-semibold">3500</span> Products</p>
        </div>
        </div>

        </div>
<<<<<<< HEAD:pages/lab-admin/product.tsx
   
   <div className="Products">
   helloooooo
    </div>
=======
        )}
        </div>
      
        {Product && (
          <div className="overflow-x-auto mt-5">
           {ProductData.map((Product) => (
            <ProductCard
            key={Product.id}
            name={Product.name}
           imgUrl={Product.image}
            />
        ))}
>>>>>>> c1a5c20176bdee598d77edb9bee7b9345b74b169:pages/admin-dashboard/product.tsx

             
          </div>
        )}

       







        {Order && (
          <div className="overflow-x-auto mt-5">
            <table className="table table-xs w-full whitespace-nowrap " >
              <thead>
                <tr className="border-b border-[#DDE5E9]">
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th>Status</th>
                  <th>ordered By</th>
                  <th>Quantity</th>
                  <th>Order Date</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {cardSchedule
                  .slice(0, 12)
                  .map(
                    ({
                      id,
                      product_id,
                      product_name,
                      status,
                      quantity,
                      ordered_by,
                      ordered_date,
                      amount,
                    }: any ) => (
                      <tr key={id} className="border-b border-[#DDE5E9]">
                        <td className="p-4">
                          <Link href={`/admin-dashboard/card/${id}`}>
                            {product_name}
                          </Link>
                        </td>
                        <td>{product_id}</td>
                        <td className="">
                          <div
                            className={
                              status === "In Progress"
                                ? "text-[#A5640C] bg-[#FFFDF0] h-5 w-max text-[11px] flex items-center px-1.5 rounded-lg"
                                : status === "Delivered"
                                ? "text-[#06C270] bg-[#DAFCEB] h-5 w-max text-[11px] flex items-center px-1.5 rounded-xl"
                                : "text-[#C12126] bg-[#FFF0F0] h-5 w-max text-[11px] flex items-center px-1.5 rounded-xl font-semibold"
                            }
                          >
                            &bull; {status}
                          </div>
                        </td>
                        <td>{quantity}</td>
                        <td>{ordered_by}</td>
                        <td>{ordered_date}</td>
                        <td>{amount}</td>
                      </tr>
                    )
                  )}
              </tbody>
            </table>
          </div>
        )}
 
        </div>
        </div>

    
    
    </Admindash>
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
