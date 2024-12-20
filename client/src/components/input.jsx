export default function Input(props) {
  return (
    <input
      onChange={(e) => {
        props.change(e);
      }}
      type={props.type}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
}
