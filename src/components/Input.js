import '../Styles/Components/Small.scss';

export const Input = ({ value, onChange }) => {
  return (
    <>
      <input
        type="text"
        name="value"
        placeholder="Choose your country"
        className="input"
        value={value}
        onChange={onChange}
      />
    </>
  );
};
