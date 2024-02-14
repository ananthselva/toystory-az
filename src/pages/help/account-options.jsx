import Accordion from "react-bootstrap/Accordion";
import "./help.scss";
import FooterHelp from "./help-footer";
import HelpHeader from "./help-header";
import data from "./search-data.json";
import { useState } from "react";
import HelpError from "./help-error";

const AccountOptions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [matchedTopics, setMatchedTopics] = useState([]);

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    // Find all matching subtopics
    const matchingSubtopics = data[1].AccountPaymentOptions.filter((subtopic) =>
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
                      : data[1].AccountPaymentOptions
                    ).map((guid, index) => (
                      <Accordion.Item eventKey={index} key={index}>
                        <Accordion.Header>{guid.title}</Accordion.Header>
                        <Accordion.Body>
                          <>
                            <ul>
                              {guid.content &&
                                guid.content.map((desc, index) => (
                                  <>
                                    <li key={index}>{desc}</li>
                                  </>
                                ))}
                            </ul>
                            {guid.list && (
                              <>
                                {guid.list.listtitle && (
                                  <h6>{guid.list.listtitle}</h6>
                                )}
                                {guid.list.listitem && (
                                  <>
                                    <ul>
                                      {guid.list.listitem.map((desc, index) => (
                                        <>
                                          <li key={index}>{desc}</li>
                                        </>
                                      ))}
                                    </ul>
                                  </>
                                )}
                              </>
                            )}
                            {guid.sublist && (
                              <>
                                {guid.sublist.sublistitem && (
                                  <ul>
                                    <li>{guid.sublist.sublistitem}</li>
                                  </ul>
                                )}
                                {guid.sublist.sublistitem && (
                                  <>
                                    <ul>
                                      {guid.sublist.sublistitem.map(
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

export default AccountOptions;
