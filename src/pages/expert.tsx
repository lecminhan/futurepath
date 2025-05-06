import React, { useRef, useEffect } from "react";
import ExpertBar from "./expertbar";
import "./Styles/expert.css";

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const thisYearPoints = [120, 160, 140, 180, 200, 210, 230, 240, 220, 270, 290, 310];
const lastYearPoints = [100, 110, 115, 120, 130, 160, 170, 190, 200, 210, 220, 230];

function getLinePoints(arr: number[], width: number, height: number, padX = 60, padY = 60) {
  const minY = Math.min(...arr);
  const maxY = Math.max(...arr);
  const stepX = (width - padX * 2) / (arr.length - 1);
  return arr
    .map((y, i) => {
      const normY = (y - minY) / (maxY - minY + 1e-5);
      const px = padX + stepX * i;
      const py = height - padY - normY * (height - padY * 2);
      return `${px},${py}`;
    })
    .join(" ");
}

// Pie chart helper
function getPieSegments(data: { value: number; color: string }[]) {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  let startAngle = 0;
  return data.map((d) => {
    const angle = (d.value / total) * 2 * Math.PI;
    const x1 = 40 + 32 * Math.cos(startAngle);
    const y1 = 40 + 32 * Math.sin(startAngle);
    const x2 = 40 + 32 * Math.cos(startAngle + angle);
    const y2 = 40 + 32 * Math.sin(startAngle + angle);
    const largeArc = angle > Math.PI ? 1 : 0;
    const path = [
      `M 40 40 L ${x1} ${y1}`,
      `A 32 32 0 ${largeArc} 1 ${x2} ${y2}`,
      "Z",
    ].join(" ");
    startAngle += angle;
    return { path, color: d.color, value: d.value };
  });
}

export default function Expert() {
  const thisYearRef = useRef<SVGPolylineElement>(null);
  const lastYearRef = useRef<SVGPolylineElement>(null);

  useEffect(() => {
    const animateLine = (ele: SVGPolylineElement | null, duration = 1200) => {
      if (ele) {
        const length = ele.getTotalLength();
        ele.style.strokeDasharray = `${length}`;
        ele.style.strokeDashoffset = `${length}`;
        ele.getBoundingClientRect(); // Force style recalculation
        ele.style.transition = `stroke-dashoffset ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
        ele.style.strokeDashoffset = "0";
      }
    };
    animateLine(thisYearRef.current, 1400);
    animateLine(lastYearRef.current, 1800);
  }, []);

  useEffect(() => {
    document.querySelectorAll<SVGCircleElement>(".pie-anim").forEach((el) => {
      const length = 2 * Math.PI * Number(el.getAttribute("r"));
      el.style.strokeDasharray = `${length}`;
      el.style.strokeDashoffset = `${length}`;
      el.getBoundingClientRect();
      el.style.transition = "stroke-dashoffset 1.3s cubic-bezier(0.4,0,0.2,1)";
      el.style.strokeDashoffset = "0";
    });
  }, []);

  const chartWidth = 900;
  const chartHeight = 340;
  const padX = 60, padY = 60;

  // Data for pie charts
  const websiteData = [
    { label: "Google", value: 32, color: "#4285F4" },
    { label: "YouTube", value: 18, color: "#FF0000" },
    { label: "Instagram", value: 16, color: "#E1306C" },
    { label: "Pinterest", value: 10, color: "#BD081C" },
    { label: "Facebook", value: 14, color: "#4267B2" },
    { label: "Twitter", value: 10, color: "#1DA1F2" },
  ];

  const locationData = [
    { label: "United States", value: 52.1, color: "#231f20" },
    { label: "Canada", value: 22.8, color: "#a9c9fd" },
    { label: "Mexico", value: 13.9, color: "#b5f5d1" },
    { label: "Other", value: 11.2, color: "#e8eaf6" },
  ];

  const websitePie = getPieSegments(websiteData);
  const locationPie = getPieSegments(locationData);

  return (
    <div className="expert-layout">
      <ExpertBar />
      <main className="expert-main">
        <section className="expert-stats-row">
          <div className="expert-stat-card">
            <div className="stat-title">Views</div>
            <div className="stat-value">7,265</div>
            <div className="stat-growth positive">+11.01%</div>
          </div>
          <div className="expert-stat-card">
            <div className="stat-title">Visits</div>
            <div className="stat-value">3,671</div>
            <div className="stat-growth negative">-0.03%</div>
          </div>
          <div className="expert-stat-card">
            <div className="stat-title">New Users</div>
            <div className="stat-value">156</div>
            <div className="stat-growth positive">+15.03%</div>
          </div>
          <div className="expert-stat-card">
            <div className="stat-title">Active Users</div>
            <div className="stat-value">2,318</div>
            <div className="stat-growth positive">+6.08%</div>
          </div>
        </section>

        <section className="expert-main-content">
          <div className="expert-chart-card expert-totaluser-bigcard">
            <div className="expert-chart-header">
              <span className="chart-tab active">Total Users</span>
              {/* <span className="chart-tab">Total Projects</span>
              <span className="chart-tab">Operating Status</span> */}
              <span className="chart-legend">
                <span className="dot this-year" /> This year
                <span className="dot last-year" /> Last year
              </span>
            </div>
            <div className="line-chart-placeholder big">
              <svg
                width={chartWidth}
                height={chartHeight}
                viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                style={{ overflow: "visible" }}
              >
                {[0, 1, 2, 3, 4, 5].map((v, idx) => {
                  const y = padY + ((chartHeight - padY * 2) * v) / 5;
                  const value =
                    Math.round(
                      ((1 - v / 5) *
                        (Math.max(...thisYearPoints, ...lastYearPoints) -
                          Math.min(...thisYearPoints, ...lastYearPoints)) +
                        Math.min(...thisYearPoints, ...lastYearPoints)
                      )
                    );
                  return (
                    <g key={idx}>
                      <line
                        x1={padX}
                        x2={chartWidth - padX}
                        y1={y}
                        y2={y}
                        stroke="#ececec"
                        strokeDasharray="2,4"
                      />
                      <text
                        x={padX - 15}
                        y={y + 5}
                        fill="#b2b2b2"
                        fontSize="15"
                        textAnchor="end"
                      >
                        {value}
                      </text>
                    </g>
                  );
                })}
                {months.map((m, i) => (
                  <text
                    key={m}
                    x={padX + i * ((chartWidth - padX * 2) / 11)}
                    y={chartHeight - padY + 30}
                    textAnchor="middle"
                    fontSize="16"
                    fill="#8D8D8D"
                    fontWeight={500}
                  >
                    {m}
                  </text>
                ))}
                <polyline
                  ref={thisYearRef}
                  fill="none"
                  stroke="#231f20"
                  strokeWidth="4"
                  points={getLinePoints(thisYearPoints, chartWidth, chartHeight, padX, padY)}
                  style={{
                    filter: "drop-shadow(0px 2px 8px #c0c0c040)",
                  }}
                />
                <polyline
                  ref={lastYearRef}
                  fill="none"
                  stroke="#A9C9FD"
                  strokeWidth="4"
                  strokeDasharray="10,8"
                  points={getLinePoints(lastYearPoints, chartWidth, chartHeight, padX, padY)}
                />
                {thisYearPoints.map((y, i) => {
                  const pts = getLinePoints(thisYearPoints, chartWidth, chartHeight, padX, padY)
                    .split(" ")
                    .map((p) => p.split(",").map(Number));
                  if (!pts[i]) return null;
                  return (
                    <circle
                      key={i}
                      cx={pts[i][0]}
                      cy={pts[i][1]}
                      r={7}
                      fill="#231f20"
                      opacity={0.13 + 0.05 * i}
                    />
                  );
                })}
                {lastYearPoints.map((y, i) => {
                  const pts = getLinePoints(lastYearPoints, chartWidth, chartHeight, padX, padY)
                    .split(" ")
                    .map((p) => p.split(",").map(Number));
                  if (!pts[i]) return null;
                  return (
                    <circle
                      key={i}
                      cx={pts[i][0]}
                      cy={pts[i][1]}
                      r={7}
                      fill="#A9C9FD"
                      opacity={0.13 + 0.05 * i}
                    />
                  );
                })}
              </svg>
            </div>
          </div>
        </section>

        <section className="expert-traffic-row">
          {/* Traffic by Website Pie */}
          <div className="expert-traffic-card">
            <div className="traffic-title">Traffic by Website</div>
            <div className="pie-chart-container">
              <svg width="110" height="110" viewBox="0 0 80 80">
                {websitePie.map((seg, i) => (
                  <path key={i} d={seg.path} fill={seg.color} />
                ))}
              </svg>
              <ul className="traffic-pie-legend">
                {websiteData.map((d, idx) => (
                  <li key={d.label}>
                    <span className="pie-dot" style={{ background: d.color }} />
                    {d.label}
                    <span className="percent">{d.value}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Traffic by Location Pie */}
          <div className="expert-traffic-card">
            <div className="traffic-title">Traffic by Location</div>
            <div className="pie-chart-container">
              <svg width="110" height="110" viewBox="0 0 80 80">
                {locationPie.map((seg, i) => (
                  <path key={i} d={seg.path} fill={seg.color} />
                ))}
              </svg>
              <ul className="traffic-pie-legend">
                {locationData.map((d, idx) => (
                  <li key={d.label}>
                    <span className="pie-dot" style={{ background: d.color }} />
                    {d.label}
                    <span className="percent">{d.value}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Có thể bỏ bớt 1 card nếu muốn đúng layout 2 cột */}
        </section>
      </main>
    </div>
  );
}