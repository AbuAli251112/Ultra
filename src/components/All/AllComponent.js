import { Component } from 'react';
import HomeComponent from '../Home/HomeComponent';
import AboutComponent from '../About/AboutComponent';
import ProfileComponent from '../Profile/ProfileComponent';
import PortfolioComponent from '../Portfolio/PortfolioComponent';
import SocialMediaComponent from '../SocialMedia/SocialMediaComponent';
import WorkComponent from '../Work/WorkComponent';
import FooterComponent from '../Footer/FooterComponent';

class AllComponent extends Component {
    render() {
        return (
            <div className="App">
                <HomeComponent />
                <WorkComponent />
                <PortfolioComponent />
                <ProfileComponent />
                <AboutComponent />
                <SocialMediaComponent />
                <FooterComponent />
            </div>
        );
    }
}

export default AllComponent;
