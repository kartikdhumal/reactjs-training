import React, { useState, useMemo, useRef, useCallback, forwardRef } from "react";
import generateItems from "./utils/generateItems";
import "./styles/home.scss";

const Item = forwardRef(({ item }, ref) => {
  return (
    <div className="item" ref={ref}>
      <img src={item.imageUrl} alt={item.name} loading="lazy" />
      <p>{item.name}</p>
    </div>
  );
});

const items = generateItems(10000);

const App = () => {
  const [search, setSearch] = useState("");
  const [data] = useState(items);
  const [visibleCount, setVisibleCount] = useState(20);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef(null);

  const filteredItems = useMemo(
    () => data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())),
    [search, data]
  );

  const lastItemRef = useCallback(
    (node) => {
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !loading) {
          setLoading(true);
          setTimeout(() => {
            setVisibleCount((prev) => prev + 20);
            setLoading(false);
          }, 3000);
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [loading]
  );

  return (
    <div className="container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="list">
        {filteredItems.slice(0, visibleCount).map((item, index) => (
          <Item key={item.id} item={item} ref={index === visibleCount - 1 ? lastItemRef : null} />
        ))}
      </div>
      {loading && <p className="loading-text">Loading more items...</p>}
    </div>
  );
};

export default App;
