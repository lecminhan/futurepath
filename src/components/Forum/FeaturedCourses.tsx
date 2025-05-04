import React from "react";

const FeaturedCourses: React.FC = () => {
  return (
    <aside style={{ width: "30%", padding: "20px", maxHeight: "calc(100vh - 10px)", overflowY: "auto",marginTop:'40px' }}>
      <h4>Khoá học nổi bật</h4>
      {Array(10).fill(0).map((_, index) => (
        <div key={index} style={{ marginBottom: "30px", backgroundColor: "#fff", borderRadius: "10px" }}>
          <img src="https://bkacad.edu.vn/upload_images/images/H%E1%BB%87%20ch%E1%BB%A9ng%20ch%E1%BB%89/PYTHONKIDS.jpg" alt="Featured" style={{ width: "100%" }} />
          <div style={{ padding: "15px" }}>
            <h5>Through the Mist</h5>
            <p>Travel makes you see what a tiny place you occupy in the world.</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>William Wong</span>
              <span>9/25/2015</span>
            </div>
          </div>
        </div>
      ))}
    </aside>
  );
};

export default FeaturedCourses;
