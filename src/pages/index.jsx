import Layout from "./Layout.jsx";

import Home from "./Home";

import Sentinel1 from "./Sentinel1";

import Contact from "./Contact";

import About from "./About";

import Construction from "./Construction";

import Manufacturing from "./Manufacturing";

import AutomotiveDealerships from "./AutomotiveDealerships";

import LawEnforcement from "./LawEnforcement";

import EnergyAndUtilities from "./EnergyAndUtilities";

import PropertyManagement from "./PropertyManagement";

import EntertainmentAndEvents from "./EntertainmentAndEvents";

import Transportation from "./Transportation";

import LogisticsAndWarehousing from "./LogisticsAndWarehousing";

import BigBoxStores from "./BigBoxStores";

import ShoppingCenters from "./ShoppingCenters";

import GasAndConvenience from "./GasAndConvenience";

import MilitaryAndDefense from "./MilitaryAndDefense";

import CriticalInfrastructure from "./CriticalInfrastructure";

import EmergencyManagement from "./EmergencyManagement";

import SolutionsUseCaseEquipmentTheft from "./SolutionsUseCaseEquipmentTheft";

import SolutionsUseCaseVehicleInventory from "./SolutionsUseCaseVehicleInventory";

import SolutionsUseCaseCopperTheft from "./SolutionsUseCaseCopperTheft";

import SolutionsUseCaseRemoteSites from "./SolutionsUseCaseRemoteSites";

import SolutionsUseCaseLargeProperties from "./SolutionsUseCaseLargeProperties";

import SolutionsUseCaseEventSecurity from "./SolutionsUseCaseEventSecurity";

import SolutionsUseCaseCrimeHotspots from "./SolutionsUseCaseCrimeHotspots";

import SolutionsUseCaseEmergencyOverwatch from "./SolutionsUseCaseEmergencyOverwatch";

import SolutionsUseCasePublicSpaces from "./SolutionsUseCasePublicSpaces";

import SolutionsCapabilityAIDetection from "./SolutionsCapabilityAIDetection";

import SolutionsCapabilityLiveVideo from "./SolutionsCapabilityLiveVideo";

import SolutionsCapabilityAutonomousPower from "./SolutionsCapabilityAutonomousPower";

import SolutionsCapabilityAudioDeterrence from "./SolutionsCapabilityAudioDeterrence";

import SolutionsCapabilityStrobeLights from "./SolutionsCapabilityStrobeLights";

import SolutionsCapabilityPhysicalPresence from "./SolutionsCapabilityPhysicalPresence";

import SolutionsCapabilityMobileDeployment from "./SolutionsCapabilityMobileDeployment";

import SolutionsCapabilityCloudVMS from "./SolutionsCapabilityCloudVMS";

import SolutionsCapabilityNDAACompliance from "./SolutionsCapabilityNDAACompliance";

import CommercialDevelopment from "./CommercialDevelopment";

import Partnership from "./Partnership";

import SentinelAdvantage from "./SentinelAdvantage";

import SentinelAdvantagePlus from "./SentinelAdvantagePlus";

import Capabilities from "./Capabilities";

import PrivateSecurity from "./PrivateSecurity";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    Sentinel1: Sentinel1,
    
    Contact: Contact,
    
    About: About,
    
    Construction: Construction,
    
    Manufacturing: Manufacturing,
    
    AutomotiveDealerships: AutomotiveDealerships,
    
    LawEnforcement: LawEnforcement,
    
    EnergyAndUtilities: EnergyAndUtilities,
    
    PropertyManagement: PropertyManagement,
    
    EntertainmentAndEvents: EntertainmentAndEvents,
    
    Transportation: Transportation,
    
    LogisticsAndWarehousing: LogisticsAndWarehousing,
    
    BigBoxStores: BigBoxStores,
    
    ShoppingCenters: ShoppingCenters,
    
    GasAndConvenience: GasAndConvenience,
    
    MilitaryAndDefense: MilitaryAndDefense,
    
    CriticalInfrastructure: CriticalInfrastructure,
    
    EmergencyManagement: EmergencyManagement,
    
    SolutionsUseCaseEquipmentTheft: SolutionsUseCaseEquipmentTheft,
    
    SolutionsUseCaseVehicleInventory: SolutionsUseCaseVehicleInventory,
    
    SolutionsUseCaseCopperTheft: SolutionsUseCaseCopperTheft,
    
    SolutionsUseCaseRemoteSites: SolutionsUseCaseRemoteSites,
    
    SolutionsUseCaseLargeProperties: SolutionsUseCaseLargeProperties,
    
    SolutionsUseCaseEventSecurity: SolutionsUseCaseEventSecurity,
    
    SolutionsUseCaseCrimeHotspots: SolutionsUseCaseCrimeHotspots,
    
    SolutionsUseCaseEmergencyOverwatch: SolutionsUseCaseEmergencyOverwatch,
    
    SolutionsUseCasePublicSpaces: SolutionsUseCasePublicSpaces,
    
    SolutionsCapabilityAIDetection: SolutionsCapabilityAIDetection,
    
    SolutionsCapabilityLiveVideo: SolutionsCapabilityLiveVideo,
    
    SolutionsCapabilityAutonomousPower: SolutionsCapabilityAutonomousPower,
    
    SolutionsCapabilityAudioDeterrence: SolutionsCapabilityAudioDeterrence,
    
    SolutionsCapabilityStrobeLights: SolutionsCapabilityStrobeLights,
    
    SolutionsCapabilityPhysicalPresence: SolutionsCapabilityPhysicalPresence,
    
    SolutionsCapabilityMobileDeployment: SolutionsCapabilityMobileDeployment,
    
    SolutionsCapabilityCloudVMS: SolutionsCapabilityCloudVMS,
    
    SolutionsCapabilityNDAACompliance: SolutionsCapabilityNDAACompliance,
    
    CommercialDevelopment: CommercialDevelopment,
    
    Partnership: Partnership,
    
    SentinelAdvantage: SentinelAdvantage,
    
    SentinelAdvantagePlus: SentinelAdvantagePlus,
    
    Capabilities: Capabilities,
    
    PrivateSecurity: PrivateSecurity,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/Sentinel1" element={<Sentinel1 />} />
                
                <Route path="/Contact" element={<Contact />} />
                
                <Route path="/About" element={<About />} />
                
                <Route path="/Construction" element={<Construction />} />
                
                <Route path="/Manufacturing" element={<Manufacturing />} />
                
                <Route path="/AutomotiveDealerships" element={<AutomotiveDealerships />} />
                
                <Route path="/LawEnforcement" element={<LawEnforcement />} />
                
                <Route path="/EnergyAndUtilities" element={<EnergyAndUtilities />} />
                
                <Route path="/PropertyManagement" element={<PropertyManagement />} />
                
                <Route path="/EntertainmentAndEvents" element={<EntertainmentAndEvents />} />
                
                <Route path="/Transportation" element={<Transportation />} />
                
                <Route path="/LogisticsAndWarehousing" element={<LogisticsAndWarehousing />} />
                
                <Route path="/BigBoxStores" element={<BigBoxStores />} />
                
                <Route path="/ShoppingCenters" element={<ShoppingCenters />} />
                
                <Route path="/GasAndConvenience" element={<GasAndConvenience />} />
                
                <Route path="/MilitaryAndDefense" element={<MilitaryAndDefense />} />
                
                <Route path="/CriticalInfrastructure" element={<CriticalInfrastructure />} />
                
                <Route path="/EmergencyManagement" element={<EmergencyManagement />} />
                
                <Route path="/SolutionsUseCaseEquipmentTheft" element={<SolutionsUseCaseEquipmentTheft />} />
                
                <Route path="/SolutionsUseCaseVehicleInventory" element={<SolutionsUseCaseVehicleInventory />} />
                
                <Route path="/SolutionsUseCaseCopperTheft" element={<SolutionsUseCaseCopperTheft />} />
                
                <Route path="/SolutionsUseCaseRemoteSites" element={<SolutionsUseCaseRemoteSites />} />
                
                <Route path="/SolutionsUseCaseLargeProperties" element={<SolutionsUseCaseLargeProperties />} />
                
                <Route path="/SolutionsUseCaseEventSecurity" element={<SolutionsUseCaseEventSecurity />} />
                
                <Route path="/SolutionsUseCaseCrimeHotspots" element={<SolutionsUseCaseCrimeHotspots />} />
                
                <Route path="/SolutionsUseCaseEmergencyOverwatch" element={<SolutionsUseCaseEmergencyOverwatch />} />
                
                <Route path="/SolutionsUseCasePublicSpaces" element={<SolutionsUseCasePublicSpaces />} />
                
                <Route path="/SolutionsCapabilityAIDetection" element={<SolutionsCapabilityAIDetection />} />
                
                <Route path="/SolutionsCapabilityLiveVideo" element={<SolutionsCapabilityLiveVideo />} />
                
                <Route path="/SolutionsCapabilityAutonomousPower" element={<SolutionsCapabilityAutonomousPower />} />
                
                <Route path="/SolutionsCapabilityAudioDeterrence" element={<SolutionsCapabilityAudioDeterrence />} />
                
                <Route path="/SolutionsCapabilityStrobeLights" element={<SolutionsCapabilityStrobeLights />} />
                
                <Route path="/SolutionsCapabilityPhysicalPresence" element={<SolutionsCapabilityPhysicalPresence />} />
                
                <Route path="/SolutionsCapabilityMobileDeployment" element={<SolutionsCapabilityMobileDeployment />} />
                
                <Route path="/SolutionsCapabilityCloudVMS" element={<SolutionsCapabilityCloudVMS />} />
                
                <Route path="/SolutionsCapabilityNDAACompliance" element={<SolutionsCapabilityNDAACompliance />} />
                
                <Route path="/CommercialDevelopment" element={<CommercialDevelopment />} />
                
                <Route path="/Partnership" element={<Partnership />} />
                
                <Route path="/SentinelAdvantage" element={<SentinelAdvantage />} />
                
                <Route path="/SentinelAdvantagePlus" element={<SentinelAdvantagePlus />} />
                
                <Route path="/Capabilities" element={<Capabilities />} />
                
                <Route path="/PrivateSecurity" element={<PrivateSecurity />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}