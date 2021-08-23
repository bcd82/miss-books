import { bookService } from "../services/book.service.js";

export class ReviewAdd extends React.Component {
  state = {
    review: {
      name: "",
      rate: '',
      txt: "",
      readDate: "",
    },
  };

  handleChange = ({target}) => {
    const field = target.name
    const value = target.type === 'number' ? +target.value : target.value
    this.setState(prevState => ({ review: { ...prevState.review, [field]: value } }))

  };

//   onAddReview = (ev) =>{
//       ev.preventDefault()
//       bookService.addReview(this.props.book.id,this.state.review)
//   }

  render() {
    const { name, rate, txt, readDate } = this.state.review;
    const {reviews} = this.props.book;
    return (
      <section className="reviews-box">
        <form onSubmit={(ev)=> {this.props.onSubmit(ev,this.state.review)}}>
          <label htmlFor="name">Full Name</label>
          <input id="name" name="name" type="text" onChange={this.handleChange} value={name} />
          <div className="selection">
            <label htmlFor="name">Rate</label>
            <select onChange="" value={rate} onChange={this.handleChange} name="rate" >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <label htmlFor="readDate">Read at:</label>
          <input type="date" name="readDate" id="readDate" value={readDate} onChange={this.handleChange} />
          <label htmlFor="txt">What's your opinion ?</label>
          <textarea
            name="txt"
            id="txt"
            cols="30"
            rows="5"
            value={txt}
            onChange={this.handleChange}
          ></textarea>
          <button>Submit</button>
        </form>

      </section>
    );
  }
}
