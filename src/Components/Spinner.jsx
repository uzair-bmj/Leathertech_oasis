import { useContext, useState, useEffect } from "react";
import { BounceLoader, PropagateLoader, PulseLoader } from 'react-spinners';
import "./spinner.css";
import { Authentication } from "../Context/AuthContext"; 



export default function Spinner() {
  const { loading, setLoading } = useContext(Authentication);
  const [color, setColor] = useState("rgba(255, 187, 51, 0.800)");

  useEffect(() => {
    setLoading(true);
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [loading, setLoading]);

  return (
    <div className="spinner-container">
      {loading ? (
        <div className="spinner-wrapper">
          <PulseLoader

            color={color}
            loading={loading}
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader"
     
          />
        </div>
      ) : null}
    </div>
  );
}
