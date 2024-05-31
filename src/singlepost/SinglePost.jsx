import React from "react";
import "./singlepost.css";
import post from "./pexels-lisa-fotios-1083822.jpg";

function SinglePost() {
  return (
    <div className="singlepost">
      <div className="singlepostWrapper">
        <img src={post} alt="" className="singlepostImg" />
        <h1 className="singlepostTitle">
          Lorem ipsum dolor sit amet consectetur.
          <div className="singlepostEdit">
            <i className="singlepostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlepostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlepostInfo">
          <span className="singlepostAuthor">
            Author : <b>Kavya</b>
          </span>
          <span className="singlepostDate">Date : 1hr ago</span>
        </div>
        <p className="singlepostDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem,
          quasi quod labore cum nobis eos beatae impedit earum unde
          necessitatibus eius rerum est veniam sint itaque dolore inventore
          nesciunt. Repudiandae accusantium nobis voluptatem aperiam deleniti
          neque consequatur. Delectus possimus sequi itaque, non officiis a
          veniam suscipit animi nemo facere perferendis, quibusdam provident
          praesentium dolorum ad quis et eos maxime qui eius voluptatem odio
          repellat tempore illo. Fuga, aliquid dicta alias hic enim eos facere
          vel veniam sit suscipit officia maxime corrupti quisquam harum non
          vitae nam eveniet aspernatur molestiae aliquam sint ducimus
          consectetur repellendus! Neque ratione facilis perspiciatis? Eius
          autem quidem officia modi cumque deleniti dolorum rerum, illo quam
          suscipit, minima similique accusamus expedita. Possimus repellendus
          rem consequuntur voluptatibus numquam? Animi aliquam eos amet
          similique, illum iusto dolore eveniet consequatur quaerat esse
          asperiores, explicabo nulla accusamus voluptates sequi rem incidunt
          molestiae corrupti necessitatibus enim tempore minus architecto. Dicta
          alias necessitatibus non, voluptatem corrupti debitis delectus
          voluptate quas perferendis quaerat eligendi iste itaque libero
          dignissimos, perspiciatis est tempore. Nesciunt quae perferendis vel
          necessitatibus, quod fugit, maiores earum quia quidem sapiente
          molestiae eos quam nemo autem deserunt ipsum commodi harum et
          accusamus ea vero. Veniam suscipit, odit inventore repellendus sunt
          sequi rerum?
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
