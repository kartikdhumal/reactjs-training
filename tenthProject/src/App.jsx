import React, { useState, useMemo, useRef } from "react";
import generateItems from "./utils/generateItems";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./styles/home.scss";
import { useEffect } from "react";

const Item = ({ item, loadmore }) => {
  const observerRef = useRef(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (!observerRef.current) return
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadmore()
      }
    });
    if (observer) observer.observe(observerRef.current);
    return () => observer.disconnect()
  }, [observerRef, loadmore])
  return (
    <div className="item" >
      {loading && <Skeleton height={240} width={170} />}
      <img ref={observerRef} src={item.imageUrl} alt={item.name} loading="lazy" onLoad={() => {
        setLoading(false)
      }} />
      <p>{item.name}</p>
    </div>
  );
};

const items = generateItems(10000);

const App = () => {
  const [search, setSearch] = useState("");
  // const [visibleCount, setVisibleCount] = useState(4);
  const [visibledata, setVisibledata] = useState([])
  const [page, setPage] = useState(1)
  const filteredItems = useMemo(
    () => items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())),
    [search, items]
  );
  useEffect(() => {
    setVisibledata(items.slice(0, 4))
  }, [filteredItems])


  const loadmore = () => {
    setPage((prev) => {
      const newPage = prev + 1
      setVisibledata(filteredItems.slice(0, newPage * 4));
      return newPage
    })
  }


  return (
    <div className="container">
      <input type="text" className="search-bar" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
      <div className="list">
        {visibledata.map((item, index) => (
          <Item key={item.id} item={item} loadmore={index === visibledata.length - 1 ? loadmore : () => { }} />
        ))}
      </div>
    </div>
  );
};

export default App;
