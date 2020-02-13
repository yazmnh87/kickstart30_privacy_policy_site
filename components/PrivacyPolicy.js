import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction:column;
  height:50vh;

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    color: #001f5f;
    margin: auto;
  }

  p{
    font-family: Arial, Helvetica, sans-serif;
      max-width: 80%;
      margin:auto;
  }
`;

export const PrivacyPolicy = props => {
  return (
    <Container>
      <h1>Privacy Policy</h1>
      <p>
        WILD 5 Wellness/KickStart30/WILD 5 Wellness/KickStart30 (us, we, or
        our) operates this app. This page informs you of our policies regarding
        the collection, use, and disclosure of Personal Information we receive
        from users of the Site. We use your Personal Information only for
        providing and improving the Site. By using the Site, you agree to the
        collection and use of information in accordance with this policy.
        Information Collection and Use: while using our Site, we may ask you to
        provide us with certain personally identifiable information that can be
        used to contact or identify you. Personally identifiable information may
        include, but is not limited to, your name, age, email address, birth
        date, location, date and time stamp info of use, and other information
        that may be considered Personal Information. Log Data: like many site
        operators, we collect information that your browser sends whenever you
        visit our Site. This Log Data may include information such as your
        computer's Internet Protocol address, browser type, browser version, the
        pages of our Site that you visit, the time and date of your visit, the
        time spent on those pages and other statistics. In addition, we may use
        third party services such as Communications: we may use your Personal
        Information to contact you with newsletters, marketing or promotional
        materials and other information that may improve your experience. While
        we strive to use commercially acceptable means to protect your Personal
        Information, we cannot guarantee its absolute security. We reserve the
        right to update or change our Privacy Policy at any time and you should
        check this Privacy Policy periodically. Your continued use of the
        Service after we post any modifications to the Privacy Policy on this
        page will constitute your acknowledgment of the modifications and your
        consent to abide and be bound by the modified Privacy Policy. If we make
        any material changes to this Privacy Policy, we will notify you either
        through the email address you have provided us or by placing a prominent
        notice on our website. Contact Us If you have any questions about this
        Privacy Policy at DrJain@WILD5Wellness.com.
      </p>
    </Container>
  );
};
