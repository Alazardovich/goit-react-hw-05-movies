/* eslint-disable react/jsx-no-undef */
import { ContainerLoad } from "./CSSContainerLoad";
import { Circles } from "react-loader-spinner";
const Loader = () => {
  return (
    <ContainerLoad>
      <Circles
        type="Circles"
        color="#2DF030"
        height={130}
        width={130}
        arialLabel="loading"
      />
      Loading...
    </ContainerLoad>
  );
};

export default Loader;
