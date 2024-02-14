import Accordion from "react-bootstrap/Accordion";
import "./help.scss";
import FooterHelp from "./help-footer";

import data from "./search-data.json";
import { useState } from "react";
import HelpHeader from "./help-header";
import HelpError from "./help-error";

const WithOrder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [matchedTopics, setMatchedTopics] = useState([]);

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    // Find all matching subtopics
    const matchingSubtopics = data[3].HelpOrder.filter((subtopic) =>
      subtopic.title.toLowerCase().includes(newSearchTerm.toLowerCase())
    );

    setMatchedTopics(matchingSubtopics);
  };
  return (
    <>
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
                      : data[3].HelpOrder
                    ).map((help, index) => (
                      <Accordion.Item eventKey={index} key={index}>
                        <Accordion.Header>{help.title}</Accordion.Header>
                        <Accordion.Body>
                          <>
                            <ul>
                              {help.content &&
                                help.content.map((desc, index) => (
                                  <>
                                    <li key={index}>{desc}</li>
                                  </>
                                ))}
                            </ul>
                            {help.list && (
                              <>
                                {help.list.listtitle && (
                                  <h6>{help.list.listtitle}</h6>
                                )}
                                {help.list.listitem && (
                                  <>
                                    <ul>
                                      {help.list.listitem.map((desc, index) => (
                                        <>
                                          <li key={index}>{desc}</li>
                                        </>
                                      ))}
                                    </ul>
                                  </>
                                )}
                              </>
                            )}
                            {help.sublist && (
                              <>
                                {help.sublist.sublistitem && (
                                  <ul>
                                    <li>{help.sublist.sublistitem}</li>
                                  </ul>
                                )}
                                {help.sublist.sublistitem && (
                                  <>
                                    <ul>
                                      {help.sublist.sublistitem.map(
                                        (desc, index) => (
                                          <>
                                            <li key={index}>{desc}</li>
                                          </>
                                        )
                                      )}
                                    </ul>
                                  </>
                                )}
                              </>
                            )}
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
    </>
  );
};

export default WithOrder;
