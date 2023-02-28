import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ProfileComponent.css";

const ProfileComponent = () => {
    const [ skills, setSkills ] = useState([]);
    useEffect(() => {
        axios.get("js/data.json").then(res => { setSkills(res.data.skills) });
    }, []);
    const mySkills = skills.map((skill) => {
        return (
            <div className="bar" key={skill.id}>
                <span className="title">{skill.Title}</span>
                <span className="perc">{skill.Perc}</span>
                <div className="parent">
                    <span className={skill.Class}></span>
                </div>
            </div>
        )
    });
    return (
        <div className="profile_skills">
            <div className="container">
                <div className="profile">
                    <h2 className="profile-title"><span>My </span>Profile</h2>
                    <ul className="profile-list">
                        <li className="profile-item">
                            <span>Name</span>
                            Hamza Nabil
                        </li>
                        <li className="profile-item">
                            <span>Birthday</span>
                            21/1/1996
                        </li>
                        <li className="profile-item">
                            <span>Address</span>
                            Ain shams
                        </li>
                        <li className="profile-item">
                            <span>Phone</span>
                            4444 5555 6666
                        </li>
                        <li className="profile-item">
                            <span>Email</span>
                            hamza@hamza.com
                        </li>
                        <li className="profile-item">
                            <span>Website</span>
                            <span className="web">www.google.com</span>
                        </li>
                    </ul>
                </div>
                <div className="skills">
                    <h2 className="skills-title">Some <span>skills</span></h2>
                    <p className="skills-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </p>
                    {mySkills}
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent;