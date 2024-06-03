import MessageContainer from '../../components/Messages/MessageContainer';
import Sidebar from '../../components/Sidebar/Sidebar';
const Home = () => {
  return (
    <div className="w-full h-full bg-slate-200 flex justify-center items-center flex-col">
      <div className="flex w-full h-full">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
