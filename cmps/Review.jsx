export const Review = ({review}) =>{
    return (
        <article className="review">
            <p>Review By: <span>{review.name}</span></p>
            <p>Rating: <span>{review.rate}</span></p>
            <p>Opinion: <span>{review.txt}</span></p>
            <p>Read at: <span>{review.readDate}</span></p>
        </article>
    )
}