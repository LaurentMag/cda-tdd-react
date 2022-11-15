import React, {MouseEventHandler} from "react";

// better to set that in a separated file
export type CardProps = {
  title: string;
  body: string;
  footer?: string;
  buttonLabel?: string;
  buttonAction?: MouseEventHandler;
};

const Card = ({title, body, footer, buttonLabel, buttonAction}: CardProps) => {
  return (
    <>
      <h1 className="card-title">{title}</h1>
      <div className="card-body">{body}</div>
      {footer && <div className="card-footer">{footer}</div>}
      {buttonLabel && <button onClick={buttonAction}>{buttonLabel}</button>}
    </>
  );
};

export default Card;
