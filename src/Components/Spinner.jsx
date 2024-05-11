import { useContext, useState, useEffect } from "react";
import { BounceLoader, PropagateLoader, PuffLoader, PulseLoader, ScaleLoader } from 'react-spinners';
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
      }, 2000);
    }
  }, [loading, setLoading]);

  return (
    <div className="spinner-container">
      {loading ? (
        <div className="spinner-wrapper">
          <ScaleLoader
            color={color}
            loading={loading}
            size={1000}
            aria-label="Loading Spinner"
            data-testid="loader"
     
          />
        </div>
      ) : null}
    </div>
  );
}
