
import React, { useState } from 'react';

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = '5ca9c4fc3aa474948f107b6adb2c7937'; // แก้ไขตรงนี้ด้วย API Key ของคุณ

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleFetchWeather = async (e) => {
    e.preventDefault();
    if (!city) return;

    setLoading(true); // เริ่ม loading
    setError(null);

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=th`);
      
      if (!response.ok) {
        throw new Error('ไม่พบเมืองที่คุณค้นหา');
      }

      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }finally {
      setLoading(false); // สิ้นสุด loading
    }
  };

const fetchCurrentLocationWeather = () => {
    setLoading(true);
    setError(null);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=th`);
          if (!response.ok) throw new Error('ไม่สามารถดึงข้อมูลตำแหน่งปัจจุบันได้');
          const data = await response.json();
          setWeatherData(data);
        } catch (err) {
          setError(err.message);
          setWeatherData(null);
        } finally {
          setLoading(false);
        }
      }, (error) => {
        setError("ไม่สามารถเข้าถึงตำแหน่งได้: " + error.message);
        setLoading(false);
      });
    } else {
      setError("เบราว์เซอร์ไม่รองรับ Geolocation");
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-md w-full max-w-lg mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        แอปพลิเคชันพยากรณ์อากาศ
      </h3>
      <form onSubmit={handleFetchWeather} className="grid grid-cols-4 gap-2 mb-4">
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="ใส่ชื่อเมือง (เช่น: Bangkok)"
          className="col-span-3 p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
        />
        <button
          type="submit"
          className="col-span-1 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 dark:bg-blue-700 dark:hover:bg-blue-600"
        >
          ค้นหา
        </button>
      </form>
      <button
        onClick={fetchCurrentLocationWeather}
        className="w-full bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-md mb-4 hover:bg-gray-300 transition-colors duration-300"
      >
        ใช้ตำแหน่งปัจจุบัน
      </button>
      {loading && <p className="text-center text-blue-500">กำลังโหลด...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {weatherData && (
        <div className="mt-6 text-center">
          <h4 className="text-3xl font-bold text-gray-800 dark:text-white">
            {weatherData.name}
          </h4>
          <p className="text-gray-600 dark:text-gray-300">
            {weatherData.weather[0].description}
          </p>
          <img
            src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            alt="weather icon"
            className="mx-auto my-2"
          />
          <p className="text-5xl font-bold text-gray-800 dark:text-white">
            {Math.round(weatherData.main.temp)}°C
          </p>
          <div className="flex justify-center space-x-8 mt-4">
            <div className="text-gray-600 dark:text-gray-300">
              <p>ความชื้น</p>
              <p>{weatherData.main.humidity}%</p>
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              <p>ความเร็วลม</p>
              <p>{weatherData.wind.speed} m/s</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;