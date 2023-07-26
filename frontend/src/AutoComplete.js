import React, { useMemo, useState } from "react";

export default function AutoComplete({
  datas,
  selected,
  setSelected,
  displayAs,
  handleAddItem,
}) {
  const [search, setSearch] = useState("");

  const handleSearch = (text) => {
    setSearch(text);
    if (selected) {
      setSelected("");
    }
  };

  const filteredData = useMemo(() => {
    if (!search) return datas;

    return datas.filter((data) => {
      return data[displayAs].toLowerCase().includes(search.toLocaleLowerCase());
    });
  }, [search, datas]);

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <span>{filteredData.length}</span>
      {search.length > 0 && !selected && (
        <div>
          {filteredData.length == 0 && (
            <div onClick={() => handleAddItem(search)}>Add new item</div>
          )}
          {filteredData.map((data, index) => (
            <div key={index} onClick={() => setSelected(data)}>
              {data[displayAs]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
