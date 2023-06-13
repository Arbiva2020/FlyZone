import React, { useState } from 'react'
import "./PopupData.js"
import "./Popup.css"

const Popup = ({onClick, text="default", customStyles={}}) => {

const [openPopup, setOpenPopup] = React.useState(false);
const handlePopupOpen = () => {
    setOpenPopup(!openPopup)
}

return (
    <div className='popup_main' style={{visibility: openPopup ? "visible" : "hidden", opacity: openPopup ? "1" : "0"}}>
        <div>
            Popup
            <ul className='popup'>
                    <li>
                        {text}
                    </li>
                </ul>
        </div>
    </div>
  )
}

export default Popup