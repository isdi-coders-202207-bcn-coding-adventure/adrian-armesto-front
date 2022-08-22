const Counter = () => {
  return (
    <section className="counter">
      <div className="counter__container">
        <div className="counter__counter">02</div>
        <h2 className="counter__title">days</h2>
      </div>
      <div className="counter__container">
        <div className="counter__counter">20</div>
        <h2 className="counter__title">hours</h2>
      </div>
      <div className="counter__container">
        <div className="counter__counter">34</div>
        <h2 className="counter__title">minutes</h2>
      </div>
      <div className="counter__container">
        <div className="counter__counter">09</div>
        <h2 className="counter__title">seconds</h2>
      </div>
    </section>
  );
};

export default Counter;
