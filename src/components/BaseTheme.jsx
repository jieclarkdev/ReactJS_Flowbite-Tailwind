
export default function BaseTheme(props){
    return (
      <div
        className={
          props.center
            ? "flex flex-col h-screen justify-center place-content-center"
            : "flex flex-col h-screen"
        }
      >
        <div
          className={
            props.center ? "flex place-content-center" : "h-full flex flex-row"
          }
        >
          {props.children}
        </div>
      </div>
    );
}