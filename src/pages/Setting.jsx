import React, { useState, useEffect } from 'react';
import "../style/settings.scss"

const Settings = ({ setSettings }) => {
  const [backgroundColor, setBackgroundColor] = useState('');
  const [primaryColor, setPrimaryColor] = useState('');
  const [secondaryColor, setSecondaryColor] = useState('');
  const [fontSize, setFontSize] = useState('');
  const [fontColor, setFontColor] = useState('');
  let [settingsSaved, setSettingsSaved] = useState(false);


  useEffect(() => {
    // update state after refreshing page
    const storedSettings = JSON.parse(localStorage.getItem('settings'));
    if (storedSettings) {
      setBackgroundColor(storedSettings.backgroundColor);
      setPrimaryColor(storedSettings.primaryColor);
      setSecondaryColor(storedSettings.secondaryColor);
      setFontSize(storedSettings.fontSize);
      setFontColor(storedSettings.fontColor);
    }
  }, []);

  // save setting function
  const handleSaveSettings = () => {
    const settings = {
      backgroundColor,
      primaryColor,
      secondaryColor,
      fontSize,
      fontColor,
    };

    localStorage.setItem('settings', JSON.stringify(settings));
    setSettings(settings);
    setSettingsSaved(!settingsSaved)
  };

  // reset all setting function
  const resetSettings = () =>{
    localStorage.clear();
    setSettings({});
    setSettingsSaved(!settingsSaved)
  }

  return (
    <div className="page-content">
      <h2>Modify the colors and font size</h2>
      <div className='color-setting'>
        <div className='setting-row'>
          <div className='setting-column'>
            <label>Background Color:</label>
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
            />
          </div>
          <div className='setting-column'>
            <label>Primary Color:</label>
            <input
              type="color"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
            />
          </div>
        </div>

        <div className='setting-row'>
          <div className='setting-column'>
            <label>Secondary Color:</label>
            <input
              type="color"
              value={secondaryColor}
              onChange={(e) => setSecondaryColor(e.target.value)}
            />
          </div>
          <div className='setting-column'>
            <label>Font Size:</label>
            <input
              type="number"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
            />
          </div>
        </div>

        <div className='setting-row'>
          <div className='setting-column'>
            <label>Font Color:</label>
            <input
              type="color"
              value={fontColor}
              onChange={(e) => setFontColor(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className='btn'>
        <button className="save-button" onClick={handleSaveSettings}>Save</button>
        <button className="reset-button" onClick={resetSettings}>Reset</button>
      </div>

    </div>
  );
};

export default Settings;
