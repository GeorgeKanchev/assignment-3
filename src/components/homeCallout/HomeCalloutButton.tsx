export const HomeCalloutButton = () => {
  const onClick = () => {
    console.log("get started button click");
  };
  return (
    <button className="home-callout__button" onClick={onClick}>
      get started
    </button>
  );
};
