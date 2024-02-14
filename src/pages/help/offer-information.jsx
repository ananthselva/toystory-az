import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "./help.scss";
import FooterHelp from "./help-footer";

import data from "./search-data.json";
import HelpHeader from "./help-header";
import HelpError from "./help-error";

const OfferInfo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [matchedTopics, setMatchedTopics] = useState([]);

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    const matchingSubtopics = data[0].OfferInformation.filter((subtopic) =>
      subtopic.title.toLowerCase().includes(newSearchTerm.toLowerCase())
    );

    setMatchedTopics(matchingSubtopics);
  };
  return (
    <>
      <div className="offer_full">
        <HelpHeader title="Help with an order">
          <input
            type="text"
            placeholder="Start typing your search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </HelpHeader>
        {searchTerm && matchedTopics.length === 0 ? (
          <>
            <HelpError />
          </>
        ) : (
          <>
            <section className="accordian_order">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <Accordion>
                      {(searchTerm && matchedTopics.length > 0
                        ? matchedTopics
                        : data[0].OfferInformation
                      ).map((offer, index) => (
                        <Accordion.Item eventKey={index} key={index}>
                          <Accordion.Header>{offer.title}</Accordion.Header>
                          <Accordion.Body>
                            <>
                              <ul>
                                {offer.content &&
                                  offer.content.map((desc, index) => (
                                    <>
                                      <li key={index}>{desc}</li>
                                    </>
                                  ))}
                              </ul>
                            </>
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                      <FooterHelp />
                    </Accordion>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </>
  );
};

export default OfferInfo;
