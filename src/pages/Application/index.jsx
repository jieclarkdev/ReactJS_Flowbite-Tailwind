import { Outlet } from "react-router-dom";
import BaseTheme from "../../components/BaseTheme";
import CustomSideBar from "./app_components/CustomSideBar";

export default function Application() {
    return (
        <BaseTheme>
            <CustomSideBar />
            <div className="h-full w-full pt-5 ps-10 pb-10">
                <Outlet/>
            </div>
        </BaseTheme>
    )
}