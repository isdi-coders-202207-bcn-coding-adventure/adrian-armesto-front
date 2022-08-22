const Counter = () => {
  return (
    <section className="counter">
      <div className="counter__container">
        <div className="counter__counter">
          <span>02</span>
        </div>
        <span className="counter__title">days</span>
      </div>
      <div className="counter__container">
        <div className="counter__counter">
          <span>20</span>
        </div>
        <span className="counter__title">hours</span>
      </div>
      <div className="counter__container">
        <div className="counter__counter">
          <span>34</span>
        </div>
        <span className="counter__title">minutes</span>
      </div>
      <div className="counter__container">
        <div className="counter__counter">
          <span>09</span>
        </div>
        <span className="counter__title">seconds</span>
      </div>
    </section>
  );
};

export default Counter;
