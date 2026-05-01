import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import "./OnePaper.css";
import logo1 from "./assets/LOGO/Asset 5.png";

// Social Icons as used in EPaper
const socialIcons = {
  facebook: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>,
  youtube: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>,
  tiktok: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.96-.5 3.95-1.72 5.5-1.58 2.02-4.22 3.08-6.79 2.7-2.73-.41-5.18-2.47-5.96-5.16-.86-2.92.1-6.17 2.5-8.03 2.06-1.6 4.9-2.02 7.32-1.13v4.06c-1.3-.56-2.88-.42-4.04.4-1.16.82-1.74 2.33-1.38 3.7.35 1.34 1.62 2.36 3.02 2.45 1.53.1 3.05-.82 3.56-2.28.23-.66.25-1.38.25-2.08v-15.1z"/></svg>
};

export default function OnePaper({ onBack }) {
  const [headline, setHeadline] = useState("মেহজাবীনের বিরুদ্ধে গ্রেপ্তারি পরোয়ানা");
  const [subHeadline, setSubHeadline] = useState("ব্যবসায় পার্টনার করার নামে টাকা নিয়ে জীবননাশের হুমকির অভিযোগ; আদালতে হাজির না হওয়ায় পরোয়ানা জারি।");
  const [deskName, setDeskName] = useState("বিনোদন ডেস্ক");
  const [introText, setIntroText] = useState("টাকা আত্মসাৎ ও প্রাণনাশের হুমকির অভিযোগে করা এক মামলায় জনপ্রিয় মডেল ও অভিনেত্রী মেহজাবীন চৌধুরী এবং তার ভাই আলিসান চৌধুরীর বিরুদ্ধে গ্রেপ্তারি পরোয়ানা জারি করেছেন আদালত। পারিবারিক ব্যবসায় পার্টনার করার কথা বলে ২৭ লাখ টাকা আত্মসাতের অভিযোগে এই মামলা দায়ের করা হয়।");
  
  const [col1Text, setCol1Text] = useState("রোববার (১৬ নভেম্বর) মামলার বাদী আমিরুল ইসলাম গ্রেপ্তারি পরোয়ানা জারির এই তথ্য নিশ্চিত করেছেন।\n\nতিনি জানান, ঢাকার নির্বাহী ম্যাজিস্ট্রেট আদালত-৩ এর বিচারক আফরোজা তানিয়া গত ১০ নভেম্বর আসামিদের বিরুদ্ধে এই গ্রেপ্তারি পরোয়ানা জারি করেন।\n\nবাদীপক্ষের আইনজীবী জানান, \"গত ১০ নভেম্বর মামলাটিতে আসামিদের (মেহজাবীন ও আলিসান) আদালতে হাজির হওয়ার দিন ধার্য ছিল। তবে তারা আদালতে হাজির হননি। এ কারণে আদালত তাদের বিরুদ্ধে গ্রেপ্তারি পরোয়ানা জারি করেছেন।\"\n\nআদালত গ্রেপ্তার সংক্রান্ত তামিল প্রতিবেদন দাখিলের জন্য আগামী ১৮ ডিসেম্বর পরবর্তী দিন ধার্য করেছেন।");
  
  const [col2Text, setCol2Text] = useState("মামলার এজাহার থেকে জানা যায়, বাদী আমিরুল ইসলামের সঙ্গে দীর্ঘদিনের পরিচয়ের সুবাদে মেহজাবীন চৌধুরী তার নতুন পারিবারিক ব্যবসায় পার্টনার হিসেবে রাখার প্রলোভন দেখান। সেই বিশ্বাসে আমিরুল ইসলাম নগদ অর্থে এবং বিকাশের মাধ্যমে বিভিন্ন সময়ে মোট ২৭ লাখ টাকা প্রদান করেন।\n\nঅভিযোগে বলা হয়, টাকা নেওয়ার পর মেহজাবীন ও তার ভাই দীর্ঘদিন ব্যবসায়িক কার্যক্রম শুরুর কোনো উদ্যোগ না নেওয়ায় আমিরুল ইসলাম টাকা ফেরত চাইতে যান। তখন তারা 'আজ দেব, কালকে দেব' বলে কালক্ষেপণ করতে থাকেন।\n\nপরবর্তীতে গত ১১ ফেব্রুয়ারি বাদী পাওনা টাকা চাইতে গেলে তাকে ১৬ মার্চ হাতিরঝিল রোডের পাশে একটি রেস্টুরেন্টে আসতে বলা হয়।\n\nবাদী অভিযোগে আরও উল্লেখ করেন, \"ওইদিন (১৬ মার্চ) ঘটনাস্থলে গেলে মেহজাবীন ও তার ভাইসহ আরও অজ্ঞাতনামা ৪-৫ জন আমাকে অকথ্য ভাষায় গালিগালাজ করেন।");
  
  const [col3Text, setCol3Text] = useState("তারা বলেন, 'এরপর তুই আমাদের বাসায় টাকা চাইতে যাবি না। তোকে বাসার সামনে পুনরায় দেখলে জানে মেরে ফেলব।' এভাবে তারা আমিরুলকে জীবননাশের হুমকি-ধামকি ও ভয়ভীতি প্রদর্শন করেন।\"\n\nভুক্তভোগী আমিরুল ইসলাম জানান, এই ঘটনার পর তিনি সমাধানের জন্য ভাটারা থানায় গিয়েছিলেন, কিন্তু সেখান থেকে তাকে আদালতে মামলা দায়ের করার পরামর্শ দেওয়া হয়। এরই পরিপ্রেক্ষিতে গত ২৪ মার্চ তিনি ঢাকার নির্বাহী ম্যাজিস্ট্রেট আদালতে মামলাটি দায়ের করেন।");
  
  const [imageCaption, setImageCaption] = useState("অভিনেত্রী মেহজাবীন চৌধুরী");
  const [mainImage, setMainImage] = useState(null); // Assuming user will upload an image
  const [footerAd, setFooterAd] = useState(null); // Footer Ad Space

  const [socials, setSocials] = useState({
    facebook: "mediaintimebd",
    youtube: "MediaInTimebd",
    tiktok: "mediaintimebd"
  });

  const paperRef = useRef();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setMainImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleFooterAdUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setFooterAd(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const downloadPaper = async () => {
    const canvas = await html2canvas(paperRef.current, { scale: 1, useCORS: true });
    const link = document.createElement("a");
    link.download = `1PaperNews_${Date.now()}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="onepaper-app">
      <aside className="sidebar">
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <button className="btn btn-primary" onClick={onBack}>← Back</button>
          <button className="btn btn-gold" style={{ flex: 1 }} onClick={downloadPaper}>Download PNG</button>
        </div>

        <div className="control-group">
          <label style={{ color: '#eab308' }}>Headline</label>
          <input className="input-field" value={headline} onChange={(e) => setHeadline(e.target.value)} />
        </div>

        <div className="control-group">
          <label style={{ color: '#eab308' }}>Sub Headline</label>
          <textarea className="input-field" rows="3" value={subHeadline} onChange={(e) => setSubHeadline(e.target.value)} />
        </div>

        <div className="control-group">
          <label style={{ color: '#eab308' }}>Desk Name</label>
          <input className="input-field" value={deskName} onChange={(e) => setDeskName(e.target.value)} />
        </div>

        <div className="control-group">
          <label style={{ color: '#eab308' }}>Intro Text (Near Image)</label>
          <textarea className="input-field" rows="4" value={introText} onChange={(e) => setIntroText(e.target.value)} />
        </div>

        <div className="control-group">
          <label style={{ color: '#eab308' }}>Column 1 Content</label>
          <textarea className="input-field" rows="4" value={col1Text} onChange={(e) => setCol1Text(e.target.value)} />
        </div>

        <div className="control-group">
          <label style={{ color: '#eab308' }}>Column 2 Content</label>
          <textarea className="input-field" rows="4" value={col2Text} onChange={(e) => setCol2Text(e.target.value)} />
        </div>

        <div className="control-group">
          <label style={{ color: '#eab308' }}>Column 3 Content</label>
          <textarea className="input-field" rows="4" value={col3Text} onChange={(e) => setCol3Text(e.target.value)} />
        </div>

        <div className="control-group">
          <label style={{ color: '#eab308' }}>Main Image Upload</label>
          <input type="file" onChange={handleImageUpload} />
        </div>

        <div className="control-group">
          <label style={{ color: '#eab308' }}>Image Caption</label>
          <input className="input-field" value={imageCaption} onChange={(e) => setImageCaption(e.target.value)} />
        </div>

        <div className="control-group">
          <label style={{ color: '#eab308' }}>Footer Ad Upload (Left Side)</label>
          <input type="file" onChange={handleFooterAdUpload} />
        </div>

        <div className="control-group" style={{ marginBottom: '20px' }}>
          <label style={{ color: '#eab308' }}>Social Media Handles</label>
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

      </aside>

      <main className="paper-preview-area">
        <div className="onepaper-canvas" ref={paperRef}>
          
          <div className="op-header">
            <div className="op-logo-container">
              <img src={logo1} alt="MIT Logo" className="op-logo" />
            </div>
            <div className="op-headline-container">
              <div className="op-headline">{headline}</div>
              <div className="op-subheadline">{subHeadline}</div>
            </div>
          </div>

          <div className="op-main-content">
            <div className="op-watermark">
              <span>MEDIA</span>
              <span>IN TIME</span>
            </div>

            <div className="op-left-image-area">
              {mainImage ? (
                <img src={mainImage} alt="Main" className="op-main-image" />
              ) : (
                <div style={{width: '100%', height: '100%', backgroundColor: '#eee', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#999'}}>
                  Upload Image
                </div>
              )}
              
              <div className="op-image-overlay-text">
                <div className="op-intro-text">
                  {introText}
                </div>
                <div className="op-image-caption">
                  {imageCaption}
                </div>
              </div>
            </div>

            <div className="op-right-text-area">
              <div className="op-desk-name">
                {deskName} <span>{`▶▶▶`}</span>
              </div>
              <div className="op-columns">
                <div className="op-column">
                  {col1Text.split('\n').map((paragraph, index) => (
                    paragraph && <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <div className="op-column">
                  {col2Text.split('\n').map((paragraph, index) => (
                    paragraph && <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <div className="op-column">
                  {col3Text.split('\n').map((paragraph, index) => (
                    paragraph && <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="op-footer-wrapper">
            <div className="op-footer-ad-section">
              {footerAd ? (
                <img src={footerAd} alt="Footer Ad" style={{ height: '110px', maxWidth: '700px', objectFit: 'contain' }} />
              ) : (
                <div style={{ color: '#ccc', fontSize: '18px', border: '2px dashed #ccc', padding: '10px 20px' }}>
                  Ads Space (Upload from Sidebar)
                </div>
              )}
            </div>
            
            <div className="op-footer-social-section">
              <div className="op-socials">
                <div className="op-social-item">
                  <div className="op-social-icon">{socialIcons.facebook}</div>
                  <span>{socials.facebook}</span>
                </div>
                <div className="op-social-item">
                  <div className="op-social-icon" style={{ borderRadius: '4px' }}>{socialIcons.youtube}</div>
                  <span>{socials.youtube}</span>
                </div>
                <div className="op-social-item">
                  <div className="op-social-icon">{socialIcons.tiktok}</div>
                  <span>{socials.tiktok}</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
