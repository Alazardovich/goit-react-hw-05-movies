import { Button } from "./CSSButton";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
const BackButton = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const onBackButton = () => {
    navigate(location?.state?.from ?? "/");
  };
  return (
    <Button type="button" onClick={onBackButton}>
      <FiArrowLeft style={{ marginRight: 4 }} />
      Back
    </Button>
  );
};

export default BackButton;
