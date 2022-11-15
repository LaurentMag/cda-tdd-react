import {fireEvent, render, screen} from "@testing-library/react";
import Card, {CardProps} from "./Card";

// on fait que des render de la card du coup, les document.get.... ne vont forcement que se dérouler dans la card

describe("Card", () => {
  const cardProps: CardProps = {
    title: "maCarte",
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Omnis, dolore, aut, molestias officiis voluptas tenetur assumenda consequatur possimus distinctio sit id? 
    Ut vel expedita harum saepe laboriosam quasi obcaecati, fugiat iste, aut totam officiis eum. 
    Magnam doloribus dolorem fugit expedita.`,
    footer: `footer`,
    buttonLabel: `buttonLabel`,
  };

  it("doit fournir un rend", () => {
    render(
      <Card
        title={cardProps.title}
        body={cardProps.body}
      />
    );
    const card = screen.getByText("maCarte");
    expect(card).toBeInTheDocument();
  });

  it("doit afficher le titre dans une section avec une class card-title", () => {
    render(
      <Card
        title={cardProps.title}
        body={cardProps.body}
      />
    );
    const element = document.getElementsByClassName("card-title")[0];
    expect(element).toBeInTheDocument();
  });

  it("doit afficher le body dans une section avec la class card-body", () => {
    render(
      <Card
        title={cardProps.title}
        body={cardProps.body}
      />
    );
    const element = document.getElementsByClassName("card-body")[0];
    expect(element.textContent).toBe(cardProps.body);
  });

  it("doit afficher le footer dans une section avec la class card-footer", () => {
    render(
      <Card
        title={cardProps.title}
        body={cardProps.body}
        footer={cardProps.footer}
      />
    );
    const element = document.getElementsByClassName("card-footer")[0];
    expect(element.textContent).toBe(cardProps.footer);
  });

  it("doit pas afficher le footer quand je n'ai pas de props footer", () => {
    render(
      <Card
        title={cardProps.title}
        body={cardProps.body}
      />
    );
    const element = document.getElementsByClassName("card-footer")[0];
    expect(element).toBe(undefined);
  });

  it("Doit avoir un boutno avec un label quand je mets la props", () => {
    render(
      <Card
        title={cardProps.title}
        body={cardProps.body}
        buttonLabel={cardProps.buttonLabel}
      />
    );
    const element = screen.getByText(cardProps.buttonLabel as string);
    expect(element).toBeInTheDocument();
  });

  it("Ne doit pas afficher le bouton quand je n'ai pas de labels", () => {
    render(
      <Card
        title={cardProps.title}
        body={cardProps.body}
      />
    );
    const element = document.getElementsByTagName("button")[0];
    expect(element).toBeUndefined();
  });

  it("doit appeler l'action du bouton quond on click dessus", () => {
    // functin espion
    const handleClick = jest.fn();

    render(
      <Card
        title={cardProps.title}
        body={cardProps.body}
        buttonLabel={cardProps.buttonLabel}
        buttonAction={handleClick}
      />
    );
    const buttonCard = document.querySelector("button");
    // clique sur le bouton
    fireEvent.click(buttonCard!);

    // verifie que la function déclenché par le click ets appelé.
    expect(handleClick).toHaveBeenCalled();
  });
});
