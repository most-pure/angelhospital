import AdminLayout from "@/components/admin/AdminLayout";
import {
  FiPieChart,
  FiUsers,
  FiBarChart2,
  FiCalendar,
  FiSearch,
} from "react-icons/fi";
import {
  FaUserMd,
  FaMedkit,
  FaSignOutAlt,
  FaCog,
  FaCaretDown,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa";
import Image from "next/image";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Search from "@/components/Search";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, {
  Draggable,
  DropArg,
} from "@fullcalendar/interaction";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";

interface Event {
  title: string;
  start: Date | string;
  allDay: boolean;
  id: number;
}

export default function AdminDashboard({
  doctorsData,
  patientsData,
  appointmentData,
}: any) {
  /* const data = JSON.parse(window.localStorage.getItem("calenderEvents") as any); */

  const [allDoctors, setAllDoctors] = useState(doctorsData ? doctorsData : []);
  const [patients, setPatients] = useState(patientsData ? patientsData : []);
  const [appointmentSchedule, setAppointmentSchedule] = useState(
    appointmentData ? appointmentData : []
  );
  const [open, setOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState<number | null>(null);
  const [events, setEvents] = useState();
  const [allEvents, setAllEvents] = useState<Event[]>([]);
  const [newEvent, setNewEvent] = useState<Event>({
    title: "",
    start: "",
    allDay: false,
    id: 0,
  });

  function saveAllEvents() {
    window.localStorage.setItem("calenderEvents", JSON.stringify(allEvents));
  }

  useEffect(() => {
    saveAllEvents();
  }, [allEvents]);

  function handleDateClick(arg: { date: Date; allDay: boolean }) {
    setNewEvent({
      ...newEvent,
      start: arg.date,
      allDay: arg.allDay,
      id: new Date().getTime(),
    });
    setOpen(true);
  }

  const handleOpen = () => {
    setOpen(!open);
    setNewEvent({ ...newEvent, title: "" });
  };
  const handleCloseDeleteModal = () => setDeleteModal(!deleteModal);

  function handleSubmitEvent(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAllEvents([...allEvents, newEvent]);
    setOpen(false);
    saveAllEvents();
    setNewEvent({
      title: "",
      start: "",
      allDay: false,
      id: 0,
    });
  }

  function handleDeleteModal(data: { event: { id: string } }) {
    setDeleteModal(true);
    setIdToDelete(Number(data.event.id));
  }

  function handleDelete() {
    setAllEvents(
      allEvents.filter((event) => Number(event.id) !== Number(idToDelete))
    );
    saveAllEvents();
    setDeleteModal(false);
    setIdToDelete(null);
    setNewEvent({
      title: "",
      start: "",
      allDay: false,
      id: 0,
    });
  }

  return (
    <AdminLayout>
      <div className="admin-dashboard-content">
        <div className="main-dashboard">
          <h2 className=" text-3xl font-bold">Dashboard</h2>
          <p className="welcome-text">
            Welcome back, Adebayo, Manage and track your Hospital
          </p>
          <hr />
          <section className="admin-links">
            <div className="admin-links-details">
              <div className="admin-links-icon">
                <FiCalendar size={24} />
              </div>
              <div className="admin-links-writeup">
                <h4 className="admin-links-header font-bold">Appointments</h4>
                <p className="admin-links-desc">100+ Section Booked</p>
              </div>
            </div>
            <div className="admin-links-details">
              <div className="admin-links-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 17.25C2.58579 17.25 2.25 17.5858 2.25 18C2.25 18.4142 2.58579 18.75 3 18.75V17.25ZM10.5 18.75C10.9142 18.75 11.25 18.4142 11.25 18C11.25 17.5858 10.9142 17.25 10.5 17.25V18.75ZM4 21.25C3.58579 21.25 3.25 21.5858 3.25 22C3.25 22.4142 3.58579 22.75 4 22.75V21.25ZM20 22.75C20.4142 22.75 20.75 22.4142 20.75 22C20.75 21.5858 20.4142 21.25 20 21.25V22.75ZM12.6569 4L13.1872 3.46967C13.0465 3.32902 12.8558 3.25 12.6569 3.25C12.4579 3.25 12.2672 3.32902 12.1265 3.46967L12.6569 4ZM15.4853 6.82843L16.0156 7.35876C16.1563 7.21811 16.2353 7.02734 16.2353 6.82843C16.2353 6.62951 16.1563 6.43875 16.0156 6.2981L15.4853 6.82843ZM9.27482 13.0389L8.74448 13.5692C8.88514 13.7099 9.0759 13.7889 9.27482 13.7889C9.47373 13.7889 9.66449 13.7099 9.80515 13.5692L9.27482 13.0389ZM6.44639 10.2105L5.91606 9.68014C5.62316 9.97304 5.62316 10.4479 5.91606 10.7408L6.44639 10.2105ZM14.0711 5.41421L13.5407 5.94454V5.94454L14.0711 5.41421ZM15.5688 1.47159C15.2769 1.17764 14.8021 1.17592 14.5081 1.46776C14.2142 1.75959 14.2124 2.23446 14.5043 2.52841L15.5688 1.47159ZM16.9589 5.0008C17.2507 5.29475 17.7256 5.29646 18.0195 5.00463C18.3135 4.71279 18.3152 4.23792 18.0234 3.94397L16.9589 5.0008ZM9.80515 12.5086L6.97672 9.68014L5.91606 10.7408L8.74448 13.5692L9.80515 12.5086ZM6.97672 10.7408L13.1872 4.53033L12.1265 3.46967L5.91606 9.68014L6.97672 10.7408ZM19.25 14.9051C19.25 18.3913 16.3451 21.25 12.7211 21.25V22.75C17.1371 22.75 20.75 19.2557 20.75 14.9051H19.25ZM14.1454 8.73088C17.0487 9.39934 19.25 11.9328 19.25 14.9051H20.75C20.75 11.1675 17.9992 8.07894 14.482 7.26912L14.1454 8.73088ZM15.7353 2.70408L13.5425 4.8821L14.5996 5.94633L16.7924 3.76831L15.7353 2.70408ZM14.5043 2.52841L15.7316 3.7646L16.7961 2.70778L15.5688 1.47159L14.5043 2.52841ZM15.7316 3.7646L16.9589 5.0008L18.0234 3.94397L16.7961 2.70778L15.7316 3.7646ZM12.7211 21.25C10.1271 21.25 7.89469 19.7816 6.84066 17.6656L5.49802 18.3344C6.80285 20.9539 9.55165 22.75 12.7211 22.75V21.25ZM3 18.75H6.16934V17.25H3V18.75ZM6.16934 18.75H10.5V17.25H6.16934V18.75ZM4 22.75H12.7211V21.25H4V22.75ZM12.7211 22.75H20V21.25H12.7211V22.75ZM14.955 6.2981L13.7834 7.46967L14.844 8.53033L16.0156 7.35876L14.955 6.2981ZM13.7834 7.46967L8.74448 12.5086L9.80515 13.5692L14.844 8.53033L13.7834 7.46967ZM12.1265 4.53033L13.5407 5.94454L14.6014 4.88388L13.1872 3.46967L12.1265 4.53033ZM13.5407 5.94454L14.955 7.35876L16.0156 6.2981L14.6014 4.88388L13.5407 5.94454Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="admin-links-writeup">
                <h4 className="admin-links-header font-bold">Diagnostics</h4>
                <p className="admin-links-desc">100+ Section Booked</p>
              </div>
            </div>
            <div className="admin-links-details">
              <div className="admin-links-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6.68629 6.68629L3.37258 10C1.54247 11.8301 1.54247 14.7973 3.37258 16.6274C5.20269 18.4575 8.16989 18.3301 10 16.5M6.68629 6.68629L10 3.37258C11.8301 1.54247 14.7973 1.54247 16.6274 3.37258C18.4575 5.20269 18.3691 8.194 16.539 10.0241M6.68629 6.68629L11.7574 11.7574M10 16.5C10.1241 17.846 10.7269 19.2122 11.7574 20.2426C14.1005 22.5858 17.8995 22.5858 20.2426 20.2426C22.5858 17.8995 22.5858 14.1005 20.2426 11.7574C19.2083 10.723 17.8903 10.1453 16.539 10.0241M10 16.5C9.84192 14.7855 10.4447 13.07 11.7574 11.7574M16.539 10.0241C14.8292 9.87081 13.0662 10.4486 11.7574 11.7574M5.2 12C4.46796 12.732 4.46796 13.6797 5.2 14.4118M10 16H22"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="admin-links-writeup">
                <h4 className="admin-links-header font-bold">Pharmarcy</h4>
                <p className="admin-links-desc">100+ Section Booked</p>
              </div>
            </div>
          </section>
          <section className="patients-doctors">
            <div className="patients ">
              <div className="patients-info">
                <div className="patients-details">
                  <div className="patients-icon">
                    <FiUsers size={24} />
                  </div>
                  <div className="patients-writeup">
                    <h4 className="patients-header font-bold">
                      Total Patients
                    </h4>
                    <div className="patients-desc">
                      <p>Total Review</p>
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
                            fill="#168295"
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
                  </div>
                </div>
                <div className="view-all">view all</div>
              </div>
              <div className="patients-graph">
                {/* <Image
                  src="/img/chart-body.png"
                  alt="chart"
                  width={378}
                  height={143}
                  className="chart-body"
                /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="378"
                  height="143"
                  viewBox="0 0 378 143"
                  fill="none"
                  /* className="svg" */
                >
                  <path
                    d="M362.022 21.0708L378 0.94397V143H-181.243V29.8763L-165.264 13.3436L-149.286 56.1491L-133.308 50.6501L-117.329 82.7094L-101.351 70.1301L-85.3726 108.048L-69.3942 87.2738L-53.4158 125.048L-37.4375 92.3415L-21.4591 103.663L-5.48074 39.9398L10.4976 30.1279L26.476 52.5191L42.4543 60.0666L58.4327 19.8129L74.4111 39.9398L90.3894 49.6438L106.368 33.6501L122.346 82.7094L138.325 67.6142L154.303 104.094L170.281 50.0032L186.26 90.2569L202.238 121.705L218.216 61.3246L234.195 72.6459L250.173 34.9081L266.151 50.0032L282.13 16.0391L298.108 67.6142L314.087 95.2887L330.065 37.4239L346.043 52.5191L362.022 21.0708Z"
                    fill="#17849733"
                  />
                </svg>
                <Image
                  src="/img/chart-line.png"
                  alt="chart"
                  width={378}
                  height={126}
                  className="chart-line"
                />
              </div>
            </div>
            <div className="doctors">
              <div className="doctors-info">
                <div className="doctors-details">
                  <div className="doctors-icon">
                    <FaUserMd size={24} />
                  </div>
                  <h4 className="font-bold text-sidebarbg">
                    Available Doctors
                  </h4>
                </div>
                <div className="view-all">view all</div>
              </div>
              <div className="doctors-list">
                <div className="angle left">
                  <FaAngleLeft />
                </div>
                <div className="doctor-lists px-2">
                  {allDoctors.map(
                    ({ id, profilePics, name, profession }: any) => (
                      <div key={id} className="flex flex-col items-center">
                        <Image
                          src={profilePics}
                          alt="doctors"
                          width={56}
                          height={56}
                          className="w-12"
                        />
                        <p className="text-sm font-semibold text-sidebarbg">
                          {name}
                        </p>
                        <p className="text-[11px] text-sidebarbg">
                          {profession}
                        </p>
                      </div>
                    )
                  )}
                </div>
                <div className="angle right">
                  <FaAngleRight />
                </div>
              </div>
            </div>
          </section>
          <section className="engagements-patients flex gap-2 mt-6">
            <div className="engagements w-[70%]">
              <div className="engagements-info h-18 flex items-center justify-between p-4">
                <div className="engagements-details flex items-center gap-2">
                  <div className="engagements-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#16829580"
                    >
                      <path
                        d="M9 8L15 8M9 12H13M9 16H10M6 2H18C19.1046 2 20 2.89543 20 4V13.8889C20 18.3686 16.3685 22 11.8889 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="engagements-writeup">
                    <h4 className="engagements-header font-bold">
                      Engagements
                    </h4>
                    <div className="engagements-desc">
                      <p>Yearly Review</p>
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
                            fill="#168295"
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
                  </div>
                </div>
                <div className="view-all">view all</div>
              </div>
              <div className="w-full">
                <Image
                  src="/img/engagements-chart.png"
                  alt="doctors"
                  width={529}
                  height={352}
                  className="w-full"
                />
              </div>
            </div>
            <div className="new-patients w-[30%]">
              <div className="new-patients-info flex justify-between items-center p-3 h-18">
                <div className="new-patients-details">
                  <div className="new-patients-icon">
                    <FiUsers size={24} />
                  </div>
                  <h4 className="font-bold text-sidebarbg">New Patients</h4>
                </div>
                <div className="view-all">view all</div>
              </div>
              <div className="py-2 flex flex-col gap-[0.8em] px-3">
                {patients
                  .slice(0, 6)
                  .map(({ id, profilePics, name, profession }: any) => (
                    <div key={id} className="flex items-center gap-3">
                      <Image
                        src={profilePics}
                        alt="doctors"
                        width={40}
                        height={40}
                        /* className="w-12" */
                      />
                      <div>
                        <p className="text-sm font-semibold text-sidebarbg">
                          {name}
                        </p>
                        <p className="text-[11px] text-sidebarbg">
                          {profession}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </div>
        <div className="right-bar">
          <Search />
          <div className="right-bar-container mt-16">
            <div className="right-bar-container-info flex justify-between items-center p-3 h-18">
              <div className="right-bar-container-details">
                <div className="right-bar-container-icon">
                  <FiUsers size={24} />
                </div>
                <h4 className="font-bold text-sidebarbg">Appointments</h4>
              </div>
              <div className="view-all">view all</div>
            </div>
            {/* <Image
              src="/img/date.png"
              alt="date"
              width={274}
              height={270}
              className="mx-auto mt-2"
            /> */}
            <div className="calender-container mx-auto mt-2 w-full text-[10px] px-3">
              <div className="calender p-3">
                <FullCalendar
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  headerToolbar={{
                    // left: 'prev,next today',
                    // center: 'title',
                    // right: 'dayGridMonth, timeGridWeek'
                    left: "title",
                    right: "prev,next",
                  }}
                  events={allEvents as any}
                  nowIndicator={true}
                  editable={true}
                  droppable={true}
                  selectable={true}
                  selectMirror={true}
                  dateClick={handleDateClick}
                  eventClick={(data) => handleDeleteModal(data)}
                />
              </div>
            </div>
            <div className="appointment-container flex justify-between items-center mt-4 p-3">
              <h4 className="font-bold text-sidebarbg">Appointments</h4>
              <div className="view-all">view all</div>
            </div>
            <div className="assign py-2 flex flex-col gap-4 px-3">
              {appointmentSchedule
                .slice(0, 7)
                .map(({ id, profilePics, name, appointment }: any) => (
                  <div
                    key={id}
                    className="assign-container flex justify-between items-center"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={profilePics}
                        alt="doctors"
                        width={40}
                        height={40}
                        /* className="w-12" */
                      />
                      <div>
                        <p className="text-sm font-semibold text-sidebarbg">
                          {name}
                        </p>
                        <p className="text-[11px] text-sidebarbg">
                          {appointment}
                        </p>
                      </div>
                    </div>
                    <div className="view-all">Assign to a doctor</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Dialog
        open={open}
        handler={handleOpen}
        size="sm"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <div className="p-4">
          <h2 className="text-center text-black font-bold text-3xl">
            Add Event.
          </h2>
          <form action="submit" onSubmit={handleSubmitEvent}>
            <input
              type="text"
              value={newEvent.title}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
              placeholder="Title"
              className="mt-4 border border-[black] w-[92%] ml-[4%] rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-blackcolor-30 focus:ring-2 focus:ring-inset focus:ring-violet-500 placeholder:text-gray-600"
            />
            <DialogFooter>
              <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1"
              >
                <span>Cancel</span>
              </Button>
              <Button
                variant="gradient"
                color="green"
                type="submit"
                disabled={newEvent.title === ""}
              >
                <span>Create</span>
              </Button>
            </DialogFooter>
          </form>
        </div>
      </Dialog>

      <Dialog
        open={deleteModal}
        size="sm"
        handler={handleCloseDeleteModal}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Delete Event!</DialogHeader>
        <DialogBody>Are you sure you want to delete this event?</DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleCloseDeleteModal}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleDelete}>
            <span>Delete</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </AdminLayout>
  );
}

export async function getServerSideProps() {
  const { available_doctors } = await import("@/data/data.json");
  const { new_patients } = await import("@/data/data.json");
  const { appointments } = await import("@/data/data.json");

  return {
    props: {
      doctorsData: available_doctors,
      patientsData: new_patients,
      appointmentData: appointments,
    },
  };
}
