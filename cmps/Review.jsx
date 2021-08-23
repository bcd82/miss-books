export const Review = ({review}) =>{

    console.log(review)
    return (
        <article className="review">
            <p>Reviewed By: <span>{review.name}</span></p>
            <p>Read at: <span>{review.readDate}</span></p>
            <p>Rating: <span>{review.rate}</span></p>
            <p>Opinion: <span>{review.txt}</span></p>
        </article>
    )
}