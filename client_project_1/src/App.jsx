import {
    Amenities,
    Footer,
    Gallery,
    Highlight,
    Home,
    Location,
    NavBar,
    Pricing,
    SideBar,
} from './Components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
    return (
        <div className='relative'>
            <NavBar />
            <div className='flex'>
                <div className='w-full lg:w-[75vw] pt-14'>
                    <Home />
                    <div className='max-w-[400px] lg:hidden block mx-auto sm:p-10 p-4 rounded-2xl shadow-2xl'>
                        <SideBar />
                    </div>
                    <Highlight />
                    <Amenities />
                    <Pricing />
                    <Gallery />
                    <Location />
                    <Footer />
                </div>
                <div className='w-[25vw] pt-14 lg:block hidden h-screen sticky top-0 shadow-2xl'>
                    <SideBar />
                </div>
            </div>
        </div>
    );
};

export default App;
