import "./policy.scss";
import {lazy,useEffect} from 'react';
import { OrderFlow } from '../../App';
// *******~ Import ~******** //
// React
import { Link as ScrollLink } from "react-scroll";
import Accordion from "react-bootstrap/Accordion";
// Assets
// Components
// CSS
// Images
// Icons
// *******~ Import ~******** //
const Policyprivacy = () => {
  const{setFooterLoading,footerLoading}=OrderFlow();
  useEffect(()=>{
   console.log(footerLoading);
   setFooterLoading(true);
  },[]);
  return (
    <>
      <section className="privacy_policy_full">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3">
              <div className="heading_total">
                <div className="privacy_heading">
                  {[
                    { title: "Introduction" },
                    { title: "GDPR Principles" },
                    { title: "The Rights of Data Subjects" },
                    { title: "How we deal with data" },
                    { title: "Data Security – Disposal" },
                    { title: "Organisational Measures" },
                    { title: "Data Retention" },
                    { title: "Country Outside the EEA" },
                    { title: "Changes to Our Privacy Policy" },
                    { title: "GDPR" },
                    { title: "The Principles of the GDPR" },
                    { title: "Contact us" },
                  ].map((data, index) => (
                    <ScrollLink
                      activeClass="active"
                      to={`data-${index + 1}`}
                      spy={true}
                      smooth={true}
                      duration={0}
                      delay={0}
                      offset={-80}
                    >
                      <h6 className="privacy_name">
                        <span className="number">{index + 1}</span>
                        {data.title}
                      </h6>
                    </ScrollLink>
                  ))}
                </div>
              </div>
            </div>

            {/* // right side container ends // */}

            <div className="col-xl-9 col-lg-9 col-md-9">
              <div className="content_total">
                <div className="line">
                  <div className="content_heading">Privacy Policy and GDPR</div>
                  <div className="sample_line"></div>
                </div>
                <div className="sub">
                  Fusion Kitchen - Privacy Policy and GDPR
                </div>
                <div className="intro_full" name="data-1">
                  <div className="cnt_name">Introduction</div>
                  <p>
                    This privacy policy sets out how Fusion Kitchen uses and
                    protects any information that you give, when you use this
                    website.
                  </p>
                  <p>
                    Fusion Kitchen is committed to ensuring that your privacy is
                    protected. We ask you to provide certain information by
                    which you can be identified when using this website, and
                    then you can be assured that it will only be used in
                    accordance with this Privacy Statement describe below (25th
                    May 2018 General Data Protection Regulation).
                  </p>
                  <p>
                    This Policy sets out the obligations of Fusions Kitchen LTD,
                    a company registered in England and Wales under number
                    13460168, whose registered office is at IF28, Threefield
                    House, Threefiled Lane, Southampton, SO14 3LP, UK (“the
                    Company/we/us/our”) regarding data protection and the rights
                    of clients, prospective clients, clients’ customers,
                    business contacts, employees and subcontractors (“data
                    subjects”) in respect of their personal data under the EU
                    General Data Protection Regulation.
                  </p>
                  <p>
                    The GDPR defines “personal data” as any information relating
                    to an identified or identifiable natural person (a “data
                    subject”); an identifiable natural person is one who can be
                    identified, directly or indirectly, in particular by
                    reference to an identifier such as a name, an identification
                    number, location data, online identifier, or to one or more
                    factors specific to the physical, physiological, genetic,
                    mental, economic, cultural, or social identity of that
                    natural person.
                  </p>
                  <p>
                    This Policy sets our obligations regarding the collection,
                    processing, transfer, storage, and disposal of personal
                    data. The procedures and principles set out in this Policy
                    must be followed at all times by the Company and our
                    employees, agents, sub-contractors, or other parties working
                    on our behalf.
                  </p>
                  <p>
                    We are committed not only to the letter of the law, but also
                    to the spirit of the law and we place a high importance on
                    the correct, lawful, and fair handling of all personal data,
                    respecting the legal rights, privacy, and trust of all
                    individuals with whom we deal.
                  </p>
                </div>
                {/* // introduction over //   */}
                <div className="principles" name="data-2">
                  <div className="cnt_name">GDPR Principles</div>
                  <p>
                    1.Compliance and Reliability comes first when it comes to
                    your confidential information
                  </p>
                  <p>2.GDPR & ICO - Think Privacy!</p>
                  <p>
                    3.Relax in knowing that your confidential information is
                    kept Safe and Secure
                  </p>
                  <p>4.Our Policy - Lawfulness, Fairness, and Transparency</p>
                  <p>
                    5.100% transparent processing, (we will always be clear as
                    to why data is being collected and what it will be used for)
                  </p>
                  <p>
                    6.Accountability and Liability - taking every step to ensure
                    that you is protected
                  </p>
                  <p>
                    7.Two Factor Authentication - taking the extra mile to
                    ensure your data stays secure
                  </p>
                  <p>
                    8.Consent matters - explicit consent must be provided before
                    any information is shared
                  </p>
                  <p>
                    9.Data Protection Officer in place to make sure your
                    information stays as your information
                  </p>
                </div>

                {/* // priciples over //   */}

                <div className="data_subject" name="data-3">
                  <div className="cnt_name">The Rights of Data Subjects</div>
                  <p>
                    The GDPR sets out the following rights applicable to data
                    subjects (please refer to the parts of this policy indicated
                    for further details)
                  </p>
                  <p>I. The right to be informed (clause 12)</p>
                  <p>II. The right of access (clause 13)</p>
                  <p>III. The right to rectification (clause 14)</p>
                  <p>
                    IV. The right to erasure (also known as the ‘right to be
                    forgotten’) (clause 15)
                  </p>
                  <p>V. The right to restrict processing (clause 16)</p>
                  <p>VI. The right to data portability (clause 17)</p>
                  <p>VII. The right to object (clause 18)</p>
                  <p>
                    VIII. Rights with respect to automated decision-making and
                    profiling (clause 19 and 20)
                  </p>
                </div>

                {/* / /  part over // */}

                <div className="deal_with" name="data-4">
                  <div className="cnt_name">How we deal with data</div>
                  <div className="sub">Information we collect</div>
                  <p>
                    In certain circumstances, we may be required to process
                    clients’ customer data directly. We collect and process the
                    following personal data in order for us to provide our
                    services
                  </p>
                  <p>I. Name</p>
                  <p>
                    II. Contact information including email address, postal
                    address and telephone number(s)
                  </p>
                  <p>III. Delivery address</p>
                  <div className="sub">
                    Information We Collect Automatically
                  </div>
                  <p>
                    We may receive and store certain information about you and
                    your device(s) automatically when you use our Site and
                    Services
                  </p>
                  <p>
                    1. Information related to the device you use to ingress our
                    Services.
                  </p>
                  <p>
                    2. The type of web browser and operating system you use to
                    access our Services.
                  </p>
                  <p>3. The domain name of your Internet service provider.</p>
                  <p>
                    4. The Fusion Kitchen pages you visit, content you view,
                    features you use and the date and time of your visits.
                  </p>
                  <p>
                    5. Your search terms, the website you visited before you
                    came to our Services, and other clickstream data.
                  </p>
                  <p>
                    We will ensure that the following measures are taken with
                    respect to the storage of personal data :
                  </p>
                  <p>
                    I. All electronic copies of personal data will be stored
                    securely using passwords and data encryption.
                  </p>
                  <p>
                    II. All hardcopies of personal data, along with any
                    electronic copies stored on physical, removable media will
                    be stored securely in a locked box, drawer, cabinet, or
                    similar.
                  </p>
                  <p>
                    III. All personal data stored electronically will be backed
                    up regularly (normally daily) with back-up stored offsite.
                    All back-ups should be encrypted.
                  </p>
                  <p>
                    IV. No personal data will be stored on any mobile device
                    (including, but not limited to, laptops, tablets, and
                    smartphones), whether such device belongs to us or otherwise
                    without the formal written approval of the Data Protection
                    Officer and, in the event of such approval, strictly in
                    accordance with all instructions and limitations described
                    at the time the approval is given, and for no longer than is
                    absolutely necessary.
                  </p>
                  <p>
                    V. No personal data will be transferred to any device
                    personally belonging to an employee and personal data may
                    only be transferred to devices belonging to agents,
                    contractors, or other parties working on our behalf where
                    the party in question has agreed to comply fully with the
                    letter and spirit of this Policy and of the GDPR (which may
                    include demonstrating to us that all suitable technical and
                    organisational measures have been taken).
                  </p>
                </div>

                {/* // part over // */}

                <div className="disposal" name="data-5">
                  <div className="cnt_name">Data Security – Disposal</div>
                  <p>
                    When any personal data is to be erased or otherwise disposed
                    of for any reason (including where copies have been made and
                    are no longer needed), it should be securely deleted and
                    disposed of.
                  </p>
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
                    In case of any misleads from your stand to have your card
                    details to get disclosed to any other entities, Fusion
                    Kitchen is not viably responsible in any terms and
                    disclosures occurring further.
                  </p>
                  <p>
                    For any request for data deletion, Please send us a request
                    email at :
                    <span className="green">support@fusionkitchen.co.uk</span>
                  </p>
                </div>

                {/* // part over // */}

                <div className="measures" name="data-6">
                  <div className="cnt_name">Organisational Measures</div>
                  <p>
                    We will ensure that the following measures are taken with
                    respect to the collection, holding, and processing of
                    personal data:
                  </p>
                  <p>
                    I. All employees, agents, contractors, or other parties
                    working on our behalf and handling personal data will be.
                  </p>
                  <p>
                    1. made fully aware of both their individual
                    responsibilities and the Company’s responsibilities under
                    the GDPR and under this Policy, and shall be provided with a
                    copy of this Policy.
                  </p>
                  <p>2. appropriately supervised and trained to do so.</p>
                  <p>
                    3. required and encouraged to exercise care, caution, and
                    discretion when discussing work-related matters that relate
                    to personal data, whether in the workplace or otherwise.
                  </p>
                  <p>
                    4. bound to do so in accordance with the principles of the
                    GDPR and this Policy by contract.
                  </p>
                  <p>
                    II. Only employees, agents, sub-contractors, or other
                    parties working on our behalf that need access to, and use
                    of, personal data in order to carry out their assigned
                    duties correctly will have access to the personal data held
                    by us.
                  </p>
                  <p>
                    III. Methods of collecting, holding, and processing personal
                    data will be regularly evaluated and reviewed.
                  </p>
                  <p>
                    IV. The performance of those employees, agents, contractors,
                    or other parties working on our behalf handling personal
                    data will be regularly evaluated and reviewed.
                  </p>
                  <p>
                    V. All agents, contractors, or other parties working on our
                    behalf handling personal data must ensure that any and all
                    of their employees who are involved in the processing of
                    personal data are held to the same conditions as those
                    relevant employees of ours arising out of this Policy and
                    the GDPR.
                  </p>
                  <p>
                    VI. Where any agent, contractor or other party working on
                    our behalf handling personal data fails in their obligations
                    under this Policy, that party shall indemnify and hold us
                    harmless against any costs, liability, damages, loss, claims
                    or proceedings which may arise out of that failure.
                  </p>
                </div>

                {/* // part over // */}
                <div className="rettension" name="data-7">
                  <div className="cnt_name">Data Retention</div>
                  <p>
                    We will retain your personal information as long as your
                    account is active with Fusion Kitchen or as an action of
                    services for you and to maintain a record of your
                    transactions for financial reporting. We will retain your
                    personal information as necessary to follow with our legal
                    commitment, resolve disputes, and implement our agreements
                  </p>
                </div>

                {/* // part over // */}
                <div className="eea" name="data-8">
                  <div className="cnt_name">
                    Transferring Personal Data to a Country Outside the EEA
                  </div>
                  <p>
                    I. We may from time to time transfer (‘transfer’ includes
                    making available remotely) personal data to countries
                    outside of the EEA
                  </p>
                  <p>
                    II. The transfer of personal data to a country outside of
                    the EEA will take place only if one or more of the following
                    applies
                  </p>
                  <p>
                    1. The transfer is to a country, territory, or one or more
                    specific sectors in that country (or an international
                    organisation), that the European Commission has determined
                    ensures an adequate level of protection for personal data.
                  </p>
                  <p>
                    2. The transfer is to a country (or international
                    organisation) which provides appropriate safeguards in the
                    form of a legally binding agreement between public
                    authorities or bodies; binding corporate rules; standard
                    data protection clauses adopted by the European Commission;
                    compliance with an approved code of conduct approved by the
                    supervisory authority (e.g. the Information Commissioner’s
                    Office); certification under an approved certification
                    mechanism (as provided for in the GDPR); contractual clauses
                    agreed and authorised by the competent supervisory
                    authority; or provisions inserted into administrative
                    arrangements between public authorities or bodies authorised
                    by the competent supervisory authority.
                  </p>
                  <p>
                    3. The transfer is made with the informed consent of the
                    relevant data subject(s).
                  </p>
                  <p>
                    4. The transfer is necessary for the performance of a
                    contract between us and the data subject (or for
                    pre-contractual steps taken at the request of the data
                    subject).
                  </p>
                  <p>
                    5. The transfer is necessary for important public interest
                    reasons.
                  </p>
                  <p>
                    6. The transfer is necessary for the conduct of legal
                    claims.
                  </p>
                  <p>
                    7. The transfer is necessary to protect the vital interests
                    of the data subject or other individuals where the data
                    subject is physically or legally unable to give their
                    consent.
                  </p>
                  <p>
                    8. The transfer is made from a register that, under UK or EU
                    law, is intended to provide information to the public and
                    which is open for access by the public in general or
                    otherwise to those who are able to show a legitimate
                    interest in accessing the register.
                  </p>
                </div>

                {/* // part over // */}
                <div className="changes" name="data-9">
                  <div className="cnt_name">Changes to Our Privacy Policy</div>
                  <p>
                    Privacy and policy may upgrade from time to time in a
                    reaction of law changes, technical or business developments
                    changes. We hold the right to update or amend this Privacy
                    Statement at any time without foregoing notice. You agree to
                    be bound by the revised Privacy Policy. If you object to any
                    changes you must terminate using our site. We recommend that
                    you check this page regularly to keep up-to-date.
                  </p>
                </div>

                {/* // part over // */}

                <div className="gdpr" name="data-10">
                  <div className="cnt_name">GDPR</div>
                  <p>
                    The GDPR defines “personal data” as any information relating
                    to an identified or identifiable natural person (a “data
                    subject”); an identifiable natural person is one who can be
                    identified, directly or indirectly, in particular by
                    reference to an identifier such as a name, an identification
                    number, location data, online identifier, or to one or more
                    factors specific to the physical, physiological, genetic,
                    mental, economic, cultural, or social identity of that
                    natural person.
                  </p>
                </div>

                {/* // part over // */}

                <div className="principle_gdpr" name="data-11">
                  <div className="cnt_name">The Principles of the GDPR</div>
                  <p>The Data Protection Principles</p>
                  <p>
                    This Policy aims to ensure compliance with the GDPR. The
                    GDPR sets out the following principles with which any party
                    handling personal data must comply. All personal data must
                    be :
                  </p>
                  <p>
                    I. Processed lawfully, fairly, and in a transparent manner
                    in relation to the data subject.
                  </p>
                  <p>
                    II. Collected for specified, explicit and legitimate
                    purposes and not further processed in a manner that is
                    incompatible with those purposes. Further processing for
                    archiving purposes in the public interest, or for historical
                    research or statistical purposes will not be considered to
                    be incompatible with the initial purposes.
                  </p>
                  <p>
                    III. Adequate, relevant, and limited to what is necessary in
                    relation to the purposes for which it is processed.
                  </p>
                  <p>
                    IV. Accurate and, where necessary, kept up to date. Every
                    reasonable step must be taken to ensure that personal data
                    that is inaccurate, having regard to the purposes for which
                    it is processed, is erased or rectified without delay.
                  </p>
                  <p>
                    V. Kept in a form which permits identification of data
                    subjects for no longer than is necessary for the purposes
                    for which the personal data is processed. Personal data may
                    be stored for longer periods insofar as the personal data
                    will be processed solely for archiving purposes in the
                    public interest, or for historical research or statistical
                    purposes, subject to implementation of the appropriate
                    technical and organisational measures required by the GDPR
                    in order to safeguard the rights and freedoms of the data
                    subject.
                  </p>
                  <p>
                    VI. Processed in a manner that ensures appropriate security
                    of the personal data, including protection against
                    unauthorised or unlawful processing and against accidental
                    loss, destruction, or damage, using appropriate technical or
                    organisational measures.
                  </p>
                </div>

                {/* // part over // */}

                <div className="contact" name="data-12">
                  <div className="cnt_name">Contact us</div>
                  <p>
                    If you have any queries about our Site or this Privacy
                    Policy, please contact our Data Protection Officer:
                  </p>
                  <p>
                    By emails at
                    <span className="green">
                      {" "}
                      : support@fusionkitchen.co.uk
                    </span>
                  </p>
                  <p>
                    By writing to us at: IF28, Threefield House, Threefiled
                    Lane, Southampton, SO14 3LP, UK
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // mobile view starts // */}

      <section className="mobile_view">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="line">
                <h6 className="content_heading">Privacy Policy and GDPR</h6>
                <div className="sample_line"></div>
              </div>
              <div className="sub">
                Fusion Kitchen - Privacy Policy and GDPR
              </div>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span className="number">1</span>
                    <span className="label">Introduction</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      This privacy policy sets out how Fusion Kitchen uses and
                      protects any information that you give, when you use this
                      website.
                    </p>
                    <p>
                      Fusion Kitchen is committed to ensuring that your privacy
                      is protected. We ask you to provide certain information by
                      which you can be identified when using this website, and
                      then you can be assured that it will only be used in
                      accordance with this Privacy Statement describe below
                      (25th May 2018 General Data Protection Regulation).
                    </p>{" "}
                    <p>
                      This Policy sets out the obligations of Fusions Kitchen
                      LTD, a company registered in England and Wales under
                      number 13460168, whose registered office is at IF28,
                      Threefield House, Threefiled Lane, Southampton, SO14 3LP,
                      UK (“the Company/we/us/our”) regarding data protection and
                      the rights of clients, prospective clients, clients’
                      customers, business contacts, employees and subcontractors
                      (“data subjects”) in respect of their personal data under
                      the EU General Data Protection Regulation.
                    </p>
                    <p>
                      The GDPR defines “personal data” as any information
                      relating to an identified or identifiable natural person
                      (a “data subject”); an identifiable natural person is one
                      who can be identified, directly or indirectly, in
                      particular by reference to an identifier such as a name,
                      an identification number, location data, online
                      identifier, or to one or more factors specific to the
                      physical, physiological, genetic, mental, economic,
                      cultural, or social identity of that natural person.
                    </p>{" "}
                    <p>
                      This Policy sets our obligations regarding the collection,
                      processing, transfer, storage, and disposal of personal
                      data. The procedures and principles set out in this Policy
                      must be followed at all times by the Company and our
                      employees, agents, sub-contractors, or other parties
                      working on our behalf.
                    </p>
                    <p>
                      We are committed not only to the letter of the law, but
                      also to the spirit of the law and we place a high
                      importance on the correct, lawful, and fair handling of
                      all personal data, respecting the legal rights, privacy,
                      and trust of all individuals with whom we deal.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span className="number">2</span>
                    <span className="label">GDPR Principles</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    {" "}
                    <p>
                      1.Compliance and Reliability comes first when it comes to
                      your confidential information
                    </p>
                    <p>2.GDPR & ICO - Think Privacy!</p>
                    <p>
                      3.Relax in knowing that your confidential information is
                      kept Safe and Secure
                    </p>
                    <p>4.Our Policy - Lawfulness, Fairness, and Transparency</p>
                    <p>
                      5.100% transparent processing, (we will always be clear as
                      to why data is being collected and what it will be used
                      for)
                    </p>
                    <p>
                      6.Accountability and Liability - taking every step to
                      ensure that you is protected
                    </p>
                    <p>
                      7.Two Factor Authentication - taking the extra mile to
                      ensure your data stays secure
                    </p>
                    <p>
                      8.Consent matters - explicit consent must be provided
                      before any information is shared
                    </p>
                    <p>
                      9.Data Protection Officer in place to make sure your
                      information stays as your information
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span className="number">3</span>
                    <span className="label">The Rights of Data Subjects</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      The GDPR sets out the following rights applicable to data
                      subjects (please refer to the parts of this policy
                      indicated for further details)
                    </p>
                    <p>I. The right to be informed (clause 12)</p>
                    <p>II. The right of access (clause 13)</p>
                    <p>III. The right to rectification (clause 14)</p>
                    <p>
                      IV. The right to erasure (also known as the ‘right to be
                      forgotten’) (clause 15)
                    </p>
                    <p>V. The right to restrict processing (clause 16)</p>
                    <p>VI. The right to data portability (clause 17)</p>
                    <p>VII. The right to object (clause 18)</p>
                    <p>
                      VIII. Rights with respect to automated decision-making and
                      profiling (clause 19 and 20)
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <span className="number">4</span>
                    <span className="label">How we deal with data</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <h6 className="sub_heading_mobile">
                      Information we collect
                    </h6>
                    <p>
                      In certain circumstances, we may be required to process
                      clients’ customer data directly. We collect and process
                      the following personal data in order for us to provide our
                      services
                    </p>
                    <p>I. Name</p>
                    <p>
                      II. Contact information including email address, postal
                      address and telephone number(s)
                    </p>
                    <p>III. Delivery address</p>

                    <h6 className="sub_heading_mobile">
                      Information We Collect Automatically
                    </h6>

                    <p>
                      We may receive and store certain information about you and
                      your device(s) automatically when you use our Site and
                      Services
                    </p>
                    <p>
                      1. Information related to the device you use to ingress
                      our Services.
                    </p>
                    <p>
                      2. The type of web browser and operating system you use to
                      access our Services.
                    </p>
                    <p>3. The domain name of your Internet service provider.</p>
                    <p>
                      4. The Fusion Kitchen pages you visit, content you view,
                      features you use and the date and time of your visits.
                    </p>
                    <p>
                      5. Your search terms, the website you visited before you
                      came to our Services, and other clickstream data.
                    </p>
                    <p>
                      We will ensure that the following measures are taken with
                      respect to the storage of personal data :
                    </p>
                    <p>
                      I. All electronic copies of personal data will be stored
                      securely using passwords and data encryption.
                    </p>
                    <p>
                      II. All hardcopies of personal data, along with any
                      electronic copies stored on physical, removable media will
                      be stored securely in a locked box, drawer, cabinet, or
                      similar.
                    </p>
                    <p>
                      III. All personal data stored electronically will be
                      backed up regularly (normally daily) with back-up stored
                      offsite. All back-ups should be encrypted.
                    </p>
                    <p>
                      IV. No personal data will be stored on any mobile device
                      (including, but not limited to, laptops, tablets, and
                      smartphones), whether such device belongs to us or
                      otherwise without the formal written approval of the Data
                      Protection Officer and, in the event of such approval,
                      strictly in accordance with all instructions and
                      limitations described at the time the approval is given,
                      and for no longer than is absolutely necessary.
                    </p>
                    <p>
                      V. No personal data will be transferred to any device
                      personally belonging to an employee and personal data may
                      only be transferred to devices belonging to agents,
                      contractors, or other parties working on our behalf where
                      the party in question has agreed to comply fully with the
                      letter and spirit of this Policy and of the GDPR (which
                      may include demonstrating to us that all suitable
                      technical and organisational measures have been taken).
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <span className="number">5</span>
                    <span className="label">Data Security – Disposal</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      When any personal data is to be erased or otherwise
                      disposed of for any reason (including where copies have
                      been made and are no longer needed), it should be securely
                      deleted and disposed of.
                    </p>
                    <p>
                      We may at any point not disclose any of your personal
                      information and your card details to any of the other
                      entities or groups of companies. You with huge trust and
                      belief have disclosed all of your information on your card
                      and personal entities shall not be leaked without any
                      consent.
                    </p>
                    <p>
                      This policy in turn may lead you to feel free to share
                      your information for all of our transactions in order to
                      proceed with the requirements/ordering with us through any
                      mode of payment.
                    </p>
                    <p>
                      In case of any misleads from your stand to have your card
                      details to get disclosed to any other entities, Fusion
                      Kitchen is not viably responsible in any terms and
                      disclosures occurring further.
                    </p>
                    <p>
                      For any request for data deletion, Please send us a
                      request email at :
                      <span className="green">support@fusionkitchen.co.uk</span>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    <span className="number">6</span>
                    <span className="label">Organisational Measures</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      We will ensure that the following measures are taken with
                      respect to the collection, holding, and processing of
                      personal data:
                    </p>
                    <p>
                      I. All employees, agents, contractors, or other parties
                      working on our behalf and handling personal data will be.
                    </p>
                    <p>
                      1. made fully aware of both their individual
                      responsibilities and the Company’s responsibilities under
                      the GDPR and under this Policy, and shall be provided with
                      a copy of this Policy.
                    </p>
                    <p>2. appropriately supervised and trained to do so.</p>
                    <p>
                      3. required and encouraged to exercise care, caution, and
                      discretion when discussing work-related matters that
                      relate to personal data, whether in the workplace or
                      otherwise.
                    </p>
                    <p>
                      4. bound to do so in accordance with the principles of the
                      GDPR and this Policy by contract.
                    </p>
                    <p>
                      II. Only employees, agents, sub-contractors, or other
                      parties working on our behalf that need access to, and use
                      of, personal data in order to carry out their assigned
                      duties correctly will have access to the personal data
                      held by us.
                    </p>
                    <p>
                      III. Methods of collecting, holding, and processing
                      personal data will be regularly evaluated and reviewed.
                    </p>
                    <p>
                      IV. The performance of those employees, agents,
                      contractors, or other parties working on our behalf
                      handling personal data will be regularly evaluated and
                      reviewed.
                    </p>
                    <p>
                      V. All agents, contractors, or other parties working on
                      our behalf handling personal data must ensure that any and
                      all of their employees who are involved in the processing
                      of personal data are held to the same conditions as those
                      relevant employees of ours arising out of this Policy and
                      the GDPR.
                    </p>
                    <p>
                      VI. Where any agent, contractor or other party working on
                      our behalf handling personal data fails in their
                      obligations under this Policy, that party shall indemnify
                      and hold us harmless against any costs, liability,
                      damages, loss, claims or proceedings which may arise out
                      of that failure.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    <span className="number">7</span>
                    <span className="label">Data Retention</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      We will retain your personal information as long as your
                      account is active with Fusion Kitchen or as an action of
                      services for you and to maintain a record of your
                      transactions for financial reporting. We will retain your
                      personal information as necessary to follow with our legal
                      commitment, resolve disputes, and implement our agreements
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    <span className="number">8</span>
                    <span className="label">Country Outside the EEA</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      I. We may from time to time transfer (‘transfer’ includes
                      making available remotely) personal data to countries
                      outside of the EEA
                    </p>
                    <p>
                      II. The transfer of personal data to a country outside of
                      the EEA will take place only if one or more of the
                      following applies
                    </p>
                    <p>
                      1. The transfer is to a country, territory, or one or more
                      specific sectors in that country (or an international
                      organisation), that the European Commission has determined
                      ensures an adequate level of protection for personal data.
                    </p>
                    <p>
                      2. The transfer is to a country (or international
                      organisation) which provides appropriate safeguards in the
                      form of a legally binding agreement between public
                      authorities or bodies; binding corporate rules; standard
                      data protection clauses adopted by the European
                      Commission; compliance with an approved code of conduct
                      approved by the supervisory authority (e.g. the
                      Information Commissioner’s Office); certification under an
                      approved certification mechanism (as provided for in the
                      GDPR); contractual clauses agreed and authorised by the
                      competent supervisory authority; or provisions inserted
                      into administrative arrangements between public
                      authorities or bodies authorised by the competent
                      supervisory authority.
                    </p>
                    <p>
                      3. The transfer is made with the informed consent of the
                      relevant data subject(s).
                    </p>
                    <p>
                      4. The transfer is necessary for the performance of a
                      contract between us and the data subject (or for
                      pre-contractual steps taken at the request of the data
                      subject).
                    </p>
                    <p>
                      5. The transfer is necessary for important public interest
                      reasons.
                    </p>

                    <p>
                      6. The transfer is necessary for the conduct of legal
                      claims.
                    </p>

                    <p>
                      7. The transfer is necessary to protect the vital
                      interests of the data subject or other individuals where
                      the data subject is physically or legally unable to give
                      their consent.
                    </p>

                    <p>
                      8. The transfer is made from a register that, under UK or
                      EU law, is intended to provide information to the public
                      and which is open for access by the public in general or
                      otherwise to those who are able to show a legitimate
                      interest in accessing the register.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="8">
                  <Accordion.Header>
                    <span className="number">9</span>
                    <span className="label">Changes to Our Privacy Policy</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Privacy and policy may upgrade from time to time in a
                      reaction of law changes, technical or business
                      developments changes. We hold the right to update or amend
                      this Privacy Statement at any time without foregoing
                      notice. You agree to be bound by the revised Privacy
                      Policy. If you object to any changes you must terminate
                      using our site. We recommend that you check this page
                      regularly to keep up-to-date.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="9">
                  <Accordion.Header>
                    <span className="number">10</span>
                    <span className="label">GDPR</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      The GDPR defines “personal data” as any information
                      relating to an identified or identifiable natural person
                      (a “data subject”); an identifiable natural person is one
                      who can be identified, directly or indirectly, in
                      particular by reference to an identifier such as a name,
                      an identification number, location data, online
                      identifier, or to one or more factors specific to the
                      physical, physiological, genetic, mental, economic,
                      cultural, or social identity of that natural person.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="10">
                  <Accordion.Header>
                    <span className="number">11</span>
                    <span className="label">The Principles of the GDPR</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>The Data Protection Principles</p>
                    <p>
                      This Policy aims to ensure compliance with the GDPR. The
                      GDPR sets out the following principles with which any
                      party handling personal data must comply. All personal
                      data must be :
                    </p>
                    <p>
                      I. Processed lawfully, fairly, and in a transparent manner
                      in relation to the data subject.
                    </p>
                    <p>
                      II. Collected for specified, explicit and legitimate
                      purposes and not further processed in a manner that is
                      incompatible with those purposes. Further processing for
                      archiving purposes in the public interest, or for
                      historical research or statistical purposes will not be
                      considered to be incompatible with the initial purposes.
                    </p>
                    <p>
                      III. Adequate, relevant, and limited to what is necessary
                      in relation to the purposes for which it is processed.
                    </p>
                    <p>
                      IV. Accurate and, where necessary, kept up to date. Every
                      reasonable step must be taken to ensure that personal data
                      that is inaccurate, having regard to the purposes for
                      which it is processed, is erased or rectified without
                      delay.
                    </p>
                    <p>
                      V. Kept in a form which permits identification of data
                      subjects for no longer than is necessary for the purposes
                      for which the personal data is processed. Personal data
                      may be stored for longer periods insofar as the personal
                      data will be processed solely for archiving purposes in
                      the public interest, or for historical research or
                      statistical purposes, subject to implementation of the
                      appropriate technical and organisational measures required
                      by the GDPR in order to safeguard the rights and freedoms
                      of the data subject.
                    </p>
                    <p>
                      VI. Processed in a manner that ensures appropriate
                      security of the personal data, including protection
                      against unauthorised or unlawful processing and against
                      accidental loss, destruction, or damage, using appropriate
                      technical or organisational measures.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="11">
                  <Accordion.Header>
                    <span className="number">12</span>
                    <span className="label">Contact us</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      If you have any queries about our Site or this Privacy
                      Policy, please contact our Data Protection Officer:
                    </p>
                    <p>
                      By emails at: <span>support@fusionkitchen.co.uk</span>
                    </p>
                    <p>
                      By writing to us at: IF28, Threefield House, Threefiled
                      Lane, Southampton, SO14 3LP, UK
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Policyprivacy;
