import Search from "@/components/Search";
import AdminLayout from "@/components/admin/AdminLayout";
import Link from "next/link";
import { useState } from "react";

export default function Appointment({ appointmentData }: any) {
  const [allAppointment, setAllAppointment] = useState(true);
  const [pending, setPending] = useState(false);
  const [taken, setTaken] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [appointmentSchedule, setAppointmentSchedule] = useState(
    appointmentData ? appointmentData : []
  );

  return (
    <AdminLayout>
      <div className="appointment-page">
        <div className="appointment">
          <div className="appointment-header">
            <h2 className="lg:text-3xl text-xl font-bold">Appointment</h2>
            <p className="welcome-text text-sm pt-3">
              Here are appointment section booked so far
            </p>
            <hr />
          </div>
          <Search />
        </div>

        <div className="my-3 flex items-center gap-2 text-[#19191D] p-1 border border-[#5A5B6A] rounded w-32">
          <p className="text-sm">Filter by date </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <g clipPath="url(#clip0_1705_15043)">
              <path
                d="M4.66663 7.16663L7.99996 10.5L11.3333 7.16663H4.66663Z"
                fill="#19191D"
              />
            </g>
            <defs>
              <clipPath id="clip0_1705_15043">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="flex w-1/2 justify-between">
          <div
            onClick={() => {
              setAllAppointment(true);
              setPending(false);
              setTaken(false);
              setCancel(false);
            }}
            className={
              allAppointment
                ? " font-semibold text-colorviewall border-b border-colorviewall p-2"
                : "cursor-pointer text-colorsubheader font-semibold p-2"
            }
          >
            All Appointment
          </div>
          <div
            onClick={() => {
              setAllAppointment(false);
              setPending(true);
              setTaken(false);
              setCancel(false);
            }}
            className={
              pending
                ? "font-semibold text-colorviewall border-b border-colorviewall p-2"
                : "cursor-pointer text-colorsubheader font-semibold p-2"
            }
          >
            Pending
          </div>
          <div
            onClick={() => {
              setAllAppointment(false);
              setPending(false);
              setTaken(true);
              setCancel(false);
            }}
            className={
              taken
                ? "font-semibold text-colorviewall border-b border-colorviewall p-2"
                : "cursor-pointer text-colorsubheader font-semibold p-2"
            }
          >
            Taken
          </div>
          <div
            onClick={() => {
              setAllAppointment(false);
              setPending(false);
              setTaken(false);
              setCancel(true);
            }}
            className={
              cancel
                ? "font-semibold text-colorviewall border-b border-colorviewall p-2"
                : "cursor-pointer text-colorsubheader font-semibold p-2"
            }
          >
            Cancel
          </div>
        </div>

        {allAppointment && (
          <div className="overflow-x-auto mt-5">
            <table className="table table-xs w-full whitespace-nowrap " >
              <thead>
                <tr className="border-b border-[#DDE5E9]">
                  <th className="pb-2 pl-4">Name</th>
                  <th>Student ID</th>
                  <th>Status</th>
                  <th>Email</th>
                  <th>Section</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {appointmentSchedule
                  .slice(0, 12)
                  .map(
                    ({
                      id,
                      student_id,
                      name,
                      status,
                      email,
                      section,
                      date,
                    }: any) => (
                      <tr key={id} className="border-b border-[#DDE5E9]">
                        <td className="p-4">
                          <Link href={`/admin-dashboard/appointment/${id}`}>
                            {name}
                          </Link>
                        </td>
                        <td>{student_id}</td>
                        <td className="">
                          <div
                            className={
                              status === "Pending"
                                ? "text-[#A5640C] bg-[#FFFDF0] h-5 w-max text-[11px] flex items-center px-1.5 rounded-lg"
                                : status === "Taken"
                                ? "text-[#06C270] bg-[#DAFCEB] h-5 w-max text-[11px] flex items-center px-1.5 rounded-xl"
                                : "text-[#C12126] bg-[#FFF0F0] h-5 w-max text-[11px] flex items-center px-1.5 rounded-xl font-semibold"
                            }
                          >
                            &bull; {status}
                          </div>
                        </td>
                        <td>{email}</td>
                        <td>{section}</td>
                        <td>{date}</td>
                      </tr>
                    )
                  )}
              </tbody>
            </table>
          </div>
        )}

        {pending && (
          <div className="overflow-x-auto mt-5">
            <table className="table table-xs w-full whitespace-nowrap">
              <thead>
                <tr className="border-b border-[#DDE5E9]">
                  <th className="pb-2 pl-4">Name</th>
                  <th>Student ID</th>
                  <th>Status</th>
                  <th>Email</th>
                  <th>Section</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {appointmentSchedule
                  .filter(
                    (appointment: any) => appointment.status === "Pending"
                  )
                  .map(
                    ({
                      id,
                      student_id,
                      name,
                      status,
                      email,
                      section,
                      date,
                    }: any) => (
                      <tr key={id} className="border-b border-[#DDE5E9]">
                        <td className="p-4">
                          <Link href={`/admin-dashboard/appointment/${id}`}>
                            {name}
                          </Link>
                        </td>
                        <td>{student_id}</td>
                        <td className="">
                          <div
                            className={
                              status === "Pending"
                                ? "text-[#A5640C] bg-[#FFFDF0] h-5 w-max text-[11px] flex items-center px-1.5 rounded-lg"
                                : status === "Taken"
                                ? "text-[#06C270] bg-[#DAFCEB] h-5 w-max text-[11px] flex items-center px-1.5 rounded-xl"
                                : "text-[#C12126] bg-[#FFF0F0] h-5 w-max text-[11px] flex items-center px-1.5 rounded-xl"
                            }
                          >
                            &bull; {status}
                          </div>
                        </td>
                        <td>{email}</td>
                        <td>{section}</td>
                        <td>{date}</td>
                      </tr>
                    )
                  )}
              </tbody>
            </table>
          </div>
        )}

        {taken && (
          <div className="overflow-x-auto mt-5">
            <table className="table table-xs w-full whitespace-nowrap pl-5">
              <thead>
                <tr className="border-b border-[#DDE5E9]">
                  <th className="pb-2 pl-4">Name</th>
                  <th>Student ID</th>
                  <th>Status</th>
                  <th>Email</th>
                  <th>Section</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {appointmentSchedule
                  .filter((appointment: any) => appointment.status === "Taken")
                  .map(
                    ({
                      id,
                      student_id,
                      name,
                      status,
                      email,
                      section,
                      date,
                    }: any) => (
                      <tr key={id} className="border-b border-[#DDE5E9]">
                        <td className="p-4 b">
                          <Link href={`/admin-dashboard/appointment/${id}`}>
                            {name}
                          </Link>
                        </td>
                        <td>{student_id}</td>
                        <td className="">
                          <div
                            className={
                              status === "Pending"
                                ? "text-[#A5640C] bg-[#FFFDF0] h-5 w-max text-[11px] flex items-center px-1.5 rounded-lg"
                                : status === "Taken"
                                ? "text-[#06C270] bg-[#DAFCEB] h-5 w-max text-[11px] flex items-center px-1.5 rounded-xl"
                                : "text-[#C12126] bg-[#FFF0F0] h-5 w-max text-[11px] flex items-center px-1.5 rounded-xl"
                            }
                          >
                            &bull; {status}
                          </div>
                        </td>
                        <td>{email}</td>
                        <td>{section}</td>
                        <td>{date}</td>
                      </tr>
                    )
                  )}
              </tbody>
            </table>
          </div>
        )}

        {cancel && (
          <div className="overflow-x-auto mt-5">
            <table className="table table-xs w-full whitespace-nowrap ">
              <thead>
                <tr className="border-b border-[#DDE5E9]">
                  <th className="pb-2 pl-4">Name</th>
                  <th>Student ID</th>
                  <th>Status</th>
                  <th>Email</th>
                  <th>Section</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {appointmentSchedule
                  .filter((appointment: any) => appointment.status === "Cancel")
                  .map(
                    ({
                      id,
                      student_id,
                      name,
                      status,
                      email,
                      section,
                      date,
                    }: any) => (
                      <tr key={id} className="border-b border-[#DDE5E9]">
                        <td className="p-4">
                          <Link href={`/admin-dashboard/appointment/${id}`}>
                            {name}
                          </Link>
                        </td>
                        <td>{student_id}</td>
                        <td className="">
                          <div
                            className={
                              status === "Pending"
                                ? "text-[#A5640C] bg-[#FFFDF0] h-5 w-max text-[11px] flex items-center px-1.5 rounded-lg"
                                : status === "Taken"
                                ? "text-[#06C270] bg-[#DAFCEB] h-5 w-max text-[11px] flex items-center px-1.5 rounded-xl"
                                : "text-[#C12126] bg-[#FFF0F0] h-5 w-max text-[11px] flex items-center px-1.5 rounded-xl"
                            }
                          >
                            &bull; {status}
                          </div>
                        </td>
                        <td>{email}</td>
                        <td>{section}</td>
                        <td>{date}</td>
                      </tr>
                    )
                  )}
              </tbody>
            </table>
          </div>
        )}
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
