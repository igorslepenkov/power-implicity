import "./styles.scss";

const Slider = () => {
  return (
    <section className="slider">
      <h1 className="slider__title">The Power Of Simplicity</h1>
      <p className="slider__description">
        Instead of spending time searching for the right app, our AI will bring
        the right app to you.
      </p>
      <button className="slider__learn-btn" type="button">
        Learn
      </button>
      <ul className="slider__dots">
        <li className="slider__dot">
          <input
            id="radio1"
            className="dot__input"
            type="radio"
            name="slider-radio"
          />
          <label htmlFor="radio1" className="dot__label"></label>
        </li>
        <li className="slider__dot">
          <input
            id="radio2"
            className="dot__input"
            type="radio"
            name="slider-radio"
          />
          <label htmlFor="radio2" className="dot__label"></label>
        </li>
        <li className="slider__dot">
          <input
            defaultChecked={true}
            id="radio3"
            className="dot__input"
            type="radio"
            name="slider-radio"
          />
          <label htmlFor="radio3" className="dot__label"></label>
        </li>
        <li className="slider__dot">
          <input
            id="radio4"
            className="dot__input"
            type="radio"
            name="slider-radio"
          />
          <label htmlFor="radio4" className="dot__label"></label>
        </li>
        <li className="slider__dot">
          <input
            id="radio5"
            className="dot__input"
            type="radio"
            name="slider-radio"
          />
          <label htmlFor="radio5" className="dot__label"></label>
        </li>
      </ul>
    </section>
  );
};

export { Slider };
