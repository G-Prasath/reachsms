"use client";

import React, { useState, useEffect } from "react";
import Styles from "./style.module.css";
import Image from "next/image";
import logo from "../../../public/icon/nephos.svg";
import search from "../../../public/icon/search.svg";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import { RiLockPasswordLine } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { MdCampaign } from "react-icons/md";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* vertical-navbar left */}
      <div className={Styles.bar}>
        <div>
          <div>
            <a href="javascript:;">
              <Image src={logo} alt="Logo" />
            </a>
          </div>
          <div>
            <ul>
              <li>
                <a href="javascript:;" className={Styles.icon_color}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="featherfeather-home"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </a>
              </li>
              <li>
                <a href="javascript:;" className={Styles.icon_color}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-send"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </a>
              </li>
              <li>
                <a href="javascript:;" className={Styles.icon_color}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-voicemail"
                  >
                    <circle cx="5.5" cy="11.5" r="4.5"></circle>
                    <circle cx="18.5" cy="11.5" r="4.5"></circle>
                    <line x1="5.5" y1="16" x2="18.5" y2="16"></line>
                  </svg>
                </a>
              </li>
              <li>
                <a href="javascript:;" className={Styles.icon_color}>
                  <LiaEnvelopeOpenTextSolid
                    style={{ height: "22px", width: "22px" }}
                  />
                </a>
              </li>
              <li>
                <a href="javascript:;" className={Styles.icon_color}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-users"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>{" "}
                </a>
              </li>
              <li>
                <a href="javascript:;" className={Styles.icon_color}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-file"
                  >
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                    <polyline points="13 2 13 9 20 9"></polyline>
                  </svg>
                </a>
              </li>
              <li>
                <a href="javascript:;" className={Styles.icon_color}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-book"
                  >
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="javascript:;" className={Styles.icon_color}>
                  <MdCampaign style={{ height: "21px", width: "21px" }} />
                </a>
              </li>
              <li>
                <a href="javascript:;" className={Styles.icon_color}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-user"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </a>
              </li>
              <li>
                <a href="javascript:;" className={Styles.icon_color}>
                  {/* <Image className={Styles.test} src={search} alt="search" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-search"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Profile-bar */}
      <div>
        <a
          href="javascript:;"
          onClick={() => setShow(!show)}
          className={Styles.profile}
        ></a>
        {show && (
          <div
            className={`${Styles.innerProfile} ${
              show
                ? "w-[230px] fade_right"
                : "w-[0px] fade_left"
            } `}
          >
            <div className={Styles.prolist}>
              <ul>
                <li>
                  <a href="">
                    <p>PROFILE</p>
                    <LuUser className={Styles.iconSize} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <p>SWAP PASSWORD</p>
                    <RiLockPasswordLine className={Styles.iconSize} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <p>LOGOUT</p>
                    <LuLogOut className={Styles.iconSize} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
