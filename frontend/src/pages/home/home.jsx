import MessageContainer from '../../components/Messages/MessageContainer';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useVisibility } from '../../context/VisibilityContext';
const Home = () => {
  const { isMessageVisible } = useVisibility();
  return (
    <div className="w-screen h-screen bg-slate-200 flex justify-center items-center">
      <div className="w-[90%] h-[90%]">
        <div className="absolute w-[80%] h-[90%] right-[50rem] top-[4rem] z-1">
          <div className="flex justify-between items-center h-[90%] text-white relative flex-col">
            <Navbar />
          </div>
        </div>
        <div className="bg-white relative z-2 w-full h-full  flex rounded-md overflow-hidden border-b-2" style={{ borderRadius: '1rem' }}>
          <div className={`md:flex ${isMessageVisible ? 'hidden' : 'block'} flex flex-col w-full bg-white md:flex lg:w-1/3 xl:w-1/4 h-full p-4 border-slate-400`}>
            <Sidebar />
          </div>
          <div className={`md:flex ${isMessageVisible ? 'block' : 'hidden'} flex flex-col flex-grow bg-white h-full p-4 border-slate-400 border-l-2 w-full`}>
            <MessageContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
