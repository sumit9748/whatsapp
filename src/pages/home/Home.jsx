import "./home.css"
import { UserChats } from "../../components/userChats/UserChats"
import { Message } from "../../components/message/Message"
import { Profile } from "../../components/profile/Profile"
import SyncIcon from '@mui/icons-material/Sync';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";


export const Home = () => {
    const [show, setShow] = useState(false);
    return (
        <div className='home'>
            <div className="bodyContainer">
                <div className="navbar">
                    <div className="userDetails">
                        <img src="https://pps.whatsapp.net/v/t61.24694-24/153028047_503151617473559_5803223126187783804_n.jpg?ccb=11-4&oh=a327c386279cb6f14c623e9e2672acfe&oe=61DBA326" alt="" className="userImg" onClick={() => setShow((prev) => !prev)} />
                        <span className="userName">Sumit Mondal</span>
                    </div>
                    <div className="userIcons">
                        <div className="userIcon">
                            <SyncIcon />
                            <span className="userIconbadge">1</span>
                        </div>
                        <div className="userIcon">
                            <MessageIcon />
                            <span className="userIconbadge">1</span>
                        </div>
                        <div className="userIcon">
                            <MoreVertIcon />
                        </div>
                    </div>
                </div>
                <hr className="homeHr" />

                <UserChats />
                <Profile open={show} close={setShow} />
            </div>
            <div className="chatContainer">
                <Message />
            </div>

        </div>
    )
}
