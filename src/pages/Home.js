import {useState} from "react";

function Home() {
    const [showMore, setShowMore] = useState(false);

    return (
      <div>
          <h1>Welcome to my Portfolio</h1>
          <p>I am React Developer!</p>
          {showMore &&  <p>I also enjoy backend development and teaching .</p>}
          <button onClick={()=>setShowMore(!showMore)}>
              {showMore ?"Show less" : "Show more"}
          </button>

      </div>
    );
}
export default Home;