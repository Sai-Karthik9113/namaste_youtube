import React from "react";
import SidebarItem from "./SidebarItem";
import type { RootState } from "../utils/store";

//SideBar icons import
import { IoMdHome, IoIosHelpCircleOutline } from "react-icons/io";
import {
  MdSubscriptions,
  MdOutlineWatchLater,
  MdNewspaper,
} from "react-icons/md";
import {
  SiYoutubeshorts,
  SiYoutubemusic,
  SiYoutubegaming,
} from "react-icons/si";
import { GoHistory } from "react-icons/go";
import { CgPlayList } from "react-icons/cg";
import { BiSolidVideos } from "react-icons/bi";
import { LuThumbsUp } from "react-icons/lu";
import { LiaDownloadSolid, LiaMusicSolid } from "react-icons/lia";
import {
  GiCaptainHatProfile,
  GiEgyptianProfile,
  GiPlagueDoctorProfile,
  GiRamProfile,
  GiClapperboard,
  GiGraduateCap,
  GiHanger,
} from "react-icons/gi";
import { HiFire } from "react-icons/hi";
import {
  RiShoppingBag4Line,
  RiSignalTowerFill,
  RiFlagLine,
  RiFeedbackLine,
} from "react-icons/ri";
import { HiMiniSignal } from "react-icons/hi2";
import { TfiCup } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const sections = [
  {
    title: "No_Title_01",
    items: [
      { Icon: IoMdHome, label: "Home" },
      { Icon: SiYoutubeshorts, label: "Shorts" },
      { Icon: MdSubscriptions, label: "Subscriptions" },
      { Icon: SiYoutubemusic, label: "YouTube Music" },
    ],
  },
  {
    title: "You",
    items: [
      { Icon: GoHistory, label: "History" },
      { Icon: CgPlayList, label: "Playlists" },
      { Icon: BiSolidVideos, label: "Your Videos" },
      { Icon: MdOutlineWatchLater, label: "Watch Later" },
      { Icon: LuThumbsUp, label: "Liked Videos" },
      { Icon: LiaDownloadSolid, label: "Downloads" },
    ],
  },
  {
    title: "Subscriptions",
    items: [
      { Icon: GiCaptainHatProfile, label: "XGaming" },
      { Icon: GiEgyptianProfile, label: "TVideos" },
      { Icon: GiPlagueDoctorProfile, label: "ZComics" },
      { Icon: GiRamProfile, label: "Avengers" },
    ],
  },
  {
    title: "Explore",
    items: [
      { Icon: HiFire, label: "Trending" },
      { Icon: RiShoppingBag4Line, label: "Shopping" },
      { Icon: LiaMusicSolid, label: "Music" },
      { Icon: GiClapperboard, label: "Movies" },
      { Icon: HiMiniSignal, label: "Live" },
      { Icon: SiYoutubegaming, label: "Gaming" },
      { Icon: MdNewspaper, label: "News" },
      { Icon: TfiCup, label: "Sports" },
      { Icon: GiGraduateCap, label: "Courses" },
      { Icon: GiHanger, label: "Fashion & Beauty" },
      { Icon: RiSignalTowerFill, label: "Podcasts" },
    ],
  },
  {
    title: "No_Title_02",
    items: [
      { Icon: IoSettingsOutline, label: "Settings" },
      { Icon: RiFlagLine, label: "Report history" },
      { Icon: IoIosHelpCircleOutline, label: "Help" },
      { Icon: RiFeedbackLine, label: "Send feedback" },
    ],
  },
];

const SideBar = () => {
  const isMenuOpen = useSelector((state: RootState) => state.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="w-98 px-4 max-h-[calc(100vh-72px)] overflow-hidden hover:overflow-y-auto">
      {sections.map((section) => (
        <React.Fragment key={section.title}>
          {!section.title.includes("_") && (
            <h1 className="font-bold pt-4 pb-2">{section.title}</h1>
          )}
          <ul className="border-b border-gray-300 pb-4">
            {section.items.map((item, index) => (
              <SidebarItem key={index} Icon={item.Icon} label={item.label} />
            ))}
          </ul>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SideBar;
