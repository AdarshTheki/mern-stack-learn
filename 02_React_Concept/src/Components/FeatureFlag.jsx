/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useState } from 'react';
import InfinityScrolling from './1_InfinityScrolling';
import LoadMoreData from './1_LoadMoreData';
import Pagination from './1_Pagination';
import PaginationAdvanced from './1_PaginationAdvanced';
import Accordion from './2_Accordion';
import AccordionAdvanced from './2_AccordionAdvanced';
import ModalDialog from './3_ModalDialog';
import StepProgressbar from './4_StepProgressbar';
import Tooltip from './5_Tooltip';
import FilterAdvanced from './7_FilterAdvanced';
import FilterCards from './7_FilterCards';
import ImageSlider from './8_ImageSlider';
import ImageCarousel from './8_ImageCarousel';
import MusicPlayer from './9_MusicPlayer';
import Loader from './10_Loader';
import ProgressBar from './11_ProgressBar';
import ProgressBars from './11_ProgressBars';
import RippleEffect from './12_RippleEffect';
import DndPackage from './13_DndPackage';
import DragAndDropLists from './13_DragAndDropLists';
import DragAndDropSides from './13_DragAndDropSides';
import FormValidation from './14_FormValidation';
import ContactForm from './14_ContactForm';
import LazyImage from './15_LazyImage';
import ProgressiveImage from './15_ProgressiveImage';
import DebounceApiCall from './16_DebounceApiCall';
import ScrolledIndicator from './17_ScrolledIndicator';
import ScrollToTopBottom from './18_ScrollToTopBottom';
import ScrollToSection from './18_ScrollToSection';
import SearchAutoComplete from './19_SearchAutoComplete';
import StarRating from './20_StarRating';
import TabbedContent from './21_TabbedContent';
import TreeViews from './22_TreeViews';
import RandomColor from './24_RandomColor';
import TipCalculator from './25_TipCalculator';
import MortgageCalculator from './25_MortgageCalculator';
import TicTacToe from './26_TicTacToe';
import BmiCalculator from './27_BmiCalculator';
import DigitalClock from './28_DigitalClock';
import CountdownTimer from './29_CountdownTimer';
import QRCodeGenerator from './30_QRCodeGenerator';
import LocalStorage from './31_LocalStorage';
import ThemeSwitch from './32_ThemeSwitch';
import WindowResize from './34_WindowResize';
import CurrencyConverter from './35_CurrencyConverter';

const dummyData = {
    showInfinityScrolling: true,
    showLoadMoreData: true,
    showPagination: true,
    showPaginationAdvanced: true,
    showAccordion: true,
    showAccordionAdvanced: true,
    showModalDialog: true,
    showStepProgressbar: true,
    showTooltip: true,
    showFilterAdvanced: true,
    showFilterCards: true,
    showImageSlider: true,
    showImageCarousel: true,
    showMusicPlayer: true,
    showLoader: true,
    showProgressBar: true,
    showProgressBars: true,
    showRippleEffect: true,
    showDndPackage: true,
    showDragAndDropLists: true,
    showDragAndDropSides: true,
    showFormValidation: true,
    showContactForm: true,
    showLazyImage: true,
    showProgressiveImage: true,
    showDebounceApiCall: true,
    showScrolledIndicator: true,
    showScrollToTopBottom: true,
    showScrollToSection: true,
    showSearchAutoComplete: true,
    showStarRating: true,
    showTabbedContent: true,
    showTreeViews: true,
    showRandomColor: true,
    showTipCalculator: true,
    showMortgageCalculator: true,
    showTicTacToe: true,
    showBmiCalculator: true,
    showDigitalClock: true,
    showCountdownTimer: true,
    showQRCodeGenerator: true,
    showLocalStorage: true,
    showThemeSwitch: true,
    showWindowResize: true,
    showCurrencyConverter: true,
};

function featureFlagDataServiceCall() {
    return new Promise((resolve, reject) => {
        if (dummyData) setTimeout(resolve(dummyData), 2000);
        else reject('Something was wrong ! Try again letter.');
    });
}

// create Context
export const FeatureFlagContext = createContext();

function FeatureFlagGlobalState({ children }) {
    const [loading, setLoading] = useState(true);
    const [enableFlag, setEnableFlag] = useState({});

    useEffect(() => {
        async function fetchFeatureFlag() {
            try {
                const result = await featureFlagDataServiceCall();
                setEnableFlag(result);
            } catch (error) {
                throw new Error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchFeatureFlag();
    }, []);

    return (
        <FeatureFlagContext.Provider value={{ enableFlag, loading }}>
            {children}
        </FeatureFlagContext.Provider>
    );
}

// Main Feature Flag Components
function FeatureFlagComponents() {
    const { loading, enableFlag } = useContext(FeatureFlagContext);

    const componentsToRender = [
        {
            key: 'showInfinityScrolling',
            component: <InfinityScrolling />,
            name: 'InfinityScrolling',
        },
        { key: 'showLoadMoreData', component: <LoadMoreData />, name: 'LoadMoreData' },
        { key: 'showPagination', component: <Pagination />, name: 'Pagination' },
        {
            key: 'showPaginationAdvanced',
            component: <PaginationAdvanced />,
            name: 'PaginationAdvanced',
        },
        { key: 'showAccordion', component: <Accordion />, name: 'Accordion' },
        {
            key: 'showAccordionAdvanced',
            component: <AccordionAdvanced />,
            name: 'AccordionAdvanced',
        },
        { key: 'showModalDialog', component: <ModalDialog />, name: 'ModalDialog' },
        { key: 'showStepProgressbar', component: <StepProgressbar />, name: 'StepProgressbar' },
        { key: 'showTooltip', component: <Tooltip />, name: 'Tooltip' },
        { key: 'showFilterAdvanced', component: <FilterAdvanced />, name: 'FilterAdvanced' },
        { key: 'showFilterCards', component: <FilterCards />, name: 'FilterCards' },
        { key: 'showImageSlider', component: <ImageSlider />, name: 'ImageSlider' },
        { key: 'showImageCarousel', component: <ImageCarousel />, name: 'ImageCarousel' },
        { key: 'showMusicPlayer', component: <MusicPlayer />, name: 'MusicPlayer' },
        { key: 'showLoader', component: <Loader />, name: 'Loader' },
        { key: 'showProgressBar', component: <ProgressBar />, name: 'ProgressBar' },
        { key: 'showProgressBars', component: <ProgressBars />, name: 'ProgressBars' },
        { key: 'showRippleEffect', component: <RippleEffect />, name: 'RippleEffect' },
        { key: 'showDndPackage', component: <DndPackage />, name: 'DndPackage' },
        { key: 'showDragAndDropLists', component: <DragAndDropLists />, name: 'DragAndDropLists' },
        { key: 'showDragAndDropSides', component: <DragAndDropSides />, name: 'DragAndDropSides' },
        { key: 'showFormValidation', component: <FormValidation />, name: 'FormValidation' },
        { key: 'showContactForm', component: <ContactForm />, name: 'ContactForm' },
        { key: 'showLazyImage', component: <LazyImage />, name: 'LazyImage' },
        { key: 'showProgressiveImage', component: <ProgressiveImage />, name: 'ProgressiveImage' },
        { key: 'showDebounceApiCall', component: <DebounceApiCall />, name: 'DebounceApiCall' },
        {
            key: 'showScrolledIndicator',
            component: <ScrolledIndicator />,
            name: 'ScrolledIndicator',
        },
        {
            key: 'showScrollToTopBottom',
            component: <ScrollToTopBottom />,
            name: 'ScrollToTopBottom',
        },
        { key: 'showScrollToSection', component: <ScrollToSection />, name: 'ScrollToSection' },
        {
            key: 'showSearchAutoComplete',
            component: <SearchAutoComplete />,
            name: 'SearchAutoComplete',
        },
        { key: 'showStarRating', component: <StarRating />, name: 'StarRating' },
        { key: 'showTabbedContent', component: <TabbedContent />, name: 'TabbedContent' },
        { key: 'showTreeViews', component: <TreeViews />, name: 'TreeViews' },
        { key: 'showRandomColor', component: <RandomColor />, name: 'RandomColor' },
        { key: 'showTipCalculator', component: <TipCalculator />, name: 'TipCalculator' },
        {
            key: 'showMortgageCalculator',
            component: <MortgageCalculator />,
            name: 'MortgageCalculator',
        },
        { key: 'showTicTacToe', component: <TicTacToe />, name: 'TicTacToe' },
        { key: 'showBmiCalculator', component: <BmiCalculator />, name: 'BmiCalculator' },
        { key: 'showDigitalClock', component: <DigitalClock />, name: 'DigitalClock' },
        { key: 'showCountdownTimer', component: <CountdownTimer />, name: 'CountdownTimer' },
        { key: 'showQRCodeGenerator', component: <QRCodeGenerator />, name: 'QRCodeGenerator' },
        { key: 'showLocalStorage', component: <LocalStorage />, name: 'LocalStorage' },
        { key: 'showThemeSwitch', component: <ThemeSwitch />, name: 'ThemeSwitch' },
        { key: 'showWindowResize', component: <WindowResize />, name: 'WindowResize' },
        {
            key: 'showCurrencyConverter',
            component: <CurrencyConverter />,
            name: 'CurrencyConverter',
        },
    ];

    function checkEnableFlag(current) {
        return enableFlag[current];
    }

    if (loading) return <h2 className='wrapper'>Loading ! Please wait...</h2>;

    return (
        <div>
            {componentsToRender.map((item) =>
                checkEnableFlag(item.key) ? (
                    <div key={item.key} className='wrapper'>
                        <h2>{item.name}:</h2>
                        <div>{item.component}</div>
                    </div>
                ) : null
            )}
        </div>
    );
}

// Wrapper Context API Final Components Exports
export default function FeatureFlag() {
    return (
        <FeatureFlagGlobalState>
            <FeatureFlagComponents />
        </FeatureFlagGlobalState>
    );
}
