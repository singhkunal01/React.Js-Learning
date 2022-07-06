import React from "react";
// import { Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

export default function About(props) {
  return (
    <>
      <strong
        className={`mx-2 text-bg-${
          props.mode === "light" ? "dark" : "light"
        } p-2 my-4`}
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        {props.title}
      </strong>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Doloremque, minus dignissimos! Mollitia quidem fugit iste explicabo.
        Quos distinctio voluptatibus, maiores earum, illum libero pariatur a
        dolorem expedita repellat tempore fugit tenetur iure quia, eos provident
        eius facere suscipit voluptate reiciendis velit alias assumenda quaerat
        hic. Qui velit cupiditate et repudiandae vel earum maxime, id aliquam,
        eaque sint tempora consequuntur nam corrupti eos? Culpa non commodi et
        molestiae repudiandae provident maiores voluptatem dolores ullam
        veritatis distinctio tenetur, consequatur nihil error excepturi sapiente
        nemo in quia placeat magnam totam voluptate ratione molestias? Pariatur
        quo obcaecati officia aliquid commodi autem magni reiciendis ipsa!{" "}
              <br />
      </div>
          <Link to="/">
          <button className="btn btn-primary my-4">Back To Homepage</button>
          </Link>
    </>
  );
}
