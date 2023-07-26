import React, { useState } from "react";
import AutoComplete from "./AutoComplete";

export default function App() {
  const [selected, setSelected] = useState("");
  const [datas, setDatas] = useState([
    { id: 1, name: "kamate" },
    { id: 1, name: "kone" },
  ]);

  const handleAddItem = (text) => {
    setDatas([...datas, { id: 1, name: text }]);
    setSelected({ id: 1, name: text });
  };

  return (
    <>
      <AutoComplete
        selected={selected}
        setSelected={setSelected}
        datas={datas}
        displayAs="name"
        handleAddItem={handleAddItem}
      />
    </>
  );
}
