import Image from "next/image";
import { FaUserMd, FaMedkit, FaSignOutAlt, FaCog } from "react-icons/fa";
import { FiPieChart, FiUsers, FiBarChart2, FiCalendar } from "react-icons/fi";
import NavLink from "../NavLink";

export default function MainSidebar() {
  return (
    <div className="admin-sidebar">
      <div className="sidebar">
        <div className="logo-container">
          <Image
            src="/img/rex-logo.png"
            alt="rex-logo"
            width={171}
            height={80}
            className="rex-logo"
          />
        </div>
        <div className="sidebar-nav">
          <div className="nav-options">
            <NavLink href={"/lab-admin"}>
              <div className="nav-option">
                <FiPieChart />
                <p>Dashboard</p>
              </div>
            </NavLink>
            <NavLink href={"/lab-admin/appointment"}>
              <div className="nav-option">
                <FiCalendar />
                <p>Appointment</p>
              </div>
            </NavLink>
            <NavLink href={"/lab-admin/patient"}>
              <div className="nav-option">
                <FiUsers />
                <p>Patient</p>
              </div>
            </NavLink>
            <NavLink href={"/lab-admin/message"}>
              <div className="nav-option">
                <FiUsers />
                <p>Message</p>
              </div>
            </NavLink>
            <NavLink href={"/lab-admin/settings"}>
              <div className="nav-option settings">
                <FaCog />
                <p>Settings</p>
              </div>
            </NavLink>
            <NavLink href={"/lab-admin/support"}>
              <div className="nav-option">
                <FiBarChart2 />
                <p>Support</p>
              </div>
            </NavLink>
          </div>
          <div className="profile">
            <div className="profile-actions">
              <div className="profile-details">
                <div className="profile-dp-container">
                  <Image src="/img/dp.png" alt="" width={40} height={40} />
                </div>
                <div className="profile-name">
                  <h5>Yusuf Adebayo</h5>
                  <p className="email">adebayoui@rexhealth.com</p>
                </div>
              </div>
              <div className="signout">
                <FaSignOutAlt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
