import "./App.css";
import Countries from "./components/Countries/Countries";
import { Suspense } from "react";
const loadCountry = async () => {
  const countries = await fetch("https://openapi.programming-hero.com/api/all");
  return countries.json();
};

function App() {
  const countryData = loadCountry();
  return (
    <>
      <Suspense fallback={<p>Country data loading...</p>}>
        <Countries countryData={countryData}></Countries>
      </Suspense>
    </>
  );
}

export default App;
