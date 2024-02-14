// *******~ Import ~******** //
// React
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
// Assets
import { Container, Row, Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useNavigate, useLocation } from "react-router-dom";
// Components
import BackBtn from "../backbtn";
// CSS
import "./wallet-tc.scss";
// Images
// Icons
// *******~ Import ~******** //

export default function WalletTC() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 767;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  // location change on responsive
  const navigateto = useNavigate();
  const location = useLocation();
  if (!location.pathname.includes("/myaccount") && width > breakpoint) {
    navigateto("/myaccount/wallet-tc");
  }
  // location change on responsive
  const [key, setKey] = useState("TC");

  return (
    <>
      <Helmet>
        <style type="text/css">{`
    footer{
      display:none;
    }
    
  `}</style>
      </Helmet>
      <section className="wallet-tc">
        <BackBtn />
        <Container>
          <Row>
            <Col xxl={12}>
              <Tabs
                id="wallet-tandc"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
                defaultActiveKey="TC"
              >
                <Tab eventKey="TC" title="Terms & Conditions">
                  <p>
                    The terms and conditions subject to which the Fusion Kitchen
                    Wallet Services are mentioned herewith. The utility of
                    Fusion Kitchen Wallet Services by the users is provided to
                    the acceptance of Terms and Conditions. By acceptance of
                    these Services, the users acknowledge that you all have read
                    and understood and agree to be bound by these Terms and
                    Conditions.
                  </p>

                  <p>
                    Fusion Kitchen is a Company incorporated with some kind of
                    payment methods also with some banking organizations for
                    transactional sources.
                  </p>

                  <p>
                    I agree that the registration and maintenance of the wallet
                    account are subject to rules and regulations introduced or
                    amended from time to time. I hereby certify that I have
                    declared my status as per the rules applicable under laws
                    and legislatures.
                  </p>

                  <p>
                    I certify that the information provided by me above as
                    applicable to me as well as in the documentary evidence
                    provided by me are, to the best of my knowledge and belief,
                    true, correct, and complete and that I have not withheld any
                    material information that may affect the
                    assessment/categorization of my wallet.
                  </p>

                  <p>
                    I give my consent to the Fusion Kitchen Wallet to display my
                    balance in the wallet under the section of My Account.
                  </p>

                  <p>
                    By agreeing with all these terms, you are supposed to accept
                    the amenities to save your card details for letting the
                    process with ease consisting of your Cardholder name, Card
                    number, and validity of the credit/debit card.
                  </p>
                  <p>
                    All the details you fed will be under the wallet for placing
                    your orders through the wallet. Meanwhile, you can fill your
                    wallet with any value as when ordering you can use the
                    wallet for deductions with the same wallet money.
                  </p>
                  <p>
                    When reaching certain limits pertained to your wallet, you
                    are in a position to recharge your wallet with the needed
                    values. Once recharged, your wallet will get updated with
                    the accurate money on the section.
                  </p>
                  <p>
                    One of these terms includes that not a withdrawal/transfer
                    of wallet money to your bank account will occur on any
                    conditions. The only choice for using that amount in your
                    wallet is by making orders through Fusion Kitchen and avail
                    the particular cost for the day.
                  </p>
                  <p>
                    In case of, any suspicious activity to be found with your
                    transactions, we commence you that we have all rights to
                    hold your wallet account, and after proper verification and
                    investigations with authority, actions will be taken.
                  </p>
                  <p>
                    If any misuse occurs in a case out of our hands or any
                    disclosure of your details leads to miscarriage, Fusion
                    Kitchen is not responsible for handling those in accordance.
                    This may happen due to your third-party access while
                    performing payment actions in a gateway.
                  </p>
                </Tab>
                <Tab eventKey="privacy" title="Privacy Policy">
                  <p>
                    We may at any point not disclose any of your personal
                    information and your card details to any of the other
                    entities or groups of companies. You with huge trust and
                    belief have disclosed all of your information on your card
                    and personal entities shall not be leaked without any
                    consent.
                  </p>
                  <p>
                    This policy in turn may lead you to feel free to share your
                    information for all of our transactions in order to proceed
                    with the requirements/ordering with us through any mode of
                    payment.
                  </p>
                  <p>
                    Fusion Kitchen recognizes the expectations of its customers
                    with regard to privacy, confidentiality, and security of
                    their personal information that resides with the Bank.
                  </p>
                  <p>
                    Keeping the personal information of customers secure and
                    using it solely for the activities related to the Bank and
                    preventing any misuse thereof is a top priority of the Bank.
                    The Bank has adopted a privacy policy aimed at protecting
                    the personal information entrusted and disclosed by the
                    customers.
                  </p>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
