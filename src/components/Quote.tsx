import "../css/Quote.css"

export interface I_Quote {
  _id : string;
  content : string;
  author : string;
}

export const Quote: React.FC<I_Quote> = ({ content, author }) => {
  return (
    <div className="quote-wrapper">
      <div className="quote">
        <h2 className="quote__content">
          <span>{content}</span>
        </h2>
        <h4 className="quote__author">&mdash; {author}<br/></h4>
      </div>
    </div>
  )
}