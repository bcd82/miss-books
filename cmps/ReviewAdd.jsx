export class ReviewAdd extends React.Component {
  state = {
    review: {
      name: "",
      rate: null,
      txt: "",
      readDate: "",
    },
  };
  render() {
    return (
      <section className="reviews-box">
        review box goes here
        <form onSubmit="">
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" onChange="" />
          <label htmlFor="name">Full Name</label>
          <select onChange="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label htmlFor="date">Read at:</label>
          <input type="date" name="date" id="date" />
          <label htmlFor="txt">What's your opinion ?</label>
          <textarea name="txt" id="txt" cols="30" rows="10"></textarea>
        </form>
      </section>
    );
  }
}
