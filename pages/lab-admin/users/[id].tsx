import Search from "@/components/Search";
import AdminLayout from "@/components/admin/AdminLayout";
import { loadPaths, loadPosts } from "@/lib/loadPosts";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useState } from "react";

export default function UserDetails({ data, appointmentData }: any) {
  console.log(data);

  const [appointmentSchedule, setAppointmentSchedule] = useState(
    appointmentData ? appointmentData : []
  );
  const [sort, setSort] = useState("");

  return (
    <AdminLayout>
      <div className="appointment-page">
        <div className="appointment">
          <div className="appointment-header">
            <h2 className="text-3xl font-bold">Users</h2>
            <p className="welcome-text">Here are users section booked so far</p>
            <hr />
          </div>
          <Search />
        </div>

        <div className="flex py-4 px-5 shadow-[0_1px_16px_0px_rgba(0,0,0,0.16)] gap-4 rounded-2xl mt-10 w-full font-roboto">
          <div className="w-1/2 h-[36rem] border border-blackcolor-10 rounded-2xl py-14 px-12 text-colorbodytwo">
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="w-28 h-28 bg-backgroundidphoto flex justify-center items-center rounded-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="71"
                  viewBox="0 0 72 71"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1724_18592)">
                    <path
                      d="M12.6533 64.6922C12.6533 58.4902 15.117 52.5423 19.5025 48.1568C23.888 43.7713 29.836 41.3076 36.0379 41.3076C42.2399 41.3076 48.1879 43.7713 52.5734 48.1568C56.9588 52.5423 59.4226 58.4902 59.4226 64.6922H53.5764C53.5764 60.0407 51.7286 55.5798 48.4395 52.2907C45.1504 49.0016 40.6894 47.1538 36.0379 47.1538C31.3864 47.1538 26.9255 49.0016 23.6364 52.2907C20.3473 55.5798 18.4995 60.0407 18.4995 64.6922H12.6533ZM36.0379 38.3845C26.3479 38.3845 18.4995 30.5361 18.4995 20.8461C18.4995 11.1561 26.3479 3.30762 36.0379 3.30762C45.7279 3.30762 53.5764 11.1561 53.5764 20.8461C53.5764 30.5361 45.7279 38.3845 36.0379 38.3845ZM36.0379 32.5384C42.4979 32.5384 47.7302 27.3061 47.7302 20.8461C47.7302 14.3861 42.4979 9.15377 36.0379 9.15377C29.5779 9.15377 24.3456 14.3861 24.3456 20.8461C24.3456 27.3061 29.5779 32.5384 36.0379 32.5384Z"
                      fill="#043740"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1724_18592">
                      <rect
                        width="70.1538"
                        height="70.1538"
                        fill="white"
                        transform="translate(0.960938 0.384766)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className=" max-w-[19rem] text-center font-bold text-2xl">
                {data.name}
              </p>
              <p className=" font-semibold text-sm -mt-3">
                Section: <span className="font-light">{data.section}</span>
              </p>
              <div className="h-5 w-max text-[11px] flex items-center px-1.5 rounded-xl -mt-2">
                {data.client_status}
              </div>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <p className="font-light">Section Date:</p>
              <p className="font-medium">{data.date}</p>
            </div>
            <div className="flex justify-between text-sm mt-4">
              <p className="font-light">Phone Number:</p>
              <p className="font-medium">{data.phone_number}</p>
            </div>
            <div className="flex justify-between text-sm mt-4">
              <p className="font-light">Email Address:</p>
              <p className="font-medium">{data.email}</p>
            </div>
            <div className="text-sm mt-4">
              <p className="font-light">Password:</p>
              <input
                type="text"
                placeholder="Type here"
                className="p-2 border border-blackcolor-30 focus:outline-blackcolor-30 mt-2 rounded-md w-full"
              />
            </div>
            <div className="w-full flex justify-between gap-4 mt-4 text-sm font-medium">
              <button className="bg-[#4A9A5B] w-[60%] py-2 rounded-xl text-white">
                Chat on Whatsapp
              </button>
              <button className="border-[#4A9A5B] border w-[40%] py-2 rounded-xl text-[#4A9A5B]">
                Copy Number
              </button>
            </div>
          </div>
          <div className="w-1/2 h-[36rem] pt-4 pl-5 text-colorbodytwo">
            <div className="flex justify-end">
              <select
                name="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="py-1.5 border border-blackcolor-30 focus:outline-blackcolor-30 rounded-md w-28 text-sm"
              >
                <option value="">Sort by</option>
                <option value="students">Students</option>
                <option value="patients">Patients</option>
                <option value="non-user">Non Users</option>
                <option value="video-call">Video call</option>
                <option value="voice-call">Voice call</option>
                <option value="chat">Chat</option>
              </select>
            </div>
            <div className="pt-8">
              <p className=" font-medium">Other Users</p>
              <div className="h-[28rem] overflow-y-auto px-4">
                {sort === "students"
                  ? appointmentSchedule
                      .filter(
                        (appointment: any) =>
                          appointment.id != data.id &&
                          appointment.client_status === "Student"
                      )
                      .map(({ id, name, client_status, section }: any) => (
                        <div key={id} className="text-[12px] mt-4">
                          <div className="flex gap-2 items-center">
                            <div className="w-8 h-8 bg-backgroundidphoto flex justify-center items-center rounded-1/2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="16"
                                viewBox="0 0 14 18"
                                fill="none"
                              >
                                <path
                                  d="M13.7671 17.6597C13.7671 15.8916 13.0647 14.1959 11.8145 12.9456C10.5642 11.6954 8.86853 10.993 7.10042 10.993C5.33231 10.993 3.63662 11.6954 2.38638 12.9456C1.13613 14.1959 0.433756 15.8916 0.433756 17.6597H2.10042C2.10042 16.3336 2.62721 15.0618 3.56489 14.1241C4.50257 13.1865 5.77434 12.6597 7.10042 12.6597C8.42651 12.6597 9.69827 13.1865 10.636 14.1241C11.5736 15.0618 12.1004 16.3336 12.1004 17.6597H13.7671ZM7.10042 10.1597C9.86292 10.1597 12.1004 7.92217 12.1004 5.15967C12.1004 2.39717 9.86292 0.159668 7.10042 0.159668C4.33792 0.159668 2.10042 2.39717 2.10042 5.15967C2.10042 7.92217 4.33792 10.1597 7.10042 10.1597ZM7.10042 8.493C5.25876 8.493 3.76709 7.00133 3.76709 5.15967C3.76709 3.318 5.25876 1.82633 7.10042 1.82633C8.94209 1.82633 10.4338 3.318 10.4338 5.15967C10.4338 7.00133 8.94209 8.493 7.10042 8.493Z"
                                  fill="#043740"
                                />
                              </svg>
                            </div>
                            <p>{name}</p>
                            <p>|</p>
                            <p>
                              <span className="text-blackcolor-70">
                                Section:
                              </span>{" "}
                              {section}
                            </p>
                            <p>|</p>
                            <p>
                              <span className="text-blackcolor-50">
                                Status:
                              </span>{" "}
                              {client_status}
                            </p>
                          </div>
                          <div className="py-4 flex justify-end">
                            <Link href={`/admin-dashboard/users/${id}`}>
                              <p className="text-[#168295]">View Profile</p>
                            </Link>
                          </div>
                        </div>
                      ))
                  : sort === "patients"
                  ? appointmentSchedule
                      .filter(
                        (appointment: any) =>
                          appointment.id != data.id &&
                          appointment.client_status === "Patient"
                      )
                      .map(({ id, name, client_status, section }: any) => (
                        <div key={id} className="text-[12px] mt-4">
                          <div className="flex gap-2 items-center">
                            <div className="w-8 h-8 bg-backgroundidphoto flex justify-center items-center rounded-1/2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="16"
                                viewBox="0 0 14 18"
                                fill="none"
                              >
                                <path
                                  d="M13.7671 17.6597C13.7671 15.8916 13.0647 14.1959 11.8145 12.9456C10.5642 11.6954 8.86853 10.993 7.10042 10.993C5.33231 10.993 3.63662 11.6954 2.38638 12.9456C1.13613 14.1959 0.433756 15.8916 0.433756 17.6597H2.10042C2.10042 16.3336 2.62721 15.0618 3.56489 14.1241C4.50257 13.1865 5.77434 12.6597 7.10042 12.6597C8.42651 12.6597 9.69827 13.1865 10.636 14.1241C11.5736 15.0618 12.1004 16.3336 12.1004 17.6597H13.7671ZM7.10042 10.1597C9.86292 10.1597 12.1004 7.92217 12.1004 5.15967C12.1004 2.39717 9.86292 0.159668 7.10042 0.159668C4.33792 0.159668 2.10042 2.39717 2.10042 5.15967C2.10042 7.92217 4.33792 10.1597 7.10042 10.1597ZM7.10042 8.493C5.25876 8.493 3.76709 7.00133 3.76709 5.15967C3.76709 3.318 5.25876 1.82633 7.10042 1.82633C8.94209 1.82633 10.4338 3.318 10.4338 5.15967C10.4338 7.00133 8.94209 8.493 7.10042 8.493Z"
                                  fill="#043740"
                                />
                              </svg>
                            </div>
                            <p>{name}</p>
                            <p>|</p>
                            <p>
                              <span className="text-blackcolor-70">
                                Section:
                              </span>{" "}
                              {section}
                            </p>
                            <p>|</p>
                            <p>
                              <span className="text-blackcolor-50">
                                Status:
                              </span>{" "}
                              {client_status}
                            </p>
                          </div>
                          <div className="py-4 flex justify-end">
                            <Link href={`/admin-dashboard/users/${id}`}>
                              <p className="text-[#168295]">View Profile</p>
                            </Link>
                          </div>
                        </div>
                      ))
                  : sort === "non-user"
                  ? appointmentSchedule
                      .filter(
                        (appointment: any) =>
                          appointment.id != data.id &&
                          appointment.client_status === "User"
                      )
                      .map(({ id, name, client_status, section }: any) => (
                        <div key={id} className="text-[12px] mt-4">
                          <div className="flex gap-2 items-center">
                            <div className="w-8 h-8 bg-backgroundidphoto flex justify-center items-center rounded-1/2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="16"
                                viewBox="0 0 14 18"
                                fill="none"
                              >
                                <path
                                  d="M13.7671 17.6597C13.7671 15.8916 13.0647 14.1959 11.8145 12.9456C10.5642 11.6954 8.86853 10.993 7.10042 10.993C5.33231 10.993 3.63662 11.6954 2.38638 12.9456C1.13613 14.1959 0.433756 15.8916 0.433756 17.6597H2.10042C2.10042 16.3336 2.62721 15.0618 3.56489 14.1241C4.50257 13.1865 5.77434 12.6597 7.10042 12.6597C8.42651 12.6597 9.69827 13.1865 10.636 14.1241C11.5736 15.0618 12.1004 16.3336 12.1004 17.6597H13.7671ZM7.10042 10.1597C9.86292 10.1597 12.1004 7.92217 12.1004 5.15967C12.1004 2.39717 9.86292 0.159668 7.10042 0.159668C4.33792 0.159668 2.10042 2.39717 2.10042 5.15967C2.10042 7.92217 4.33792 10.1597 7.10042 10.1597ZM7.10042 8.493C5.25876 8.493 3.76709 7.00133 3.76709 5.15967C3.76709 3.318 5.25876 1.82633 7.10042 1.82633C8.94209 1.82633 10.4338 3.318 10.4338 5.15967C10.4338 7.00133 8.94209 8.493 7.10042 8.493Z"
                                  fill="#043740"
                                />
                              </svg>
                            </div>
                            <p>{name}</p>
                            <p>|</p>
                            <p>
                              <span className="text-blackcolor-70">
                                Section:
                              </span>{" "}
                              {section}
                            </p>
                            <p>|</p>
                            <p>
                              <span className="text-blackcolor-50">
                                Status:
                              </span>{" "}
                              {client_status}
                            </p>
                          </div>
                          <div className="py-4 flex justify-end">
                            <Link href={`/admin-dashboard/users/${id}`}>
                              <p className="text-[#168295]">View Profile</p>
                            </Link>
                          </div>
                        </div>
                      ))
                  : sort === "video-call"
                  ? appointmentSchedule
                      .filter(
                        (appointment: any) =>
                          appointment.id != data.id &&
                          appointment.section === "Video Call"
                      )
                      .map(({ id, name, status, section }: any) => (
                        <div key={id} className="text-[12px] mt-4">
                          <div className="flex gap-2 items-center">
                            <div className="w-8 h-8 bg-backgroundidphoto flex justify-center items-center rounded-1/2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="16"
                                viewBox="0 0 14 18"
                                fill="none"
                              >
                                <path
                                  d="M13.7671 17.6597C13.7671 15.8916 13.0647 14.1959 11.8145 12.9456C10.5642 11.6954 8.86853 10.993 7.10042 10.993C5.33231 10.993 3.63662 11.6954 2.38638 12.9456C1.13613 14.1959 0.433756 15.8916 0.433756 17.6597H2.10042C2.10042 16.3336 2.62721 15.0618 3.56489 14.1241C4.50257 13.1865 5.77434 12.6597 7.10042 12.6597C8.42651 12.6597 9.69827 13.1865 10.636 14.1241C11.5736 15.0618 12.1004 16.3336 12.1004 17.6597H13.7671ZM7.10042 10.1597C9.86292 10.1597 12.1004 7.92217 12.1004 5.15967C12.1004 2.39717 9.86292 0.159668 7.10042 0.159668C4.33792 0.159668 2.10042 2.39717 2.10042 5.15967C2.10042 7.92217 4.33792 10.1597 7.10042 10.1597ZM7.10042 8.493C5.25876 8.493 3.76709 7.00133 3.76709 5.15967C3.76709 3.318 5.25876 1.82633 7.10042 1.82633C8.94209 1.82633 10.4338 3.318 10.4338 5.15967C10.4338 7.00133 8.94209 8.493 7.10042 8.493Z"
                                  fill="#043740"
                                />
                              </svg>
                            </div>
                            <p>{name}</p>
                            <p>|</p>
                            <p>
                              <span className="text-blackcolor-70">
                                Section:
                              </span>{" "}
                              {section}
                            </p>
                            <p>|</p>
                            <p
                              className={
                                status === "Taken"
                                  ? "text-[#0F780D]"
                                  : status === "Pending"
                                  ? "text-[#DF8806]"
                                  : "text-[#C12126]"
                              }
                            >
                              <span className="text-blackcolor-50">
                                Status:
                              </span>{" "}
                              {status}
                            </p>
                          </div>
                          <div className="py-4 flex justify-end">
                            <Link href={`/admin-dashboard/users/${id}`}>
                              <p className="text-[#168295]">View Profile</p>
                            </Link>
                          </div>
                        </div>
                      ))
                  : sort === "voice-call"
                  ? appointmentSchedule
                      .filter(
                        (appointment: any) =>
                          appointment.id != data.id &&
                          appointment.section === "Voice Call"
                      )
                      .map(({ id, name, status, section }: any) => (
                        <div key={id} className="text-[12px] mt-4">
                          <div className="flex gap-2 items-center">
                            <div className="w-8 h-8 bg-backgroundidphoto flex justify-center items-center rounded-1/2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="16"
                                viewBox="0 0 14 18"
                                fill="none"
                              >
                                <path
                                  d="M13.7671 17.6597C13.7671 15.8916 13.0647 14.1959 11.8145 12.9456C10.5642 11.6954 8.86853 10.993 7.10042 10.993C5.33231 10.993 3.63662 11.6954 2.38638 12.9456C1.13613 14.1959 0.433756 15.8916 0.433756 17.6597H2.10042C2.10042 16.3336 2.62721 15.0618 3.56489 14.1241C4.50257 13.1865 5.77434 12.6597 7.10042 12.6597C8.42651 12.6597 9.69827 13.1865 10.636 14.1241C11.5736 15.0618 12.1004 16.3336 12.1004 17.6597H13.7671ZM7.10042 10.1597C9.86292 10.1597 12.1004 7.92217 12.1004 5.15967C12.1004 2.39717 9.86292 0.159668 7.10042 0.159668C4.33792 0.159668 2.10042 2.39717 2.10042 5.15967C2.10042 7.92217 4.33792 10.1597 7.10042 10.1597ZM7.10042 8.493C5.25876 8.493 3.76709 7.00133 3.76709 5.15967C3.76709 3.318 5.25876 1.82633 7.10042 1.82633C8.94209 1.82633 10.4338 3.318 10.4338 5.15967C10.4338 7.00133 8.94209 8.493 7.10042 8.493Z"
                                  fill="#043740"
                                />
                              </svg>
                            </div>
                            <p>{name}</p>
                            <p>|</p>
                            <p>
                              <span className="text-blackcolor-70">
                                Section:
                              </span>{" "}
                              {section}
                            </p>
                            <p>|</p>
                            <p
                              className={
                                status === "Taken"
                                  ? "text-[#0F780D]"
                                  : status === "Pending"
                                  ? "text-[#DF8806]"
                                  : "text-[#C12126]"
                              }
                            >
                              <span className="text-blackcolor-50">
                                Status:
                              </span>{" "}
                              {status}
                            </p>
                          </div>
                          <div className="py-4 flex justify-end">
                            <Link href={`/admin-dashboard/users/${id}`}>
                              <p className="text-[#168295]">View Profile</p>
                            </Link>
                          </div>
                        </div>
                      ))
                  : sort === "chat"
                  ? appointmentSchedule
                      .filter(
                        (appointment: any) =>
                          appointment.id != data.id &&
                          appointment.section === "Chat"
                      )
                      .map(({ id, name, status, section }: any) => (
                        <div key={id} className="text-[12px] mt-4">
                          <div className="flex gap-2 items-center">
                            <div className="w-8 h-8 bg-backgroundidphoto flex justify-center items-center rounded-1/2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="16"
                                viewBox="0 0 14 18"
                                fill="none"
                              >
                                <path
                                  d="M13.7671 17.6597C13.7671 15.8916 13.0647 14.1959 11.8145 12.9456C10.5642 11.6954 8.86853 10.993 7.10042 10.993C5.33231 10.993 3.63662 11.6954 2.38638 12.9456C1.13613 14.1959 0.433756 15.8916 0.433756 17.6597H2.10042C2.10042 16.3336 2.62721 15.0618 3.56489 14.1241C4.50257 13.1865 5.77434 12.6597 7.10042 12.6597C8.42651 12.6597 9.69827 13.1865 10.636 14.1241C11.5736 15.0618 12.1004 16.3336 12.1004 17.6597H13.7671ZM7.10042 10.1597C9.86292 10.1597 12.1004 7.92217 12.1004 5.15967C12.1004 2.39717 9.86292 0.159668 7.10042 0.159668C4.33792 0.159668 2.10042 2.39717 2.10042 5.15967C2.10042 7.92217 4.33792 10.1597 7.10042 10.1597ZM7.10042 8.493C5.25876 8.493 3.76709 7.00133 3.76709 5.15967C3.76709 3.318 5.25876 1.82633 7.10042 1.82633C8.94209 1.82633 10.4338 3.318 10.4338 5.15967C10.4338 7.00133 8.94209 8.493 7.10042 8.493Z"
                                  fill="#043740"
                                />
                              </svg>
                            </div>
                            <p>{name}</p>
                            <p>|</p>
                            <p>
                              <span className="text-blackcolor-70">
                                Section:
                              </span>{" "}
                              {section}
                            </p>
                            <p>|</p>
                            <p
                              className={
                                status === "Taken"
                                  ? "text-[#0F780D]"
                                  : status === "Pending"
                                  ? "text-[#DF8806]"
                                  : "text-[#C12126]"
                              }
                            >
                              <span className="text-blackcolor-50">
                                Status:
                              </span>{" "}
                              {status}
                            </p>
                          </div>
                          <div className="py-4 flex justify-end">
                            <Link href={`/admin-dashboard/users/${id}`}>
                              <p className="text-[#168295]">View Profile</p>
                            </Link>
                          </div>
                        </div>
                      ))
                  : appointmentSchedule
                      .filter((appointment: any) => appointment.id != data.id)
                      .map(({ id, name, status, section }: any) => (
                        <div key={id} className="text-[12px] mt-4">
                          <div className="flex gap-2 items-center">
                            <div className="w-8 h-8 bg-backgroundidphoto flex justify-center items-center rounded-1/2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="16"
                                viewBox="0 0 14 18"
                                fill="none"
                              >
                                <path
                                  d="M13.7671 17.6597C13.7671 15.8916 13.0647 14.1959 11.8145 12.9456C10.5642 11.6954 8.86853 10.993 7.10042 10.993C5.33231 10.993 3.63662 11.6954 2.38638 12.9456C1.13613 14.1959 0.433756 15.8916 0.433756 17.6597H2.10042C2.10042 16.3336 2.62721 15.0618 3.56489 14.1241C4.50257 13.1865 5.77434 12.6597 7.10042 12.6597C8.42651 12.6597 9.69827 13.1865 10.636 14.1241C11.5736 15.0618 12.1004 16.3336 12.1004 17.6597H13.7671ZM7.10042 10.1597C9.86292 10.1597 12.1004 7.92217 12.1004 5.15967C12.1004 2.39717 9.86292 0.159668 7.10042 0.159668C4.33792 0.159668 2.10042 2.39717 2.10042 5.15967C2.10042 7.92217 4.33792 10.1597 7.10042 10.1597ZM7.10042 8.493C5.25876 8.493 3.76709 7.00133 3.76709 5.15967C3.76709 3.318 5.25876 1.82633 7.10042 1.82633C8.94209 1.82633 10.4338 3.318 10.4338 5.15967C10.4338 7.00133 8.94209 8.493 7.10042 8.493Z"
                                  fill="#043740"
                                />
                              </svg>
                            </div>
                            <p>{name}</p>
                            <p>|</p>
                            <p>
                              <span className="text-blackcolor-70">
                                Section:
                              </span>{" "}
                              {section}
                            </p>
                            <p>|</p>
                            <p
                              className={
                                status === "Taken"
                                  ? "text-[#0F780D]"
                                  : status === "Pending"
                                  ? "text-[#DF8806]"
                                  : "text-[#C12126]"
                              }
                            >
                              <span className="text-blackcolor-50">
                                Status:
                              </span>{" "}
                              {status}
                            </p>
                          </div>
                          <div className="py-4 flex justify-end">
                            <Link href={`/admin-dashboard/users/${id}`}>
                              <p className="text-[#168295]">View Profile</p>
                            </Link>
                          </div>
                        </div>
                      ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export const getStaticPaths = async () => {
  const data = await loadPosts();

  const paths = data.map((user: any) => {
    return {
      params: {
        id: user.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
    /* revalidate(), */
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  const data = await loadPaths(id);
  const { all_appointments } = await import("@/data/appointment.json");

  return {
    props: {
      data,
      appointmentData: all_appointments,
    },
    /* revalidate: 10 */
  };
};
// #262525
