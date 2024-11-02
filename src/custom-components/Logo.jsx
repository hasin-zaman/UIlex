import logo from '../assets/uilex.png';

export function Logo({ width = 70, height = 'auto' }) {
  return (
    <img
      src={logo}
      alt="UIlex"
      style={{ width: width, height: height, objectFit: 'contain' }}
    />
  );
}