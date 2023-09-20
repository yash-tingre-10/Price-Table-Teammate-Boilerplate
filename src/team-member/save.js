import { useBlockProps, RichText } from '@wordpress/block-editor';
import '../style.scss';

export default function Save({ attributes }) {
  const { name, bio, features, buttonColor } = attributes;

  return (
    <div {...useBlockProps.save()}>
      <RichText.Content tagName="h2" value={name} />
      <RichText.Content tagName="h1" value={bio} />

      <ul >
        {features.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button style={{ backgroundColor: buttonColor }}>Get Started</button>
    </div>
  );
}
