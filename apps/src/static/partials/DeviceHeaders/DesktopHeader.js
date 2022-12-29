import React from 'react'
import { Link } from "react-router-dom";

export default function DesktopHeader() {

    if (window.location.pathname === "/") {
        return (
            <div class="flex justify-between">
                <a class="w-[35vw] bg-black pl-[5vw] text-[3.75rem] font-bold leading-[5.75rem] h-[12vh] hover:cursor-pointer mobile:text-4xl on_desktop:whitespace-nowrap" href='https://www.pdxgrantc.com'>Grant Conklin</a>
                <div class="pr-[5vw] flex text-[2.75rem] font-semibold mobile:text-4xl">
                    <a class="h-fit align-middle px-[1vw] py-[.5vw] hover:bg-button_pressed_color hover:cursor-pointer hover:ease-in-out duration-[350ms]" href="https://www.pdxgrantc.com/Code">Code</a>
                    <a class="h-fit align-middle px-[1vw] py-[.5vw] bg-button_accent_color hover:bg-transparent hover:cursor-pointer hover:ease-in-out duration-[350ms]" href="https://www.pdxgrantc.com/about-this-site">About This Site</a>
                </div>
            </div>
        )
    }
}
