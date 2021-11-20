import React from "react";

const options = [
    {
        name: "legs",
        img:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/legs.svg"},
    {
        name:"cushions",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/cushions.svg"},
    {
        name:"base",
        img:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/base.svg"},
    {
        name:"supports",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/supports.svg"},
    {
        name:"back",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/back.svg"},
    ]

export const OptionsMenu = ({activeOption, setActiveOption}) => {
    return(
        <div className="options">
            {options.map(({name, img}, idx) => (
                <div
                    className={`option ${activeOption === name ? "--is-active" : ""}`}
                    data-option={name}
                    onClick={() => setActiveOption(name)}
                    key={name}
                >
                    <img src={img} alt=""/>
                </div>
            ))}
        </div>
    )
}