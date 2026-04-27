import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import "./EPaper.css";

const mainDemoImg = "C:\\Users\\rakam\\.gemini\\antigravity\\brain\\4a5e928d-b416-4803-bd7d-2d810f90a650\\summer_fashion_couple_1777314388907.png";
const boyImg = "C:\\Users\\rakam\\.gemini\\antigravity\\brain\\4a5e928d-b416-4803-bd7d-2d810f90a650\\boy_casual_wear_1777314407507.png";
const fruitImg = "C:\\Users\\rakam\\.gemini\\antigravity\\brain\\4a5e928d-b416-4803-bd7d-2d810f90a650\\exotic_fruits_bangladesh_1777314426870.png";

// Ad Demo Images
const bannerAdDemo = "C:\\Users\\rakam\\.gemini\\antigravity\\brain\\4a5e928d-b416-4803-bd7d-2d810f90a650\\banner_ad_real_estate_1777315520848.png";
const sideAdDemo = "C:\\Users\\rakam\\.gemini\\antigravity\\brain\\4a5e928d-b416-4803-bd7d-2d810f90a650\\side_poster_ad_jewelry_1777315540923.png";
const footerAdDemo = "C:\\Users\\rakam\\.gemini\\antigravity\\brain\\4a5e928d-b416-4803-bd7d-2d810f90a650\\footer_ad_electronics_1777315565102.png";
const boxAdDemo = "C:\\Users\\rakam\\.gemini\\antigravity\\brain\\4a5e928d-b416-4803-bd7d-2d810f90a650\\box_ad_delivery_1777315587665.png";

import logo1 from "./assets/LOGO/Asset 5.png";

const socialIcons = {
  facebook: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>,
  youtube: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>,
  instagram: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.474 1.38.894.42.42.678.82.894 1.38.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.474.96-.894 1.38-.42.42-.82.678-1.38.894-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.56-.216-.96-.474-1.38-.894-.42-.42-.678-.82-.894-1.38-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.216-.56.474-.96.894-1.38.42-.42.82-.678 1.38-.894.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.132 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126s1.328 1.078 2.126 1.384c.766.296 1.636.499 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384s1.078-1.328 1.384-2.126c.296-.765.499-1.636.558-2.913.058-1.28.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126s-1.328-1.078-2.126-1.384c-.765-.297-1.636-.499-2.913-.558C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" /></svg>,
  x: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" /></svg>,
  threads: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.421 15.342c-2.316 0-3.614-1.382-3.614-3.52 0-2.14.993-3.52 3.614-3.52 2.316 0 3.614 1.382 3.614 3.52 0 2.14-1.298 3.52-3.614 3.52zM12.012 0C5.378 0 0 5.378 0 12.012s5.378 12.012 12.012 12.012c1.942 0 3.784-.46 5.41-1.272l-1.077-1.86c-1.32.658-2.8 1.03-4.333 1.03-5.32 0-9.64-4.32-9.64-9.64 0-5.32 4.32-9.64 9.64-9.64 5.32 0 9.64 4.32 9.64 9.64 0 1.954-.582 3.82-1.68 5.4l1.967 1.138C22.95 16.51 24 14.34 24 12.012 24 5.378 18.622 0 12.012 0zm4.409 6.208c-3.627 0-5.59 2.053-5.59 5.614 0 3.561 1.963 5.614 5.59 5.614 3.627 0 5.59-2.053 5.59-5.614 0-3.561-1.963-5.614-5.59-5.614z" /></svg>,
  linkedin: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
};

const toBengali = (num) => {
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().split('').map(digit => bengaliDigits[digit] || digit).join('');
};

const weekdays = ["শনিবার", "রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার"];
const months = ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"];
const years = Array.from({ length: 11 }, (_, i) => 2024 + i);

const getBanglaDate = (d, m, y) => {
  const monthIdx = months.indexOf(m);
  let bDay, bMonth, bYear;

  // Simple conversion logic for Bangladeshi Bengali Calendar
  // Boishakh starts on April 14
  if (monthIdx === 3) { // April
    if (d >= 14) { bDay = d - 13; bMonth = "বৈশাখ"; bYear = y - 593; }
    else { bDay = d + 17; bMonth = "চৈত্র"; bYear = y - 594; }
  } else if (monthIdx === 4) { // May
    if (d >= 15) { bDay = d - 14; bMonth = "জ্যৈষ্ঠ"; bYear = y - 593; }
    else { bDay = d + 17; bMonth = "বৈশাখ"; bYear = y - 593; }
  } else if (monthIdx === 5) { // June
    if (d >= 16) { bDay = d - 15; bMonth = "আষাঢ়"; bYear = y - 593; }
    else { bDay = d + 16; bMonth = "জ্যৈষ্ঠ"; bYear = y - 593; }
  } else if (monthIdx === 6) { // July
    if (d >= 17) { bDay = d - 16; bMonth = "শ্রাবণ"; bYear = y - 593; }
    else { bDay = d + 15; bMonth = "আষাঢ়"; bYear = y - 593; }
  } else if (monthIdx === 7) { // August
    if (d >= 17) { bDay = d - 16; bMonth = "ভাদ্র"; bYear = y - 593; }
    else { bDay = d + 15; bMonth = "শ্রাবণ"; bYear = y - 593; }
  } else if (monthIdx === 8) { // September
    if (d >= 17) { bDay = d - 16; bMonth = "আশ্বিন"; bYear = y - 593; }
    else { bDay = d + 15; bMonth = "ভাদ্র"; bYear = y - 593; }
  } else if (monthIdx === 9) { // October
    if (d >= 17) { bDay = d - 16; bMonth = "কার্তিক"; bYear = y - 593; }
    else { bDay = d + 14; bMonth = "আশ্বিন"; bYear = y - 593; }
  } else if (monthIdx === 10) { // November
    if (d >= 16) { bDay = d - 15; bMonth = "অগ্রহায়ণ"; bYear = y - 593; }
    else { bDay = d + 14; bMonth = "কার্তিক"; bYear = y - 593; }
  } else if (monthIdx === 11) { // December
    if (d >= 16) { bDay = d - 15; bMonth = "পৌষ"; bYear = y - 593; }
    else { bDay = d + 15; bMonth = "অগ্রহায়ণ"; bYear = y - 593; }
  } else if (monthIdx === 0) { // January
    if (d >= 15) { bDay = d - 14; bMonth = "মাঘ"; bYear = y - 594; }
    else { bDay = d + 16; bMonth = "পৌষ"; bYear = y - 594; }
  } else if (monthIdx === 1) { // February
    if (d >= 14) { bDay = d - 13; bMonth = "ফাল্গুন"; bYear = y - 594; }
    else { bDay = d + 17; bMonth = "মাঘ"; bYear = y - 594; }
  } else if (monthIdx === 2) { // March
    if (d >= 15) { bDay = d - 14; bMonth = "চৈত্র"; bYear = y - 594; }
    else { bDay = d + 16; bMonth = "ফাল্গুন"; bYear = y - 594; }
  }

  return `${toBengali(bDay)} ${bMonth} ${toBengali(bYear)}`;
};

export default function EPaper({ onBack }) {
  const [weekday, setWeekday] = useState("মঙ্গলবার");
  const [day, setDay] = useState(28);
  const [month, setMonth] = useState("এপ্রিল");
  const [year, setYear] = useState(2026);
  const [banglaDate, setBanglaDate] = useState("");

  React.useEffect(() => {
    setBanglaDate(getBanglaDate(day, month, year));
  }, [day, month, year]);

  const [category, setCategory] = useState("জাতীয়");
  const [pageNumber, setPageNumber] = useState(7);
  const [socials, setSocials] = useState({
    facebook: "facebook.com/mediaintime",
    youtube: "youtube.com/@mediaintime",
    instagram: "instagram.com/mediaintime",
    x: "x.com/mediaintime",
    threads: "threads.net/@mediaintime",
    linkedin: "linkedin.com/company/mediaintime"
  });

  const [footerInfo, setFooterInfo] = useState({
    editor: "শাওন আহমেদ",
    publisher: "মিডিয়া ইন টাইম",
    location: "ঢাকা, বাংলাদেশ",
    phone: "০১৬XXXXXXXX",
    email: "info@mediaintime.com",
    adPhone: "০১৮XXXXXXXX",
    adEmail: "ads@mediaintime.com",
    qrUrl: "https://mediaintime.com"
  });

  const [ads, setAds] = useState({
    banner: bannerAdDemo,
    side: sideAdDemo,
    box: boxAdDemo,
    poster: sideAdDemo,
    footer: footerAdDemo,
    // Story-specific ads
    story2: boxAdDemo,
    story3: boxAdDemo,
    story4: boxAdDemo,
    story5: boxAdDemo,
    story6: boxAdDemo,
    story7: boxAdDemo,
    story8: boxAdDemo,
    story9: boxAdDemo,
    story10: boxAdDemo
  });

  const [stories, setStories] = useState(Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: i === 0 ? "গরমে আরাম লুকে গ্ল্যামার" : `নিউজ টাইটেল ${i + 1}`,
    content: i === 0 ? "রোজের তাপ দিনকে দিন বাড়তেই হচ্ছে হয়ে খুঁজতে সবাই একটুখানি আরাম। কী পরলে মিলবে এক পশলা শীতলতা? এদিকে ক্যাজুয়ালও হওয়া চাই ফ্যাশনেবল।" : `এখানে আপনার খবরের বিস্তারিত তথ্য লিখুন। এটি ১০টি নিউজের মধ্যে একটি যা আপনি ইচ্ছামতো পরিবর্তন করতে পারবেন।`,
    image: i === 0 ? mainDemoImg : (i === 1 ? boyImg : (i === 3 ? fruitImg : null)),
    credit: "ছবি: মিডিয়া ইন টাইম",
  })));

  const paperRef = useRef();

  const handleUpdateStory = (id, field, value) => {
    setStories(stories.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const handleImageUpload = (id, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => handleUpdateStory(id, 'image', reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleAdUpload = (type, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setAds({ ...ads, [type]: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const downloadPaper = async () => {
    const canvas = await html2canvas(paperRef.current, { scale: 2, useCORS: true });
    const link = document.createElement("a");
    link.download = `EPaper_${category}_P${pageNumber}_${Date.now()}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const downloadFB = async () => {
    // Capturing the FULL page but optimized for Facebook (1080px width)
    const canvas = await html2canvas(paperRef.current, {
      scale: 2.5,
      useCORS: true,
      width: 1000, // The container is 1000px, scale 2.5 makes it 2500px, FB will downscale nicely
      scrollX: 0,
      scrollY: -window.scrollY
    });
    const link = document.createElement("a");
    link.download = `FB_Full_Page_${category}_${Date.now()}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const fullDateStr = `${weekday}, ${toBengali(day)} ${month} ${toBengali(year)} | ${banglaDate}`;

  return (
    <div className="epaper-app">
      <aside className="sidebar">
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <button className="btn btn-primary" onClick={onBack}>← Back</button>
          <button className="btn btn-gold" style={{ flex: 1 }} onClick={downloadPaper}>Download PNG</button>
          <button className="btn btn-gold" style={{ flex: 1, background: '#1877F2', borderColor: '#1877F2' }} onClick={downloadFB}>Download for FB</button>
        </div>

        <div className="control-group" style={{ marginBottom: '20px' }}>
          <label style={{ color: '#eab308' }}>ePaper Category</label>
          <input className="input-field" value={category} onChange={(e) => setCategory(e.target.value)} />
          <div className="ad-grid" style={{ marginTop: '10px', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {["জাতীয়", "রাজনীতি", "রাজধানী", "দেশজুড়ে", "অর্থনীতি", "আন্তর্জাতিক", "বিনোদন", "খেলা", "লাইফস্টাইল", "শিক্ষা", "হাসপাতাল", "জব"].map((cat) => (
              <button key={cat} className={`btn ${category === cat ? 'btn-gold' : 'btn-primary'}`} style={{ fontSize: '9px', padding: '5px' }} onClick={() => setCategory(cat)}>{cat}</button>
            ))}
          </div>
        </div>

        <div className="control-group" style={{ marginBottom: '20px' }}>
          <label style={{ color: '#eab308' }}>Date Selection</label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px' }}>
            <select className="input-field" value={weekday} onChange={(e) => setWeekday(e.target.value)}>
              {weekdays.map(w => <option key={w} value={w}>{w}</option>)}
            </select>
            <select className="input-field" value={day} onChange={(e) => setDay(parseInt(e.target.value))}>
              {Array.from({ length: 31 }, (_, i) => i + 1).map(d => <option key={d} value={d}>{toBengali(d)}</option>)}
            </select>
            <select className="input-field" value={month} onChange={(e) => setMonth(e.target.value)}>
              {months.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
            <select className="input-field" value={year} onChange={(e) => setYear(parseInt(e.target.value))}>
              {years.map(y => <option key={y} value={y}>{toBengali(y)}</option>)}
            </select>
          </div>
          <input
            className="input-field"
            style={{ marginTop: '5px' }}
            value={banglaDate}
            placeholder="Bangla Date (e.g. ১৫ বৈশাখ ১৪৩৩)"
            onChange={(e) => setBanglaDate(e.target.value)}
          />
        </div>

        <div className="control-group" style={{ marginBottom: '20px' }}>
          <label style={{ color: '#eab308' }}>Page Number</label>
          <select className="input-field" value={pageNumber} onChange={(e) => setPageNumber(parseInt(e.target.value))}>
            {Array.from({ length: 15 }, (_, i) => i + 1).map(n => (
              <option key={n} value={n}>পেজ {toBengali(n)}</option>
            ))}
          </select>
        </div>

        <div className="control-group" style={{ marginBottom: '20px' }}>
          <label style={{ color: '#eab308' }}>Social Media Links</label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '5px' }}>
            {Object.keys(socials).map(key => (
              <div key={key} style={{ display: 'flex', flexDirection: 'column' }}>
                <label style={{ fontSize: '10px', textTransform: 'capitalize' }}>{key}</label>
                <input
                  className="input-field"
                  value={socials[key]}
                  onChange={(e) => setSocials({ ...socials, [key]: e.target.value })}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="control-group" style={{ marginBottom: '20px' }}>
          <label style={{ color: '#eab308' }}>Footer Credits & QR</label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '5px' }}>
            {Object.keys(footerInfo).map(key => (
              <div key={key} style={{ display: 'flex', flexDirection: 'column' }}>
                <label style={{ fontSize: '10px', textTransform: 'capitalize' }}>{key.replace(/([A-Z])/g, ' $1')}</label>
                <input
                  className="input-field"
                  value={footerInfo[key]}
                  onChange={(e) => setFooterInfo({ ...footerInfo, [key]: e.target.value })}
                />
              </div>
            ))}
          </div>
        </div>

        <h2 style={{ color: '#eab308', marginBottom: '10px' }}>Ad Management</h2>
        <div className="ad-controls-grid" style={{ maxHeight: '30vh', overflowY: 'auto' }}>
          {Object.keys(ads).map(type => (
            <div key={type} className="ad-input-box">
              <label>{type.toUpperCase()} Ad</label>
              <input type="file" onChange={(e) => handleAdUpload(type, e)} />
            </div>
          ))}
        </div>

        <h2 style={{ color: '#eab308', margin: '20px 0 10px 0' }}>10 News Stories</h2>
        <div className="story-editor-list" style={{ maxHeight: '20vh' }}>
          {stories.map((story, idx) => (
            <div key={story.id} className="story-editor-card">
              <label style={{ color: '#eab308', fontWeight: 'bold' }}>Story {idx + 1}</label>
              <input
                type="text"
                value={story.title}
                placeholder="News Title"
                onChange={(e) => handleUpdateStory(story.id, 'title', e.target.value)}
              />
              <textarea
                rows="2"
                value={story.content}
                placeholder="News Details"
                onChange={(e) => handleUpdateStory(story.id, 'content', e.target.value)}
              />
              <input
                type="text"
                value={story.credit}
                placeholder="Image Credit"
                onChange={(e) => handleUpdateStory(story.id, 'credit', e.target.value)}
              />
              <label style={{ fontSize: '10px', display: 'block', marginTop: '5px' }}>Change Image:</label>
              <input type="file" onChange={(e) => handleImageUpload(story.id, e)} />
            </div>
          ))}
        </div>
      </aside>

      <main className="paper-preview">
        <div className="paper-container" ref={paperRef}>
          <div className="top-banner">
            <div className="banner-item">মিডিয়া ইন টাইম এর পক্ষ থেকে আপনাদের সবাইকে অনেক অনেক শুভেচ্ছা।</div>
          </div>

          <div className="paper-main-title-box">
            <div className="main-title-row">
              <span className="title-dainik">দৈনিক</span>
              <span className="title-media">মিডিয়ার</span>
              <span className="title-shomoy">
                সময়
                <svg className="shomoy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="6" x2="12" y2="12" />
                  <line x1="12" y1="12" x2="16" y2="14" />
                  <path d="M12 2v2M12 20v2M20 12h2M2 12h2" />
                </svg>
              </span>
              <div className="title-corner-brand">Media In Time</div>
            </div>

            <div className="social-links-row">
              {Object.entries(socials).map(([platform, url]) => (
                url && (
                  <div key={platform} className="social-tag">
                    <span className={`social-icon-svg ${platform}`}>
                      {socialIcons[platform]}
                    </span>
                    <span className="social-url">{url}</span>
                  </div>
                )
              ))}
            </div>
          </div>

          <header className="paper-header">
            <div className="header-top">
              <div className="header-left">
                <img src={logo1} className="header-mini-logo" alt="logo" />
                <div className="issue-info">{fullDateStr}</div>
              </div>
              <div className="header-center">
                <h1 className="paper-logo">{category}</h1>
              </div>
              <div className="header-right">
                <div className="page-circle"><span>{toBengali(pageNumber)}</span></div>
              </div>
            </div>
          </header>

          {/* Banner Ad */}
          {ads.banner && (
            <div className="paper-ad banner-ad">
              <img src={ads.banner} alt="Banner Ad" />
            </div>
          )}

          <div className="news-grid-container">
            {stories.map((s, idx) => (
              <div key={s.id} className={`story-ad-wrapper block-${idx + 1}`}>
                <article className="news-block">
                  <div className="news-image-wrapper">
                    {s.image ? (
                      <img src={s.image} alt="News" />
                    ) : (
                      <div className="no-img">No Image Provided</div>
                    )}
                    {s.credit && <div className="news-credit">{s.credit}</div>}
                  </div>
                  <h3 className="news-title">{s.title}</h3>
                  <p className="news-details">{s.content}</p>

                  {/* Inject Main Box Ad after Story 1 */}
                  {idx === 0 && ads.box && (
                    <div className="paper-ad box-ad-inline" style={{ marginTop: '20px' }}>
                      <img src={ads.box} alt="Box Ad" />
                      <div className="ad-size-label">Size: 900x200px</div>
                    </div>
                  )}
                </article>

                {/* Inline ads from Story 2 onwards */}
                {idx >= 1 && (
                  <div className="news-inline-ad">
                    <div className="ad-image-container-small">
                      <img src={ads[`story${idx + 1}`]} alt={`Ad ${idx + 1}`} />
                      <div className="ad-size-label">Size: 450x80px</div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Poster Ad next to Story 10 */}
            <div className="story-ad-wrapper poster-ad-block">
              <div className="paper-ad poster-ad-full">
                <img src={ads.poster} alt="Poster Ad" />
                <div className="ad-size-label">Size: 450x600px</div>
              </div>
            </div>
          </div>

          {/* Footer Ad */}
          {ads.footer && (
            <div className="paper-ad footer-ad">
              <img src={ads.footer} alt="Footer Ad" />
            </div>
          )}

          <footer className="paper-credits-footer">
            <div className="credits-left">
              <div className="credit-row">
                <strong>সম্পাদক:</strong> {footerInfo.editor} | <strong>প্রকাশক:</strong> {footerInfo.publisher}
              </div>
              <div className="credit-row small">
                {footerInfo.location} | ফোন: {footerInfo.phone} | ই-মেইল: {footerInfo.email}
              </div>
              <div className="credit-row advertising">
                <strong>বিজ্ঞাপন বিভাগ:</strong> ফোন: {footerInfo.adPhone}, ই-মেইল: {footerInfo.adEmail}
              </div>
            </div>

            <div className="credits-right">
              <div className="qr-container">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(footerInfo.qrUrl)}`}
                  alt="QR Code"
                  className="footer-qr"
                />
                <div className="qr-label">
                  <span className="qr-scan">Scan</span> <span className="qr-to">to</span> <span className="qr-visit">Visit</span>
                </div>
              </div>
            </div>
          </footer>

          <div className="paper-final-copyright">
            <div className="publication-line">মিডিয়া ইন টাইমের একটি প্রকাশনা ।</div>
            <div className="copyright-line">© স্বত্বাধিকার সংরক্ষিত ২০২৬ | মিডিয়া ইন টাইম | Daily Mediar Time | Media In Time | Bangladesh</div>
          </div>
        </div>
      </main>
    </div>
  );
}
