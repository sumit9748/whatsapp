import "./chat.css"

export const Chat = ({ own }) => {
    return (
        <div className={own ? "chat own" : "chat"}>
            <div className="chatItem">
                <p className="chatText">Hello its ok!!!!</p>
                <div className="time">15 minutes ago</div>
            </div>
        </div>
    )
}
