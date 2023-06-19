import React, { useEffect, useState } from 'react';

const BookMark = (props) => {
  let [readingTime, setReadingTime] = useState(0);
  const { bookmark } = props;

  useEffect(() => {
    let totalReadingTime = 0;
    bookmark.forEach((bm) => {
      totalReadingTime += bm.reading_time;
    });
    setReadingTime(totalReadingTime);
  }, [bookmark]);


  return (
    <div>
      <h3 style={{ color: "#6047EC", border: "2px solid #6047EC", padding: "25px 20px", borderRadius: "10px" }}>Spent time on read : {readingTime} min</h3>
      <div style={{ paddingLeft: "25px" }}>
        <h2>Bookmarked Blogs: {bookmark.length}</h2>
        
        <div>
          <ul>
            {
              bookmark.map((bd, index) => (
                <div key={index} >
                  <p style={{ fontWeight: "700" }}>{bd.blog_title}</p>
                </div>
              ))

            }
          </ul>

        </div>

      </div>
    </div>
  );
};

export default BookMark;

