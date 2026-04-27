import React, { useState, useRef, useCallback } from "react";
import html2canvas from "html2canvas";
import Cropper from 'react-easy-crop';
import getCroppedImg from './utils/cropImage';
import "./App.css";

// Assets - Background
import bgImg from "./assets/bg.png";

// Assets - Logos
import logo1 from "./assets/LOGO/Asset 5.png";
import logo2 from "./assets/LOGO/Asset 6.png";
import logo3 from "./assets/LOGO/Asset 7.png";

// Assets - Ads
import ad1 from "./assets/Ads/Ads 1.png";
import ad2 from "./assets/Ads/Ads 2.png";
import ad3 from "./assets/Ads/Ads 3.png";
import ad4 from "./assets/Ads/Ads 4.png";

// Helpers
const toBengali = (num) => {
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().split('').map(digit => bengaliDigits[digit] || digit).join('');
};

const months = ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"];
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const years = Array.from({ length: 11 }, (_, i) => 2024 + i); // 2024 to 2034, user asked till 2030 but more is better

export default function App() {
  const [title, setTitle] = useState("এক সংবাদ বহু কপি অভিভাবকদের\nবক্তব্যেেই ছড়াল বিশৃঙ্খলা");
  const [category, setCategory] = useState("জাতীয়");
  
  // Date States
  const [day, setDay] = useState(18);
  const [month, setMonth] = useState("এপ্রিল");
  const [year, setYear] = useState(2026);

  const [mainImage, setMainImage] = useState(bgImg);
  
  // Custom Controls
  const [fontSize, setFontSize] = useState(28);
  const [boxHeight, setBoxHeight] = useState(200);
  const [titleFormat, setTitleFormat] = useState("gradient");

  // Image Positioning & Scale
  const [imageScale, setImageScale] = useState(1);
  const [imageX, setImageX] = useState(0);
  const [imageY, setImageY] = useState(0);

  // Cropping State
  const [imageToCrop, setImageToCrop] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [showCropper, setShowCropper] = useState(false);

  // Selection States
  const [currentLogo, setCurrentLogo] = useState(logo1);
  const [midLogo, setMidLogo] = useState(logo2);
  const [currentAd, setCurrentAd] = useState(ad1);

  const cardRef = useRef();

  const onCropComplete = useCallback((_ , croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageToCrop(reader.result);
        setShowCropper(true);
      };
    }
  };

  const finalizeCrop = async () => {
    try {
      const croppedImage = await getCroppedImg(imageToCrop, croppedAreaPixels);
      setMainImage(croppedImage);
      setShowCropper(false);
      setImageScale(1);
      setImageX(0);
      setImageY(0);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDownload = async () => {
    const canvas = await html2canvas(cardRef.current, {
      scale: 3,
      useCORS: true
    });
    const link = document.createElement("a");
    link.download = `MediaInTime_Post_${Date.now()}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const renderTitle = () => {
    const lines = title.split("\n");
    let line1 = lines[0];
    let line2 = lines.slice(1).join(" ");

    if (!line2) {
      const words = title.split(" ");
      const mid = Math.ceil(words.length / 2);
      line1 = words.slice(0, mid).join(" ");
      line2 = words.slice(mid).join(" ");
    }

    return (
      <div className="title-text" style={{ fontSize: `${fontSize}px` }}>
        <span className="line-white-box">{line1}</span>
        <span className="line-yellow-box">{line2}</span>
      </div>
    );
  };

  return (
    <div className="app-container">
      {/* Cropper Modal */}
      {showCropper && (
        <div className="cropper-overlay">
          <div className="cropper-container">
            <Cropper
              image={imageToCrop}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
          <div className="cropper-controls">
             <button className="btn btn-gold" onClick={finalizeCrop}>Finalize Crop</button>
             <button className="btn btn-primary" onClick={() => setShowCropper(false)}>Cancel</button>
          </div>
        </div>
      )}

      <aside className="sidebar">
        <h2>News Post Maker</h2>
        
        <div className="control-group">
          <label>Headline</label>
          <textarea className="input-field" rows="3" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="control-group">
          <label>Title Box Format</label>
          <div className="ad-grid">
            {['gradient', 'red', 'glass'].map(f => (
              <button key={f} className={`btn ${titleFormat === f ? 'btn-gold' : 'btn-primary'}`} style={{fontSize: '10px'}} onClick={() => setTitleFormat(f)}>{f.toUpperCase()}</button>
            ))}
          </div>
        </div>

        <div className="control-group">
          <label>Font Size ({fontSize}px)</label>
          <input type="range" min="15" max="60" value={fontSize} onChange={(e) => setFontSize(parseInt(e.target.value))} style={{width:'100%'}} />
        </div>

        <div className="control-group">
          <label>Box Height ({boxHeight}px)</label>
          <input type="range" min="100" max="400" value={boxHeight} onChange={(e) => setBoxHeight(parseInt(e.target.value))} style={{width:'100%'}} />
        </div>

        {/* Fine Adjustment */}
        <div className="control-group" style={{background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '8px'}}>
          <label style={{color: 'var(--accent-gold)'}}>🎯 Fine Adjustment</label>
          <input type="range" min="0.5" max="2" step="0.01" value={imageScale} onChange={(e) => setImageScale(parseFloat(e.target.value))} style={{width:'100%'}} />
          <input type="range" min="-300" max="300" value={imageX} onChange={(e) => setImageX(parseInt(e.target.value))} style={{width:'100%'}} />
          <input type="range" min="-300" max="300" value={imageY} onChange={(e) => setImageY(parseInt(e.target.value))} style={{width:'100%'}} />
        </div>

        <div className="control-group">
          <label>Category</label>
          <input className="input-field" value={category} onChange={(e) => setCategory(e.target.value)} />
          <div className="ad-grid" style={{marginTop: '10px', gridTemplateColumns: 'repeat(3, 1fr)'}}>
            {["জাতীয়", "রাজনীতি", "রাজধানী", "দেশজুড়ে", "অর্থনীতি", "আন্তর্জাতিক", "বিনোদন", "খেলা", "লাইফস্টাইল", "শিক্ষা", "হাসপাতাল", "জব"].map((cat) => (
              <button key={cat} className={`btn ${category === cat ? 'btn-gold' : 'btn-primary'}`} style={{fontSize: '10px', padding: '5px'}} onClick={() => setCategory(cat)}>{cat}</button>
            ))}
          </div>
        </div>

        {/* New Date Selection */}
        <div className="control-group">
          <label>Date Selection</label>
          <div style={{display: 'flex', gap: '5px'}}>
            <select className="input-field" value={day} onChange={(e) => setDay(parseInt(e.target.value))}>
              {days.map(d => <option key={d} value={d}>{toBengali(d)}</option>)}
            </select>
            <select className="input-field" value={month} onChange={(e) => setMonth(e.target.value)}>
              {months.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
            <select className="input-field" value={year} onChange={(e) => setYear(parseInt(e.target.value))}>
              {years.map(y => <option key={y} value={y}>{toBengali(y)}</option>)}
            </select>
          </div>
        </div>

        <div className="control-group">
          <label>Main Image</label>
          <input type="file" onChange={handleImageUpload} />
        </div>

        <div className="control-group">
          <label>Select Top Logo</label>
          <div className="ad-grid">
            {[logo1, logo2, logo3].map((l, i) => <button key={i} className={`btn ${currentLogo === l ? 'btn-gold' : 'btn-primary'}`} onClick={() => setCurrentLogo(l)}>Logo {i+1}</button>)}
          </div>
        </div>

        <div className="control-group">
          <label>Select Middle Logo</label>
          <div className="ad-grid">
            {[logo1, logo2, logo3].map((l, i) => <button key={i} className={`btn ${midLogo === l ? 'btn-gold' : 'btn-primary'}`} onClick={() => setMidLogo(l)}>Logo {i+1}</button>)}
          </div>
        </div>

        <div className="control-group">
          <label>Select Ad</label>
          <div className="ad-grid">
            {[ad1, ad2, ad3, ad4].map((a, i) => <img key={i} src={a} className={`ad-thumb ${currentAd === a ? 'active' : ''}`} onClick={() => setCurrentAd(a)} alt={`ad${i}`} />)}
          </div>
        </div>

        <button className="btn btn-primary" onClick={handleDownload} style={{marginTop: '20px'}}>Download Post</button>
      </aside>

      <main className="preview-area">
        <div className="card-canvas" ref={cardRef}>
          <div className="main-image-container">
            <img src={mainImage} className="main-image" style={{ transform: `scale(${imageScale}) translate(${imageX}px, ${imageY}px)`, transition: 'none' }} alt="content" />
          </div>

          <div className="top-overlay">
            <img src={currentLogo} className="fixed-logo" alt="logo" />
            <div className="category-tag">{category}</div>
          </div>

          <div className="bottom-container">
            <div className={`title-box-format format-${titleFormat}`} style={{ height: `${boxHeight}px` }}>
              <div className="mid-logo-container"><img src={midLogo} className="mid-logo" alt="logo" /></div>
              <div className="title-content-wrapper">{renderTitle()}</div>
            </div>

            <div className="info-box">
              <div className="info-left">মিডিয়া ইন টাইম</div>
              <div className="info-center">বিস্তারিত কমেন্টে</div>
              <div className="info-right">{toBengali(day)} {month} {toBengali(year)}</div>
            </div>

            <div className="ad-box"><img src={currentAd} className="ad-img" alt="ad" /></div>
          </div>
        </div>
      </main>
    </div>
  );
}
