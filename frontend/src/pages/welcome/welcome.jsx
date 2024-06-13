import { Link } from 'react-router-dom';
import WelcomeNavbar from '../../components/WelcomeNavbar';

const Welcome = () => {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('https://images.hdqwalls.com/download/space-art-planet-4k-59-3840x2160.jpg'), linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
        backgroundSize: 'cover', // Set the background image size to cover
      }}
    >
      <WelcomeNavbar />
      <div className="flex justify-center items-center flex-grow w-full h-full">
        <div className="hero w-full h-full">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <span className="loading loading-infinity w-[10rem]"></span>
              <h1 className="mb-5 text-5xl font-bold">Selamat Datang</h1>
              <p className="mb-5">Selamat datang di aplikasi chat kami! Semoga Anda menikmati pengalaman berkomunikasi yang menyenangkan dan bermakna bersama kami.</p>
              <Link to="/login" className="btn btn-primary">
                Get Started !
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
