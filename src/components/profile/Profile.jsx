import "./profile.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import { useLayoutEffect } from "react";

export const Profile = ({ open, close }) => {
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
            className={"profile-drawer " + (!open ? "hidden-profile" : null)}
        >
            <div className="profileTop">
                <div className="profileBack">
                    <ArrowBackIcon className="profileTopIcon" onClick={() => close(false)} />
                    <span className="profileTopText">Profile</span>
                </div>
            </div>
            <div className="profileMiddle">
                <img src="https://pps.whatsapp.net/v/t61.24694-24/153028047_503151617473559_5803223126187783804_n.jpg?ccb=11-4&oh=a327c386279cb6f14c623e9e2672acfe&oe=61DBA326" alt="" className="profileImg" />
            </div>
            <div className="profileBottom">
                <div className="profileBottomComponent">
                    <div className="profileUser">
                        <span className="key">Your Name</span>
                        <span className="value">Sumit Mondal</span>
                    </div>
                    <EditIcon className="profileUserIcon" />
                </div>
                <hr className="hr" />
                <div className="profileBottomComponent">
                    <div className="profileUser">
                        <span className="key">About</span>
                        <span className="value">Hey Its Mercy..</span>
                    </div>
                    <EditIcon className="profileUserIcon" />
                </div>
            </div>
        </div>
    )
}

