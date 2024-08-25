import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Mainn from "./components/Mainn";
import { useEffect, useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;
      
      const today = (new Date()).toDateString();
      const localKey = `NASA-${today}`;
      
      // Check for cached data
      const cachedData = localStorage.getItem(localKey);
      if (cachedData) {
        const apiData = JSON.parse(cachedData);
        setData(apiData);
        console.log('Fetched from cache today');
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(url);
        const apiData = await res.json();

        // Store fetched data in local storage
        localStorage.clear(); // Only clear old data when new data is available
        localStorage.setItem(localKey, JSON.stringify(apiData));

        setData(apiData);
        console.log('Fetched from API today');
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false); // Ensure loading state is updated after fetch completes
      }
    }

    fetchAPIData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loadingState">
            <i className="fa fa-gear fa-spin"></i>
        </div>  
      ) : (
        <>
          <Mainn data={data} />
          {showModal && (
            <SideBar data={data} handleToggleModal={handleToggleModal} show={showModal}/>
          )}
          <Footer data={data} showModal={showModal} handleToggleModal={handleToggleModal}/>
        </>
      )}
    </>
  );
}

export default App;
