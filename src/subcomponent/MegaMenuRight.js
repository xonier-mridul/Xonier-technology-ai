import React from "react";
import { MdAppShortcut } from "react-icons/md";
import { MdAppSettingsAlt } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdCloudDone } from "react-icons/md";
import Link from "next/link";

const MegaMenuRight = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-full flex flex-col  border-b-[1px] pb-6 ">
          <h3 className="text-2xl font-medium capitalize">Other Services</h3>
          <p className="text-[#42545e] text-sm normal-case">
            Explore our diverse services
          </p>
        </div>
        <ul className="w-full py-6 flex flex-col gap-5">
          <li>
            <Link className="flex items-center gap-3" href={"/"}>
              
              <span>
                <MdAppShortcut className=" text-3xl text-red-500" />
              </span>
              <div>
                <h3 className="text-lg font-medium capitalize">
                  Software Development
                </h3>
                <p className="text-[#42545e] text-sm normal-case font-medium">
                  Innovative, future-proof software
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3" href={"/"}>
              
              <span>
                <MdAppSettingsAlt className=" text-3xl text-red-500" />
              </span>
              <div>
                <h3 className="text-lg font-medium capitalize">
                  OTT App Development
                </h3>
                <p className="text-[#42545e] text-sm normal-case font-medium">
                  Innovative, future-proof software
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3" href={"/"}>
              
              <span>
                <MdOutlineSupportAgent className=" text-3xl text-red-500" />
              </span>
              <div>
                <h3 className="text-lg font-medium capitalize">
                  App Maintenance & Support
                </h3>
                <p className="text-[#42545e] text-sm normal-case font-medium">
                  Innovative, future-proof software
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3" href={"/"}>
              
              <span>
                <MdCloudDone className=" text-3xl text-red-500" />
              </span>
              <div>
                <h3 className="text-lg font-medium capitalize">
                  Cloud App Development
                </h3>
                <p className="text-[#42545e] text-sm normal-case font-medium">
                  Innovative, future-proof software
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MegaMenuRight;
