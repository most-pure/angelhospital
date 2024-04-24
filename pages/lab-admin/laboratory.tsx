import Search from "@/components/Search";
import AdminLayout from "@/components/admin/AdminLayout";
import Link from "next/link";
import { useState } from "react";

export default function Users({ appointmentData }: any) {
  const [allUsers, setAllUsers] = useState(true);
  const [students, setStudents] = useState(false);
  const [patients, setPatients] = useState(false);
  const [user, setUser] = useState(false);
  const [appointmentSchedule, setAppointmentSchedule] = useState(
    appointmentData ? appointmentData : []
  );
  return (
    <AdminLayout>
      <div className="appointment-page">
        <div className="appointment">
          <div className="appointment-header">
            <h2 className="text-3xl font-bold">Laboratory</h2>
            <p className="welcome-text">Track your laboratory</p>
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

        <div className="flex w-1/2 justify-between ">
          <div
            onClick={() => {
              setAllUsers(true);
              setStudents(false);
              setPatients(false);
              setUser(false);
            }}
            className={
              allUsers
                ? " font-semibold text-colorviewall border-b border-colorviewall p-2"
                : "cursor-pointer text-colorsubheader font-semibold p-2"
            }
          >
            All Users
          </div>
          <div
            onClick={() => {
              setAllUsers(false);
              setStudents(true);
              setPatients(false);
              setUser(false);
            }}
            className={
              students
                ? "font-semibold text-colorviewall border-b border-colorviewall p-2"
                : "cursor-pointer text-colorsubheader font-semibold p-2"
            }
          >
            Students
          </div>
          <div
            onClick={() => {
              setAllUsers(false);
              setStudents(false);
              setPatients(true);
              setUser(false);
            }}
            className={
              patients
                ? "font-semibold text-colorviewall border-b border-colorviewall p-2"
                : "cursor-pointer text-colorsubheader font-semibold p-2"
            }
          >
            Patients
          </div>
          <div
            onClick={() => {
              setAllUsers(false);
              setStudents(false);
              setPatients(false);
              setUser(true);
            }}
            className={
              user
                ? "font-semibold text-colorviewall border-b border-colorviewall p-2"
                : "cursor-pointer text-colorsubheader font-semibold p-2"
            }
          >
            Non Users
          </div>
        </div>

        {allUsers && (
          <div className="overflow-x-auto mt-5">
            <table className="table table-xs w-full whitespace-nowrap">
              <thead>
                <tr className="border-b border-[#DDE5E9]">
                  <th className="pb-2 pl-4">Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Amt. of Appointment</th>
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
                      no_of_appointments,
                      name,
                      client_status,
                      email,
                      section,
                      date,
                    }: any) => (
                      <tr key={id} className="border-b border-[#DDE5E9]">
                        <td className="p-4">
                          <Link href={`/admin-dashboard/users/${id}`}>
                            {name}
                          </Link>
                        </td>
                        <td>{email}</td>
                        <td>{client_status}</td>
                        <td>{no_of_appointments}</td>
                        <td>{section}</td>
                        <td>{date}</td>
                      </tr>
                    )
                  )}
              </tbody>
            </table>
          </div>
        )}

        {students && (
          <div className="overflow-x-auto mt-5">
            <table className="table table-xs w-full whitespace-nowrap">
              <thead>
                <tr className="border-b border-[#DDE5E9]">
                  <th className="pb-2 pl-4">Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Amt. of Appointment</th>
                  <th>Section</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {appointmentSchedule
                  .filter(
                    (appointment: any) =>
                      appointment.client_status === "Student"
                  )
                  .map(
                    ({
                      id,
                      no_of_appointments,
                      name,
                      client_status,
                      email,
                      section,
                      date,
                    }: any) => (
                      <tr key={id} className="border-b border-[#DDE5E9]">
                        <td className="p-4">
                          <Link href={`/admin-dashboard/users/${id}`}>
                            {name}
                          </Link>
                        </td>
                        <td>{email}</td>
                        <td>{client_status}</td>
                        <td>{no_of_appointments}</td>
                        <td>{section}</td>
                        <td>{date}</td>
                      </tr>
                    )
                  )}
              </tbody>
            </table>
          </div>
        )}

        {patients && (
          <div className="overflow-x-auto mt-5">
            <table className="table table-xs w-full whitespace-nowrap">
              <thead>
                <tr className="border-b border-[#DDE5E9]">
                  <th className="pb-2 pl-4">Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Amt. of Appointment</th>
                  <th>Section</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {appointmentSchedule
                  .filter(
                    (appointment: any) =>
                      appointment.client_status === "Patient"
                  )
                  .map(
                    ({
                      id,
                      no_of_appointments,
                      name,
                      client_status,
                      email,
                      section,
                      date,
                    }: any) => (
                      <tr key={id} className="border-b border-[#DDE5E9]">
                        <td className="p-4">
                          <Link href={`/admin-dashboard/users/${id}`}>
                            {name}
                          </Link>
                        </td>
                        <td>{email}</td>
                        <td>{client_status}</td>
                        <td>{no_of_appointments}</td>
                        <td>{section}</td>
                        <td>{date}</td>
                      </tr>
                    )
                  )}
              </tbody>
            </table>
          </div>
        )}

        {user && (
          <div className="overflow-x-auto mt-5">
            <table className="table table-xs w-full whitespace-nowrap">
              <thead>
                <tr className="border-b border-[#DDE5E9]">
                  <th className="pb-2 pl-4">Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Amt. of Appointment</th>
                  <th>Section</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {appointmentSchedule
                  .filter(
                    (appointment: any) => appointment.client_status === "User"
                  )
                  .map(
                    ({
                      id,
                      no_of_appointments,
                      name,
                      client_status,
                      email,
                      section,
                      date,
                    }: any) => (
                      <tr key={id} className="border-b border-[#DDE5E9]">
                        <td className="p-4">
                          <Link href={`/admin-dashboard/users/${id}`}>
                            {name}
                          </Link>
                        </td>
                        <td>{email}</td>
                        <td>{client_status}</td>
                        <td>{no_of_appointments}</td>
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
