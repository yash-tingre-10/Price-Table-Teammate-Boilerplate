import { useState, useEffect } from '@wordpress/element';
import { useBlockProps, RichText, InspectorControls, ColorPalette } from '@wordpress/block-editor';
import { Dashicon, IconButton } from '@wordpress/components';
import '../editor.scss';

const predefinedColors = [
  { name: 'Red', color: '#FF0000' },
  { name: 'Green', color: '#00FF00' },
  { name: 'Blue', color: '#0000FF' },
];

export default function Edit({ attributes, setAttributes }) {
  const [divBackgroundColor, setDivBackgroundColor] = useState(attributes.divBackgroundColor || '#FFFFFF');
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState(attributes.buttonBackgroundColor || '#0073e5');
  const { name, bio, features, customButtonColor } = attributes;
  const [newFeature, setNewFeature] = useState('');

  const addFeature = () => {
    if (newFeature) {
      setAttributes({ features: [...features, newFeature] });
      setNewFeature('');
    }
  };

  const updateFeature = (index, newValue) => {
    const updatedFeatures = [...features];
    updatedFeatures[index] = newValue;
    setAttributes({ features: updatedFeatures });
  };

  const removeFeature = (index) => {
    const updatedFeatures = features.filter((item, i) => i !== index);
    setAttributes({ features: updatedFeatures });
  };

  const blockStyles = {
    backgroundColor: divBackgroundColor,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    padding: '20px',
  };

  return (
    <div
      {...useBlockProps({
        className: 'custom-team-member-block',
        style: blockStyles,
      })}
    >
      <InspectorControls>
        <div>
          <h3>Choose Button Color</h3>
          <ColorPalette
            label=""
            colors={predefinedColors}
            value={buttonBackgroundColor}
            onChange={(color) =>
              setButtonBackgroundColor(color)
            }
          />
        </div>
        <div>
          <h3>Choose Background Color</h3>
          <ColorPalette
            label=""
            value={divBackgroundColor}
            onChange={(color) => setDivBackgroundColor(color)}
          />
        </div>
      </InspectorControls>

      <div>
        <RichText
          placeholder={'Member Name'}
          tagName="h2"
          onChange={(newName) => setAttributes({ name: newName })}
          value={name}
          allowedFormats={[]}
          className="member-name"
        />

        <RichText
          placeholder={'Member Bio'}
          tagName="h1"
          onChange={(newBio) => setAttributes({ bio: newBio })}
          value={bio}
          allowedFormats={[]}
          className="member-bio"
        />
      </div>

      <ul className="feature-list">
        {features.map((item, index) => (
          <li key={index} className="feature-item">
            <RichText
              placeholder="Enter feature"
              onChange={(value) => updateFeature(index, value)}
              value={item}
              allowedFormats={[]}
            />
            <IconButton
              icon="dismiss"
              label="Delete"
              onClick={() => removeFeature(index)}
              className="delete-button"
              style={{ color: '#000000' }}
            />
          </li>
        ))}
      </ul>

      <div className="add-feature">
        <input
          type="text"
          placeholder="New Feature"
          value={newFeature}
          onChange={(e) => setNewFeature(e.target.value)}
        />
        <Dashicon
          icon="plus-alt"
          size={20}
          onClick={addFeature}
          style={{ cursor: 'pointer', marginLeft: '5px' }}
        />
      </div>

      <div className="get-started-button">
        <button
          className="get-started-button"
          style={{ backgroundColor: customButtonColor ? customButtonColor : buttonBackgroundColor }}
          onClick={() => alert('Get Started button clicked!')}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
