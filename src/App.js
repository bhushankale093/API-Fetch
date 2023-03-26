import "./App.css";
import Product from "./Components/Products";
import { useState, useEffect } from "react";
import Top from "./Components/Top";
function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [summary, setSummary] = useState([]);
  const [input, setInput] = useState("");

  const getData = async (d) => {
    setInput(d);
  };

  const apiData = async () => {
    fetch("https://api.rootnet.in/covid19-in/stats/latest")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (input.length > 0) {
          const filtered = data.filter((st) => {
            return st.loc.toLowerCase().includes(input.toLowerCase());
          });
          console.log("from filtered ", filtered);
          setFilteredData(filtered);
        } else {
          setData(response.data.regional);
          setFilteredData(data);
          console.log("from raw ", data);
        }
        setSummary(response.data.summary);
      });
  };

  useEffect(() => {
    apiData();
  }, [input]);

  return (
    <div>
      <Top
        total={summary.total}
        discharged={summary.discharged}
        deaths={summary.deaths}
        onChange={getData}
        data={data}
      />
      {input.length > 0 ? (
        <div className="d-flex flex-wrap container">
          {filteredData.map((product) => {
            return (
              <Product
                location={product.loc}
                discharged={product.discharged}
                deaths={product.deaths}
                total={product.totalConfirmed}
              />
            );
          })}
        </div>
      ) : (
        <div className="d-flex flex-wrap container">
          {data.map((product) => {
            return (
              <Product
                location={product.loc}
                discharged={product.discharged}
                deaths={product.deaths}
                total={product.totalConfirmed}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
