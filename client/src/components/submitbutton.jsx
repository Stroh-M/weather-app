export default function Submitbutton(props) {
  return (
    <>
      <button className={props.className} type="submit">{props.text}</button>
    </>
  );
}
