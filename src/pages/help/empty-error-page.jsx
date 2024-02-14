import Accordion from "react-bootstrap/Accordion";
import "./help.scss";
import FooterHelp from "./help-footer";

const EmptyPage = ({ matchedTopics }) => {
  return (
    <>
      <section className="accordian_order">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <Accordion>
                <div className="bg_gray">
                  {matchedTopics.map((listdata, listIndex) => (
                    <>
                      <>
                        <>
                          <Accordion.Item
                            eventKey={`offer_${listIndex}`}
                            key={listIndex}
                          >
                            <Accordion.Header>
                              <h5> {listdata.title && listdata.title}</h5>
                            </Accordion.Header>
                            <Accordion.Body>
                              <>
                                <div className="content">
                                  <ul>
                                    {listdata.content &&
                                      listdata.content.map((desc, index) => (
                                        <>
                                          <li key={index}>{desc}</li>
                                        </>
                                      ))}
                                  </ul>

                                  {listdata.list && (
                                    <>
                                      {listdata.list.listtitle && (
                                        <h5>{listdata.list.listtitle}</h5>
                                      )}
                                      {listdata.list.listitem && (
                                        <>
                                          <ul>
                                            {listdata.list.listitem.map(
                                              (data, index) => (
                                                <>
                                                  <li key={index}>{data}</li>
                                                </>
                                              )
                                            )}
                                          </ul>
                                        </>
                                      )}
                                    </>
                                  )}
                                  {listdata.sublist && (
                                    <>
                                      {listdata.sublist.sublisttitle && (
                                        <h5>{listdata.sublist.sublisttitle}</h5>
                                      )}
                                      {listdata.sublist.sublistitem && (
                                        <>
                                          <ul>
                                            {listdata.sublist.sublistitem.map(
                                              (data, index) => (
                                                <>
                                                  <li key={index}>{data}</li>
                                                </>
                                              )
                                            )}
                                          </ul>
                                        </>
                                      )}
                                    </>
                                  )}
                                </div>
                              </>
                            </Accordion.Body>
                          </Accordion.Item>
                        </>
                      </>
                    </>
                  ))}
                </div>

                <FooterHelp />
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmptyPage;
