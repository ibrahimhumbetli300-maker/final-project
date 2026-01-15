import { useState } from "react";
import { ChevronDown } from "lucide-react";



const GenderDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const toggleOption = (label) => {
    setSelected((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const reset = () => setSelected([]);

  return (
    <>
    </>
  );
};

export default GenderDropdown;
