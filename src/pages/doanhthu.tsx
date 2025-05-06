import React from "react";
import ExpertBar from "./expertbar";
import "./Styles/doanhthu.css";

export default function DoanhThu() {
  return (
    <div className="doanhthu-layout">
      <ExpertBar />
      <main className="doanhthu-main">
        <div className="doanhthu-top-row">
          {/* Total Sales & Costs */}
          <div className="doanhthu-card doanhthu-salescost-card">
            <div className="doanhthu-card-header-row">
              <div>
                <div className="doanhthu-card-title">Total Sales & Costs</div>
                <div className="doanhthu-card-subtle">Last 7 days</div>
              </div>
              <div className="doanhthu-legend">
                <span>
                  <span className="legend-dot sales" /> Sales
                </span>
                <span>
                  <span className="legend-dot cost" /> Cost
                </span>
              </div>
            </div>
            <div className="doanhthu-card-value-row">
              <span className="doanhthu-card-value">$350K</span>
              <span className="doanhthu-card-trend positive">
                +8.56K <span className="trend-sub">vs last 7 days</span>
              </span>
            </div>
            <div className="doanhthu-salescost-chart-wrap">
              <svg className="doanhthu-salescost-chart" width="430" height="110" viewBox="0 0 430 110">
                {[0,1,2,3,4].map(i => (
                  <line 
                    key={i}
                    x1="40" x2="410" 
                    y1={30 + i*16} y2={30 + i*16}
                    stroke="#f2f4fa"
                    strokeWidth="1"
                  />
                ))}
                <text x="10" y="38" fontSize="11" fill="#8A94A6">$400K</text>
                <text x="10" y="54" fontSize="11" fill="#8A94A6">$300K</text>
                <text x="10" y="70" fontSize="11" fill="#8A94A6">$200K</text>
                <text x="10" y="86" fontSize="11" fill="#8A94A6">$100K</text>
                <text x="10" y="102" fontSize="11" fill="#8A94A6">$0</text>
                <polyline
                  points="40,90 95,70 150,60 205,48 260,65 315,42 370,37 410,35"
                  fill="none"
                  stroke="#1976f7"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
                <polyline
                  points="40,100 95,90 150,78 205,66 260,90 315,62 370,52 410,50"
                  fill="none"
                  stroke="#45b3e6"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
                <text x="40" y="108" fontSize="12" fill="#bfc5ce">MON</text>
                <text x="95" y="108" fontSize="12" fill="#bfc5ce">TUE</text>
                <text x="150" y="108" fontSize="12" fill="#bfc5ce">WED</text>
                <text x="205" y="108" fontSize="12" fill="#bfc5ce">THU</text>
                <text x="260" y="108" fontSize="12" fill="#bfc5ce">FRI</text>
                <text x="315" y="108" fontSize="12" fill="#bfc5ce">SAT</text>
                <text x="370" y="108" fontSize="12" fill="#bfc5ce">SUN</text>
              </svg>
            </div>
          </div>
          {/* Sessions */}
          <div className="doanhthu-card doanhthu-sessions doanhthu-card-large">
            <div className="doanhthu-card-header">
              <span>Sessions</span>
              <span className="doanhthu-card-sub">Last 7 days</span>
            </div>
            <div className="doanhthu-card-body">
              <div className="doanhthu-card-value">16.5K</div>
              <div className="doanhthu-card-trend negative">-3% <span>vs last 7 days</span></div>
            </div>
            <svg className="doanhthu-line-chart" width="250" height="72">
              <polyline
                points="15,38 60,20 120,46 180,28 210,66 240,45"
                fill="none"
                stroke="#ed473f"
                strokeWidth="4"
              />
            </svg>
          </div>
        </div>
        <div className="doanhthu-middle-row">
          <div className="doanhthu-card doanhthu-orders">
            <div className="doanhthu-card-header">
              <span>Total Orders</span>
              <span className="doanhthu-card-sub">Last 7 days</span>
            </div>
            <div className="doanhthu-card-body">
              <div className="doanhthu-card-value">25.7K</div>
              <div className="doanhthu-card-trend positive">+6% <span>vs last 7 days</span></div>
            </div>
            <svg className="doanhthu-spark" width="120" height="34">
              <polyline
                points="5,24 30,17 60,20 90,12 115,7"
                fill="none"
                stroke="#3dbd6a"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="doanhthu-card doanhthu-profit">
            <div className="doanhthu-card-header">
              <span>Total Profit</span>
              <span className="doanhthu-card-sub">Last 7 days</span>
            </div>
            <div className="doanhthu-card-body">
              <div className="doanhthu-card-value">50K</div>
              <div className="doanhthu-card-trend positive">+12% <span>vs last 7 days</span></div>
            </div>
            <svg className="doanhthu-spark" width="120" height="34">
              <polyline
                points="5,26 30,20 60,18 90,10 115,16"
                fill="none"
                stroke="#3dbd6a"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="doanhthu-card doanhthu-discount">
            <div className="doanhthu-card-header">
              <span>Discounted Amount</span>
              <span className="doanhthu-card-sub">Last 7 days</span>
            </div>
            <div className="doanhthu-card-body">
              <div className="doanhthu-card-value">12K</div>
              <div className="doanhthu-card-trend negative">-2% <span>vs last 7 days</span></div>
            </div>
            <svg className="doanhthu-spark" width="120" height="34">
              <polyline
                points="5,14 30,21 60,23 90,11 115,20"
                fill="none"
                stroke="#ed473f"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
        <div className="doanhthu-analytics-row">
          {/* Reports - now wider and the bar chart is as in the reference */}
          <div className="doanhthu-card doanhthu-reports doanhthu-card-xlarge">
            <div className="doanhthu-card-header">
              <span>Reports</span>
              <span className="doanhthu-card-sub">Last 7 Days</span>
              <span className="doanhthu-card-menu">⋮</span>
            </div>
            <div className="doanhthu-reports-top">
              <div className="doanhthu-reports-metric active">
                <div>24k</div>
                <span>Customers</span>
              </div>
              <div className="doanhthu-reports-metric">
                <div>1.5k</div>
                <span>Products</span>
              </div>
              <div className="doanhthu-reports-metric">
                <div>250k</div>
                <span>Revenue</span>
              </div>
            </div>
            <div className="doanhthu-reports-bar-wrap">
              <svg className="doanhthu-reports-bar" width="710" height="145" viewBox="0 0 710 145">
                {/* Y axis ticks/labels */}
                <text x="23" y="40" fontSize="13" fill="#8A94A6">50k</text>
                <text x="18" y="85" fontSize="13" fill="#8A94A6">25k</text>
                <text x="20" y="130" fontSize="13" fill="#8A94A6">0</text>
                {/* X axis ticks/labels */}
                <text x="65" y="142" fontSize="13" fill="#bfc5ce">Mon</text>
                <text x="165" y="142" fontSize="13" fill="#bfc5ce">Tue</text>
                <text x="265" y="142" fontSize="13" fill="#bfc5ce">Wed</text>
                <text x="365" y="142" fontSize="13" fill="#bfc5ce">Thu</text>
                <text x="465" y="142" fontSize="13" fill="#bfc5ce">Fri</text>
                <text x="565" y="142" fontSize="13" fill="#bfc5ce">Sat</text>
                <text x="665" y="142" fontSize="13" fill="#bfc5ce">Sun</text>
                {/* Bars */}
                <rect x="60" y="60" width="40" height="70" rx="7" fill="#1976f7" />
                <rect x="160" y="30" width="40" height="100" rx="7" fill="#1976f7" />
                <rect x="260" y="45" width="40" height="85" rx="7" fill="#1976f7" />
                <rect x="360" y="85" width="40" height="45" rx="7" fill="#1976f7" />
                <rect x="460" y="70" width="40" height="60" rx="7" fill="#1976f7" />
                <rect x="560" y="50" width="40" height="80" rx="7" fill="#1976f7" />
                <rect x="660" y="95" width="40" height="35" rx="7" fill="#1976f7" />
                {/* Line on top of bars */}
                <polyline
                  points="80,60 180,30 280,45 380,85 480,70 580,50 680,95"
                  fill="none"
                  stroke="#ffb300"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="doanhthu-card doanhthu-users doanhthu-card-large">
            <div className="doanhthu-card-header">
              <span>Users in last 30 minutes</span>
            </div>
            <div className="doanhthu-users-value">16.5K</div>
            <div className="doanhthu-users-label">Users per minute</div>
            <svg className="doanhthu-users-bar" width="360" height="56">
              {Array.from({ length: 30 }).map((_, i) => {
                const h = Math.floor(Math.random() * 28 + 10);
                return (
                  <rect
                    key={i}
                    x={12 * i}
                    y={56 - h}
                    width="8"
                    height={h}
                    fill="#1976f7"
                    rx="2"
                  />
                );
              })}
            </svg>
            <div className="doanhthu-users-countries">
              <div className="doanhthu-country">
                <span className="flag flag-us" /> 
                <span className="country-name">United States</span>
                <span className="country-bar">
                  <span style={{ width: "80%" }} />
                </span>
                <span className="country-users">30k</span>
                <span className="country-perc up">+25.8%</span>
              </div>
              <div className="doanhthu-country">
                <span className="flag flag-br" /> 
                <span className="country-name">Brazil</span>
                <span className="country-bar">
                  <span style={{ width: "65%", background: "#ed473f" }} />
                </span>
                <span className="country-users">26k</span>
                <span className="country-perc down">-16.2%</span>
              </div>
              <div className="doanhthu-country">
                <span className="flag flag-in" /> 
                <span className="country-name">India</span>
                <span className="country-bar">
                  <span style={{ width: "55%", background: "#3dbd6a" }} />
                </span>
                <span className="country-users">22k</span>
                <span className="country-perc up">+12.3%</span>
              </div>
              <div className="doanhthu-country">
                <span className="flag flag-au" /> 
                <span className="country-name">Australia</span>
                <span className="country-bar">
                  <span style={{ width: "40%", background: "#ed473f" }} />
                </span>
                <span className="country-users">17k</span>
                <span className="country-perc down">-11.9%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="doanhthu-bottom-row">
          <div className="doanhthu-card doanhthu-transactions doanhthu-card-xxlarge">
            <div className="doanhthu-card-header">
              <span>Last Transactions</span>
              <span className="doanhthu-card-link">View All</span>
            </div>
            <table className="doanhthu-trans-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>USER</th>
                  <th>EMAIL</th>
                  <th>PHONE</th>
                  <th>ADDRESS</th>
                  <th>ISSUED DATE</th>
                  <th>TOTAL</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="doanhthu-link">#5089</td>
                  <td>Nguyen Van A</td>
                  <td>nguyenvana@email.com</td>
                  <td>0901234567</td>
                  <td>123 Lê Lợi, Q.1, TP.HCM</td>
                  <td>31 March 2023</td>
                  <td>$1200</td>
                  <td className="doanhthu-link">View Detail</td>
                </tr>
                <tr>
                  <td className="doanhthu-link">#5090</td>
                  <td>Tran Thi B</td>
                  <td>tranthib@email.com</td>
                  <td>0902345678</td>
                  <td>456 Trần Hưng Đạo, Q.5, TP.HCM</td>
                  <td>31 March 2023</td>
                  <td>$950</td>
                  <td className="doanhthu-link">View Detail</td>
                </tr>
                <tr>
                  <td className="doanhthu-link">#5091</td>
                  <td>Le Van C</td>
                  <td>levanc@email.com</td>
                  <td>0913456789</td>
                  <td>789 Nguyễn Huệ, Q.1, TP.HCM</td>
                  <td>31 March 2023</td>
                  <td>$600</td>
                  <td className="doanhthu-link">View Detail</td>
                </tr>
                <tr>
                  <td className="doanhthu-link">#5092</td>
                  <td>Pham Thi D</td>
                  <td>phamthid@email.com</td>
                  <td>0934567890</td>
                  <td>321 Pasteur, Q.3, TP.HCM</td>
                  <td>31 March 2023</td>
                  <td>$1430</td>
                  <td className="doanhthu-link">View Detail</td>
                </tr>
                <tr>
                  <td className="doanhthu-link">#5093</td>
                  <td>Hoang Van E</td>
                  <td>hoangvane@email.com</td>
                  <td>0945678901</td>
                  <td>654 Lý Thường Kiệt, Q.10, TP.HCM</td>
                  <td>31 March 2023</td>
                  <td>$880</td>
                  <td className="doanhthu-link">View Detail</td>
                </tr>
                <tr>
                  <td className="doanhthu-link">#5094</td>
                  <td>Nguyen Thi F</td>
                  <td>nguyenthif@email.com</td>
                  <td>0956789012</td>
                  <td>987 Điện Biên Phủ, Q.Bình Thạnh, TP.HCM</td>
                  <td>31 March 2023</td>
                  <td>$765</td>
                  <td className="doanhthu-link">View Detail</td>
                </tr>
                <tr>
                  <td className="doanhthu-link">#5095</td>
                  <td>Tran Van G</td>
                  <td>tranvang@email.com</td>
                  <td>0967890123</td>
                  <td>741 Võ Văn Tần, Q.3, TP.HCM</td>
                  <td>31 March 2023</td>
                  <td>$1510</td>
                  <td className="doanhthu-link">View Detail</td>
                </tr>
                <tr>
                  <td className="doanhthu-link">#5096</td>
                  <td>Le Thi H</td>
                  <td>lethih@email.com</td>
                  <td>0978901234</td>
                  <td>159 Cách Mạng Tháng 8, Q.10, TP.HCM</td>
                  <td>31 March 2023</td>
                  <td>$620</td>
                  <td className="doanhthu-link">View Detail</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}