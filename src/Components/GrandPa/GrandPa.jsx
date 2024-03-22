import Dad from "../Dad/Dad";
import Aunty from "../Uncle/Aunty/Aunty";
import Uncle from "../Uncle/Uncle";
import "./Grand.css";

const GrandPa = () => {
  return (
    <div className="grandPa flex">
      <Dad></Dad>
      <Uncle></Uncle>
      <Aunty></Aunty>
    </div>
  );
};

export default GrandPa;
