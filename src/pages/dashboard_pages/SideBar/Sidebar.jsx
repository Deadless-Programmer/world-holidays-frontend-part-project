import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineLogout } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa6';
import { TbSettingsSpark, TbLayoutGridAdd } from 'react-icons/tb';
import { MdOutlineShoppingCart, MdOutlineLocalLaundryService } from 'react-icons/md';
import { PiPackageThin, PiPackageLight } from 'react-icons/pi';
import { CiLocationArrow1, CiLocationOn } from 'react-icons/ci';
import { IoHomeOutline, IoTicketOutline } from 'react-icons/io5';
import { GrServices } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';
import { motion } from "motion/react";
import { BeatLoader } from 'react-spinners';
import useAuth from '../../../hooks/useAuth';
import useAdmin from '../../../hooks/useAdmin';
import useModerator from '../../../hooks/useModerator';
import useIntPackageCart from '../../../hooks/useIntPackageCart';
import useDomPackageCart from '../../../hooks/useDomPackageCart';
import useNextTour from '../../../hooks/useNextTour';
import usePopularDestination from '../../../hooks/usePopularDestination';
import useTicketCart from '../../../hooks/useTicketCart';
import { RiAlignItemBottomLine, RiAlignItemLeftLine } from 'react-icons/ri';
import { LiaSitemapSolid } from 'react-icons/lia';

const Sidebar = () => {
  const { user, logOut } = useAuth();
  const [intCart] = useIntPackageCart();
  const [domCart] = useDomPackageCart();
  const [nextTourCart] = useNextTour();
  const [popularDesCart] = usePopularDestination();
  const [ticketCart] = useTicketCart();

  const [isAdmin, isAdminLoading] = useAdmin();
  const [isModerator, isModeratorLoading] = useModerator();

  if (isAdminLoading || isModeratorLoading) {
    return (
      <div className="flex justify-center items-center h-50vh">
        <BeatLoader color="#FFA500" loading={true} size={15} />
      </div>
    );
  }

  const handleLogOut = () => {
    logOut().catch(err => console.log(err));
  };

  return (
    <div>
      {isAdmin ? (
        <>
          <NavLink to={"add-dom-packages"} className="flex items-center gap-2 text-sm font-semibold p-2">
            <TbSettingsSpark className="text-lg" /> Add Domestice Packages
          </NavLink>
          <NavLink to={"show-all-dom-packages"} className="flex items-center gap-2 text-sm font-semibold p-2">
            <TbSettingsSpark className="text-lg" /> Show All Domestice Packages
          </NavLink>
          <NavLink to={"add-int-packages"} className="flex items-center gap-2 text-sm font-semibold p-2">
            <RiAlignItemBottomLine className="text-lg" /> Add International Packages
          </NavLink>
          <NavLink to={"show-all-int-packages"} className="flex items-center gap-2 text-sm font-semibold p-2">
            <TbSettingsSpark className="text-lg" /> Show All International Packages
          </NavLink>
          <NavLink to={"add-next-tour"} className="flex items-center gap-2 text-sm font-semibold p-2">
            <TbLayoutGridAdd className="text-lg" /> Add Next Tour
          </NavLink>
          <NavLink to={"add-most-popular-destination"} className="flex items-center gap-2 text-sm font-semibold p-2">
            <LiaSitemapSolid className="text-lg" /> Add Most Popular Destination
          </NavLink>
          <NavLink to={"all-users"} className="flex items-center gap-2 text-sm font-semibold p-2">
            <FaUsers className="text-lg" /> All Users
          </NavLink>
        </>
      ) : isModerator ? (
        <>
          <NavLink to={"moderate-content"} className="flex items-center gap-2 text-sm font-semibold p-2">
            <TbSettingsSpark className="text-lg" /> Moderate Content
          </NavLink>
          <NavLink to={"review-users"} className="flex items-center gap-2 text-sm font-semibold p-2">
            <FaUsers className="text-lg" /> Review Users
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to={"int-packages"} className="flex items-center gap-2 text-sm font-semibold p-2">
            <MdOutlineShoppingCart className="text-lg" /> My International Packages
            <motion.span animate={{ color: ['#FFA500', '#fbff03', '#66ff03'] }} transition={{ duration: 1.5, repeat: Infinity }}>
              {intCart?.length}
            </motion.span>
          </NavLink>
          <NavLink to={"dom-packages"} className="flex items-center gap-2 text-sm font-semibold p-2">
            <PiPackageThin className="text-lg" /> My Domestic Packages
            <motion.span animate={{ color: ['#FFA500', '#fbff03', '#66ff03'] }} transition={{ duration: 1.5, repeat: Infinity }}>
              {domCart?.length}
            </motion.span>
          </NavLink>
          <NavLink to={"next-tour"} className="flex items-center gap-2 text-sm font-semibold p-2">
            <CiLocationArrow1 className="text-lg" /> My Next Tour
            <motion.span animate={{ color: ['#FFA500', '#fbff03', '#66ff03'] }} transition={{ duration: 1.5, repeat: Infinity }}>
              {nextTourCart?.length}
            </motion.span>
          </NavLink>
          <NavLink to={"popular-destination"} className="flex items-center gap-2 text-sm font-semibold p-2">
            <CiLocationOn className="text-lg" /> My Popular Destination
            <motion.span animate={{ color: ['#FFA500', '#fbff03', '#66ff03'] }} transition={{ duration: 1.5, repeat: Infinity }}>
              {popularDesCart?.length}
            </motion.span>
          </NavLink>
        </>
      )}

      <div className="divider"></div>
      <NavLink to={"/dashboard"} className="flex items-center gap-2 text-sm font-semibold p-2">
        <CgProfile className="text-lg" /> {user?.displayName}
      </NavLink>
      <NavLink to={"/"} className="flex items-center gap-2 text-sm font-semibold p-2">
        <IoHomeOutline className="text-lg" /> Home
      </NavLink>
      <NavLink to={"/packages"} className="flex items-center gap-2 text-sm font-semibold p-2">
        <PiPackageLight className="text-lg" /> Packages
      </NavLink>
      <NavLink to={"/services"} className="flex items-center gap-2 text-sm font-semibold p-2">
        <GrServices className="text-lg" /> Services
      </NavLink>
      <NavLink onClick={handleLogOut} to={"/signInUpForm"} className="flex items-center gap-2 text-sm font-semibold p-2">
        <AiOutlineLogout className="text-lg" /> Logout
      </NavLink>
    </div>
  );
};

export default Sidebar;
