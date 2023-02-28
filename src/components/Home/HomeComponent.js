import React from 'react';
import { HomeSection , HomeInformation , HomeTitle , HomeInfo , HomeDesc , Span , HomeBtn } from './HomeComponentStyle.js'

const HomeComponent = () => {
    return (
        <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Hassan AbuAli</HomeTitle>
                    <HomeInfo >Creative Director</HomeInfo>
                    <HomeDesc>
                        Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
    );
}

export default HomeComponent;
