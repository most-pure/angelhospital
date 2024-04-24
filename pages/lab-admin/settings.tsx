import AdminLayout from "@/components/admin/AdminLayout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Search from "@/components/Search";
import Image from "next/image";
import { ChangeEvent } from "react";
import { Switch } from "@material-tailwind/react";

export default function Settings() {
  // REFS
  const hiddenProfileInput = useRef<HTMLInputElement>(null);
  const hiddenCompanyInput = useRef<HTMLInputElement>(null);

  // STATES
  const [personalInfo, setPersonalInfo] = useState(true);
  const [profile, setProfile] = useState(false);
  const [security, setSecurity] = useState(false);
  const [notification, setNotification] = useState(false);
  const [personalInfoEdit, setPersonalInfoEdit] = useState(false);
  const [profileEdit, setProfileEdit] = useState(false);
  const [securityEdit, setSecurityEdit] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [photo, setPhoto] = useState<File | null>(null);
  const [companyPhoto, setCompanyPhoto] = useState(null);
  const [company, setCompany] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    first_name: "Oke",
    last_name: "Jamina",
    email: "oke@filmhouse.com",
    role: "Accountant",
  });
  const [companyData, setCompanyData] = useState({
    company_name: "Oke",
    company_url: "filmhouse.com",
    email: "film@house.com",
    report_check: false,
    email_check: false,
  });
  const [securityData, setSecurityData] = useState({
    password: "************",
    email: "ade*******health.com",
    recovery_email: "rex*********@morexhealth.com",
  });
  const [notificationData, setNotificationData] = useState({
    new_user: false,
    appointment_request: false,
    appointment_expiration: false,
    add_member: false,
    remove_member: false,
    cash_received: false,
    cash_sent: false,
    weekly_report: false,
    monthly_report: false,
    yearly_report: false,
  });

  const handleProfileClick = () => {
    hiddenProfileInput.current?.click();
  };

  const handleCompanyClick = () => {
    hiddenCompanyInput.current?.click();
  };

  function onFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;

    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e: any) => {
        setProfilePhoto(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }

    setPhoto(e.target.files[0]);
  }

  function onCompanyChange(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;

    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e: any) => {
        setCompanyPhoto(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }

    setCompany(e.target.files[0]);
  }

  return (
    <AdminLayout>
      <div className="appointment-page">
        <div className="appointment">
          <div className="appointment-header">
            <h2 className="text-3xl font-bold">Settings</h2>
            <p className="welcome-text">Here are your settings so far</p>
            <hr />
          </div>
          <Search />
        </div>

        <div className="flex w-1/2 justify-between pt-2">
          <div
            onClick={() => {
              setPersonalInfo(true);
              setProfile(false);
              setSecurity(false);
              setNotification(false);
            }}
            className={
              personalInfo
                ? " font-semibold text-colorviewall border-b border-colorviewall p-2"
                : "cursor-pointer text-colorsubheader font-semibold p-2"
            }
          >
            Personal Info
          </div>
          <div
            onClick={() => {
              setPersonalInfo(false);
              setProfile(true);
              setSecurity(false);
              setNotification(false);
            }}
            className={
              profile
                ? "font-semibold text-colorviewall border-b border-colorviewall p-2"
                : "cursor-pointer text-colorsubheader font-semibold p-2"
            }
          >
            Profile
          </div>
          <div
            onClick={() => {
              setPersonalInfo(false);
              setProfile(false);
              setSecurity(true);
              setNotification(false);
            }}
            className={
              security
                ? "font-semibold text-colorviewall border-b border-colorviewall p-2"
                : "cursor-pointer text-colorsubheader font-semibold p-2"
            }
          >
            Security
          </div>
          <div
            onClick={() => {
              setPersonalInfo(false);
              setProfile(false);
              setSecurity(false);
              setNotification(true);
            }}
            className={
              notification
                ? "font-semibold text-colorviewall border-b border-colorviewall p-2"
                : "cursor-pointer text-colorsubheader font-semibold p-2"
            }
          >
            Notification
          </div>
        </div>

        {personalInfo && (
          <div className="overflow-x-auto mt-5 mb-10">
            {personalInfoEdit ? (
              <div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="lg:text-2xl text-sm font-semibold">Personal Info</p>
                    <p className="text-sm">
                      would you like to update your personal information
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-32 py-2 bg-[#043740] rounded-md flex items-center justify-center shadow-button cursor-pointer">
                      <p className="text-sm text-white font-medium">
                        Save changes
                      </p>
                    </div>
                    <div
                      onClick={() => setPersonalInfoEdit(false)}
                      className="w-32 py-2 border border-[#043740] rounded-md flex items-center justify-center shadow-button cursor-pointer"
                    >
                      <p className="text-sm font-medium">Cancel</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 lg:px-28">
                  <p className="lg:font-semibold text-sm ">Profile pics</p>
                  <p className="text-sm">this will display on your profile</p>

                  <div className="flex items-end py-4">
                    {profilePhoto ? (
                      <Image
                        src={profilePhoto}
                        width={64}
                        height={64}
                        alt="image1"
                        className="rounded-[50%]"
                      />
                    ) : (
                      <Image
                        width={64}
                        height={64}
                        src="/img/doctors.png"
                        alt="dp"
                      />
                    )}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      className="cursor-pointer"
                      onClick={handleProfileClick}
                    >
                      <path
                        d="M14.5 9.10667V12.6667C14.5 13.403 13.903 14 13.1667 14H3.83333C3.09695 14 2.5 13.403 2.5 12.6667V3.33333C2.5 2.59695 3.09695 2 3.83333 2H7.39333"
                        stroke="#168295"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.5002 1.33337L15.1668 4.00004L8.50016 10.6667H5.8335V8.00004L12.5002 1.33337V1.33337Z"
                        stroke="#168295"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <input
                      type="file"
                      ref={hiddenProfileInput}
                      onChange={onFileChange}
                      required
                      className="hidden"
                    />
                    {photo && (
                      <div className="text-[#168295] cursor-pointer rounded-md px-1 ml-2 border border-[#168295]">
                        save
                      </div>
                    )}
                  </div>

                  <div className="w-full flex gap-4">
                    <div className="w-1/2">
                      <p className="font-semibold">First Name</p>
                      <input
                        type="text"
                        value={formData.first_name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          setFormData({
                            ...formData,
                            first_name: e.target.value,
                          });
                        }}
                        className="border border[#75898C] px-4 py-2 w-full rounded-lg mt-1"
                      />
                    </div>
                    <div className="w-1/2">
                      <p className="font-semibold">Last Name</p>
                      <input
                        type="text"
                        value={formData.last_name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          setFormData({
                            ...formData,
                            last_name: e.target.value,
                          });
                        }}
                        className="border border[#75898C] px-4 py-2 w-full rounded-lg mt-1"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="font-semibold">Email</p>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        });
                      }}
                      className="border border[#75898C] px-4 py-2 w-full rounded-lg mt-1"
                    />
                  </div>

                  <div className="mt-4">
                    <p className="font-semibold">Role</p>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setFormData({
                          ...formData,
                          role: e.target.value,
                        });
                      }}
                      className="border border[#75898C] px-4 py-2 w-full rounded-lg mt-1"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-semibold">Personal Info</p>
                    <p className="text-sm">
                      would you like to update your personal information
                    </p>
                  </div>
                  <div className="w-32 py-2 border border-[#043740] rounded-md flex items-center justify-center shadow-button cursor-pointer">
                    <p
                      onClick={() => setPersonalInfoEdit(true)}
                      className="text-sm font-medium"
                    >
                      Edit
                    </p>
                  </div>
                </div>
                <div className="pt-4 px-28">
                  <p className="font-semibold">Profile pics</p>
                  <p className="text-sm">this will display on your profile</p>

                  <div className="flex items-end py-4">
                    <Image
                      width={64}
                      height={64}
                      src="/img/doctors.png"
                      alt="dp"
                    />
                  </div>

                  <div className="w-full flex gap-4">
                    <div className="w-1/2">
                      <p className="font-semibold">First Name</p>
                      <input
                        type="text"
                        value={"Oke"}
                        disabled
                        className="border border[#75898C] px-4 py-2 w-full rounded-lg mt-1"
                      />
                    </div>
                    <div className="w-1/2">
                      <p className="font-semibold">Last Name</p>
                      <input
                        type="text"
                        value={"Jamina"}
                        disabled
                        className="border border[#75898C] px-4 py-2 w-full rounded-lg mt-1"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="font-semibold">Email</p>
                    <input
                      type="email"
                      value={"oke@filmhouse.com"}
                      disabled
                      className="border border[#75898C] px-4 py-2 w-full rounded-lg mt-1"
                    />
                  </div>

                  <div className="mt-4">
                    <p className="font-semibold">Role</p>
                    <input
                      type="text"
                      value={"Accountant"}
                      disabled
                      className="border border[#75898C] px-4 py-2 w-full rounded-lg mt-1"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {profile && (
          <div className="overflow-x-auto mt-5 mb-10">
            {profileEdit ? (
              <div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-semibold">Company Profile</p>
                    <p className="text-sm">Update your company profile here</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-32 py-2 bg-[#043740] rounded-md flex items-center justify-center shadow-button cursor-pointer">
                      <p className="text-sm text-white font-medium">
                        Save changes
                      </p>
                    </div>
                    <div
                      onClick={() => setProfileEdit(false)}
                      className="w-32 py-2 border border-[#043740] rounded-md flex items-center justify-center shadow-button cursor-pointer"
                    >
                      <p className="text-sm font-medium">Cancel</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 px-28">
                  <p className="font-semibold">Company Profile Pics</p>
                  <p className="text-sm">this will display on your profile</p>

                  <div className="flex items-end py-4">
                    {companyPhoto ? (
                      <Image
                        src={companyPhoto}
                        width={171}
                        height={80}
                        alt="company_logo"
                      />
                    ) : (
                      <Image
                        width={171}
                        height={80}
                        src="/img/company-rex-logo.png"
                        alt="company_dp"
                      />
                    )}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      className="cursor-pointer"
                      onClick={handleCompanyClick}
                    >
                      <path
                        d="M14.5 9.10667V12.6667C14.5 13.403 13.903 14 13.1667 14H3.83333C3.09695 14 2.5 13.403 2.5 12.6667V3.33333C2.5 2.59695 3.09695 2 3.83333 2H7.39333"
                        stroke="#168295"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.5002 1.33337L15.1668 4.00004L8.50016 10.6667H5.8335V8.00004L12.5002 1.33337V1.33337Z"
                        stroke="#168295"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <input
                      type="file"
                      ref={hiddenCompanyInput}
                      onChange={onCompanyChange}
                      required
                      className="hidden"
                    />
                    {company && (
                      <div className="text-[#168295] cursor-pointer rounded-md px-1 ml-2 border border-[#168295]">
                        save
                      </div>
                    )}
                  </div>

                  <div className="w-full flex gap-4">
                    <div className="w-1/2">
                      <p className="font-semibold">Company Name</p>
                      <input
                        type="text"
                        value={companyData.company_name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          setCompanyData({
                            ...companyData,
                            company_name: e.target.value,
                          });
                        }}
                        className="border border[#75898C] px-4 py-2 w-full rounded-lg mt-1"
                      />
                    </div>
                    <div className="w-1/2">
                      <p className="font-semibold">Compny Url</p>
                      <input
                        type="text"
                        value={companyData.company_url}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          setCompanyData({
                            ...companyData,
                            company_url: e.target.value,
                          });
                        }}
                        className="border border[#75898C] px-4 py-2 w-full rounded-lg mt-1"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="font-semibold">Company Email</p>
                    <input
                      type="email"
                      value={companyData.email}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setCompanyData({
                          ...companyData,
                          email: e.target.value,
                        });
                      }}
                      className="border border[#75898C] px-4 py-2 w-full rounded-lg mt-1"
                    />
                  </div>

                  <div className="mt-4 flex gap-4">
                    <div className="w-1/2">
                      <p className="font-semibold">Branding</p>
                      <p className="text-sm">
                        Add your logo to reports and emails.
                      </p>
                    </div>
                    <div>
                      <div className="flex gap-4 items-start">
                        <input
                          type="checkbox"
                          defaultChecked={companyData.report_check}
                          className="mt-1.5"
                          onChange={() =>
                            setCompanyData((state) => {
                              return {
                                ...companyData,
                                report_check: !state,
                              };
                            })
                          }
                        />
                        <div>
                          <p className="font-semibold">Reports</p>
                          <p className="text-sm">
                            Include my logo in summary reports.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start mt-4">
                        <input
                          type="checkbox"
                          defaultChecked={companyData.email_check}
                          className="mt-1.5"
                          onChange={() =>
                            setCompanyData((state) => {
                              return {
                                ...companyData,
                                email_check: !state,
                              };
                            })
                          }
                        />
                        <div>
                          <p className="font-semibold">Emails</p>
                          <p className="text-sm">
                            Include my logo in customer emails.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-semibold">Company Profile</p>
                    <p className="text-sm">Update your company profile here</p>
                  </div>
                  <div className="w-32 py-2 border border-[#043740] rounded-md flex items-center justify-center shadow-button cursor-pointer">
                    <p
                      onClick={() => setProfileEdit(true)}
                      className="text-sm font-medium"
                    >
                      Edit
                    </p>
                  </div>
                </div>
                <div className="pt-4 px-28">
                  <p className="font-semibold">Company Profile Pics</p>
                  <p className="text-sm">this will display on your profile</p>

                  <div className="flex items-end py-4">
                    <Image
                      width={171}
                      height={80}
                      src="/img/company-rex-logo.png"
                      alt="dp"
                    />
                  </div>

                  <div className="w-full flex gap-4">
                    <div className="w-1/2">
                      <p className="font-semibold">Company Name</p>
                      <input
                        type="text"
                        value={companyData.company_name}
                        disabled
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          setCompanyData({
                            ...companyData,
                            company_name: e.target.value,
                          });
                        }}
                        className="border border[#75898C] px-4 py-2 w-full rounded-lg mt-1"
                      />
                    </div>
                    <div className="w-1/2">
                      <p className="font-semibold">Compny Url</p>
                      <input
                        type="text"
                        value={companyData.company_url}
                        disabled
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          setCompanyData({
                            ...companyData,
                            company_url: e.target.value,
                          });
                        }}
                        className="border border[#75898C] px-4 py-2 w-full rounded-lg mt-1"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="font-semibold">Company Email</p>
                    <input
                      type="email"
                      value={companyData.email}
                      disabled
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setCompanyData({
                          ...companyData,
                          email: e.target.value,
                        });
                      }}
                      className="border border[#75898C] px-4 py-2 w-full rounded-lg mt-1"
                    />
                  </div>

                  <div className="mt-4 flex gap-4">
                    <div className="w-1/2">
                      <p className="font-semibold">Branding</p>
                      <p className="text-sm">
                        Add your logo to reports and emails.
                      </p>
                    </div>
                    <div>
                      <div className="flex gap-4 items-start">
                        <input
                          type="checkbox"
                          defaultChecked={companyData.report_check}
                          className="mt-1.5"
                          disabled
                          onChange={() =>
                            setCompanyData((state) => {
                              return {
                                ...companyData,
                                report_check: !state,
                              };
                            })
                          }
                        />
                        <div>
                          <p className="font-semibold">Reports</p>
                          <p className="text-sm">
                            Include my logo in summary reports.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start mt-4">
                        <input
                          type="checkbox"
                          defaultChecked={companyData.email_check}
                          className="mt-1.5"
                          disabled
                          onChange={() =>
                            setCompanyData((state) => {
                              return {
                                ...companyData,
                                email_check: !state,
                              };
                            })
                          }
                        />
                        <div>
                          <p className="font-semibold">Emails</p>
                          <p className="text-sm">
                            Include my logo in customer emails.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {security && (
          <div className="overflow-x-auto mt-5 mb-10">
            {securityEdit ? (
              <div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-semibold">Security</p>
                    <p className="text-sm">Update your security here</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-32 py-2 bg-[#043740] rounded-md flex items-center justify-center shadow-button cursor-pointer">
                      <p className="text-sm text-white font-medium">
                        Save changes
                      </p>
                    </div>
                    <div
                      onClick={() => setSecurityEdit(false)}
                      className="w-32 py-2 border border-[#043740] rounded-md flex items-center justify-center shadow-button cursor-pointer"
                    >
                      <p className="text-sm font-medium">Cancel</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 px-28">
                  <div className="w-full flex gap-4">
                    <div className="w-1/2">
                      <p className="font-semibold">Password</p>
                      <input
                        type="text"
                        value={securityData.password}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          setSecurityData({
                            ...securityData,
                            password: e.target.value,
                          });
                        }}
                        className="border border[#75898C] px-4 py-2 w-full rounded-lg mt-1"
                      />
                    </div>
                    <div className="w-1/2">
                      <p className="font-semibold">Email</p>
                      <input
                        type="email"
                        value={securityData.email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          setSecurityData({
                            ...securityData,
                            email: e.target.value,
                          });
                        }}
                        className="border border[#75898C] px-4 py-2 w-full rounded-lg mt-1"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="font-semibold">Recovery Email</p>
                    <input
                      type="email"
                      value={securityData.recovery_email}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setSecurityData({
                          ...securityData,
                          recovery_email: e.target.value,
                        });
                      }}
                      className="border border[#75898C] px-4 py-2 w-full rounded-lg mt-1"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-semibold">Security</p>
                    <p className="text-sm">Update your security here</p>
                  </div>
                  <div className="w-32 py-2 border border-[#043740] rounded-md flex items-center justify-center shadow-button cursor-pointer">
                    <p
                      onClick={() => setSecurityEdit(true)}
                      className="text-sm font-medium"
                    >
                      Edit
                    </p>
                  </div>
                </div>
                <div className="pt-4 px-28">
                  <div className="w-full flex gap-4">
                    <div className="w-1/2">
                      <p className="font-semibold">Password</p>
                      <input
                        type="text"
                        value={securityData.password}
                        disabled
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          setSecurityData({
                            ...securityData,
                            password: e.target.value,
                          });
                        }}
                        className="border border[#75898C] px-4 py-2 w-full rounded-lg mt-1"
                      />
                    </div>
                    <div className="w-1/2">
                      <p className="font-semibold">Email</p>
                      <input
                        type="email"
                        value={securityData.email}
                        disabled
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          setSecurityData({
                            ...securityData,
                            email: e.target.value,
                          });
                        }}
                        className="border border[#75898C] px-4 py-2 w-full rounded-lg mt-1"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="font-semibold">Recovery Email</p>
                    <input
                      type="email"
                      value={securityData.recovery_email}
                      disabled
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setSecurityData({
                          ...securityData,
                          recovery_email: e.target.value,
                        });
                      }}
                      className="border border[#75898C] px-4 py-2 w-full rounded-lg mt-1"
                    />
                  </div>

                  <div className="mt-4">
                    <p className="font-semibold">Last Login</p>
                    <p className="text-sm">
                      here is your last login location and device name.
                    </p>

                    <div className="mt-4">
                      <p className="font-semibold">Hp Folio 9848</p>
                      <p className="text-sm">
                        Lagos, Nigeria.{" "}
                        <span className="text-[#A91D21] text-xs cursor-pointer">
                          SignOut
                        </span>
                      </p>
                    </div>

                    <div className="mt-4">
                      <p className="font-semibold">Macbook Pro</p>
                      <p className="text-sm">
                        Abuja, Nigeria.{" "}
                        <span className="text-[#A91D21] text-xs cursor-pointer">
                          SignOut
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {notification && (
          <div className="overflow-x-auto mt-5">
            <div>
              <p className="text-2xl font-semibold">Notification</p>
              <p className="text-sm">
                we may still send you important notifications about your account
                outside of your notification settings.
              </p>
            </div>

            <div className="mt-8">
              <div className="flex">
                <div className="w-1/2">
                  <p className="font-semibold">Users</p>
                  <p className="text-sm">
                    Here are the notification you will get about your user
                  </p>
                </div>
                <div className="w-1/2">
                  <div className=" flex gap-8">
                    <div className="w-[65%]">
                      <p className="font-semibold">New Users</p>
                      <p className="text-sm">
                        Get notification when a new user sign up
                      </p>
                    </div>
                    <Switch
                      defaultChecked={notificationData.new_user}
                      ripple={false}
                      className="h-full w-full checked:bg-[#168295]"
                      containerProps={{
                        className: "w-11 h-6",
                      }}
                      circleProps={{
                        className: "before:hidden left-0.5 border-none",
                      }}
                      onClick={() =>
                        setNotificationData((state) => {
                          return {
                            ...notificationData,
                            new_user: !state,
                          };
                        })
                      }
                      crossOrigin={undefined}
                    />
                  </div>
                  <div className="flex gap-8 mt-4">
                    <div className="w-[65%]">
                      <p className="font-semibold">Appointment Request</p>
                      <p className="text-sm">
                        Get Notification when a user request for an appointment
                      </p>
                    </div>
                    <Switch
                      defaultChecked={notificationData.appointment_request}
                      ripple={false}
                      className="h-full w-full checked:bg-[#168295]"
                      containerProps={{
                        className: "w-11 h-6",
                      }}
                      circleProps={{
                        className: "before:hidden left-0.5 border-none",
                      }}
                      onClick={() =>
                        setNotificationData((state) => {
                          return {
                            ...notificationData,
                            appointment_request: !state,
                          };
                        })
                      }
                      crossOrigin={undefined}
                    />
                  </div>
                  <div className="flex gap-8 mt-4">
                    <div className="w-[65%]">
                      <p className="font-semibold">Request Expiration</p>
                      <p className="text-sm">
                        Get Notification when a user API key has been expired
                      </p>
                    </div>
                    <Switch
                      defaultChecked={notificationData.appointment_expiration}
                      ripple={false}
                      className="h-full w-full checked:bg-[#168295]"
                      containerProps={{
                        className: "w-11 h-6",
                      }}
                      circleProps={{
                        className: "before:hidden left-0.5 border-none",
                      }}
                      onClick={() =>
                        setNotificationData((state) => {
                          return {
                            ...notificationData,
                            appointment_expiration: !state,
                          };
                        })
                      }
                      crossOrigin={undefined}
                    />
                  </div>
                  <div className="flex gap-8 mt-4">
                    <div className="w-[65%]">
                      <p className="font-semibold">Add Team</p>
                      <p className="text-sm">
                        Get Notification when you add a new team member
                      </p>
                    </div>
                    <Switch
                      defaultChecked={notificationData.add_member}
                      ripple={false}
                      className="h-full w-full checked:bg-[#168295]"
                      containerProps={{
                        className: "w-11 h-6",
                      }}
                      circleProps={{
                        className: "before:hidden left-0.5 border-none",
                      }}
                      onClick={() =>
                        setNotificationData((state) => {
                          return {
                            ...notificationData,
                            add_member: !state,
                          };
                        })
                      }
                      crossOrigin={undefined}
                    />
                  </div>
                  <div className="flex gap-8 mt-4">
                    <div className="w-[65%]">
                      <p className="font-semibold">Remove Team</p>
                      <p className="text-sm">
                        Get Notification when you remove a team member
                      </p>
                    </div>
                    <Switch
                      defaultChecked={notificationData.remove_member}
                      ripple={false}
                      className="h-full w-full checked:bg-[#168295]"
                      containerProps={{
                        className: "w-11 h-6",
                      }}
                      circleProps={{
                        className: "before:hidden left-0.5 border-none",
                      }}
                      onClick={() =>
                        setNotificationData((state) => {
                          return {
                            ...notificationData,
                            remove_member: !state,
                          };
                        })
                      }
                      crossOrigin={undefined}
                    />
                  </div>
                </div>
              </div>
              <div className="flex mt-10">
                <div className="w-1/2">
                  <p className="font-semibold">Transactions</p>
                  <p className="text-sm">
                    Here are the notification you will get on transaction
                  </p>
                </div>
                <div className="w-1/2">
                  <div className=" flex gap-8">
                    <div className="w-[65%]">
                      <p className="font-semibold">Received</p>
                      <p className="text-sm">
                        Get notification when you recive cash in to your wallet
                      </p>
                    </div>
                    <Switch
                      defaultChecked={notificationData.cash_received}
                      ripple={false}
                      className="h-full w-full checked:bg-[#168295]"
                      containerProps={{
                        className: "w-11 h-6",
                      }}
                      circleProps={{
                        className: "before:hidden left-0.5 border-none",
                      }}
                      onClick={() =>
                        setNotificationData((state) => {
                          return {
                            ...notificationData,
                            cash_received: !state,
                          };
                        })
                      }
                      crossOrigin={undefined}
                    />
                  </div>
                  <div className="flex gap-8 mt-4">
                    <div className="w-[65%]">
                      <p className="font-semibold">Deposit</p>
                      <p className="text-sm">
                        Get Notification when you send money out of your wallet
                      </p>
                    </div>
                    <Switch
                      defaultChecked={notificationData.cash_sent}
                      ripple={false}
                      className="h-full w-full checked:bg-[#168295]"
                      containerProps={{
                        className: "w-11 h-6",
                      }}
                      circleProps={{
                        className: "before:hidden left-0.5 border-none",
                      }}
                      onClick={() =>
                        setNotificationData((state) => {
                          return {
                            ...notificationData,
                            cash_sent: !state,
                          };
                        })
                      }
                      crossOrigin={undefined}
                    />
                  </div>
                </div>
              </div>
              <div className="flex mt-10">
                <div className="w-1/2">
                  <p className="font-semibold">Reports</p>
                  <p className="text-sm">
                    Here are the notification you will get on report
                  </p>
                </div>
                <div className="w-1/2">
                  <div className=" flex gap-8">
                    <div className="w-[65%]">
                      <p className="font-semibold">Weekly</p>
                      <p className="text-sm">
                        Get notification on your transaction report every week
                      </p>
                    </div>
                    <Switch
                      defaultChecked={notificationData.weekly_report}
                      ripple={false}
                      className="h-full w-full checked:bg-[#168295]"
                      containerProps={{
                        className: "w-11 h-6",
                      }}
                      circleProps={{
                        className: "before:hidden left-0.5 border-none",
                      }}
                      onClick={() =>
                        setNotificationData((state) => {
                          return {
                            ...notificationData,
                            weekly_report: !state,
                          };
                        })
                      }
                      crossOrigin={undefined}
                    />
                  </div>
                  <div className="flex gap-8 mt-4">
                    <div className="w-[65%]">
                      <p className="font-semibold">Monthly</p>
                      <p className="text-sm">
                        Get notification on your transaction report every month
                      </p>
                    </div>
                    <Switch
                      defaultChecked={notificationData.monthly_report}
                      ripple={false}
                      className="h-full w-full checked:bg-[#168295]"
                      containerProps={{
                        className: "w-11 h-6",
                      }}
                      circleProps={{
                        className: "before:hidden left-0.5 border-none",
                      }}
                      onClick={() =>
                        setNotificationData((state) => {
                          return {
                            ...notificationData,
                            monthly_report: !state,
                          };
                        })
                      }
                      crossOrigin={undefined}
                    />
                  </div>
                  <div className="flex gap-8 mt-4">
                    <div className="w-[65%]">
                      <p className="font-semibold">Yearly</p>
                      <p className="text-sm">
                        Get notification on your transaction report every year
                      </p>
                    </div>
                    <Switch
                      defaultChecked={notificationData.yearly_report}
                      ripple={false}
                      className="h-full w-full checked:bg-[#168295]"
                      containerProps={{
                        className: "w-11 h-6",
                      }}
                      circleProps={{
                        className: "before:hidden left-0.5 border-none",
                      }}
                      onClick={() =>
                        setNotificationData((state) => {
                          return {
                            ...notificationData,
                            yearly_report: !state,
                          };
                        })
                      }
                      crossOrigin={undefined}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
