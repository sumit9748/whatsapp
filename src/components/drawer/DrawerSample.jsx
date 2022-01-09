import "./drawer.css"
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import InfoIcon from '@mui/icons-material/Info';
import { useLayoutEffect } from "react";
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';

export const DrawerSample = ({ open, close, search }) => {

    useLayoutEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
            // document.querySelector('#navbar')  document.querySelector('#navbar').style.zIndex = '6';
        } else {
            // document.querySelector('#navbar').style.zIndex = '2';
            document.body.style.overflow = 'visible';
        }
    }, [open])

    return (

        <div
            className={"hamburger-drawer " + (!open ? "hidden-drawer" : null)}
        >
            <CloseIcon onClick={() => close(false)} />
            <div className="userDetailsI">
                <img src="https://scontent.fccu15-1.fna.fbcdn.net/v/t1.6435-9/73413138_730276260821964_1991019389566058496_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=eG5sPSBcXDAAX9PI6Mg&_nc_ht=scontent.fccu15-1.fna&oh=00_AT-IcSMsgCpnUpwXd_mad4wQsueWXEPxLMn4PL85jkA0lg&oe=61FC5533" alt="" className="ImgDrawer" />
                <span className="NameDrawer">Soumita Ganguly</span>
                <div className="infoDesc">
                    Desc:
                    <p className="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio voluptates magni eum, non facilis dolorem, voluptate expedita eius fuga quibusdam, quasi impedit debitis enim. Numquam, labore. Veniam corrupti voluptas cumque?</p>

                </div>
            </div>
            <div className="contactDetails">
                <div className="contactDetail">
                    <AddIcCallIcon />
                    <span className="ContactDetailItem">+913456237845</span>
                </div>
                <div className="contactDetail">
                    <AdminPanelSettingsIcon />
                    <span className="ContactDetailItem">Yes</span>
                </div>

            </div>
            <div className="logOut">
                <LogoutIcon />
                <button className="Logout">LogOut</button>
            </div>
        </div>
    )


}
