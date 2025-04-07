import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineBlock, AiOutlineLogout, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaCartArrowDown, FaUsers } from 'react-icons/fa6';
import { TbSettingsSpark, TbLayoutGridAdd, TbChartBarPopular } from 'react-icons/tb';
import { MdOutlineShoppingCart, MdOutlineLocalLaundryService, MdOutlineShoppingCartCheckout, MdOutlineAirplaneTicket } from 'react-icons/md';
import { PiPackageThin, PiPackageLight, PiShoppingCartSimpleLight } from 'react-icons/pi';
import { CiLocationArrow1, CiLocationOn } from 'react-icons/ci';
import { IoCartOutline, IoHomeOutline, IoTicketOutline } from 'react-icons/io5';
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
import { RiAlignItemBottomLine, RiAlignItemLeftLine, RiVisaFill, RiVisaLine } from 'react-icons/ri';
import { LiaCcVisa, LiaShoppingCartSolid, LiaSitemapSolid } from 'react-icons/lia';
import { SiTourbox } from "react-icons/si";
import { BsCartCheckFill } from "react-icons/bs";
import useVisaprocessingCart from '../../../hooks/useVisaprocessingCart';

const Sidebar = () => {
  const { user, logOut } = useAuth();
  const [intCart] = useIntPackageCart();
  const [domCart] = useDomPackageCart();
  const [nextTourCart] = useNextTour();
  const [popularDesCart] = usePopularDestination();
  const [ticketCart] = useTicketCart();
  const [visaCart]=useVisaprocessingCart();

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
            <AiOutlineBlock className="text-lg" /> Show All Domestice Packages
          </NavLink>
          <NavLink to={"add-int-packages"} className="flex items-center gap-2 text-sm font-semibold p-2">
            <RiAlignItemBottomLine className="text-lg" /> Add International Packages
          </NavLink>
          <NavLink to={"show-all-int-packages"} className="flex items-center gap-2 text-sm font-semibold p-2">
            <LiaShoppingCartSolid className="text-lg" /> Show All International Packages
          </NavLink>
          <NavLink to={"add-next-tour"} className="flex items-center gap-2 text-sm font-semibold p-2">
            <TbLayoutGridAdd className="text-lg" /> Add Next Tour
          </NavLink>
          <NavLink to={"show-next-tour"} className="flex items-center gap-2 text-sm font-semibold p-2">
            <SiTourbox className="text-lg" /> Show Next Tour
          </NavLink>
          <NavLink to={"add-most-popular-destination"} className="flex items-center gap-2 text-sm font-semibold p-2">
            <LiaSitemapSolid className="text-lg" /> Add Most Popular Destination
          </NavLink>
          <NavLink to={"show-most-popular-destination"} className="flex items-center gap-2 text-sm font-semibold p-2">
            <TbChartBarPopular className="text-lg" /> Show Most Popular Destination
          </NavLink>
          <NavLink to={"add-visa-rate"} className="flex items-center gap-2 text-sm font-semibold p-2">
            <RiVisaLine className="text-lg" /> Add Visa Rate
          </NavLink>
          <NavLink to={"show-visa-rate"} className="flex items-center gap-2 text-sm font-semibold p-2">
            <LiaCcVisa className="text-lg" /> Show Visa Rate
          </NavLink>



          <div className="divider"></div>
          <NavLink to={"int-package-order-cart"} className="flex items-center gap-2 text-sm font-semibold p-2">
            <FaCartArrowDown className="text-lg" /> International Package Cart
          </NavLink>
          <NavLink to={"domestice-package-order-cart"} className="flex items-center gap-2 text-sm font-semibold p-2">
            <AiOutlineShoppingCart className="text-lg" /> Domestice Package Cart
          </NavLink>
          <NavLink to={"next-tour-order-cart"} className="flex items-center gap-2 text-sm font-semibold p-2">
            <MdOutlineShoppingCartCheckout className="text-lg" /> Next Tour Cart
          </NavLink>
          <NavLink to={"popular-destination-order-cart"} className="flex items-center gap-2 text-sm font-semibold p-2">
            <BsCartCheckFill className="text-lg" /> Popular Destination Cart
          </NavLink>
          <NavLink to={"ticket-order-cart"} className="flex items-center gap-2 text-sm font-semibold p-2">
            <IoTicketOutline className="text-lg" /> Ticket Cart
          </NavLink>
          <NavLink to={"visa-order-cart"} className="flex items-center gap-2 text-sm font-semibold p-2">
            <RiVisaFill className="text-lg" /> Visa Cart
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
          <NavLink to={"my-ticket-cart"} className="flex items-center gap-2 text-sm font-semibold p-2">
            <MdOutlineAirplaneTicket className="text-lg" /> My Ticket
            <motion.span animate={{ color: ['#FFA500', '#fbff03', '#66ff03'] }} transition={{ duration: 1.5, repeat: Infinity }}>
              {ticketCart?.length}
            </motion.span>
          </NavLink>
          <NavLink to={"my-visa-cart"} className="flex items-center gap-2 text-sm font-semibold p-2">
            <LiaCcVisa className="text-lg" /> My Visa
            <motion.span animate={{ color: ['#FFA500', '#fbff03', '#66ff03'] }} transition={{ duration: 1.5, repeat: Infinity }}>
              {visaCart?.length}
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
