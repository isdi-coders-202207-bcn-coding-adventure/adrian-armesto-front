const Counter = () => {
  return (
    <section className="counter">
      <div className="counter__container">
        <div className="counter__counter">02</div>
        <span className="counter__text">days</span>
      </div>
      <div className="counter__container">
        <div className="counter__counter">20</div>
        <span className="counter__text">hours</span>
      </div>
      <div className="counter__container">
        <div className="counter__counter">34</div>
        <span className="counter__text">minutes</span>
      </div>
      <div className="counter__container">
        <div className="counter__counter">09</div>
        <span className="counter__text">seconds</span>
      </div>
    </section>
  );
};

export default Counter;
