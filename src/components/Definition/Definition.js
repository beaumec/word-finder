import React from "react";
import "./Definition.css";

const Definition = ({ meanings, word }) => {
  return (
    <div className="meaning">
      {word === "" ? (
        <span className="subTitle"> Start by typing a word in search</span>
      ) : (
        meanings.map((mean,index) => {
          return mean.meanings.map((item) => {
            return item.definitions.map((def) => (
              <div key={index} className="singleMean">
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b> Example :</b> {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>synonyms : </b> {def.synonyms.map((s) => `${s},`)}
                  </span>
                )}
              </div>
            ));
          });
        })
      )}
    </div>
  );
};

export default Definition;
