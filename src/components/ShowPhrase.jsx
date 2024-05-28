import React from "react";

const ShowPhrase = ({ randomPhrase }) => {
  console.log(randomPhrase);
  const { phrase, author } = randomPhrase;

  return (
    <>
      <section className="app_container">
        <div className="container-text">
          <h2 className="count-text">
            <b>{phrase}</b>
          </h2>
        </div>
      </section>
    </>
  );
};

export default ShowPhrase;
