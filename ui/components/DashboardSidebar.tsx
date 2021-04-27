import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUsers,
  faSitemap,
  faCog,
  faHistory,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar2";

const iconStyle: React.CSSProperties = {
  width: 15,
};

export interface SidebarItemProp {
  section: string;
  icon: JSX.Element | null;
  route: string;
  style?: React.CSSProperties;
}

const ITEMS = [
  {
    section: "My Alerts",
    icon: <FontAwesomeIcon icon={faBell} style={iconStyle} />,
    route: "/alerts",
  },
  {
    section: "History",
    icon: <FontAwesomeIcon icon={faHistory} style={iconStyle} />,
    route: "/alerts/history",
    style: {
      fontSize: 14,
    },
  },
  {
    section: "Create an Alert",
    icon: <FontAwesomeIcon icon={faPlusSquare} style={iconStyle} />,
    route: "/alerts/create",
    style: {
      fontSize: 14,
    },
  },
  {
    section: "User Explorer",
    icon: <FontAwesomeIcon icon={faUsers} style={iconStyle} />,
    route: "/explorer",
  },
  {
    section: "Integrations",
    icon: <FontAwesomeIcon icon={faSitemap} style={iconStyle} />,
    route: "/integrations",
  },
  {
    section: "Settings",
    icon: <FontAwesomeIcon icon={faCog} style={iconStyle} />,
    route: "/settings",
  },
];

interface Props {
  index: number;
  onClick: ({ index: number, route: string }) => void;
}

const DashboardSidebar = (props: Props) => (
  <Sidebar
    items={ITEMS}
    index={props.index}
    onClick={(index: number) => {
      const route = ITEMS[index].route;
      props.onClick({ index, route });
    }}
  />
);

export default DashboardSidebar;