export const LongText = ({text,isLongTextShown}) => {
    if (text.length > 100)console.log('long text')
    else (console.log('short text'))
    return (
        <div className="text-box">
            {text}
        </div>
    )
};
