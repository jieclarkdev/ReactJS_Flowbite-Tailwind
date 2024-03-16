import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiUser,
  HiUsers
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function CustomSideBar() {

  const navigate = useNavigate()

 
  const onClickNavigate = (event ,path) => {
    event.preventDefault()
    navigate(path)
    
  }
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="#"
            onClick={(event) => onClickNavigate(event, "")}
            icon={HiChartPie}
          >
            Dashboard
          </Sidebar.Item>

          <Sidebar.Item
            href="#"
            onClick={(event) => onClickNavigate(event, "msg/")}
            icon={HiInbox}
            label="3"
          >
            Inbox
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            onClick={(event) => {
              onClickNavigate(event, "users/");
              console.log(event);
            }}
            icon={HiUsers}
          >
            Users
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            onClick={(event) => onClickNavigate(event, "profile/")}
            icon={HiUser}
          >
            Profile
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            onClick={(event) => onClickNavigate(event, "/")}
            icon={HiArrowSmRight}
          >
            Signout
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
