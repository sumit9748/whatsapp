import "./message.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Chat } from "../Chat/Chat";
import SendIcon from '@mui/icons-material/Send';
import { useRef, useEffect } from "react";
import { DrawerSample } from "../drawer/DrawerSample";
import { useState } from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const Message = () => {
    const scrollRef = useRef();
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    const [show, setShow] = useState(false);
    const [search, setSearch] = useState(false);


    return (
        <div className='message'>
            <div className="messageLeft">
                <div className='messageTopbar'>
                    <div className="messageWrapper">
                        <div className="messageTopbarLeft">

                            <img src="https://pps.whatsapp.net/v/t61.24694-24/153028047_503151617473559_5803223126187783804_n.jpg?ccb=11-4&oh=a327c386279cb6f14c623e9e2672acfe&oe=61DBA326" alt="" className="topbarImg" />

                            <div className="details">
                                <span className="userName">Soumita Ganguly</span>
                                <span className="time">last seen today at 10:15</span>
                            </div>
                        </div>
                        <div className="messageTopbarRight">
                            <div className="messageIcons">

                                <SearchOutlinedIcon onClick={() => setSearch(prev => !prev)} />
                                <MoreVertIcon onClick={() => setShow(prev => !prev)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={scrollRef} className="messageBody">

                    <Chat />
                    <Chat own={true} />
                    <Chat />
                    <Chat />
                    <Chat own={true} />
                    <Chat />
                    <Chat own={true} />
                    <Chat />
                    <Chat own={true} />
                    <Chat />
                    <Chat />
                </div>
                <div className="messageSend">
                    <input type="text" placeholder="write something.." className="inputBox" />
                    <SendIcon className="messageIcon" />
                </div>
            </div>
            <DrawerSample close={setShow} open={show} search={false} />

        </div>
    )
}
